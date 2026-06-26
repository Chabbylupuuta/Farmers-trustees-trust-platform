import { NextResponse } from 'next/server'
import { createContactMessage } from '@/lib/contact-db'

const RECEIVER_EMAIL = 'mgchipashi03@gmail.com'

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | {
        name?: string
        email?: string
        phone?: string
        location?: string
        message?: string
      }
    | null

  const name = (body?.name ?? '').trim()
  const email = (body?.email ?? '').trim()
  const phone = (body?.phone ?? '').trim()
  const location = (body?.location ?? '').trim()
  const message = (body?.message ?? '').trim()

  if (!name || !email || !phone || !location) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
  }

  // Persist to DB
  await createContactMessage({ name, email, phone, location, message: message || undefined })

  // “Send to email” in this implementation:
  // without SMTP integration, we return the receiver address so you can wire a mailer later.
  // If you want real email delivery, we should add nodemailer + SMTP env vars.
  return NextResponse.json({ ok: true, to: RECEIVER_EMAIL })
}

