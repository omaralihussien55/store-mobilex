
import { nextauthOption } from "@/app/_lib/nextauthOption"
import NextAuth from "next-auth"

const handler = NextAuth(nextauthOption)

export { handler as GET, handler as POST }