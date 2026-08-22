import { GraduationCap, Medal } from 'lucide-react'
import { education, certifications } from '../data/site'
import { SectionHeading } from './SectionHeading'

const statusStyle = (s) =>
  s === 'Pursuing'
    ? 'bg-amber-50 text-amber-600'
    : s === 'Active'
      ? 'bg-royal-soft text-royal'
      : 'bg-emerald-50 text-emerald-600'

export function EducationSection() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Academic and professional credentials"
          subtitle="Formal pharmacy education backed by ongoing quality certifications through ASQ."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="flex items-center gap-3 text-lg font-semibold text-ink">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-royal-soft text-royal">
                <GraduationCap className="h-5 w-5" />
              </span>
              Education
            </h3>
            <ol className="mt-6 space-y-4">
              {education.map((e) => (
                <li
                  key={e.degree}
                  className="rounded-2xl bg-white p-6 shadow-lg shadow-navy/5 ring-1 ring-slate-100"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h4 className="text-base font-semibold text-ink">{e.degree}</h4>
                    {e.note && (
                      <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-600">
                        {e.note}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-royal">{e.institute}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="flex items-center gap-3 text-lg font-semibold text-ink">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-royal-soft text-royal">
                <Medal className="h-5 w-5" />
              </span>
              Certifications
            </h3>
            <ol className="mt-6 space-y-4">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="rounded-2xl bg-white p-6 shadow-lg shadow-navy/5 ring-1 ring-slate-100"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h4 className="text-base font-semibold text-ink">{c.name}</h4>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${statusStyle(
                        c.status,
                      )}`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-royal">{c.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
