import { NextResponse } from 'next/server'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'

function escapeHtml(s: string): string { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;') }

const BLOB_HOST = /^https:\/\/[a-z0-9]+\.public\.blob\.vercel-storage\.com\//

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_TOKEN!,
})

export async function POST(request: Request) {
  try {
    const { navn, epost, telefon, prosjekttype, melding, vedlegg } = await request.json()

    if (!navn || !epost || !melding) {
      return NextResponse.json({ error: 'Mangler påkrevde felter' }, { status: 400 })
    }

    if (navn.length > 200 || epost.length > 200 || melding.length > 10000) {
      return NextResponse.json({ error: 'Felt er for lange' }, { status: 400 })
    }

    const vedleggRaw: { name: string; url: string; size: number }[] = vedlegg ?? []

    for (const f of vedleggRaw) {
      if (!BLOB_HOST.test(f.url)) {
        return NextResponse.json({ error: 'Ugyldig vedlegg-URL' }, { status: 400 })
      }
    }

    const vedleggListe = vedleggRaw.slice(0, 4)

    const vedleggHtml = vedleggListe.length > 0
      ? `<tr><td><strong>Vedlegg</strong></td><td>${vedleggListe.map(
          (f) => `<a href="${escapeHtml(f.url)}">${escapeHtml(f.name)}</a> (${(f.size / 1024).toFixed(0)} KB)`
        ).join('<br>')}</td></tr>`
      : ''

    const vedleggTekst = vedleggListe.length > 0
      ? `\n\nVedlegg:\n${vedleggListe.map((f) => `• ${f.name}: ${f.url}`).join('\n')}`
      : ''

    const sentFrom = new Sender('post@xn--lesundbrannkonsult-3tb.no', 'Brannkonsult AS')
    const recipients = [new Recipient('post@xn--lesundbrannkonsult-3tb.no', 'Brannkonsult AS')]

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(new Sender(epost, navn))
      .setSubject(`Ny henvendelse fra ${navn}${prosjekttype ? ` — ${prosjekttype}` : ''}`)
      .setHtml(`
        <h2>Ny henvendelse fra nettskjema</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td><strong>Navn</strong></td><td>${escapeHtml(navn)}</td></tr>
          <tr><td><strong>E-post</strong></td><td><a href="mailto:${escapeHtml(epost)}">${escapeHtml(epost)}</a></td></tr>
          ${telefon ? `<tr><td><strong>Telefon</strong></td><td>${escapeHtml(telefon)}</td></tr>` : ''}
          ${prosjekttype ? `<tr><td><strong>Prosjekttype</strong></td><td>${escapeHtml(prosjekttype)}</td></tr>` : ''}
          <tr><td><strong>Melding</strong></td><td style="white-space:pre-wrap">${escapeHtml(melding)}</td></tr>
          ${vedleggHtml}
        </table>
      `)
      .setText(`Ny henvendelse fra ${navn}\nE-post: ${epost}${telefon ? `\nTelefon: ${telefon}` : ''}${prosjekttype ? `\nProsjekttype: ${prosjekttype}` : ''}\n\nMelding:\n${melding}${vedleggTekst}`)

    await mailerSend.email.send(emailParams)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('MailerSend error:', error)
    return NextResponse.json({ error: 'Kunne ikke sende e-post' }, { status: 500 })
  }
}
