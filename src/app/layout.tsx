import '../styles/globals.css'
import type { Metadata } from 'next'



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
        {children}
      </body>
    </html>
  )
}
