import { useState } from 'react'
import { Phone, Mail, MapPin, ExternalLink, Send, CircleCheckBig, Download } from 'lucide-react'
import { profile, enquiryTopics } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's discuss quality leadership"
          subtitle="Open to QA/QMS leadership roles, audit-readiness engagements, validation projects, and cGMP training."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-3xl bg-navy-deep p-8 text-white">
              <h3 className="text-lg font-semibold">{profile.name}</h3>
              <p className="mt-1 text-sm text-white/60">{profile.title}</p>

              <ul className="mt-7 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-none text-royal" />
                  <a href={`tel:${profile.phoneRaw}`} className="text-white/70 hover:text-white">
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-none text-royal" />
                  <a href={`mailto:${profile.email}`} className="text-white/70 hover:text-white">
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-none text-royal" />
                  <span className="text-white/70">{profile.location}</span>
                </li>
                <li className="flex items-start gap-3">
                  <ExternalLink className="mt-0.5 h-5 w-5 flex-none text-royal" />
                  <span className="flex flex-col gap-1">
                    {profile.websites.map((w) => (
                      <a
                        key={w.href}
                        href={w.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/70 hover:text-white"
                      >
                        {w.label}
                      </a>
                    ))}
                  </span>
                </li>
              </ul>

              <a
                href={profile.cvFile}
                download
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-royal-dark"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>

              <p className="mt-6 rounded-2xl bg-white/5 p-4 text-xs text-white/60 ring-1 ring-white/10">
                References available upon request.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-surface p-8">
              <h3 className="text-lg font-semibold text-ink">Send a message</h3>
              <p className="mt-1 text-sm text-slatey">
                Share a few details and I'll get back to you.
              </p>

              {sent ? (
                <div className="flex flex-col items-center py-14 text-center">
                  <CircleCheckBig className="h-12 w-12 text-emerald-500" />
                  <h4 className="mt-4 text-base font-semibold text-ink">Message sent!</h4>
                  <p className="mt-1 text-sm text-slatey">Thank you — I'll respond shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                  className="mt-6 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/20"
                    />
                    <input
                      required
                      type="text"
                      placeholder="Company / Organization"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/20"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/20"
                    />
                    <input
                      type="tel"
                      placeholder="Phone (optional)"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/20"
                    />
                  </div>
                  <select
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-royal focus:ring-2 focus:ring-royal/20"
                  >
                    <option value="" disabled>
                      Reason for contact
                    </option>
                    {enquiryTopics.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                  <textarea
                    rows={5}
                    placeholder="Your message"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/20"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-royal/25 transition-colors hover:bg-royal-dark"
                  >
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
