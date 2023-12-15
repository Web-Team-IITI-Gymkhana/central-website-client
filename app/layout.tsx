import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Central Website',
  description: 'Central Website of IIT INDORE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body >
        <Navbar />
        <main className='relative overflow-hidden'>
        {children}
        </main>
       <Contact/>
        
        <Footer />
      </body>

    </html>
  )
}
