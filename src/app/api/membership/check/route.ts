import { NextResponse } from 'next/server'
import { emailExists } from '@/lib/membership-db'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null) as { email?: string } | null
  const email = body?.email ?? ''

  if (!email) {
    return NextResponse.json({ ok: false, error: 'Missing email' }, { status: 400 })
  }

  return NextResponse.json({ ok: true, exists: await emailExists(email) })
}


