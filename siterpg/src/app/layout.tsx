import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Navbar} from '../components/navbar'
import { Sidebar } from '@/components/sidebar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'rpg dos anão e dos gigantes 👍',
  description: 'ainda está em construção, volte mais tarde :D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <Sidebar />
        {children}
      </body>
    </html>
  )
}
