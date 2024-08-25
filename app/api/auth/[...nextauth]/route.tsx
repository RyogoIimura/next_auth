
import NextAuth from 'next-auth'
// import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import type { Adapter } from 'next-auth/adapters';
// import { User as NextAuthUser } from 'next-auth'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID ?? '',
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    // }),
    GoogleProvider({
      clientId: process.env.Google_CLIENT_ID ?? '',
      clientSecret: process.env.Google_CLIENT_SECRET ?? '',
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }