/** @type {import('@prisma/client').PrismaClientOptions} */
const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('Missing DATABASE_URL env var')
}

module.exports = {
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
}

