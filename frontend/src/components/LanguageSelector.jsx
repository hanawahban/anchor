import { useState } from 'react'

const LANGUAGES = [
  { code: 'en', native: 'English', english: 'English' },
  { code: 'es', native: 'Español', english: 'Spanish' },
  { code: 'ar', native: 'العربية', english: 'Arabic' },
  { code: 'zh', native: '中文', english: 'Chinese' },
  { code: 'fr', native: 'Français', english: 'French' },
  { code: 'fil', native: 'Filipino', english: 'Filipino' },
  { code: 'vi', native: 'Tiếng Việt', english: 'Vietnamese' },
]

export default function LanguageSelector({ language, onSelect, onContinue, t }) {
  const [selected, setSelected] = useState(language)

  function handleSelect(code) {
    setSelected(code)
    onSelect(code)
  }

  return (
    <>
      <style>{`
        .ls-root {
          min-height: 100dvh;
          min-height: 100vh;
          background: var(--color-bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.25rem;
        }
        .ls-logo {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          letter-spacing: -0.01em;
        }
        .ls-logo-icon {
          font-size: 1.75rem;
          line-height: 1;
        }
        .ls-card {
          background: var(--color-surface);
          border-radius: var(--radius-modal);
          box-shadow: var(--shadow-card);
          padding: 2.5rem 2rem;
          width: 100%;
          max-width: 560px;
        }
        .ls-title {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--color-navy);
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .ls-subtitle {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          text-align: center;
          margin-bottom: 1.75rem;
        }
        .ls-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }
        @media (min-width: 480px) {
          .ls-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .ls-lang-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          padding: 1rem 0.75rem;
          border-radius: var(--radius-card);
          border: 2px solid var(--color-border);
          background: var(--color-surface);
          cursor: pointer;
          transition: border-color var(--transition-fast), background var(--transition-fast), box-shadow var(--transition-fast);
          position: relative;
        }
        .ls-lang-btn:hover {
          border-color: var(--color-navy-light);
          background: var(--color-surface-warm);
          box-shadow: var(--shadow-card);
        }
        .ls-lang-btn.selected {
          border-color: var(--color-navy);
          background: #f0f4fa;
        }
        .ls-lang-btn:focus-visible {
          outline: 2px solid var(--color-amber);
          outline-offset: 2px;
        }
        .ls-check {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          width: 1.1rem;
          height: 1.1rem;
          background: var(--color-amber);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.6rem;
          font-weight: 700;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        .ls-lang-btn.selected .ls-check {
          opacity: 1;
        }
        .ls-native {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--color-navy);
          line-height: 1.2;
        }
        .ls-english {
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .ls-continue {
          width: 100%;
          padding: 0.875rem;
          background: var(--color-amber);
          color: white;
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: var(--radius-sm);
          border: none;
          cursor: pointer;
          transition: background var(--transition-fast), opacity var(--transition-fast);
          font-family: var(--font-body);
        }
        .ls-continue:hover:not(:disabled) {
          background: #b8700a;
        }
        .ls-continue:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }
        .ls-continue:focus-visible {
          outline: 2px solid var(--color-amber);
          outline-offset: 3px;
        }
      `}</style>
      <div className="ls-root">
        <div className="ls-logo">
          <span className="ls-logo-icon">⚓</span>
          Anchor
        </div>
        <div className="ls-card">
          <h1 className="ls-title">{t.langScreen.title}</h1>
          <p className="ls-subtitle">{t.langScreen.subtitle}</p>
          <div className="ls-grid" role="radiogroup" aria-label="Language selection">
            {LANGUAGES.map(lang => (
              <button
                key={lang.code}
                className={`ls-lang-btn${selected === lang.code ? ' selected' : ''}`}
                onClick={() => handleSelect(lang.code)}
                role="radio"
                aria-checked={selected === lang.code}
                aria-label={`${lang.native} — ${lang.english}`}
              >
                <span className="ls-check" aria-hidden="true">✓</span>
                <span className="ls-native">{lang.native}</span>
                <span className="ls-english">{lang.english}</span>
              </button>
            ))}
          </div>
          <button
            className="ls-continue"
            onClick={onContinue}
            disabled={!selected}
          >
            {t.langScreen.continueBtn}
          </button>
        </div>
      </div>
    </>
  )
}
