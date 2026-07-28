import { NextResponse } from 'next/server'
import { MailerSend, EmailParams, Sender, Recipient, Attachment } from 'mailersend'

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_TOKEN!,
})

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const navn = formData.get('navn') as string
    const epost = formData.get('epost') as string
    const telefon = formData.get('telefon') as string | null
    const prosjekttype = formData.get('prosjekttype') as string | null
    const melding = formData.get('melding') as string

    if (!navn || !epost || !melding) {
      return NextResponse.json({ error: 'Mangler påkrevde felter' }, { status: 400 })
    }

    const vedleggFiler = formData.getAll('vedlegg') as File[]
    const attachments: Attachment[] = []
    for (const file of vedleggFiler) {
      if (file.size === 0) continue
      const buffer = await file.arrayBuffer()
      const base64 = Buffer.from(buffer).toString('base64')
      attachments.push(new Attachment(base64, file.name, 'attachment'))
    }

    const sentFrom = new Sender('post@xn--lesundbrannkonsult-3tb.no', 'Brannkonsult AS')
    const recipients = [new Recipient('post@xn--lesundbrannkonsult-3tb.no', 'Brannkonsult AS')]

    const vedleggListe = vedleggFiler.filter(f => f.size > 0)
      .map(f => `• ${f.name} (${(f.size / 1024).toFixed(0)} KB)`)
      .join('\n')

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
          ${vedleggListe ? `<tr><td><strong>Vedlegg</strong></td><td style="white-space:pre-wrap">${vedleggListe.replace(/\n/g, '<br>')}</td></tr>` : ''}
        </table>
      `)
      .setText(`Ny henvendelse fra ${navn}\nE-post: ${epost}${telefon ? `\nTelefon: ${telefon}` : ''}${prosjekttype ? `\nProsjekttype: ${prosjekttype}` : ''}\n\nMelding:\n${melding}${vedleggListe ? `\n\nVedlegg:\n${vedleggListe}` : ''}`)

    if (attachments.length > 0) {
      emailParams.setAttachments(attachments)
    }

    await mailerSend.email.send(emailParams)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('MailerSend error:', error)
    return NextResponse.json({ error: 'Kunne ikke sende e-post' }, { status: 500 })
  }
}
