import { useOutletContext, Link } from 'react-router-dom'
import { GraduationCap, CheckCircle2, ArrowRight, BookOpen, Compass, Award, ShieldCheck, Building2, HelpCircle } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { CtaBanner } from '../../components/CtaBanner'

export function CollegeMappingPage() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const mappingSteps = [
    {
      title: 'Academic & Budget Assessment',
      desc: 'Evaluation of your 10th/12th/Graduation marks, entrance percentiles, maximum tuition fee budget, and preferred location (UP, Uttarakhand, Delhi-NCR, Pan-India).',
    },
    {
      title: 'Government vs Private College Benchmark',
      desc: 'Comparative cutoff analysis, seat matrix evaluation, affiliation checks (PCI, AICTE, UGC, NAAC), and real ROI placement reviews.',
    },
    {
      title: 'Personalized College Shortlist',
      desc: 'A prioritized list categorized into Dream Colleges, Target Colleges, and Safe Options to guarantee admission without wasting a gap year.',
    },
    {
      title: 'Scholarship & Fee Concession Guidance',
      desc: 'Assistance in applying for state government scholarships, merit concessions, and low-interest student loans.',
    },
  ]

  const streams = [
    { name: 'Pharmacy (D.Pharm / B.Pharm / M.Pharm)', tag: 'High Demand', desc: 'PCI-approved colleges with modern lab infrastructure and GMP compliance.' },
    { name: 'Engineering & Tech (B.Tech / Poly / CS / AI)', tag: 'Top Placements', desc: 'AKTU, UTU, and top private universities with verified campus recruitment.' },
    { name: 'Medical & Paramedical (NEET / Nursing / BPT)', tag: 'Healthcare', desc: 'Govt & Private medical colleges, hospital attachments, and clinical training.' },
    { name: 'Management & Commerce (BBA / MBA / BCA)', tag: 'Corporate Ready', desc: 'Industry-integrated curriculum with mandatory corporate internships.' },
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
            <span className="text-slate-500">College &amp; Course Mapping</span>
          </div>
          <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-bold tracking-wider text-[#2f6bfd] uppercase mb-3">
            Profile Assessment &amp; Shortlisting
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1830] tracking-tight">
            College &amp; Course Mapping
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Find the right college and specialization that matches your entrance score, career ambition, and family budget with 100% verified data.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
                Strategic Profile Assessment
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1830] leading-tight">
                Never Choose a College Blindly
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Choosing the wrong college can lead to unapproved degrees, poor placements, and wasted fees. Under the guidance of <strong>Prof. Mohd. Sharim (17+ Yrs Experience)</strong>, we map your academic profile to premier accredited institutions across Western UP, Uttarakhand, and national platforms.
              </p>

              <div className="space-y-4 pt-2">
                {mappingSteps.map((step, idx) => (
                  <div key={step.title} className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#f8faff] border border-slate-100">
                    <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#2f6bfd] text-white text-xs font-bold mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0f1830]">{step.title}</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => openBooking('College & Course Mapping Assessment')}
                  className="rounded-xl bg-[#2f6bfd] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 hover:bg-[#1e55e3] transition-all cursor-pointer"
                >
                  Book Profile Assessment Session
                </button>
              </div>
            </div>

            {/* Right Stream Cards */}
            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="rounded-3xl bg-[#0e1738] p-8 sm:p-10 text-white shadow-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
                  Key Focus Disciplines
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-6">
                  Targeted Academic Streams
                </h3>

                <div className="space-y-4">
                  {streams.map((st) => (
                    <div key={st.name} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2f6bfd] transition-all">
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="text-sm font-bold text-white">{st.name}</h4>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#2f6bfd]/30 text-blue-200 border border-[#2f6bfd]/50">
                          {st.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Direct Hotline for Parents &amp; Students:</span>
                  <a href={`tel:${siteConfig.phone}`} className="font-bold text-white hover:text-[#2f6bfd]">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('College & Course Mapping')} />
    </div>
  )
}

export default CollegeMappingPage
