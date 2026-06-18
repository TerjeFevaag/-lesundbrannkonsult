import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.aalesundbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Artikler', item: 'https://www.aalesundbrannkonsult.no/artikler/roykvarsler' },
    { '@type': 'ListItem', position: 3, name: 'Riktig røykvarsler', item: 'https://www.aalesundbrannkonsult.no/artikler/roykvarsler' },
  ],
}

export const metadata: Metadata = {
  title: 'Riktig røykvarsler redder liv | Ålesund Brannkonsult',
  description: 'Krav til røykvarslere i norske boliger og riktig plassering.',
  alternates: { canonical: 'https://www.aalesundbrannkonsult.no/artikler/roykvarsler' },
}

export default function RoykVarslerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="px-4 sm:px-8 pt-8 pb-0 bg-brand-lightgray">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-brand-dark rounded-[30px] px-8 lg:px-12 py-14">
            <p className="font-accent text-brand-orange text-xl mb-4">Artikkel</p>
            <h1 className="text-brand-white font-black text-3xl lg:text-5xl leading-tight">Riktig røykvarsler redder liv</h1>
          </div>
        </div>
      </section>

      <article className="py-12 lg:py-20 bg-brand-lightgray">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 space-y-8">
          <ScrollReveal>
            <div className="bg-brand-white rounded-[30px] overflow-hidden border border-brand-gray">
              <div className="relative h-64 lg:h-80">
                <Image src="/images/article-roykvarsler.jpg" alt="Røykvarsler" fill className="object-cover" sizes="800px" />
              </div>
              <div className="p-8 lg:p-12">
                <p className="text-brand-darkgray text-lg leading-relaxed mb-6">De fleste brannulykker med dødsfall skjer om natten. En fungerende røykvarsler er det viktigste brannverntiltaket — men bare hvis den er riktig type og plassert riktig.</p>

                <h2 className="text-brand-black text-2xl font-black mb-3">Ionisasjon vs. optisk</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-brand-lightgray rounded-[20px] p-5">
                    <h3 className="font-bold text-brand-black mb-2">Ionisasjonsvarsler</h3>
                    <p className="text-sm text-brand-darkgray">Reagerer raskt på rask, flammende brann. Best for kjøkken og lager.</p>
                  </div>
                  <div className="bg-brand-lightgray rounded-[20px] p-5">
                    <h3 className="font-bold text-brand-black mb-2">Optisk røykvarsler</h3>
                    <p className="text-sm text-brand-darkgray">Reagerer raskere på ulmerbranner. Best for soverom og stue.</p>
                  </div>
                </div>

                <h2 className="text-brand-black text-2xl font-black mb-3">Riktig plassering</h2>
                <ul className="list-none space-y-3 mb-6">
                  {['Monter i taket, midt i rommet', 'Minst én varsler utenfor hvert soverom', 'Kjøkken: bruk varmevarsler', 'Unngå hjørner og kanter'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" /><span className="text-brand-darkgray">{item}</span></li>
                  ))}
                </ul>

                <h2 className="text-brand-black text-2xl font-black mb-3">Vedlikehold</h2>
                <div className="space-y-3">
                  {[
                    { title: 'Test månedlig', desc: 'Trykk på testknappen.' },
                    { title: 'Bytt batteri årlig', desc: 'Sett av en fast dato.' },
                    { title: 'Bytt etter 10 år', desc: 'Sjekk produksjonsdato på baksiden.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-brand-orange font-black text-xs">{i + 1}</span>
                      </div>
                      <div>
                        <span className="font-bold text-brand-black">{item.title}: </span>
                        <span className="text-brand-darkgray">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-brand-orange rounded-[30px] p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-brand-white font-bold text-lg">Spørsmål om brannsikkerhet i Ålesund?</p>
              <Link href="/kontakt-oss" className="shrink-0 border-2 border-brand-white text-brand-white font-bold px-8 py-3 rounded-[10px] hover:bg-brand-white hover:text-brand-orange transition-all">Kontakt oss</Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  )
}
