import Link from 'next/link'
import Footer from '@/components/home/Footer'

export const metadata = {
  title: 'Agriculture | FTT',
  description: 'Discover agriculture services, market access, and support for farmers through Farmers & Trustees Trust.',
}

export default function AgriculturePage() {
  return (
    <>
      <main style={{ padding: '4rem 1.5rem', maxWidth: 1000, margin: '0 auto' }}>
        <section style={{ position: 'relative', marginBottom: '3rem', padding: '2.5rem', borderRadius: 32, background: 'linear-gradient(180deg, rgba(24,92,59,0.08) 0%, rgba(255,255,255,0.95) 100%)', border: '1px solid rgba(31,92,59,0.12)' }}>
          <div style={{ position: 'absolute', top: 18, left: 26, width: 90, height: 90, borderRadius: '50%', background: 'rgba(31,92,59,0.10)' }} />
          <div style={{ position: 'absolute', top: 24, right: 28, width: 74, height: 74, borderRadius: '50%', background: 'rgba(201,162,39,0.12)' }} />
          <div style={{ position: 'absolute', bottom: 18, left: 44, width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.7)', boxShadow: '0 0 0 4px rgba(31,92,59,0.08)' }} />
          <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'var(--green-50)', color: 'var(--green-700)', borderRadius: 9999, fontSize: 12, fontWeight: 700, marginBottom: 20 }}>
            Agriculture services
          </div>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.25rem)', lineHeight: 1.05, margin: '0 0 1rem 0', color: 'var(--green-900)' }}>
            Helping farmers reach markets, manage farms, and grow sustainably
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: 760 }}>
            Our agriculture services connect producers to buyers, offer advisory support, and provide tools for farm management. We are focused on supporting smallholder farms and rural communities across Zambia.
          </p>
        </section>

        </section>

        <div style={{ height: 1, background: 'rgba(31,92,59,0.10)', margin: '2rem 0 3rem' }} />

        <section style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div style={{ padding: '2rem', borderRadius: 24, background: 'white', boxShadow: '0 20px 45px rgba(24, 95, 42, 0.08)', border: '1px solid rgba(24, 95, 42, 0.06)' }}>
            <h2 style={{ margin: '0 0 0.75rem 0', fontSize: '1.3rem', color: 'var(--green-700)' }}>
              Market access
            </h2>
            <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              Find buyers and trade partners through our agriculture network, making it easier to sell produce and source inputs.
            </p>
          </div>

          <div style={{ padding: '2rem', borderRadius: 24, background: 'white', boxShadow: '0 20px 45px rgba(201, 162, 39, 0.12)', border: '1px solid rgba(201, 162, 39, 0.12)' }}>
            <h2 style={{ margin: '0 0 0.75rem 0', fontSize: '1.3rem', color: 'var(--gold-700)' }}>
              Advisory support
            </h2>
            <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              Access farming best practices, crop planning advice, and practical guidance to improve yields and reduce risk.
            </p>
          </div>

          <div style={{ padding: '2rem', borderRadius: 24, background: 'white', boxShadow: '0 20px 45px rgba(29, 97, 51, 0.08)', border: '1px solid rgba(29, 97, 51, 0.08)' }}>
            <h2 style={{ margin: '0 0 0.75rem 0', fontSize: '1.3rem', color: 'var(--green-700)' }}>
              Farm management
            </h2>
            <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              Use digital tools to coordinate harvests, manage supplies, and keep your business running smoothly.
            </p>
          </div>
        </section>

        <section style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'inline-flex', padding: '12px 22px', borderRadius: 10, background: 'var(--green-700)', color: '#fff', textDecoration: 'none', fontWeight: 700 }}>
            Back to home
          </Link>
          <Link href="/membership/register" style={{ display: 'inline-flex', padding: '12px 22px', borderRadius: 10, background: 'var(--gold-500)', color: '#1F3A22', textDecoration: 'none', fontWeight: 700 }}>
            Become a member
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
