import { siteConfig } from '../data/site'

const SYSTEM_PROMPT = `
You are the AI Career & Admission Counselor representing Prof. Mohd. Sharim — Industrial QA & QMS Leader, Education & Career Strategist with 17+ years of academic and industrial excellence (Ph.D. Pursuing, M.Pharm Manipal).

Your Mission:
Provide friendly, highly knowledgeable, professional, and encouraging guidance to students, parents, and job seekers regarding:
1. Admission Counselling (JEECUP, CUET, NEET, B.Pharm, D.Pharm, B.Tech, Paramedical, Nursing, MBA).
   - Services: College & Course mapping, entrance exam guidance, portal form filling, choice locking, scholarship assistance, and seat allotment support.
   - Packages: Basic Form & Guidance (₹500 - ₹1,500), Standard End-to-End Counselling (₹2,000 - ₹5,000), Premium Full Season Support (₹6,000 - ₹10,000+).
2. Placement Acceleration & Career Strategy:
   - Services: ATS-friendly CV Building, LinkedIn profile makeover, 1-on-1 mock interviews, personality grooming, direct Pharma & Corporate HR referrals.
   - Packages: CV + Mock Interview (₹500 - ₹1,500), Full Placement Support till joining (₹2,000 - ₹5,000).
3. Skill & Industrial Trainings:
   - Services: Pharma QA/QC, cGMP compliance, WHO-GMP guidelines, SOP documentation, Soft Skills & Professional English Fluency, Advanced Excel & Computer documentation, Entrance crash courses.
4. Official Contact Details:
   - Direct Calling / Consultation: +91 82183 22073
   - Official Email: mohd.sharim@live.com
   - Office Hub: Jhabrera, Haridwar / Roorkee Region, Uttarakhand – 247665 (Serving Western UP, Uttarakhand & Pan-India).

Tone & Guidelines:
- Be respectful, warm, motivating, and actionable.
- Format responses cleanly with bullet points, bold headings, and clear next steps.
- Encourage students/parents to book a 1-on-1 session or connect directly with Prof. Sharim.
- Never make false guarantees on cutoffs or government exam results; provide honest, strategic roadmap advice.
`

export const getStoredApiKey = () => {
  return (
    localStorage.getItem('nexdisha_ai_key') ||
    import.meta.env.VITE_GEMINI_API_KEY ||
    import.meta.env.VITE_OPENAI_API_KEY ||
    import.meta.env.VITE_AI_API_KEY ||
    ''
  )
}

export const setStoredApiKey = (key) => {
  if (key) {
    localStorage.setItem('nexdisha_ai_key', key.trim())
  } else {
    localStorage.removeItem('nexdisha_ai_key')
  }
}

export const getStoredProvider = () => {
  const saved = localStorage.getItem('nexdisha_ai_provider')
  if (saved) return saved

  const key = getStoredApiKey()
  if (key && key.startsWith('sk-')) {
    return 'openai'
  }
  if (import.meta.env.VITE_OPENAI_API_KEY && !import.meta.env.VITE_GEMINI_API_KEY) {
    return 'openai'
  }
  return 'gemini'
}

export const setStoredProvider = (provider) => {
  localStorage.setItem('nexdisha_ai_provider', provider)
}

/**
 * Intelligent instant responder for fallback/offline mode
 */
export function getSmartLocalResponse(userMessage) {
  const msg = userMessage.toLowerCase()

  if (msg.includes('admission') || msg.includes('college') || msg.includes('jeecup') || msg.includes('cuet') || msg.includes('neet') || msg.includes('cutoff') || msg.includes('counseling') || msg.includes('counselling')) {
    return `🎓 **Admission Guidance by Prof. Mohd. Sharim**

We provide end-to-end admission guidance across Western UP, Uttarakhand, and top national universities:
• **Exams Supported:** JEECUP, CUET, NEET, B.Pharm / D.Pharm entrance, B.Tech, Paramedical.
• **Services:** Profile evaluation, College vs. Course matching, verified Portal Choice Filling & Locking, and Scholarship guidance.
• **Packages:**
  - *Basic Package:* ₹500 – ₹1,500 (Form filling + Portal guidance)
  - *Standard Package:* ₹2,000 – ₹5,000 (End-to-end counselling & follow-up)
  - *Premium Season Pass:* ₹6,000 – ₹10,000+ (Multi-exam support & personal mentoring)

👉 Would you like to connect directly with Prof. Sharim or use the **Flow Form** tab above to submit your details?`
  }

  if (msg.includes('fee') || msg.includes('price') || msg.includes('cost') || msg.includes('package') || msg.includes('charge')) {
    return `💼 **Our Transparent Fee Structure & Packages**

Here is a summary of our tailored counselling & career packages:
1. **Admission Counselling Packages:**
   • *Basic:* ₹500 – ₹1,500 (Portal registration & choice list)
   • *Standard:* ₹2,000 – ₹5,000 (Complete counselling till admission)
   • *Premium:* ₹6,000 – ₹10,000+ (Multiple counselling portals + direct access)
2. **Placement & CV Packages:**
   • *CV & LinkedIn Makeover + Mock Interview:* ₹500 – ₹1,500
   • *Full Placement Assistance (till 1st Job):* ₹2,000 – ₹5,000
3. **Training & Skill Certifications:**
   • *Short Courses (10–20 hrs):* ₹1,000 – ₹3,000
   • *Certificate Programs (Pharma QA/QC, Soft Skills):* ₹3,000 – ₹10,000

📞 Call **+91 82183 22073** or switch to the **Fast Connect** tab to book your package!`
  }

  if (msg.includes('placement') || msg.includes('job') || msg.includes('cv') || msg.includes('resume') || msg.includes('interview') || msg.includes('linkedin') || msg.includes('referral')) {
    return `🚀 **Placement & Job Acceleration Support**

Led by Prof. Mohd. Sharim (17+ Yrs Industry Experience & Pharma QA Head):
• **ATS-Optimized CV & LinkedIn:** Professional formatting designed to pass recruiter screening.
• **1-on-1 Mock Interviews:** Technical QA/QC, HR screening, grooming, and salary negotiation skills.
• **Direct HR Referrals:** Active recruiter network across top Pharma, Chemical, Tech, and Healthcare companies.
• **Guaranteed Support:** Step-by-step guidance till your offer letter and corporate onboarding.

Ready for a CV review? Click the **WhatsApp Hotline** or fill out the **Fast Connect** form to send your resume!`
  }

  if (msg.includes('pharma') || msg.includes('qa') || msg.includes('qc') || msg.includes('training') || msg.includes('course') || msg.includes('skill')) {
    return `🧪 **Industrial Training & Skill Development Programs**

• **Pharma QA/QC & cGMP:** WHO-GMP guidelines, SOP documentation, validation, audit-readiness, and quality control techniques.
• **Soft Skills & English Fluency:** Professional corporate communication, interview articulation, and public speaking.
• **Computer & Excel Mastery:** Data documentation, MIS reporting, and essential workplace tools.
• **Duration:** Flexible short-term batches (10 to 60 hours) with verified completion certificates.

Would you like to enroll in the upcoming batch? Reach out on **+91 82183 22073**!`
  }

  if (msg.includes('contact') || msg.includes('phone') || msg.includes('call') || msg.includes('number') || msg.includes('email') || msg.includes('address') || msg.includes('location')) {
    return `📞 **Official Contact Information**

• **Direct Phone:** +91 82183 22073
• **Email:** mohd.sharim@live.com
• **Office Location:** Jhabrera, Haridwar / Roorkee Region, Uttarakhand – 247665
• **Counselling Hours:** 9:00 AM – 8:00 PM (Monday to Sunday)

You can also click the green **WhatsApp Hotline** button on the bottom corner to chat immediately with Prof. Sharim's desk!`
  }

  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('namaste') || msg.includes('salam')) {
    return `👋 **Welcome to Prof. Mohd. Sharim's Career Hub!**

I am your AI Career & Admission Counselor. How can I help you today?
• 🎓 **College Admission & Choice Locking** (JEECUP, CUET, NEET, B.Pharm, D.Pharm, B.Tech)
• 💼 **Placement Packages, CV & LinkedIn Makeover**
• 🧪 **Pharma QA/QC & Skill Development Trainings**
• 💰 **Packages & Fee Guidance**

Feel free to ask any question, or use the **Fast Connect Form** tab above to request an instant callback!`
  }

  return `Thank you for reaching out! Prof. Mohd. Sharim provides dedicated career counselling, college admissions (JEECUP, CUET, NEET, B.Pharm, D.Pharm), corporate placement referrals, and Pharma QA/QC industrial training.

How would you like to proceed?
1. 🎓 **Admission & Cutoff Strategy**
2. 💼 **CV Review & Mock Interview Prep**
3. 🧪 **Pharma Quality & Skill Certification**
4. 📞 **Direct Call / WhatsApp with Prof. Sharim (+91 82183 22073)**

You can also switch to the **Fast Connect** tab above to send your profile details directly!`
}

/**
 * Main AI Chat generation function
 */
export async function sendChatMessage(messages, apiKey = null, provider = null) {
  const activeKey = apiKey || getStoredApiKey()
  const activeProvider = provider || (activeKey?.startsWith('sk-') ? 'openai' : getStoredProvider())

  // If no API key is available, use intelligent domain responder
  if (!activeKey) {
    const lastUserMessage = messages.filter((m) => m.role === 'user').slice(-1)[0]?.content || ''
    await new Promise((resolve) => setTimeout(resolve, 600)) // smooth typing simulation
    return getSmartLocalResponse(lastUserMessage)
  }

  try {
    if (activeProvider === 'openai' || activeKey.startsWith('sk-')) {
      // OpenAI-compatible format
      const openAiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ]

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${activeKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: openAiMessages,
          temperature: 0.7,
          max_tokens: 800,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.warn('OpenAI API returned error, falling back to smart local response:', errorData)
        const lastUserMessage = messages.filter((m) => m.role === 'user').slice(-1)[0]?.content || ''
        return getSmartLocalResponse(lastUserMessage)
      }

      const data = await response.json()
      return data?.choices?.[0]?.message?.content || getSmartLocalResponse(messages.slice(-1)[0]?.content || '')
    } else {
      // Google Gemini format
      const contents = [
        {
          role: 'user',
          parts: [{ text: SYSTEM_PROMPT + '\n\nPlease acknowledge and assist the student.' }],
        },
        {
          role: 'model',
          parts: [{ text: 'Understood. I am ready to guide students and parents as Prof. Mohd. Sharim\'s AI Counselor.' }],
        },
      ]

      messages.forEach((msg) => {
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }],
        })
      })

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${activeKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 800,
            },
          }),
        }
      )

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.warn('Gemini API returned error, falling back to smart local response:', errorData)
        const lastUserMessage = messages.filter((m) => m.role === 'user').slice(-1)[0]?.content || ''
        return getSmartLocalResponse(lastUserMessage)
      }

      const data = await response.json()
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
      return text || getSmartLocalResponse(messages.slice(-1)[0]?.content || '')
    }
  } catch (error) {
    console.error('Error generating AI response:', error)
    const lastUserMessage = messages.filter((m) => m.role === 'user').slice(-1)[0]?.content || ''
    return getSmartLocalResponse(lastUserMessage)
  }
}

/**
 * Generate formatted WhatsApp link with pre-filled flow inquiry
 */
export function generateWhatsAppLink(flowData = {}) {
  const whatsappNumber = siteConfig.whatsappChatNumber || '919548156602'
  const { name, phone, category, course, city, message } = flowData

  // If simple direct message provided without structured form fields
  if (message && !name && !phone && !category && !course && !city) {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  }

  let text = `Hello Prof. Mohd. Sharim,\n\nI would like to inquire about your career & counselling services.\n`

  if (name) text += `• *Name:* ${name}\n`
  if (phone) text += `• *Contact:* ${phone}\n`
  if (category) text += `• *Service Interest:* ${category}\n`
  if (course) text += `• *Course / Stream:* ${course}\n`
  if (city) text += `• *City / Region:* ${city}\n`
  if (message) text += `• *Note:* ${message}\n`

  text += `\nPlease guide me on the next steps and availability. Thank you!`

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
}
