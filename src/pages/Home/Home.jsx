import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { HeroSection } from '../../components/HeroSection'
import { SponsorsBar } from '../../components/SponsorsBar'
import { AboutServicesSection } from '../../components/AboutServicesSection'
import { QuoteSection } from '../../components/QuoteSection'
import { ServicesGrid } from '../../components/ServicesGrid'
import { CounselingProcess } from '../../components/CounselingProcess'
import { WhyChooseUs } from '../../components/WhyChooseUs'
import { TestimonialsSection } from '../../components/TestimonialsSection'
import { StatsCounter } from '../../components/StatsCounter'
import { BlogSection } from '../../components/BlogSection'
import { CtaBanner } from '../../components/CtaBanner'
import { ArticleModal } from '../../components/ArticleModal'

export function Home() {
  const context = useOutletContext() || {}
  const openBooking = context.openBooking || (() => {})
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false)

  const handleReadArticle = (article) => {
    setSelectedArticle(article)
    setIsArticleModalOpen(true)
  }

  const handleSelectService = (service) => {
    openBooking(service.title)
  }

  const scrollToServices = () => {
    const el = document.getElementById('about-services')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      openBooking()
    }
  }

  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection
        onDiscoverClick={scrollToServices}
        onOpenBooking={() => openBooking('1-on-1 Life Coaching')}
      />

      {/* 2. As Seen On Sponsors Bar */}
      <SponsorsBar />

      {/* 3. About Life Coaching & Unstuck Section */}
      <AboutServicesSection
        onDiscoverClick={scrollToServices}
        onOpenBooking={() => openBooking('1-on-1 Life Coaching')}
      />

      {/* 4. Quote / Headline Transition */}
      <QuoteSection />

      {/* 5. Three Service Cards */}
      <ServicesGrid onSelectService={handleSelectService} />

      {/* 6. Counseling Process (Dark Photo Bg) */}
      <CounselingProcess />

      {/* 7. Why Choose Us (Checklist + 2x2 Grid) */}
      <WhyChooseUs onAboutClick={() => {}} />

      {/* 8. Success Stories (Testimonials) */}
      <TestimonialsSection />

      {/* 9. Key Numbers / Stats Counter Bar */}
      <StatsCounter />

      {/* 10. Latest Insights / Blog Section */}
      <BlogSection
        onReadArticle={handleReadArticle}
        onViewAllArticles={() => {
          const el = document.getElementById('blog')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      {/* 11. Bottom CTA Banner */}
      <CtaBanner onOpenBooking={() => openBooking('1-on-1 Life Coaching')} />

      {/* Blog Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={isArticleModalOpen}
        onClose={() => setIsArticleModalOpen(false)}
      />
    </>
  )
}

export default Home
