import { useOutletContext, Link } from 'react-router-dom'
import { FileText, CheckCircle2, ArrowRight, Sparkles, Award, ShieldCheck, UserCheck } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { CtaBanner } from '../../components/CtaBanner'

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.67 1.67 0 0 0-1.67 1.67 1.67 1.67 0 0 0 1.67 1.67 1.67 1.67 0 0 0 1.67-1.67c0-.92-.75-1.67-1.67-1.67z" />
    </svg>
  )
}

export function CvLinkedinPage() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const makeoverSteps = [
    { title: 'ATS Keyword Optimization', desc: 'Rewriting your resume to pass automated Applicant Tracking Systems (ATS) used by top Pharma and IT recruiters.' },
    { title: 'Executive LinkedIn Rebuild', desc: 'Crafting high-converting headlines, rich summary bios, verified skill tags, and targeted connection strategies.' },
    { title: 'Action-Verb & Impact Metrics', desc: 'Transforming passive job descriptions into measurable achievements (e.g. audit clearances, validation projects, academic honors).' },
    { title: 'Cover Letter & Bio Pitch', desc: 'Custom tailored cover letters and elevator pitches for direct outreach to hiring managers.' },
  ]

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#f6f9fc] py-16 lg:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#2f6bfd] uppercase tracking-wider mb-2">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Placements</span>
            <span>/</span>
            <span className="text-slate-500">CV &amp; LinkedIn Makeover</span>
          </div>
          <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-bold tracking-wider text-[#2f6bfd] uppercase mb-3">
            Recruiter-Ready Profiles
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1830] tracking-tight">
            CV &amp; LinkedIn Makeover
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Get noticed by top HR recruiters with an ATS-optimized resume and an authoritative LinkedIn presence designed by industry leaders.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
                High-Impact Professional Branding
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1830] leading-tight">
                75% of Resumes Are Rejected Before an HR Reads Them
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Modern hiring runs on algorithmic software. If your CV lacks domain keywords (such as WHO-GMP, IPQA, HPLC, validation, or specific software skills), it gets discarded automatically. We reconstruct your profile from the ground up to rank in the top 5% of candidate pools.
              </p>

              <div className="space-y-4 pt-2">
                {makeoverSteps.map((step, idx) => (
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
                  onClick={() => openBooking('CV & LinkedIn Makeover')}
                  className="rounded-xl bg-[#2f6bfd] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 hover:bg-[#1e55e3] transition-all cursor-pointer"
                >
                  Get Your CV &amp; LinkedIn Revamped
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="rounded-3xl bg-[#0e1738] p-8 sm:p-10 text-white shadow-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
                  What You Receive
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-6">
                  Complete Deliverables Package
                </h3>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2f6bfd] flex-shrink-0" />
                    <span>ATS-compliant PDF &amp; Editable Word Resume Template</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-[#2f6bfd] flex-shrink-0" />
                    <span>Complete LinkedIn Profile Optimization &amp; Headline Copy</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2f6bfd] flex-shrink-0" />
                    <span>Customized Job Application Cover Letter Template</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2f6bfd] flex-shrink-0" />
                    <span>Direct HR Connection &amp; Outreach Strategy Guide</span>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-white/10 text-center text-xs font-bold text-white">
                  Turnaround Time: 24 to 48 Hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('CV & LinkedIn Makeover')} />
    </div>
  )
}

export default CvLinkedinPage
