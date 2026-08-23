import { useState, useEffect } from 'react'
import { Outlet, useOutletContext, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import AOS from 'aos'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { BookingModal } from './BookingModal'
import { Toast } from './Toast'
import { WhatsAppHotline } from './WhatsAppHotline'
import { AIChatbot } from './AIChatbot'

gsap.registerPlugin(ScrollTrigger)

export function Layout() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('College Admission Counselling')
  const [toastMessage, setToastMessage] = useState('')
  const [showToast, setShowToast] = useState(false)
  const location = useLocation()

  // Initialize Lenis Smooth Scrolling and AOS with reverse support
  useEffect(() => {
    // 1. Initialize Lenis with refined inertia settings
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    })

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // 2. Initialize AOS with reversible animations
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: false, // Re-animates smoothly when scrolling both up and down
      mirror: true,
      offset: 40,
    })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  // Refresh AOS & ScrollTrigger on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const timer = setTimeout(() => {
      AOS.refresh()
      ScrollTrigger.refresh()
    }, 150)
    return () => clearTimeout(timer)
  }, [location.pathname])

  const handleOpenBooking = (serviceName) => {
    if (serviceName && typeof serviceName === 'string') {
      setSelectedService(serviceName)
    }
    setIsBookingOpen(true)
  }

  const handleBookingSuccess = (data) => {
    setToastMessage(`Inquiry submitted for ${data.name || 'you'}! Prof. Sharim will contact you soon.`)
    setShowToast(true)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-600">
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        <Outlet
          context={{
            openBooking: handleOpenBooking,
            showToastMessage: (msg) => {
              setToastMessage(msg)
              setShowToast(true)
            },
          }}
        />
      </main>

      <Footer />

      {/* WhatsApp Floating Hotline */}
      <WhatsAppHotline />

      {/* AI Career Counselor Chatbot & Fast Flow Form */}
      <AIChatbot />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
        onBookSuccess={handleBookingSuccess}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  )
}

export function useAppModal() {
  return useOutletContext()
}

export default Layout
