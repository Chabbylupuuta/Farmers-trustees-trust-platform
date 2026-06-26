'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      aria-label="Hero"
      className="home-section"
      style={{
        background: 'linear-gradient(145deg, var(--green-700) 0%, var(--green-800) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 220, height: 220, top: '10%', left: '6%', background: 'rgba(255,255,255,0.08)', borderRadius: '50%', filter: 'blur(36px)' }} />
        <div style={{ position: 'absolute', width: 180, height: 180, bottom: '12%', right: '10%', background: 'rgba(255,255,255,0.06)', borderRadius: '50%', filter: 'blur(30px)' }} />
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
        {/* Content */}
        <div className={`reveal ${visible ? 'show' : ''} delay-2`} style={{ flex: '1 1 420px', color: '#fff', minWidth: 300 }}>
          <div className={`reveal ${visible ? 'show' : ''} delay-1`} style={{ display: 'inline-block', background: 'rgba(201,162,39,0.12)', color: 'var(--gold-500)', borderRadius: 20, padding: '6px 14px', fontSize: 12, fontWeight: 600, marginBottom: 16 }}>
            Serving Zambia&apos;s farming communities
          </div>

          <h1 className={`reveal ${visible ? 'show' : ''} delay-2`} style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)', lineHeight: 1.08, margin: '0 0 1rem 0' }}>
            Grow your farm, secure your legacy — all in one place
          </h1>

          <p className={`reveal ${visible ? 'show' : ''} delay-3`} style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, marginBottom: 20 }}>
            Connect with buyers, access farm advisory services, protect your family with tailored estate planning, and find local talent.
          </p>

          <div className={`reveal ${visible ? 'show' : ''} delay-4`} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 18 }}>
            <Link
              href="/membership/register"
              className="lift-on-hover"
              style={{
                background: 'var(--gold-500)',
                color: '#1F3A22',
                padding: '12px 22px',
                borderRadius: 10,
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-block',
                cursor: 'pointer',
              }}
            >
              Become a member
            </Link>

            <Link
              href="/agriculture"
              className="lift-on-hover"
              style={{
                background: 'transparent',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.22)',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'inline-block',
                cursor: 'pointer',
              }}
            >
              Explore marketplace
            </Link>
          </div>

          {/* Quick feature links */}
          <div className={`reveal ${visible ? 'show' : ''} delay-5`} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              href="/estate-planning"
              className="lift-on-hover"
              style={{
                background: '#fff',
                color: 'var(--green-700)',
                padding: '10px 14px',
                borderRadius: 8,
                border: 'none',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
                cursor: 'pointer',
              }}
            >
              Estate planning
            </Link>
            <Link
              href="/talentlink"
              className="lift-on-hover"
              style={{
                background: '#fff',
                color: 'var(--green-700)',
                padding: '10px 14px',
                borderRadius: 8,
                border: 'none',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
                cursor: 'pointer',
              }}
            >
              Hire talent
            </Link>
            <Link
              href="/enterprise"
              className="lift-on-hover"
              style={{
                background: '#fff',
                color: 'var(--green-700)',
                padding: '10px 14px',
                borderRadius: 8,
                border: 'none',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
                cursor: 'pointer',
              }}
            >
              Find investors
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className={`reveal ${visible ? 'show' : ''} delay-3`} style={{ flex: '0 0 420px', minWidth: 260, display: 'flex', justifyContent: 'center' }} aria-hidden>
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

