export default function DistrictCard({ data, t }) {
  if (!data) return null

  return (
    <>
      <style>{`
        .dc-card {
          background: var(--color-surface);
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-card);
          padding: 1.25rem;
          animation: fadeInUp 0.3s ease both;
        }
        .dc-section-label {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.7rem;
          margin-bottom: 0.625rem;
        }
        .dc-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 0.625rem;
          line-height: 1.3;
        }
        .dc-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 0.875rem;
        }
        .dc-badge {
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-pill);
        }
        .dc-badge-state {
          background: var(--color-surface-warm);
          color: var(--color-text-muted);
          border: 1px solid var(--color-border);
        }
        .dc-badge-title1 {
          background: #fef3c7;
          color: #92400e;
          border: 1px solid #fde68a;
        }
        .dc-ell-label {
          font-size: 0.72rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-muted);
          margin-bottom: 0.2rem;
        }
        .dc-ell-text {
          font-size: 0.85rem;
          color: var(--color-text);
          margin-bottom: 0.875rem;
          line-height: 1.5;
        }
        .dc-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .dc-link {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--color-amber);
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.375rem 0.75rem;
          border-radius: var(--radius-sm);
          border: 1.5px solid var(--color-amber);
          transition: background var(--transition-fast), color var(--transition-fast);
          text-decoration: none;
        }
        .dc-link:hover {
          background: var(--color-amber);
          color: white;
          text-decoration: none;
        }
        .dc-link:focus-visible {
          outline: 2px solid var(--color-amber);
          outline-offset: 2px;
        }
      `}</style>
      <div className="dc-card">
        <div className="dc-section-label">{t.results.districtHeading}</div>
        <div className="dc-name">{data.name}</div>
        <div className="dc-badges">
          {data.state && (
            <span className="dc-badge dc-badge-state">{data.state}</span>
          )}
          {data.title1 && (
            <span className="dc-badge dc-badge-title1">{t.badges.title1}</span>
          )}
        </div>
        {data.ellProgram && (
          <>
            <div className="dc-ell-label">{t.labels.ellProgram}</div>
            <div className="dc-ell-text">{data.ellProgram}</div>
          </>
        )}
        <div className="dc-links">
          {data.ellContact && (
            <a
              href={`tel:${data.ellContact.replace(/\D/g, '')}`}
              className="dc-link"
              aria-label={`${t.actions.callLink}: ${data.ellContact}`}
            >
              📞 {data.ellContact}
            </a>
          )}
          {data.ellUrl && (
            <a
              href={data.ellUrl}
              className="dc-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ELL program website"
            >
              {t.labels.ellSite}
            </a>
          )}
          {data.parentRightsUrl && (
            <a
              href={data.parentRightsUrl}
              className="dc-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Parent rights page"
            >
              {t.labels.parentRights}
            </a>
          )}
        </div>
      </div>
    </>
  )
}
