import { GraduationCap, Briefcase, Video, ArrowRight, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '../data/site'

export function ServicesGrid({ onSelectService }) {
  const { services } = siteConfig

  const getIcon = (iconName, isFeatured) => {
    const iconClass = isFeatured ? 'w-7 h-7 text-white' : 'w-7 h-7 text-[#2f6bfd]'
    switch (iconName) {
      case 'graduation-cap':
        return <GraduationCap className={iconClass} />
      case 'briefcase':
        return <Briefcase className={iconClass} />
      case 'video':
        return <Video className={iconClass} />
      default:
        return <GraduationCap className={iconClass} />
    }
  }

  return (
    <section id="services-cards" className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {services.map((service, idx) => {
            const isFeatured = service.featured
            const delay = (idx + 1) * 150

            return (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-duration="800"
                className={`relative flex flex-col items-center text-center rounded-3xl p-8 sm:p-9 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#2f6bfd] text-white shadow-2xl shadow-[#2f6bfd]/30 md:-translate-y-2.5 border-2 border-blue-400/30'
                    : 'bg-white text-slate-600 border border-slate-100 shadow-xl shadow-slate-100/90 hover:-translate-y-1.5 hover:shadow-2xl'
                }`}
              >
                {/* Badge */}
                {service.badge && (
                  <span
                    className={`inline-block text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-5 ${
                      isFeatured
                        ? 'bg-white/20 text-white'
                        : 'bg-[#eef4ff] text-[#2f6bfd]'
                    }`}
                  >
                    {service.badge}
                  </span>
                )}

                {/* Icon Container */}
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-sm ${
                    isFeatured ? 'bg-white/20' : 'bg-[#eef4ff]'
                  }`}
                >
                  {getIcon(service.icon, isFeatured)}
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isFeatured ? 'text-white' : 'text-[#0f1830]'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 flex-grow ${
                    isFeatured ? 'text-blue-50/95 font-medium' : 'text-slate-500'
                  }`}
                >
                  {service.description}
                </p>

                {/* Package Pills */}
                {service.packages && (
                  <div
                    className={`w-full rounded-xl py-2 px-3 text-[11px] font-semibold mb-6 ${
                      isFeatured
                        ? 'bg-white/10 text-white/90 border border-white/20'
                        : 'bg-slate-50 text-slate-600 border border-slate-100'
                    }`}
                  >
                    {service.packages}
                  </div>
                )}

                {/* Button */}
                <button
                  type="button"
                  onClick={() => onSelectService && onSelectService(service)}
                  className={`w-full sm:w-auto min-w-[170px] rounded-xl px-7 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isFeatured
                      ? 'bg-[#0e1738] text-white hover:bg-[#070d22] shadow-lg'
                      : 'bg-[#2f6bfd] text-white hover:bg-[#1e55e3] shadow-md shadow-[#2f6bfd]/25'
                  }`}
                >
                  {service.buttonText}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
