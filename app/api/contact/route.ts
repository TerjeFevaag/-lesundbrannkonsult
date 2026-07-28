import { NextResponse } from 'next/server'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_TOKEN!,
})

export async function POST(request: Request) {
  try {
    const { navn, epost, telefon, prosjekttype, melding, vedlegg } = await request.json()

    if (!navn || !epost || !melding) {
      return NextResponse.json({ error: 'Mangler påkrevde felter' }, { status: 400 })
    }

    const vedleggListe: { name: string; url: string; size: number }[] = vedlegg ?? []

    const vedleggHtml = vedleggListe.length > 0
      ? `<tr><td><strong>Vedlegg</strong></td><td>${vedleggListe.map(
          (f) => `<a href="${f.url}">${f.name}</a> (${(f.size / 1024).toFixed(0)} KB)`
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
          <tr><td><strong>Navn</strong></td><td>${navn}</td></tr>
          <tr><td><strong>E-post</strong></td><td><a href="mailto:${epost}">${epost}</a></td></tr>
          ${telefon ? `<tr><td><strong>Telefon</strong></td><td>${telefon}</td></tr>` : ''}
          ${prosjekttype ? `<tr><td><strong>Prosjekttype</strong></td><td>${prosjekttype}</td></tr>` : ''}
          <tr><td><strong>Melding</strong></td><td style="white-space:pre-wrap">${melding}</td></tr>
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
