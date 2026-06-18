import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import Pillars from '@/components/home/Pillars'
import Membership from '@/components/home/Membership'
import CTASection from '@/components/home/CTASection'
import Footer from '@/components/home/Footer'

export const metadata = {
  title: 'Farmers & Trustees Trust | Digital Services for Zambia’s Farmers',
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
        onFocus={(e) => (e.currentTarget.style.top = '0')}
        onBlur={(e) => (e.currentTarget.style.top = '-100%')}
      >
        Skip to main content
      </a>

      {/* Page wrapper with subtle background & animation */}
      <div
        style={{
          position: 'relative',
          background: 'radial-gradient(ellipse at 20% 50%, rgba(24,92,59,0.03) 0%, transparent 70%), radial-gradient(ellipse at 80% 20%, rgba(201,162,39,0.04) 0%, transparent 60%), #ffffff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />

        <main
          id="main-content"
          style={{
            flex: 1,
            animation: 'pageFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            opacity: 0,
            transform: 'translateY(12px)',
          }}
        >
          <Hero />
          <StatsBar />
          <Pillars />
          <Membership />
          <CTASection />
        </main>

        <Footer />
      </div>

      {/* Global animations & smooth scrolling */}
      <style jsx>{`
        @keyframes pageFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Optional: subtle stagger effect for direct child sections */
        main > * {
          animation: pageFadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        main > *:nth-child(1) { animation-delay: 0.05s; }
        main > *:nth-child(2) { animation-delay: 0.15s; }
        main > *:nth-child(3) { animation-delay: 0.25s; }
        main > *:nth-child(4) { animation-delay: 0.35s; }
        main > *:nth-child(5) { animation-delay: 0.45s; }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}