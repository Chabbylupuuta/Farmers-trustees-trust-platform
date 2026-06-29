import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import { prisma } from '@/lib/prisma'
import { loginSchema } from '@/lib/validation'

const credentialsSchema = loginSchema

type Credentials = z.infer<typeof credentialsSchema>

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' as const },
  pages: {
    signIn: '/membership/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsed = credentialsSchema.safeParse(credentials)
        if (!parsed.success) return null

        const { email, password } = parsed.data as Credentials

        const user = await prisma.user.findUnique({
          where: { email: email.toLowerCase() },
          include: {
            farmer: true,
            student: true,
            employer: true,
            trustee: true,
            investor: true,
          },
        })

        if (!user) return null
        const ok = await bcrypt.compare(password, user.password)
        if (!ok) return null

        // NextAuth expects a plain user object.
        return {
          id: user.id,
          email: user.email,
          role: user.role,
          status: user.status,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = (user as any).id
        token.role = (user as any).role
        token.status = (user as any).status
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        ;(session.user as any).id = token.userId
        ;(session.user as any).role = token.role
        ;(session.user as any).status = token.status
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

