'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      navn: (form.elements.namedItem('navn') as HTMLInputElement).value,
      epost: (form.elements.namedItem('epost') as HTMLInputElement).value,
      telefon: (form.elements.namedItem('telefon') as HTMLInputElement).value,
      prosjekttype: (form.elements.namedItem('prosjekttype') as HTMLSelectElement).value,
      melding: (form.elements.namedItem('melding') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[10px] bg-brand-lightgray border border-brand-gray p-8 text-center">
        <div className="text-brand-orange text-4xl mb-4">✓</div>
        <h3 className="text-brand-black font-black text-xl mb-2">Takk for henvendelsen!</h3>
        <p className="text-brand-darkgray">Vi tar kontakt innen 24 timer.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="navn" className="block text-sm font-bold text-brand-black mb-1.5">Navn *</label>
        <input type="text" id="navn" name="navn" required className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors" placeholder="Ditt fulle navn" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="epost" className="block text-sm font-bold text-brand-black mb-1.5">E-post *</label>
          <input type="email" id="epost" name="epost" required className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors" placeholder="din@epost.no" />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-bold text-brand-black mb-1.5">Telefon</label>
          <input type="tel" id="telefon" name="telefon" className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors" placeholder="+47 454 11 440" />
        </div>
      </div>
      <div>
        <label htmlFor="prosjekttype" className="block text-sm font-bold text-brand-black mb-1.5">Prosjekttype</label>
        <select id="prosjekttype" name="prosjekttype" className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black focus:outline-none focus:border-brand-orange transition-colors bg-brand-white">
          <option value="">Velg type</option>
          <option value="brannkonsept">Brannkonsept</option>
          <option value="brannprosjektering">Brannprosjektering</option>
          <option value="branninspeksjon">Branninspeksjon</option>
          <option value="uavhengig-kontroll">Uavhengig kontroll</option>
          <option value="annet">Annet</option>
        </select>
      </div>
      <div>
        <label htmlFor="melding" className="block text-sm font-bold text-brand-black mb-1.5">Melding *</label>
        <textarea id="melding" name="melding" required rows={5} className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors resize-none" placeholder="Beskriv prosjektet ditt kort..." />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">Noe gikk galt. Prøv igjen eller send e-post direkte til post@ålesundbrannkonsult.no.</p>
      )}

      <button type="submit" disabled={status === 'sending'} className="w-full bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base disabled:opacity-60">
        {status === 'sending' ? 'Sender...' : 'Send forespørsel'}
      </button>
    </form>
  )
}
