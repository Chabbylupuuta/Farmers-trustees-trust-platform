import Link from 'next/link'

const memberships = [
  {
    category: 'Student',
    title: 'Student member',
    description: 'Access TalentLink, internship applications, and training events.',
    featured: false,
    badge: { text: 'Student', style: { background: 'var(--green-50)', color: 'var(--green-700)' } },
  },
  {
    category: 'Farmer',
    title: 'Farmer member',
    description: 'Full marketplace access, produce listings, input supplier directory, and advisory services.',
    featured: true,
    badge: { text: 'Most popular', style: { background: 'var(--gold-50)', color: 'var(--gold-700)' } },
  },
  {
    category: 'Ordinary',
    title: 'Ordinary member',
    description: 'Estate planning tools, events, and all core community platform features.',
    featured: false,
    badge: { text: 'Ordinary', style: { background: 'var(--green-50)', color: 'var(--green-700)' } },
  },
  {
    category: 'Associate',
    title: 'Associate member',
    description: 'Affiliate access for partner organisations and development partners.',
    featured: false,
    badge: { text: 'Associate', style: { background: 'var(--green-50)', color: 'var(--green-700)' } },
  },
  {
    category: 'Corporate',
    title: 'Corporate member',
    description: 'Employer recruitment tools, enterprise connect, and investment access for organisations.',
    featured: false,
    badge: { text: 'Corporate', style: { background: '#E6F1FB', color: '#185FA5' } },
  },
  {
    category: 'Honorary',
    title: 'Honorary member',
    description: 'For recognised contributors and partners of Farmers & Trustees Trust.',
    featured: false,
    badge: { text: 'Honorary', style: { background: 'var(--gold-50)', color: 'var(--gold-700)' } },
  },
]

export default function Membership() {
  return (
    <section style={{ background: 'var(--page-bg)', padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
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
            Membership
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
            }}
          >
            Choose your membership
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
            All memberships include a digital certificate and a unique membership number.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {memberships.map((mem) => (
            <div
              key={mem.category}
              style={{
                background: '#fff',
                border: mem.featured ? '2px solid var(--green-700)' : '0.5px solid var(--border)',
                borderRadius: 12,
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}
            >
              {/* Badge */}
              <span
                style={{
                  display: 'inline-block',
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: 20,
                  marginBottom: '0.75rem',
                  alignSelf: 'flex-start',
                  ...mem.badge.style,
                }}
              >
                {mem.badge.text}
              </span>

              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.4rem',
                }}
              >
                {mem.title}
              </h3>

              <p
                style={{
                  fontSize: 13,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                  flex: 1,
                }}
              >
                {mem.description}
              </p>

              {/* Features checklist */}
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {['Digital membership number', 'Downloadable certificate', 'Member dashboard'].map((feat) => (
                  <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--text-secondary)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green-700)" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link href={`/membership/register?category=${mem.category.toLowerCase()}`}>
                <button
                  style={{
                    width: '100%',
                    padding: '10px 0',
                    borderRadius: 8,
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 14,
                    fontWeight: 600,
                    background: mem.featured ? 'var(--gold-500)' : 'var(--green-700)',
                    color: mem.featured ? '#1F3A22' : '#fff',
                  }}
                >
                  Join as {mem.category.toLowerCase()} member
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
