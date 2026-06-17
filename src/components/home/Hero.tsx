import Link from 'next/link'

export default function Hero() {
  return (
    <section
      style={{
        background: 'linear-gradient(145deg, var(--green-700) 0%, var(--green-800) 100%)',
        padding: '5rem 1.5rem 4.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(201,162,39,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(201,162,39,0.15)',
            color: 'var(--gold-500)',
            border: '1px solid rgba(201,162,39,0.3)',
            borderRadius: 20,
            padding: '5px 16px',
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.3px',
            marginBottom: '1.5rem',
          }}
        >
          Zambia&apos;s integrated community platform
        </div>

        {/* Headline */}
        <h1
          style={{
            color: '#fff',
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: '1.25rem',
          }}
        >
          Empowering Farmers.{' '}
          <span style={{ color: 'var(--gold-500)' }}>Protecting Families.</span>{' '}
          Building Generations.
        </h1>

        {/* Subheading */}
        <p
          style={{
            color: 'rgba(255,255,255,0.72)',
            fontSize: 16,
            lineHeight: 1.75,
            marginBottom: '2.5rem',
            maxWidth: 520,
            margin: '0 auto 2.5rem',
          }}
        >
          A trusted platform providing agricultural support, estate planning services,
          recruitment opportunities, startup development, and investor connections.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/membership/register">
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
              Become a member
            </button>
          </Link>

          <Link href="/apply">
            <button
              style={{
                background: 'transparent',
                color: '#fff',
                fontSize: 15,
                fontWeight: 400,
                padding: '13px 32px',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.35)',
                cursor: 'pointer',
              }}
            >
              Apply now
            </button>
          </Link>

          <Link href="/contact">
            <button
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.75)',
                fontSize: 15,
                fontWeight: 400,
                padding: '13px 32px',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
              }}
            >
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
