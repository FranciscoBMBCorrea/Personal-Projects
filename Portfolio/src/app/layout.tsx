import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Francisco Beça Múrias | Portfolio',
  description:
    'Portfolio pessoal de Francisco Beça Múrias com foco em design de interiores, desenho 2D e visualizacao 3D.',
  applicationName: 'Francisco Beça Múrias Portfolio',
  category: 'design',
  keywords: [
    'design de interiores',
    'interior designer',
    '2D design',
    '3D visualization',
    'renders',
    'layout de interiores',
  ],
  openGraph: {
    title: 'Francisco Beça Múrias | Interior Design Portfolio',
    description:
      'Portfolio bilingue de design de interiores, desenho 2D e visualizacao 3D com linguagem minimalista e elegante.',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco Beça Múrias | Interior Design Portfolio',
    description:
      'Portfolio bilingue de design de interiores, desenho 2D e visualizacao 3D.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
