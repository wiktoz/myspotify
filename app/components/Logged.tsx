'use client'

import { useSession } from "next-auth/react"
import LinkButton from './LinkButton'

export default function Logged() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return (
      <>
        { session && session.user &&
      <div className="flex flex-row border-4 border-gray-800 rounded-3xl px-5 py-2">
        <img className="w-16 md:w-20 lg:w-20 rounded-full"
             src={session.user?.image || ""}/>
        <div className="flex flex-col px-10 justify-center text-left">
          <p className="font-semibold mb-1">Signed in as</p>
          <p className="text-sm">{session.user.name}</p>
          <p className="text-sm">{session.user.email}</p>
        </div>
      </div>
        }
      <div>
        <LinkButton href='/top/tracks' title='Go to my Fav Tracks'></LinkButton>
        <LinkButton href='/top/artists' title='Go to my Fav Artists'></LinkButton>
      </div>
      </>
    )
  }

  return <p></p>
}