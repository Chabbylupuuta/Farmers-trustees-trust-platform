import { NextResponse } from 'next/server'
import { createAccount, emailExists } from '@/lib/membership-db'

export async function POST(req: Request) {
  const formData = await req.formData()

  const category = String(formData.get('category') ?? '').trim().toLowerCase()
  const email = String(formData.get('email') ?? '').trim()
  const name = String(formData.get('name') ?? '').trim()
  const username = String(formData.get('username') ?? '').trim()
  const number = String(formData.get('number') ?? '').trim()
  const address = String(formData.get('address') ?? '').trim()
  const password = String(formData.get('password') ?? '').trim()

  if (!category || category !== 'student') {
    return NextResponse.json({ ok: false, error: 'Invalid category' }, { status: 400 })
  }

  if (!email || !name || !username || !number || !address || !password) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
  }

  if (await emailExists(email)) {
    const url = new URL('/membership/login', req.url)
    url.searchParams.set('category', 'student')
    url.searchParams.set('email', email)
    return NextResponse.redirect(url)
  }

  await createAccount({
    category,
    email,
    name,
    username,
    number,
    address,
    password,
  })

  // After creating a new account, send the user to login.
  // In a real app we would create a session/token here.
  const url = new URL('/membership/login', req.url)
  url.searchParams.set('category', 'student')
  url.searchParams.set('email', email)
  return NextResponse.redirect(url)
}


