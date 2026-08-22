import { useOutletContext, Link } from 'react-router-dom'
import { BookOpen, CheckCircle2, ArrowRight, Zap, Target, Award, Clock } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { CtaBanner } from '../../components/CtaBanner'

export function CrashCoursesPage() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const crashCourses = [
    {
      name: 'JEECUP Group E (Pharmacy) Fastrack Crash Course',
      duration: '30 Days Intensive (60 Hours)',
      badge: 'D.Pharm Aspirants',
      desc: 'Focused Biology, Chemistry & Physics revision targeting top rank in UP Polytechnic Group E for government and PCI-approved D.Pharm seats.',
      points: ['Chapter-wise formula sheets & high-yield summaries', 'Previous 7 years solved question bank', '5 Full-length online timed mock tests with rank analysis'],
    },
    {
      name: 'CUET UG Pharmacy & Science Crash Batch',
      duration: '45 Days Intensive (90 Hours)',
      badge: 'B.Pharm / B.Sc / B.Tech',
      desc: 'NTA syllabus aligned domain subject coaching (Chemistry, Biology, Physics, Mathematics) plus General Test and English comprehension.',
      points: ['NCERT line-by-line concept mastery', 'Speed-solving short tricks for numerical sections', 'Weekly computer-based test (CBT) simulations'],
    },
    {
      name: 'Diploma / Polytechnic Lateral Entry Crash Course',
      duration: '20 Days Booster (40 Hours)',
      badge: 'Direct 2nd Year Entry',
      desc: 'Specialized for 12th Science and ITI holders seeking direct second-year engineering polytechnic admission.',
      points: ['Technical aptitude and core mathematics focus', 'Last-minute revision cheat-sheets', 'Dedicated doubt clearance workshops'],
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
            <span className="text-slate-500">Entrance Crash Courses</span>
          </div>
          <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-bold tracking-wider text-[#2f6bfd] uppercase mb-3">
            High-Yield Exam Preparation
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1830] tracking-tight">
            Entrance Crash Courses
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Maximize your percentile in minimum time with targeted, high-yield crash batches for JEECUP, CUET, and state technical exams.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-4xl mx-auto">
            {crashCourses.map((cc, idx) => (
              <div
                key={cc.name}
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 120}
                className="rounded-3xl p-8 bg-white border border-slate-100 shadow-xl shadow-slate-100/90 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-blue-200 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#eef4ff] text-[10px] font-bold text-[#2f6bfd] uppercase">
                      {cc.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {cc.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0f1830]">{cc.name}</h3>
                  <p className="text-xs text-slate-500 max-w-xl leading-relaxed">{cc.desc}</p>

                  <ul className="space-y-1.5 pt-2 text-xs text-slate-700">
                    {cc.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2f6bfd] flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => openBooking(`Entrance Crash Course - ${cc.name}`)}
                    className="w-full md:w-auto rounded-xl bg-[#2f6bfd] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#1e55e3] transition-colors cursor-pointer"
                  >
                    Join Batch
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('Entrance Crash Courses')} />
    </div>
  )
}

export default CrashCoursesPage
