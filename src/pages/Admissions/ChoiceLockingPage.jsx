import { useOutletContext, Link } from 'react-router-dom'
import { FileCheck, CheckCircle2, ArrowRight, Lock, AlertTriangle, ShieldCheck, Clock } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { CtaBanner } from '../../components/CtaBanner'

export function ChoiceLockingPage() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const errorsPrevented = [
    { title: 'Wrong Preference Ordering', desc: 'Putting a lower-tier college above a higher-tier college which locks you out of upgrades in subsequent rounds.' },
    { title: 'Category & Domicile Mistakes', desc: 'Invalid certificate formatting resulting in automatic cancellation of quota/reservation benefits.' },
    { title: 'Missed Freezing/Floating Windows', desc: 'Failure to lock or upgrade seats before the portal cutoff window closes permanently.' },
    { title: 'Hidden Fee & Hostel Discrepancies', desc: 'Selecting colleges without verifying actual semester tuition vs mandatory extra charges.' },
  ]

  const supportedPortals = [
    'JEECUP (UP Polytechnic & D.Pharm Counselling)',
    'CUET UG / PG (Central & State Universities)',
    'AKTU / UPTAC (B.Pharm, B.Tech, MBA State Quota)',
    'Uttarakhand Technical University (UTU Counselling)',
    'NEET AYUSH / State Medical Counselling',
    'Direct Institutional Quota & Management Seats',
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
            <span className="text-slate-500">Form Filling &amp; Choice Locking</span>
          </div>
          <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-bold tracking-wider text-[#2f6bfd] uppercase mb-3">
            Zero-Error Portal Submission
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1830] tracking-tight">
            Form Filling &amp; Choice Locking
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Eliminate portal blunders, optimize your preference order, and ensure your dream seat is locked before deadlines expire.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
                Guaranteed Precision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1830] leading-tight">
                One Single Portal Error Can Cost You an Entire Year
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                State and national counselling portals (JEECUP, CUET, UPTAC, UTU) have rigid rules, multi-round seat allocations, and strict document verification protocols. We provide hands-on, end-to-end management so you never lose a seat due to technical or clerical errors.
              </p>

              {/* Supported Portals Box */}
              <div className="p-6 rounded-2xl bg-[#f8faff] border border-slate-100">
                <h3 className="text-sm font-bold text-[#0f1830] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#2f6bfd]" /> Portals Managed &amp; Supported
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {supportedPortals.map((portal) => (
                    <div key={portal} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2f6bfd] flex-shrink-0" />
                      <span>{portal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openBooking('Form Filling & Choice Locking Support')}
                  className="rounded-xl bg-[#2f6bfd] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 hover:bg-[#1e55e3] transition-all cursor-pointer"
                >
                  Get Choice Locking Assistance
                </button>
              </div>
            </div>

            {/* Right Critical Mistakes Prevented */}
            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-100 shadow-xl shadow-slate-100">
                <div className="flex items-center gap-2 text-amber-600 mb-4 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  Common Errors We Eliminate
                </div>
                <h3 className="text-2xl font-bold text-[#0f1830] mb-6">
                  Why Students Rely On Us
                </h3>

                <div className="space-y-4">
                  {errorsPrevented.map((err) => (
                    <div key={err.title} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <h4 className="text-sm font-bold text-[#0f1830]">{err.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{err.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-[#eef4ff] text-xs text-[#2f6bfd] font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>100% Guaranteed Error-Free Application &amp; Choice Locking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('Form Filling & Choice Locking')} />
    </div>
  )
}

export default ChoiceLockingPage
