'use client'

import { FaSpotify } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { signIn, signOut, useSession } from "next-auth/react"

export default function SpotifyLoginButton(){
    const { data: session, status } = useSession()

    if (status === "authenticated"){
        return(
            <>
            <div className="flex justify-center">
                <button 
                onClick={() => signOut()}
                className="p-3 px-20 spotify-green rounded-3xl hover:opacity-80 w-full">
                    <FiLogOut className='inline text-xl'></FiLogOut>
                    <span className="px-2 text-lg align-middle">Sign Out</span>
                </button>
            </div>
            </>
        )
    }
    else
    {
        return(
            <div className="flex justify-center">
                <button 
                onClick={() => signIn("spotify")}
                className="p-3 px-20 spotify-green rounded-3xl hover:opacity-80 w-full">
                    <FaSpotify className='inline text-xl'></FaSpotify>
                    <span className="px-2 text-lg align-middle">Login with Spotify</span>
                </button>
            </div>
        )
    }
}