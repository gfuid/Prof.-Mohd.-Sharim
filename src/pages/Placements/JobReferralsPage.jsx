import { useOutletContext, Link } from 'react-router-dom'
import { Briefcase, CheckCircle2, ArrowRight, Building2, Users, Award, ShieldCheck, MapPin } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { CtaBanner } from '../../components/CtaBanner'

export function JobReferralsPage() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const jobSectors = [
    {
      title: 'Pharmaceutical Manufacturing (QA / QC / Production)',
      roles: ['QA Officer / Executive', 'QC Analyst (HPLC, UV, Dissolution)', 'Production Chemist', 'IPQA Supervisor', 'Regulatory Affairs Assistant'],
      locations: 'Baddi, Haridwar, Roorkee, Paonta Sahib, Dehradun, Sikkim, Gujarat, Hyderabad',
    },
    {
      title: 'Pharma Detailing, Sales & Marketing',
      roles: ['Medical Representative (MR)', 'Area Sales Manager Trainee', 'Product Executive', 'Pharma Supply Chain Coordinator'],
      locations: 'Delhi-NCR, Western UP (Meerut, Saharanpur), Uttarakhand, Pan-India',
    },
    {
      title: 'Hospital & Healthcare Administration',
      roles: ['Hospital Pharmacist', 'Clinical Research Associate', 'Medical Documentation Executive', 'Pharmacovigilance Trainee'],
      locations: 'Leading Corporate Hospital Chains & Diagnostics',
    },
    {
      title: 'Tech, Software & Management',
      roles: ['Junior Software Engineer', 'Data Analyst Trainee', 'BPO / Operations Associate', 'Business Development Trainee'],
      locations: 'Noida, Gurgaon, Chandigarh, Pune, Bangalore',
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
            <span className="text-slate-500">Pharma &amp; Corporate Job Referrals</span>
          </div>
          <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-bold tracking-wider text-[#2f6bfd] uppercase mb-3">
            Direct Corporate Connections
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1830] tracking-tight">
            Pharma &amp; Corporate Job Referrals
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Directly connect with plant heads, HR managers, and corporate recruitment drives across Northern India and national manufacturing hubs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
              Active Hiring Sectors
            </span>
            <h2 className="text-3xl font-extrabold text-[#0f1830] mt-1">
              Where Our Candidates Get Hired
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {jobSectors.map((sec, idx) => (
              <div
                key={sec.title}
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 120}
                className="rounded-3xl p-8 bg-white border border-slate-100 shadow-xl shadow-slate-100/90 flex flex-col justify-between hover:border-blue-200 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#eef4ff] text-[#2f6bfd] flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0f1830] leading-snug">
                      {sec.title}
                    </h3>
                  </div>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Common Job Profiles:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sec.roles.map((r) => (
                        <span key={r} className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-100">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <MapPin className="w-4 h-4 text-[#2f6bfd] flex-shrink-0" />
                  <span>Hubs: {sec.locations}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center" data-aos="fade-up">
            <button
              type="button"
              onClick={() => openBooking('Job Referral & Placement Support')}
              className="rounded-xl bg-[#2f6bfd] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 hover:bg-[#1e55e3] transition-all cursor-pointer"
            >
              Apply For Active Job Referrals
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('Pharma & Corporate Job Referrals')} />
    </div>
  )
}

export default JobReferralsPage
