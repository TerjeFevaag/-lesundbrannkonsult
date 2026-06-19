import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

function FacebookIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
}
function InstagramIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
}
function LinkedinIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white border-t-4 border-brand-orange pt-16 pb-0">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: wide brand col + 2 link cols + contact col */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand col — spans 2 of 5 */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image src="/images/logo-white.png" alt="Ålesund Brannkonsult" width={234} height={72} className="object-contain" />
            </div>
            <p className="text-brand-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Brannprosjektering i Ålesund og på Sunnmøre. Sentralt godkjent foretak for tiltaksklasse 1 og 2. Vi hjelper private, arkitekter og utbyggere i hele Møre og Romsdal.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-brand-white/50 hover:text-brand-orange transition-colors"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram" className="text-brand-white/50 hover:text-brand-orange transition-colors"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn" className="text-brand-white/50 hover:text-brand-orange transition-colors"><LinkedinIcon /></a>
            </div>
          </div>
          {/* Snarveier */}
          <div>
            <h3 className="font-bold text-brand-white mb-5 text-sm">Snarveier</h3>
            <ul className="space-y-3">
              {[{ href: '/', label: 'Hjem' }, { href: '/om-oss', label: 'Om oss' }, { href: '/artikler/pipebrann', label: 'Artikler' }, { href: '/kontakt-oss', label: 'Kontakt oss' }].map((link) => (
                <li key={link.href}><Link href={link.href} className="text-brand-white/60 hover:text-brand-orange transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          {/* Tjenester */}
          <div>
            <h3 className="font-bold text-brand-white mb-5 text-sm">Tjenester</h3>
            <ul className="space-y-3">
              {[{ href: '/brannkonsept', label: 'Brannkonsept' }, { href: '/brannprosjektering', label: 'Brannprosjektering' }, { href: '/branninspeksjon', label: 'Branninspeksjon' }, { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' }].map((link) => (
                <li key={link.href}><Link href={link.href} className="text-brand-white/60 hover:text-brand-orange transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-bold text-brand-white mb-5 text-sm">Kontakt</h3>
            <div className="space-y-3 text-sm text-brand-white/60">
              <a href="tel:+4745601942" className="flex items-center gap-2 hover:text-brand-orange transition-colors"><Phone size={13} className="shrink-0" /> 456 01 942</a>
              <a href="mailto:post@brannkonsult.no" className="flex items-center gap-2 hover:text-brand-orange transition-colors"><Mail size={13} className="shrink-0" /> post@brannkonsult.no</a>
              <p className="flex items-start gap-2"><MapPin size={13} className="shrink-0 mt-0.5" /> Ålesund, Sunnmøre</p>
              <p className="text-brand-white/40 text-xs pt-1">Man–Fre 08:00–16:00</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-white/40 text-xs">&copy; {new Date().getFullYear()} Ålesund Brannkonsult AS. Alle rettigheter forbeholdt.</p>
          <Image src="/images/sentralt-godkjent.png" alt="Sentralt godkjent" width={80} height={80} className="object-contain" />
        </div>
      </div>
    </footer>
  )
}
