'use client'

import PeriodButtons from '@/components/PeriodButtons'
import Artists from "@/components/Artists"
import { SessionProvider } from 'next-auth/react'
import Link from 'next/link'
import {CgArrowLeft} from 'react-icons/cg'

export default function TopArtists({params}: {params: { period: string }}){
    const period = params.period || "4-weeks"

    return (
        <SessionProvider>
        <div>
          <main>
            <div className="spotify-black flex flex-col justify-center text-white px-5 md:px-20">
                <div className="my-8">
                    <h1 className="font-bold text-5xl my-2">Your top Artists <span className="capitalize">{period}</span></h1>
                    <PeriodButtons type="artists" period={period} />
                    <Link href="/">
                      <p className="text-stone-400 hover:cursor-pointer my-2"><CgArrowLeft className="inline"/> Go Back</p>
                    </Link>
                </div>
                <div>
                    <Artists period={period} />
                </div>
            </div>
          </main>
        </div>
        </SessionProvider>
      )
}

