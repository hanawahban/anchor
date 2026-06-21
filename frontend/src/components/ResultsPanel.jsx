import DistrictCard from './DistrictCard.jsx'
import CurriculumGapCard from './CurriculumGapCard.jsx'
import RightsCards from './RightsCards.jsx'
import AdvocacyScript from './AdvocacyScript.jsx'
import TutorCards from './TutorCards.jsx'

// IDs from rights.json that are program-based (eligibility-dependent) vs universal rights
const PROGRAM_RIGHT_IDS = new Set(['title1-tutoring', 'immigrant-act', 'idea-iep', 'native-language-assessment'])

function EmptyState({ t }) {
  return (
    <>
      <style>{`
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 300px;
          padding: 3rem 2rem;
          text-align: center;
        }
        .empty-anchor-icon {
          font-size: 3rem;
          opacity: 0.18;
          margin-bottom: 1.25rem;
          display: block;
          line-height: 1;
        }
        .empty-text {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          max-width: 320px;
        }
      `}</style>
      <div className="empty-state" aria-label={t.results.emptyState}>
        <span className="empty-anchor-icon" aria-hidden="true">⚓</span>
        <p className="empty-text">{t.results.emptyState}</p>
      </div>
    </>
  )
}

export default function ResultsPanel({ structured, intakeData, language, t, analysisError, onRetry }) {
  const programRights = structured ? (structured.rights || []).filter(r => PROGRAM_RIGHT_IDS.has(r.id)) : []
  const universalRights = structured ? (structured.rights || []).filter(r => !PROGRAM_RIGHT_IDS.has(r.id)) : []

  const districtName = structured?.district?.name || ''
  const programCount = programRights.length + universalRights.length
  const selectedSubjects = intakeData?.concerns || []

  function buildSummaryText() {
    let text = `Based on what you shared, your child has important rights and may qualify for ${programCount} support program${programCount !== 1 ? 's' : ''}`
    if (districtName) text += ` in ${districtName}`
    text += '.'
    if (selectedSubjects.length > 0) {
      const subjList = selectedSubjects.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ')
      text += ` We also found free resources matched to their needs in ${subjList}.`
    }
    text += ' Here is everything we found.'
    return text
  }

  return (
    <>
      <style>{`
        .results-root {
          height: 100%;
          overflow-y: auto;
          background: var(--color-bg);
        }
        .results-inner {
          padding: 0 1.25rem 1.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          max-width: 760px;
        }

        /* Section 0 — district context bar */
        .results-district-bar {
          padding: 0.5rem 1.25rem;
          background: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
          font-size: 0.78rem;
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0;
        }
        .results-state-badge {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-pill);
          background: var(--color-navy);
          color: white;
        }

        /* Section 1 — summary banner */
        .results-summary-banner {
          padding: 1.25rem;
          background: var(--color-surface-warm);
          border-left: 4px solid var(--color-amber);
          border-radius: var(--radius-card);
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          animation: fadeInUp 0.4s ease both;
        }
        .results-summary-text {
          font-size: 1rem;
          color: var(--color-navy);
          line-height: 1.6;
          font-weight: 400;
        }
        .results-jump-cta {
          display: inline-block;
          padding: 0.75rem 1.25rem;
          background: var(--color-navy);
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: var(--radius-sm);
          text-decoration: none;
          text-align: center;
          transition: opacity var(--transition-fast);
          align-self: flex-start;
        }
        .results-jump-cta:hover { opacity: 0.88; }
        @media (max-width: 768px) {
          .results-jump-cta { width: 100%; align-self: stretch; }
        }

        /* Section wrappers */
        .results-section-wrap {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Programs disclaimer */
        .results-programs-disclaimer {
          padding: 0.75rem 1rem;
          background: #fff8e6;
          border: 1px solid #f5d76e;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--color-text);
          line-height: 1.55;
          margin-bottom: 0.625rem;
          display: flex;
          gap: 0.5rem;
          align-items: flex-start;
        }
        .results-programs-disclaimer-icon {
          flex-shrink: 0;
          font-size: 0.9rem;
          margin-top: 0.05rem;
        }

        /* Footer notes */
        .results-privacy-note {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          padding: 0.5rem 0;
          border-top: 1px solid var(--color-border);
        }
        .results-disclaimer {
          padding: 0.875rem 1rem;
          background: var(--color-surface-warm);
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--color-amber);
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          animation: fadeInUp 0.4s ease 0.2s both;
        }

        /* Error state */
        .results-error {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 300px;
          padding: 3rem 2rem;
          text-align: center;
          gap: 1rem;
        }
        .results-error-icon { font-size: 2.5rem; opacity: 0.4; }
        .results-error-msg {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          max-width: 340px;
          line-height: 1.6;
        }
        .results-retry-btn {
          margin-top: 0.5rem;
          padding: 0.65rem 1.5rem;
          background: var(--color-navy);
          color: white;
          border: none;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-family: var(--font-body);
          font-weight: 500;
          cursor: pointer;
        }
        .results-retry-btn:hover { opacity: 0.88; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .results-inner { padding: 0 1rem 1rem 1rem; }
          .results-district-bar { padding: 0.5rem 1rem; }
        }
      `}</style>

      <div className="results-root" role="region" aria-label="Results">
        {analysisError ? (
          <div className="results-error">
            <span className="results-error-icon" aria-hidden="true">⚓</span>
            <p className="results-error-msg">Something went wrong while analyzing your information. This may be a temporary issue — please try again.</p>
            <button className="results-retry-btn" onClick={onRetry}>Try Again</button>
          </div>
        ) : !structured ? (
          <EmptyState t={t} />
        ) : (
          <>
            {/* SECTION 0 — District context bar */}
            {structured.district && (
              <div className="results-district-bar">
                {structured.district.state && (
                  <span className="results-state-badge">{structured.district.state}</span>
                )}
                {structured.district.name}
                {structured.district.title1 && ' · Title I School'}
              </div>
            )}

            <div className="results-inner">
              {/* SECTION 1 — Summary banner + jump CTA */}
              <div className="results-summary-banner" role="note">
                <p className="results-summary-text">{buildSummaryText()}</p>
                <a href="#advocacy-script-section" className="results-jump-cta">
                  {t.results.jumpToScript || 'Jump to Your Advocacy Script ↓'}
                </a>
              </div>

              {/* SECTION 2 — Curriculum Gap */}
              {structured.curriculumGap && (
                <CurriculumGapCard
                  data={structured.curriculumGap}
                  selectedSubjects={selectedSubjects}
                  englishProficiency={intakeData?.englishProficiency}
                  homeGrade={intakeData?.homeGrade}
                  t={t}
                />
              )}

              {/* SECTION 3 — Programs Your Child May Qualify For */}
              {programRights.length > 0 && (
                <div>
                  <div className="results-programs-disclaimer">
                    <span className="results-programs-disclaimer-icon" aria-hidden="true">⚠</span>
                    <span>{t.results.programsDisclaimer}</span>
                  </div>
                  <RightsCards rights={programRights} mode="programs" t={t} />
                </div>
              )}

              {/* SECTION 4 — Your Child's Rights */}
              {universalRights.length > 0 && (
                <RightsCards rights={universalRights} mode="rights" t={t} />
              )}

              {/* SECTION 5 — Resources to Help Close the Gap */}
              <TutorCards intakeData={intakeData} t={t} />

              {/* SECTION 6 — Advocacy Script */}
              <div id="advocacy-script-section">
                {structured.advocacyScript && (
                  <AdvocacyScript
                    script={structured.advocacyScript}
                    intakeData={intakeData}
                    t={t}
                  />
                )}
              </div>

              <p className="results-privacy-note" role="note">
                {t.results.footerPrivacy || 'Anchor does not store your child\'s information. Everything stays private to your session.'}
              </p>
              <p className="results-disclaimer" role="note">
                {t.resultsDisclaimer}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  )
}
