import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// Compact hero for inner pages, with breadcrumb.
export function PageHero({ title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 text-center lg:px-8 lg:py-20">
        <nav className="flex items-center justify-center gap-1 text-sm text-white/60">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-royal">{crumb || title}</span>
        </nav>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">{subtitle}</p>
        )}
      </div>
    </section>
  )
}

export default PageHero
