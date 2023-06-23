import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { UserMenu } from "./user-menu"

export function SiteHeader({user}) {

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center space-x-4 px-4 md:container sm:justify-between sm:space-x-2">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          { user ?
            <UserMenu user={user}></UserMenu>
            :
            <Link
              href={'/signin'}
              className={buttonVariants({variant:"secondary"})}
            >
              Ingresá
            </Link>
          }
        </div>
      </div>
    </header>
  )
}
