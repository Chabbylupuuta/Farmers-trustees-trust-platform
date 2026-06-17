import Link from 'next/link'

const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green-700)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" /><path d="M12 12C12 7 7 5 3 6c1 5 5 8 9 6" /><path d="M12 12C12 7 17 5 21 6c-1 5-5 8-9 6" />
      </svg>
    ),
    iconBg: 'var(--green-50)',
    title: 'Agriculture & market access',
    description: 'Post produce, connect with buyers, browse commodity listings, access input suppliers, and request advisory services.',
    href: '/agriculture',
    linkLabel: 'Explore marketplace',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    iconBg: 'var(--gold-50)',
    title: 'Estate planning & family legacy',
    description: 'Secure your family\'s future with asset documentation, beneficiary registration, and farm succession planning tools.',
    href: '/estate-planning',
    linkLabel: 'Start planning',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    iconBg: '#E6F1FB',
    title: 'TalentLink recruitment hub',
    description: 'Job board, internship applications, and employer recruitment tools for students, graduates, and employers.',
    href: '/talentlink',
    linkLabel: 'Browse jobs',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green-700)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    iconBg: 'var(--green-50)',
    title: 'Enterprise & investment connect',
    description: 'Matchmaking between startups, SMEs, cooperatives, and investors seeking opportunities across Zambia.',
    href: '/enterprise',
    linkLabel: 'Connect now',
  },
]

export default function Pillars() {
  return (
    <section style={{ background: '#fff', padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'var(--green-50)',
              color: 'var(--green-700)',
              fontSize: 11,
              fontWeight: 600,
              padding: '4px 14px',
              borderRadius: 20,
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Our services
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
            }}
          >
            Everything in one ecosystem
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, maxWidth: 480, margin: '0 auto' }}>
            Four integrated pillars connecting farmers, families, job seekers, and investors across Zambia.
          </p>
        </div>

        {/* Pillar cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.href}
              style={{
                background: '#fff',
                border: '0.5px solid var(--border)',
                borderRadius: 14,
                padding: '1.75rem',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--green-700)'
                el.style.boxShadow = '0 4px 20px rgba(31,92,59,0.08)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--border)'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: pillar.iconBg,
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                {pillar.icon}
              </div>

              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3,
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1.25rem',
                }}
              >
                {pillar.description}
              </p>

              <Link
                href={pillar.href}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'var(--green-700)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                {pillar.linkLabel}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
