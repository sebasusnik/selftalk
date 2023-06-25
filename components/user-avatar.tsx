"use client"

import { AvatarProps } from "@radix-ui/react-avatar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"
import { User } from "next-auth"

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name">
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
        <AvatarImage className="h-10 w-10 rounded-full md:absolute md:left-1 md:top-1 md:h-8 md:w-8" alt="Picture" src={user.image ? user.image : undefined} />
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <Icons.user className="h-4 w-4" />
        </AvatarFallback>
    </Avatar>
  )
}

