import "@/styles/globals.css"

import { SiteHeader } from "@/components/site-header"
import { getCurrentUser } from "@/lib/session"
import { notFound } from "next/navigation"


export default async function HomeLayout({ children }) {
  const user = await getCurrentUser()

  return (
    <>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader user={user} />
              <div className="flex-1">{children}</div>
            </div>
    </>
  )
}
