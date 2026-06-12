import type { Metadata } from 'next'
import { Lato, Dancing_Script } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})
const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aalesundbrannkonsult.no'),
  title: 'Brannprosjektering i Ålesund | Ålesund Brannkonsult',
  description: 'Ålesund Brannkonsult tilbyr brannkonsept, brannprosjektering og branntilsyn i Ålesund og på Sunnmøre. Sentralt godkjent foretak. Fastpris.',
  alternates: { canonical: 'https://www.aalesundbrannkonsult.no' },
  openGraph: {
    title: 'Brannprosjektering i Ålesund | Ålesund Brannkonsult',
    description: 'Ålesund Brannkonsult tilbyr brannkonsept, brannprosjektering og branntilsyn i Ålesund og på Sunnmøre.',
    url: 'https://www.aalesundbrannkonsult.no',
    siteName: 'Ålesund Brannkonsult',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Ålesund Brannkonsult' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ålesund Brannkonsult AS',
  description: 'Brannprosjektering og brannkonsept i Ålesund',
  telephone: '+4700000000',
  email: 'post@aalesundbrannkonsult.no',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ålesund',
    addressCountry: 'NO',
  },
  url: 'https://www.aalesundbrannkonsult.no',
  priceRange: 'Fra kr 15 000',
  hasCredential: 'Sentralt godkjent tiltaksklasse 1 og 2',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className={`${lato.variable} ${dancing.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={lato.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
