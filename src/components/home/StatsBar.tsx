'use client'

import { useState, useEffect, useRef } from 'react'

const stats = [
  { value: '6', label: 'Membership categories' },
  { value: '4', label: 'Service pillars' },
  { value: 'Lusaka', label: 'Based in Zambia' },
  { value: '100%', label: 'Digital & mobile-first' },
]

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
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
              animation: isVisible ? `slideInUp 0.6s ease-out ${0.1 * i}s forwards` : 'none',
              opacity: 0,
            }}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: 'var(--green-700)',
                lineHeight: 1,
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--gold-500)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--green-700)'
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
