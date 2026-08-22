import { useOutletContext, Link } from 'react-router-dom'
import { MessageSquare, CheckCircle2, ArrowRight, Sparkles, Award, Users } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { CtaBanner } from '../../components/CtaBanner'

export function SoftSkillsPage() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const modules = [
    {
      title: 'Spoken English & Fluency Drills',
      desc: 'Overcoming hesitation, correct pronunciation, sentence structuring, and everyday professional vocabulary.',
    },
    {
      title: 'Corporate Workplace Communication',
      desc: 'Professional email etiquette, formal meetings participation, active listening, and cross-team collaboration.',
    },
    {
      title: 'Interview Presentation & Body Language',
      desc: 'Posture, handshake, eye contact, non-verbal cues, and commanding executive presence in high-stakes interviews.',
    },
    {
      title: 'Conflict Resolution & Leadership',
      desc: 'Handling workplace disagreements constructively, negotiation techniques, and team coordination skills.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#f6f9fc] py-16 lg:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#2f6bfd] uppercase tracking-wider mb-2">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Trainings</span>
            <span>/</span>
            <span className="text-slate-500">Soft Skills &amp; English Fluency</span>
          </div>
          <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-bold tracking-wider text-[#2f6bfd] uppercase mb-3">
            Career Accelerator Program
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1830] tracking-tight">
            Soft Skills &amp; English Fluency
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Speak with commanding clarity, ace corporate interviews, and develop unshakeable professional confidence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
                Personality Transformation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1830] leading-tight">
                Technical Knowledge Gets You Noticed. Soft Skills Get You Promoted.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Many talented students in Western UP and Uttarakhand miss out on top MNC packages due to communication hesitation. Our intensive, practice-driven modules break language barriers and build boardroom-level fluency.
              </p>

              <div className="space-y-4 pt-2">
                {modules.map((m, idx) => (
                  <div key={m.title} className="p-4 rounded-2xl bg-[#f8faff] border border-slate-100">
                    <h3 className="text-sm font-bold text-[#0f1830] flex items-center gap-2">
                      <span className="text-xs font-extrabold text-[#2f6bfd]">0{idx + 1}.</span>
                      {m.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed pl-6">{m.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => openBooking('Soft Skills & English Fluency Course')}
                  className="rounded-xl bg-[#2f6bfd] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 hover:bg-[#1e55e3] transition-all cursor-pointer"
                >
                  Join Soft Skills Training (₹1k–₹3k)
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-100 shadow-xl shadow-slate-100">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
                  Program Methodology
                </span>
                <h3 className="text-2xl font-bold text-[#0f1830] mt-1 mb-6">
                  100% Practical &amp; Interactive
                </h3>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2f6bfd] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 mb-0.5">Daily Extempore &amp; Group Discussions</strong>
                      <span>Real-time speaking exercises to eliminate stage fright and build spontaneity.</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2f6bfd] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 mb-0.5">Recorded Video Presentation Reviews</strong>
                      <span>Personalized analysis of your speech pace, tone, and facial expressions.</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2f6bfd] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 mb-0.5">Live Mock Corporate Meetings</strong>
                      <span>Simulating corporate boardroom scenarios, client handling, and debate formats.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-[#eef4ff] text-center text-xs font-bold text-[#2f6bfd]">
                  Batch Size Limited to 15 Students for 1:1 Focus
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('Soft Skills & English Fluency')} />
    </div>
  )
}

export default SoftSkillsPage
