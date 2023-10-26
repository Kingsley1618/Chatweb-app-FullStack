import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'
import {ModalProvider} from "@/context/modalContext"
import { ReduxProvider } from '@/reduxProvider'
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
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
       <ModalProvider>
        {children}
        </ModalProvider>
        </ReduxProvider>
        </body>
    </html>
    </ClerkProvider>
  )
}
