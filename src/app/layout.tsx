import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { Header } from '@/components/header/index'

export const metadata: Metadata = {
  title: 'Master Fit',
  description: 'A melhor Master da região',
  keywords: ['Master', 'musculação', 'fit'],
  openGraph: {
    title: 'Master Fit',
    images: [`${process.env.NEXT_PUBLIC_URL}/masterfit.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <p style={{ textAlign: 'center', marginTop: 54, marginBottom: 24 }}>
          Todos os direitos reservados @{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  )
}
