import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const authOptions = {
  site: process.env.SITE || 'http://localhost:3000',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    })
  ],
  pages:{
    signIn:'/signin'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}
