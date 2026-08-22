import { useOutletContext, Link } from 'react-router-dom'
import { Award, CheckCircle2, ArrowRight, ShieldCheck, BookOpen, Clock, FileCheck } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { CtaBanner } from '../../components/CtaBanner'

export function PharmaTrainingPage() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const curriculum = [
    {
      title: 'WHO-GMP & Regulatory Fundamentals',
      topics: ['Current Good Manufacturing Practices (cGMP)', 'WHO, USFDA, and ICH regulatory guidelines', 'COPPs (Certificate of Pharmaceutical Product) requirements'],
    },
    {
      title: 'Quality Management Systems (QMS)',
      topics: ['Change Control, CAPA & Deviation handling', 'OOS (Out of Specification) & OOT investigations', 'Risk assessment frameworks (FMEA, HACCP)'],
    },
    {
      title: 'Documentation & Production Excellence',
      topics: ['Batch Manufacturing Records (BMR) review', 'Batch Packaging Records (BPR) & MFR standards', 'SOP authoring across QA, QC, Warehouse & Engineering'],
    },
    {
      title: 'Validation & Engineering Oversight',
      topics: ['HVAC & Water system Phase I–III validation', 'Process validation for tablets, liquids & sterile parenterals', 'Cleaning validation & 21 CFR Part 11 automation'],
    },
    {
      title: 'Pharma Detailing & Ethical Sales',
      topics: ['Doctor detailing techniques & pharmacology pitches', 'Product portfolio presentation & objection handling', 'Field territory management & pharmacy chemist tie-ups'],
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
            <span className="text-slate-500">Pharma QA/QC &amp; Sales Training</span>
          </div>
          <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-bold tracking-wider text-[#2f6bfd] uppercase mb-3">
            Industry Masterclass by Head QA
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1830] tracking-tight">
            Pharma QA/QC &amp; Sales Training
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Gain job-ready manufacturing compliance skills directly from <strong>Prof. Mohd. Sharim (17+ Yrs Head QA)</strong> and step into pharmaceutical jobs with practical competence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
              Comprehensive Course Curriculum
            </span>
            <h2 className="text-3xl font-extrabold text-[#0f1830] mt-1">
              What You Will Master
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {curriculum.map((mod, idx) => (
              <div
                key={mod.title}
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 100}
                className="rounded-3xl p-7 bg-white border border-slate-100 shadow-xl shadow-slate-100/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#eef4ff] text-[#2f6bfd] text-xs font-extrabold">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-[#0f1830]">{mod.title}</h3>
                  </div>

                  <ul className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    {mod.topics.map((top) => (
                      <li key={top} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2f6bfd] flex-shrink-0 mt-0.5" />
                        <span>{top}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-[#0e1738] text-white max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6" data-aos="fade-up">
            <div>
              <h4 className="text-lg font-bold text-white">Enroll in Next Batch</h4>
              <p className="text-xs text-slate-300 mt-1">
                Short Course (10–20 hrs: ₹1,000–₹3,000) • Certificate Masterclass (30–60 hrs: ₹3,000–₹10,000)
              </p>
            </div>
            <button
              type="button"
              onClick={() => openBooking('Pharma QA/QC & Sales Training')}
              className="rounded-xl bg-[#2f6bfd] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#1e55e3] transition-colors flex-shrink-0 cursor-pointer"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('Pharma QA/QC & Sales Training')} />
    </div>
  )
}

export default PharmaTrainingPage
