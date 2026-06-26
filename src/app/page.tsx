import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import Pillars from '@/components/home/Pillars'
import Membership from '@/components/home/Membership'
import CTASection from '@/components/home/CTASection'
import Footer from '@/components/home/Footer'

export const metadata = {
  title: 'Farmers & Trustees Trust | Digital Services for Zambias Farmers',
  description: 'FTT helps rural businesses, farmers, and families connect, secure wealth, plan estates, and grow together with trusted digital tools across Zambia.',
  keywords: 'farming Zambia, agricultural trust, estate planning, rural business, FTT',
}

export default function HomePage() {
  return (
    <>
      {/* Skip to content - accessibility best practice */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: '-100%',
          left: 0,
          padding: '1rem 1.5rem',
          background: 'var(--green-700)',
          color: '#fff',
          zIndex: 9999,
          fontWeight: 700,
          borderRadius: '0 0 8px 0',
          textDecoration: 'none',
          transition: 'top 0.2s ease',
        }}
      >
        Skip to main content
      </a>

      {/* Page wrapper with fresh blended background */}
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          background:
            'radial-gradient(1200px 600px at 15% 0%, rgba(31,92,59,0.16) 0%, rgba(31,92,59,0) 55%), radial-gradient(900px 520px at 85% 20%, rgba(201,162,39,0.18) 0%, rgba(201,162,39,0) 55%), linear-gradient(180deg, #F7FAF8 0%, #FFFFFF 50%, #FBFCFB 100%)',
        }}
      >
        {/* Decorative grid overlay */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage:
              'linear-gradient(to right, rgba(31,92,59,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,92,59,0.06) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage:
              'radial-gradient(800px 380px at 50% 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 72%)',
            opacity: 0.55,
          }}
        />

        <Navbar />

        <main
          id="main-content"
          style={{
            flex: 1,
            animation: 'pageFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            opacity: 0,
            transform: 'translateY(12px)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: -220,
              background:
                'radial-gradient(circle at 30% 10%, rgba(201,162,39,0.18) 0%, rgba(201,162,39,0) 55%), radial-gradient(circle at 80% 20%, rgba(31,92,59,0.22) 0%, rgba(31,92,59,0) 50%)',
              filter: 'blur(26px)',
              opacity: 0.65,
              pointerEvents: 'none',
              zIndex: -1,
            }}
          />

          <Hero />

          {/* Content sections */}
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              padding: '0 1.5rem 0',
            }}
          >
            <StatsBar />
            <div style={{ height: 28 }} />
            <Pillars />
            <div style={{ height: 28 }} />
            <Membership />
          </div>

          <div style={{ marginTop: 28 }}>
            <CTASection />
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
