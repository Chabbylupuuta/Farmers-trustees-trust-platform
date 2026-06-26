import Link from 'next/link'

export default function MemberAuthLinks({
  category,
}: {
  category?: string | null
}) {
  const safeCategory = category ? String(category).toLowerCase() : 'student'

  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Link
        href={`/membership/login?category=${encodeURIComponent(safeCategory)}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px 16px',
          borderRadius: 12,
          border: '1px solid rgba(31,92,59,0.12)',
          background: 'rgba(31,92,59,0.06)',
          color: 'var(--green-700)',
          textDecoration: 'none',
          fontWeight: 900,
          fontSize: '0.95rem',
        }}
      >
        Log in
      </Link>

      <Link
        href={`/membership/register?category=${encodeURIComponent(safeCategory)}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px 16px',
          borderRadius: 12,
          border: '1px solid rgba(31,92,59,0.12)',
          background: 'var(--gold-500)',
          color: '#1F3A22',
          textDecoration: 'none',
          fontWeight: 900,
          fontSize: '0.95rem',
        }}
      >
        Become a member
      </Link>
    </div>
  )
}

