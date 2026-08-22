import { useOutletContext, Link } from 'react-router-dom'
import { Users, CheckCircle2, ArrowRight, Video, MessageSquare, Award, Sparkles } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { CtaBanner } from '../../components/CtaBanner'

export function MockInterviewsPage() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const interviewModules = [
    {
      title: 'Technical Domain Drills',
      desc: 'Deep-dive questioning on WHO-GMP, QA/QC testing, validation, equipment calibration, BMR/BPR, or software technologies tailored to your exact specialization.',
    },
    {
      title: 'HR & Behavioral Scenarios',
      desc: 'Mastering the STAR method (Situation, Task, Action, Result) for handling tricky situational, conflict-resolution, and leadership questions.',
    },
    {
      title: 'Body Language & Communication Polish',
      desc: 'Camera presence, professional voice modulation, eye contact, and structured English articulation.',
    },
    {
      title: 'Salary Negotiation & Offer Evaluation',
      desc: 'How to benchmark market pay scales and negotiate compensation packages with confidence.',
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
            <span>Placements</span>
            <span>/</span>
            <span className="text-slate-500">Mock Interviews &amp; Grooming</span>
          </div>
          <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-bold tracking-wider text-[#2f6bfd] uppercase mb-3">
            Real-World Interview Simulations
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1830] tracking-tight">
            Mock Interviews &amp; Grooming
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Practice 1-on-1 interview simulations with industrial leaders, eliminate anxiety, and secure top offers on your first attempt.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
                1:1 Executive Interview Coaching
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1830] leading-tight">
                Walk Into Your Next Interview With Total Confidence
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Interviews are high-stakes conversations where first impressions decide your career trajectory. Under the direct coaching of <strong>Prof. Mohd. Sharim</strong> (17+ years leading corporate QA teams and hiring panels), you will experience realistic interview simulations and receive actionable feedback.
              </p>

              <div className="space-y-4 pt-2">
                {interviewModules.map((mod, idx) => (
                  <div key={mod.title} className="p-4 rounded-2xl bg-[#f8faff] border border-slate-100">
                    <h3 className="text-sm font-bold text-[#0f1830] flex items-center gap-2">
                      <span className="text-xs font-extrabold text-[#2f6bfd]">0{idx + 1}.</span>
                      {mod.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed pl-6">{mod.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => openBooking('Mock Interview & Grooming Session')}
                  className="rounded-xl bg-[#2f6bfd] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 hover:bg-[#1e55e3] transition-all cursor-pointer"
                >
                  Schedule Your Mock Interview
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-100 shadow-xl shadow-slate-100">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
                  Simulation Structure
                </span>
                <h3 className="text-2xl font-bold text-[#0f1830] mt-1 mb-6">
                  What Happens in a 60-Min Drill
                </h3>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-[#2f6bfd] block mb-1">00–10 Min: Profile &amp; Role Calibration</span>
                    <span>Reviewing the target company, job description, and your resume points.</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-[#2f6bfd] block mb-1">10–45 Min: Live Mock Interview</span>
                    <span>Intense technical, behavioral, and situational questioning under realistic pressure.</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-[#2f6bfd] block mb-1">45–60 Min: Comprehensive Feedback &amp; Scorecard</span>
                    <span>Detailed scorecard analyzing body language, technical accuracy, speech clarity, and improvement points.</span>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-[#eef4ff] text-center text-xs font-bold text-[#2f6bfd]">
                  Includes Video Recording &amp; Written Feedback Scorecard
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('Mock Interviews & Grooming')} />
    </div>
  )
}

export default MockInterviewsPage
