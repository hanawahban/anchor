import re

CURRICULUM_MAP = {
    "mexico": {
        "gap": "The main gap is English academic vocabulary, not academic content. Your child likely knows the material—they need language support, not academic remediation.",
        "risk_level": "medium",
        "grade_offset": 0,
    },
    "syria": {
        "gap": "The gap is English literacy and US-specific history. Your child is likely academically strong in STEM subjects.",
        "risk_level": "low",
        "grade_offset": 1,
    },
    "brazil": {
        "gap": "English language and US academic writing conventions are the main gaps. Academic content knowledge is solid.",
        "risk_level": "medium",
        "grade_offset": 0,
    },
    "nigeria": {
        "gap": "Curriculum terminology differs but knowledge is strong. Language is the barrier, not ability.",
        "risk_level": "low",
        "grade_offset": 1,
    },
    "india": {
        "gap": "US history, civics, and American English writing are the main gaps. STEM knowledge is typically strong.",
        "risk_level": "low",
        "grade_offset": 1,
    },
    "ethiopia": {
        "gap": "English fluency and US academic format are the main adjustments. Academic strength varies by school access.",
        "risk_level": "medium",
        "grade_offset": 0,
    },
    "haiti": {
        "gap": "English language is the primary barrier. French literacy transfers as an asset. Some students may have experienced interrupted schooling.",
        "risk_level": "high",
        "grade_offset": 0,
    },
    "china": {
        "gap": "English language and US humanities subjects are the main gaps. STEM placement should often be above stated grade level.",
        "risk_level": "low",
        "grade_offset": 2,
    },
    "guatemala": {
        "gap": "English language is the primary barrier. Students from rural areas may also have gaps from interrupted schooling.",
        "risk_level": "high",
        "grade_offset": -1,
    },
    "el salvador": {
        "gap": "English language is the main barrier. Academic placement should reflect math ability, not English proficiency.",
        "risk_level": "medium",
        "grade_offset": 0,
    },
    "venezuela": {
        "gap": "English language and US academic writing are the main adjustments needed. Academic content is strong.",
        "risk_level": "medium",
        "grade_offset": 0,
    },
    "philippines": {
        "gap": "Minimal academic gap. Main adjustment is American cultural context in social studies and US history.",
        "risk_level": "low",
        "grade_offset": 0,
    },
    "honduras": {
        "gap": "English language is the primary barrier. Rural students may have experienced school access challenges.",
        "risk_level": "high",
        "grade_offset": -1,
    },
    "default": {
        "gap": "Request a full academic evaluation in your child's home language before accepting any grade placement. Language barriers should not determine academic placement.",
        "risk_level": "high",
        "grade_offset": 0,
    },
}


def get_curriculum_gap(country: str, grade: str) -> dict:
    country_lower = country.lower().strip()
    data = CURRICULUM_MAP.get(country_lower, CURRICULUM_MAP["default"])

    match = re.search(r"\d+", grade)
    grade_num = int(match.group()) if match else None
    offset = data.get("grade_offset", 0)

    if grade_num is not None:
        if offset > 0:
            us_eq = f"U.S. Grade {grade_num}–{grade_num + offset} equivalent (may be ahead in some subjects)"
        elif offset < 0:
            adj = max(grade_num + offset, 1)
            us_eq = f"U.S. Grade {adj}–{grade_num} (additional support recommended)"
        else:
            us_eq = f"U.S. Grade {grade_num} with ELL language support"
    else:
        us_eq = "Grade-appropriate with ELL language support"

    return {
        "homeCountry": country,
        "homeGrade": grade,
        "usEquivalent": us_eq,
        "riskLevel": data["risk_level"],
        "notes": data["gap"],
    }
