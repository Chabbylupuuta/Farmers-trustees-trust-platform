import Link from 'next/link'

const footerLinks = {
  Platform: [
    { label: 'Agriculture & market access', href: '/agriculture' },
    { label: 'Estate planning', href: '/estate-planning' },
    { label: 'TalentLink', href: '/talentlink' },
    { label: 'Enterprise & invest', href: '/enterprise' },
    { label: 'Training & events', href: '/events' },
    { label: 'Resource center', href: '/resources' },
  ],
  Membership: [
    { label: 'Become a member', href: '/membership/register' },
    { label: 'Member login', href: '/login' },
    { label: 'Membership types', href: '/membership' },
    { label: 'Apply now', href: '/apply' },
  ],
  Organisation: [
    { label: 'About us', href: '/about' },
    { label: 'Contact us', href: '/contact' },
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms of service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--green-800)', color: '#fff' }}>
      {/* Main footer */}
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '3rem 1.5rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem',
        }}
      >
        {/* Brand column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
            <div
              style={{
                width: 34,
                height: 34,
                background: 'var(--gold-500)',
                borderRadius: 7,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F3A22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22V12M12 12C12 7 7 5 3 6c1 5 5 8 9 6M12 12C12 7 17 5 21 6c-1 5-5 8-9 6" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>Farmers &amp; Trustees Trust</div>
              <div style={{ fontSize: 10, color: 'var(--gold-500)' }}>Empowering Communities</div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Connecting farmers, families, students, businesses, and investors through one integrated ecosystem in Zambia.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <a href="mailto:mgchipashi03@gmail.com" style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
              mgchipashi03@gmail.com
            </a>
            <a href="tel:+260975963056" style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
              0975 963 056
            </a>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Lusaka, Zambia</span>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--gold-500)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '1rem',
              }}
            >
              {heading}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '0.5px solid rgba(255,255,255,0.1)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
          &copy; {new Date().getFullYear()} Farmers &amp; Trustees Trust. All rights reserved.
        </span>
        <Link
          href="/admin/login"
          style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}
        >
          Admin login
        </Link>
      </div>
    </footer>
  )
}
