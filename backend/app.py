from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import anthropic
import os
from rag.retriever import retrieve_context
from classifiers.curriculum_gap import get_curriculum_gap
from prompts.system import SYSTEM_PROMPT

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: list[Message]
    user_profile: dict = {}

@app.post("/chat")
async def chat(request: ChatRequest):
    profile = request.user_profile
    system = SYSTEM_PROMPT

    # Once profile has enough info, retrieve context and inject it
    if profile.get("district") and profile.get("language") and profile.get("subject"):
        rag_context = retrieve_context(
            district=profile.get("district", ""),
            language=profile.get("language", "English"),
            subject=profile.get("subject", "all"),
            grade=profile.get("grade", "")
        )
        gap = get_curriculum_gap(
            country=profile.get("country", ""),
            grade=profile.get("grade", "")
        )
        system += f"\n\nRELEVANT CONTEXT FROM DATABASE:\n{rag_context}"
        system += f"\n\nCURRICULUM GAP ANALYSIS FOR THIS STUDENT:\n{gap}"

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1500,
        system=system,
        messages=[{"role": m.role, "content": m.content} for m in request.messages]
    )

    return {"response": response.content[0].text}

@app.get("/health")
async def health():
    return {"status": "ok", "message": "Anchor backend is running"}