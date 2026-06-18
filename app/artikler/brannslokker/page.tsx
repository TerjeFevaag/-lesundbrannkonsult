import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.aalesundbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Artikler', item: 'https://www.aalesundbrannkonsult.no/artikler/brannslokker' },
    { '@type': 'ListItem', position: 3, name: 'Riktig brannslokkeapparat', item: 'https://www.aalesundbrannkonsult.no/artikler/brannslokker' },
  ],
}

export const metadata: Metadata = {
  title: 'Har du riktig brannslokkeapparat? | Ålesund Brannkonsult',
  description: 'Vet du hvilken type brannslokker du trenger? Vi gjennomgår krav og typer.',
  alternates: { canonical: 'https://www.aalesundbrannkonsult.no/artikler/brannslokker' },
}

export default function BrannslokkePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="px-4 sm:px-8 pt-8 pb-0 bg-brand-lightgray">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-brand-dark rounded-[30px] px-8 lg:px-12 py-14">
            <p className="font-accent text-brand-orange text-xl mb-4">Artikkel</p>
            <h1 className="text-brand-white font-black text-3xl lg:text-5xl leading-tight">Har du riktig brannslokkeapparat i boligen?</h1>
          </div>
        </div>
      </section>

      <article className="py-12 lg:py-20 bg-brand-lightgray">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 space-y-8">
          <ScrollReveal>
            <div className="bg-brand-white rounded-[30px] overflow-hidden border border-brand-gray">
              <div className="relative h-64 lg:h-80">
                <Image src="/images/article-brannslukker.jpg" alt="Brannslokker" fill className="object-cover" sizes="800px" />
              </div>
              <div className="p-8 lg:p-12">
                <p className="text-brand-darkgray text-lg leading-relaxed mb-6">Et brannslokkeapparat kan bety forskjellen mellom et branntilløp og en totalbrann. Vet du hva du har hengende i gangen?</p>
                <h2 className="text-brand-black text-2xl font-black mb-3">Krav til boliger</h2>
                <ul className="list-none space-y-3 mb-6">
                  {['Minst én røykvarsler per etasje', 'Slokkeutstyr i eller ved kjøkkenet', 'Pulver- eller skumapparat på minst 6 kg/L'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" /><span className="text-brand-darkgray">{item}</span></li>
                  ))}
                </ul>
                <h2 className="text-brand-black text-2xl font-black mb-3">Pulver vs. skum</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-brand-lightgray rounded-[20px] p-5">
                    <h3 className="font-bold text-brand-black mb-2">Pulverapparat</h3>
                    <p className="text-sm text-brand-darkgray">Effektivt mot klasse A, B og C. Rimelig. Ødelegger inventar og skaper støvsky.</p>
                  </div>
                  <div className="bg-brand-lightgray rounded-[20px] p-5">
                    <h3 className="font-bold text-brand-black mb-2">Skumapparat</h3>
                    <p className="text-sm text-brand-darkgray">Skåner inventar. Effektivt mot klasse A og B. Anbefalt for kjøkken.</p>
                  </div>
                </div>
                <p className="text-brand-darkgray">Vi anbefaler et 6-liters skumapparat for de fleste boliger. Heng det synlig og lett tilgjengelig.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-brand-orange rounded-[30px] p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-brand-white font-bold text-lg">Trenger du brannprosjektering i Ålesund?</p>
              <Link href="/kontakt-oss" className="shrink-0 border-2 border-brand-white text-brand-white font-bold px-8 py-3 rounded-[10px] hover:bg-brand-white hover:text-brand-orange transition-all">Kontakt oss</Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  )
}
