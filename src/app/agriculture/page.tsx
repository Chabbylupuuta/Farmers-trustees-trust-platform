import Link from 'next/link'
import Footer from '@/components/home/Footer'

export const metadata = {
  title: 'Agriculture | FTT',
  description: 'Discover agriculture services, market access, and support for farmers through Farmers & Trustees Trust.',
}

export default function AgriculturePage() {
  return (
    <>
      <main style={{ padding: '2rem 1.5rem 4rem', maxWidth: 1200, margin: '0 auto' }}>
        {/* Hero Section – more visual and spacious */}
        <section
          style={{
            position: 'relative',
            marginBottom: '4rem',
            padding: '3rem 2.5rem',
            borderRadius: 40,
            background: 'linear-gradient(145deg, rgba(24,92,59,0.06) 0%, rgba(255,255,255,0.95) 100%)',
            border: '1px solid rgba(31,92,59,0.10)',
            overflow: 'hidden',
          }}
        >
          {/* Decorative blobs */}
          <div
            style={{
              position: 'absolute',
              top: -40,
              right: -40,
              width: 180,
              height: 180,
              borderRadius: '50%',
              background: 'rgba(201,162,39,0.08)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 140,
              height: 140,
              borderRadius: '50%',
              background: 'rgba(24,92,59,0.06)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              display: 'inline-flex',
              padding: '6px 18px',
              background: 'var(--green-50, #e8f5e9)',
              color: 'var(--green-700, #1b5e20)',
              borderRadius: 9999,
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '1.5rem',
            }}
          >
            🌾 Agriculture services
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              lineHeight: 1.1,
              margin: '0 0 0.75rem 0',
              color: 'var(--green-900, #1a3a22)',
              maxWidth: 800,
            }}
          >
            Helping farmers reach markets, manage farms, and grow sustainably
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: 'var(--text-secondary, #4a5568)',
              maxWidth: 680,
              marginBottom: 0,
            }}
          >
            Our agriculture services connect producers to buyers, offer advisory support, and provide digital tools for farm management. We focus on empowering smallholder farmers and rural communities across Zambia.
          </p>
        </section>

        {/* Stats / Key numbers – new section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {[
            { number: '500+', label: 'Farmers supported' },
            { number: '12', label: 'Districts reached' },
            { number: '85%', label: 'Yield improvement' },
            { number: '200+', label: 'Market connections' },
          ].map((stat, idx) => (
            <div
              key={idx}
              style={{
                padding: '1.5rem 1rem',
                background: 'white',
                borderRadius: 20,
                textAlign: 'center',
                border: '1px solid rgba(31,92,59,0.06)',
                boxShadow: '0 6px 18px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--green-700, #1b5e20)' }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary, #4a5568)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services cards – enhanced with icons and better shadows */}
        <div
          style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              padding: '2rem',
              borderRadius: 28,
              background: 'white',
              boxShadow: '0 20px 45px rgba(24, 95, 42, 0.06)',
              border: '1px solid rgba(24, 95, 42, 0.06)',
              transition: 'transform 0.2s ease',
            }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>📈</div>
            <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.4rem', color: 'var(--green-700)' }}>
              Market access
            </h2>
            <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Find buyers and trade partners through our agriculture network, making it easier to sell produce and source quality inputs.
            </p>
          </div>

          <div
            style={{
              padding: '2rem',
              borderRadius: 28,
              background: 'white',
              boxShadow: '0 20px 45px rgba(201, 162, 39, 0.08)',
              border: '1px solid rgba(201, 162, 39, 0.15)',
            }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🌱</div>
            <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.4rem', color: 'var(--gold-700, #b8860b)' }}>
              Advisory support
            </h2>
            <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Access farming best practices, crop planning advice, and practical guidance to improve yields and reduce risk.
            </p>
          </div>

          <div
            style={{
              padding: '2rem',
              borderRadius: 28,
              background: 'white',
              boxShadow: '0 20px 45px rgba(24, 95, 42, 0.06)',
              border: '1px solid rgba(24, 95, 42, 0.06)',
            }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🛠️</div>
            <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.4rem', color: 'var(--green-700)' }}>
              Farm management
            </h2>
            <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Use digital tools to coordinate harvests, manage supplies, and keep your farm business running smoothly.
            </p>
          </div>
        </div>

        {/* New section: Our Approach */}
        <section
          style={{
            padding: '2.5rem',
            borderRadius: 32,
            background: 'linear-gradient(135deg, rgba(24,92,59,0.03) 0%, rgba(255,255,255,0.9) 100%)',
            border: '1px solid rgba(31,92,59,0.08)',
            marginBottom: '3rem',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', margin: '0 0 1rem 0', color: 'var(--green-800)' }}>
            How we support farmers
          </h2>
          <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {[
              { title: 'Training & workshops', desc: 'Hands-on sessions on sustainable practices and financial literacy.' },
              { title: 'Input financing', desc: 'Access to quality seeds, fertilisers, and equipment at fair terms.' },
              { title: 'Market linkages', desc: 'Direct connections to buyers, cooperatives, and export opportunities.' },
              { title: 'Data & insights', desc: 'Real-time crop data and weather forecasts to guide decisions.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '1rem 0' }}>
                <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem', color: 'var(--green-700)' }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section
          style={{
            padding: '2.5rem',
            borderRadius: 32,
            background: 'linear-gradient(135deg, rgba(201,162,39,0.08) 0%, rgba(255,255,255,0.95) 100%)',
            border: '1px solid rgba(201,162,39,0.15)',
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', margin: '0 0 0.5rem 0', color: 'var(--gold-800, #8b6914)' }}>
            Ready to grow?
          </h2>
          <p style={{ fontSize: '1.1rem', maxWidth: 560, margin: '0 auto 1.5rem auto', color: 'var(--text-secondary)' }}>
            Join our community of farmers and gain access to the tools, knowledge, and networks you need to thrive.
          </p>
          <Link
            href="/membership/register"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              borderRadius: 50,
              background: 'var(--gold-500, #d4a017)',
              color: '#1F3A22',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              boxShadow: '0 8px 20px rgba(201,162,39,0.25)',
            }}
          >
            Become a member →
          </Link>
        </section>

        {/* Footer buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              padding: '12px 22px',
              borderRadius: 12,
              background: 'var(--green-700, #1b5e20)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            ← Back to home
          </Link>
          <Link
            href="/membership/register"
            style={{
              display: 'inline-flex',
              padding: '12px 22px',
              borderRadius: 12,
              background: 'var(--gold-500, #d4a017)',
              color: '#1F3A22',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Join FTT today
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}