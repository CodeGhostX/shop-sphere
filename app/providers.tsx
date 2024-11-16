"use client"

import Footer from "@/components/Home/Footer"
import Nav from "@/components/Home/Nav"
import { Toaster } from "@/components/ui/toaster"
import StoreProvider from "@/StoreProvider/StoreProvider"
import { SessionProvider } from "next-auth/react"

const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <SessionProvider>
      <StoreProvider>
        <Nav/>
        {children}
        <Toaster/>
        <Footer/>
      </StoreProvider>
    </SessionProvider>
  )
}

export default Providers