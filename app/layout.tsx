
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
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400&f[]=clash-display@300&f[]=nunito@400&f[]=bebas-neue@400&f[]=sentient@500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LoaderProvider>
          <Navbar />
          {children}
        </LoaderProvider>
      </body>
    </html>
  )
}