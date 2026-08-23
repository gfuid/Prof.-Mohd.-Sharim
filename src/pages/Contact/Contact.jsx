import { Phone, Mail, MapPin, Globe, Sparkles } from 'lucide-react'
import { siteConfig } from '../../data/site'

export function Contact() {
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
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Phone / Calling</h4>
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

            {/* FlowConnect Enquiry Form Widget */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100">
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#2f6bfd] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Official Online Desk</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f1830]">
                    Admission &amp; Placement Enquiry Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your details below to schedule your personalized profile assessment with Prof. Mohd. Sharim.
                  </p>
                </div>

                <div className="w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 min-h-[600px]">
                  <iframe
                    src="https://login.flowconnect.ai/widget/form/6a8b2c472ee32"
                    style={{ width: '100%', height: '620px', border: 'none', borderRadius: '12px' }}
                    id="inline-6a8b2c472ee32"
                    data-form-name="Enquiry Form"
                    data-layout-iframe-id="inline-6a8b2c472ee32"
                    data-form-id="6a8b2c472ee32"
                    data-height="600"
                    title="Enquiry Form"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
