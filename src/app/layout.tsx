import type { Metadata } from 'next'
import { Geist, Geist_Mono, Outfit, Ovo } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const ovo = Ovo({
  variable: '--font-ovo',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'FullStack Developer Portfolio',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
