import { useEffect } from 'react'
import { X, Clock } from 'lucide-react'

export function ArticleModal({ article, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen || !article) return null

  return (
    <div
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <div
        data-lenis-prevent="true"
        className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto overscroll-contain"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors z-20 cursor-pointer"
          aria-label="Close article modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Category & Read Time */}
        <div className="flex items-center gap-3 mb-3 pr-8">
          <span className="inline-block rounded-md bg-[#eef4ff] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2f6bfd]">
            {article.category}
          </span>
          <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1830] leading-tight mb-6">
          {article.title}
        </h2>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden mb-6 aspect-[16/9] shadow-md">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-600 space-y-4">
          <p className="font-semibold text-slate-800 text-base">
            {article.excerpt}
          </p>
          <div className="whitespace-pre-line text-slate-600">
            {article.content}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Prof. Mohd. Sharim Career &amp; Admission Insights
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-100 px-5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticleModal
