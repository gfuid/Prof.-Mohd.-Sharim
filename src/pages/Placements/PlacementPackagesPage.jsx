import { useOutletContext, Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Briefcase, Building2, Award, PhoneCall } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { CtaBanner } from '../../components/CtaBanner'

export function PlacementPackagesPage() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const studentPackages = [
    {
      name: 'CV + Interview Package',
      price: '₹500 – ₹1,500',
      period: 'one-time service',
      popular: false,
      desc: 'For graduates who have existing job leads but need a world-class ATS resume and 1:1 mock interview coaching.',
      features: [
        'Complete ATS resume rebuild (Word + PDF)',
        'LinkedIn headline & summary optimization',
        '1x 60-Minute live mock interview simulation',
        'Technical & behavioral feedback scorecard',
      ],
    },
    {
      name: 'Full Placement Support',
      price: '₹2,000 – ₹5,000',
      period: 'till first job offer letter',
      popular: true,
      desc: 'End-to-end dedicated placement mentorship connecting you directly with active pharmaceutical & corporate recruiters.',
      features: [
        'Everything in CV + Interview Package',
        '3x Full mock interview & communication drills',
        'Direct HR referrals in Pharma, Tech & Sales',
        'Priority entry to pooled campus placement drives',
        'Salary negotiation guidance & joining support',
      ],
    },
  ]

  const institutionalModels = [
    {
      title: 'College Placement Cell Retainer',
      price: '₹30,000 – ₹2,00,000 / year',
      desc: 'End-to-end management of college placement departments, corporate tie-ups, student pre-placement grooming batches, and on-campus hiring drives.',
    },
    {
      title: 'Corporate Hiring Partner (Employer Side)',
      price: '5–10% of 1st Month CTC / ₹3k–₹10k per hire',
      desc: 'Sourcing, pre-screening, and providing job-ready, GMP-trained candidates for pharmaceutical manufacturing plants and corporate roles.',
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
            <span className="text-slate-500">Placement Packages</span>
          </div>
          <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-bold tracking-wider text-[#2f6bfd] uppercase mb-3">
            Transparent Placement Models
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1830] tracking-tight">
            Placement Packages &amp; Pricing
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Transparent packages for students, job seekers, colleges, and corporate employers looking for verified results.
          </p>
        </div>
      </section>

      {/* Student Packages Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
              For Job Seekers &amp; Freshers
            </span>
            <h2 className="text-3xl font-extrabold text-[#0f1830] mt-1">
              Student Placement Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {studentPackages.map((pkg, idx) => (
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
                      RECOMMENDED
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
                    onClick={() => openBooking(`Placement Package - ${pkg.name}`)}
                    className={`w-full rounded-xl py-3.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      pkg.popular
                        ? 'bg-[#2f6bfd] text-white hover:bg-[#1e55e3] shadow-md shadow-[#2f6bfd]/25'
                        : 'bg-[#0e1738] text-white hover:bg-[#151f47]'
                    }`}
                  >
                    Enroll in {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional & Corporate Hiring Models */}
          <div className="mt-20 pt-16 border-t border-slate-100" data-aos="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
                Institutions &amp; Employers
              </span>
              <h3 className="text-2xl font-extrabold text-[#0f1830] mt-1">
                College Retainers &amp; Corporate Recruitment Models
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {institutionalModels.map((inst) => (
                <div key={inst.title} className="p-8 rounded-3xl bg-[#f8faff] border border-slate-100 shadow-sm">
                  <h4 className="text-lg font-bold text-[#0f1830] mb-2">{inst.title}</h4>
                  <div className="text-lg font-extrabold text-[#2f6bfd] mb-3">{inst.price}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{inst.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#0e1738] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#151f47] transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#2f6bfd]" />
                Institutional Partnership Call: {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('Placement Packages')} />
    </div>
  )
}

export default PlacementPackagesPage
