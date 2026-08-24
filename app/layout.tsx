import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingActions from '@/components/FloatingActions'

export const metadata: Metadata = {
  title: 'Ateka Logistics | Transport & Logistics Service Provider',
  description:
    'Ateka Logistics is a professionally managed transportation and logistics company delivering reliable, safe, and efficient road freight solutions across India.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-w-0 overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
