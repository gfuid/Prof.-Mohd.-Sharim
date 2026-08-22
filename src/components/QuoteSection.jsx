import { siteConfig } from '../data/site'

export function QuoteSection() {
  const { quote } = siteConfig

  return (
    <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 text-center">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" data-aos="zoom-in" data-aos-duration="800">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-[#0f1830] max-w-2xl mx-auto leading-tight">
          {quote.title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
          {quote.subtitle}
        </p>
      </div>
    </section>
  )
}

export default QuoteSection
