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
  const [displayValues, setDisplayValues] = useState<string[]>(
    stats.map((stat) => {
      const numeric = parseInt(stat.value, 10)
      return Number.isFinite(numeric) ? `${numeric === 100 ? 0 : 0}${stat.value.replace(/[0-9]/g, '')}` : stat.value
    })
  )
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

  useEffect(() => {
    if (!isVisible) return

    const targets = stats.map((stat) => {
      const numeric = parseInt(stat.value, 10)
      const suffix = stat.value.replace(/[0-9]/g, '')
      return Number.isFinite(numeric) ? { numeric, suffix } : null
    })

    const duration = 1100
    const start = performance.now()
    let rafId: number

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      setDisplayValues(
        targets.map((target, idx) => {
          if (!target) return stats[idx].value
          const current = Math.round(target.numeric * progress)
          return `${current}${target.suffix}`
        })
      )

      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [isVisible])

  return (
    <div ref={ref} className="stats-bar">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`stats-cell reveal ${isVisible ? 'show' : ''} delay-${Math.min(i + 1, 6)}`}
            style={{
              animationDelay: `${0.1 * i}s`,
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
              {displayValues[i]}
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
