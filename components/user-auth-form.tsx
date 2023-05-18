"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { signIn } from 'next-auth/react'

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl')

  return (
    <div className={cn("grid gap-4", className)} {...props}>
      <form>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label className="mt-2" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="tuemail@ejemplo.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <button className={cn(buttonVariants())}>
            Accedé con tu e-mail
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            O continuá con
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn("flex gap-3", buttonVariants({ variant: "outline" }), " hover:bg-blue-100")}
        onClick={() => {signIn("google"), { callbackUrl }}}
        disabled={isLoading}
      >
        <Icons.google className="relative h-5 w-5" />
        <span>Google</span>
      </button>
    </div>
  )
}
