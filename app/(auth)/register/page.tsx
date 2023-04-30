import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from '@/components/user-auth-form';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <div className="container absolute inset-0 flex w-screen flex-col items-center justify-center">
    <Link
      href="/"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute left-4 top-4 md:left-8 md:top-8"
      )}
    >
      <>
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        Volver
      </>
    </Link>
    <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        {/* <span className="mx-auto h-6 w-6">&#129504;</span> */}
        <h1 className="text-2xl font-semibold tracking-tight">
          Bienvenido
        </h1>
        <p className="text-sm text-muted-foreground">
          Creá tu cuenta para empezar, puedes ingresar tu nombre y mail, o acceder con Google
        </p>
      </div>
      <UserAuthForm register />
      <p className="px-8 text-center text-sm text-muted-foreground">
        <Link
          href="/login"
          className="hover:text-brand underline underline-offset-4"
        >
          Ya tienes una cuenta? Haz click aquí
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Page;
