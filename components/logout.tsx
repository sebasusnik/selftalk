"use client"

import React from 'react';
import { Button } from './ui/button';
import { signOut } from 'next-auth/react';

interface Props {}

const Logout: React.FC<Props> = () => {
  return (
    <Button
        onClick={() => {signOut({callbackUrl:"/"})}}
      >
        Salir
    </Button>
  )
}

export default Logout;
