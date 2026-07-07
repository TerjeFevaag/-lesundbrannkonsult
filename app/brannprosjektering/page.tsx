import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Brannprosjektering',
  name: 'Brannprosjektering i Ålesund',
  description: 'Brannprosjektering for tilbygg, nybygg, bruksendring og rehabilitering i Ålesund og på Sunnmøre. Fastpris alltid.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Brannkonsult AS',
    url: 'https://www.ålesundbrannkonsult.no',
  },
  areaServed: [
    { '@type': 'City', name: 'Ålesund' },
    { '@type': 'AdministrativeArea', name: 'Sunnmøre' },
    { '@type': 'AdministrativeArea', name: 'Møre og Romsdal' },
  ],
  offers: {
    '@type': 'Offer',
    priceCurrency: 'NOK',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: 15000,
      priceCurrency: 'NOK',
      description: 'Fra kr 15 000 ekskl. mva. i tiltaksklasse 2',
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.ålesundbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Brannprosjektering', item: 'https://www.ålesundbrannkonsult.no/brannprosjektering' },
  ],
}

export const metadata: Metadata = {
  title: 'Brannprosjektering i Ålesund | Brannkonsult AS',
  description: 'Brannprosjektering i Ålesund for tilbygg, nybygg og bruksendring. Sentralt godkjent rådgiver med 1 200+ prosjekter. Fastpris alltid — svar innen 24 timer.',
  alternates: { canonical: 'https://www.ålesundbrannkonsult.no/brannprosjektering' },
}

const faqItems = [
  { question: 'Hva koster brannprosjektering i Ålesund?', answer: 'Fra ca. 15 000 kr ekskl. mva. i tiltaksklasse 2. Vi tilbyr alltid fastpris — uansett hvor i landet prosjektet er.' },
  { question: 'Trenger jeg brannprosjektering for tilbygg?', answer: 'Ja, de fleste søknadspliktige tiltak krever brannprosjektering.' },
  { question: 'Tar dere oppdrag utenfor Ålesund?', answer: 'Ja, vi leverer brannprosjektering i hele Norge. Ålesund og Sunnmøre er basen vår, men vi bistår prosjekter i Møre og Romsdal, på Vestlandet og ellers i landet. De fleste saker løses digitalt uten befaring.' },
  { question: 'Er befaring nødvendig?', answer: 'Vanligvis ikke. Digitale tegninger er som regel tilstrekkelig — noe som gjør det enkelt å jobbe med oss uansett hvor prosjektet er.' },
  { question: 'Hva trenger dere for pristilbud?', answer: 'Adresse, plantegninger og en kort prosjektbeskrivelse. Vi svarer med fastpris innen 24 timer.' },
  { question: 'Hvor kan jeg lese mer om brannprosjektering som fag?', answer: 'brannkonsult.no har en grundig <a href="https://www.brannkonsult.no/brannprosjektering/" class="underline">faginnføring i brannprosjektering</a> som forklarer regelverk, krav og prosess.' },
]

export default function BrannprosjekteringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="px-4 sm:px-8 pt-8 pb-0 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto">
          <div className="bg-brand-dark rounded-[30px] px-8 lg:px-16 py-16 lg:py-24">
            <p className="font-accent text-brand-orange text-xl mb-4">Tjenester</p>
            <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Brannprosjektering</h1>
            <div className="w-20 h-1.5 bg-brand-orange mb-8" />
            <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet i Ålesund og på Sunnmøre. Fastpris alltid.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-8 space-y-8">
          <ScrollReveal>
            <div className="bg-brand-white rounded-[30px] p-8 lg:p-12 border border-brand-gray">
              <h2 className="text-brand-black text-2xl font-black mb-5">Når er det behov for brannprosjektering?</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {['Tilbygg og påbygg', 'Ny boenhet', 'Bruksendring', 'Rehabilitering av eldre bygg', 'Nybygg', 'Garasje TKL 2', 'Næringsbygg', 'Sammenbygging'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-brand-orange shrink-0" />
                    <span className="text-brand-darkgray">{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-brand-black font-bold text-lg mb-3">Start tidlig — spar penger</h3>
              <p className="text-brand-darkgray leading-relaxed">
                Jo tidligere vi kobles inn, jo enklere og billigere er det å finne gode branntekniske løsninger. Kontakt oss allerede i skissefasen. Vi betjener Ålesund, Ørsta, Volda, Stranda, Sykkylven og hele Møre og Romsdal.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-brand-white rounded-[30px] p-8 lg:p-12 border border-brand-gray">
              <h2 className="text-brand-black text-2xl font-black mb-6">Vanlige spørsmål</h2>
              <FAQAccordion items={faqItems} />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-brand-orange rounded-[30px] p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <Image src="/images/sentralt-godkjent.png" alt="Sentralt godkjent" width={64} height={64} className="object-contain shrink-0" />
                <div>
                  <h2 className="text-brand-white font-black text-2xl mb-2">Be om tilbud på brannprosjektering</h2>
                  <p className="text-brand-white/80">Send tegninger og prosjektbeskrivelse — fastpris innen 24 timer.</p>
                </div>
              </div>
              <Link href="/kontakt-oss" className="shrink-0 border-2 border-brand-white text-brand-white font-bold px-8 py-4 rounded-[10px] hover:bg-brand-white hover:text-brand-orange transition-all">
                Kontakt oss
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
