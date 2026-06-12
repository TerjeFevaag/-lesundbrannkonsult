import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Uavhengig kontroll brann Ålesund | Ålesund Brannkonsult',
  description: 'Uavhengig kontroll av brannkonsept i Ålesund og på Sunnmøre. Sentralt godkjent foretak. Fastpris.',
  alternates: { canonical: 'https://www.aalesundbrannkonsult.no/uavhengig-kontroll' },
}

const faqItems = [
  { question: 'Hva er uavhengig kontroll av brann?', answer: 'En faglig gjennomgang av brannkonseptet utført av et uavhengig foretak. Sikrer at løsningene er i tråd med TEK17.' },
  { question: 'Når er det krav om UK?', answer: 'Krav om UK gjelder ved brannprosjektering i tiltaksklasse 2 eller høyere, etter SAK10.' },
  { question: 'Hva koster uavhengig kontroll?', answer: 'Avhengig av byggets størrelse og tiltaksklasse. Kontakt oss for fastpris.' },
  { question: 'Kan dere ta UK uten å ha prosjektert?', answer: 'Ja, vi tar oppdrag som kontrollerende for brannkonsept vi ikke har utarbeidet.' },
]

export default function UavhengigKontrollPage() {
  return (
    <>
      <section className="px-4 sm:px-8 pt-8 pb-0 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto">
          <div className="bg-brand-dark rounded-[30px] px-8 lg:px-16 py-16 lg:py-24">
            <p className="font-accent text-brand-orange text-xl mb-4">Tjenester</p>
            <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Uavhengig kontroll</h1>
            <div className="w-20 h-1.5 bg-brand-orange mb-8" />
            <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Vi gjennomfører uavhengig kontroll av brannkonsept i Ålesund og Møre og Romsdal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-8 space-y-8">
          <ScrollReveal>
            <div className="bg-brand-white rounded-[30px] p-8 lg:p-12 border border-brand-gray">
              <h2 className="text-brand-black text-2xl font-black mb-5">Hva kontrolleres?</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {['Risikoklasse og brannklasse', 'Branncelleinndeling', 'Rømningsveier', 'Branntekniske løsninger', 'Slokkesystem', 'Branntegninger', 'Avvik fra preakseptert', 'Ansvarsretterklæringer'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-brand-orange mt-0.5 shrink-0" />
                    <span className="text-brand-darkgray">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-brand-darkgray leading-relaxed">
                Vi er en nøytral part — selger ingen produkter. Kontrollen avsluttes med skriftlig rapport og erklæring om ansvarsrett.
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
              <div>
                <h2 className="text-brand-white font-black text-2xl mb-2">Trenger du UK brann i Ålesund?</h2>
                <p className="text-brand-white/80">Vi svarer innen 24 timer med et uforpliktende tilbud.</p>
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
