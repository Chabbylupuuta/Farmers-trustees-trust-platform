import Link from 'next/link'

export default function CTASection() {
  const whatsappNumber = '260975963056'
  const whatsappMessage = encodeURIComponent(
    'Hello, I would like to learn more about Farmers & Trustees Trust.'
  )

  return (
    <section
      style={{
        background: 'var(--green-700)',
        padding: '4rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 580, margin: '0 auto' }}>
        <h2
          style={{
            color: '#fff',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 600,
            marginBottom: '1rem',
          }}
        >
          Ready to join the platform?
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: 15,
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}
        >
          Register online in minutes. Your digital membership number and certificate are
          generated instantly on approval. No paperwork, no queues.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/membership/login?category=student">
            <button
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.85)',
                fontSize: 15,
                fontWeight: 600,
                padding: '13px 28px',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.25)',
                cursor: 'pointer',
              }}
            >
              Log in
            </button>
          </Link>

          <Link href="/membership/register?category=student">
            <button
              style={{
                background: 'var(--gold-500)',
                color: '#1F3A22',
                fontSize: 15,
                fontWeight: 600,
                padding: '13px 32px',
                borderRadius: 8,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Register now
            </button>
          </Link>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.85)',
                fontSize: 15,
                fontWeight: 400,
                padding: '13px 28px',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.3)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              {/* WhatsApp icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.504 3.93 1.389 5.6L0 24l6.584-1.366A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.81 9.81 0 0 1-5.002-1.366l-.358-.213-3.714.971.99-3.623-.233-.373A9.79 9.79 0 0 1 2.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
              </svg>
              WhatsApp us
            </button>
          </a>

          <Link href="/contact">
            <button
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.65)',
                fontSize: 15,
                fontWeight: 400,
                padding: '13px 28px',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.15)',
                cursor: 'pointer',
              }}
            >
              Contact us
            </button>
          </Link>
        </div>

        {/* Contact snippet */}
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="mailto:mgchipashi03@gmail.com"
            style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none' }}
          >
            mgchipashi03@gmail.com
          </a>
          <a
            href="tel:+260975963056"
            style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none' }}
          >
            0975 963 056
          </a>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Lusaka, Zambia</span>
        </div>
      </div>
    </section>
  )
}
