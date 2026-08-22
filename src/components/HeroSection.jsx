import { ArrowRight, Sparkles, GraduationCap, Briefcase, Award, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '../data/site'

export function HeroSection({ onDiscoverClick, onOpenBooking }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8faff] via-[#f1f6ff]/40 to-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle background ambient mesh */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0e1738 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-200/35 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Content Column */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 text-center lg:text-left" data-aos="fade-right" data-aos-duration="850">
            {/* Top Prominent Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-200/80 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#2f6bfd] mb-6 shadow-sm shadow-blue-500/5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Western UP &amp; Uttarakhand Premier Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0b132b] leading-[1.12] font-display">
              Start your <br />
              <span className="text-[#0b132b]">admission &amp; placement</span> <br />
              journey{' '}
              <span className="relative inline-block text-[#2f6bfd]">
                Today!
                {/* Hand-drawn style decorative underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#2f6bfd]"
                  viewBox="0 0 160 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8.5C35 2.5 110 -1 157 6.5C125 4 45 4.5 10 10.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm sm:text-base text-slate-500 leading-relaxed mx-auto lg:mx-0 font-normal">
              {siteConfig.hero.description}
            </p>

            {/* Two Action CTAs for Admissions and Placements */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                type="button"
                onClick={() => onOpenBooking('College Admission Counselling')}
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2f6bfd] to-[#1b53e8] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 transition-all duration-200 hover:shadow-xl hover:shadow-[#2f6bfd]/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                Admission Guidance
              </button>

              <button
                type="button"
                onClick={() => onOpenBooking('Placements & Job Support')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b132b] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-[#151f47] hover:-translate-y-0.5 cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-[#2f6bfd]" />
                Placement Support
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2f6bfd]" />
                <span className="font-bold text-[#0b132b]">JEECUP • CUET • NEET</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2f6bfd]" />
                <span className="font-bold text-[#0b132b]">D.Pharm • B.Pharm • B.Tech</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#2f6bfd]" />
                <span className="font-bold text-[#2f6bfd]">17+ Yrs Leadership</span>
              </div>
            </div>
          </div>

          {/* Right Coach Column */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end relative" data-aos="fade-left" data-aos-duration="950">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative radial glow behind portrait */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#2f6bfd]/20 to-blue-200/40 blur-xl opacity-70" />

              <div className="relative mx-auto flex items-center justify-center">
                {/* Coach portrait image with clean drop shadow */}
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl shadow-slate-400/30 border-2 border-white/80 bg-white">
                  <img
                    src={siteConfig.hero.image}
                    alt="Prof. Mohd. Sharim - Transformation Coach & Counselor"
                    className="w-full h-auto object-cover select-none transform hover:scale-[1.015] transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                {/* Floating Credential Badge */}
                <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 z-20 w-[90%] sm:w-auto rounded-2xl bg-white/95 backdrop-blur-md px-5 py-3 shadow-xl border border-slate-100 flex items-center gap-3 animate-soft-float">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#eef4ff] text-[#2f6bfd] flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0b132b]">Prof. Mohd. Sharim</div>
                    <div className="text-[10px] text-slate-500 font-medium">Head QA • Career Strategist • 2,000+ Placed</div>
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

export default HeroSection
