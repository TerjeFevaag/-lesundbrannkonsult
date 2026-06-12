import Link from 'next/link'
import Image from 'next/image'

function FacebookIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> }
function InstagramIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg> }
function LinkedinIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> }

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white pt-16 pb-8">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Image src="/images/logo-white.png" alt="Ålesund Brannkonsult" width={234} height={72} className="object-contain mb-4" />
            <p className="text-brand-white/60 text-sm leading-relaxed mb-5">Brannprosjektering i Ålesund og på Sunnmøre. Sentralt godkjent foretak.</p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-brand-white/60 hover:text-brand-orange transition-colors"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram" className="text-brand-white/60 hover:text-brand-orange transition-colors"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn" className="text-brand-white/60 hover:text-brand-orange transition-colors"><LinkedinIcon /></a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-brand-white mb-4">Snarveier</h3>
            <ul className="space-y-2">
              {[['/', 'Hjem'], ['/om-oss', 'Om oss'], ['/artikler/pipebrann', 'Artikler'], ['/kontakt-oss', 'Kontakt oss']].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-brand-white/60 hover:text-brand-orange transition-colors text-sm">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-brand-white mb-4">Tjenester</h3>
            <ul className="space-y-2">
              {[['/brannkonsept', 'Brannkonsept'], ['/brannprosjektering', 'Brannprosjektering'], ['/branntilsyn', 'Branntilsyn'], ['/uavhengig-kontroll', 'Uavhengig kontroll']].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-brand-white/60 hover:text-brand-orange transition-colors text-sm">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-white/40 text-xs">&copy; {new Date().getFullYear()} Ålesund Brannkonsult AS. Alle rettigheter forbeholdt.</p>
          <Image src="/images/sentralt-godkjent.png" alt="Sentralt godkjent" width={80} height={80} className="object-contain" />
        </div>
      </div>
    </footer>
  )
}
