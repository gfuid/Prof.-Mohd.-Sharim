import { Calendar, Building2, ShieldCheck, GraduationCap } from 'lucide-react'
import { stats } from '../data/site'

const icons = [Calendar, Building2, ShieldCheck, GraduationCap]

export function Stats() {
  return (
    <section className="bg-navy-deep py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => {
          const Ico = icons[i % icons.length]
          return (
            <div key={s.label} className="flex flex-col items-center text-center">
              <Ico className="h-7 w-7 text-royal" />
              <p className="mt-3 text-2xl font-bold text-white sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">{s.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Stats
