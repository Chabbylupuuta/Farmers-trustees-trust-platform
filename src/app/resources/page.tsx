import Link from 'next/link'
import Footer from '@/components/home/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources | FTT',
  description:
    'Explore practical resources for farmers and trustees, including guidance, checklists, and digital support.',
}

export default function ResourcesPage() {
  return (
    <>
      <main
        style={{
          padding: '4rem 1.5rem',
          maxWidth: 1000,
          margin: '0 auto',
        }}
      >
        <section
          style={{
            padding: '2.5rem 2.2rem',
            borderRadius: 28,
            background:
              'linear-gradient(145deg, rgba(24,92,59,0.07) 0%, rgba(255,255,255,0.98) 100%)',
            border: '1px solid rgba(31,92,59,0.10)',
            boxShadow: '0 10px 40px rgba(24,92,59,0.06)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 18px 6px 14px',
              background: 'var(--green-50)',
              color: 'var(--green-700)',
              borderRadius: 9999,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.3px',
              marginBottom: 18,
              border: '1px solid rgba(31,92,59,0.06)',
            }}
          >
            <span style={{ fontSize: 16 }}>📚</span> Resources
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.0rem, 4vw, 2.6rem)',
              lineHeight: 1.1,
              margin: '0 0 1rem 0',
              color: 'var(--green-900)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            Practical guidance for farmers & trustees
          </h1>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 26,
              maxWidth: 760,
            }}
          >
            Browse our collection of simple, actionable resources designed to
            support farm planning, record-keeping, and estate/trust
            stewardship.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 18,
            }}
          >
            <ResourceCard
              title="Farm planning checklist"
              description="A step-by-step guide for seasonal planning, inputs, and budgeting."
              meta="Printable"
            />
            <ResourceCard
              title="Record-keeping templates"
              description="Simple templates to track harvests, expenses, and sales outcomes."
              meta="Templates"
            />
            <ResourceCard
              title="Trust basics"
              description="An easy introduction to trusteeship, roles, and responsible asset stewardship."
              meta="Guide"
            />
            <ResourceCard
              title="Digital safety tips"
              description="Protect your data and account access with practical security habits."
              meta="Tips"
            />
          </div>

          <div
            style={{
              marginTop: 26,
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
