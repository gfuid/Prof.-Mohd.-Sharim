import { useOutletContext, Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle, PhoneCall, Sparkles } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { CtaBanner } from '../../components/CtaBanner'

export function AdmissionPackagesPage() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const packages = [
    {
      name: 'Basic Package',
      price: '₹500 – ₹1,500',
      period: 'per form / session',
      popular: false,
      desc: 'Ideal for students seeking assistance with a single entrance portal or error-free form submission.',
      features: [
        'Single portal form filling & document upload',
        'Basic photo, signature & certificate formatting',
        'College shortlist based on entrance score',
        'Correction window tracking & error fixes',
      ],
    },
    {
      name: 'Standard Package',
      price: '₹2,000 – ₹5,000',
      period: 'full counselling season',
      popular: true,
      desc: 'Our most sought-after package covering complete end-to-end counselling until seat allotment.',
      features: [
        'Detailed academic & budget profile assessment',
        'Govt vs Private college mapping (fees & cutoffs)',
        'Strategic choice filling & locking (JEECUP/CUET/State)',
        'Multi-round allotment tracking (Round 1 to 5)',
        'Direct WhatsApp & phone counselor access',
        'Fee submission & reporting guidance',
      ],
    },
    {
      name: 'Premium Multi-Exam Package',
      price: '₹6,000 – ₹10,000+',
      period: 'full season (all exams)',
      popular: false,
      desc: 'Comprehensive seasonal mentorship covering multiple state and national entrance examinations.',
      features: [
        'Management of up to 3 different entrance portals',
        'Priority 1:1 strategy with Prof. Mohd. Sharim',
        'Scholarship application & fee waiver assistance',
        'Physical reporting & document verification support',
        'Spot round & management quota guidance',
        'Complimentary 1st-year career & CV roadmap',
      ],
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
            <span className="text-slate-500">Admission Fee Packages</span>
          </div>
          <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-bold tracking-wider text-[#2f6bfd] uppercase mb-3">
            Transparent Pricing Structure
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1830] tracking-tight">
            Admission Fee Packages
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Zero hidden charges. Transparent, structured pricing models designed for students and parents across Western UP and Uttarakhand.
          </p>
        </div>
      </section>

      {/* Main Pricing Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={pkg.name}
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 150}
                className={`rounded-3xl p-8 sm:p-9 bg-white border transition-all duration-300 flex flex-col justify-between ${
                  pkg.popular
                    ? 'border-[#2f6bfd] shadow-2xl shadow-[#2f6bfd]/15 relative ring-2 ring-[#2f6bfd]/20 md:-translate-y-2'
                    : 'border-slate-100 shadow-xl shadow-slate-100/90'
                }`}
              >
                <div>
                  {pkg.popular && (
                    <span className="inline-block rounded-full bg-[#2f6bfd] text-white px-3.5 py-1 text-[10px] font-bold tracking-wider uppercase mb-4 shadow-sm">
                      MOST POPULAR
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#0f1830] mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-extrabold text-[#2f6bfd] mb-1">
                    {pkg.price}
                  </div>
                  <p className="text-xs text-slate-400 mb-6 font-medium">
                    {pkg.period}
                  </p>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    {pkg.desc}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#2f6bfd] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <button
                    type="button"
                    onClick={() => openBooking(`Admission Package - ${pkg.name}`)}
                    className={`w-full rounded-xl py-3.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      pkg.popular
                        ? 'bg-[#2f6bfd] text-white hover:bg-[#1e55e3] shadow-md shadow-[#2f6bfd]/25'
                        : 'bg-[#0e1738] text-white hover:bg-[#151f47]'
                    }`}
                  >
                    Select {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Note */}
          <div className="mt-16 p-8 rounded-3xl bg-[#f8faff] border border-slate-100 text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h4 className="text-base font-bold text-[#0f1830] mb-2">
              School &amp; College Tie-ups (Institutional Pricing)
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xl mx-auto mb-4">
              We provide bulk admission counselling seminars, form filling camps, and conversion support for schools and colleges across Western UP &amp; Uttarakhand.
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#2f6bfd] hover:underline"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Contact for Institutional Tie-ups: {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('Admission Fee Packages')} />
    </div>
  )
}

export default AdmissionPackagesPage
