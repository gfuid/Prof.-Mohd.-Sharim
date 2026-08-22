import { CheckCircle2, UserCheck, TrendingUp, LayoutGrid, Headphones } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'

export function WhyChooseUs({ onAboutClick }) {
  const { whyChooseUs } = siteConfig

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'award':
        return <UserCheck className="w-6 h-6 text-[#2f6bfd]" />
      case 'line-chart':
        return <TrendingUp className="w-6 h-6 text-[#2f6bfd]" />
      case 'layout-grid':
        return <LayoutGrid className="w-6 h-6 text-[#2f6bfd]" />
      case 'headset':
        return <Headphones className="w-6 h-6 text-[#2f6bfd]" />
      default:
        return <UserCheck className="w-6 h-6 text-[#2f6bfd]" />
    }
  }

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#f8faff] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column Content */}
          <div className="lg:col-span-6" data-aos="fade-right" data-aos-duration="850">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2f6bfd] mb-3">
              {whyChooseUs.tag}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f1830] leading-[1.2]">
              {whyChooseUs.title}
            </h2>

            <p className="mt-6 text-base text-slate-500 leading-relaxed">
              {whyChooseUs.description}
            </p>

            {/* Checklist items */}
            <div className="mt-8 space-y-3.5">
              {whyChooseUs.bullets.map((bullet, idx) => (
                <div 
                  key={bullet} 
                  className="flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay={(idx + 1) * 100}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#2f6bfd] text-white">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-[#0f1830]">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Link
                to="/about"
                onClick={onAboutClick}
                className="inline-flex items-center justify-center rounded-md bg-[#2f6bfd] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 transition-all duration-200 hover:bg-[#1e55e3] hover:shadow-xl hover:shadow-[#2f6bfd]/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {whyChooseUs.ctaText}
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Feature Cards Grid */}
          <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="900">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.features.map((feature, idx) => (
                <div
                  key={feature.id}
                  data-aos="zoom-in"
                  data-aos-delay={(idx + 1) * 120}
                  className="rounded-2xl bg-white p-7 border border-slate-100 shadow-md shadow-slate-100/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#eef4ff] mb-5">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <h3 className="text-base font-bold text-[#0f1830] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
