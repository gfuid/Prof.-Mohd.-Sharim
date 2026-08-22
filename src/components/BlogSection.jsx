import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { siteConfig } from '../data/site'

export function BlogSection({ onReadArticle, onViewAllArticles }) {
  const { blog } = siteConfig

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#f8faff] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="700">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2f6bfd] mb-3">
            {blog.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-[#0f1830]">
            {blog.title}
          </h2>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {blog.articles.map((article, idx) => (
            <article
              key={article.id}
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 150}
              data-aos-duration="800"
              className="group flex flex-col rounded-3xl bg-white overflow-hidden border border-slate-100 shadow-md shadow-slate-100/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
              onClick={() => onReadArticle && onReadArticle(article)}
            >
              {/* Article Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Article Content */}
              <div className="flex flex-col flex-grow p-6 sm:p-7">
                <span className="inline-block text-[11px] font-bold tracking-wider text-[#2f6bfd] uppercase mb-2">
                  {article.category}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-[#0f1830] group-hover:text-[#2f6bfd] transition-colors leading-snug mb-4">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center text-xs font-bold text-[#2f6bfd] group-hover:text-[#1e55e3] transition-colors">
                    Read More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {article.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="mt-14 text-center" data-aos="fade-up" data-aos-delay="200">
          <button
            type="button"
            onClick={onViewAllArticles}
            className="inline-flex items-center justify-center rounded-md bg-[#2f6bfd] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 transition-all duration-200 hover:bg-[#1e55e3] hover:shadow-xl hover:shadow-[#2f6bfd]/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            {blog.ctaText}
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
