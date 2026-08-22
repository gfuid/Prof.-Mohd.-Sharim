import { Building2, Check } from 'lucide-react'
import { experience } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function ExperienceTimeline({ limit }) {
  const roles = limit ? experience.slice(0, limit) : experience

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Professional experience"
          subtitle="17+ years across sterile, oral solid dosage, hormonal, beta-lactam, and liquid oral manufacturing."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* vertical line */}
          <span className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-slate-200 sm:block" />

          <ol className="space-y-8">
            {roles.map((r) => (
              <li key={r.company} className="relative sm:pl-16">
                {/* marker */}
                <span className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full bg-royal-soft text-royal ring-4 ring-white sm:flex">
                  <Building2 className="h-5 w-5" />
                </span>

                <div className="rounded-2xl bg-white p-6 shadow-xl shadow-navy/5 ring-1 ring-slate-100">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{r.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-royal">{r.company}</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        r.current
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-surface text-slatey'
                      }`}
                    >
                      {r.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {r.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-slatey">
                        <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-royal-soft">
                          <Check className="h-2.5 w-2.5 text-royal" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
