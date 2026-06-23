import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Ålesund | Ålesund Brannkonsult',
  description: 'Ålesund Brannkonsult tilbyr brannkonsept, brannprosjektering og branninspeksjon i Ålesund og på Sunnmøre. Sentralt godkjent foretak. Fastpris.',
  alternates: { canonical: 'https://www.aalesundbrannkonsult.no' },
  openGraph: {
    title: 'Brannprosjektering i Ålesund | Ålesund Brannkonsult',
    description: 'Ålesund Brannkonsult tilbyr brannkonsept, brannprosjektering og branninspeksjon i Ålesund og på Sunnmøre.',
    url: 'https://www.aalesundbrannkonsult.no',
    siteName: 'Ålesund Brannkonsult',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Ålesund Brannkonsult' }],
  },
}
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'
import ReviewCard from '@/components/ReviewCard'

const services = [
  {
    iconImage: '/images/icon-brannkonsept.gif',
    title: 'Brannkonsept',
    description: 'Kommunen krever et brannkonsept ved de fleste byggesaker. Vi utarbeider helhetlige brannkonsept som ivaretar brannsikkerheten i ditt prosjekt.',
    href: '/brannkonsept',
  },
  {
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description: 'Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet, og finner praktiske løsninger som sparer både tid og kostnader. Fast pris der det er mulig.',
    href: '/brannprosjektering',
  },
  {
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branninspeksjon',
    description: 'Har du fått pålegg etter branntilsyn? Vi inspiserer hele bygningen og utarbeider tilstandsrapport og handlingsplan.',
    href: '/branninspeksjon',
  },
  {
    iconImage: '/images/icon-uavhengig-kontroll.png',
    title: 'Uavhengig kontroll',
    description: 'I mange byggeprosjekter er det krav om uavhengig kontroll av brannsikkerheten. Vi gjennomfører kontrollen og utsteder erklæring om ansvarsrett.',
    href: '/uavhengig-kontroll',
  },
]

const reviews = [
  {
    quote: 'Raskt svar, relevant og grundig rapport, kommunen likte måten det var gjort på. Alt til bra priser.',
    author: 'Vegard Hals',
  },
  {
    quote: 'Brannkonsult AS er faglig dyktige, ryddige og løsningsorienterte. Det er viktig for oss som arkitekter og for våre kunder.',
    author: 'Jon Cederbrand Arkitektur AS',
  },
  {
    quote: 'Ålesund Brannkonsult er lette å samarbeide med, de svarer raskt, finner gode løsninger og leverer arbeid av jevnt høy kvalitet.',
    author: 'Hagelin Byggservice',
    company: 'Daniel Hagelin',
  },
  {
    quote: 'Ga rask tilbakemelding ved første kontakt. Leverte til avtalt tid og pris. Høy kvalitet på arbeidet. Veldig behjelpelig med å svare på spørsmål i ettertid, vederlagsfritt.',
    author: 'Jonathan Steinsvik',
  },
]

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Ålesund?',
    answer: 'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva. Vi tilbyr alltid fastpris.',
  },
  {
    question: 'Trenger jeg brannprosjektering for mitt prosjekt?',
    answer: 'De fleste byggesaker krever brannprosjektering — tilbygg, bruksendring, ny boenhet, påbygg. Ta kontakt for en gratis vurdering.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer: 'For nybygg og enklere saker er det ofte ikke nødvendig. Digitale tegninger og kartdata er som regel tilstrekkelig.',
  },
  {
    question: 'Er dere sentralt godkjent?',
    answer: 'Ja, vi har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2 fra DiBK.',
  },
  {
    question: 'Tar dere oppdrag utenfor Ålesund?',
    answer: 'Ja, vi leverer brannprosjektering i hele Norge. Ålesund og Sunnmøre er basen vår, men vi bistår prosjekter fra Tromsø til Stavanger. De fleste saker løses digitalt, så geografi er sjelden en hindring.',
  },
  {
    question: 'Hva trenger dere for å gi pristilbud?',
    answer: 'Adresse, plantegninger og en kort prosjektbeskrivelse. Vi svarer med fastpris innen 24 timer.',
  },
]

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ålesund Brannkonsult',
  url: 'https://www.aalesundbrannkonsult.no',
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {/* ── Hero — city image with card anchored to bottom-right ── */}
      <section className="relative h-[85vh] min-h-[500px] overflow-hidden -mt-20 lg:-mt-24">
        <Image
          src="/images/hero.jpg"
          alt="Ålesund by"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/30 to-transparent" />
        {/* Floating card anchored to bottom-right */}
        <div className="absolute bottom-8 left-4 right-4 sm:left-auto sm:right-8 sm:w-[480px] lg:right-8 lg:w-[560px]">
          <div className="bg-brand-black/80 backdrop-blur-sm rounded-[30px] p-8 lg:p-10">
            <p className="hero-1 font-accent text-brand-orange text-xl mb-3">Sentralt godkjent siden 2013</p>
            <h1 className="hero-2 text-brand-white font-black text-3xl lg:text-4xl xl:text-5xl leading-tight mb-5">
              Din brannrådgiver i Ålesund
            </h1>
            <p className="hero-3 text-brand-white/70 text-base lg:text-lg leading-relaxed mb-7">
              Over 1 200 prosjekter. Brannkonsept, brannprosjektering og branninspeksjon for private, arkitekter og utbyggere — i Ålesund og over hele landet.
            </p>
            <div className="hero-4 flex flex-col sm:flex-row gap-3">
              <Link href="/kontakt-oss" className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity text-center">
                Få gratis tilbud
              </Link>
              <Link href="/brannprosjektering" className="border-2 border-brand-white/30 text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:border-brand-white/60 transition-colors text-center">
                Tjenestene
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services — magazine: 1 large + 3 small ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-2">Våre tjenester</h2>
            <p className="text-brand-darkgray text-lg">Brannprosjektering tilpasset Ålesund og Sunnmøre.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large featured card */}
            <ScrollReveal className="lg:col-span-2">
              <Link href={services[0].href} className="group h-full flex flex-col sm:flex-row rounded-[30px] border border-brand-gray hover:shadow-lg hover:border-brand-orange/30 transition-all duration-300 bg-brand-white overflow-hidden">
                <div className="sm:w-[38%] bg-brand-lightgray flex items-center justify-center p-10 min-h-[180px]">
                  <img src={services[0].iconImage} alt={services[0].title} className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <p className="font-accent text-brand-orange text-base mb-2">Tjeneste 01</p>
                    <h3 className="font-black text-brand-black text-2xl lg:text-3xl mb-4 group-hover:text-brand-orange transition-colors">{services[0].title}</h3>
                    <p className="text-brand-darkgray leading-relaxed">{services[0].description}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-brand-orange font-bold">
                    Les mer <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
            {/* 3 smaller stacked cards */}
            <div className="flex flex-col gap-4">
              {services.slice(1).map((service, i) => (
                <ScrollReveal key={service.href} delay={(i + 1) * 80} className="flex-1">
                  <Link href={service.href} className="group h-full flex items-center gap-4 p-5 rounded-[20px] border border-brand-gray hover:shadow-md hover:border-brand-orange/30 transition-all duration-300 bg-brand-white">
                    <img src={service.iconImage} alt={service.title} className="w-14 h-14 object-contain shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-brand-black text-base mb-1 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                      <p className="text-brand-darkgray text-sm leading-relaxed line-clamp-2">{service.description}</p>
                    </div>
                    <span className="text-brand-orange font-bold text-lg shrink-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About — timeline ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-4">Vår historie</h2>
            <p className="text-brand-darkgray text-lg leading-relaxed max-w-2xl">
              Ålesund er kjent for sin unike jugendstil-arkitektur, og mange av byens eldre bygninger stiller særskilte krav til brannteknisk vurdering. Vi kjenner godt til utfordringene knyttet til brann og eldre bebyggelse på Sunnmøre.
            </p>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-orange/30 hidden md:block" />
            <div className="space-y-8">
              {[
                { year: '2013', title: 'Etablert', desc: 'Brannkonsult AS ble etablert med mål om å tilby nøytral og faglig brannprosjektering.' },
                { year: '2016', title: '500+ prosjekter', desc: 'Vi passerte 500 gjennomførte prosjekter og utvidet teamet med flere brannrådgivere.' },
                { year: '2020', title: '1000+ prosjekter', desc: 'Over tusen byggesaker gjennomført — fra enkle tilbygg til store næringsbygg.' },
                { year: 'I dag', title: 'Sentralt godkjent TKL 1+2', desc: '1 200+ prosjekter. Sentralt godkjent fra DiBK. Tar oppdrag i Ålesund, Sunnmøre og hele landet.' },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex gap-8 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-brand-white font-black text-xs text-center leading-tight z-10">{item.year}</div>
                    <div className="bg-brand-white rounded-[20px] p-6 border border-brand-gray flex-1">
                      <h3 className="font-black text-brand-black text-lg mb-2">{item.title}</h3>
                      <p className="text-brand-darkgray">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews — 2-column grid ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Hva kundene sier</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <ReviewCard {...review} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — 2-column on desktop ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-4 text-center">Ofte stilte spørsmål</h2>
            <p className="text-brand-darkgray text-lg text-center max-w-xl mx-auto">
              Vanlige spørsmål om brannprosjektering i Ålesund og på Sunnmøre.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-brand-white rounded-[30px] p-8 border border-brand-gray">
                <FAQAccordion items={faqItems.slice(0, 3)} />
              </div>
              <div className="bg-brand-white rounded-[30px] p-8 border border-brand-gray">
                <FAQAccordion items={faqItems.slice(3)} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Articles — 3 equal columns ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-2">Artikler og tips</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { href: '/artikler/pipebrann', img: '/images/article-pipebrann.jpg', title: 'Forebygg pipebrann med enkle grep', excerpt: 'Er du i faresonen for pipebrann? Vi forklarer hva som forårsaker den og hva du kan gjøre.' },
              { href: '/artikler/brannslokker', img: '/images/article-brannslukker.jpg', title: 'Har du riktig brannslokkeapparat?', excerpt: 'Vet du hvilken type brannslokker du trenger? Vi gjennomgår kravene.' },
              { href: '/artikler/roykvarsler', img: '/images/article-roykvarsler.jpg', title: 'Riktig røykvarsler redder liv', excerpt: 'Krav til røykvarslere og riktig plassering i norske boliger.' },
            ].map((article, i) => (
              <ScrollReveal key={article.href} delay={i * 80}>
                <Link href={article.href} className="group flex flex-col rounded-[30px] overflow-hidden border border-brand-gray hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={article.img} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-brand-black text-lg font-black mb-2 group-hover:text-brand-orange transition-colors">{article.title}</h3>
                    <p className="text-brand-darkgray text-sm leading-relaxed flex-1 mb-4">{article.excerpt}</p>
                    <span className="text-brand-orange font-bold text-sm">Les mer &rarr;</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — dark with texture gradient ── */}
      <ScrollReveal variant="fade">
        <section className="py-20 bg-brand-dark" style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(245,126,35,0.08) 0%, transparent 60%)' }}>
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-3xl lg:text-4xl font-black mb-4">Klar for å komme i gang?</h2>
            <p className="text-brand-white/60 text-lg mb-10 max-w-xl mx-auto">
              Vi hjelper deg med brannprosjektering i Ålesund og på Sunnmøre. Svar innen 24 timer.
            </p>
            <Link href="/kontakt-oss" className="inline-block border-2 border-brand-orange text-brand-white font-bold px-10 py-4 rounded-[10px] hover:bg-brand-orange transition-all text-lg">
              Kontakt oss
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
