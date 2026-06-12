import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Branntilsyn Ålesund | Ålesund Brannkonsult',
  description: 'Hjelp etter branntilsyn i Ålesund og på Sunnmøre. Tilstandsrapport og handlingsplan. Sentralt godkjent foretak.',
  alternates: { canonical: 'https://www.aalesundbrannkonsult.no/branntilsyn' },
}

const faqItems = [
  { question: 'Hva er forskjellen på branntilsyn og branninspeksjon?', answer: 'Branntilsyn utføres av kommunens brann- og redningsetat. Branninspeksjon er en frivillig gjennomgang av privat brannrådgiver med tilstandsrapport.' },
  { question: 'Hvem er ansvarlig for brannsikkerheten i et sameie?', answer: 'Eier av bygget — typisk et borettslag eller sameie — er ansvarlig for å følge opp pålegg.' },
  { question: 'Hva koster en branninspeksjon i Ålesund?', answer: 'Avhengig av byggets størrelse. Kontakt oss for fastpris.' },
  { question: 'Gjelder oppgraderingskravet for alle eldre bygninger?', answer: 'Ja, alle bygg skal ha brannsikkerhet tilsvarende BF85 eller bedre.' },
]

export default function BranntilsynPage() {
  return (
    <>
      <section className="px-4 sm:px-8 pt-8 pb-0 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto">
          <div className="bg-brand-dark rounded-[30px] px-8 lg:px-16 py-16 lg:py-24">
            <p className="font-accent text-brand-orange text-xl mb-4">Tjenester</p>
            <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Branntilsyn og branninspeksjon</h1>
            <div className="w-20 h-1.5 bg-brand-orange mb-8" />
            <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Har du fått pålegg etter branntilsyn? Vi inspiserer bygget og utarbeider tilstandsrapport og handlingsplan i Ålesund og på Sunnmøre.
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
              <div>
                <h2 className="text-brand-white font-black text-2xl mb-2">Hjelp etter branntilsyn i Ålesund</h2>
                <p className="text-brand-white/80">Vi hjelper deg med å følge opp pålegg og utarbeide handlingsplan.</p>
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
