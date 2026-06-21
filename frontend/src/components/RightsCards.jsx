export default function RightsCards({ rights, mode, t }) {
  if (!rights || rights.length === 0) return null

  const isPrograms = mode === 'programs'
  const heading = isPrograms
    ? (t.results.programsHeading || 'Programs Your Child May Qualify For')
    : t.results.rightsHeading

  return (
    <>
      <style>{`
        .rights-section {
          animation: fadeInUp 0.4s ease 0.1s both;
        }
        .rights-heading {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--color-amber);
          display: inline-block;
        }
        .rights-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .right-card {
          background: var(--color-surface);
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-card);
          padding: 1.25rem;
          border-left: 4px solid var(--color-amber);
          transition: box-shadow var(--transition-base), border-color var(--transition-fast);
        }
        .right-card:hover {
          box-shadow: var(--shadow-card-hover);
          border-left-color: var(--color-navy);
        }
        .right-law-badge {
          font-size: 0.68rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--color-amber);
          margin-bottom: 0.4rem;
        }
        .right-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 0.625rem;
          line-height: 1.3;
        }
        .right-summary {
          font-size: 0.875rem;
          color: var(--color-text);
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }
        .right-box {
          border-radius: var(--radius-sm);
          padding: 0.625rem 0.875rem;
          margin-bottom: 0.625rem;
          font-size: 0.82rem;
          line-height: 1.5;
        }
        .right-box-label {
          font-size: 0.68rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.2rem;
        }
        .right-cannot {
          background: var(--color-cannot-bg);
          border-left: 2px solid var(--color-cannot-border);
        }
        .right-cannot .right-box-label {
          color: var(--color-risk-high);
        }
        .right-action {
          background: var(--color-action-bg);
          border-left: 3px solid var(--color-amber);
        }
        .right-action .right-box-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-amber);
        }
        .right-footer {
          margin-top: 0.625rem;
        }
        .right-learn-more {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--color-amber);
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .right-learn-more:hover {
          color: #b8700a;
          text-decoration: underline;
        }
      `}</style>
      <div className="rights-section">
        <div className="rights-heading">{heading}</div>
        <div className="rights-list" role="list">
          {rights.map((right, i) => (
            <article
              key={right.id || i}
              className="right-card"
              role="listitem"
            >
              <div className="right-law-badge">{right.law}</div>
              <h3 className="right-title">{right.title}</h3>
              <p className="right-summary">{right.summary}</p>
              {right.whatSchoolsCannotDo && (
                <div className="right-box right-cannot">
                  <div className="right-box-label">{t.labels.schoolsCannot}</div>
                  {right.whatSchoolsCannotDo}
                </div>
              )}
              {right.action && (
                <div className="right-box right-action">
                  <div className="right-box-label">{t.labels.actionToday}</div>
                  {right.action}
                </div>
              )}
              {right.url && (
                <div className="right-footer">
                  <a
                    href={right.url}
                    className="right-learn-more"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Learn more about ${right.title}`}
                  >
                    {t.actions.learnMore}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
