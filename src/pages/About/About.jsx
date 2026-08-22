import { useOutletContext } from 'react-router-dom'
import { Award, Target, Users, Sparkles, CheckCircle2, ShieldCheck, Phone, Mail, MapPin, Globe, GraduationCap, Briefcase, FileCheck } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { StatsCounter } from '../../components/StatsCounter'
import { CtaBanner } from '../../components/CtaBanner'

export function About() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const competencies = [
    'WHO-GMP Compliance & Audit Clearance',
    'Complete QMS Overhaul & Implementation',
    'Regulatory Audits (WHO, USFDA, ICH)',
    'Validation Oversight (HVAC, Water, Process, Cleaning)',
    'CAPA & Deviation Management',
    'Documentation Excellence (BMR, BPR, MFR)',
    'cGMP Training & Cross-functional Leadership',
    'SAP / ERP & 21 CFR Part 11 Alignment',
    'Project QA (URS, DQ, IQ, OQ, PQ)',
    'Technology Transfer & Regulatory Submissions',
  ]

  const experiences = [
    {
      role: 'Head – Quality Assurance',
      company: 'ShamShree Lifesciences Ltd.',
      points: [
        'Cleared WHO audits and secured COPPs through complete QMS overhaul.',
        'Rewrote SOPs across QA, QC, Production, Warehouse, and Engineering.',
        'Led validation protocols for HVAC, water, process, and cleaning systems.',
        'Conducted cGMP training for QA, QC, and Production teams.',
        'Directed CAPA implementation for regulatory and contract manufacturer audits.',
      ],
    },
    {
      role: 'Sr. Head QA',
      company: 'Solitaire Pharmacia Pvt. Ltd.',
      period: '2013–2014',
      points: [
        'Achieved WHO-GMP certification within 3 months on the first attempt.',
        'Executed process validation for general tablets and hormonal formulations.',
        'Led water system validation across Phase I–III.',
        'Delivered SOP training using projector-based visual modules.',
      ],
    },
    {
      role: 'Junior Manager-II (QA/Projects)',
      company: 'Hamdard Laboratories',
      period: '2012–2013',
      points: [
        'Led QA and validation for AL-HAMEED-II project covering US, EU, and Russia market expectations.',
        'Managed technology transfer documentation & automation validation aligned with 21 CFR Part 11.',
        'Executed DQ, IQ, OQ, and PQ for new machinery and coordinated FAT/SAT.',
      ],
    },
    {
      role: 'Sr. Chemist QA',
      company: 'IDPL (Govt. of India)',
      period: '2009–2012',
      points: [
        'Managed batch documentation, change controls, and deviation investigations.',
        'Conducted process validation, stability studies, and Annual Product Reviews.',
      ],
    },
    {
      role: 'Trainee Pharmacist',
      company: 'Concept Pharmaceuticals',
      period: '2008–2009',
      points: [
        'Performed IPQA for injectables, tablets, capsules, and liquids.',
        'Assisted in SOP development and validation documentation.',
      ],
    },
  ]

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#f6f9fc] py-16 lg:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
            Leadership Profile
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#0f1830]">
            Prof. Mohd. Sharim
          </h1>
          <p className="mt-2 text-lg font-semibold text-[#2f6bfd]">
            Industrial Quality Assurance &amp; QMS Leader | Education &amp; Career Strategist
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            17+ years of industrial leadership in WHO-GMP compliance, QMS implementation, regulatory audits, and validation across pharmaceutical manufacturing. Dedicated mentor empowering students and job seekers across Western UP, Uttarakhand, and India.
          </p>

          {/* Quick Contact Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-semibold">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-[#2f6bfd]">
              <Phone className="w-4 h-4 text-[#2f6bfd]" />
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-[#2f6bfd]">
              <Mail className="w-4 h-4 text-[#2f6bfd]" />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#2f6bfd]" />
              {siteConfig.location}
            </div>
          </div>
        </div>
      </section>

      {/* Main Bio & Qualifications Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo & Quick Credentials */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/her.png"
                  alt="Prof. Mohd. Sharim"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Education Credentials Card */}
              <div className="mt-6 rounded-2xl bg-[#f8faff] p-6 border border-slate-100">
                <h3 className="text-sm font-bold text-[#0f1830] uppercase tracking-wider flex items-center gap-2 mb-4">
                  <GraduationCap className="w-4 h-4 text-[#2f6bfd]" /> Academic Background
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#2f6bfd]">•</span>
                    <span><strong>Ph.D. (Pharmacy)</strong> – ISBM University (Viva Pending)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#2f6bfd]">•</span>
                    <span><strong>M.Pharm. (Pharmaceutical Administration)</strong> – Manipal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#2f6bfd]">•</span>
                    <span><strong>B.Pharm.</strong> – HNBGU, Srinagar</span>
                  </li>
                </ul>

                <h3 className="text-sm font-bold text-[#0f1830] uppercase tracking-wider flex items-center gap-2 mt-6 mb-3">
                  <Award className="w-4 h-4 text-[#2f6bfd]" /> Certifications &amp; Memberships
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li>• ASQ Associate Member (ID: 65197242)</li>
                  <li>• Certified Quality Auditor (ASQ) – Pursuing</li>
                  <li>• Six Sigma Green Belt (ASQ) – Pursuing</li>
                  <li>• GMP Documentation Specialist – BioPharma Institute</li>
                </ul>
              </div>
            </div>

            {/* Right Bio & Core Competencies */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd] mb-2 inline-block">
                  Professional Summary
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1830] leading-tight">
                  Bridging Regulatory Rigor With Practical Career Transformation
                </h2>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  With more than 17 years of experience leading quality systems in sterile, oral solid dosage, hormonal, beta-lactam, and liquid manufacturing environments, Prof. Mohd. Sharim brings rare industry authority to education counselling and job placements.
                </p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  His proven record of clearing WHO audits, securing COPPs, and leading cross-functional teams translates directly into exceptional mentorship for pharmacy, engineering, and management students seeking dream admissions and corporate placements.
                </p>
              </div>

              {/* Core Competencies Grid */}
              <div>
                <h3 className="text-base font-bold text-[#0f1830] mb-4">
                  Core Industrial &amp; Strategic Competencies
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {competencies.map((comp) => (
                    <div
                      key={comp}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f8faff] border border-slate-100 text-xs font-semibold text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2f6bfd] flex-shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openBooking('1-on-1 Career Consultation with Prof. Sharim')}
                  className="rounded-xl bg-[#2f6bfd] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 hover:bg-[#1e55e3] transition-all cursor-pointer"
                >
                  Book 1-on-1 Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Experience Timeline */}
      <section className="py-20 bg-[#f8faff] border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
              Career Track Record
            </span>
            <h2 className="text-3xl font-extrabold text-[#0f1830] mt-1">
              Industrial Leadership Experience
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="rounded-2xl bg-white p-7 border border-slate-100 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg font-bold text-[#0f1830]">{exp.role}</h3>
                    <p className="text-xs font-semibold text-[#2f6bfd]">{exp.company}</p>
                  </div>
                  {exp.period && (
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[11px] font-bold text-slate-600 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  )}
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#2f6bfd] font-bold mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('1-on-1 Admission & Placement Counselling')} />
    </div>
  )
}

export default About
