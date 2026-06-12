import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Brannprosjektering Ålesund | Ålesund Brannkonsult',
  description: 'Brannprosjektering i Ålesund og på Sunnmøre. Sentralt godkjent foretak med fastpris.',
  alternates: { canonical: 'https://www.aalesundbrannkonsult.no/brannprosjektering' },
}

const faqItems = [
  { question: 'Hva koster brannprosjektering i Ålesund?', answer: 'Fra ca. 15 000 kr ekskl. mva. i tiltaksklasse 2. Vi tilbyr alltid fastpris.' },
  { question: 'Trenger jeg brannprosjektering for tilbygg?', answer: 'Ja, de fleste søknadspliktige tiltak krever brannprosjektering.' },
  { question: 'Er befaring nødvendig?', answer: 'Vanligvis ikke. Digitale tegninger er som regel tilstrekkelig.' },
  { question: 'Hva trenger dere for pristilbud?', answer: 'Adresse, plantegninger og en kort prosjektbeskrivelse.' },
]

export default function BrannprosjekteringPage() {
  return (
    <>
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
                Jo tidligere vi kobles inn, jo enklere og billigere er det å finne gode branntekniske løsninger. Kontakt oss allerede i skissefasen.
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
                <h2 className="text-brand-white font-black text-2xl mb-2">Be om tilbud på brannprosjektering</h2>
                <p className="text-brand-white/80">Send tegninger og prosjektbeskrivelse — fastpris innen 24 timer.</p>
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
