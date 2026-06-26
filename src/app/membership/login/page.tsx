import Link from 'next/link'

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const categoryRaw = searchParams?.category
  const category = Array.isArray(categoryRaw) ? categoryRaw[0] : categoryRaw

  const emailRaw = searchParams?.email
  const email = Array.isArray(emailRaw) ? emailRaw[0] : emailRaw

  return (
    <main className="page-shell">
      <section className="page-card">
        <div className="page-pill">🔐 Member login</div>
        <h1 className="page-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', margin: '0 0 0.75rem 0' }}>
          Log in{category ? ` as ${category}` : ''}
        </h1>
        <p className="page-lead" style={{ maxWidth: 760 }}>
          Enter your email and password to access your member dashboard.
        </p>

        <form
          action="/api/membership/login"
          method="post"
          style={{ marginTop: 22, display: 'grid', gap: 14, maxWidth: 680 }}
        >
          <input type="hidden" name="category" value={category ?? 'student'} />

          <div style={{ display: 'grid', gap: 6 }}>
            <label style={{ fontWeight: 800, fontSize: 13 }}>Email</label>
            <input
              required
              type="email"
              name="email"
              defaultValue={email ?? ''}
              placeholder="you@example.com"
              style={inputStyle}
            />
          </div>

          <div style={{ display: 'grid', gap: 6 }}>
            <label style={{ fontWeight: 800, fontSize: 13 }}>Password</label>
            <input required type="password" name="password" placeholder="Your password" style={inputStyle} />
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
            Log in
          </button>

          <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 2 }}>
            New here?{' '}
            <Link
              href={`/membership/register?category=${encodeURIComponent(category ?? 'student')}`}
              style={{ color: 'var(--green-700)', fontWeight: 900, textDecoration: 'none' }}
            >
              Create an account
            </Link>
          </p>
        </form>

        <p style={{ marginTop: 18, color: 'var(--text-muted)', fontSize: 12 }}>
          Note: This is a demo login flow using simple JSON persistence (no database).
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

