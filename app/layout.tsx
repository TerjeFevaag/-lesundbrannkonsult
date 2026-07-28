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
  metadataBase: new URL('https://www.ålesundbrannkonsult.no'),
  title: 'Brannprosjektering i Ålesund | Brannkonsult AS',
  description: 'Sentralt godkjent brannrådgiver med over 1 200 prosjekter. Brannkonsept, brannprosjektering og branninspeksjon i Ålesund, Sunnmøre og hele Norge. Fastpris alltid.',
  alternates: { canonical: 'https://www.ålesundbrannkonsult.no' },
  openGraph: {
    title: 'Brannprosjektering i Ålesund | Brannkonsult AS',
    description: 'Sentralt godkjent brannrådgiver med over 1 200 prosjekter. Brannkonsept, brannprosjektering og branninspeksjon i Ålesund, Sunnmøre og hele Norge.',
    url: 'https://www.ålesundbrannkonsult.no',
    siteName: 'Brannkonsult AS',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Brannkonsult AS – brannprosjektering i Ålesund' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'Brannkonsult AS',
  description: 'Brannprosjektering, brannkonsept og branninspeksjon i Ålesund og på Sunnmøre. Sentralt godkjent foretak.',
  telephone: '+4797349273',
  email: 'post@alesundbrannkonsult.no',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Haakon VII\'s gate 6',
    addressLocality: 'Oslo',
    postalCode: '0161',
    addressCountry: 'NO',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
  ],
  url: 'https://www.ålesundbrannkonsult.no',
  priceRange: 'Fra kr 15 000',
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
