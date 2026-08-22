import { useEffect } from 'react'
import { CheckCircle2, X } from 'lucide-react'

export function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl bg-[#0e1738] px-5 py-3.5 text-white shadow-2xl border border-slate-700 animate-slideUp">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
      <span className="text-xs font-semibold">{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-white"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

export default Toast
