// src/app/layout.tsx

import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-cinzel' 
})

export const metadata: Metadata = {
  title: 'Salvadores - Wine Bar & Restaurant',
  description: 'Experience unparalleled luxury and elegance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        // Using the CSS variables we defined for the fonts
        className={`${inter.variable} ${cinzel.variable} font-[var(--font-inter)] bg-[#0a0a0a] text-gray-200 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}