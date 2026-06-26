import Link from 'next/link'
import Footer from '@/components/home/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events | FTT',
  description:
    'Explore upcoming events, community programs, and farmer-focused activities supported by Farmers & Trustees Trust.',
}

export default function EventsPage() {
  return (
    <>
      <main className="page-shell">
        <section
          className="page-card"
          style={{
            background:
              'linear-gradient(145deg, rgba(24,92,59,0.07) 0%, rgba(255,255,255,0.98) 100%)',
            border: '1px solid rgba(31,92,59,0.10)',
            boxShadow: '0 10px 40px rgba(24,92,59,0.06)',
          }}
        >
          <div className="page-pill">
            <span style={{ fontSize: 16 }}>📅</span> Events
          </div>

          <h1
            className="page-title"
            style={{
              fontSize: 'clamp(2.0rem, 4vw, 2.6rem)',
              lineHeight: 1.1,
              margin: '0 0 0.8rem 0',
            }}
          >
            Community programs & farmer-focused activities
          </h1>

          <p
            className="page-lead"
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 26,
              maxWidth: 760,
            }}
          >
            Stay informed about training sessions, marketplace meetups, and
            trustee support events across Zambia. Check back often for new
            dates.
          </p>

          <div className="page-grid">
            <EventCard
              title="Farm Business Training"
              date="TBA"
              description="Hands-on sessions to help farmers strengthen planning, record-keeping, and access to buyers."
              badge="Training"
            />
            <EventCard
              title="Trustee & Estate Planning Support"
              date="TBA"
              description="Workshops guiding families through estate planning fundamentals and trusted digital tools."
              badge="Support"
            />
            <EventCard
              title="Marketplace & Partnership Meetups"
              date="TBA"
              description="Meet buyers, learn collaboration opportunities, and explore platform membership benefits."
              badge="Community"
            />
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
                fontWeight: 700,
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

function EventCard({
  title,
  date,
  description,
  badge,
}: {
  title: string
  date: string
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
          gap: 8,
          padding: '5px 12px',
          borderRadius: 9999,
          background: 'var(--green-50)',
          border: '1px solid rgba(31,92,59,0.06)',
          color: 'var(--green-700)',
          fontSize: 12,
          fontWeight: 800,
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
          fontWeight: 800,
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>

      <div
        style={{
          marginBottom: 10,
          color: 'var(--text-secondary)',
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        📍 {date}
      </div>

      <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        {description}
      </p>
    </article>
  )
}

