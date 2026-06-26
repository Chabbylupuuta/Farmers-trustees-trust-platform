import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { findAccountByEmail } from '@/lib/membership-db'

export async function POST(req: Request) {
  const formData = await req.formData()

  const category = String(formData.get('category') ?? '').trim().toLowerCase() || 'student'
  const email = String(formData.get('email') ?? '').trim()
  const password = String(formData.get('password') ?? '').trim()

  if (!email || !password) {
    return NextResponse.json({ ok: false, error: 'Missing credentials' }, { status: 400 })
  }

  const account = await findAccountByEmail(email)

  const ok = account ? await bcrypt.compare(password, account.passwordHash) : false

  if (!account || !ok) {
    const url = new URL('/membership/login', req.url)
    url.searchParams.set('category', category)
    url.searchParams.set('email', email)
    // Demo error signalling
    url.searchParams.set('error', 'invalid')
    return NextResponse.redirect(url)
  }

  // No real session implemented; redirect to home for now.
  // If you have a member dashboard route later, we can wire it here.
  const url = new URL('/', req.url)
  url.searchParams.set('login', 'success')
  url.searchParams.set('category', account.category)
  url.searchParams.set('email', account.email)
  return NextResponse.redirect(url)
}


