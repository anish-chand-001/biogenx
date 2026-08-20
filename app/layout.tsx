import type { Metadata } from 'next'
import './globals.css'

import Navbar from '@/components/Navbar/Navbar'
import LoaderProvider from './providers/LoaderProvider'

// 1. Export the metadata object here
export const metadata: Metadata = {
  title: 'BioGenX Lifesciences | Science-backed Healthcare',
  description: 'BioGenX Lifesciences delivers innovative, science-backed healthcare solutions for women, pediatric care, and growing families.',
  keywords: ['healthcare', 'pharmaceuticals', 'womens health', 'pediatric care', 'BioGenX'],
  openGraph: {
    title: 'BioGenX Lifesciences',
    description: 'Empowering Motherhood. Nurturing Childhood.',
    url: 'https://yourwebsite.com', /* Update with your actual domain later */
    siteName: 'BioGenX Lifesciences',
    images: [
      {
        url: '/hero/biogenx-hero.png', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

// 2. Your layout component remains exactly the same
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