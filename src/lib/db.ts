import pg from 'pg'

const { Pool } = pg

// Singleton pool to reuse connections across requests.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // In serverless/Vercel-style environments, pool should be small.
  max: 5,
})

export async function getDb() {
  return pool
}

