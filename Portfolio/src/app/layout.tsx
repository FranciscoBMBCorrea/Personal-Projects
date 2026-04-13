import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Francisco Correa | Portfolio',
  description:
    'Portfolio pessoal de Francisco Correa com foco em design de interiores, desenho 2D e visualizacao 3D.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT">
      <body className="antialiased">{children}</body>
    </html>
  )
}
