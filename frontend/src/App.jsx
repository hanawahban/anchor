import { useState, useEffect } from 'react'
import translations from './translations/translations.js'
import LanguageSelector from './components/LanguageSelector.jsx'
import Disclaimer from './components/Disclaimer.jsx'
import IntakeWizard from './components/IntakeWizard.jsx'
import ReasoningInterstitial from './components/ReasoningInterstitial.jsx'
import ResultsPanel from './components/ResultsPanel.jsx'

const ELL_IDS = new Set(['lau', 'ell', 'esl', 'lau-nichols', 'title-iii', 'titleiii'])
const ELL_TITLE_KEYWORDS = ['language support', 'ell', 'esl', 'english learner', 'bilingual']

function isEllRight(r) {
  if (ELL_IDS.has((r.id || '').toLowerCase())) return true
  const titleLower = (r.title || '').toLowerCase()
  return ELL_TITLE_KEYWORDS.some(kw => titleLower.includes(kw))
}

const ELL_PHRASE_RE = /\s*with\s+(?:ell(?:\s+language)?|esl|english\s+language(?:\s+learner)?|language(?:\s+learner)?)\s+support/gi
const ELL_SENTENCE_RE = /\b(ell|esl|english language learner|language support|ell assessment|bilingual support)\b/i

function stripEllSentences(text) {
  if (!text) return text
  return text
    .split(/(?<=[.!?])\s+/)
    .filter(sentence => !ELL_SENTENCE_RE.test(sentence))
    .join(' ')
    .trim() || text
}

function applyProficiencyFilter(structured, englishProficiency) {
  if (!structured || !englishProficiency || englishProficiency === 'NONE') return structured

  if (englishProficiency === 'FLUENT') {
    const filteredRights = (structured.rights || []).filter(r => !isEllRight(r))
    const curriculumGap = structured.curriculumGap ? {
      ...structured.curriculumGap,
      usEquivalent: (structured.curriculumGap.usEquivalent || '')
        .replace(ELL_PHRASE_RE, '')
        .trim(),
      notes: stripEllSentences(structured.curriculumGap.notes),
    } : structured.curriculumGap
    return { ...structured, rights: filteredRights, curriculumGap }
  }

  if (englishProficiency === 'SOME') {
    const modifiedRights = (structured.rights || []).map(r => {
      if (!isEllRight(r)) return r
      return {
        ...r,
        summary: 'Your child may benefit from ELL support during the transition. A school assessment will determine the right level.',
      }
    })
    const curriculumGap = structured.curriculumGap ? {
      ...structured.curriculumGap,
      notes: (structured.curriculumGap.notes || '') +
        '\n\nSome language support may help during the transition as your child adjusts to English instruction.',
    } : structured.curriculumGap
    return { ...structured, rights: modifiedRights, curriculumGap }
  }

  return structured
}

export default function App() {
  const [screen, setScreen]       = useState('language')
  const [language, setLanguage]   = useState('en')
  const [mainPhase, setMainPhase] = useState('intake')   // 'intake' | 'analyzing' | 'results'
  const [intakeData, setIntakeData] = useState(null)
  const [structured, setStructured] = useState(null)
  const [resourceMatches, setResourceMatches] = useState(null)
  const [analysisError, setAnalysisError] = useState(false)

  const t = translations[language] || translations.en

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  function handleIntakeComplete(formData) {
    setIntakeData(formData)
    setMainPhase('analyzing')
  }

  function handleAnalysisDone(result, matches) {
    if (result && result.structured) {
      setStructured(applyProficiencyFilter(result.structured, intakeData?.englishProficiency))
      setResourceMatches(matches || null)
      setAnalysisError(false)
    } else {
      setAnalysisError(true)
    }
    setMainPhase('results')
  }

  function handleStartOver() {
    setMainPhase('intake')
    setIntakeData(null)
    setStructured(null)
    setResourceMatches(null)
    setAnalysisError(false)
  }

  if (screen === 'language') {
    return (
      <LanguageSelector
        language={language}
        onSelect={setLanguage}
        onContinue={() => setScreen('disclaimer')}
        t={t}
      />
    )
  }

  if (screen === 'disclaimer') {
    return (
      <Disclaimer
        language={language}
        onAccept={() => setScreen('main')}
        t={t}
      />
    )
  }

  // ── main screen ─────────────────────────────────────────────────────────────

  if (mainPhase === 'intake') {
    return (
      <IntakeWizard
        language={language}
        onLanguageChange={setLanguage}
        onComplete={handleIntakeComplete}
        t={t}
      />
    )
  }

  if (mainPhase === 'analyzing') {
    return (
      <ReasoningInterstitial
        intakeData={intakeData}
        t={t}
        onComplete={handleAnalysisDone}
      />
    )
  }

  // mainPhase === 'results'
  return (
    <>
      <style>{`
        .app-results-layout {
          display: flex;
          height: 100dvh;
          height: 100vh;
          overflow: hidden;
          background: var(--color-bg);
        }
        .app-sidebar {
          width: 220px;
          min-width: 180px;
          flex-shrink: 0;
          border-right: 1px solid var(--color-border);
          background: var(--color-surface);
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1.25rem;
          gap: 1.25rem;
        }
        .app-sidebar-logo {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--color-navy);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .app-sidebar-summary {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0.875rem;
          background: var(--color-surface-warm);
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
        }
        .app-sidebar-row {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .app-sidebar-label {
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-text-muted);
        }
        .app-sidebar-value {
          font-size: 0.82rem;
          color: var(--color-text);
          font-weight: 500;
          line-height: 1.3;
        }
        .app-sidebar-start-over {
          margin-top: auto;
          padding: 0.7rem 1rem;
          border: 1.5px solid var(--color-border-strong);
          border-radius: var(--radius-sm);
          background: transparent;
          color: var(--color-text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: color var(--transition-fast), border-color var(--transition-fast);
          text-align: center;
        }
        .app-sidebar-start-over:hover {
          color: var(--color-navy);
          border-color: var(--color-navy);
        }
        .app-results-col {
          flex: 1;
          overflow-y: auto;
          min-width: 0;
        }
        @media (max-width: 768px) {
          .app-results-layout {
            flex-direction: column;
          }
          .app-sidebar {
            width: 100%;
            min-width: 0;
            flex-direction: row;
            align-items: center;
            padding: 0.75rem 1rem;
            border-right: none;
            border-bottom: 1px solid var(--color-border);
            gap: 0.75rem;
            flex-shrink: 0;
          }
          .app-sidebar-logo { flex-shrink: 0; }
          .app-sidebar-summary { flex: 1; flex-direction: row; flex-wrap: wrap; gap: 0.4rem; }
          .app-sidebar-start-over { margin-top: 0; white-space: nowrap; flex-shrink: 0; }
          .app-results-col { flex: 1; }
        }
      `}</style>
      <div className="app-results-layout">
        <aside className="app-sidebar">
          <div className="app-sidebar-logo">
            <span aria-hidden="true">⚓</span> Anchor
          </div>
          {intakeData && (
            <div className="app-sidebar-summary">
              {intakeData.homeCountry && (
                <div className="app-sidebar-row">
                  <span className="app-sidebar-label">{t.wizard.summary.country}</span>
                  <span className="app-sidebar-value">{intakeData.homeCountry}</span>
                </div>
              )}
              {intakeData.homeGrade && (
                <div className="app-sidebar-row">
                  <span className="app-sidebar-label">{t.wizard.summary.grade}</span>
                  <span className="app-sidebar-value">{intakeData.homeGrade}</span>
                </div>
              )}
              {intakeData.englishProficiency && (
                <div className="app-sidebar-row">
                  <span className="app-sidebar-label">{t.wizard.summary.englishProficiency}</span>
                  <span className="app-sidebar-value">
                    {t.wizard.summary.englishProficiencyValues[intakeData.englishProficiency]}
                  </span>
                </div>
              )}
              {intakeData.district && (
                <div className="app-sidebar-row">
                  <span className="app-sidebar-label">{t.wizard.summary.district}</span>
                  <span className="app-sidebar-value">{intakeData.district}</span>
                </div>
              )}
              <div className="app-sidebar-row">
                <span className="app-sidebar-label">{t.wizard.summary.concerns}</span>
                <span className="app-sidebar-value">
                  {intakeData.concerns && intakeData.concerns.length > 0
                    ? intakeData.concerns.map(k => k.charAt(0).toUpperCase() + k.slice(1)).join(', ')
                    : t.wizard.summary.none || 'All subjects'}
                </span>
              </div>
            </div>
          )}
          <button className="app-sidebar-start-over" onClick={handleStartOver}>
            ↩ {t.wizard.startOver}
          </button>
        </aside>

        <div className="app-results-col">
          <ResultsPanel
            structured={structured}
            intakeData={intakeData}
            language={language}
            t={t}
            analysisError={analysisError}
            resourceMatches={resourceMatches}
            onRetry={() => {
              setAnalysisError(false)
              setStructured(null)
              setResourceMatches(null)
              setMainPhase('analyzing')
            }}
          />
        </div>
      </div>
    </>
  )
}
