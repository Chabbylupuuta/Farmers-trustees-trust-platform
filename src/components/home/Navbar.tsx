'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Agriculture', href: '/agriculture' },
  { label: 'Contact', href: '/contact' },
  { label: 'Estate Planning', href: '/estate-planning' },
  { label: 'TalentLink', href: '/talentlink' },
  { label: 'Invest', href: '/enterprise' },
  { label: 'Events', href: '/events' },
  { label: 'Resources', href: '/resources' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const pathname = usePathname()

  return (
    <header style={{ background: 'var(--green-700)', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'all 0.3s ease' }}>
      <nav
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 1.5rem',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', transition: 'transform 0.3s ease' }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: 'var(--gold-500)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 162, 39, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Leaf icon SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F3A22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22V12M12 12C12 12 7 9 5 5c5.5 0 9 3 7 7M12 12C12 12 17 9 19 5c-5.5 0-9 3-7 7" />
            </svg>
          </div>
          <div>
            <div style={{ color: '#fff', fontSize: 14, fontWeight: 500, lineHeight: 1.2 }}>
              Farmers &amp; Trustees Trust
            </div>
            <div style={{ color: 'var(--gold-500)', fontSize: 10, fontWeight: 400 }}>
              Empowering Communities
            </div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive ? 'var(--gold-500)' : 'rgba(255,255,255,0.82)',
                  fontSize: 13,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  paddingBottom: 2,
                  borderBottom: isActive ? '2px solid var(--gold-500)' : '2px solid transparent',
                  fontWeight: isActive ? 700 : 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--gold-500)'
                  e.currentTarget.style.borderBottom = '2px solid var(--gold-500)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? 'var(--gold-500)' : 'rgba(255,255,255,0.82)'
                  e.currentTarget.style.borderBottom = isActive ? '2px solid var(--gold-500)' : '2px solid transparent'
                }}
              >
                {link.label}
              </Link>
            )
          })}

          <Link href="/membership/register">
            <button
              style={{
                background: 'var(--gold-500)',
                color: '#1F3A22',
                fontSize: 13,
                fontWeight: 600,
                padding: '8px 18px',
                borderRadius: 7,
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(201, 162, 39, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Become a member
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            padding: 4,
            transition: 'all 0.3s ease',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.7'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1'
          }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: 'var(--green-800)',
            padding: '1rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            animation: 'slideInUp 0.3s ease-out forwards',
          }}
          className="mobile-nav"
        >
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{ 
                  color: isActive ? 'var(--gold-500)' : 'rgba(255,255,255,0.85)', 
                  fontSize: 15, 
                  textDecoration: 'none',
                  animation: `slideInLeft 0.4s ease-out ${0.05 * idx}s forwards`,
                  opacity: 0,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
          <Link href="/membership/register" onClick={() => setMenuOpen(false)}>
            <button
              style={{
                background: 'var(--gold-500)',
                color: '#1F3A22',
                fontWeight: 600,
                padding: '10px 0',
                borderRadius: 7,
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                fontSize: 14,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(0.98)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              Become a member
            </button>
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
