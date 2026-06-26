import Link from 'next/link'
import Footer from '@/components/home/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TalentLink | FTT',
  description:
    'TalentLink connects skilled Zambian talent to enterprise needs through trusted matching, onboarding, and community-first support.',
}

export default function TalentLinkPage() {
  return (
    <>
      <main className="page-shell">
        <section
          className="page-card"
          style={{
            background:
              'linear-gradient(145deg, rgba(31,92,59,0.09) 0%, rgba(255,255,255,0.98) 100%)',
            border: '1px solid rgba(31,92,59,0.12)',
            boxShadow: '0 10px 40px rgba(24,92,59,0.06)',
          }}
        >
          <div className="page-pill">
            <span style={{ fontSize: 16 }}>🧑🏾‍🌾</span> TalentLink
          </div>

          <h1
            className="page-title"
            style={{
              fontSize: 'clamp(2.1rem, 4.5vw, 2.8rem)',
              lineHeight: 1.08,
              margin: '0 0 1rem 0',
            }}
          >
            Trusted talent matching for Zambia’s agriculture &amp; enterprise ecosystem
          </h1>

          <p
            className="page-lead"
            style={{
              fontSize: 16,
              lineHeight: 1.9,
              marginBottom: 26,
              maxWidth: 820,
            }}
          >
            TalentLink helps enterprises find reliable people and helps skilled
            individuals access opportunities—supported by verification,
            transparent onboarding, and community-first relationships.
          </p>

          <div className="page-grid">
            <InfoCard
              title="For enterprises"
              badge="Hire"
              description="Post needs, review verified profiles, and shortlist talent with clarity and speed."
            />
            <InfoCard
              title="For talent"
              badge="Grow"
              description="Show your skills, receive guidance, and access opportunities matched to your experience."
            />
            <InfoCard
              title="Trusted onboarding"
              badge="Support"
              description="Clear documentation and orientation to reduce risk and improve retention."
            />
            <InfoCard
              title="Accountability"
              badge="Trust"
              description="Practical feedback loops so both parties stay aligned and outcomes improve."
            />
          </div>

          <div className="page-cta-row">
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 900,
                  color: 'var(--green-900)',
                  marginBottom: 6,
                }}
              >
                Want to join TalentLink?
              </div>
              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Get in touch and we’ll guide you on the best next step for your
                profile or organization.
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
              }}
            >
              Contact FTT →
            </Link>
          </div>

          <div className="page-back-row">
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

