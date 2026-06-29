import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.ålesundbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Artikler', item: 'https://www.ålesundbrannkonsult.no/artikler/pipebrann' },
    { '@type': 'ListItem', position: 3, name: 'Forebygg pipebrann', item: 'https://www.ålesundbrannkonsult.no/artikler/pipebrann' },
  ],
}

export const metadata: Metadata = {
  title: 'Forebygg pipebrann med enkle grep | Brannkonsult AS',
  description: 'Er du i faresonen for pipebrann? Vi forklarer hva som forårsaker den og hva du kan gjøre.',
  alternates: { canonical: 'https://www.ålesundbrannkonsult.no/artikler/pipebrann' },
}

export default function PipebrannPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="px-4 sm:px-8 pt-8 pb-0 bg-brand-lightgray">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-brand-dark rounded-[30px] px-8 lg:px-12 py-14">
            <p className="font-accent text-brand-orange text-xl mb-4">Artikkel</p>
            <h1 className="text-brand-white font-black text-3xl lg:text-5xl leading-tight">Forebygg pipebrann med enkle grep</h1>
          </div>
        </div>
      </section>

      <article className="py-12 lg:py-20 bg-brand-lightgray">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 space-y-8">
          <ScrollReveal>
            <div className="bg-brand-white rounded-[30px] overflow-hidden border border-brand-gray">
              <div className="relative h-64 lg:h-80">
                <Image src="/images/article-pipebrann.jpg" alt="Pipebrann" fill className="object-cover" sizes="800px" />
              </div>
              <div className="p-8 lg:p-12">
                <p className="text-brand-darkgray text-lg leading-relaxed mb-6">En pipebrann oppstår når sotavleiringer inne i skorsteinen antennes. Den er i stor grad forebyggbart med enkle tiltak.</p>
                <h2 className="text-brand-black text-2xl font-black mb-3">Hva forårsaker pipebrann?</h2>
                <ul className="list-none space-y-3 mb-6">
                  {['Fuktig eller usesongert ved', 'For lav forbrenningstemperatur', 'Brenning av avfall i ovnen', 'For sjelden feiing', 'Dårlig trekk i pipa'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" /><span className="text-brand-darkgray">{item}</span></li>
                  ))}
                </ul>
                <h2 className="text-brand-black text-2xl font-black mb-3">Slik forebygger du</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Fyr med tørr, sesongert ved', desc: 'Veden bør ha maksimalt 20 % fuktighet.' },
                    { title: 'God lufttilgang', desc: 'Start med åpen spjeld. Varm forbrenning = ren forbrenning.' },
                    { title: 'Regelmessig feiing', desc: 'Kommunal feiing er lovpålagt. Bestill ved behov.' },
                    { title: 'Sjekk pipa', desc: 'Se etter sprekker og løse fuger i mur.' },
                    { title: 'Ikke brenn avfall', desc: 'Plast, papp og trykt papir gir kraftig sotdannelse.' },
                  ].map((item, i) => (
                    <div key={i} className="border-l-4 border-brand-orange pl-6">
                      <h3 className="font-bold text-brand-black mb-1">{item.title}</h3>
                      <p className="text-brand-darkgray text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-brand-orange rounded-[30px] p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-brand-white font-bold text-lg">Trenger du hjelp med brannsikkerhet i Ålesund?</p>
              <Link href="/kontakt-oss" className="shrink-0 border-2 border-brand-white text-brand-white font-bold px-8 py-3 rounded-[10px] hover:bg-brand-white hover:text-brand-orange transition-all">Kontakt oss</Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  )
}
