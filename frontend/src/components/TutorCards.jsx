import { useState } from 'react'
import { ALL_TUTORS } from '../data/tutors.js'
import { matchTutors } from '../utils/tutorMatcher.js'

function TutorCard({ tutor, matchReason, t }) {
  return (
    <div className="tutor-card">
      <div className="tutor-top">
        <span className="tutor-name">{tutor.platform}</span>
        {tutor.free && (
          <span className="tutor-free-badge">{t.badges.free}</span>
        )}
      </div>
      {tutor.subjects && tutor.subjects.length > 0 && (
        <div className="tutor-meta">
          {tutor.subjects.slice(0, 4).map(s => (
            <span key={s} className="tutor-pill">{s}</span>
          ))}
        </div>
      )}
      {tutor.languages && tutor.languages.length > 0 && (
        <div className="tutor-meta">
          {tutor.languages.map(l => (
            <span key={l} className="tutor-pill" style={{ fontStyle: 'italic' }}>{l}</span>
          ))}
        </div>
      )}
      {tutor.format && (
        <p className="tutor-format">{tutor.format}</p>
      )}
      {matchReason && (
        <p className="tutor-matched-reason">{matchReason}</p>
      )}
      {tutor.url && (
        <a
          href={tutor.url}
          className="tutor-visit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.actions.visitProgram}: ${tutor.platform}`}
        >
          {t.actions.visitProgram} →
        </a>
      )}
    </div>
  )
}

export default function TutorCards({ intakeData, t }) {
  const [moreOpen, setMoreOpen] = useState(false)
  const [otherOpen, setOtherOpen] = useState(false)

  const { primary, moreMatched, other, skipped } = matchTutors(ALL_TUTORS, intakeData)

  if (primary.length === 0 && moreMatched.length === 0 && other.length === 0) return null

  const grade = intakeData?.homeGrade || ''
  const lang = intakeData?.homeCountry
    ? ((() => {
        const COUNTRY_LANG = {
          Mexico: 'Spanish', Colombia: 'Spanish', Honduras: 'Spanish', Guatemala: 'Spanish',
          'El Salvador': 'Spanish', Cuba: 'Spanish', Brazil: 'Portuguese', China: 'Chinese',
          Philippines: 'Filipino', Vietnam: 'Vietnamese', France: 'French', Haiti: 'French',
          Egypt: 'Arabic', Syria: 'Arabic', Iraq: 'Arabic', Morocco: 'Arabic',
          India: 'Hindi', Pakistan: 'Hindi',
        }
        return COUNTRY_LANG[intakeData.homeCountry] || 'their home language'
      })())
    : 'their home language'

  const subjects = (intakeData?.concerns || []).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ')

  function buildSubtitle() {
    if (skipped || !subjects) {
      return (t.results.tutorsSubtitleSkipped || 'Based on your child\'s {grade} level and {language} background, here are the strongest free resources available.')
        .replace('{grade}', grade)
        .replace('{language}', lang)
    }
    return (t.results.tutorsSubtitle || 'Based on your child\'s {grade} level, {language} background, and focus on {subjects}, these free programs are your strongest matches.')
      .replace('{grade}', grade)
      .replace('{language}', lang)
      .replace('{subjects}', subjects)
  }

  return (
    <>
      <style>{`
        .tutors-section {
          animation: fadeInUp 0.4s ease 0.2s both;
        }
        .tutors-heading {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 0.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--color-amber);
          display: inline-block;
        }
        .tutors-subtitle {
          font-size: 0.82rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0.875rem;
          margin-top: 0.5rem;
        }
        .tutors-grid {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
        .tutor-card {
          background: var(--color-surface);
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-card);
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: box-shadow var(--transition-base);
        }
        .tutor-card:hover { box-shadow: var(--shadow-card-hover); }
        .tutor-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .tutor-name {
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--color-navy);
        }
        .tutor-free-badge {
          font-size: 0.65rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-pill);
          background: var(--color-action-bg);
          color: var(--color-risk-low);
          border: 1px solid var(--color-action-border);
          white-space: nowrap;
        }
        .tutor-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .tutor-pill {
          font-size: 0.7rem;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-pill);
          background: var(--color-surface-warm);
          border: 1px solid var(--color-border);
          color: var(--color-text-muted);
          font-weight: 500;
        }
        .tutor-format {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-style: italic;
        }
        .tutor-matched-reason {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          font-style: italic;
          border-top: 1px solid var(--color-border);
          padding-top: 0.4rem;
          margin-top: 0.1rem;
          line-height: 1.45;
        }
        .tutor-visit {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--color-amber);
          text-decoration: none;
          align-self: flex-start;
          transition: color var(--transition-fast);
        }
        .tutor-visit:hover { color: #b8700a; text-decoration: underline; }

        .tutors-expandable {
          margin-top: 0.5rem;
        }
        .tutors-expand-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1.5px solid var(--color-border-strong);
          border-radius: var(--radius-sm);
          padding: 0.625rem 1rem;
          width: 100%;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-muted);
          cursor: pointer;
          font-family: var(--font-body);
          transition: color var(--transition-fast), border-color var(--transition-fast);
        }
        .tutors-expand-btn:hover { color: var(--color-navy); border-color: var(--color-navy); }
        .tutors-expand-chevron { font-size: 0.7rem; transition: transform 0.2s; }
        .tutors-expand-chevron.open { transform: rotate(180deg); }
        .tutors-expanded-grid {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
      `}</style>
      <div className="tutors-section">
        <div className="tutors-heading">{t.results.tutorsHeading || 'Resources to Help Close the Gap'}</div>
        <p className="tutors-subtitle">{buildSubtitle()}</p>

        <div className="tutors-grid">
          {primary.map((tutor, i) => (
            <TutorCard
              key={tutor.platform || i}
              tutor={tutor}
              matchReason={skipped ? null : tutor.matchReason}
              t={t}
            />
          ))}
        </div>

        {moreMatched.length > 0 && (
          <div className="tutors-expandable">
            <button
              className="tutors-expand-btn"
              onClick={() => setMoreOpen(o => !o)}
              aria-expanded={moreOpen}
              type="button"
            >
              <span className={`tutors-expand-chevron${moreOpen ? ' open' : ''}`}>▼</span>
              {(t.results.moreResources || 'See {n} more matched resources').replace('{n}', moreMatched.length)}
            </button>
            {moreOpen && (
              <div className="tutors-expanded-grid">
                {moreMatched.map((tutor, i) => (
                  <TutorCard
                    key={tutor.platform || i}
                    tutor={tutor}
                    matchReason={skipped ? null : tutor.matchReason}
                    t={t}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {other.length > 0 && (
          <div className="tutors-expandable">
            <button
              className="tutors-expand-btn"
              onClick={() => setOtherOpen(o => !o)}
              aria-expanded={otherOpen}
              type="button"
            >
              <span className={`tutors-expand-chevron${otherOpen ? ' open' : ''}`}>▼</span>
              {t.results.otherResources || 'Other free resources'}
            </button>
            {otherOpen && (
              <div className="tutors-expanded-grid">
                {other.map((tutor, i) => (
                  <TutorCard
                    key={tutor.platform || i}
                    tutor={tutor}
                    matchReason={null}
                    t={t}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}
