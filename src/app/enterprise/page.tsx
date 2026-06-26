import Link from 'next/link'
import Footer from '@/components/home/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise & Invest | FTT',
  description:
    'Connect enterprises with trusted investment opportunities built for sustainable growth across Zambia.',
}

export default function EnterpriseInvestPage() {
  return (
    <>
      <main
        style={{
          padding: '4rem 1.5rem',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <section
          style={{
            padding: '2.5rem 2.2rem',
            borderRadius: 28,
            background:
              'linear-gradient(145deg, rgba(31,92,59,0.09) 0%, rgba(255,255,255,0.98) 100%)',
            border: '1px solid rgba(31,92,59,0.12)',
            boxShadow: '0 10px 40px rgba(24,92,59,0.06)',
          }}
        >
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
              fontWeight: 800,
              letterSpacing: '0.3px',
              marginBottom: 18,
              border: '1px solid rgba(31,92,59,0.08)',
            }}
          >
            <span style={{ fontSize: 16 }}>🏦</span> Enterprise &amp; Invest
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.1rem, 4.5vw, 2.8rem)',
              lineHeight: 1.08,
              margin: '0 0 1rem 0',
              color: 'var(--green-900)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
            }}
          >
            Trusted investment pathways for Zambia’s rural economy
          </h1>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 16,
              lineHeight: 1.9,
              marginBottom: 26,
              maxWidth: 780,
            }}
          >
            Farmers, families, and enterprises connect through clear processes,
            shared trust, and responsible stewardship—so capital can flow where
            it creates long-term value.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 18,
            }}
          >
            <InfoCard
              title="Partner-ready structure"
              badge="Process"
              description="Defined roles and transparent workflows that help enterprises and communities collaborate confidently."
            />
            <InfoCard
              title="Sustainability by design"
              badge="Impact"
              description="Investment is linked to practical farm outcomes—so growth remains resilient through seasons."
            />
            <InfoCard
              title="Digital accountability"
              badge="Trust"
              description="Practical tracking and documentation to improve visibility across transactions and stewardship."
            />
            <InfoCard
              title="Community-first relationships"
              badge="People"
              description="We prioritize long-term partnerships built on respect for farmers, families, and local leadership."
            />
          </div>

          <div
            style={{
              marginTop: 26,
              padding: '1.2rem 1.2rem',
              borderRadius: 20,
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(31,92,59,0.09)',
              display: 'flex',
              justifyContent: 'space-between',
              gap: 16,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 900,
                  color: 'var(--green-900)',
                  marginBottom: 6,
                }}
              >
                Ready to explore an opportunity?
              </div>
              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Start with a short introduction and we’ll guide you to the right next step.
              </div>
            </div>

            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 20px',
                borderRadius: 12,
                background: 'var(--gold-500)',
                border: '1px solid rgba(31,92,59,0.10)',
                color: '#1F3A22',
                textDecoration: 'none',
                fontWeight: 900,
                fontSize: '0.95rem',
                whiteSpace: 'nowrap',
              }}
            >
              Contact FTT →
            </Link>
          </div>

          <div
            style={{
              marginTop: 26,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 22px',
                borderRadius: 12,
                background: 'rgba(31,92,59,0.06)',
                border: '1px solid rgba(31,92,59,0.10)',
                color: 'var(--green-700)',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '0.95rem',
              }}
            >
              ← Back to home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function InfoCard({
  title,
  description,
  badge,
}: {
  title: string
  description: string
  badge: string
}) {
  return (
    <article
      style={{
        padding: '1.6rem 1.5rem',
        borderRadius: 22,
        background: 'rgba(255,255,255,0.78)',
        border: '1px solid rgba(31,92,59,0.08)',
        boxShadow: '0 10px 30px rgba(24,92,59,0.04)',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '5px 12px',
          borderRadius: 9999,
          background: 'var(--green-50)',
          border: '1px solid rgba(31,92,59,0.06)',
          color: 'var(--green-700)',
          fontSize: 12,
          fontWeight: 900,
          marginBottom: 12,
        }}
      >
        {badge}
      </div>

      <h2
        style={{
          margin: '0 0 8px 0',
          fontSize: 18,
          color: 'var(--green-900)',
          fontWeight: 900,
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>

      <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        {description}
      </p>
    </article>
  )
}

