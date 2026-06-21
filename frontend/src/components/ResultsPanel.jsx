import { useState, useEffect } from 'react'
import AnchorChat from './AnchorChat.jsx'
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

export default function ResultsPanel({ structured, intakeData, language, t, analysisError, onRetry, resourceMatches }) {
  const [toastVisible, setToastVisible] = useState(false)
  const [chatCollapsed, setChatCollapsed] = useState(false)

  useEffect(() => {
    function handleAppend() {
      setToastVisible(true)
      setTimeout(() => setToastVisible(false), 3000)
    }
    window.addEventListener('anchor:appendToScript', handleAppend)
    return () => window.removeEventListener('anchor:appendToScript', handleAppend)
  }, [])

  const programRights = structured ? (structured.rights || []).filter(r => PROGRAM_RIGHT_IDS.has(r.id)) : []
  const universalRights = structured ? (structured.rights || []).filter(r => !PROGRAM_RIGHT_IDS.has(r.id)) : []

  const selectedSubjects = intakeData?.concerns || []

  return (
    <>
      <style>{`
        .results-root {
          height: 100%;
          overflow-y: auto;
          background: var(--color-bg);
        }
        .results-page-layout {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.25rem;
        }
        .results-main {
          flex: 1 1 0;
          min-width: 0;
          overflow: hidden;
        }
        .results-chat-panel {
          flex-shrink: 0;
          position: sticky;
          top: 1rem;
          height: calc(100vh - 2rem);
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 8px rgba(0,0,0,0.07);
          width: 340px;
          transition: width 0.22s ease;
        }
        .results-chat-panel--collapsed {
          width: 44px;
        }
        @media (min-width: 900px) {
          .results-chat-panel { display: flex; }
          .anchor-chat-btn    { display: none !important; }
        }
        @media (max-width: 899px) {
          .results-chat-panel  { display: none; }
          .results-page-layout { display: block; padding: 1rem; }
        }
        .results-inner {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        /* Section 0 — district context bar */
        .results-district-bar {
          padding: 0.45rem 1.25rem;
          background: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
          font-size: 0.75rem;
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .results-state-badge {
          font-size: 0.63rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.18rem 0.45rem;
          border-radius: var(--radius-pill);
          background: var(--color-navy);
          color: white;
        }

        /* Section 1 — stat chips */
        .results-stat-chips {
          display: flex;
          gap: 0.75rem;
        }
        .results-stat-chip {
          flex: 1;
          padding: 1rem 0.75rem;
          border-radius: 10px;
          text-align: center;
        }
        .results-stat-chip--programs {
          background: rgba(212,130,10,0.10);
          border: 1px solid rgba(212,130,10,0.28);
        }
        .results-stat-chip--rights {
          background: rgba(15,35,64,0.06);
          border: 1px solid rgba(15,35,64,0.18);
        }
        .results-stat-chip--resources {
          background: rgba(22,163,74,0.07);
          border: 1px solid rgba(22,163,74,0.22);
        }
        .results-stat-chip-number {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
          display: block;
          margin-bottom: 0.3rem;
        }
        .results-stat-chip--programs .results-stat-chip-number { color: var(--color-amber); }
        .results-stat-chip--rights   .results-stat-chip-number { color: var(--color-navy); }
        .results-stat-chip--resources .results-stat-chip-number { color: #16a34a; }
        .results-stat-chip-label {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-muted);
          display: block;
          line-height: 1.3;
        }
        @media (max-width: 640px) {
          .results-stat-chip        { padding: 0.75rem 0.5rem; }
          .results-stat-chip-number { font-size: 1.6rem; }
        }

        /* Programs disclaimer */
        .results-programs-disclaimer {
          padding: 0.6rem 0.875rem;
          background: rgba(245,215,110,0.18);
          border: 1px solid rgba(212,130,10,0.2);
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0.5rem;
          display: flex;
          gap: 0.4rem;
          align-items: flex-start;
        }
        .results-programs-disclaimer-icon {
          flex-shrink: 0;
          font-size: 0.85rem;
          margin-top: 0.05rem;
          opacity: 0.7;
        }

        /* Footer notes */
        .results-privacy-note {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          padding: 0.4rem 0;
          border-top: 1px solid var(--color-border);
        }
        .results-disclaimer {
          padding: 0.75rem 0.875rem;
          background: var(--color-surface-warm);
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--color-amber);
          font-size: 0.78rem;
          color: var(--color-text-muted);
          line-height: 1.55;
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
          .results-district-bar { padding: 0.45rem 1rem; }
        }

        /* Toast */
        .results-toast {
          position: fixed;
          bottom: 5.5rem;
          right: 1.5rem;
          background: #16a34a;
          color: white;
          padding: 0.65rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 500;
          z-index: 1100;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .results-toast.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Toast */}
      <div
        className={`results-toast${toastVisible ? ' visible' : ''}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        ✓ Question added to your advocacy script
      </div>

      {/* Floating chat — mobile only */}
      {structured && (
        <AnchorChat
          structured={structured}
          intakeData={intakeData}
          language={language}
          t={t}
        />
      )}

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
            {/* District bar — full width above layout */}
            {structured.district && (
              <div className="results-district-bar">
                {structured.district.state && (
                  <span className="results-state-badge">{structured.district.state}</span>
                )}
                {structured.district.name}
                {structured.district.title1 && ' · Title I School'}
              </div>
            )}

            {/* Two-column layout */}
            <div className="results-page-layout">
              {/* LEFT */}
              <div className="results-main">
                <div className="results-inner">
                  {/* Stat chips */}
                  <div className="results-stat-chips" role="region" aria-label="Summary">
                    <div className="results-stat-chip results-stat-chip--programs">
                      <span className="results-stat-chip-number">{programRights.length}</span>
                      <span className="results-stat-chip-label">{t.results.chipPrograms}</span>
                    </div>
                    <div className="results-stat-chip results-stat-chip--rights">
                      <span className="results-stat-chip-number">{universalRights.length}</span>
                      <span className="results-stat-chip-label">{t.results.chipRights}</span>
                    </div>
                    <div className="results-stat-chip results-stat-chip--resources">
                      <span className="results-stat-chip-number">{resourceMatches?.primary?.length ?? 0}</span>
                      <span className="results-stat-chip-label">{t.results.chipResources}</span>
                    </div>
                  </div>

                  {/* Curriculum Gap */}
                  {structured.curriculumGap && (
                    <CurriculumGapCard
                      data={structured.curriculumGap}
                      selectedSubjects={selectedSubjects}
                      englishProficiency={intakeData?.englishProficiency}
                      homeGrade={intakeData?.homeGrade}
                      t={t}
                    />
                  )}

                  {/* Programs */}
                  {programRights.length > 0 && (
                    <div>
                      <div className="results-programs-disclaimer">
                        <span className="results-programs-disclaimer-icon" aria-hidden="true">⚠</span>
                        <span>{t.results.programsDisclaimer}</span>
                      </div>
                      <RightsCards rights={programRights} mode="programs" t={t} intakeData={intakeData} />
                    </div>
                  )}

                  {/* Rights */}
                  {universalRights.length > 0 && (
                    <RightsCards rights={universalRights} mode="rights" t={t} />
                  )}

                  {/* Resources */}
                  <TutorCards intakeData={intakeData} t={t} precomputedMatches={resourceMatches} />

                  {/* Advocacy Script */}
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
              </div>

              {/* RIGHT — collapsible chat panel */}
              <div className={`results-chat-panel${chatCollapsed ? ' results-chat-panel--collapsed' : ''}`}>
                <AnchorChat
                  mode="panel"
                  collapsed={chatCollapsed}
                  onToggleCollapse={() => setChatCollapsed(c => !c)}
                  structured={structured}
                  intakeData={intakeData}
                  language={language}
                  t={t}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
