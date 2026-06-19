CURRICULUM_MAP = {
    "mexico": {
        "math_notes": "Mexican curriculum (SEP) is rigorous in math. Students are often placed below their level due to language barriers, not lack of knowledge.",
        "science_notes": "Strong alignment with US science standards through grade 8.",
        "gap": "The main gap is English academic vocabulary, not content knowledge. Your child likely knows the material already."
    },
    "syria": {
        "math_notes": "Syrian curriculum is advanced in math and sciences. Grade 6 in Syria is roughly equivalent to US Grade 7-8 in math.",
        "science_notes": "Strong physics and chemistry foundation from early grades.",
        "gap": "The gap is English literacy and US-specific history and social studies, not STEM subjects."
    },
    "brazil": {
        "math_notes": "Brazilian curriculum is well aligned with US standards through middle school.",
        "science_notes": "Strong natural sciences foundation.",
        "gap": "English language and US academic writing conventions are the main gaps."
    },
    "nigeria": {
        "math_notes": "Nigerian curriculum (WAEC) is often more advanced than the US equivalent grade level.",
        "science_notes": "Strong biology and chemistry foundation.",
        "gap": "Curriculum terminology differs but knowledge is strong. Language is the barrier, not ability."
    },
    "india": {
        "math_notes": "Indian curriculum (CBSE/ICSE) is typically 1-2 years ahead of the US in math and sciences.",
        "science_notes": "Very strong STEM alignment, often more advanced than US equivalent grade.",
        "gap": "US history, civics, and American English writing conventions are the main gaps."
    },
    "ethiopia": {
        "math_notes": "Ethiopian curriculum covers core math concepts but may have gaps in advanced topics depending on school access.",
        "science_notes": "Science foundations are solid in urban schools.",
        "gap": "English fluency and US academic format are the main adjustments needed."
    },
    "haiti": {
        "math_notes": "Haitian curriculum is French-based and math-focused. Students are often stronger in math than placement tests suggest.",
        "science_notes": "Science instruction varies significantly by school.",
        "gap": "English language is the primary barrier. French literacy is an asset that transfers."
    },
    "china": {
        "math_notes": "Chinese curriculum is significantly more advanced than US standards in math. A Grade 6 student from China is often at US Grade 8-9 level in math.",
        "science_notes": "Very strong science foundation, especially physics and chemistry.",
        "gap": "English language and US humanities subjects are the main gaps. STEM placement should be above grade level."
    },
    "guatemala": {
        "math_notes": "Guatemalan curriculum (Spanish-based) aligns reasonably with US math standards.",
        "science_notes": "Science instruction varies by school and region.",
        "gap": "English language is the primary barrier. Students from rural areas may also have gaps from interrupted schooling."
    },
    "el salvador": {
        "math_notes": "Salvadoran curriculum is Spanish-based and aligned with US math through middle school.",
        "science_notes": "Basic science foundations are covered.",
        "gap": "English language is the main barrier. Academic placement should reflect math ability, not English proficiency."
    },
    "venezuela": {
        "math_notes": "Venezuelan curriculum is strong in math and sciences historically.",
        "science_notes": "Good science foundations, particularly in biology and chemistry.",
        "gap": "English language and US academic writing are the main adjustments needed."
    },
    "philippines": {
        "math_notes": "Philippine curriculum is English-medium, so transition is smoother. Math standards are comparable to US.",
        "science_notes": "Strong science foundation with English instruction already.",
        "gap": "Minimal academic gap. Main adjustment is American cultural context in social studies."
    },
    "default": {
        "math_notes": "An academic assessment in your child's home language is recommended to determine their true placement level.",
        "science_notes": "Request a native language science assessment to evaluate knowledge independently of English proficiency.",
        "gap": "Request a full academic evaluation in your child's home language before accepting any grade placement decision."
    }
}

def get_curriculum_gap(country: str, grade: str) -> dict:
    country_lower = country.lower().strip()
    data = CURRICULUM_MAP.get(country_lower, CURRICULUM_MAP["default"])
    return {
        "country": country,
        "grade": grade,
        "math_notes": data["math_notes"],
        "science_notes": data["science_notes"],
        "gap_summary": data["gap"],
        "recommendation": f"Request that your child's grade {grade} curriculum from {country} be formally evaluated against US standards in their home language before any final placement decision is made."
    }