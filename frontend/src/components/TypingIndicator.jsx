import { useState, useEffect } from 'react'

export default function TypingIndicator({ t }) {
  const steps = t.chat.analyzingSteps || ['Analyzing...']
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setStepIndex(i => (i + 1) % steps.length)
    }, 1600)
    return () => clearInterval(id)
  }, [steps.length])

  return (
    <>
      <style>{`
        .typing-wrap {
          display: flex;
          align-items: flex-end;
          gap: 0.5rem;
          padding: 0.25rem 0;
        }
        .typing-avatar {
          width: 1.75rem;
          height: 1.75rem;
          border-radius: 50%;
          background: var(--color-navy);
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .typing-bubble {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px 16px 16px 4px;
          padding: 0.625rem 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .typing-dots {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          flex-shrink: 0;
        }
        .typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-text-muted);
          animation: typingBounce 1.2s ease-in-out infinite;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.15s; }
        .typing-dot:nth-child(3) { animation-delay: 0.3s; }
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        .typing-step {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-style: italic;
          animation: stepFade 0.35s ease;
        }
        @keyframes stepFade {
          from { opacity: 0; transform: translateY(2px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="typing-wrap" aria-label={steps[stepIndex]} role="status">
        <div className="typing-avatar" aria-hidden="true">A</div>
        <div className="typing-bubble" aria-hidden="true">
          <div className="typing-dots">
            <div className="typing-dot" />
            <div className="typing-dot" />
            <div className="typing-dot" />
          </div>
          <span className="typing-step" key={stepIndex}>{steps[stepIndex]}</span>
        </div>
      </div>
    </>
  )
}
