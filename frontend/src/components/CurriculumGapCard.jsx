function assessSubjectGap(subject, homeGrade, englishProficiency) {
  const gradeNum = (() => {
    if (!homeGrade) return 5
    const lower = homeGrade.toLowerCase()
    if (lower.includes('pre') || lower === 'kindergarten' || lower.includes('kínder')) return 0
    if (lower.includes('univ') || lower.includes('college')) return 12
    const m = lower.match(/(\d+)/)
    return m ? parseInt(m[1], 10) : 5
  })()

  const isLanguageSubject = ['english', 'reading', 'writing'].includes(subject)
  const isNone = englishProficiency === 'NONE'
  const isSome = englishProficiency === 'SOME'

  if (isLanguageSubject) {
    if (isNone) return { fill: 28, label: 'Significant gap — ELL support recommended' }
    if (isSome) return { fill: 50, label: 'Gap detected — language support may help' }
    return { fill: 72, label: 'Manageable — some adjustment expected' }
  }

  if (subject === 'SAT prep' || subject === 'college counseling') {
    return { fill: 35, label: 'US-specific — guidance recommended' }
  }

  if (subject === 'history') {
    return { fill: 40, label: 'US curriculum differs — some catch-up likely' }
  }

  // math, science
  if (gradeNum <= 5) return { fill: 75, label: 'Strong — may be on track or ahead' }
  if (gradeNum <= 8) return { fill: 60, label: 'Some adjustment expected' }
  return { fill: 42, label: 'Gap likely — placement review recommended' }
}

function barColor(fill) {
  if (fill >= 65) return 'var(--color-risk-low)'
  if (fill >= 45) return 'var(--color-risk-medium)'
  return 'var(--color-risk-high)'
}

function capitalize(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function CurriculumGapCard({ data, selectedSubjects, englishProficiency, homeGrade, t }) {
  if (!data) return null

  const showBreakdown = selectedSubjects && selectedSubjects.length > 0

  const riskColors = {
    high: { bg: 'var(--color-risk-high)', label: t.badges.riskHigh },
    medium: { bg: 'var(--color-risk-medium)', label: t.badges.riskMedium },
    low: { bg: 'var(--color-risk-low)', label: t.badges.riskLow },
  }
  const risk = riskColors[data.riskLevel] || riskColors.medium

  return (
    <>
      <style>{`
        .gap-card {
          background: var(--color-surface);
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-card);
          padding: 1.25rem;
          animation: fadeInUp 0.35s ease 0.05s both;
        }
        .gap-section-label {
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-text-muted);
          margin-bottom: 0.875rem;
        }
        .gap-comparison {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.875rem;
        }
        .gap-side {
          flex: 1;
          background: var(--color-surface-warm);
          border-radius: var(--radius-sm);
          padding: 0.75rem;
          text-align: center;
        }
        .gap-side-label {
          font-size: 0.68rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-muted);
          margin-bottom: 0.25rem;
        }
        .gap-side-value {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-navy);
          line-height: 1.3;
        }
        .gap-arrow {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          flex-shrink: 0;
        }
        .gap-risk-badge {
          width: 100%;
          text-align: center;
          padding: 0.45rem 0.75rem;
          border-radius: var(--radius-pill);
          color: white;
          font-size: 0.72rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.875rem;
        }
        .gap-notes {
          font-size: 0.85rem;
          color: var(--color-text);
          line-height: 1.6;
        }
        .gap-subject-breakdown {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
        }
        .gap-breakdown-heading {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--color-text-muted);
          margin-bottom: 0.75rem;
        }
        .gap-subject-row {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          margin-bottom: 0.5rem;
        }
        .gap-subject-name {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-text);
          width: 80px;
          flex-shrink: 0;
        }
        .gap-bar-track {
          flex: 1;
          height: 6px;
          background: var(--color-border);
          border-radius: 9999px;
          overflow: hidden;
        }
        .gap-bar-fill {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.6s ease;
        }
        .gap-subject-note {
          font-size: 0.72rem;
          color: var(--color-text-muted);
          flex: 1;
          min-width: 0;
        }
        @media (max-width: 480px) {
          .gap-subject-row { flex-wrap: wrap; }
          .gap-subject-note { width: 100%; flex: none; padding-left: 0; }
        }
        .gap-breakdown-disclaimer {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          font-style: italic;
          margin-top: 0.75rem;
        }
      `}</style>
      <div className="gap-card">
        <div className="gap-section-label">{t.results.gapHeading}</div>
        <div className="gap-comparison">
          <div className="gap-side">
            <div className="gap-side-label">{data.homeCountry}</div>
            <div className="gap-side-value">{data.homeGrade}</div>
          </div>
          <span className="gap-arrow" aria-hidden="true">→</span>
          <div className="gap-side">
            <div className="gap-side-label">{t.labels.usEquivalent}</div>
            <div className="gap-side-value">{data.usEquivalent}</div>
          </div>
        </div>
        <div
          className="gap-risk-badge"
          style={{ background: risk.bg }}
          role="status"
          aria-label={`Risk level: ${risk.label}`}
        >
          {risk.label}
        </div>
        <p className="gap-notes">{data.notes}</p>

        {showBreakdown && (
          <div className="gap-subject-breakdown">
            <div className="gap-breakdown-heading">
              {t.results.subjectGapHeading || 'Subject Gap Breakdown'}
            </div>
            {selectedSubjects.map(subject => {
              const { fill, label } = assessSubjectGap(subject, homeGrade, englishProficiency)
              return (
                <div key={subject} className="gap-subject-row">
                  <span className="gap-subject-name">{capitalize(subject)}</span>
                  <div className="gap-bar-track" role="progressbar" aria-valuenow={fill} aria-valuemin={0} aria-valuemax={100}>
                    <div
                      className="gap-bar-fill"
                      style={{ width: `${fill}%`, background: barColor(fill) }}
                    />
                  </div>
                  <span className="gap-subject-note">{label}</span>
                </div>
              )
            })}
            <p className="gap-breakdown-disclaimer">
              {t.results.subjectGapDisclaimer || 'Subject estimates are based on general grade-level patterns. A school assessment will give your child an accurate picture.'}
            </p>
          </div>
        )}
      </div>
    </>
  )
}
