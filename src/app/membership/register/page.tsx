import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function RegisterPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const categoryRaw = searchParams?.category
  const category = Array.isArray(categoryRaw) ? categoryRaw[0] : categoryRaw

  // For now we only implement Student join UI, but keep the route compatible
  // with other categories.
  if (category && category.toLowerCase() !== 'student') {
    return (
      <main className="page-shell">
        <section className="page-card">
          <div className="page-pill">🤝 Membership</div>
          <h1 className="page-title" style={{ fontSize: '2rem', margin: '0 0 0.75rem 0' }}>
            Join as {String(category)}
          </h1>
          <p className="page-lead">
            This membership signup flow is currently implemented for <b>Student</b> members.
          </p>
          <div className="page-back-row">
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
        </section>
      </main>
    )
  }

  // Simple server component form that POSTs to a server action route.
  // We use a client component only where needed.
  return (
    <main className="page-shell">
      <section className="page-card">
        <div className="page-pill">🎓 Student member</div>
        <h1
          className="page-title"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', margin: '0 0 0.75rem 0' }}
        >
          Join as a Student member
        </h1>
        <p className="page-lead" style={{ maxWidth: 760 }}>
          Create your account to access TalentLink, internship applications, and training events.
        </p>

        <form
          action="/api/membership/register"
          method="post"
          style={{ marginTop: 22, display: 'grid', gap: 14, maxWidth: 680 }}
        >
          <input type="hidden" name="category" value="student" />

          <div style={{ display: 'grid', gap: 6 }}>
            <label style={{ fontWeight: 800, fontSize: 13 }}>Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="you@example.com"
              style={inputStyle}
            />
          </div>

          <div style={{ display: 'grid', gap: 6 }}>
            <label style={{ fontWeight: 800, fontSize: 13 }}>Full name</label>
            <input required type="text" name="name" placeholder="Your name" style={inputStyle} />
          </div>

          <div style={{ display: 'grid', gap: 6 }}>
            <label style={{ fontWeight: 800, fontSize: 13 }}>Username</label>
            <input required type="text" name="username" placeholder="e.g. john_doe" style={inputStyle} />
          </div>

          <div style={{ display: 'grid', gap: 6 }}>
            <label style={{ fontWeight: 800, fontSize: 13 }}>Phone number</label>
            <input required type="text" name="number" placeholder="e.g. +2607..." style={inputStyle} />
          </div>

          <div style={{ display: 'grid', gap: 6 }}>
            <label style={{ fontWeight: 800, fontSize: 13 }}>Address</label>
            <input required type="text" name="address" placeholder="Street / township" style={inputStyle} />
          </div>

          <div style={{ display: 'grid', gap: 6 }}>
            <label style={{ fontWeight: 800, fontSize: 13 }}>Password</label>
            <input required type="password" name="password" placeholder="Create a password" style={inputStyle} />
          </div>

          <button
            type="submit"
            style={{
              marginTop: 6,
              padding: '12px 18px',
              borderRadius: 10,
              border: 'none',
              background: 'var(--gold-500)',
              color: '#1F3A22',
              fontWeight: 900,
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 10px 22px rgba(201,162,39,0.18)',
            }}
          >
            Create account
          </button>

          <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 2 }}>
            Already have an account?{' '}
            <Link
              href="/membership/login?category=student"
              style={{ color: 'var(--green-700)', fontWeight: 900, textDecoration: 'none' }}
            >
              Log in
            </Link>
          </p>
        </form>

        <p style={{ marginTop: 18, color: 'var(--text-muted)', fontSize: 12 }}>
          Note: This is a demo signup flow using simple JSON persistence (no database).
        </p>
      </section>
    </main>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 12px',
  borderRadius: 10,
  border: '1px solid rgba(31,92,59,0.16)',
  background: 'rgba(255,255,255,0.86)',
  outline: 'none',
  fontSize: 14,
};

