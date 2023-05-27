"use client"

import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

interface Props {}

const Page: React.FC<Props> = () => {
  const { data: session } = useSession()
  console.log(session)
  return (
    <>
      <div>{`Profile ${session?.user?.name}`}</div>
      <Button
        onClick={() => {signOut({callbackUrl:"/"})}}
      >
        logout
      </Button>
    </>
  )
}

export default Page;
