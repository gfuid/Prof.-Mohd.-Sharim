import { Link } from 'react-router-dom'
import { ArrowRight, Download, ShieldCheck, CircleCheckBig } from 'lucide-react'
import { profile, domains } from '../data/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-royal/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8 lg:py-24">
        {/* Text */}
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-royal-soft px-4 py-1.5 text-xs font-semibold text-royal">
            <ShieldCheck className="h-4 w-4" />
            {profile.openTo}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-semibold text-royal sm:text-xl">{profile.title}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slatey">
            {profile.yearsExperience} years driving WHO-GMP compliance, QMS strengthening,
            regulatory audit clearance, and validation oversight across pharmaceutical
            manufacturing.
          </p>

          {/* Domains */}
          <div className="mt-7 flex flex-wrap gap-2">
            {domains.map((d) => (
              <span
                key={d}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-ink/70"
              >
                {d}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={profile.cvFile}
              download
              className="inline-flex items-center gap-2 rounded-full bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-royal/30 transition-colors hover:bg-royal-dark"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-royal hover:text-royal"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slatey">
            {['WHO audits cleared', 'COPPs secured', 'QMS overhaul delivered'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CircleCheckBig className="h-4 w-4 text-royal" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-royal/15 blur-2xl" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative aspect-4/5 w-full rounded-3xl object-cover shadow-2xl shadow-navy/25"
            />
            <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-slate-100">
              <p className="text-2xl font-extrabold text-royal">{profile.yearsExperience}</p>
              <p className="text-xs font-medium text-slatey">Years in Pharma QA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
