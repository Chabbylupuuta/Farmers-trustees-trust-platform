import Link from 'next/link'
import Footer from '@/components/home/Footer'
import ContactForm from '@/components/forms/ContactForm'

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
            We&apos;d love to hear from you
          </h1>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: 520 }}>
            Have questions about our services? Fill out the form below and our team will get back to you.
          </p>
        </section>

        <section>
          <ContactForm />
        </section>

        <section style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, background: 'rgba(31,92,59,0.06)', color: 'var(--green-700)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', border: '1px solid rgba(31,92,59,0.08)' }}>← Back to home</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

