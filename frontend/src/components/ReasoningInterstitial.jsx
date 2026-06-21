import { useEffect, useRef, useState } from 'react'
import { analyzeStudent } from '../api/chat.js'
import { matchTutors, COUNTRY_LANGUAGE } from '../utils/tutorMatcher.js'
import { ALL_TUTORS } from '../data/tutors.js'

const delay = ms => new Promise(r => setTimeout(r, ms))

// ── Finding line builders (translated) ──────────────────────────────────────

function deriveFinding1(intakeData, t) {
  const f = t?.chat?.interstitialFindings || {}
  const grade = intakeData?.homeGrade || 'the completed grade'
  const proficiency = intakeData?.englishProficiency
  if (proficiency === 'NONE' || proficiency === 'SOME') {
    return (f.f1_lang || '→ Academic gap is primarily language-based. Subject knowledge aligns with {grade} level.')
      .replace('{grade}', grade)
  }
  if (proficiency === 'FLUENT') {
    return (f.f1_fluent || '→ Curriculum comparison complete. {grade} placement assessed against U.S. standards.')
      .replace('{grade}', grade)
  }
  return f.f1_default || '→ Curriculum comparison complete. Subject breakdown ready.'
}

function deriveFinding2(result, t) {
  const f = t?.chat?.interstitialFindings || {}
  const district = result?.structured?.district?.name ?? result?.district?.name ?? 'District'
  const hasTitle1 = !!(result?.structured?.district?.titleI ?? result?.district?.titleI)
  const rights = result?.structured?.rights ?? result?.rights ?? []
  const count = rights.length
  const programWord = count === 1 ? (f.f2_program || 'program identified') : (f.f2_programs || 'programs identified')
  const template = hasTitle1
    ? (f.f2_title1 || '→ {district} confirmed. Title I confirmed. {count} {programs}.')
    : (f.f2_base   || '→ {district} confirmed. {count} {programs}.')
  return template
    .replace('{district}', district)
    .replace('{count}', count)
    .replace('{programs}', programWord)
}

function deriveFinding3(matches, intakeData, t) {
  const f = t?.chat?.interstitialFindings || {}
  const primary  = matches?.primary?.length ?? 0
  const lang     = COUNTRY_LANGUAGE[intakeData?.homeCountry] || null
  const subjects = (intakeData?.concerns || []).join(', ') || 'selected subjects'
  const resWord  = primary === 1 ? (f.f3_resource || 'resource') : (f.f3_resources || 'resources')
  if (lang) {
    return (f.f3_lang || '→ {count} {resources} matched to {subjects} with {lang} support.')
      .replace('{count}', primary)
      .replace('{resources}', resWord)
      .replace('{subjects}', subjects)
      .replace('{lang}', lang)
  }
  return (f.f3_no_lang || '→ {count} {resources} matched to {subjects} at {grade} level.')
    .replace('{count}', primary)
    .replace('{resources}', resWord)
    .replace('{subjects}', subjects)
    .replace('{grade}', intakeData?.homeGrade || 'this')
}

function deriveFinding4(intakeData, t) {
  const f = t?.chat?.interstitialFindings || {}
  const lang = COUNTRY_LANGUAGE[intakeData?.homeCountry] || null
  if (lang) {
    return (f.f4_lang || '→ Script prepared in {lang}. Ready to review.').replace('{lang}', lang)
  }
  return f.f4_default || '→ Advocacy materials ready to review.'
}

// ── Step list builder ────────────────────────────────────────────────────────

function buildSteps(intakeData, t) {
  const country    = intakeData?.homeCountry || '…'
  const district   = intakeData?.districtName || intakeData?.district || '…'
  const hasConcerns = (intakeData?.concerns?.length ?? 0) > 0
  const subjectList = (intakeData?.concerns || []).join(', ')

  const base = t?.chat?.analyzingSteps || [
    `Comparing ${country} curriculum to U.S. standards…`,
    `Checking program eligibility for ${district}…`,
    'Preparing your advocacy materials…',
  ]
  const interp = s => s.replace('{country}', country).replace('{district}', district)

  const resourceLabel = (t?.chat?.analyzingStepResources || 'Fetching resources matched to {subjects}…')
    .replace('{subjects}', subjectList)

  return [
    { id: 'curriculum',  label: interp(base[0]), finding: null, status: 'pending' },
    { id: 'eligibility', label: interp(base[1]), finding: null, status: 'pending' },
    ...(hasConcerns ? [{ id: 'resources', label: resourceLabel, finding: null, status: 'pending' }] : []),
    { id: 'advocacy',    label: interp(base[2]), finding: null, status: 'pending' },
  ]
}

// ── StepIcon ─────────────────────────────────────────────────────────────────

function StepIcon({ status }) {
  if (status === 'complete') {
    return (
      <div className="interstitial-icon complete">
        <span className="interstitial-check" aria-hidden="true">✓</span>
      </div>
    )
  }
  if (status === 'active') {
    return (
      <div className="interstitial-icon active">
        <span className="interstitial-spinner" aria-hidden="true" />
      </div>
    )
  }
  if (status === 'error') {
    return (
      <div className="interstitial-icon error">
        <span className="interstitial-check" aria-hidden="true">×</span>
      </div>
    )
  }
  return <div className="interstitial-icon pending" />
}

// ── Main component ───────────────────────────────────────────────────────────

export default function ReasoningInterstitial({ intakeData, t, onComplete }) {
  const [steps, setSteps]           = useState(() => buildSteps(intakeData, t))
  const [showSummary, setShowSummary] = useState(false)
  const [errorState, setErrorState]   = useState(false)
  const [retryKey, setRetryKey]       = useState(0)
  const [tickIndex, setTickIndex]     = useState(0)

  const analysisRef     = useRef(null)
  const resourceMatchRef = useRef(null)
  const onCompleteRef   = useRef(onComplete)
  onCompleteRef.current = onComplete

  // ── Step state helpers ─────────────────────────────────────────────────────
  const updateStep     = (id, changes) =>
    setSteps(prev => prev.map(s => s.id === id ? { ...s, ...changes } : s))
  const setStepStatus  = (id, status)  => updateStep(id, { status })
  const setStepFinding = (id, finding) => updateStep(id, { finding })

  // ── Restart ────────────────────────────────────────────────────────────────
  function restartInterstitial() {
    setSteps(buildSteps(intakeData, t))
    setShowSummary(false)
    setErrorState(false)
    setTickIndex(0)
    analysisRef.current     = null
    resourceMatchRef.current = null
    setRetryKey(k => k + 1)
  }

  // ── Working-text ticker (resets when active step changes) ─────────────────
  const activeStepId = steps.find(s => s.status === 'active')?.id

  useEffect(() => {
    setTickIndex(0)
    if (!activeStepId) return
    const id = setInterval(() => setTickIndex(i => i + 1), 3000)
    return () => clearInterval(id)
  }, [activeStepId])

  // ── Main sequence ──────────────────────────────────────────────────────────
  useEffect(() => {
    const hasConcerns = (intakeData?.concerns?.length ?? 0) > 0
    let cancelled = false

    async function run() {
      // Step 1 — curriculum (local, no API)
      if (cancelled) return
      setStepStatus('curriculum', 'active')
      await delay(900)
      if (cancelled) return
      setStepFinding('curriculum', deriveFinding1(intakeData, t))
      await delay(450)
      if (cancelled) return
      setStepStatus('curriculum', 'complete')
      await delay(300)

      // Step 2 — eligibility (real API, no artificial timeout)
      if (cancelled) return
      setStepStatus('eligibility', 'active')

      const apiArgs = {
        homeCountry:        intakeData?.homeCountry,
        homeGrade:          intakeData?.homeGrade,
        age:                intakeData?.age,
        district:           intakeData?.district,
        districtId:         intakeData?.districtId,
        districtName:       intakeData?.districtName,
        city:               intakeData?.city,
        state:              intakeData?.state,
        concerns:           intakeData?.concerns,
        language:           intakeData?.language,
        englishProficiency: intakeData?.englishProficiency,
      }

      let result = null
      try {
        result = await analyzeStudent(apiArgs)
        if (cancelled) return
        analysisRef.current = result
        setStepFinding('eligibility', deriveFinding2(result, t))
        await delay(700)
        if (cancelled) return
        setStepStatus('eligibility', 'complete')
        await delay(500)
      } catch {
        if (cancelled) return
        setErrorState(true)
        return
      }

      // Step 3 — resource matching (client-side, only if concerns)
      if (hasConcerns) {
        if (cancelled) return
        setStepStatus('resources', 'active')
        const matches = matchTutors(ALL_TUTORS, intakeData)
        resourceMatchRef.current = matches  // set before any delay
        await delay(1200)
        if (cancelled) return
        setStepFinding('resources', deriveFinding3(matches, intakeData, t))
        await delay(900)
        if (cancelled) return
        setStepStatus('resources', 'complete')
        await delay(600)
      }

      // Step 4 — advocacy materials
      if (cancelled) return
      setStepStatus('advocacy', 'active')
      await delay(900)
      if (cancelled) return
      setStepFinding('advocacy', deriveFinding4(intakeData, t))
      await delay(800)
      if (cancelled) return
      setStepStatus('advocacy', 'complete')

      // Completion summary
      await delay(900)
      if (cancelled) return
      setShowSummary(true)

      // Transition
      await delay(1500)
      if (cancelled) return
      onCompleteRef.current(analysisRef.current, resourceMatchRef.current)
    }

    run()
    return () => { cancelled = true }
  }, [retryKey]) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Working-text map ───────────────────────────────────────────────────────
  const country  = intakeData?.homeCountry || '…'
  const district = intakeData?.districtName || intakeData?.district || '…'
  const working  = t?.chat?.interstitialWorking || {}
  const interpArr = arr => (arr || []).map(s =>
    s.replace('{country}', country).replace('{district}', district)
  )
  const workingTexts = {
    curriculum:  interpArr(working.curriculum),
    eligibility: interpArr(working.eligibility),
    resources:   interpArr(working.resources),
    advocacy:    interpArr(working.advocacy),
  }

  // ── Completion summary ─────────────────────────────────────────────────────
  let inputCount = 0
  if (intakeData?.homeCountry) inputCount++
  if (intakeData?.homeGrade) inputCount++
  if (intakeData?.englishProficiency) inputCount++
  if (intakeData?.districtName || intakeData?.district) inputCount++
  if ((intakeData?.concerns?.length ?? 0) > 0) inputCount++

  const summaryText = (t?.chat?.analysisSummary ||
    'Analysis complete · Based on {count} inputs · Results include responsible AI safeguards')
    .replace('{count}', inputCount)

  const errorMsg   = t?.chat?.interstitialError || t?.errors?.genericError || 'Something went wrong while analyzing your information.'
  const retryLabel = t?.chat?.retryBtn || 'Try Again'

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        .interstitial-root {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: var(--color-navy);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
        }
        .interstitial-logo {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 3rem;
          letter-spacing: -0.01em;
        }
        .interstitial-card {
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .interstitial-step {
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .interstitial-step.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .interstitial-step-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .interstitial-icon {
          width: 1.75rem;
          height: 1.75rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.15rem;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .interstitial-icon.pending  { border: 2px solid rgba(255,255,255,0.2); }
        .interstitial-icon.active   { border: 2px solid var(--color-amber-light); background: rgba(245,158,11,0.15); }
        .interstitial-icon.complete { background: var(--color-amber); border: 2px solid var(--color-amber); }
        .interstitial-icon.error    { background: rgba(239,68,68,0.8); border: 2px solid rgba(239,68,68,0.8); }
        .interstitial-spinner {
          width: 0.8rem;
          height: 0.8rem;
          border: 2px solid rgba(255,255,255,0.25);
          border-top-color: var(--color-amber-light);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .interstitial-check {
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          line-height: 1;
        }
        .interstitial-text {
          font-size: 1.05rem;
          line-height: 1.5;
          color: rgba(255,255,255,0.75);
          font-family: var(--font-body);
          transition: color 0.3s ease;
          margin: 0;
        }
        .interstitial-text.active   { color: rgba(255,255,255,0.95); }
        .interstitial-text.complete { color: rgba(255,255,255,0.6); }
        .interstitial-text.error    { color: rgba(252,165,165,0.9); }
        .interstitial-step-finding {
          font-size: 0.80rem;
          color: rgba(255,255,255,0.55);
          font-style: italic;
          margin: 0.3rem 0 0 0;
          padding-left: 2.75rem;
          line-height: 1.4;
          animation: fadeIn 0.3s ease;
        }
        .interstitial-working {
          font-size: 0.78rem;
          color: rgba(245,158,11,0.60);
          margin: 0.28rem 0 0 0;
          padding-left: 2.75rem;
          line-height: 1.4;
          animation: fadeIn 0.35s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .interstitial-summary {
          font-size: 0.78rem;
          color: rgba(212,130,10,0.70);
          text-align: center;
          margin-top: 2rem;
          letter-spacing: 0.02em;
          animation: fadeIn 0.4s ease;
        }
        .interstitial-error {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          text-align: center;
          max-width: 360px;
        }
        .interstitial-error p {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.5;
          font-family: var(--font-body);
          margin: 0;
        }
        .interstitial-retry-btn {
          padding: 0.65rem 1.5rem;
          background: var(--color-amber);
          color: var(--color-navy);
          border: none;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-body);
          transition: opacity 0.2s ease;
        }
        .interstitial-retry-btn:hover { opacity: 0.85; }
      `}</style>

      <div className="interstitial-root" role="status" aria-live="polite" aria-label="Analyzing your information">
        <div className="interstitial-logo">
          <span aria-hidden="true">⚓</span> Anchor
        </div>

        {errorState ? (
          <div className="interstitial-error">
            <p>{errorMsg}</p>
            <button className="interstitial-retry-btn" onClick={restartInterstitial}>{retryLabel}</button>
          </div>
        ) : (
          <div className="interstitial-card">
            {steps.map(step => {
              const wTexts  = workingTexts[step.id] || []
              const wText   = step.status === 'active' && wTexts.length > 0
                ? wTexts[tickIndex % wTexts.length]
                : null
              return (
                <div
                  key={step.id}
                  className={`interstitial-step${step.status !== 'pending' ? ' visible' : ''}`}
                >
                  <div className="interstitial-step-row">
                    <StepIcon status={step.status} />
                    <p className={`interstitial-text ${step.status}`}>{step.label}</p>
                  </div>
                  {wText && (
                    <p className="interstitial-working" key={`${step.id}-w-${tickIndex}`}>
                      {wText}
                    </p>
                  )}
                  {step.finding && (
                    <p className="interstitial-step-finding">{step.finding}</p>
                  )}
                </div>
              )
            })}
            {showSummary && <p className="interstitial-summary">{summaryText}</p>}
          </div>
        )}
      </div>
    </>
  )
}
