import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Branninspeksjon i Ålesund | Brannkonsult AS',
  description: 'Branninspeksjon i Ålesund — vi inspiserer bygget og leverer tilstandsrapport og handlingsplan. Sentralt godkjent brannrådgiver. Kontakt oss for fastpris.',
  alternates: { canonical: 'https://www.aalesundbrannkonsult.no/branninspeksjon' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Branninspeksjon',
  name: 'Branninspeksjon i Ålesund',
  description: 'Frivillig gjennomgang av byggets brannsikkerhet med tilstandsrapport og handlingsplan. Utføres av sentralt godkjent brannrådgiver.',
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
    description: 'Pris avhenger av byggets størrelse. Kontakt oss for fastpris.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.aalesundbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Branninspeksjon', item: 'https://www.aalesundbrannkonsult.no/branninspeksjon' },
  ],
}

const faqItems = [
  { question: 'Hva er forskjellen på branntilsyn og branninspeksjon?', answer: 'Branntilsyn utføres av kommunens brann- og redningsetat. Branninspeksjon er en frivillig gjennomgang av privat brannrådgiver med tilstandsrapport.' },
  { question: 'Hvem er ansvarlig for brannsikkerheten i et sameie?', answer: 'Eier av bygget — typisk et borettslag eller sameie — er ansvarlig for å følge opp pålegg.' },
  { question: 'Hva koster en branninspeksjon i Ålesund?', answer: 'Prisen avhenger av byggets størrelse. Kontakt oss for fastpris — vi betjener kunder i Ålesund, på Sunnmøre og i hele Norge.' },
  { question: 'Utfører dere branninspeksjon utenfor Ålesund?', answer: 'Ja, vi tar oppdrag i hele landet. Vi er basert i Ålesund, men rykker ut til Sunnmøre, Møre og Romsdal og resten av Norge ved behov.' },
  { question: 'Gjelder oppgraderingskravet for alle eldre bygninger?', answer: 'Ja, alle bygg skal ha brannsikkerhet tilsvarende BF85 eller bedre.' },
]

export default function BranninspeksjonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="px-4 sm:px-8 pt-8 pb-0 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto">
          <div className="bg-brand-dark rounded-[30px] px-8 lg:px-16 py-16 lg:py-24">
            <p className="font-accent text-brand-orange text-xl mb-4">Tjenester</p>
            <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Branninspeksjon i Ålesund</h1>
            <div className="w-20 h-1.5 bg-brand-orange mb-8" />
            <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Vi inspiserer byggets brannsikkerhet og utarbeider tilstandsrapport og handlingsplan i Ålesund og på Sunnmøre. Fastpris — kontakt oss for tilbud.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-8 space-y-8">
          <ScrollReveal>
            <div className="bg-brand-white rounded-[30px] p-8 lg:p-12 border border-brand-gray">
              <h2 className="text-brand-black text-2xl font-black mb-5">Vår branninspeksjonstjeneste</h2>
              <p className="text-brand-darkgray leading-relaxed mb-6">Vi tilbyr en grundig gjennomgang av byggets brannsikkerhet — uavhengig av om du har fått pålegg.</p>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Inspeksjon', desc: 'Vi gjennomgår bygget fysisk og vurderer alle branntekniske tiltak.' },
                  { step: '02', title: 'Tilstandsrapport', desc: 'Skriftlig rapport med avvik rangert etter alvorlighetsgrad.' },
                  { step: '03', title: 'Handlingsplan', desc: 'Konkrete tiltak med prioritering og estimerte kostnader.' },
                  { step: '04', title: 'Internkontrollrutiner', desc: 'Vi hjelper deg med rutiner for løpende brannsikkerhet.' },
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

          <ScrollReveal>
            <div className="bg-brand-orange rounded-[30px] p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <Image src="/images/sentralt-godkjent.png" alt="Sentralt godkjent" width={64} height={64} className="object-contain shrink-0" />
                <div>
                  <h2 className="text-brand-white font-black text-2xl mb-2">Branninspeksjon i Ålesund og på Sunnmøre</h2>
                  <p className="text-brand-white/80">Vi hjelper deg med å følge opp pålegg og utarbeide handlingsplan.</p>
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
