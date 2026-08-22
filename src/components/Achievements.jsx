import { achievements } from '../data/site'
import { SectionHeading } from './SectionHeading'
import { Icon } from './Icon'

export function Achievements() {
  return (
    <section className="bg-navy-deep py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          light
          eyebrow="Key Achievements"
          title="Outcomes delivered"
          subtitle="Measurable compliance and quality wins across multiple manufacturing sites."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 transition-colors hover:bg-white/10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-royal text-white">
                <Icon name={a.icon} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-white">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
