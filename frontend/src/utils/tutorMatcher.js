export const COUNTRY_LANGUAGE = {
  Mexico: 'Spanish', Colombia: 'Spanish', Honduras: 'Spanish', Guatemala: 'Spanish',
  'El Salvador': 'Spanish', Cuba: 'Spanish', Ecuador: 'Spanish',
  'Dominican Republic': 'Spanish', Venezuela: 'Spanish', Peru: 'Spanish',
  Bolivia: 'Spanish', Chile: 'Spanish', Nicaragua: 'Spanish', Panama: 'Spanish',
  'Costa Rica': 'Spanish', Paraguay: 'Spanish', Uruguay: 'Spanish', Argentina: 'Spanish',
  Spain: 'Spanish',
  Brazil: 'Portuguese', Portugal: 'Portuguese',
  China: 'Chinese', Taiwan: 'Chinese', 'Hong Kong': 'Chinese',
  Philippines: 'Filipino',
  Vietnam: 'Vietnamese',
  France: 'French', Haiti: 'French', Senegal: 'French', Mali: 'French',
  'Ivory Coast': 'French', Cameroon: 'French', 'Democratic Republic of the Congo': 'French',
  India: 'Hindi', Pakistan: 'Hindi',
  Egypt: 'Arabic', Syria: 'Arabic', Iraq: 'Arabic', Jordan: 'Arabic',
  Morocco: 'Arabic', Algeria: 'Arabic', Libya: 'Arabic', Tunisia: 'Arabic',
  Lebanon: 'Arabic', Yemen: 'Arabic', 'Saudi Arabia': 'Arabic',
  'United Arab Emirates': 'Arabic', Kuwait: 'Arabic', Qatar: 'Arabic',
  Bahrain: 'Arabic', Oman: 'Arabic', Sudan: 'Arabic', Somalia: 'Arabic',
  Korea: 'Korean', 'South Korea': 'Korean',
}

function gradeToNum(gradeValue) {
  if (!gradeValue) return null
  const lower = gradeValue.toLowerCase()
  if (lower.includes('pre') || lower.includes('k')) return 0
  if (lower.includes('univ') || lower.includes('college')) return 12
  const match = lower.match(/(\d+)/)
  return match ? parseInt(match[1], 10) : null
}

function tutorGradeRange(grades) {
  if (!grades) return [0, 12]
  const lower = grades.toLowerCase()
  if (lower.includes('all') || lower === 'k-12') return [0, 12]
  const matches = lower.match(/(\d+)/g)
  if (matches && matches.length >= 2) {
    return [parseInt(matches[0], 10), parseInt(matches[1], 10)]
  }
  if (matches && matches.length === 1) {
    const n = parseInt(matches[0], 10)
    return [n, n]
  }
  return [0, 12]
}

function calcGradeScore(tutorGrades, studentGradeNum) {
  if (studentGradeNum === null) return 0
  const [min, max] = tutorGradeRange(tutorGrades)
  if (min === 0 && max === 12) return 1
  if (studentGradeNum >= min && studentGradeNum <= max) return 2
  return -2
}

function formatDetail(tutor) {
  const f = (tutor.format || '').toLowerCase()
  if (f.includes('1-on-1') || f.includes('1:1')) return 'live 1-on-1 sessions'
  if (f.includes('live') && (f.includes('on-demand') || f.includes('24/7'))) return 'on-demand live tutoring'
  if (f.includes('live')) return 'live group classes'
  if (f.includes('game')) return 'game-based practice'
  if (f.includes('weekly') || f.includes('recurring')) return 'recurring weekly sessions'
  if (f.includes('mobile') || f.includes('app')) return 'mobile app'
  if (f.includes('adaptive')) return 'adaptive practice'
  if (f.includes('video')) return 'video lessons + practice'
  if (f.includes('textbook')) return 'digital textbooks + practice'
  if (f.includes('guided question')) return 'guided reading questions'
  if (f.includes('article') || (f.includes('leveled') && f.includes('reading'))) return 'leveled reading articles'
  if (f.includes('digital') || f.includes('platform')) return 'digital reading platform'
  return `${tutor.grades || 'K-12'} level`
}

function buildMatchData(tutor, subjectMatches, studentLang, homeGrade) {
  const gradeNum = gradeToNum(homeGrade)
  const langSupport = studentLang && tutor.languages.includes(studentLang)
  const isEnglishOnly = tutor.languages.length === 1 && tutor.languages[0] === 'English'
  const fmtDetail = formatDetail(tutor)

  let type
  if (subjectMatches.length > 0 && langSupport) type = 'subjectLang'
  else if (subjectMatches.length > 0) type = 'subjectOnly'
  else if (langSupport) type = 'langOnly'
  else type = 'generic'

  return { type, subjects: subjectMatches.slice(0, 2), lang: studentLang, fmtDetail, gradeNum, isEnglishOnly }
}

export function scoreTutor(tutor, { selectedSubjects, homeCountry, homeGrade, englishProficiency }) {
  let score = 0
  const studentLang = COUNTRY_LANGUAGE[homeCountry] || null
  const gradeNum = gradeToNum(homeGrade)

  const subjectMatches = (selectedSubjects || []).filter(s => tutor.subjects.includes(s))
  score += subjectMatches.length * 3
  if (selectedSubjects && selectedSubjects.length > 0 && subjectMatches.length === selectedSubjects.length) {
    score += 2
  }

  if (studentLang && tutor.languages.includes(studentLang)) {
    score += 4
  }

  const isEnglishOnly = tutor.languages.length === 1 && tutor.languages[0] === 'English'
  const hasEnglishOnly = isEnglishOnly || (tutor.languages.includes('English') && tutor.languages.length <= 1)
  if (isEnglishOnly && englishProficiency === 'NONE') {
    score -= 5
  }

  score += calcGradeScore(tutor.grades, gradeNum)

  const isLive = tutor.format.includes('live') || tutor.format.includes('1-on-1')
  if (englishProficiency === 'NONE' && isLive) {
    score += 2
  }

  const matchData = buildMatchData(tutor, subjectMatches, studentLang, homeGrade)

  return {
    score,
    matchData,
    subjectMatch: subjectMatches.length > 0,
  }
}

export function matchTutors(allTutors, intakeData) {
  if (!intakeData) {
    return { primary: allTutors.slice(0, 4), moreMatched: [], other: [], skipped: true }
  }

  const {
    concerns: selectedSubjects = [],
    homeCountry = '',
    homeGrade = '',
    englishProficiency = 'SOME',
  } = intakeData

  const skipped = !selectedSubjects || selectedSubjects.length === 0

  const scored = allTutors.map(tutor => ({
    ...tutor,
    ...scoreTutor(tutor, { selectedSubjects: skipped ? [] : selectedSubjects, homeCountry, homeGrade, englishProficiency }),
  }))

  if (skipped) {
    const sorted = [...scored].sort((a, b) => b.score - a.score)
    return { primary: sorted.slice(0, 4), moreMatched: sorted.slice(4), other: [], skipped: true }
  }

  const subjectRelevant = scored.filter(t => t.subjectMatch)
  const noSubjectMatch = scored.filter(t => !t.subjectMatch)

  subjectRelevant.sort((a, b) => b.score - a.score)
  noSubjectMatch.sort((a, b) => b.score - a.score)

  return {
    primary: subjectRelevant.slice(0, 4),
    moreMatched: subjectRelevant.slice(4),
    other: noSubjectMatch,
    skipped: false,
  }
}
