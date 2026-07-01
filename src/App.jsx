import { useEffect } from 'react'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Differentials from './components/Differentials'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.section-reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default function App() { 
  useScrollReveal()

  return (
    <div className="min-h-screen bg-dark-950">
      <Hero />
      <Benefits />
      <Services />
      <Differentials />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
