export default function Disclaimer({ onAccept, t }) {
  return (
    <>
      <style>{`
        .disc-root {
          min-height: 100dvh;
          min-height: 100vh;
          background: var(--color-bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.25rem;
        }
        .disc-card {
          background: var(--color-surface);
          border-radius: var(--radius-modal);
          box-shadow: var(--shadow-card);
          padding: 2.5rem 2rem;
          width: 100%;
          max-width: 520px;
        }
        .disc-logo {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--color-navy);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 1.75rem;
          justify-content: center;
        }
        .disc-heading {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 1.25rem;
        }
        .disc-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          margin-bottom: 1.5rem;
        }
        .disc-point {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          padding: 0.875rem 1rem;
          background: var(--color-surface-warm);
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--color-navy);
        }
        .disc-point-icon {
          font-size: 1rem;
          flex-shrink: 0;
          margin-top: 0.05rem;
          color: var(--color-navy);
        }
        .disc-point-text {
          font-size: 0.875rem;
          color: var(--color-text);
          line-height: 1.55;
        }
        .disc-legal-note {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-style: italic;
          text-align: center;
          margin-bottom: 1.5rem;
          padding: 0 0.5rem;
        }
        .disc-accept {
          width: 100%;
          padding: 0.875rem;
          background: var(--color-amber);
          color: white;
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: var(--radius-sm);
          border: none;
          cursor: pointer;
          transition: background var(--transition-fast);
          font-family: var(--font-body);
        }
        .disc-accept:hover {
          background: #b8700a;
        }
        .disc-accept:focus-visible {
          outline: 2px solid var(--color-amber);
          outline-offset: 3px;
        }
      `}</style>
      <div className="disc-root">
        <div className="disc-card">
          <div className="disc-logo">
            <span>⚓</span> Anchor
          </div>
          <h2 className="disc-heading">{t.disclaimer.heading}</h2>
          <ul className="disc-points">
            <li className="disc-point">
              <span className="disc-point-icon" aria-hidden="true">⚖</span>
              <span className="disc-point-text">{t.disclaimer.point1}</span>
            </li>
            <li className="disc-point">
              <span className="disc-point-icon" aria-hidden="true">ℹ</span>
              <span className="disc-point-text">{t.disclaimer.point2}</span>
            </li>
            <li className="disc-point">
              <span className="disc-point-icon" aria-hidden="true">📋</span>
              <span className="disc-point-text">{t.disclaimer.point3}</span>
            </li>
          </ul>
          <p className="disc-legal-note">{t.footer.disclaimer}</p>
          <button className="disc-accept" onClick={onAccept}>
            {t.disclaimer.acceptBtn}
          </button>
        </div>
      </div>
    </>
  )
}
