import Footer from '@/components/Footer'
import '../styles/globals.css'
import type { Metadata } from 'next'
import ActiveSectionContextProvider from '@/context/active-section-context';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: '吃吃派对',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth font-custom'>
      <body>
        <ActiveSectionContextProvider>
          <NavBar />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
