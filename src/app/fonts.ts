// src/app/fonts.ts
import { Playfair_Display, Montserrat } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display', // CSS variable
  weight: ['400', '700'], // Include weights you need
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', // CSS variable
  weight: ['300', '400', '500', '700'], // Include weights you need
});