'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const payload = {
        name: String(formData.get('name') ?? ''),
        email: String(formData.get('email') ?? ''),
        phone: String(formData.get('phone') ?? ''),
        location: String(formData.get('location') ?? ''),
        message: String(formData.get('message') ?? ''),
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error ?? 'Failed to send message')
      }

      alert("Thank you! We'll be in touch soon.")
      form.reset()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setSubmitting(false)
    }
  }


  return (
    <form
      onSubmit={onSubmit}
      style={{
        padding: '2.5rem',
        borderRadius: 32,
        background: 'white',
        boxShadow: '0 20px 50px rgba(24,92,59,0.08)',
        border: '1px solid rgba(31,92,59,0.08)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        }}
      >
        <div>
          <label
            htmlFor="name"
            style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--green-800)',
              marginBottom: 8,
            }}
          >
            👤 Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your full name"
            style={{
              width: '100%',
              padding: '14px 18px',
              fontSize: '1rem',
              borderRadius: 14,
              border: '2px solid rgba(31,92,59,0.12)',
              background: 'rgba(248,250,248,0.8)',
              color: 'var(--green-900)',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--green-800)',
              marginBottom: 8,
            }}
          >
            📧 Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            style={{
              width: '100%',
              padding: '14px 18px',
              fontSize: '1rem',
              borderRadius: 14,
              border: '2px solid rgba(31,92,59,0.12)',
              background: 'rgba(248,250,248,0.8)',
              color: 'var(--green-900)',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--green-800)',
              marginBottom: 8,
            }}
          >
            📱 Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="+260..."
            style={{
              width: '100%',
              padding: '14px 18px',
              fontSize: '1rem',
              borderRadius: 14,
              border: '2px solid rgba(31,92,59,0.12)',
              background: 'rgba(248,250,248,0.8)',
              color: 'var(--green-900)',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div>
          <label
            htmlFor="location"
            style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--green-800)',
              marginBottom: 8,
            }}
          >
            📍 Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            placeholder="e.g., Lusaka, Zambia"
            style={{
              width: '100%',
              padding: '14px 18px',
              fontSize: '1rem',
              borderRadius: 14,
              border: '2px solid rgba(31,92,59,0.12)',
              background: 'rgba(248,250,248,0.8)',
              color: 'var(--green-900)',
              boxSizing: 'border-box',
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label
          htmlFor="message"
          style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: 'var(--green-800)',
            marginBottom: 8,
          }}
        >
          💬 Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us how we can help you..."
          style={{
            width: '100%',
            padding: '14px 18px',
            fontSize: '1rem',
            borderRadius: 14,
            border: '2px solid rgba(31,92,59,0.12)',
            background: 'rgba(248,250,248,0.8)',
            color: 'var(--green-900)',
            boxSizing: 'border-box',
            resize: 'vertical',
          }}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        style={{
          marginTop: '1.5rem',
          width: '100%',
          padding: '16px 32px',
          fontSize: '1.1rem',
          fontWeight: 700,
          borderRadius: 14,
          border: 'none',
          background: 'var(--green-700)',
          color: '#fff',
          cursor: submitting ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s ease',
          opacity: submitting ? 0.7 : 1,
        }}
      >
        {submitting ? 'Sending...' : 'Send Message →'}
      </button>

      <p
        style={{
          marginTop: '1rem',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          textAlign: 'center',
        }}
      >
        We typically respond within 24-48 hours.
      </p>
    </form>
  )
}

