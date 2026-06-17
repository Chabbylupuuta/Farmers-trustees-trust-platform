const stats = [
  { value: '6', label: 'Membership categories' },
  { value: '4', label: 'Service pillars' },
  { value: 'Lusaka', label: 'Based in Zambia' },
  { value: '100%', label: 'Digital & mobile-first' },
]

export default function StatsBar() {
  return (
    <div
      style={{
        background: '#fff',
        borderBottom: '0.5px solid var(--border)',
        overflowX: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              padding: '1.25rem 2.5rem',
              textAlign: 'center',
              borderRight: i < stats.length - 1 ? '0.5px solid var(--border)' : 'none',
              minWidth: 140,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: 'var(--green-700)',
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: 12,
                color: 'var(--text-secondary)',
                marginTop: 5,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
