import { Users, BookOpen, ShieldCheck, Award } from 'lucide-react'
import { siteConfig } from '../data/site'

export function StatsCounter() {
  const { stats } = siteConfig

  const getStatIcon = (iconName) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-8 h-8 text-white/90" />
      case 'book-open':
        return <BookOpen className="w-8 h-8 text-white/90" />
      case 'shield-check':
        return <ShieldCheck className="w-8 h-8 text-white/90" />
      case 'award':
        return <Award className="w-8 h-8 text-white/90" />
      default:
        return <Users className="w-8 h-8 text-white/90" />
    }
  }

  return (
    <section className="bg-[#0e1738] py-14 border-y border-[#18234d] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              data-aos="zoom-in"
              data-aos-delay={(idx + 1) * 120}
              data-aos-duration="750"
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left justify-center"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                {getStatIcon(stat.icon)}
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsCounter
