import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'

import { buildOgImageUrl, seoKeywords, siteUrl } from '@/lib/seo'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Francisco Beça Múrias | Portfolio',
  description:
    'Portfolio pessoal de Francisco Beça Múrias com foco em design de interiores, desenho 2D, modelação 3D e visualização de interiores.',
  applicationName: 'Francisco Beça Múrias Portfolio',
  category: 'design',
  keywords: seoKeywords,
  openGraph: {
    title: 'Francisco Beça Múrias | Interior Design Portfolio',
    description:
      'Portfolio bilingue de design de interiores, desenho 2D, modelação 3D e visualização de interiores com linguagem minimalista e elegante.',
    locale: 'pt_PT',
    type: 'website',
    url: siteUrl,
    images: [
      {
        url: buildOgImageUrl({
          locale: 'pt',
          title: 'Francisco Beça Múrias | Interior Design Portfolio',
          description:
            'Designer de interiores, desenho 2D, modelação 3D e visualização de interiores.',
        }),
        width: 1200,
        height: 630,
        alt: 'Francisco Beça Múrias portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco Beça Múrias | Interior Design Portfolio',
    description:
      'Portfolio bilingue de design de interiores, desenho 2D, modelação 3D e visualização de interiores.',
    images: [
      buildOgImageUrl({
        locale: 'pt',
        title: 'Francisco Beça Múrias | Interior Design Portfolio',
        description:
          'Designer de interiores, desenho 2D, modelação 3D e visualização de interiores.',
      }),
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={notoSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
