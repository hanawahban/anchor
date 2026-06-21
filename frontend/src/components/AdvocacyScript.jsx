import { useState } from 'react'

// CONCERN_KEYS must match IntakeWizard.jsx CONCERN_KEYS (index-aligned with translations concernOptions)
const CONCERN_KEYS = ['math', 'reading', 'science', 'writing', 'english', 'history', 'SAT prep', 'college counseling']

function buildScriptText(baseText, intakeData, t) {
  const concerns = intakeData?.concerns || []
  if (concerns.length === 0) return baseText

  const subjectList = concerns.map(k => k.charAt(0).toUpperCase() + k.slice(1)).join(', ')
  const template = t.results?.scriptSubjectSentence ||
    "We are particularly concerned about [YOUR CHILD'S NAME]'s progress in {subjects} and request that the assessment include evaluation of these areas specifically."
  const subjectSentence = template.replace('{subjects}', subjectList)

  return baseText.trim() + '\n\n' + subjectSentence
}

export default function AdvocacyScript({ script, intakeData, t }) {
  const [copied, setCopied] = useState(false)

  if (!script || !script.text) return null

  const fullText = buildScriptText(script.text, intakeData, t)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(fullText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const el = document.getElementById('advocacy-script-text')
      if (el) {
        const range = document.createRange()
        range.selectNodeContents(el)
        const sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)
      }
    }
  }

  return (
    <>
      <style>{`
        .script-section {
          animation: fadeInUp 0.4s ease 0.15s both;
        }
        .script-heading {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 0.375rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--color-amber);
          display: inline-block;
        }
        .script-subtitle {
          font-size: 0.82rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0.75rem;
          margin-top: 0.5rem;
        }
        .script-hint {
          font-size: 0.8rem;
          font-style: italic;
          color: var(--color-text-muted);
          margin-bottom: 0.75rem;
        }
        .script-box {
          background: #fdf8f0;
          border: 2px solid var(--color-navy);
          border-radius: var(--radius-card);
          padding: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .script-text {
          font-size: 0.875rem;
          color: var(--color-text);
          line-height: 1.7;
          white-space: pre-wrap;
          word-break: break-word;
          font-family: var(--font-body);
        }
        .script-actions {
          display: flex;
          gap: 0.625rem;
          margin-bottom: 0.75rem;
        }
        .script-copy {
          flex: 1;
          padding: 0.75rem;
          border: 2px solid var(--color-navy);
          border-radius: var(--radius-sm);
          background: transparent;
          color: var(--color-navy);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
          font-family: var(--font-body);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }
        .script-copy:hover:not(.copied) {
          background: var(--color-navy);
          color: white;
        }
        .script-copy.copied {
          border-color: var(--color-risk-low);
          color: var(--color-risk-low);
          cursor: default;
        }
        .script-copy:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .script-print {
          padding: 0.75rem 1rem;
          border: 2px solid var(--color-border-strong);
          border-radius: var(--radius-sm);
          background: transparent;
          color: var(--color-text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: border-color var(--transition-fast), color var(--transition-fast);
          font-family: var(--font-body);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .script-print:hover { border-color: var(--color-navy); color: var(--color-navy); }
        .script-print:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .script-footer-note {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          font-style: italic;
          padding: 0.625rem 0.875rem;
          background: var(--color-surface-warm);
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--color-border-strong);
        }
        @media (max-width: 480px) {
          .script-actions { flex-direction: column; }
          .script-print { justify-content: center; }
        }
        @media print {
          body > * { display: none !important; }
          .script-box { display: block !important; }
        }
      `}</style>
      <div className="script-section">
        <div className="script-heading">{t.results.scriptHeading}</div>
        {t.results.scriptSubtitle && (
          <p className="script-subtitle">{t.results.scriptSubtitle}</p>
        )}
        <div className="script-hint">{t.script.hint}</div>
        <div className="script-box">
          <p className="script-text" id="advocacy-script-text">{fullText}</p>
        </div>
        <div className="script-actions">
          <button
            className={`script-copy${copied ? ' copied' : ''}`}
            onClick={handleCopy}
            aria-label={copied ? t.actions.copied : t.actions.copyScript}
          >
            {copied ? t.actions.copied : `📋 ${t.actions.copyScript}`}
          </button>
          <button
            className="script-print"
            onClick={() => window.print()}
            aria-label={t.actions.printScript}
          >
            🖨 {t.actions.printScript}
          </button>
        </div>
        <p className="script-footer-note">
          {t.results.scriptFooter || 'This script requests an evaluation — not a placement. Schools are required to conduct assessments under federal law. Anchor does not contact the school on your behalf.'}
        </p>
      </div>
    </>
  )
}
