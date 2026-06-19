

import './globals.css'

import Navbar from '@/components/Navbar/Navbar'
import LoaderProvider from './providers/LoaderProvider'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LoaderProvider>
          <Navbar />

          {children}
        </LoaderProvider>
      </body>
    </html>
  )
}