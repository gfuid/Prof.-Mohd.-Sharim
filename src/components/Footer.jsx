import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUp, GraduationCap } from 'lucide-react'
import { siteConfig } from '../data/site'
import logo from "../assets/logo.png"

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.67 1.67 0 0 0-1.67 1.67 1.67 1.67 0 0 0 1.67 1.67 1.67 1.67 0 0 0 1.67-1.67c0-.92-.75-1.67-1.67-1.67z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function Footer() {
  const { footer, phone, email, address, copyright } = siteConfig

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderSocialIcon = (name) => {
    switch (name) {
      case 'Facebook':
        return <FacebookIcon className="w-3.5 h-3.5" />
      case 'Twitter':
        return <TwitterIcon className="w-3.5 h-3.5" />
      case 'LinkedIn':
        return <LinkedinIcon className="w-3.5 h-3.5" />
      case 'Instagram':
        return <InstagramIcon className="w-3.5 h-3.5" />
      default:
        return <FacebookIcon className="w-3.5 h-3.5" />
    }
  }

  return (
    <footer className="bg-[#090e24] text-slate-400 text-xs border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4" data-aos="fade-up">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white p-1 shadow-md shadow-[#2f6bfd]/25 overflow-hidden">
                <img src={logo} alt="Nexdisha Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white uppercase leading-tight">
                  Nexdisha Careers
                </span>
                <span className="text-[10px] font-extrabold text-[#2f6bfd] tracking-wider uppercase">
                  Admissions &amp; Placements Hub
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6">
              {footer.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {footer.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-slate-300 hover:bg-[#2f6bfd] hover:text-white transition-all duration-200"
                  aria-label={soc.name}
                >
                  {renderSocialIcon(soc.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 sm:col-span-1" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    • {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-3 sm:col-span-1" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {footer.servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="lg:col-span-3" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Contact Desk
            </h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-center gap-3">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 text-[#2f6bfd] flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href={`tel:${phone}`} className="hover:text-white transition-colors font-semibold">
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 text-[#2f6bfd] flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 text-[#2f6bfd] flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed">{address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{copyright}</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-slate-400 transition-colors">
              Terms &amp; Conditions
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-slate-300 hover:bg-[#2f6bfd] hover:text-white transition-all ml-2 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
