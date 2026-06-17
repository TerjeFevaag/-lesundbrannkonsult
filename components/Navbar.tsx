'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/brannkonsept', label: 'Brannkonsept' },
  { href: '/brannprosjektering', label: 'Brannprosjektering' },
  { href: '/branninspeksjon', label: 'Branninspeksjon' },
  { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
  { href: '/om-oss', label: 'Om oss' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-white/95 backdrop-blur-sm shadow-md' : 'bg-brand-dark'}`}>
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 h-20 lg:h-24 flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src={scrolled ? '/images/logo-black.png' : '/images/logo-white.png'}
            alt="Alesund Brannkonsult"
            width={234} height={65}
            className="object-contain h-[52px] w-auto"
            priority
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              className={`px-3 py-2 rounded-[8px] text-sm font-medium transition-all ${
                scrolled
                  ? 'text-brand-black hover:text-brand-orange hover:bg-brand-lightgray'
                  : 'text-brand-white/90 hover:text-brand-white hover:bg-brand-white/10'
              }`}>
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt-oss"
            className="ml-4 bg-brand-orange text-brand-white font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm">
            Kontakt oss
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 ${scrolled ? 'text-brand-black' : 'text-brand-white'}`} aria-label="Meny">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-brand-white border-t border-brand-gray">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="block px-6 py-3.5 text-brand-black hover:text-brand-orange hover:bg-brand-lightgray font-medium transition-colors border-b border-brand-gray">
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link href="/kontakt-oss" onClick={() => setOpen(false)}
              className="block bg-brand-orange text-brand-white font-bold px-5 py-3 rounded-full text-center hover:opacity-90 transition-opacity">
              Kontakt oss
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
