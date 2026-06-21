import { useState, useRef, useEffect } from 'react'
import { sendMessage } from '../api/chat.js'
import TypingIndicator from './TypingIndicator.jsx'
import translations from '../translations/translations.js'

export default function ChatPanel({ language, t, onStructured }) {
  const initialMsg = (translations[language] || translations.en).chat.initialMessage

  const [messages, setMessages] = useState([
    { role: 'assistant', content: initialMsg }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [profile, setProfile] = useState({
    districtId: null,
    homeCountry: null,
    homeGrade: null,
    subject: null,
  })

  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  function handleStartOver() {
    const fresh = (translations[language] || translations.en).chat.initialMessage
    setMessages([{ role: 'assistant', content: fresh }])
    setInput('')
    setIsLoading(false)
    setError(null)
    setProfile({ districtId: null, homeCountry: null, homeGrade: null, subject: null })
    onStructured(null)
    textareaRef.current?.focus()
  }

  function handleInput(e) {
    setInput(e.target.value)
    const ta = e.target
    ta.style.height = 'auto'
    ta.style.height = Math.min(ta.scrollHeight, 120) + 'px'
  }

  async function handleSend() {
    const text = input.trim()
    if (!text || isLoading) return

    const userMsg = { role: 'user', content: text }
    const nextMessages = [...messages, userMsg]
    setMessages(nextMessages)
    setInput('')
    setError(null)
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
    setIsLoading(true)

    try {
      const data = await sendMessage({
        history: nextMessages,
        language,
        profile,
      })

      if (data.profileUpdate && Object.keys(data.profileUpdate).length > 0) {
        setProfile(prev => ({ ...prev, ...data.profileUpdate }))
      }

      if (data.structured) {
        onStructured(data.structured)
      }

      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.reply || '' }
      ])
    } catch {
      setError(t.errors.networkError)
    } finally {
      setIsLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <style>{`
        .chat-root {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--color-bg);
        }
        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--color-border);
          background: var(--color-surface);
          flex-shrink: 0;
        }
        .chat-logo {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--color-navy);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .chat-start-over {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-text-muted);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.375rem 0.625rem;
          border-radius: var(--radius-sm);
          transition: color var(--transition-fast), background var(--transition-fast);
        }
        .chat-start-over:hover {
          color: var(--color-navy);
          background: var(--color-surface-warm);
        }
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .chat-msg-wrap {
          display: flex;
          gap: 0.5rem;
          align-items: flex-end;
          max-width: 88%;
        }
        .chat-msg-wrap.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        .chat-msg-wrap.assistant {
          align-self: flex-start;
        }
        .chat-avatar {
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
          margin-bottom: 2px;
        }
        .chat-bubble {
          padding: 0.7rem 0.95rem;
          border-radius: 16px;
          font-size: 0.875rem;
          line-height: 1.55;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .chat-bubble.assistant {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          color: var(--color-text);
          border-radius: 16px 16px 16px 4px;
        }
        .chat-bubble.user {
          background: var(--color-navy);
          color: white;
          border-radius: 16px 16px 4px 16px;
        }
        .chat-error {
          font-size: 0.8rem;
          color: var(--color-risk-high);
          text-align: center;
          padding: 0.5rem;
        }
        .chat-input-area {
          padding: 1rem 1.25rem;
          border-top: 1px solid var(--color-border);
          background: var(--color-surface);
          flex-shrink: 0;
        }
        .chat-input-row {
          display: flex;
          gap: 0.625rem;
          align-items: flex-end;
        }
        .chat-textarea {
          flex: 1;
          padding: 0.625rem 0.875rem;
          font-family: var(--font-body);
          font-size: 0.875rem;
          line-height: 1.5;
          color: var(--color-text);
          background: var(--color-bg);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-sm);
          resize: none;
          overflow-y: hidden;
          min-height: 2.5rem;
          max-height: 120px;
          transition: border-color var(--transition-fast);
        }
        .chat-textarea:focus {
          outline: none;
          border-color: var(--color-navy);
        }
        .chat-textarea::placeholder {
          color: var(--color-text-muted);
        }
        .chat-send {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: var(--color-navy);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background var(--transition-fast), opacity var(--transition-fast);
          font-size: 1rem;
        }
        .chat-send:hover:not(:disabled) {
          background: var(--color-navy-light);
        }
        .chat-send:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .chat-send:focus-visible {
          outline: 2px solid var(--color-amber);
          outline-offset: 2px;
        }
      `}</style>
      <div className="chat-root">
        <header className="chat-header">
          <div className="chat-logo">
            <span aria-hidden="true">⚓</span> Anchor
          </div>
          <button
            className="chat-start-over"
            onClick={handleStartOver}
            aria-label={t.chat.startOver}
          >
            {t.chat.startOver}
          </button>
        </header>

        <div className="chat-messages" role="log" aria-live="polite" aria-label="Conversation">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-msg-wrap ${msg.role}`}
            >
              {msg.role === 'assistant' && (
                <div className="chat-avatar" aria-hidden="true">A</div>
              )}
              <div className={`chat-bubble ${msg.role}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && <TypingIndicator t={t} />}
          {error && <p className="chat-error">{error}</p>}
          <div ref={messagesEndRef} aria-hidden="true" />
        </div>

        <div className="chat-input-area">
          <div className="chat-input-row">
            <textarea
              ref={textareaRef}
              className="chat-textarea"
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder={t.chat.placeholder}
              rows={1}
              aria-label={t.chat.placeholder}
              disabled={isLoading}
            />
            <button
              className="chat-send"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              aria-label={t.chat.sendLabel}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M14.5 1.5L7 9M14.5 1.5L9.5 14.5L7 9M14.5 1.5L1.5 6.5L7 9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
