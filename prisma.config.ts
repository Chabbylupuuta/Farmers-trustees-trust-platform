import { Prisma } from '@prisma/client'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('Missing DATABASE_URL env var')
}

export const prismaConfig = {
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
} satisfies Prisma.PrismaClientOptions


