import { Languages, ExternalLink, MapPin, Cpu, Database, Settings } from 'lucide-react'
import { profile, technicalSkills, languages, domains } from '../data/site'

const skillIcons = { Cpu, Database, Settings }

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-2 lg:px-8">
        {/* Summary */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">
            Professional Summary
          </p>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Bridging regulatory expectations with operational execution
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slatey">{profile.summary}</p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-royal" />
              <span className="text-ink/70">{profile.location}</span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Languages className="mt-0.5 h-4 w-4 flex-none text-royal" />
              <span className="text-ink/70">{languages.join(' · ')}</span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <ExternalLink className="mt-0.5 h-4 w-4 flex-none text-royal" />
              <span className="flex flex-wrap gap-x-3">
                {profile.websites.map((w) => (
                  <a
                    key={w.href}
                    href={w.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-royal hover:underline"
                  >
                    {w.label}
                  </a>
                ))}
              </span>
            </div>
          </div>
        </div>

        {/* Side panels */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-surface p-7">
            <h3 className="text-base font-semibold text-ink">Manufacturing Environments</h3>
            <p className="mt-1 text-sm text-slatey">
              Hands-on quality leadership across dosage forms.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {domains.map((d) => (
                <div
                  key={d}
                  className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-ink/80 ring-1 ring-slate-100"
                >
                  {d}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-surface p-7">
            <h3 className="text-base font-semibold text-ink">Technical Skills</h3>
            <ul className="mt-5 space-y-3">
              {technicalSkills.map((s) => {
                const Ico = skillIcons[s.icon] || Cpu
                return (
                  <li
                    key={s.label}
                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3 ring-1 ring-slate-100"
                  >
                    <span className="flex items-center gap-3 text-sm font-medium text-ink/80">
                      <Ico className="h-4 w-4 text-royal" />
                      {s.label}
                    </span>
                    <span className="rounded-full bg-royal-soft px-2.5 py-0.5 text-[11px] font-semibold text-royal">
                      {s.level}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
