const MOCK_DELAY = 800

const MOCK_STRUCTURED = {
  district: {
    name: 'Houston Independent School District',
    state: 'TX',
    title1: true,
    ellProgram: 'Bilingual/ESL program available at all schools',
    ellContact: '713-556-6960',
    ellUrl: 'https://www.houstonisd.org/multilingual',
    parentRightsUrl: 'https://www.houstonisd.org/parentrights',
  },
  curriculumGap: {
    homeCountry: 'Mexico',
    homeGrade: '5th grade',
    usEquivalent: 'U.S. Grade 5 with ELL language support',
    riskLevel: 'medium',
    notes: 'The main gap is English academic vocabulary, not academic content. Your child likely knows the material—they need language support, not academic remediation.',
  },
  rights: [
    {
      id: 'plyler',
      title: 'Right to Attend Public School',
      law: 'Plyler v. Doe (1982)',
      summary: 'Every child in the U.S. has the right to attend public school regardless of immigration status. Schools cannot ask for immigration documents or Social Security numbers as a condition of enrollment.',
      whatSchoolsCannotDo: 'Schools cannot deny enrollment, require a Social Security number, ask about citizenship or immigration status, or charge fees for enrollment.',
      action: 'If the school asks for immigration documents or denies enrollment, contact the district ELL office immediately and reference Plyler v. Doe (1982).',
      url: 'https://www.aclu.org/know-your-rights/the-rights-of-immigrants-in-the-us',
    },
    {
      id: 'lau',
      title: 'Right to Language Support',
      law: 'Lau v. Nichols (1974)',
      summary: 'Students who are not fluent in English have the right to language instruction. Schools must provide ESL classes, bilingual programs, or other language support.',
      whatSchoolsCannotDo: 'Schools cannot place a student in a regular English classroom with no language support and call that sufficient.',
      action: 'Request an ELL assessment within the first 30 days of enrollment. Ask specifically what language support program your child will be placed in.',
      url: 'https://www.ed.gov/laws-and-policy/civil-rights-laws/english-learner-el-resources-and-guidance',
    },
    {
      id: 'title6',
      title: 'Right to Information in Your Language',
      law: 'Title VI of the Civil Rights Act (1964)',
      summary: 'Schools must provide important communications to parents in a language they can understand — including report cards, meeting notices, and IEP documents.',
      whatSchoolsCannotDo: 'Schools cannot send only English-language documents to parents who do not speak English, or refuse to provide an interpreter at meetings.',
      action: 'Request all school communications in Spanish. Ask for an interpreter for any meeting — schools are legally required to provide this at no cost.',
      url: 'https://www.ed.gov/laws-and-policy/civil-rights-laws/english-learner-el-resources-and-guidance',
    },
  ],
  tutors: [
    {
      name: 'Khan Academy',
      languages: ['Spanish', 'English', 'Arabic', 'French'],
      subjects: ['Math', 'Science', 'Reading', 'History'],
      format: 'Self-paced online video + practice',
      url: 'https://www.khanacademy.org',
      free: true,
    },
    {
      name: 'UPchieve',
      languages: ['English', 'Spanish'],
      subjects: ['Math', 'Science', 'Essay writing', 'College counseling'],
      format: 'On-demand live tutoring, available 24/7',
      url: 'https://upchieve.org',
      free: true,
    },
    {
      name: 'Learn To Be',
      languages: ['English', 'Spanish'],
      subjects: ['Math', 'Reading', 'Science', 'Writing'],
      format: 'Weekly 1-on-1 sessions with volunteer tutors',
      url: 'https://www.learntobe.org',
      free: true,
    },
  ],
  advocacyScript: {
    language: 'es',
    text: 'Buenos días. Me llamo [SU NOMBRE] y soy el padre/la madre de [NOMBRE DEL NIÑO/A], quien está en el 5.º grado. Mi hijo/a llegó de México recientemente y necesita apoyo en matemáticas.\n\nQuisiera solicitar formalmente una evaluación de ELL (English Language Learner) para mi hijo/a dentro de los próximos 30 días, según lo requiere la ley Lau v. Nichols de 1974.\n\nTambién quisiera confirmar que mi hijo/a tiene derecho a asistir a esta escuela sin importar nuestro estatus migratorio, según Plyler v. Doe (1982). Por ley, el distrito no puede solicitarnos documentos de inmigración.\n\nPor favor, necesito que todos los documentos y comunicaciones escolares me sean enviados en español, como lo requiere el Título VI de la Ley de Derechos Civiles de 1964.\n\n¿Puede ayudarme a programar esta evaluación esta semana? Muchas gracias por su apoyo.',
  },
}

const MOCK_REPLIES = [
  null,
  'Thank you! And what grade was your child in back home in Mexico? Also, do you know the name of your U.S. school district or which city you\'re in?',
  'Perfect — and what subject does your child need the most help with? For example: math, reading, science, learning English, or all of them?',
  'I\'ve gathered everything I need. I found the rights, district resources, and free tutors that apply to your situation — take a look at the results panel on the right.',
]

export { MOCK_STRUCTURED }

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function analyzeStudent({ homeCountry, homeGrade, age, district, districtId, districtName, city, state, concerns, language, englishProficiency }) {
  if (import.meta.env.VITE_USE_MOCK === 'true') {
    await delay(MOCK_DELAY)
    return { reply: '', structured: MOCK_STRUCTURED, profileUpdate: {} }
  }

  const subject = concerns && concerns.length ? concerns.join(', ') : null
  const proficiencyNote = englishProficiency === 'FLUENT'
    ? 'My child speaks and understands English well.'
    : englishProficiency === 'SOME'
    ? 'My child understands some English but needs support.'
    : 'My child has little or no English and needs full language support.'
  const history = [{
    role: 'user',
    content: `My child came from ${homeCountry} and completed ${homeGrade} there. They are ${age} years old. We live in ${district}. ${proficiencyNote} Areas of concern: ${concerns && concerns.length ? concerns.join(', ') : 'general support'}.`,
  }]
  const profile = { homeCountry, homeGrade, subject, districtId: districtId || null, city: city || null, state: state || null, districtName: districtName || null, englishProficiency: englishProficiency || null }
  return sendMessage({ history, language, profile })
}

export async function sendMessage({ history, language, profile }) {
  if (import.meta.env.VITE_USE_MOCK === 'true') {
    await delay(MOCK_DELAY)
    const userMessageCount = history.filter(m => m.role === 'user').length
    const replyIndex = Math.min(userMessageCount, MOCK_REPLIES.length - 1)
    const isFullResult = userMessageCount >= 3
    return {
      reply: MOCK_REPLIES[replyIndex] || MOCK_REPLIES[MOCK_REPLIES.length - 1],
      structured: isFullResult ? MOCK_STRUCTURED : null,
      profileUpdate: userMessageCount === 1
        ? { homeCountry: 'Mexico' }
        : userMessageCount === 2
        ? { homeCountry: 'Mexico', homeGrade: '5th grade', districtId: 'houston-isd' }
        : {},
    }
  }

  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ history, language, profile }),
  })

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`)
  }

  return res.json()
}
