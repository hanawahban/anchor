from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import anthropic
import os
import json
import re
import traceback
import logging
from typing import Optional

logging.basicConfig(level=logging.INFO)
from rag.retriever import retrieve_context
from classifiers.curriculum_gap import get_curriculum_gap
from prompts.system import SYSTEM_PROMPT

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

_data_dir = os.path.join(os.path.dirname(__file__), "data")

with open(os.path.join(_data_dir, "schools.json")) as f:
    SCHOOLS = {s["district_id"]: s for s in json.load(f)}

with open(os.path.join(_data_dir, "tutors.json")) as f:
    TUTORS = json.load(f)

with open(os.path.join(_data_dir, "rights.json")) as f:
    RIGHTS = json.load(f)

LANGUAGE_NAMES = {
    "en": "English",
    "es": "Spanish",
    "ar": "Arabic",
    "zh": "Chinese",
    "fr": "French",
    "fil": "Filipino",
    "vi": "Vietnamese",
}


class Message(BaseModel):
    role: str
    content: str


class Profile(BaseModel):
    districtId: Optional[str] = None
    homeCountry: Optional[str] = None
    homeGrade: Optional[str] = None
    subject: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None
    districtName: Optional[str] = None


class ChatRequest(BaseModel):
    history: list[Message]
    language: str = "en"
    profile: Profile = Profile()


class ContextualContext(BaseModel):
    homeCountry: Optional[str] = None
    homeGrade: Optional[str] = None
    englishProficiency: Optional[str] = None
    districtName: Optional[str] = None
    state: Optional[str] = None
    concerns: list[str] = []
    programs: list[str] = []
    riskLevel: Optional[str] = None


class ContextualChatRequest(BaseModel):
    history: list[Message]
    context: ContextualContext
    language: str = "en"


class OpeningRequest(BaseModel):
    context: ContextualContext
    programCount: int
    language: str = "en"


def format_district(s: dict) -> dict:
    return {
        "name": s["district_name"],
        "state": s["state"],
        "title1": s["title1_status"],
        "ellProgram": s["ell_program"],
        "ellContact": s["ell_phone"],
        "ellUrl": s["ell_contact_url"],
        "parentRightsUrl": s["parent_rights_url"],
    }


def format_right(r: dict) -> dict:
    return {
        "id": r["right_id"],
        "title": r["title"],
        "law": r["law"],
        "summary": r["plain_language"],
        "whatSchoolsCannotDo": r["what_schools_cannot_do"],
        "action": r["action"],
        "url": r["source_url"],
    }


def format_tutor(t: dict) -> dict:
    return {
        "name": t["platform"],
        "languages": t["languages"],
        "subjects": t["subjects"],
        "format": t["format"],
        "url": t["url"],
        "free": t["free"],
    }


def filter_tutors(subject: Optional[str], language_name: str) -> list:
    scored = []
    for t in TUTORS:
        score = 0
        if subject and any(subject.lower() in s.lower() for s in t["subjects"]):
            score += 2
        if any(language_name.lower() in lang.lower() for lang in t["languages"]):
            score += 1
        scored.append((score, t))
    scored.sort(key=lambda x: -x[0])
    return [format_tutor(t) for _, t in scored[:3]]


def extract_json(text: str) -> dict:
    text = text.strip()
    fence_match = re.search(r"```(?:json)?\s*(.*?)```", text, re.DOTALL)
    if fence_match:
        return json.loads(fence_match.group(1).strip())
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass
    obj_match = re.search(r"\{.*\}", text, re.DOTALL)
    if obj_match:
        return json.loads(obj_match.group())
    raise ValueError("No JSON object found")


def build_results_system(language_name: str, language_code: str, district_data, gap_data, location_hint: str = None) -> str:
    rights_json = json.dumps(
        [format_right(r) for r in RIGHTS], ensure_ascii=False, indent=2
    )
    s = SYSTEM_PROMPT
    s += f"\n\nUSER'S PREFERRED LANGUAGE: {language_name} (code: {language_code}). Always respond in {language_name}."
    s += f"\n\nAVAILABLE RIGHTS DATA (select 2–4 most relevant, write summary/whatSchoolsCannotDo/action in {language_name}):\n{rights_json}"
    if district_data:
        s += f"\n\nDISTRICT:\n{json.dumps(district_data, ensure_ascii=False)}"
    elif location_hint:
        s += f"\n\nLOCATION: Family is in {location_hint}. No specific district data available — still generate full rights and advocacy script referencing this location."
    if gap_data:
        s += f"\n\nCURRICULUM GAP:\n{json.dumps(gap_data, ensure_ascii=False)}"
    s += "\n\n⚡ ALL REQUIRED FIELDS COLLECTED. Respond NOW with the full structured JSON response including rights array and advocacyScript. Do NOT ask any more questions."
    return s


def build_contextual_system(ctx: ContextualContext, language_name: str) -> str:
    programs_str = ", ".join(ctx.programs) if ctx.programs else "ESL/ELL services"
    concerns_str = ", ".join(ctx.concerns) if ctx.concerns else "general support"
    return f"""You are Anchor, an AI assistant helping an immigrant parent understand their child's education rights and support programs in the United States.

The parent completed an intake with these details:
- Home country: {ctx.homeCountry or 'not specified'}
- Grade completed: {ctx.homeGrade or 'not specified'}
- English proficiency: {ctx.englishProficiency or 'not specified'}
- District: {ctx.districtName or 'not specified'}, {ctx.state or ''}
- Areas of concern: {concerns_str}
- Programs found: {programs_str}
- Support level: {ctx.riskLevel or 'not specified'}

You may ONLY answer questions related to:
1. The specific programs listed above
2. The child's rights under U.S. education law (Plyler v. Doe, IDEA, Title III, Title I)
3. What the advocacy script says and how to use it
4. What the parent can say or do at the school meeting
5. General explanations of terms in the results

You must NEVER:
- Confirm the child definitely qualifies for any program (always say "may qualify" or "based on what you shared")
- Give legal advice as a guarantee
- Answer questions unrelated to the child's education navigation
- Contact the school or take any action on the parent's behalf

If asked something outside your scope, respond exactly:
"That's a great question for your school counselor or an education advocate. Would you like me to add it to your advocacy script so you can ask them directly?"

If the parent says yes to adding a question to the script, include this marker on its own line at the very end of your response:
APPEND_TO_SCRIPT:[the question text]

Keep all responses short — 2-4 sentences maximum. Use plain language. Avoid jargon.
Respond in {language_name}."""


@app.post("/api/chat/contextual/opening")
async def contextual_opening(request: OpeningRequest):
    try:
        language_name = LANGUAGE_NAMES.get(request.language, "English")
        ctx = request.context
        prompt = (
            f"Generate a single short, warm greeting (2-3 sentences) in {language_name} "
            f"for a parent in {ctx.districtName or 'their district'}. "
            f"Tell them you are here to help with the {request.programCount} program"
            f"{'s' if request.programCount != 1 else ''} their child may qualify for, "
            f"their child's rights at school, and how to use their advocacy script. "
            f"Invite them to ask anything. "
            f"Do not mention program names. Do not use bullet points. Plain language only."
        )
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=150,
            messages=[{"role": "user", "content": prompt}],
        )
        return {"message": response.content[0].text.strip()}
    except Exception as e:
        logging.error("Opening message error: %s", e)
        return {"message": None}


@app.post("/api/chat/contextual")
async def contextual_chat(request: ContextualChatRequest):
    try:
        language_name = LANGUAGE_NAMES.get(request.language, "English")
        system = build_contextual_system(request.context, language_name)
        messages = [{"role": m.role, "content": m.content} for m in request.history]
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=512,
            system=system,
            messages=messages,
        )
        raw = response.content[0].text.strip()
        append_to_script = None
        if "APPEND_TO_SCRIPT:" in raw:
            parts = raw.split("APPEND_TO_SCRIPT:", 1)
            raw = parts[0].strip()
            append_to_script = parts[1].strip().lstrip('[').rstrip(']')
        return {"reply": raw, "appendToScript": append_to_script}
    except Exception as e:
        logging.error("Contextual chat error: %s", e)
        return {"reply": "Something went wrong. Please try again.", "appendToScript": None}


@app.post("/api/chat")
async def chat(request: ChatRequest):
    try:
        profile = request.profile
        language_name = LANGUAGE_NAMES.get(request.language, "English")
        logging.info("INCOMING profile=%s has_dist=%s has_country=%s has_grade=%s msgs=%d",
                     profile, bool(profile.districtId), bool(profile.homeCountry), bool(profile.homeGrade), len(request.history))

        has_full_profile = bool(
            profile.districtId and profile.homeCountry and profile.homeGrade
        )

        district_data = None
        gap_data = None
        tutor_data = filter_tutors(profile.subject, language_name)

        if profile.districtId and profile.districtId in SCHOOLS:
            district_data = format_district(SCHOOLS[profile.districtId])
        if profile.homeCountry and profile.homeGrade:
            gap_data = get_curriculum_gap(profile.homeCountry, profile.homeGrade)

        # Build system prompt for first call
        if has_full_profile:
            location_hint = None
            if not district_data:
                parts = [p for p in [profile.city, profile.state] if p]
                if not parts and profile.districtName:
                    parts = [profile.districtName]
                location_hint = ", ".join(parts) if parts else None
            system = build_results_system(language_name, request.language, district_data, gap_data, location_hint)
        else:
            system = SYSTEM_PROMPT
            system += f"\n\nUSER'S PREFERRED LANGUAGE: {language_name} (code: {request.language}). Always respond in {language_name}."

        messages = [{"role": m.role, "content": m.content} for m in request.history]

        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=4096,
            system=system,
            messages=messages,
        )

        raw = response.content[0].text
        try:
            parsed = extract_json(raw)
            reply = parsed.get("reply", "")
            claude_structured = parsed.get("structured")
            profile_update = parsed.get("profileUpdate", {})
        except (json.JSONDecodeError, ValueError):
            reply = raw
            claude_structured = None
            profile_update = {}

        if not reply:
            reply = "I'm here to help. Could you share a bit more?"

        # Retry: if we had a full profile but Claude failed to return structured JSON
        # on the first call (parse error or model hallucination), retry with same system.
        if claude_structured is None and has_full_profile:
            try:
                response_retry = client.messages.create(
                    model="claude-sonnet-4-6",
                    max_tokens=4096,
                    system=system,
                    messages=messages,
                )
                parsed_retry = extract_json(response_retry.content[0].text)
                claude_structured = parsed_retry.get("structured")
                if parsed_retry.get("reply"):
                    reply = parsed_retry["reply"]
            except Exception:
                pass

        # Second-call path: profile was incomplete on first call but profileUpdate now
        # provides enough data — make a second call with full rights data so results
        # appear on THIS turn instead of requiring an extra user message.
        if claude_structured is None and not has_full_profile:
            merged_district = (
                profile_update.get("districtId") or
                profile_update.get("usDistrict") or
                profile.districtId
            )
            merged_country  = profile_update.get("homeCountry") or profile.homeCountry
            merged_grade    = profile_update.get("homeGrade")   or profile.homeGrade
            merged_subject  = profile_update.get("subject")     or profile.subject
            # location_provided: any location signal (known district OR city/state for unknown districts)
            merged_city  = profile_update.get("usCity") or profile_update.get("city")
            merged_state = profile_update.get("usState") or profile_update.get("state")
            location_provided = merged_district or merged_city or merged_state or profile.districtId

            if location_provided and merged_country and merged_grade:
                # Recompute data with merged profile
                if merged_district and merged_district in SCHOOLS:
                    district_data = format_district(SCHOOLS[merged_district])
                gap_data   = get_curriculum_gap(merged_country, merged_grade)
                tutor_data = filter_tutors(merged_subject, language_name)

                location_hint = None
                if not district_data:
                    parts = [p for p in [merged_city, merged_state] if p]
                    location_hint = ", ".join(parts) if parts else None

                system2 = build_results_system(
                    language_name, request.language, district_data, gap_data, location_hint
                )
                messages2 = messages + [
                    {"role": "assistant", "content": reply},
                    {"role": "user",      "content": "Please show me my child's rights and the resources now."},
                ]
                response2 = client.messages.create(
                    model="claude-sonnet-4-6",
                    max_tokens=4096,
                    system=system2,
                    messages=messages2,
                )
                try:
                    parsed2 = extract_json(response2.content[0].text)
                    claude_structured = parsed2.get("structured")
                    if parsed2.get("reply"):
                        reply = parsed2["reply"]
                except (json.JSONDecodeError, ValueError):
                    pass

                has_full_profile = True  # data is now ready

        final_structured = None
        if claude_structured is not None and has_full_profile:
            final_structured = {
                "district": district_data,
                "curriculumGap": gap_data,
                "tutors": tutor_data,
                "rights": claude_structured.get("rights", [format_right(r) for r in RIGHTS]),
                "advocacyScript": claude_structured.get("advocacyScript"),
            }

        logging.info("RETURNING structured=%s profileUpdate=%s", bool(final_structured), profile_update)
        return {
            "reply": reply,
            "structured": final_structured,
            "profileUpdate": profile_update,
        }
    except anthropic.APIStatusError as e:
        logging.error("Anthropic API error: %s", e)
        return {"reply": "I'm having trouble connecting right now. Please try again in a moment.", "structured": None, "profileUpdate": {}}
    except Exception as e:
        logging.error("Unhandled exception: %s\n%s", e, traceback.format_exc())
        return {"reply": "Something went wrong. Please try again.", "structured": None, "profileUpdate": {}}


@app.get("/health")
async def health():
    return {"status": "ok", "message": "Anchor backend is running"}
