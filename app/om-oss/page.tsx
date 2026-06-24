import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.aalesundbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Om oss', item: 'https://www.aalesundbrannkonsult.no/om-oss' },
  ],
}

export const metadata: Metadata = {
  title: 'Om oss | Brannkonsult AS',
  description: 'Ålesund Brannkonsult er et sentralt godkjent brannprosjekteringsfirma med over ti års erfaring i Ålesund og på Sunnmøre.',
  alternates: { canonical: 'https://www.aalesundbrannkonsult.no/om-oss' },
}

export default function OmOssPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="px-4 sm:px-8 pt-8 pb-0 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto">
          <div className="bg-brand-dark rounded-[30px] px-8 lg:px-16 py-16 lg:py-24">
            <p className="font-accent text-brand-orange text-xl mb-4">Om oss</p>
            <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Brannsikkerhet er alt vi gjør</h1>
            <div className="w-20 h-1.5 bg-brand-orange mb-8" />
            <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Siden 2013 har vi levert over 1 200 brannprosjekter for private, arkitekter og utbyggere. Vi selger ingen produkter — bare uavhengig rådgivning du kan stole på.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-8 space-y-8">
          <ScrollReveal>
            <div className="bg-brand-white rounded-[30px] p-8 lg:p-12 border border-brand-gray">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-brand-black text-3xl font-black mb-6">Lokal kunnskap om Ålesund</h2>
                  <p className="text-brand-darkgray leading-relaxed mb-5">
                    Ålesund er kjent for sin unike jugendstil-arkitektur, og mange av byens eldre bygninger stiller særskilte krav til brannteknisk vurdering. Vi kjenner godt til utfordringene knyttet til brann og eldre bebyggelse på Sunnmøre, og leverer brannkonsept og brannprosjektering til arkitekter, utbyggere og privatpersoner i hele Møre og Romsdal.
                  </p>
                  <p className="text-brand-darkgray leading-relaxed mb-6">
                    Siden 2013 har vi vært involvert i over 1 200 brannprosjekter. Vi er en nøytral rådgiver — ingen produktsalg.
                  </p>
                  <ul className="space-y-3">
                    {['Fastpris alltid', 'Levering 5–10 virkedager', 'Nøytral rådgiver', 'Hele Sunnmøre og landet'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-brand-orange shrink-0" />
                        <span className="text-brand-darkgray">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-[20px] overflow-hidden h-72 lg:h-96">
                  <Image src="/images/Om-oss.jpg" alt="Teamet i Ålesund Brannkonsult" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[{ number: '2013', label: 'Etablert' }, { number: '1200+', label: 'Prosjekter' }, { number: 'TKL 1+2', label: 'Sentralt godkjent' }, { number: '5', label: 'Brannrådgivere' }].map((stat, i) => (
                <div key={i} className="bg-brand-dark rounded-[20px] p-6 text-center">
                  <div className="text-brand-orange font-black text-3xl mb-2">{stat.number}</div>
                  <div className="text-brand-white text-sm font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Sentralt godkjent */}
          <ScrollReveal>
            <div className="bg-brand-white rounded-[30px] p-8 lg:p-12 border border-brand-gray">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-brand-black text-3xl font-black mb-5">Sentralt godkjent foretak</h2>
                  <p className="text-brand-darkgray leading-relaxed mb-5">
                    Vi har sentral godkjenning fra DiBK for brannprosjektering i tiltaksklasse 1 og 2. Godkjenningen dokumenterer faglig kompetanse, ansvarsforsikring og referanseprosjekter.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image src="/images/sentralt-godkjent.png" alt="Sentralt godkjent" width={200} height={200} className="object-contain" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-brand-orange rounded-[30px] p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-brand-white font-black text-2xl mb-2">Ta kontakt i dag</h2>
                <p className="text-brand-white/80">Vi hjelper deg i Ålesund, Sunnmøre og hele landet.</p>
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
