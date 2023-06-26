"use client"
import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const metadata: Metadata = {
  title: "404 Page not found",
  description: "Error 404, page not found",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function NotFound() {
  const router = useRouter()
  return (
    <div className='container absolute inset-0 flex w-screen flex-col items-center justify-center'>
      <section className='mx-auto mb-10 flex flex-col items-center justify-center gap-3 space-y-4 sm:w-[500px]'>
        <Badge variant={'destructive'} className=''>Error 404</Badge>
        <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>Página no encontrada</h2>
        <p className="text-center text-xl text-muted-foreground">Lo sentimos, la página que buscas no existe o ha sido removida.</p>
        <div className='flex w-full justify-center gap-4 pt-5'>
          <Button
            type='button'
            variant={'outline'}
            className=''
            onClick={() => router.back()}
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            Volver atrás
          </Button>
          <Link
            href={'/'}
            className={cn(buttonVariants(), '')}
          >
            Ir al comienzo
          </Link>
        </div>
      </section>
    </div>
  )
}
