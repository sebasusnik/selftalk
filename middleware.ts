import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    const isAuth = !!token
    const isAuthPage =
      req.nextUrl.pathname.startsWith("/signin")
    const isProfilePage = req.nextUrl.pathname.startsWith("/profile")

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/profile", req.url))
      }
      return null
    }

    if (isProfilePage) {
      if (!isAuth) {
        return NextResponse.redirect(new URL("/signin", req.url))
      }
      return null
    }
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true
      },
    },
  }
)

export const config = {
  matcher: ["/profile", "/signin"],
}
