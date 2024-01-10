import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Projects from '@/components/projects'

import Hero from '@/components/Hero/Hero'
import Members from '@/components/Members/Members'
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
        <Hero />
        <Members/>
        <Projects/>
        <Contact/>
        <Footer />
      </body>

    </html>
  )
}
