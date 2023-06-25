import React from 'react';
import { getCurrentUser } from '@/lib/session';

const Page = async () => {
  const user = await getCurrentUser()
  return (
    <>
      <div>{`Profile ${user?.name?.split(' ')[0]}`}</div>
    </>
  )
}

export default Page;
