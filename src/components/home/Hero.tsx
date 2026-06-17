'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        background: 'linear-gradient(145deg, var(--green-700) 0%, var(--green-800) 100%)',
        padding: '4rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
        {/* Content */}
        <div style={{ flex: '1 1 420px', color: '#fff', minWidth: 300, animation: 'slideInLeft 0.8s ease-out forwards' }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(201,162,39,0.12)',
              color: 'var(--gold-500)',
              borderRadius: 20,
              padding: '6px 14px',
              fontSize: 12,
              fontWeight: 600,
              marginBottom: 16,
              animation: 'fadeIn 0.6s ease-out 0.2s forwards',
              opacity: 0,
            }}
          >
            Serving Zambia's farming communities
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)', lineHeight: 1.08, margin: '0 0 1rem 0', animation: 'slideInUp 0.8s ease-out 0.3s forwards', opacity: 0 }}>
            Grow your farm, secure your legacy — all in one place
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, marginBottom: 20, animation: 'fadeIn 0.8s ease-out 0.4s forwards', opacity: 0 }}>
            Connect with buyers, access farm advisory services, protect your family with tailored estate planning, and find local talent.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 18, animation: 'slideInUp 0.8s ease-out 0.5s forwards', opacity: 0 }}>
            <Link href="/membership/register">
              <button
                style={{
                  background: 'var(--gold-500)',
                  color: '#1F3A22',
                  padding: '12px 22px',
                  borderRadius: 10,
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  cursor: 'pointer',
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(201, 162, 39, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label="Become a member"
              >
                Become a member
              </button>
            </Link>

            <Link href="/agriculture">
              <button
                style={{
                  background: 'transparent',
                  color: '#fff',
                  padding: '12px 20px',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.22)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
                }}
                aria-label="Explore marketplace"
              >
                Explore marketplace
              </button>
            </Link>
          </div>

          {/* Quick feature links */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', animation: 'fadeIn 0.8s ease-out 0.6s forwards', opacity: 0 }}>
            <Link href="/estate-planning">
              <button style={{ background: '#fff', color: 'var(--green-700)', padding: '10px 14px', borderRadius: 8, border: 'none', fontWeight: 600, transition: 'all 0.3s ease', display: 'inline-block', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Estate planning
              </button>
            </Link>
            <Link href="/talentlink">
              <button style={{ background: '#fff', color: 'var(--green-700)', padding: '10px 14px', borderRadius: 8, border: 'none', fontWeight: 600, transition: 'all 0.3s ease', display: 'inline-block', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Hire talent
              </button>
            </Link>
            <Link href="/enterprise">
              <button style={{ background: '#fff', color: 'var(--green-700)', padding: '10px 14px', borderRadius: 8, border: 'none', fontWeight: 600, transition: 'all 0.3s ease', display: 'inline-block', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Find investors
              </button>
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div style={{ flex: '0 0 420px', minWidth: 260, display: 'flex', justifyContent: 'center', animation: 'slideInRight 0.8s ease-out 0.2s forwards' }} aria-hidden>
          <svg width="100%" height="100%" viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: 420 }}>
            <rect x="0" y="0" width="480" height="320" rx="18" fill="url(#g)" />
            <g transform="translate(24,28)">
              <circle cx="72" cy="180" r="48" fill="#F0F7F2" />
              <rect x="160" y="110" width="220" height="120" rx="10" fill="#FFF7E1" />
              <path d="M40 160c30-40 80-40 120-20" stroke="var(--green-700)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M210 150l40-28 36 24" stroke="#185FA5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="32" y="210" width="120" height="60" rx="8" fill="#FFE9B0" />
            </g>
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#173b27" stopOpacity="1" />
                <stop offset="100%" stopColor="#123421" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}

