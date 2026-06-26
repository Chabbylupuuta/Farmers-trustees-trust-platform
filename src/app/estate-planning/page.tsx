import Link from 'next/link'
import Footer from '@/components/home/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estate Planning | FTT',
  description:
    'Estate planning guidance for families and trustees—helping you protect wealth, reduce disputes, and support stewardship across Zambia.',
}

export default function EstatePlanningPage() {
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
            <span style={{ fontSize: 16 }}>🛡️</span> Estate planning
          </div>

          <h1
            className="page-title"
            style={{
              fontSize: 'clamp(2.1rem, 4.5vw, 2.8rem)',
              lineHeight: 1.08,
              margin: '0 0 1rem 0',
            }}
          >
            Protect family wealth. Reduce uncertainty. Plan for the future.
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
            Estate planning helps families clarify how assets should be managed,
            protect beneficiaries, and support long-term stewardship—especially
            for rural households and multi-generational farms.
          </p>

          <div className="page-grid">
            <StepCard
              step="01"
              title="Start with clarity"
              description="List assets, key people, and goals. Understand what must be preserved for future generations."
            />
            <StepCard
              step="02"
              title="Choose trust & stewardship"
              description="Define roles and responsibilities to protect assets and ensure continuity beyond any one person."
            />
            <StepCard
              step="03"
              title="Document decisions"
              description="Keep records organized so beneficiaries and trustees can follow instructions confidently."
            />
            <StepCard
              step="04"
              title="Review when life changes"
              description="Revisit plans as farms grow, families expand, and priorities shift over time."
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
                Need guidance for your situation?
              </div>
              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Contact FTT and we’ll help you identify the most appropriate next
                step for your estate planning goals.
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
              Talk to FTT →
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

function StepCard({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description: string
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 900,
            color: 'var(--green-700)',
            padding: '5px 12px',
            borderRadius: 9999,
            background: 'var(--green-50)',
            border: '1px solid rgba(31,92,59,0.06)',
          }}
        >
          Step {step}
        </div>
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

