import Link from 'next/link'
import Footer from '@/components/home/Footer'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Privacy Policy | FTT',
  description: 'Read our privacy policy to understand how Farmers & Trustees Trust collects, uses, and protects your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <main
        style={{
          padding: '4rem 1.5rem',
          maxWidth: 980,
          margin: '0 auto',
        }}
      >
        <section
          style={{
            padding: '2.5rem 2.2rem',
            borderRadius: 28,
            background:
              'linear-gradient(145deg, rgba(24,92,59,0.07) 0%, rgba(255,255,255,0.98) 100%)',
            border: '1px solid rgba(31,92,59,0.10)',
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
              fontWeight: 700,
              letterSpacing: '0.3px',
              marginBottom: 18,
              border: '1px solid rgba(31,92,59,0.06)',
            }}
          >
            <span style={{ fontSize: 16 }}>🔒</span> Privacy Policy
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.0rem, 4vw, 2.6rem)',
              lineHeight: 1.1,
              margin: '0 0 1rem 0',
              color: 'var(--green-900)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            How we protect your information
          </h1>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 22,
            }}
          >
            Farmers &amp; Trustees Trust (FTT) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard information when you visit or use our platform.
          </p>

          <div
            style={{
              display: 'grid',
              gap: 18,
              color: 'var(--text-primary)',
            }}
          >
            <PolicySection
              title="1. Information we collect"
              body={
                'Depending on how you use FTT, we may collect information such as your name, email, phone number, location, and other details you provide through forms or registration.'
              }
            />
            <PolicySection
              title="2. How we use your information"
              body={
                'We use your information to provide services, process registrations, respond to inquiries, improve our platform, and communicate updates you request.'
              }
            />
            <PolicySection
              title="3. Sharing of information"
              body={
                'We do not sell your personal information. We may share information with service providers who help us operate the platform, or when required by law.'
              }
            />
            <PolicySection
              title="4. Data security"
              body={
                'We implement reasonable technical and organizational measures designed to protect information against unauthorized access, alteration, or disclosure.'
              }
            />
            <PolicySection
              title="5. Your choices"
              body={
                'You can contact us to request access to or correction of your information, and to ask about how we handle data associated with your account.'
              }
            />
            <PolicySection
              title="6. Contact us"
              body={
                'For privacy-related questions, contact us at mgchipashi03@gmail.com.'
              }
            />
          </div>

          <div style={{ marginTop: 26, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
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

          <p style={{ marginTop: 18, color: 'var(--text-secondary)', fontSize: 14, textAlign: 'center' }}>
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}


function PolicySection({
  title,
  body,
}: {
  title: string
  body: string
}) {
  return (
    <div
      style={{
        padding: '1.25rem 1.25rem',
        borderRadius: 18,
        background: 'rgba(255,255,255,0.75)',
        border: '1px solid rgba(31,92,59,0.08)',
      }}
    >
      <h2 style={{ fontSize: 16, marginBottom: 8, color: 'var(--green-800)' }}>
        {title}
      </h2>
      <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        {body}
      </p>
    </div>
  )
}

