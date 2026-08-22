import { useState } from 'react'
import { Quote } from 'lucide-react'
import { siteConfig } from '../data/site'

export function TestimonialsSection() {
  const { testimonials } = siteConfig
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="700">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2f6bfd] mb-3">
            {testimonials.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-[#0f1830]">
            {testimonials.title}
          </h2>
        </div>

        {/* Testimonials 3-Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {testimonials.items.map((item, idx) => {
            const isFeatured = item.featured
            const delay = (idx + 1) * 150

            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-duration="800"
                onClick={() => setActiveIndex(idx)}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 cursor-pointer ${
                  isFeatured
                    ? 'bg-[#2f6bfd] text-white shadow-xl shadow-[#2f6bfd]/25 md:-translate-y-2'
                    : 'bg-white text-slate-600 border border-slate-100 shadow-md shadow-slate-100/80 hover:-translate-y-1 hover:shadow-xl'
                }`}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <span
                    className={`inline-block font-serif text-5xl font-black leading-none ${
                      isFeatured ? 'text-white' : 'text-[#2f6bfd]'
                    }`}
                  >
                    “
                  </span>
                </div>

                {/* Quote Text */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-8 flex-grow ${
                    isFeatured ? 'text-white font-medium' : 'text-slate-500'
                  }`}
                >
                  {item.quote}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100/20">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-white/50 shadow-sm"
                    loading="lazy"
                  />
                  <div>
                    <h3
                      className={`text-sm font-bold leading-snug ${
                        isFeatured ? 'text-white' : 'text-[#0f1830]'
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p
                      className={`text-xs ${
                        isFeatured ? 'text-blue-100' : 'text-slate-400'
                      }`}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 3 Pagination Dots */}
        <div className="mt-12 flex justify-center items-center gap-2">
          {testimonials.items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-7 bg-[#2f6bfd]'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
