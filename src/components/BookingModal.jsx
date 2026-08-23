import { useEffect } from 'react'
import { X, Sparkles } from 'lucide-react'

export function BookingModal({ isOpen, onClose }) {
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

  return (
    <div
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#090e24]/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <div
        data-lenis-prevent="true"
        className="relative w-full max-w-xl rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto overscroll-contain"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors z-20 cursor-pointer shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-4 pr-10">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#2f6bfd] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Counselling &amp; Admission Desk</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f1830]">
            Enquiry &amp; Application Form
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Fill your details below to schedule your profile assessment with Prof. Mohd. Sharim.
          </p>
        </div>

        {/* FlowConnect Iframe Widget */}
        <div className="w-full rounded-2xl overflow-hidden bg-slate-50 min-h-[580px] border border-slate-100">
          <iframe
            src="https://login.flowconnect.ai/widget/form/6a8b2c472ee32"
            style={{ width: '100%', height: '600px', border: 'none', borderRadius: '12px' }}
            id="inline-6a8b2c472ee32-popup"
            data-form-name="Enquiry Form"
            data-layout-iframe-id="inline-6a8b2c472ee32-popup"
            data-form-id="6a8b2c472ee32"
            data-height="600"
            title="Enquiry Form Popup"
          />
        </div>
      </div>
    </div>
  )
}

export default BookingModal
