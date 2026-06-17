import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Farmers & Trustees Trust | Empowering Communities in Zambia',
  description:
    'A trusted digital platform providing agricultural support, estate planning, recruitment, and investor connections in Zambia and Africa.',
  keywords: ['farming', 'Zambia', 'estate planning', 'recruitment', 'investment', 'agriculture'],
  openGraph: {
    title: 'Farmers & Trustees Trust',
    description: 'Empowering Farmers. Protecting Families. Building Generations.',
    locale: 'en_ZM',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
