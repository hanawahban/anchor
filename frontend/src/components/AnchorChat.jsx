import { useState, useRef, useEffect, useCallback } from 'react'

function getShortLabel(right, shortLabels) {
  if (!right || !shortLabels) return null
  return shortLabels[right.id] || right.title || null
}

export default function AnchorChat({ structured, intakeData, language, t, mode = 'floating', collapsed = false, onToggleCollapse }) {
  const [isOpen, setIsOpen]               = useState(false)
  const [messages, setMessages]           = useState([])
  const [chipsUsed, setChipsUsed]         = useState(false)
  const [input, setInput]                 = useState('')
  const [isLoading, setIsLoading]         = useState(false)
  const [openingLoaded, setOpeningLoaded] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef       = useRef(null)

  const tc = t.anchorChat || {}

  const programCount = (structured?.rights || []).length
  const districtName = structured?.district?.name || intakeData?.districtName || ''
  const firstRight   = structured?.rights?.[0]
  const shortLabel   = getShortLabel(firstRight, tc.shortLabels)

  const chips = [
    shortLabel ? (tc.chip1 || '').replace('{program}', shortLabel) : null,
    tc.chip2,
    tc.chip3,
  ].filter(Boolean)

  const buildContext = useCallback(() => ({
    homeCountry:        intakeData?.homeCountry,
    homeGrade:          intakeData?.homeGrade,
    englishProficiency: intakeData?.englishProficiency,
    districtName:       structured?.district?.name || intakeData?.districtName,
    state:              structured?.district?.state || intakeData?.state,
    concerns:           intakeData?.concerns || [],
    programs:           (structured?.rights || []).map(r => r.title),
    riskLevel:          structured?.curriculumGap?.riskLevel,
  }), [structured, intakeData])

  function getFallback() {
    const template = tc.fallbackOpening || "I'm here to help you understand what we found for {district}. Ask me about the programs your child may qualify for, their rights at school, or how to use your advocacy script."
    return template.replace('{district}', districtName || tc.yourDistrict || 'your district')
  }

  async function loadOpeningMessage() {
    if (openingLoaded) return
    setOpeningLoaded(true)
    setIsLoading(true)

    if (import.meta.env.VITE_USE_MOCK === 'true') {
      setMessages([{ role: 'assistant', content: getFallback() }])
      setIsLoading(false)
      return
    }

    try {
      const res = await fetch('/api/chat/contextual/opening', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context: buildContext(), programCount, language }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setMessages([{ role: 'assistant', content: data.message || getFallback() }])
    } catch {
      setMessages([{ role: 'assistant', content: getFallback() }])
    } finally {
      setIsLoading(false)
    }
  }

  function handleOpen() {
    setIsOpen(true)
    if (!openingLoaded) loadOpeningMessage()
  }

  function handleClose() {
    setIsOpen(false)
  }

  function handleClear() {
    setMessages([])
    setChipsUsed(false)
    setInput('')
    setOpeningLoaded(false)
    setTimeout(() => {
      setIsLoading(true)
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        setMessages([{ role: 'assistant', content: getFallback() }])
        setIsLoading(false)
        setOpeningLoaded(true)
        return
      }
      fetch('/api/chat/contextual/opening', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context: buildContext(), programCount, language }),
      })
        .then(r => r.ok ? r.json() : Promise.reject(r.status))
        .then(data => {
          setMessages([{ role: 'assistant', content: data.message || getFallback() }])
        })
        .catch(() => {
          setMessages([{ role: 'assistant', content: getFallback() }])
        })
        .finally(() => {
          setIsLoading(false)
          setOpeningLoaded(true)
        })
    }, 0)
  }

  async function handleSend(content) {
    if (!content.trim() || isLoading) return
    const userMsg = { role: 'user', content: content.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    if (import.meta.env.VITE_USE_MOCK === 'true') {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'Based on what you shared, your child may qualify for ESL/language support. You can request this at school enrollment by asking for an ELL assessment within 30 days.',
        }])
        setIsLoading(false)
      }, 800)
      return
    }

    try {
      const res = await fetch('/api/chat/contextual', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: newMessages.map(m => ({ role: m.role, content: m.content })),
          context: buildContext(),
          language,
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
      if (data.appendToScript) {
        window.dispatchEvent(new CustomEvent('anchor:appendToScript', {
          detail: { question: data.appendToScript },
        }))
      }
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: tc.errorMsg || 'Something went wrong. Please try again.',
      }])
    } finally {
      setIsLoading(false)
    }
  }

  function handleChip(chip) {
    setChipsUsed(true)
    handleSend(chip)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend(input)
    }
  }

  // Panel mode: fire opening message on mount
  useEffect(() => {
    if (mode === 'panel') loadOpeningMessage()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // ESC to close — floating mode only
  useEffect(() => {
    if (mode !== 'floating') return
    function onKey(e) {
      if (e.key === 'Escape' && isOpen) handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, mode])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  // Focus input on open — floating mode only
  useEffect(() => {
    if (mode === 'floating' && isOpen) setTimeout(() => inputRef.current?.focus(), 100)
  }, [isOpen, mode])

  // Shared JSX fragments
  const messagesArea = (
    <div className="anchor-chat-messages" aria-live="polite" aria-label="Chat messages">
      {messages.map((msg, i) => (
        <div key={i} className={`anchor-chat-bubble ${msg.role}`}>
          {msg.content}
        </div>
      ))}

      {!chipsUsed && messages.length === 1 && !isLoading && chips.length > 0 && (
        <div className="anchor-chat-chips">
          {chips.map(chip => (
            <button key={chip} className="anchor-chat-chip" onClick={() => handleChip(chip)}>
              {chip}
            </button>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="anchor-chat-typing" aria-label="Anchor is typing">
          <span /><span /><span />
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  )

  const disclaimerArea = (
    <div className="anchor-chat-disclaimer" role="note">
      {tc.disclaimer || 'Anchor explains your rights and findings only. A school counselor makes all final decisions.'}
    </div>
  )

  const inputArea = (
    <div className="anchor-chat-input-row">
      <textarea
        ref={inputRef}
        className="anchor-chat-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={tc.placeholder || 'Ask a question…'}
        rows={1}
        aria-label={tc.placeholder || 'Ask a question'}
        disabled={isLoading}
      />
      <button
        className="anchor-chat-send"
        onClick={() => handleSend(input)}
        disabled={!input.trim() || isLoading}
        aria-label="Send"
      >
        ↑
      </button>
    </div>
  )

  return (
    <>
      <style>{`
        .anchor-chat-btn {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: var(--color-navy, #0f2340);
          color: white;
          border: none;
          border-radius: 2rem;
          font-size: 0.9rem;
          font-weight: 600;
          font-family: var(--font-body);
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(15,35,64,0.35);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .anchor-chat-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(15,35,64,0.45);
        }
        .anchor-chat-btn:active { transform: translateY(0); }
        .anchor-chat-btn-icon { font-size: 1.1rem; }

        .anchor-chat-overlay { display: none; }
        @media (max-width: 768px) {
          .anchor-chat-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.45);
            z-index: 1050;
          }
        }

        .anchor-chat-modal {
          position: fixed;
          bottom: 5rem;
          right: 1.5rem;
          width: 400px;
          height: 560px;
          z-index: 1050;
          background: var(--color-surface, #fff);
          border-radius: 1rem;
          box-shadow: 0 8px 40px rgba(15,35,64,0.22);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: chatSlideIn 0.2s ease both;
        }
        @keyframes chatSlideIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (max-width: 768px) {
          .anchor-chat-modal {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            bottom: auto;
            right: auto;
            border-radius: 0;
          }
        }

        .anchor-chat-panel-root {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
        }
        .anchor-chat-panel-collapsed-strip {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          cursor: pointer;
          background: transparent;
          border: none;
          width: 100%;
          padding: 1rem 0;
          gap: 0.75rem;
          font-family: var(--font-body);
          transition: background 0.15s;
        }
        .anchor-chat-panel-collapsed-strip:hover {
          background: var(--color-surface-warm, #faf8f4);
        }
        .anchor-chat-panel-collapsed-icon {
          font-size: 1.1rem;
        }
        .anchor-chat-panel-collapsed-label {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--color-navy, #0f2340);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
        .anchor-chat-collapse-btn {
          width: 1.75rem;
          height: 1.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border, #e5e7eb);
          background: transparent;
          color: var(--color-text-muted, #6b7280);
          font-size: 0.85rem;
          cursor: pointer;
          border-radius: 0.375rem;
          transition: background 0.15s, color 0.15s;
          flex-shrink: 0;
        }
        .anchor-chat-collapse-btn:hover {
          background: #f3f4f6;
          color: var(--color-navy, #0f2340);
        }

        .anchor-chat-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1rem 1rem 0.75rem 1rem;
          border-bottom: 1px solid var(--color-border, #e5e7eb);
          flex-shrink: 0;
          gap: 0.5rem;
        }
        .anchor-chat-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-navy, #0f2340);
          display: block;
        }
        .anchor-chat-subtitle {
          font-size: 0.75rem;
          color: var(--color-text-muted, #6b7280);
          line-height: 1.4;
          margin: 0.15rem 0 0 0;
        }
        .anchor-chat-header-actions {
          display: flex;
          gap: 0.4rem;
          align-items: center;
          flex-shrink: 0;
        }
        .anchor-chat-clear {
          padding: 0.3rem 0.65rem;
          border: 1px solid var(--color-border-strong, #d1d5db);
          border-radius: 0.375rem;
          background: transparent;
          color: var(--color-text-muted, #6b7280);
          font-size: 0.75rem;
          font-family: var(--font-body);
          cursor: pointer;
          transition: color 0.15s, border-color 0.15s;
        }
        .anchor-chat-clear:hover { color: var(--color-navy, #0f2340); border-color: var(--color-navy, #0f2340); }
        .anchor-chat-close {
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          color: var(--color-text-muted, #6b7280);
          font-size: 1.1rem;
          cursor: pointer;
          border-radius: 0.375rem;
          transition: background 0.15s, color 0.15s;
        }
        .anchor-chat-close:hover { background: #f3f4f6; color: var(--color-navy, #0f2340); }

        .anchor-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 0.875rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          scroll-behavior: smooth;
        }
        .anchor-chat-bubble {
          max-width: 85%;
          padding: 0.6rem 0.875rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          line-height: 1.55;
          word-break: break-word;
        }
        .anchor-chat-bubble.assistant {
          background: var(--color-surface-warm, #faf8f4);
          border: 1px solid var(--color-border, #e5e7eb);
          color: var(--color-text, #1a1a2e);
          border-bottom-left-radius: 0.25rem;
          align-self: flex-start;
        }
        .anchor-chat-bubble.user {
          background: var(--color-navy, #0f2340);
          color: white;
          border-bottom-right-radius: 0.25rem;
          align-self: flex-end;
        }
        .anchor-chat-typing {
          display: flex;
          gap: 0.3rem;
          align-items: center;
          padding: 0.6rem 0.875rem;
          background: var(--color-surface-warm, #faf8f4);
          border: 1px solid var(--color-border, #e5e7eb);
          border-radius: 1rem;
          border-bottom-left-radius: 0.25rem;
          align-self: flex-start;
          width: fit-content;
        }
        .anchor-chat-typing span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-text-muted, #9ca3af);
          animation: typingBounce 1.2s ease infinite;
        }
        .anchor-chat-typing span:nth-child(2) { animation-delay: 0.2s; }
        .anchor-chat-typing span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }

        .anchor-chat-chips {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-top: 0.25rem;
          align-self: flex-start;
          width: 100%;
        }
        .anchor-chat-chip {
          padding: 0.5rem 0.75rem;
          background: transparent;
          border: 1.5px solid var(--color-amber, #d4820a);
          border-radius: 0.5rem;
          color: var(--color-amber, #d4820a);
          font-size: 0.8rem;
          font-family: var(--font-body);
          cursor: pointer;
          text-align: left;
          line-height: 1.4;
          transition: background 0.15s, color 0.15s;
        }
        .anchor-chat-chip:hover {
          background: var(--color-amber, #d4820a);
          color: white;
        }

        .anchor-chat-disclaimer {
          padding: 0.5rem 1rem;
          background: #fff8e6;
          border-top: 1px solid #f5d76e;
          font-size: 0.72rem;
          color: var(--color-text-muted, #6b7280);
          line-height: 1.45;
          flex-shrink: 0;
        }

        .anchor-chat-input-row {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-top: 1px solid var(--color-border, #e5e7eb);
          flex-shrink: 0;
          align-items: flex-end;
        }
        .anchor-chat-input {
          flex: 1;
          padding: 0.6rem 0.875rem;
          border: 1.5px solid var(--color-border, #e5e7eb);
          border-radius: 1.5rem;
          font-size: 0.875rem;
          font-family: var(--font-body);
          color: var(--color-text, #1a1a2e);
          background: var(--color-bg, #faf8f4);
          resize: none;
          min-height: 2.5rem;
          max-height: 6rem;
          line-height: 1.4;
          outline: none;
          transition: border-color 0.15s;
        }
        .anchor-chat-input:focus { border-color: var(--color-navy, #0f2340); }
        .anchor-chat-input::placeholder { color: #9ca3af; }
        .anchor-chat-send {
          width: 2.5rem;
          height: 2.5rem;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-navy, #0f2340);
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 1rem;
          cursor: pointer;
          transition: opacity 0.15s, transform 0.15s;
        }
        .anchor-chat-send:hover:not(:disabled) { opacity: 0.88; transform: scale(1.05); }
        .anchor-chat-send:disabled { opacity: 0.4; cursor: default; }
      `}</style>

      {/* Floating button — floating mode only */}
      {mode === 'floating' && (
        <button
          className="anchor-chat-btn"
          onClick={handleOpen}
          aria-label={tc.btnLabel || 'Ask Anchor a question'}
          aria-expanded={isOpen}
        >
          <span className="anchor-chat-btn-icon" aria-hidden="true">💬</span>
          {tc.btnLabel || 'Ask Anchor a question'}
        </button>
      )}

      {/* Floating overlay + modal — floating mode only */}
      {mode === 'floating' && isOpen && (
        <>
          <div className="anchor-chat-overlay" onClick={handleClose} aria-hidden="true" />

          <div className="anchor-chat-modal" role="dialog" aria-modal="true" aria-label={tc.modalTitle || 'Ask Anchor'}>
            <div className="anchor-chat-header">
              <div>
                <span className="anchor-chat-title">{tc.modalTitle || 'Ask Anchor'}</span>
                <p className="anchor-chat-subtitle">{tc.modalSubtitle}</p>
              </div>
              <div className="anchor-chat-header-actions">
                {messages.length > 1 && (
                  <button className="anchor-chat-clear" onClick={handleClear} aria-label={tc.clearBtn || 'Clear'}>
                    {tc.clearBtn || 'Clear'}
                  </button>
                )}
                <button className="anchor-chat-close" onClick={handleClose} aria-label="Close">✕</button>
              </div>
            </div>

            {messagesArea}
            {disclaimerArea}
            {inputArea}
          </div>
        </>
      )}

      {/* Panel — panel mode only, inline, no button, no close */}
      {mode === 'panel' && (
        <div className="anchor-chat-panel-root">
          {collapsed ? (
            <button
              className="anchor-chat-panel-collapsed-strip"
              onClick={onToggleCollapse}
              aria-label="Open Ask Anchor chat"
            >
              <span className="anchor-chat-panel-collapsed-icon" aria-hidden="true">💬</span>
              <span className="anchor-chat-panel-collapsed-label">Ask Anchor</span>
            </button>
          ) : (
            <>
              <div className="anchor-chat-header">
                <div>
                  <span className="anchor-chat-title">{tc.modalTitle || 'Ask Anchor'}</span>
                  <p className="anchor-chat-subtitle">{tc.modalSubtitle}</p>
                </div>
                <div className="anchor-chat-header-actions">
                  {messages.length > 1 && (
                    <button className="anchor-chat-clear" onClick={handleClear} aria-label={tc.clearBtn || 'Clear'}>
                      {tc.clearBtn || 'Clear'}
                    </button>
                  )}
                  <button
                    className="anchor-chat-collapse-btn"
                    onClick={onToggleCollapse}
                    aria-label="Collapse chat"
                    title="Collapse"
                  >
                    ›
                  </button>
                </div>
              </div>

              {messagesArea}
              {disclaimerArea}
              {inputArea}
            </>
          )}
        </div>
      )}
    </>
  )
}
