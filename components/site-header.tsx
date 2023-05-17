import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center space-x-4 px-4 md:container sm:justify-between sm:space-x-2">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link
            href={'/signin'}
            className={buttonVariants()}
          >
            Logueate
          </Link>
        </div>
      </div>
    </header>
  )
}
