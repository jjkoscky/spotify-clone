import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify-Copy',
  description: 'Site de estudo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`
      inter.className
      bg-zinc-900 text-zinc-50
      `}>{children}</body>
    </html>
  )
}
