import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react'
import { siteConfig } from '../data/site'

export function CtaBanner({ onOpenBooking }) {
  const { ctaBanner } = siteConfig

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-aos="zoom-in"
          data-aos-duration="850"
          className="relative overflow-hidden rounded-3xl bg-[#2f6bfd] shadow-2xl shadow-[#2f6bfd]/30 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-16"
        >
          {/* Subtle background dot matrix decorative pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
            {/* Left Content */}
            <div className="text-center lg:text-left lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {ctaBanner.title}
              </h2>
              <p className="mt-3 text-base sm:text-lg text-blue-100/90 font-medium">
                {ctaBanner.subtitle}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#2f6bfd] shadow-lg shadow-black/10 transition-all duration-200 hover:bg-blue-50 hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                >
                  {ctaBanner.ctaText}
                </button>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0e1738] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#070d22] transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#2f6bfd]" />
                  Call: {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Right Coach Graphics */}
            <div className="hidden lg:flex lg:col-span-4 justify-end items-end relative -mb-16 -mr-6">
              <div className="w-56 h-72 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <img
                  src={ctaBanner.image}
                  alt="Prof. Mohd. Sharim"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
