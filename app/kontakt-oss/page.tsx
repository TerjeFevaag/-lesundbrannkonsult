import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt oss | Ålesund Brannkonsult',
  description: 'Kontakt Ålesund Brannkonsult for brannprosjektering i Ålesund og på Sunnmøre. Svar innen 24 timer.',
  alternates: { canonical: 'https://www.aalesundbrannkonsult.no/kontakt-oss' },
}

export default function KontaktOssPage() {
  return (
    <>
      <section className="px-4 sm:px-8 pt-8 pb-0 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto">
          <div className="bg-brand-dark rounded-[30px] px-8 lg:px-16 py-16 lg:py-24">
            <p className="font-accent text-brand-orange text-xl mb-4">Kontakt</p>
            <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Kontakt oss</h1>
            <div className="w-20 h-1.5 bg-brand-orange mb-8" />
            <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Ta kontakt for et gratis og uforpliktende tilbud. Vi svarer innen 24 timer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <ScrollReveal className="lg:col-span-3">
              <div className="bg-brand-white rounded-[30px] p-8 lg:p-10 border border-brand-gray">
                <h2 className="text-brand-black text-2xl font-black mb-8">Send oss en forespørsel</h2>
                <ContactForm />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100} className="lg:col-span-2">
              <div className="bg-brand-dark rounded-[30px] p-8 text-brand-white h-full">
                <h2 className="text-brand-white text-2xl font-black mb-8">Kontaktinformasjon</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0"><Phone size={18} className="text-brand-orange" /></div>
                    <div>
                      <p className="text-brand-white/50 text-sm mb-1">Telefon</p>
                      <a href="tel:+4700000000" className="text-brand-white font-bold hover:text-brand-orange transition-colors">+47 000 00 000</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0"><Mail size={18} className="text-brand-orange" /></div>
                    <div>
                      <p className="text-brand-white/50 text-sm mb-1">E-post</p>
                      <a href="mailto:post@aalesundbrannkonsult.no" className="text-brand-white font-bold hover:text-brand-orange transition-colors break-all">post@aalesundbrannkonsult.no</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0"><MapPin size={18} className="text-brand-orange" /></div>
                    <div>
                      <p className="text-brand-white/50 text-sm mb-1">Adresse</p>
                      <p className="text-brand-white font-bold">Gateadresse</p>
                      <p className="text-brand-white/60">Ålesund</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0"><Clock size={18} className="text-brand-orange" /></div>
                    <div>
                      <p className="text-brand-white/50 text-sm mb-1">Åpningstider</p>
                      <p className="text-brand-white font-bold">Man–Fre 08:00–16:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
