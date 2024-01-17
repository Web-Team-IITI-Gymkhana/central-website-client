import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Projects from '@/components/projects'

import Hero from '@/components/Hero/Hero'
import Events from '@/components/Events/Events'
import Members from '@/components/Members/Members'

// import Form1 from '@/pages/Form1/Form1'
// import Form2 from '@/pages/Form2/Form2'
// import Template1 from '@/pages/Template1/Template1'
// import Template2 from '@/pages/Template2/Template2'
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
        <Events />
        <Members/>
        {/* <Form1/>
        
        <Form2/>
        <Template1/>
        <Template2/> */}
        <Projects/>
        <Contact/>
        <Footer />
      </body>

    </html>
  )
}
