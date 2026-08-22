import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Globe, MessageSquare } from 'lucide-react'
import { siteConfig } from '../../data/site'

export function Contact() {
  const context = useOutletContext() || {}
  const showToast = context.showToastMessage || (() => {})
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'College Admission Counselling',
    courseInterest: 'B.Pharm / D.Pharm',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      showToast('Thank you! Prof. Sharim & team will contact you within 24 hours.')
    }, 600)
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#f6f9fc] py-16 lg:py-20 border-b border-slate-100 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
            Direct Contact &amp; Counselling
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#0f1830]">
            Get In Touch With Prof. Mohd. Sharim
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-500">
            For urgent admission counselling, cutoff guidance, CV reviews, and placement drive inquiries — reach out directly via phone, WhatsApp, or email.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Info */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0f1830] mb-4">
                  Official Office &amp; Contact
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  Serving students and job seekers across Western UP (Saharanpur, Meerut, Muzaffarnagar), Uttarakhand (Haridwar, Roorkee, Dehradun), and national portals.
                </p>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8faff] border border-slate-100">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#eef4ff] text-[#2f6bfd] flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Phone / WhatsApp</h4>
                      <a href={`tel:${siteConfig.phone}`} className="text-sm font-bold text-[#0f1830] hover:text-[#2f6bfd]">
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8faff] border border-slate-100">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#eef4ff] text-[#2f6bfd] flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</h4>
                      <a href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-[#0f1830] hover:text-[#2f6bfd]">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* Studio Address */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8faff] border border-slate-100">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#eef4ff] text-[#2f6bfd] flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Office Location</h4>
                      <p className="text-sm font-bold text-[#0f1830]">
                        {siteConfig.address}
                      </p>
                    </div>
                  </div>

                  {/* Websites */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8faff] border border-slate-100">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#eef4ff] text-[#2f6bfd] flex-shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Web Portals</h4>
                      <div className="text-xs font-bold text-[#2f6bfd] space-x-3">
                        <a href="https://nextdisha.com" target="_blank" rel="noreferrer" className="hover:underline">
                          nextdisha.com
                        </a>
                        <span>•</span>
                        <a href="https://sharim.webnode.in" target="_blank" rel="noreferrer" className="hover:underline text-slate-700">
                          sharim.webnode.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Admission & Placement Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-100 shadow-xl shadow-slate-100">
                {sent ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f1830]">Inquiry Submitted!</h3>
                    <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
                      Thank you! Prof. Mohd. Sharim's counselling desk has received your request and will reach out shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-6 inline-flex rounded-xl bg-[#2f6bfd] px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-[#1e55e3]"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xl font-bold text-[#0f1830] mb-2">
                      Admission &amp; Placement Application Form
                    </h3>
                    <p className="text-xs text-slate-500 mb-6">
                      Fill in your details below to schedule your personalized profile assessment.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Student / Candidate Name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 focus:border-[#2f6bfd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f6bfd]/20 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 focus:border-[#2f6bfd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f6bfd]/20 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="candidate@gmail.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 focus:border-[#2f6bfd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f6bfd]/20 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Service Type
                          </label>
                          <select
                            value={form.category}
                            onChange={(e) => setForm({ ...form, category: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 focus:border-[#2f6bfd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f6bfd]/20 transition-all"
                          >
                            <option value="College Admission Counselling">College Admission Counselling</option>
                            <option value="Placement & Job Search">Placement &amp; Job Search</option>
                            <option value="Skill Training Course">Skill Training Course</option>
                            <option value="College Retainer / Placement Cell">College Retainer / Placement Cell</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Target Course / Exam / Role
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. CUET B.Pharm, JEECUP D.Pharm, B.Tech, Pharma QA Job"
                          value={form.courseInterest}
                          onChange={(e) => setForm({ ...form, courseInterest: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 focus:border-[#2f6bfd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f6bfd]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Brief Query / Current Qualification
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Mention your 12th / graduation percentage, budget, or preferred location..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 focus:border-[#2f6bfd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f6bfd]/20 transition-all"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f6bfd] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 hover:bg-[#1e55e3] transition-all cursor-pointer w-full sm:w-auto"
                        >
                          <Send className="w-4 h-4" />
                          {loading ? 'Submitting...' : 'Apply For Counselling'}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
