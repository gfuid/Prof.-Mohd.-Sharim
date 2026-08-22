import { useOutletContext, Link } from 'react-router-dom'
import { GraduationCap, CheckCircle2, ArrowRight, BookOpen, Target, Award, Calendar, FileText } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { CtaBanner } from '../../components/CtaBanner'

export function ExamSupportPage() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const exams = [
    {
      name: 'JEECUP (UP Polytechnic & Pharmacy)',
      badge: 'Group E / K / A',
      desc: 'Complete guidance for D.Pharm, Diploma in Engineering, and lateral entry programs across Uttar Pradesh government and private polytechnic institutes.',
      features: ['Group E (Bio/Maths) rank analysis', 'Govt polytechnic college mapping', 'Seat allotment round 1–5 tracking'],
    },
    {
      name: 'CUET UG / PG (NTA Central Portals)',
      badge: 'B.Pharm / B.Tech / BBA / B.Sc',
      desc: 'End-to-end support for Central, State, and top Private universities accepting Common University Entrance Test (CUET) scores.',
      features: ['Domain subject combination selection', 'University preference list mapping', 'Normalised percentile vs cutoff prediction'],
    },
    {
      name: 'NEET UG & AYUSH Counselling',
      badge: 'MBBS / BDS / BAMS / BHMS / Nursing',
      desc: 'Expert choice locking for state quota and all-India counselling rounds for medical, dental, ayurveda, and allied health sciences.',
      features: ['State quota vs AIQ cutoff comparison', 'Bond & fee structure verification', 'Category rank reservation optimisation'],
    },
    {
      name: 'AKTU / UPTAC & UTU State Portals',
      badge: 'B.Tech / B.Pharm / MCA / MBA',
      desc: 'Strategic choice filling for state technical universities in Uttar Pradesh (AKTU) and Uttarakhand (UTU) for technical degrees.',
      features: ['Branch preference (CS, AI/ML, Pharma)', 'Tuition fee waiver (FW) seat locking', 'Direct spot round counselling'],
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
            <span>Admissions</span>
            <span>/</span>
            <span className="text-slate-500">CUET / JEECUP / NEET Support</span>
          </div>
          <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-bold tracking-wider text-[#2f6bfd] uppercase mb-3">
            National &amp; State Entrance Guidance
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1830] tracking-tight">
            CUET / JEECUP / NEET Support
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Turn your entrance exam score into the best possible college seat with scientific rank analysis and strategic choice locking.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
              Major Entrance Portals
            </span>
            <h2 className="text-3xl font-extrabold text-[#0f1830] mt-1">
              Comprehensive Support For Every Major Exam
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {exams.map((exam, idx) => (
              <div
                key={exam.name}
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 120}
                className="rounded-3xl p-8 bg-white border border-slate-100 shadow-xl shadow-slate-100/90 flex flex-col justify-between hover:border-blue-200 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#eef4ff] text-[10px] font-bold text-[#2f6bfd] uppercase">
                      {exam.badge}
                    </span>
                    <GraduationCap className="w-5 h-5 text-[#2f6bfd]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f1830] mb-3">{exam.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                    {exam.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {exam.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#2f6bfd] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => openBooking(`Entrance Exam Support - ${exam.name}`)}
                    className="w-full rounded-xl bg-[#2f6bfd] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#1e55e3] transition-colors"
                  >
                    Get Exam Counselling
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('CUET / JEECUP / NEET Support')} />
    </div>
  )
}

export default ExamSupportPage
