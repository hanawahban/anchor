import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { getCountrySuggestions, PRIORITY_COUNTRIES } from '../data/countries.js'
import { STATES, getStateCities, getCityDistricts, getStateSuggestions } from '../data/districts.js'

const LANGUAGES = [
  { code: 'en', native: 'English', english: 'English' },
  { code: 'es', native: 'Español', english: 'Spanish' },
  { code: 'ar', native: 'العربية', english: 'Arabic' },
  { code: 'zh', native: '中文', english: 'Chinese' },
  { code: 'fr', native: 'Français', english: 'French' },
  { code: 'fil', native: 'Filipino', english: 'Filipino' },
  { code: 'vi', native: 'Tiếng Việt', english: 'Vietnamese' },
]

// Grade indices grouped for button display
const GRADE_GROUPS = [
  { key: 'primary', indices: [0, 1, 2, 3, 4, 5, 6] },   // Pre-K, K, 1-5
  { key: 'middle',  indices: [7, 8, 9] },                  // 6-8
  { key: 'high',    indices: [10, 11, 12, 13] },           // 9-12
  { key: 'beyond',  indices: [14] },                        // University+
]

// Short display labels for grade buttons (language-neutral numbers)
const GRADE_SHORT = [
  'Pre-K', 'K', '1', '2', '3', '4', '5',
  '6', '7', '8', '9', '10', '11', '12', 'Univ+',
]

const TOTAL_STEPS = 7

// Must stay index-aligned with every language's concernOptions in translations.js
const CONCERN_KEYS = ['math', 'reading', 'science', 'writing', 'english', 'history', 'SAT prep', 'college counseling']

export default function IntakeWizard({ language, onLanguageChange, onComplete, t }) {
  const w = t.wizard

  // Wizard step (1-6) and location sub-phase
  const [step, setStep] = useState(1)
  const [locPhase, setLocPhase] = useState('state') // 'state' | 'city' | 'district'

  // Form data
  const [form, setForm] = useState({
    language,
    homeCountry: '',
    homeGrade: '',
    englishProficiency: '',
    age: '',
    state: '',
    stateCode: '',
    city: '',
    customCity: '',
    districtId: '',
    districtName: '',
    districtUncertain: false,
    concerns: [],
  })

  // Autocomplete query strings (separate from form values so UI stays live)
  const [countryQuery, setCountryQuery]   = useState('')
  const [stateQuery, setStateQuery]       = useState('')
  const [cityInputMode, setCityInputMode] = useState(false)
  const [cityInput, setCityInput]         = useState('')
  const [unsureChosen, setUnsureChosen]   = useState(false)
  const [ageError, setAgeError]           = useState('')

  const autoAdvanceTimer = useRef(null)
  const countryInputRef  = useRef(null)
  const stateInputRef    = useRef(null)
  const ageInputRef      = useRef(null)

  // Focus management
  useEffect(() => {
    if (step === 2 && countryInputRef.current) countryInputRef.current.focus()
    if (step === 6 && locPhase === 'state' && stateInputRef.current) stateInputRef.current.focus()
    if (step === 5 && ageInputRef.current) ageInputRef.current.focus()
  }, [step, locPhase])

  function scheduleAdvance(toStep, delay = 200) {
    if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current)
    autoAdvanceTimer.current = setTimeout(() => setStep(toStep), delay)
  }

  // ── COUNTRY (step 2) ───────────────────────────────────────────────────────
  const countrySuggestions = useMemo(
    () => getCountrySuggestions(countryQuery, 10),
    [countryQuery]
  )

  function handleCountrySelect(country) {
    setForm(f => ({
      ...f,
      homeCountry: country,
      // clear downstream
      homeGrade: '', englishProficiency: '', age: '',
      state: '', stateCode: '', city: '', customCity: '',
      districtId: '', districtName: '', districtUncertain: false, concerns: [],
    }))
    setCountryQuery(country)
    setLocPhase('state')
    scheduleAdvance(3)
  }

  function handleCountryNext() {
    if (!form.homeCountry.trim()) return
    setStep(3)
  }

  // ── GRADE (step 3) ─────────────────────────────────────────────────────────
  function handleGradeSelect(gradeIndex) {
    const gradeValue = w.grades[gradeIndex]
    setForm(f => ({
      ...f,
      homeGrade: gradeValue,
      englishProficiency: '',
      age: '',
      state: '', stateCode: '', city: '', customCity: '',
      districtId: '', districtName: '', districtUncertain: false, concerns: [],
    }))
    scheduleAdvance(4)
  }

  // ── ENGLISH PROFICIENCY (step 4) ───────────────────────────────────────────
  function handleEnglishProficiencySelect(value) {
    setForm(f => ({
      ...f,
      englishProficiency: value,
      age: '',
      state: '', stateCode: '', city: '', customCity: '',
      districtId: '', districtName: '', districtUncertain: false, concerns: [],
    }))
    scheduleAdvance(5)
  }

  // ── AGE (step 5) ───────────────────────────────────────────────────────────
  function handleAgeNext() {
    const val = parseInt(form.age, 10)
    if (!form.age || isNaN(val) || val < 3 || val > 22) {
      setAgeError(t.errors.missingField)
      return
    }
    setAgeError('')
    setStep(6)
    setLocPhase('state')
    setStateQuery(form.state || '')
    setCityInputMode(false)
    setUnsureChosen(false)
  }

  // ── LOCATION — STATE (step 5a) ─────────────────────────────────────────────
  const stateSuggestions = useMemo(
    () => getStateSuggestions(stateQuery, 8),
    [stateQuery]
  )

  function handleStateSelect(stateName) {
    const stateObj = STATES.find(s => s.name === stateName)
    const code = stateObj ? stateObj.code : ''
    setStateQuery(stateName)
    setForm(f => ({
      ...f,
      state: stateName,
      stateCode: code,
      city: '', customCity: '',
      districtId: '', districtName: '', districtUncertain: false,
    }))
    setCityInputMode(false)
    setCityInput('')
    setUnsureChosen(false)
    setLocPhase('city')
  }

  // ── LOCATION — CITY (step 5b) ──────────────────────────────────────────────
  const stateCities = useMemo(
    () => form.stateCode ? (getStateCities(form.stateCode) || []) : [],
    [form.stateCode]
  )

  function handleCitySelect(city) {
    const districts = getCityDistricts(form.stateCode, city)
    setForm(f => ({
      ...f, city,
      customCity: '',
      districtId: '', districtName: '', districtUncertain: false,
    }))
    setUnsureChosen(false)
    if (!districts || districts.length === 0) {
      // City not in dataset — skip disambiguation
      scheduleAdvance(7)
    } else if (districts.length === 1) {
      // Single district — auto-fill, skip disambiguation
      setForm(f => ({
        ...f, city,
        districtId: districts[0].id,
        districtName: districts[0].name,
        districtUncertain: false,
      }))
      scheduleAdvance(7)
    } else {
      // Multiple districts — show disambiguation
      setLocPhase('district')
    }
  }

  function handleCustomCityNext() {
    const city = cityInput.trim()
    if (!city) return
    setForm(f => ({
      ...f, city, customCity: city,
      districtId: '', districtName: '', districtUncertain: false,
    }))
    // Custom city: no district data, skip to step 7
    setStep(7)
  }

  // ── LOCATION — DISTRICT (step 5c) ──────────────────────────────────────────
  const cityDistricts = useMemo(
    () => form.stateCode && form.city ? getCityDistricts(form.stateCode, form.city) : null,
    [form.stateCode, form.city]
  )

  function handleDistrictSelect(district) {
    setForm(f => ({
      ...f,
      districtId: district.id,
      districtName: district.name,
      districtUncertain: false,
    }))
    setUnsureChosen(false)
    scheduleAdvance(7)
  }

  function handleDistrictUnsure() {
    if (!cityDistricts) return
    const largest = [...cityDistricts].sort((a, b) => b.enrollment - a.enrollment)[0]
    setForm(f => ({
      ...f,
      districtId: largest.id,
      districtName: largest.name,
      districtUncertain: true,
    }))
    setUnsureChosen(true)
  }

  function handleDistrictContinue() {
    setStep(7)
  }

  // ── CONCERNS (step 7) ──────────────────────────────────────────────────────
  function toggleConcern(key) {
    setForm(f => {
      const has = f.concerns.includes(key)
      return { ...f, concerns: has ? f.concerns.filter(c => c !== key) : [...f.concerns, key] }
    })
  }

  function handleSubmit() {
    let districtStr = ''
    if (form.districtName) {
      districtStr = `${form.districtName}, ${form.city}, ${form.state}`
    } else if (form.city && form.state) {
      districtStr = `${form.city}, ${form.state}`
    } else if (form.state) {
      districtStr = form.state
    }
    onComplete({ ...form, district: districtStr })
  }

  // ── LANGUAGE (step 1) ──────────────────────────────────────────────────────
  function handleLangSelect(code) {
    setForm(f => ({ ...f, language: code }))
    onLanguageChange(code)
    scheduleAdvance(2)
  }

  // ── BACK NAVIGATION ────────────────────────────────────────────────────────
  function handleBack() {
    if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current)
    setAgeError('')
    setUnsureChosen(false)

    if (step === 7) {
      setStep(6)
      // Return to appropriate sub-phase
      if (cityDistricts && cityDistricts.length > 1) {
        setLocPhase('district')
      } else {
        setLocPhase('city')
      }
    } else if (step === 6) {
      if (locPhase === 'district') {
        setLocPhase('city')
        setForm(f => ({ ...f, districtId: '', districtName: '', districtUncertain: false }))
      } else if (locPhase === 'city') {
        setLocPhase('state')
        setCityInputMode(false)
        setForm(f => ({ ...f, city: '', customCity: '', districtId: '', districtName: '', districtUncertain: false }))
      } else {
        setStep(5)
      }
    } else {
      setStep(s => s - 1)
    }
  }

  // ── PROGRESS ───────────────────────────────────────────────────────────────
  const progress = (() => {
    if (step < 6) return (step / TOTAL_STEPS) * 100
    if (step === 6) {
      if (locPhase === 'state')    return (5.3 / TOTAL_STEPS) * 100
      if (locPhase === 'city')     return (5.7 / TOTAL_STEPS) * 100
      if (locPhase === 'district') return (6.1 / TOTAL_STEPS) * 100
    }
    return (step / TOTAL_STEPS) * 100
  })()

  // Step label shown in progress row
  const stepLabel = (() => {
    if (step === 6) return w.steps[5]  // 'School District' / 'Location'
    return w.steps[step - 1] || ''
  })()

  // ── NAV HELPERS ────────────────────────────────────────────────────────────
  const showBack = step > 1

  // Decide whether to show a Next button and whether it's active
  const showNext = step === 2 || step === 5 || (step === 6 && locPhase === 'city' && cityInputMode)
  const nextEnabled = (() => {
    if (step === 2) return form.homeCountry.trim().length > 0
    if (step === 5) return form.age.trim().length > 0
    if (step === 6 && locPhase === 'city' && cityInputMode) return cityInput.trim().length > 0
    return false
  })()

  const showSubmit = false // Step 7 has its own inline CTAs

  return (
    <>
      <style>{`
        /* ── Root & card ───────────────────────────────────────────────────── */
        .wiz-root {
          min-height: 100dvh;
          min-height: 100vh;
          background: var(--color-bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.25rem;
        }
        .wiz-logo {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .wiz-card {
          background: var(--color-surface);
          border-radius: var(--radius-modal);
          box-shadow: var(--shadow-card);
          padding: 2.25rem 2rem;
          width: 100%;
          max-width: 560px;
        }
        @media (max-width: 400px) {
          .wiz-card { padding: 1.5rem 1.1rem; }
        }

        /* ── Progress ──────────────────────────────────────────────────────── */
        .wiz-progress-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.75rem;
          gap: 1rem;
        }
        .wiz-step-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .wiz-bar-track {
          flex: 1;
          height: 4px;
          background: var(--color-border);
          border-radius: 9999px;
          overflow: hidden;
        }
        .wiz-bar-fill {
          height: 100%;
          background: var(--color-amber);
          border-radius: 9999px;
          transition: width 0.35s ease;
        }

        /* ── Question heading ──────────────────────────────────────────────── */
        .wiz-question {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--color-navy);
          line-height: 1.4;
          margin-bottom: 1.25rem;
        }

        /* ── Language grid ─────────────────────────────────────────────────── */
        .wiz-lang-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.625rem;
          margin-bottom: 1rem;
        }
        @media (min-width: 420px) {
          .wiz-lang-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .wiz-lang-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          padding: 0.875rem 0.625rem;
          min-height: 64px;
          border-radius: var(--radius-card);
          border: 2px solid var(--color-border);
          background: var(--color-surface);
          cursor: pointer;
          transition: border-color var(--transition-fast), background var(--transition-fast);
          position: relative;
        }
        .wiz-lang-btn:hover { border-color: var(--color-navy-light); background: var(--color-surface-warm); }
        .wiz-lang-btn.selected { border-color: var(--color-navy); background: #f0f4fa; }
        .wiz-lang-btn:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .wiz-lang-check {
          position: absolute; top: 0.4rem; right: 0.4rem;
          width: 1rem; height: 1rem;
          background: var(--color-amber);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 0.55rem; font-weight: 700;
          opacity: 0; transition: opacity var(--transition-fast);
        }
        .wiz-lang-btn.selected .wiz-lang-check { opacity: 1; }
        .wiz-lang-native {
          font-family: var(--font-display);
          font-size: 1.05rem; font-weight: 500; color: var(--color-navy);
        }
        .wiz-lang-english {
          font-size: 0.65rem; font-weight: 500; color: var(--color-text-muted);
          text-transform: uppercase; letter-spacing: 0.05em;
        }

        /* ── Autocomplete input + chip suggestions ─────────────────────────── */
        .wiz-input {
          width: 100%;
          padding: 0.75rem 1rem;
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-text);
          background: var(--color-bg);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-sm);
          transition: border-color var(--transition-fast);
          appearance: none;
          -webkit-appearance: none;
          margin-bottom: 0.75rem;
        }
        .wiz-input:focus { outline: none; border-color: var(--color-navy); }
        .wiz-input::placeholder { color: var(--color-text-muted); }
        .wiz-input.has-error { border-color: var(--color-risk-high); }

        .wiz-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .wiz-chip {
          padding: 0.5rem 0.875rem;
          min-height: 44px;
          border: 1.5px solid var(--color-border-strong);
          border-radius: var(--radius-pill);
          background: var(--color-surface);
          color: var(--color-text);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
          display: flex;
          align-items: center;
        }
        .wiz-chip:hover { border-color: var(--color-navy); background: var(--color-surface-warm); }
        .wiz-chip.selected {
          border-color: var(--color-navy);
          background: var(--color-navy);
          color: white;
        }
        .wiz-chip:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }

        /* ── Grade button grid ─────────────────────────────────────────────── */
        .wiz-grade-section { margin-bottom: 1rem; }
        .wiz-grade-section-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-text-muted);
          margin-bottom: 0.5rem;
        }
        .wiz-grade-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .wiz-grade-btn {
          padding: 0 0.875rem;
          min-height: 44px;
          min-width: 44px;
          border: 2px solid var(--color-border);
          border-radius: var(--radius-sm);
          background: var(--color-surface);
          color: var(--color-text);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wiz-grade-btn:hover { border-color: var(--color-navy-light); background: var(--color-surface-warm); }
        .wiz-grade-btn.selected {
          border-color: var(--color-navy);
          background: var(--color-navy);
          color: white;
          font-weight: 600;
        }
        .wiz-grade-btn:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }

        /* ── City button grid ──────────────────────────────────────────────── */
        .wiz-city-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.875rem;
        }
        .wiz-city-btn {
          padding: 0.5rem 0.875rem;
          min-height: 44px;
          border: 1.5px solid var(--color-border-strong);
          border-radius: var(--radius-sm);
          background: var(--color-surface);
          color: var(--color-text);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
        }
        .wiz-city-btn:hover { border-color: var(--color-navy); background: var(--color-surface-warm); }
        .wiz-city-btn.selected {
          border-color: var(--color-navy);
          background: var(--color-navy);
          color: white;
        }
        .wiz-city-btn:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .wiz-city-not-listed {
          width: 100%;
          padding: 0.5rem 0.875rem;
          min-height: 44px;
          border: 1.5px dashed var(--color-border-strong);
          border-radius: var(--radius-sm);
          background: transparent;
          color: var(--color-text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          text-align: left;
          transition: border-color var(--transition-fast), color var(--transition-fast);
        }
        .wiz-city-not-listed:hover { border-color: var(--color-navy); color: var(--color-navy); }
        .wiz-city-not-listed:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }

        /* ── District buttons ──────────────────────────────────────────────── */
        .wiz-district-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 0.875rem;
        }
        .wiz-district-btn {
          width: 100%;
          padding: 0.875rem 1rem;
          min-height: 56px;
          border: 2px solid var(--color-border);
          border-radius: var(--radius-sm);
          background: var(--color-surface);
          color: var(--color-text);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          text-align: left;
          transition: border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
          line-height: 1.35;
        }
        .wiz-district-btn:hover { border-color: var(--color-navy-light); background: var(--color-surface-warm); }
        .wiz-district-btn.selected {
          border-color: var(--color-navy);
          background: var(--color-navy);
          color: white;
        }
        .wiz-district-btn.unsure {
          border-style: dashed;
          color: var(--color-text-muted);
        }
        .wiz-district-btn.unsure:hover { color: var(--color-navy); }
        .wiz-district-btn:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .wiz-district-fallback {
          padding: 0.875rem 1rem;
          background: var(--color-surface-warm);
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--color-amber);
          font-size: 0.82rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin-bottom: 0.875rem;
        }

        /* ── English Proficiency buttons ──────────────────────────────────── */
        .wiz-prof-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 0.875rem;
        }
        .wiz-prof-btn {
          width: 100%;
          padding: 0.875rem 1rem;
          min-height: 52px;
          border: 2px solid var(--color-border);
          border-radius: var(--radius-sm);
          background: var(--color-surface);
          color: var(--color-text);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          text-align: left;
          transition: border-color var(--transition-fast), background var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          line-height: 1.35;
        }
        .wiz-prof-btn:hover { border-color: var(--color-navy-light); background: var(--color-surface-warm); }
        .wiz-prof-btn.selected {
          border-color: var(--color-navy);
          background: var(--color-navy);
          color: white;
        }
        .wiz-prof-btn:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .wiz-prof-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── Concern chips (multi-select) ─────────────────────────────────── */
        .wiz-concern-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .wiz-concern-chip {
          padding: 0.5rem 0.875rem;
          min-height: 40px;
          border: 1.5px solid var(--color-border-strong);
          border-radius: var(--radius-pill);
          background: var(--color-surface);
          color: var(--color-text);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
          display: flex;
          align-items: center;
        }
        .wiz-concern-chip:hover { border-color: var(--color-navy); background: var(--color-surface-warm); }
        .wiz-concern-chip.selected {
          border-color: var(--color-navy);
          background: var(--color-navy);
          color: white;
        }
        .wiz-concern-chip:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .wiz-skip-link {
          display: block;
          width: 100%;
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          font-size: 0.85rem;
          font-family: var(--font-body);
          cursor: pointer;
          text-align: center;
          padding: 0.4rem 0;
          margin-bottom: 0.75rem;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .wiz-skip-link:hover { color: var(--color-navy); }
        .wiz-see-results {
          display: block;
          width: 100%;
          padding: 0.95rem;
          min-height: 48px;
          background: var(--color-navy);
          color: white;
          font-size: 1rem;
          font-weight: 600;
          border-radius: var(--radius-sm);
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
          transition: opacity var(--transition-fast);
          margin-bottom: 0.5rem;
        }
        .wiz-see-results:hover { opacity: 0.88; }

        /* ── Error ─────────────────────────────────────────────────────────── */
        .wiz-error {
          font-size: 0.8rem;
          color: var(--color-risk-high);
          margin-bottom: 0.75rem;
        }

        /* ── Age input ─────────────────────────────────────────────────────── */
        .wiz-age-input {
          width: 100%;
          max-width: 180px;
          padding: 0.875rem 1rem;
          font-family: var(--font-body);
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--color-text);
          background: var(--color-bg);
          border: 2px solid var(--color-border);
          border-radius: var(--radius-sm);
          margin-bottom: 1rem;
          transition: border-color var(--transition-fast);
          appearance: none;
          -webkit-appearance: none;
          text-align: center;
        }
        .wiz-age-input:focus { outline: none; border-color: var(--color-navy); }
        .wiz-age-input.has-error { border-color: var(--color-risk-high); }

        /* ── Nav buttons ───────────────────────────────────────────────────── */
        .wiz-nav {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          margin-top: 0.5rem;
        }
        .wiz-btn-back {
          padding: 0.75rem 1.25rem;
          min-height: 44px;
          border: 1.5px solid var(--color-border-strong);
          border-radius: var(--radius-sm);
          background: transparent;
          color: var(--color-text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: color var(--transition-fast), border-color var(--transition-fast);
          flex-shrink: 0;
        }
        .wiz-btn-back:hover { color: var(--color-navy); border-color: var(--color-navy); }
        .wiz-btn-next {
          flex: 1;
          padding: 0.875rem;
          min-height: 44px;
          background: var(--color-amber);
          color: white;
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: var(--radius-sm);
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
          transition: background var(--transition-fast), opacity var(--transition-fast);
        }
        .wiz-btn-next:hover:not(:disabled) { background: #b8700a; }
        .wiz-btn-next:disabled { opacity: 0.4; cursor: not-allowed; }
        .wiz-btn-next.submit { background: var(--color-navy); }
        .wiz-btn-next.submit:hover { background: var(--color-navy-light); }
        .wiz-btn-next:focus-visible,
        .wiz-btn-back:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
      `}</style>

      <div className="wiz-root">
        <div className="wiz-logo">
          <span aria-hidden="true">⚓</span> Anchor
        </div>

        <div className="wiz-card">
          {/* Progress */}
          <div className="wiz-progress-row">
            <span className="wiz-step-label">
              {w.stepOf.replace('{step}', Math.min(step, TOTAL_STEPS))} — {stepLabel}
            </span>
            <div className="wiz-bar-track" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={TOTAL_STEPS}>
              <div className="wiz-bar-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* ── STEP 1: Language ─────────────────────────────────────────── */}
          {step === 1 && (
            <>
              <p className="wiz-question">{w.fields.language}</p>
              <div className="wiz-lang-grid" role="radiogroup" aria-label={w.fields.language}>
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    className={`wiz-lang-btn${form.language === lang.code ? ' selected' : ''}`}
                    onClick={() => handleLangSelect(lang.code)}
                    role="radio"
                    aria-checked={form.language === lang.code}
                    aria-label={`${lang.native} — ${lang.english}`}
                  >
                    <span className="wiz-lang-check" aria-hidden="true">✓</span>
                    <span className="wiz-lang-native">{lang.native}</span>
                    <span className="wiz-lang-english">{lang.english}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ── STEP 2: Country (autocomplete chips) ─────────────────────── */}
          {step === 2 && (
            <>
              <p className="wiz-question">{w.fields.homeCountry}</p>
              <input
                ref={countryInputRef}
                className="wiz-input"
                type="text"
                value={countryQuery}
                onChange={e => {
                  setCountryQuery(e.target.value)
                  setForm(f => ({ ...f, homeCountry: e.target.value }))
                }}
                onKeyDown={e => e.key === 'Enter' && handleCountryNext()}
                placeholder={w.fields.homeCountryPlaceholder}
                aria-label={w.fields.homeCountry}
                autoComplete="off"
              />
              <div className="wiz-chips" role="listbox" aria-label="Country suggestions">
                {countrySuggestions.map(c => (
                  <button
                    key={c}
                    className={`wiz-chip${form.homeCountry === c ? ' selected' : ''}`}
                    onClick={() => handleCountrySelect(c)}
                    role="option"
                    aria-selected={form.homeCountry === c}
                    type="button"
                  >
                    {c}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ── STEP 3: Grade (grouped button grid) ──────────────────────── */}
          {step === 3 && (
            <>
              <p className="wiz-question">{w.fields.homeGrade}</p>
              {GRADE_GROUPS.map(group => (
                <div key={group.key} className="wiz-grade-section">
                  <div className="wiz-grade-section-label">
                    {w.gradeGroups[group.key]}
                  </div>
                  <div className="wiz-grade-grid" role="radiogroup">
                    {group.indices.map(i => (
                      <button
                        key={i}
                        className={`wiz-grade-btn${form.homeGrade === w.grades[i] ? ' selected' : ''}`}
                        onClick={() => handleGradeSelect(i)}
                        role="radio"
                        aria-checked={form.homeGrade === w.grades[i]}
                        aria-label={w.grades[i]}
                        title={w.grades[i]}
                      >
                        {GRADE_SHORT[i]}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

          {/* ── STEP 4: English Proficiency ──────────────────────────────── */}
          {step === 4 && (
            <>
              <p className="wiz-question">{w.fields.englishProficiency}</p>
              <div className="wiz-prof-list" role="radiogroup" aria-label={w.fields.englishProficiency}>
                {[
                  { value: 'FLUENT', color: '#22c55e', label: w.fields.englishProficiencyOptions.FLUENT },
                  { value: 'SOME',   color: '#f59e0b', label: w.fields.englishProficiencyOptions.SOME },
                  { value: 'NONE',   color: '#ef4444', label: w.fields.englishProficiencyOptions.NONE },
                ].map(opt => (
                  <button
                    key={opt.value}
                    className={`wiz-prof-btn${form.englishProficiency === opt.value ? ' selected' : ''}`}
                    onClick={() => handleEnglishProficiencySelect(opt.value)}
                    role="radio"
                    aria-checked={form.englishProficiency === opt.value}
                    type="button"
                  >
                    <span className="wiz-prof-dot" style={{ background: opt.color }} aria-hidden="true" />
                    {opt.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ── STEP 5: Age ──────────────────────────────────────────────── */}
          {step === 5 && (
            <>
              <p className="wiz-question">{w.fields.age}</p>
              <input
                ref={ageInputRef}
                className={`wiz-age-input${ageError ? ' has-error' : ''}`}
                type="number"
                min="3"
                max="22"
                inputMode="numeric"
                value={form.age}
                onChange={e => { setForm(f => ({ ...f, age: e.target.value })); setAgeError('') }}
                placeholder={w.fields.agePlaceholder}
                onKeyDown={e => e.key === 'Enter' && handleAgeNext()}
                aria-label={w.fields.age}
              />
              {ageError && <p className="wiz-error">{ageError}</p>}
            </>
          )}

          {/* ── STEP 6a: State (autocomplete chips) ──────────────────────── */}
          {step === 6 && locPhase === 'state' && (
            <>
              <p className="wiz-question">{w.location.stateQuestion}</p>
              <input
                ref={stateInputRef}
                className="wiz-input"
                type="text"
                value={stateQuery}
                onChange={e => setStateQuery(e.target.value)}
                placeholder={w.location.statePlaceholder}
                aria-label={w.location.stateQuestion}
                autoComplete="off"
              />
              <div className="wiz-chips" role="listbox" aria-label="State suggestions">
                {stateSuggestions.map(s => (
                  <button
                    key={s}
                    className={`wiz-chip${form.state === s ? ' selected' : ''}`}
                    onClick={() => handleStateSelect(s)}
                    role="option"
                    aria-selected={form.state === s}
                    type="button"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ── STEP 6b: City (button chips) ─────────────────────────────── */}
          {step === 6 && locPhase === 'city' && (
            <>
              <p className="wiz-question">{w.location.cityQuestion}</p>
              {!cityInputMode ? (
                <>
                  <div className="wiz-city-grid" role="radiogroup" aria-label={w.location.cityQuestion}>
                    {stateCities.map(city => (
                      <button
                        key={city}
                        className={`wiz-city-btn${form.city === city ? ' selected' : ''}`}
                        onClick={() => handleCitySelect(city)}
                        role="radio"
                        aria-checked={form.city === city}
                        type="button"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                  <button
                    className="wiz-city-not-listed"
                    onClick={() => { setCityInputMode(true); setCityInput('') }}
                    type="button"
                  >
                    + {w.location.cityNotListed}
                  </button>
                </>
              ) : (
                <>
                  <input
                    className="wiz-input"
                    type="text"
                    value={cityInput}
                    onChange={e => setCityInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleCustomCityNext()}
                    placeholder={w.location.cityNotListedPlaceholder}
                    aria-label={w.location.cityQuestion}
                    autoFocus
                  />
                </>
              )}
            </>
          )}

          {/* ── STEP 6c: District disambiguation ────────────────────────── */}
          {step === 6 && locPhase === 'district' && cityDistricts && (
            <>
              <p className="wiz-question">
                {w.location.districtQuestion.replace('{city}', form.city)}
              </p>
              <div className="wiz-district-list" role="radiogroup" aria-label="School district selection">
                {cityDistricts.map(d => (
                  <button
                    key={d.id}
                    className={`wiz-district-btn${form.districtId === d.id && !form.districtUncertain ? ' selected' : ''}`}
                    onClick={() => handleDistrictSelect(d)}
                    role="radio"
                    aria-checked={form.districtId === d.id && !form.districtUncertain}
                    type="button"
                  >
                    {d.name}
                  </button>
                ))}
                {/* Responsible AI: "I'm not sure yet" fallback — required by CLAUDE.md */}
                <button
                  className={`wiz-district-btn unsure${unsureChosen ? ' selected' : ''}`}
                  onClick={handleDistrictUnsure}
                  role="radio"
                  aria-checked={unsureChosen}
                  type="button"
                >
                  {w.location.districtNotSure}
                </button>
              </div>
              {unsureChosen && form.districtName && (
                <div className="wiz-district-fallback" role="note">
                  {w.location.districtFallback.replace('{district}', form.districtName)}
                </div>
              )}
            </>
          )}

          {/* ── STEP 7: Concerns (chip multi-select) ─────────────────────── */}
          {step === 7 && (
            <>
              <p className="wiz-question">{w.fields.concerns}</p>
              <div className="wiz-concern-chips" role="group" aria-label={w.fields.concerns}>
                {w.fields.concernOptions.map((label, idx) => {
                  const key = CONCERN_KEYS[idx]
                  const selected = form.concerns.includes(key)
                  return (
                    <button
                      key={key}
                      className={`wiz-concern-chip${selected ? ' selected' : ''}`}
                      onClick={() => toggleConcern(key)}
                      type="button"
                      aria-pressed={selected}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
              <button className="wiz-skip-link" onClick={handleSubmit} type="button">
                {w.fields.skipConcerns || 'Skip — show me everything'}
              </button>
              {form.concerns.length > 0 && (
                <button className="wiz-see-results" onClick={handleSubmit} type="button">
                  {w.fields.seeResults || 'See My Results'} →
                </button>
              )}
            </>
          )}

          {/* ── Navigation ───────────────────────────────────────────────── */}
          <div className="wiz-nav">
            {showBack ? (
              <button className="wiz-btn-back" onClick={handleBack} type="button">
                ← {w.back}
              </button>
            ) : (
              <div />
            )}

            {/* Explicit Next button for steps that need it */}
            {showNext && (
              <button
                className="wiz-btn-next"
                onClick={step === 5 ? handleAgeNext : step === 6 && locPhase === 'city' && cityInputMode ? handleCustomCityNext : handleCountryNext}
                disabled={!nextEnabled}
                type="button"
              >
                {w.next} →
              </button>
            )}

            {/* "I'm not sure" continue button */}
            {step === 6 && locPhase === 'district' && unsureChosen && (
              <button className="wiz-btn-next" onClick={handleDistrictContinue} type="button">
                {w.location.districtContinue}
              </button>
            )}

            {/* Submit on step 6 */}
            {showSubmit && (
              <button className="wiz-btn-next submit" onClick={handleSubmit} type="button">
                {w.submit}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
