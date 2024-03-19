'use client'

import '@/styles/globals.css'
import Transition from '@/components/Transition'
import Footer from '@/components/Footer'
import {ReactNode} from "react"
import { SessionProvider } from 'next-auth/react'

function Layout({children}:{children:ReactNode}) {
  return (
      <html lang="en">
        <body>
            <SessionProvider>
                <Transition>
                  {children}
                  <Footer/>
                </Transition>
            </SessionProvider>
        </body>
      </html>
  )
}

export default Layout
