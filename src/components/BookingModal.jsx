import { useState, useEffect } from 'react'
import { X, Calendar, Clock, CheckCircle, Sparkles, User, Mail, Phone, MessageSquare, GraduationCap } from 'lucide-react'
import { siteConfig } from '../data/site'

export function BookingModal({ isOpen, onClose, initialService, onBookSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'College Admission Counselling',
    date: '',
    timeSlot: '10:00 AM - 11:00 AM',
    goals: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }))
    }
  }, [initialService])

  // Prevent background scroll when modal is open
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

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      if (onBookSuccess) {
        onBookSuccess(formData)
      }
    }, 600)
  }

  const handleReset = () => {
    setSubmitted(false)
    onClose()
  }

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
        className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto overscroll-contain"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0f1830]">
              Inquiry Booked!
            </h3>
            <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-800">{formData.name || 'there'}</span>! Your session for{' '}
              <span className="font-semibold text-[#2f6bfd]">{formData.service}</span> is registered. Prof. Mohd. Sharim &amp; counselling team will contact you at{' '}
              <span className="font-semibold text-slate-800">{formData.phone || formData.email}</span>.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={handleReset}
                className="w-full rounded-xl bg-[#2f6bfd] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#1e55e3] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-8">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#2f6bfd]">
                <Sparkles className="w-3.5 h-3.5" /> Direct Counselling
              </span>
              <h3 className="mt-1 text-2xl font-extrabold text-[#0f1830]">
                Schedule Free Consultation
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Connect with Prof. Mohd. Sharim (17+ Yrs Exp) to map out your admission &amp; placement roadmap.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="Candidate / Student Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-800 focus:border-[#2f6bfd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f6bfd]/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-800 focus:border-[#2f6bfd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f6bfd]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-800 focus:border-[#2f6bfd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f6bfd]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Program / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 focus:border-[#2f6bfd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f6bfd]/20 transition-all"
                >
                  <option value="College Admission Counselling">College Admission Counselling</option>
                  <option value="Placements & Job Support">Placements &amp; Job Support</option>
                  <option value="Form Filling & Choice Locking">Form Filling &amp; Choice Locking</option>
                  <option value="CUET / JEECUP / NEET Support">CUET / JEECUP / NEET Support</option>
                  <option value="CV & LinkedIn Makeover">CV &amp; LinkedIn Makeover</option>
                  <option value="Mock Interviews & Grooming">Mock Interviews &amp; Grooming</option>
                  <option value="Pharma QA/QC & Sales Training">Pharma QA/QC &amp; Sales Training</option>
                  <option value="Soft Skills & English Fluency">Soft Skills &amp; English Fluency</option>
                  <option value="Computer, Excel & Documentation">Computer, Excel &amp; Documentation</option>
                  <option value="Entrance Crash Courses">Entrance Crash Courses</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-800 focus:border-[#2f6bfd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f6bfd]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-800 focus:border-[#2f6bfd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f6bfd]/20 transition-all"
                    >
                      <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                      <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                      <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
                      <option value="07:00 PM - 08:00 PM">07:00 PM - 08:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Target Course / Exam / Placement Goal
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention your 12th/Graduation percentage, target course (e.g. B.Pharm, D.Pharm, B.Tech), or job role..."
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 focus:border-[#2f6bfd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2f6bfd]/20 transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-[#2f6bfd] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 hover:bg-[#1e55e3] hover:shadow-xl transition-all cursor-pointer"
                >
                  {loading ? 'Confirming...' : 'CONFIRM FREE CONSULTATION'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingModal
