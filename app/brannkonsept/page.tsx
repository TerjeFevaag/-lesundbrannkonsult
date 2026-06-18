import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Brannkonsept',
  name: 'Brannkonsept i Ålesund',
  description: 'Helhetlig brannkonsept for byggesaker i Ålesund og på Sunnmøre. Dokumenterer brannsikkerhet i henhold til TEK17.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Ålesund Brannkonsult AS',
    url: 'https://www.aalesundbrannkonsult.no',
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
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.aalesundbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Brannkonsept', item: 'https://www.aalesundbrannkonsult.no/brannkonsept' },
  ],
}

export const metadata: Metadata = {
  title: 'Brannkonsept Ålesund | Ålesund Brannkonsult',
  description: 'Vi utarbeider brannkonsept for byggesaker i Ålesund og på Sunnmøre. Sentralt godkjent foretak med fastpris.',
  alternates: { canonical: 'https://www.aalesundbrannkonsult.no/brannkonsept' },
}

const faqItems = [
  {
    question: 'Hva er et brannkonsept?',
    answer: 'Et brannkonsept er en helhetlig plan for brannsikkerheten i et bygg — risikoklasse, brannklasse, brannceller, rømning og slokkesystem.',
  },
  {
    question: 'Hva koster et brannkonsept i Ålesund?',
    answer: 'Vi tilbyr alltid fastpris. Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva.',
  },
  {
    question: 'Leverer dere til Ålesund kommune?',
    answer: 'Ja, vi har god erfaring med kravene i Ålesund kommune og leverer til hele Møre og Romsdal — inkludert Ørsta, Volda, Stranda og Sykkylven.',
  },
  {
    question: 'Tar dere oppdrag utenfor Ålesund?',
    answer: 'Ja, vi tar oppdrag på Sunnmøre, i Møre og Romsdal og i hele landet.',
  },
]

export default function BrannkonseptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Rounded hero card — not full-bleed */}
      <section className="px-4 sm:px-8 pt-8 pb-0 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto">
          <div className="bg-brand-dark rounded-[30px] px-8 lg:px-16 py-16 lg:py-24">
            <p className="font-accent text-brand-orange text-xl mb-4">Tjenester</p>
            <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Brannkonsept</h1>
            <div className="w-20 h-1.5 bg-brand-orange mb-8" />
            <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Kommunen krever et brannkonsept ved de fleste søknadspliktige byggesaker i Ålesund. Vi leverer helhetlige brannkonsept til fastpris.
            </p>
          </div>
        </div>
      </section>

      {/* Content in rounded white cards */}
      <section className="py-12 lg:py-20 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-8 space-y-8">
          <ScrollReveal>
            <div className="bg-brand-white rounded-[30px] p-8 lg:p-12 border border-brand-gray">
              <h2 className="text-brand-black text-2xl font-black mb-5">Hva inkluderer brannkonseptet?</h2>
              <p className="text-brand-darkgray leading-relaxed mb-6">
                Et brannkonsept er et strategidokument for brannsikkerheten i byggeprosjektet. Det dokumenterer at bygget oppfyller kravene i TEK17 — fra risikoklasse og branncelleinndeling til røykventilasjon og rømningsveier.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Risikoklasse og brannklasse', 'Branncelleinndeling', 'Rømningsveier', 'Bærende konstruksjoner', 'Røykventilasjon', 'Slokkesystem', 'Dokumentasjon til byggesøknaden', 'Støtte mot kommunens saksbehandler'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-brand-orange mt-0.5 shrink-0" />
                    <span className="text-brand-darkgray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-brand-white rounded-[30px] p-8 lg:p-12 border border-brand-gray">
              <h2 className="text-brand-black text-2xl font-black mb-5">Slik jobber vi</h2>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Gratis vurdering', desc: 'Vi vurderer prosjektet og gir fastpris uten forpliktelser.' },
                  { step: '02', title: 'Prosjektering', desc: 'Vi utarbeider brannkonseptet basert på tegninger og prosjektbeskrivelse.' },
                  { step: '03', title: 'Leveranse', desc: 'Ferdig klart til byggesøknad — vanligvis innen 5–10 virkedager.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-brand-white font-black text-sm">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-brand-black mb-1">{item.title}</h3>
                      <p className="text-brand-darkgray text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-brand-white rounded-[30px] p-8 lg:p-12 border border-brand-gray">
              <h2 className="text-brand-black text-2xl font-black mb-6">Vanlige spørsmål</h2>
              <FAQAccordion items={faqItems} />
            </div>
          </ScrollReveal>

          {/* CTA card in orange */}
          <ScrollReveal>
            <div className="bg-brand-orange rounded-[30px] p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <Image src="/images/sentralt-godkjent.png" alt="Sentralt godkjent" width={64} height={64} className="object-contain shrink-0" />
                <div>
                  <h2 className="text-brand-white font-black text-2xl mb-2">Trenger du brannkonsept i Ålesund?</h2>
                  <p className="text-brand-white/80">Vi svarer innen 24 timer med et uforpliktende tilbud.</p>
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
