import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
})

// Using a new, elegant serif font for a modern luxury feel
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'], 
  variable: '--font-cormorant' 
})

export const metadata: Metadata = {
  title: 'Salvadores - Wine Bar & Restaurant',
  description: 'Experience unparalleled luxury and elegance in fine dining.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${cormorant.variable} font-sans bg-[#0a0a0a] text-gray-200 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}