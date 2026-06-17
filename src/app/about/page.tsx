import Link from 'next/link'
import Footer from '@/components/home/Footer'

export const metadata = {
  title: 'About | FTT',
  description: 'Learn more about Farmers & Trustees Trust and our mission to support farmers and communities in Zambia.',
}

export default function AboutPage() {
  return (
    <>
      <main style={{ padding: '4rem 1.5rem', maxWidth: 1000, margin: '0 auto' }}>
        <section style={{ position: 'relative', marginBottom: '3rem', padding: '2.5rem', borderRadius: 32, background: 'linear-gradient(180deg, rgba(24,92,59,0.08) 0%, rgba(255,255,255,0.95) 100%)', border: '1px solid rgba(31,92,59,0.12)' }}>
          <div style={{ position: 'absolute', top: 20, left: 24, width: 96, height: 96, borderRadius: '50%', background: 'rgba(31,92,59,0.10)' }} />
          <div style={{ position: 'absolute', top: 18, right: 30, width: 80, height: 80, borderRadius: '50%', background: 'rgba(201,162,39,0.12)' }} />
          <div style={{ position: 'absolute', top: 36, right: 86, width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,0.7)', boxShadow: '0 0 0 4px rgba(201,162,39,0.08)' }} />
          <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'var(--green-50)', color: 'var(--green-700)', borderRadius: 9999, fontSize: 12, fontWeight: 700, marginBottom: 20 }}>
            About Farmers & Trustees Trust
          </div>
        <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.25rem)', lineHeight: 1.05, margin: '0 0 1rem 0', color: 'var(--green-900)' }}>
          Building trusted digital services for Zambia’s farmers and families
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: 760 }}>
          At Farmers & Trustees Trust, we help rural businesses, farmers, and family-owned enterprises connect with buyers, secure wealth, plan estates, and recruit talent. Our mission is to make trust, finance, and farming support accessible across Zambia with practical digital tools.
        </p>
      </section>

      <div style={{ height: 1, background: 'rgba(31,92,59,0.10)', margin: '2rem 0 3rem' }} />

      <section style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        <div style={{ padding: '2rem', borderRadius: 24, background: 'white', boxShadow: '0 20px 45px rgba(24, 95, 42, 0.08)', border: '1px solid rgba(24, 95, 42, 0.06)' }}>
          <h2 style={{ margin: '0 0 0.75rem 0', fontSize: '1.2rem', color: 'var(--green-700)' }}>
            Our purpose
          </h2>
          <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            We bring transparent, mobile-friendly services to farmers and trustees so communities can grow, preserve assets, and plan for the future together.
          </p>
        </div>

        <div style={{ padding: '2rem', borderRadius: 24, background: 'white', boxShadow: '0 20px 45px rgba(201, 162, 39, 0.12)', border: '1px solid rgba(201, 162, 39, 0.12)' }}>
          <h2 style={{ margin: '0 0 0.75rem 0', fontSize: '1.2rem', color: 'var(--gold-700)' }}>
            What we do
          </h2>
          <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            From membership and marketplace access to estate planning and talent matching, our platform supports every stage of farm and trust growth.
          </p>
        </div>

        <div style={{ padding: '2rem', borderRadius: 24, background: 'white', boxShadow: '0 20px 45px rgba(29, 97, 51, 0.08)', border: '1px solid rgba(29, 97, 51, 0.08)' }}>
          <h2 style={{ margin: '0 0 0.75rem 0', fontSize: '1.2rem', color: 'var(--green-700)' }}>
            Why it matters
          </h2>
          <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Strong local agriculture depends on stable family leadership, digital access, and trusted partnerships. We make that support easier to find.
          </p>
        </div>
      </section>

      <section style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'inline-flex', padding: '12px 22px', borderRadius: 10, background: 'var(--green-700)', color: '#fff', textDecoration: 'none', fontWeight: 700 }}>
          Back to home
        </Link>
        <Link href="/membership/register" style={{ display: 'inline-flex', padding: '12px 22px', borderRadius: 10, background: 'var(--gold-500)', color: '#1F3A22', textDecoration: 'none', fontWeight: 700 }}>
          Join as a member
        </Link>
      </section>
    </main>
    <Footer />
  )
}
