import Link from 'next/link'
import Footer from '@/components/home/Footer'

export const metadata = {
  title: 'About | FTT',
  description: 'Learn more about Farmers & Trustees Trust and our mission to support farmers and communities in Zambia.',
}

export default function AboutPage() {
  return (
    <>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
          100% { transform: translateY(0px) scale(1); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.6; }
        }
        .hero-card {
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }
        .hero-card:hover {
          box-shadow: 0 30px 60px rgba(24, 92, 59, 0.15);
          transform: translateY(-2px);
        }
        .feature-card {
          transition: all 0.25s ease;
          cursor: default;
        }
        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 50px rgba(24, 92, 59, 0.12);
        }
        .btn-primary, .btn-gold {
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-primary:hover {
          background: var(--green-800) !important;
          transform: scale(1.02);
          box-shadow: 0 8px 20px rgba(24, 92, 59, 0.25);
        }
        .btn-gold:hover {
          background: var(--gold-600) !important;
          transform: scale(1.02);
          box-shadow: 0 8px 20px rgba(201, 162, 39, 0.35);
        }
        .deco-circle {
          animation: float 6s ease-in-out infinite;
        }
        .deco-circle-2 {
          animation: pulse-ring 4s ease-in-out infinite;
        }
        .divider {
          background: linear-gradient(to right, transparent, var(--green-200), var(--gold-300), var(--green-200), transparent);
          height: 2px;
          border: 0;
          margin: 2.5rem 0 3rem;
        }
      `}</style>

      <main style={{ padding: '4rem 1.5rem', maxWidth: 1000, margin: '0 auto' }}>
        {/* Hero Section */}
        <section
          className="hero-card"
          style={{
            position: 'relative',
            marginBottom: '3rem',
            padding: '2.8rem 2.8rem 3.2rem',
            borderRadius: 40,
            background: 'linear-gradient(145deg, rgba(24,92,59,0.07) 0%, rgba(255,255,255,0.98) 100%)',
            border: '1px solid rgba(31,92,59,0.10)',
            boxShadow: '0 10px 40px rgba(24,92,59,0.06)',
          }}
        >
          {/* Decorative shapes */}
          <div
            className="deco-circle"
            style={{
              position: 'absolute',
              top: 20,
              left: 28,
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'rgba(31,92,59,0.06)',
              border: '2px solid rgba(31,92,59,0.04)',
            }}
          />
          <div
            className="deco-circle-2"
            style={{
              position: 'absolute',
              bottom: 30,
              right: 40,
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'rgba(201,162,39,0.08)',
              border: '2px solid rgba(201,162,39,0.06)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 40,
              right: 100,
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.8)',
              boxShadow: '0 0 0 6px rgba(201,162,39,0.06)',
            }}
          />

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 18px 6px 14px',
              background: 'var(--green-50)',
              color: 'var(--green-700)',
              borderRadius: 9999,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.3px',
              marginBottom: 24,
              border: '1px solid rgba(31,92,59,0.06)',
            }}
          >
            <span style={{ fontSize: 16 }}>🌾</span> About Farmers & Trustees Trust
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5vw, 3.6rem)',
              lineHeight: 1.08,
              margin: '0 0 1.2rem 0',
              color: 'var(--green-900)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            Building trusted digital services for Zambia’s farmers and families
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              maxWidth: 760,
              margin: 0,
            }}
          >
            At Farmers & Trustees Trust, we help rural businesses, farmers, and family-owned enterprises connect with buyers, secure wealth, plan estates, and recruit talent. Our mission is to make trust, finance, and farming support accessible across Zambia with practical digital tools.
          </p>
        </section>

        {/* Divider */}
        <hr className="divider" />

        {/* Feature Cards */}
        <section
          style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          }}
        >
          <div
            className="feature-card"
            style={{
              padding: '2.2rem 2rem',
              borderRadius: 28,
              background: 'white',
              boxShadow: '0 15px 35px rgba(24,95,42,0.06)',
              border: '1px solid rgba(24,95,42,0.06)',
            }}
          >
            <div
              style={{
                fontSize: 32,
                marginBottom: 12,
                display: 'block',
              }}
            >
              🌱
            </div>
            <h2
              style={{
                margin: '0 0 0.6rem 0',
                fontSize: '1.4rem',
                color: 'var(--green-700)',
                fontWeight: 700,
              }}
            >
              Our purpose
            </h2>
            <p
              style={{
                margin: 0,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                fontSize: '1rem',
              }}
            >
              We bring transparent, mobile-friendly services to farmers and trustees so communities can grow, preserve assets, and plan for the future together.
            </p>
          </div>

          <div
            className="feature-card"
            style={{
              padding: '2.2rem 2rem',
              borderRadius: 28,
              background: 'white',
              boxShadow: '0 15px 35px rgba(201,162,39,0.10)',
              border: '1px solid rgba(201,162,39,0.15)',
            }}
          >
            <div
              style={{
                fontSize: 32,
                marginBottom: 12,
                display: 'block',
              }}
            >
              🌾
            </div>
            <h2
              style={{
                margin: '0 0 0.6rem 0',
                fontSize: '1.4rem',
                color: 'var(--gold-700)',
                fontWeight: 700,
              }}
            >
              What we do
            </h2>
            <p
              style={{
                margin: 0,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                fontSize: '1rem',
              }}
            >
              From membership and marketplace access to estate planning and talent matching, our platform supports every stage of farm and trust growth.
            </p>
          </div>

          <div
            className="feature-card"
            style={{
              padding: '2.2rem 2rem',
              borderRadius: 28,
              background: 'white',
              boxShadow: '0 15px 35px rgba(29,97,51,0.06)',
              border: '1px solid rgba(29,97,51,0.06)',
            }}
          >
            <div
              style={{
                fontSize: 32,
                marginBottom: 12,
                display: 'block',
              }}
            >
              🤝
            </div>
            <h2
              style={{
                margin: '0 0 0.6rem 0',
                fontSize: '1.4rem',
                color: 'var(--green-700)',
                fontWeight: 700,
              }}
            >
              Why it matters
            </h2>
            <p
              style={{
                margin: 0,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                fontSize: '1rem',
              }}
            >
              Strong local agriculture depends on stable family leadership, digital access, and trusted partnerships. We make that support easier to find.
            </p>
          </div>
        </section>

        {/* Call to Action Buttons */}
        <section
          style={{
            marginTop: '3.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.2rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link
            href="/"
            className="btn-primary"
            style={{
              display: 'inline-flex',
              padding: '14px 28px',
              borderRadius: 12,
              background: 'var(--green-700)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.3px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            ← Back to home
          </Link>
          <Link
            href="/membership/register"
            className="btn-gold"
            style={{
              display: 'inline-flex',
              padding: '14px 32px',
              borderRadius: 12,
              background: 'var(--gold-500)',
              color: '#1F3A22',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.3px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Join as a member →
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}