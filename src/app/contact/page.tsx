import Link from 'next/link'
import Footer from '@/components/home/Footer'

export const metadata = {
  title: 'Contact Us | FTT',
  description: 'Get in touch with Farmers & Trustees Trust.',
}

export default function ContactPage() {
  return (
    <>
      <main style={{ padding: '4rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <section style={{ position: 'relative', marginBottom: '2.5rem', padding: '2.8rem 2.8rem 3.2rem', borderRadius: 40, background: 'linear-gradient(145deg, rgba(24,92,59,0.07) 0%, rgba(255,255,255,0.98) 100%)', border: '1px solid rgba(31,92,59,0.10)', boxShadow: '0 10px 40px rgba(24,92,59,0.06)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 18px 6px 14px', background: 'var(--green-50)', color: 'var(--green-700)', borderRadius: 9999, fontSize: 13, fontWeight: 700, letterSpacing: '0.3px', marginBottom: 24, border: '1px solid rgba(31,92,59,0.06)' }}>
            <span style={{ fontSize: 16 }}>📬</span> Contact Us
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', lineHeight: 1.1, margin: '0 0 1rem 0', color: 'var(--green-900)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            We\'d love to hear from you
          </h1>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: 520 }}>
            Have questions about our services? Fill out the form below and our team will get back to you.
          </p>
        </section>

        <section>
          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We\'ll be in touch soon.'); }} style={{ padding: '2.5rem', borderRadius: 32, background: 'white', boxShadow: '0 20px 50px rgba(24,92,59,0.08)', border: '1px solid rgba(31,92,59,0.08)' }}>
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--green-800)', marginBottom: 8 }}>👤 Full Name</label>
                <input type="text" id="name" name="name" required placeholder="Enter your full name" style={{ width: '100%', padding: '14px 18px', fontSize: '1rem', borderRadius: 14, border: '2px solid rgba(31,92,59,0.12)', background: 'rgba(248,250,248,0.8)', color: 'var(--green-900)', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--green-800)', marginBottom: 8 }}>📧 Email Address</label>
                <input type="email" id="email" name="email" required placeholder="you@example.com" style={{ width: '100%', padding: '14px 18px', fontSize: '1rem', borderRadius: 14, border: '2px solid rgba(31,92,59,0.12)', background: 'rgba(248,250,248,0.8)', color: 'var(--green-900)', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label htmlFor="phone" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--green-800)', marginBottom: 8 }}>📱 Phone Number</label>
                <input type="tel" id="phone" name="phone" required placeholder="+260..." style={{ width: '100%', padding: '14px 18px', fontSize: '1rem', borderRadius: 14, border: '2px solid rgba(31,92,59,0.12)', background: 'rgba(248,250,248,0.8)', color: 'var(--green-900)', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label htmlFor="location" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--green-800)', marginBottom: 8 }}>📍 Location</label>
                <input type="text" id="location" name="location" required placeholder="e.g., Lusaka, Zambia" style={{ width: '100%', padding: '14px 18px', fontSize: '1rem', borderRadius: 14, border: '2px solid rgba(31,92,59,0.12)', background: 'rgba(248,250,248,0.8)', color: 'var(--green-900)', boxSizing: 'border-box' }} />
              </div>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <label htmlFor="message" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--green-800)', marginBottom: 8 }}>💬 Message (optional)</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell us how we can help you..." style={{ width: '100%', padding: '14px 18px', fontSize: '1rem', borderRadius: 14, border: '2px solid rgba(31,92,59,0.12)', background: 'rgba(248,250,248,0.8)', color: 'var(--green-900)', boxSizing: 'border-box', resize: 'vertical' }} />
            </div>
            <button type="submit" style={{ marginTop: '1.5rem', width: '100%', padding: '16px 32px', fontSize: '1.1rem', fontWeight: 700, borderRadius: 14, border: 'none', background: 'var(--green-700)', color: '#fff', cursor: 'pointer', transition: 'all 0.2s ease' }}>
              Send Message →
            </button>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center' }}>We typically respond within 24-48 hours.</p>
          </form>
        </section>

        <section style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, background: 'rgba(31,92,59,0.06)', color: 'var(--green-700)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', border: '1px solid rgba(31,92,59,0.08)' }}>← Back to home</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
