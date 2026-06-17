import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import Pillars from '@/components/home/Pillars'
import Membership from '@/components/home/Membership'
import CTASection from '@/components/home/CTASection'
import Footer from '@/components/home/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Pillars />
        <Membership />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
