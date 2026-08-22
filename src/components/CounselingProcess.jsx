import { Headphones, ClipboardCheck, Compass, TrendingUp } from 'lucide-react'
import { siteConfig } from '../data/site'

export function CounselingProcess() {
  const { counselingProcess } = siteConfig

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'headphones':
        return <Headphones className="w-5 h-5 text-white" />
      case 'clipboard-check':
        return <ClipboardCheck className="w-5 h-5 text-white" />
      case 'target':
        return <Compass className="w-5 h-5 text-white" />
      case 'trending-up':
        return <TrendingUp className="w-5 h-5 text-white" />
      default:
        return <Headphones className="w-5 h-5 text-white" />
    }
  }

  return (
    <section id="process" className="relative overflow-hidden bg-[#0e1738] py-20 lg:py-28 text-white">
      {/* Background Image with dark dramatic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={counselingProcess.bgImage}
          alt="Counseling session background"
          className="h-full w-full object-cover object-center opacity-25 mix-blend-luminosity filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1738]/90 via-[#0e1738]/85 to-[#0e1738]/95" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20" data-aos="fade-up" data-aos-duration="700">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-white">
            {counselingProcess.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl mx-auto">
            {counselingProcess.subtitle}
          </p>
        </div>

        {/* 4 Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {counselingProcess.steps.map((step, idx) => (
            <div
              key={step.name}
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 120}
              data-aos-duration="750"
              className="group flex flex-col items-center text-center px-4"
            >
              {/* Circular Step Icon */}
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm mb-6 transition-all duration-300 group-hover:scale-110 group-hover:border-[#2f6bfd] group-hover:bg-[#2f6bfd]/30">
                {getStepIcon(step.icon)}
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                {step.name}
              </h3>

              {/* Step Description */}
              <p className="text-xs text-slate-300 leading-relaxed max-w-[220px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CounselingProcess
