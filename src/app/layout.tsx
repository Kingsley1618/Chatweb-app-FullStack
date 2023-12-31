import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'
import {ModalProvider} from "@/context/modalContext"
import {ScrollProvider} from "@/context/scrollContext"
import { ReduxProvider } from '@/reduxProvider'
import {SideBarProvider} from "@/context/sideBarContext"
import {AuthProvider} from "@/context/AuthContext"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Group Chat',
  description: 'An inspiration made by Kingsley Okeze',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <ReduxProvider>
          <ScrollProvider>
          <SideBarProvider>
       <ModalProvider>
        {children}
        </ModalProvider>
        </SideBarProvider>
        </ScrollProvider>
        </ReduxProvider>
        </AuthProvider>
        </body>
    </html>
    </ClerkProvider>
  )
}
