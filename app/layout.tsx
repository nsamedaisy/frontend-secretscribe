"use client"
import { GoogleOAuthProvider } from '@react-oauth/google'
// import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'
// import { GOOGLE_CLIENT_ID } from './_components/constant'




// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}> */}
      <body>{children}</body>
      <Toaster richColors position='top-right' />
      {/* </GoogleOAuthProvider> */}
    </html>
  )
}
