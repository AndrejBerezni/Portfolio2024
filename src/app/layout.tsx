import type { Metadata } from 'next'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import { poppins } from './fonts'

import './globals.css'

export const metadata: Metadata = {
  title: 'Andrej Berezni',
  description: 'Fullstack Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex min-h-screen w-screen flex-col overflow-x-hidden overscroll-x-none bg-background px-4 pt-4 text-primary md:px-6 lg:px-32 lg:pt-8 xl:px-64`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
