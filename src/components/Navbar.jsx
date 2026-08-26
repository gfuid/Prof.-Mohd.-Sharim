import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight, Phone, Mail, MapPin, GraduationCap, Sparkles } from 'lucide-react'
import { siteConfig } from '../data/site'
import logo from "../assets/logo.png"


export function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Contact Strip */}
      <div className="bg-[#070c1e] text-slate-300 text-[11px] py-2 border-b border-[#141e3d] hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2f6bfd]" />
              <span className="font-semibold">{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#2f6bfd]" />
              <span>{siteConfig.email}</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#2f6bfd]" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-slate-400">Western UP &amp; Uttarakhand Hub</span>
            <span className="text-slate-600">•</span>
            <span className="font-bold text-[#2f6bfd]">17+ Yrs QA &amp; Academic Leadership</span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div
        className={`transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-lg shadow-slate-900/5'
          : 'bg-white border-b border-slate-100 py-3.5'
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-slate-100 shadow-sm p-1 group-hover:scale-105 group-hover:shadow-md transition-all duration-300 overflow-hidden">
                <img src={logo} alt="Nexdisha Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0b132b] group-hover:text-[#2f6bfd] transition-colors leading-tight font-display">
                  Nexdisha careers
                </span>
                <span className="text-[9.5px] font-extrabold text-[#2f6bfd] tracking-wider uppercase">
                  Admissions &amp; Placements Hub
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {siteConfig.navLinks.map((item) => {
                const isHome = item.to === '/'
                const isActive = isHome
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.to)

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative group py-2"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        type="button"
                        className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${item.label === 'ADMISSIONS' || item.label === 'PLACEMENTS'
                          ? 'text-[#2f6bfd] font-extrabold'
                          : isActive
                            ? 'text-[#2f6bfd]'
                            : 'text-slate-700 hover:text-[#2f6bfd]'
                          }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180 text-[#2f6bfd]' : 'text-slate-400'
                            }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute left-0 top-full mt-1.5 w-72 rounded-2xl bg-white/95 backdrop-blur-md p-2.5 shadow-2xl shadow-slate-900/10 border border-slate-100 transition-all duration-200 origin-top z-50 ${activeDropdown === item.label
                          ? 'opacity-100 scale-100 pointer-events-auto visible translate-y-0'
                          : 'opacity-0 scale-95 pointer-events-none invisible -translate-y-1'
                          }`}
                      >
                        <div className="px-3 py-1.5 mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                          {item.label} Services
                        </div>
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.to}
                            className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-[#eef4ff] hover:text-[#2f6bfd] transition-all group/item"
                          >
                            <span>{subItem.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#2f6bfd] opacity-0 group-hover/item:opacity-100 transform -translate-x-1 group-hover/item:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${isActive ? 'text-[#2f6bfd]' : 'text-slate-700 hover:text-[#2f6bfd]'
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Header CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking('1-on-1 Admission & Placement Counselling')}
                className="btn-shimmer inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#2f6bfd] to-[#1b53e8] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#2f6bfd]/25 transition-all duration-200 hover:shadow-lg hover:shadow-[#2f6bfd]/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                GET FREE COUNSELLING
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => onOpenBooking('1-on-1 Admission & Placement Counselling')}
                className="rounded-lg bg-[#2f6bfd] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm"
              >
                APPLY NOW
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#2f6bfd] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto" data-lenis-prevent="true">
          <div className="mb-4 pb-3 border-b border-slate-100 text-xs space-y-1.5 text-slate-500">
            <div className="flex items-center gap-2 text-slate-800 font-bold">
              <Phone className="w-3.5 h-3.5 text-[#2f6bfd]" />
              <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#2f6bfd]" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          <nav className="flex flex-col space-y-2.5">
            {siteConfig.navLinks.map((item) => (
              <div key={item.label} className="border-b border-slate-50 pb-2">
                <Link
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-bold text-slate-800 hover:text-[#2f6bfd]"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 mt-1 space-y-1">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-slate-500 hover:text-[#2f6bfd]"
                      >
                        • {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenBooking('1-on-1 Admission & Placement Counselling')
                }}
                className="w-full rounded-xl bg-gradient-to-r from-[#2f6bfd] to-[#1b53e8] py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-lg"
              >
                BOOK FREE COUNSELLING SESSION
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
