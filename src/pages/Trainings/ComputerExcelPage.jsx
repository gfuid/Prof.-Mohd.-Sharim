import { useOutletContext, Link } from 'react-router-dom'
import { FileSpreadsheet, CheckCircle2, ArrowRight, Laptop, Table, Database, Award } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { CtaBanner } from '../../components/CtaBanner'

export function ComputerExcelPage() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})

  const topics = [
    {
      title: 'Advanced MS Excel Mastery',
      skills: ['VLOOKUP, XLOOKUP & INDEX-MATCH formulas', 'Pivot Tables, Slicers & Dynamic Dashboards', 'Conditional formatting & Data Validation rules', 'Automated reporting templates & charts'],
    },
    {
      title: 'Pharmaceutical & Hospital Documentation',
      skills: ['Electronic Batch Record (eBMR/eBPR) formats', 'Hospital patient admission & billing records', 'Inventory stock tracking & FIFO management', 'Good Documentation Practices (GDP / ALCOA+)'],
    },
    {
      title: 'MS Word & PowerPoint for Executives',
      skills: ['SOP authoring with formal styling & version tables', 'Audit inspection presentation decks', 'Corporate executive summary documentation', 'Exporting compliant PDF reports'],
    },
    {
      title: 'SAP / ERP & Cloud Workflows',
      skills: ['Basic concepts of Enterprise Resource Planning (ERP)', 'Inventory, material management & QA status workflows', 'Google Workspace (Sheets, Docs, Drive) collaboration'],
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
            <span className="text-slate-500">Computer, Excel &amp; Documentation</span>
          </div>
          <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-bold tracking-wider text-[#2f6bfd] uppercase mb-3">
            Practical Office &amp; Lab Skills
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1830] tracking-tight">
            Computer, Excel &amp; Documentation
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Master essential data analysis, advanced spreadsheets, and regulatory documentation workflows used across modern offices and pharmaceutical plants.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
              Hands-on Modules
            </span>
            <h2 className="text-3xl font-extrabold text-[#0f1830] mt-1">
              Curriculum &amp; Technical Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {topics.map((t, idx) => (
              <div
                key={t.title}
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 120}
                className="rounded-3xl p-8 bg-white border border-slate-100 shadow-xl shadow-slate-100/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#eef4ff] text-[#2f6bfd] flex items-center justify-center flex-shrink-0">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0f1830]">
                      {t.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-600">
                    {t.skills.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2f6bfd] flex-shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center" data-aos="fade-up">
            <button
              type="button"
              onClick={() => openBooking('Computer, Excel & Documentation Course')}
              className="rounded-xl bg-[#2f6bfd] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 hover:bg-[#1e55e3] transition-all cursor-pointer"
            >
              Enroll in Computer &amp; Excel Masterclass (₹1k–₹3k)
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onOpenBooking={() => openBooking('Computer, Excel & Documentation')} />
    </div>
  )
}

export default ComputerExcelPage
