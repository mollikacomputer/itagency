import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Best local seo and web design development services in madaripur',
  description: 'Web Design Development and local seo expert in madaripur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
      {children}
      </body>
    </html>
  )
}
