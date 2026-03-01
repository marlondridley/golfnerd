import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'The Physics of the Wedge — Technical Field Guide',
  description: 'Angle of Attack, Spin Loft, Friction Limits, and the Mathematics of Precision Wedge Striking',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
