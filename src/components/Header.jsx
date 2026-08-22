import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Download } from 'lucide-react'
import { profile, nav } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-royal' : 'text-ink/70 hover:text-royal'
    }`

  return (
    <header className="sticky top-0 z-50">
      {/* Contact strip */}
      <div className="hidden bg-navy-deep text-white/70 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs lg:px-8">
          <div className="flex items-center gap-6">
            <a href={`tel:${profile.phoneRaw}`} className="flex items-center gap-2 hover:text-white">
              <Phone className="h-3.5 w-3.5 text-royal" />
              {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-3.5 w-3.5 text-royal" />
              {profile.email}
            </a>
          </div>
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-royal" />
            {profile.location}
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal text-sm font-bold text-white">
              {profile.initials}
            </span>
            <span className="leading-tight">
              <span className="block text-base font-bold tracking-tight text-ink">
                {profile.name}
              </span>
              <span className="hidden text-[11px] font-medium uppercase tracking-wider text-slatey sm:block">
                QA &amp; QMS Leader
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.cvFile}
              download
              className="hidden items-center gap-2 rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-royal/25 transition-colors hover:bg-royal-dark sm:inline-flex"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="text-ink lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-slate-100 bg-white lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-slate-50 py-3 text-sm font-medium ${
                      isActive ? 'text-royal' : 'text-ink/80'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={profile.cvFile}
                download
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
