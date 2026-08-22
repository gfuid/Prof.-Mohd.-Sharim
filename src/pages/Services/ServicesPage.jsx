import { useOutletContext } from 'react-router-dom'
import { CheckCircle2, BookOpen, Briefcase, GraduationCap, Award, HelpCircle, PhoneCall } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { ServicesGrid } from '../../components/ServicesGrid'
import { CounselingProcess } from '../../components/CounselingProcess'
import { CtaBanner } from '../../components/CtaBanner'

export function ServicesPage() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const serviceCategories = [
    {
      title: 'Admission Counselling Packages',
      badge: 'FOR STUDENTS & PARENTS',
      description:
        'End-to-end guidance for School (9th–12th) & College (D.Pharm, B.Pharm, B.Tech, BBA, NEET, CUET, JEECUP).',
      packages: [
        {
          name: 'Basic Package',
          price: '₹500 – ₹1,500',
          period: 'per form / session',
          features: [
            'Online form filling & document upload',
            'Basic error correction & verification',
            'College shortlist based on score',
            'Single entrance portal assistance',
          ],
        },
        {
          name: 'Standard Package',
          price: '₹2,000 – ₹5,000',
          popular: true,
          period: 'full counselling season',
          features: [
            'In-depth academic profile assessment',
            'Govt vs Private college cut-off mapping',
            'Choice filling & portal locking (CUET/JEECUP/State)',
            'Tracking allotment rounds & fee guidance',
            'Direct WhatsApp & phone counselor support',
          ],
        },
        {
          name: 'Premium Package',
          price: '₹6,000 – ₹10,000+',
          period: 'multi-exam full season',
          features: [
            'Multiple entrance exam & portal management',
            'Priority 1:1 seat strategy & scholarship assistance',
            'Dedicated senior counselor assignment',
            'Post-allotment document verification support',
            'Free 1st-year career & placement roadmap',
          ],
        },
      ],
    },
    {
      title: 'Placements & Career Services',
      badge: 'FOR GRADUATES & JOB SEEKERS',
      description:
        'Specialized for Freshers, local graduates, paramedical, and pharma sales job seekers.',
      packages: [
        {
          name: 'CV & Interview Package',
          price: '₹500 – ₹1,500',
          period: 'one-time',
          features: [
            'ATS-compliant CV & LinkedIn profile rebuild',
            '1-on-1 mock interview with expert feedback',
            'Salary negotiation tips & communication drill',
          ],
        },
        {
          name: 'Full Placement Support',
          price: '₹2,000 – ₹5,000',
          popular: true,
          period: 'till first job offer',
          features: [
            'Complete CV, LinkedIn & portfolio optimization',
            '3x Mock interview simulations & behavioural drills',
            'Direct job openings & HR referrals in Pharma/Tech',
            'Access to exclusive pooled campus placement drives',
          ],
        },
        {
          name: 'Institutional Placement Cell',
          price: '₹30,000 – ₹2,00,000',
          period: 'annual retainer for colleges',
          features: [
            'End-to-end placement cell management',
            'Corporate recruiter tie-ups & drive organization',
            'Student pre-placement training batches',
            'Verified hiring reports & conversion tracking',
          ],
        },
      ],
    },
    {
      title: 'Skill Trainings & Certifications',
      badge: 'JOB-READY SKILLS',
      description:
        'Short-term practical modules to build high-demand soft skills and domain competencies.',
      packages: [
        {
          name: 'Short Skill Course',
          price: '₹1,000 – ₹3,000',
          period: '10–20 hours',
          features: [
            'Soft skills & professional English communication',
            'Pharma sales & detailing fundamentals',
            'Interview confidence & body language',
            'Course completion certificate',
          ],
        },
        {
          name: 'Certificate Masterclass',
          price: '₹3,000 – ₹10,000',
          popular: true,
          period: '30–60 hours',
          features: [
            'Pharma QA/QMS, Hospital documentation & GMP basics',
            'Advanced Excel, computer essentials & reporting',
            'Live case studies & practical assignments',
            'Industry-recognized certification & referral',
          ],
        },
        {
          name: 'Institutional Batch Training',
          price: '₹20,000 – ₹1,00,000',
          period: 'per batch (30–100 students)',
          features: [
            'Campus workshop / seminar series',
            'Crash courses for JEECUP / CUET',
            'Printed study materials & certificates',
            'Trainer honorarium & content provided',
          ],
        },
      ],
    },
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#f6f9fc] py-16 lg:py-20 border-b border-slate-100 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
            Services &amp; Fee Structure
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#0f1830]">
            Transparent Career &amp; Admission Solutions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-500">
            Clear, transparent package options designed for students, parents, job seekers, and academic institutions across Western UP, Uttarakhand &amp; India.
          </p>
        </div>
      </section>

      {/* 3 Main Highlights Cards */}
      <div className="pt-16">
        <ServicesGrid onSelectService={(s) => openBooking(s.title)} />
      </div>

      {/* Detailed Package Sections from doc.txt */}
      <section className="py-20 bg-[#f8faff] border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {serviceCategories.map((cat, idx) => (
            <div key={cat.title} id={`category-${idx}`}>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-bold tracking-wider text-[#2f6bfd] uppercase mb-2">
                  {cat.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1830]">
                  {cat.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-500">
                  {cat.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                {cat.packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`rounded-3xl p-8 bg-white border transition-all duration-300 flex flex-col justify-between ${
                      pkg.popular
                        ? 'border-[#2f6bfd] shadow-xl shadow-[#2f6bfd]/10 relative ring-2 ring-[#2f6bfd]/20'
                        : 'border-slate-100 shadow-md'
                    }`}
                  >
                    <div>
                      {pkg.popular && (
                        <span className="inline-block rounded-full bg-[#2f6bfd] text-white px-3 py-1 text-[10px] font-bold tracking-wider uppercase mb-4 shadow-sm">
                          RECOMMENDED
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-[#0f1830] mb-2">{pkg.name}</h3>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#2f6bfd] mb-1">
                        {pkg.price}
                      </div>
                      <p className="text-xs text-slate-400 mb-6 font-medium">
                        {pkg.period}
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
                        onClick={() => openBooking(`${cat.title} - ${pkg.name}`)}
                        className={`w-full rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                          pkg.popular
                            ? 'bg-[#2f6bfd] text-white hover:bg-[#1e55e3] shadow-md shadow-[#2f6bfd]/20'
                            : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                        }`}
                      >
                        Enroll / Inquire Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOP Process Flow */}
      <CounselingProcess />

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('1-on-1 Admission Counselling')} />
    </div>
  )
}

export default ServicesPage
