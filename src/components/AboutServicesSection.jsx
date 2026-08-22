import { Users, Award, ArrowRight } from 'lucide-react'
import { siteConfig } from '../data/site'

export function AboutServicesSection({ onDiscoverClick, onOpenBooking }) {
  const { aboutServices } = siteConfig

  return (
    <section id="about-services" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column Text */}
          <div className="lg:col-span-6" data-aos="fade-right" data-aos-duration="800">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2f6bfd] mb-3">
              {aboutServices.tag}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f1830] leading-[1.2]">
              {aboutServices.title}
            </h2>

            <p className="mt-6 text-base text-slate-500 leading-relaxed">
              {aboutServices.description}
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={onDiscoverClick || onOpenBooking}
                className="inline-flex items-center justify-center rounded-md bg-[#2f6bfd] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 transition-all duration-200 hover:bg-[#1e55e3] hover:shadow-xl hover:shadow-[#2f6bfd]/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {aboutServices.ctaText}
              </button>
            </div>
          </div>

          {/* Right Column Image with Floating Info Card */}
          <div className="lg:col-span-6 relative" data-aos="fade-left" data-aos-duration="900">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Monochrome Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-slate-200 border border-slate-100">
                <img
                  src={aboutServices.image}
                  alt="Life coaching session"
                  className="w-full h-auto aspect-[4/3] object-cover filter grayscale contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Overlay Card */}
              <div 
                className="relative sm:absolute -bottom-8 sm:left-4 md:-left-6 max-w-sm sm:max-w-md rounded-2xl bg-white p-6 shadow-2xl shadow-slate-900/10 border border-slate-100 mt-6 sm:mt-0 transition-transform duration-300 hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#eef4ff] text-[#2f6bfd]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0f1830]">
                      {aboutServices.badge.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                      {aboutServices.badge.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutServicesSection
