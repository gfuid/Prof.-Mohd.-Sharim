import { competencies } from '../data/site'
import { SectionHeading } from './SectionHeading'
import { Icon } from './Icon'

export function Expertise({ limit }) {
  const items = limit ? competencies.slice(0, limit) : competencies

  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Quality systems, end to end"
          subtitle="From WHO-GMP frameworks and audit readiness to validation governance and shop-floor cGMP training."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl bg-white p-7 shadow-xl shadow-navy/5 ring-1 ring-slate-100 transition-transform hover:-translate-y-1"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-royal-soft text-royal transition-colors group-hover:bg-royal group-hover:text-white">
                <Icon name={c.icon} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slatey">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
