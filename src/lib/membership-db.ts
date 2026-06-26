import bcrypt from 'bcryptjs'
import { getDb } from './db'

export type MembershipRecord = {
  id: string
  category: string
  email: string
  name: string
  username: string
  number: string
  address: string
  passwordHash: string
  createdAt: string
}

export async function emailExists(email: string): Promise<boolean> {
  const db = await getDb()
  const result = await db.query('select 1 from membership_accounts where email = $1 limit 1', [
    email.trim().toLowerCase(),
  ])
  return (result.rowCount ?? 0) > 0

}

export async function createAccount(input: {
  category: string
  email: string
  name: string
  username: string
  number: string
  address: string
  password: string
}): Promise<MembershipRecord> {
  const db = await getDb()

  const passwordHash = await bcrypt.hash(input.password, 12)
  const email = input.email.trim().toLowerCase()

  const result = await db.query<MembershipRecord>(
    `insert into membership_accounts
     (category, email, name, username, number, address, password_hash)
     values ($1,$2,$3,$4,$5,$6,$7)
     returning id, category, email, name, username, number, address, password_hash as passwordHash, created_at as createdAt`,
    [input.category, email, input.name, input.username, input.number, input.address, passwordHash]
  )

  return result.rows[0]
}

export async function findAccountByEmail(email: string): Promise<MembershipRecord | null> {
  const db = await getDb()
  const result = await db.query<MembershipRecord>(
    `select id,
            category,
            email,
            name,
            username,
            number,
            address,
            password_hash as passwordHash,
            created_at as createdAt
     from membership_accounts
     where email = $1
     limit 1`,
    [email.trim().toLowerCase()]
  )

  return result.rows[0] ?? null
}

