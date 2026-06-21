# Anchor

**AI-Powered Education Navigation for Immigrant Families**

*"Every child deserves a fair placement. Every parent deserves to know their rights."*

USAII Global AI Hackathon 2026 · Undergraduate Track · Challenge Brief 4: Public Services — Fix Systems People Depend On · Direction A: Benefits Navigator

---

## What Is Anchor?

When an immigrant family arrives in the U.S., their child is typically placed in school by age, not by demonstrated knowledge. Anchor is an AI reasoning system that fixes that.

It detects the curriculum gap between a student's home country education level and their U.S. placement, identifies which federal programs they qualify for (Title I, ESL/ELL, IDEA, Head Start), and generates a plain-language advocacy script for the parent to request a proper assessment — in their native language.

> **Responsible AI:** AI surfaces rights and options only. Parents and school counselors make all placement decisions. Anchor never contacts the school directly.

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   Frontend (React + Vite)               │
│  LanguageSelector → Disclaimer → IntakeWizard           │
│  → ReasoningInterstitial → ResultsPanel + AnchorChat    │
└────────────────────────┬────────────────────────────────┘
                         │ /api/chat  /api/chat/contextual
                         ▼
┌─────────────────────────────────────────────────────────┐
│                    Backend (FastAPI)                    │
│                                                         │
│  ┌─────────────────┐   ┌────────────────────────────┐  │
│  │ Curriculum Gap  │   │  RAG Retriever              │  │
│  │ Classifier      │   │  (LlamaIndex + ChromaDB)    │  │
│  │                 │   │                              │  │
│  │ 12-country map  │   │  schools.json  ← district   │  │
│  │ grade offset    │   │  rights.json   ← federal    │  │
│  │ risk scoring    │   │  tutors.json   ← programs   │  │
│  └────────┬────────┘   └────────────┬───────────────┘  │
│           └──────────────┬──────────┘                   │
│                          ▼                               │
│             Claude Sonnet 4.6 (Anthropic API)           │
│             System prompt + structured JSON output       │
└─────────────────────────────────────────────────────────┘
```

---

## Prerequisites

- Python 3.10+
- Node.js 18+ and npm
- Anthropic API key

---

## Setup & Running

### 1. Clone the repository

```bash
git clone https://github.com/hanawahban/anchor.git
cd anchor
```

### 2. Set your API key

Create a `.env` file inside `backend/`:

```bash
# backend/.env
ANTHROPIC_API_KEY=sk-ant-...
```

### 3. Install dependencies

```bash
npm run setup
```

Installs Python dependencies (`pip install -r backend/requirements.txt`) and frontend packages (`npm install` in `frontend/`).

> First install takes 3–5 minutes — `sentence-transformers` and `torch` are large.

### 4. Build the vector index (optional)

A pre-built `chroma_db/` is included in the repo. To rebuild it after modifying `data/`:

```bash
cd backend
python -m rag.ingest
```

### 5. Run

```bash
npm run dev
```

Starts both servers concurrently:
- **Backend:** `http://localhost:8000`
- **Frontend:** `http://localhost:5173`

Open [http://localhost:5173](http://localhost:5173).

---

## Project Structure

```
anchor/
├── backend/
│   ├── app.py                    # FastAPI routes
│   ├── classifiers/
│   │   └── curriculum_gap.py     # Country → gap analysis + risk scoring
│   ├── data/
│   │   ├── rights.json           # 10 federal rights (IDEA, Title I, ELL...)
│   │   ├── schools.json          # School district data
│   │   └── tutors.json           # Free tutoring platforms by language + subject
│   ├── prompts/
│   │   └── system.py             # Claude system prompt + JSON output schema
│   ├── rag/
│   │   ├── ingest.py             # One-time ChromaDB indexing
│   │   └── retriever.py          # Semantic retrieval
│   └── chroma_db/                # Pre-built vector index
│
└── frontend/
    └── src/
        ├── App.jsx               # Screen state machine
        ├── components/           # LanguageSelector, IntakeWizard, ResultsPanel, AnchorChat...
        ├── translations/
        │   └── translations.js   # All UI strings in 7 languages
        └── utils/
            └── tutorMatcher.js   # Client-side tutor matching
```

---
