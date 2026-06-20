import Link from 'next/link'
import Footer from '@/components/home/Footer'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Terms & Conditions | FTT',
  description: 'Read the terms and conditions for using Farmers & Trustees Trust (FTT).',
}

export default function TermsAndConditionsPage() {
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
            <span style={{ fontSize: 16 }}>📄</span> Terms &amp; Conditions
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
            Rules for using the FTT platform
          </h1>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 22,
            }}
          >
            These Terms &amp; Conditions govern your access to and use of Farmers &amp;
            Trustees Trust (FTT) services. By using the platform, you agree to
            comply with these terms.
          </p>

          <div style={{ display: 'grid', gap: 18 }}>
            <PolicySection
              title="1. Using the service"
              body="You agree to use the platform in a lawful way. You will not interfere with service availability, attempt unauthorized access, or submit false information." 
            />
            <PolicySection
              title="2. Membership and approvals"
              body="Where applicable, membership and registrations may be reviewed for eligibility and approval. FTT may request additional information to verify details." 
            />
            <PolicySection
              title="3. Content and responsibility"
              body="You are responsible for the information you provide. Any advice or material on the platform is for general guidance and should be confirmed with relevant professionals where needed." 
            />
            <PolicySection
              title="4. Disclaimers"
              body="The platform is provided on an 'as is' and 'as available' basis. FTT makes no warranties, to the fullest extent permitted by law, regarding uninterrupted or error-free operation." 
            />
            <PolicySection
              title="5. Changes to these terms"
              body="FTT may update these terms from time to time. Continued use of the platform after changes are posted indicates acceptance of the updated terms." 
            />
            <PolicySection
              title="6. Contact"
              body="If you have questions about these Terms, contact us at mgchipashi03@gmail.com." 
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

