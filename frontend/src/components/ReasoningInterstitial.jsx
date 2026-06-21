import { useEffect, useRef, useState } from 'react'

const STEP_DELAY = 900   // ms between each step appearing
const MIN_TOTAL  = 3000  // minimum display time from mount (ms)

export default function ReasoningInterstitial({ homeCountry, district, t, analysisPromise, onComplete }) {
  const [visibleSteps, setVisibleSteps] = useState(0)

  const apiResult      = useRef(null)
  const apiDone        = useRef(false)
  const animDone       = useRef(false)
  const completeFired  = useRef(false)
  const onCompleteRef  = useRef(onComplete)
  onCompleteRef.current = onComplete

  const rawSteps = t.chat.analyzingSteps
  const steps = rawSteps.map(s =>
    s.replace('{country}', homeCountry || '…').replace('{district}', district || '…')
  )

  function maybeComplete() {
    if (apiDone.current && animDone.current && !completeFired.current) {
      completeFired.current = true
      onCompleteRef.current(apiResult.current)
    }
  }

  useEffect(() => {
    const timers = []
    const startTime = Date.now()

    steps.forEach((_, i) => {
      timers.push(setTimeout(() => {
        setVisibleSteps(i + 1)
        if (i === steps.length - 1) {
          const elapsed       = Date.now() - startTime
          const remainingWait = Math.max(0, MIN_TOTAL - elapsed)
          timers.push(setTimeout(() => {
            animDone.current = true
            maybeComplete()
          }, remainingWait))
        }
      }, STEP_DELAY * (i + 1)))
    })

    let cancelled = false
    analysisPromise
      .then(result => {
        if (cancelled) return
        apiResult.current = result
        apiDone.current   = true
        maybeComplete()
      })
      .catch(() => {
        if (cancelled) return
        apiResult.current = null
        apiDone.current   = true
        maybeComplete()
      })

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
          align-items: flex-start;
          gap: 1rem;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .interstitial-step.visible {
          opacity: 1;
          transform: translateY(0);
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
        .interstitial-icon.pending {
          border: 2px solid rgba(255,255,255,0.2);
        }
        .interstitial-icon.active {
          border: 2px solid var(--color-amber-light);
          background: rgba(245,158,11,0.15);
        }
        .interstitial-icon.complete {
          background: var(--color-amber);
          border: 2px solid var(--color-amber);
        }
        .interstitial-spinner {
          width: 0.8rem;
          height: 0.8rem;
          border: 2px solid rgba(255,255,255,0.25);
          border-top-color: var(--color-amber-light);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
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
        }
        .interstitial-text.active {
          color: rgba(255,255,255,0.95);
        }
        .interstitial-text.complete {
          color: rgba(255,255,255,0.6);
        }
      `}</style>

      <div className="interstitial-root" role="status" aria-live="polite" aria-label="Analyzing your information">
        <div className="interstitial-logo">
          <span aria-hidden="true">⚓</span> Anchor
        </div>

        <div className="interstitial-card">
          {steps.map((text, i) => {
            const isVisible  = visibleSteps > i
            const isComplete = visibleSteps > i + 1
            const isActive   = visibleSteps === i + 1

            return (
              <div key={i} className={`interstitial-step${isVisible ? ' visible' : ''}`}>
                <div className={`interstitial-icon ${isComplete ? 'complete' : isActive ? 'active' : 'pending'}`}>
                  {isComplete && <span className="interstitial-check" aria-hidden="true">✓</span>}
                  {isActive   && <span className="interstitial-spinner" aria-hidden="true" />}
                </div>
                <p className={`interstitial-text${isComplete ? ' complete' : isActive ? ' active' : ''}`}>
                  {text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
