import { getDb } from './db'

export async function createContactMessage(input: {
  name: string
  email: string
  phone: string
  location: string
  message?: string
}): Promise<void> {
  const db = await getDb()
  await db.query(
    `insert into contact_messages (name, email, phone, location, message)
     values ($1,$2,$3,$4,$5)`,
    [input.name, input.email.trim().toLowerCase(), input.phone, input.location, input.message ?? null]
  )
}

