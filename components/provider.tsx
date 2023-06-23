"use client"

import * as React from "react"
import { SessionProvider } from 'next-auth/react'
import { ThemeProviderProps } from "next-themes/dist/types"

export function Provider({ children }: ThemeProviderProps) {
  return (
    <SessionProvider>
      {/* Set up this provider and uncomment global css variables to use users system based theme

      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      */}
        {children}
      {/* </NextThemesProvider> */}
    </SessionProvider>
  )
}
