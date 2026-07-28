'use client'

import { useState, useRef } from 'react'
import { upload } from '@vercel/blob/client'
import { Paperclip, X, Upload } from 'lucide-react'

type Status = 'idle' | 'uploading' | 'sending' | 'success' | 'error'

const MAX_FILES = 4
const MAX_FILE_MB = 20
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024
const ACCEPTED = '.pdf,.jpg,.jpeg,.png,.gif,.webp,.dwg,.dxf'

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [files, setFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState('')
  const [uploadProgress, setUploadProgress] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  function addFiles(incoming: FileList | null) {
    if (!incoming) return
    setFileError('')
    const next = [...files]
    for (const file of Array.from(incoming)) {
      if (next.length >= MAX_FILES) {
        setFileError(`Maks ${MAX_FILES} filer tillatt.`)
        break
      }
      if (file.size > MAX_FILE_BYTES) {
        setFileError(`«${file.name}» er for stor (maks ${MAX_FILE_MB} MB per fil).`)
        continue
      }
      if (!next.find((f) => f.name === file.name && f.size === file.size)) {
        next.push(file)
      }
    }
    setFiles(next)
  }

  function removeFile(index: number) {
    setFiles(files.filter((_, i) => i !== index))
    setFileError('')
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    const navn = (form.elements.namedItem('navn') as HTMLInputElement).value
    const epost = (form.elements.namedItem('epost') as HTMLInputElement).value
    const telefon = (form.elements.namedItem('telefon') as HTMLInputElement).value
    const prosjekttype = (form.elements.namedItem('prosjekttype') as HTMLSelectElement).value
    const melding = (form.elements.namedItem('melding') as HTMLTextAreaElement).value

    try {
      // Last opp filer til Vercel Blob
      const blobUrls: { name: string; url: string; size: number }[] = []
      if (files.length > 0) {
        setStatus('uploading')
        for (let i = 0; i < files.length; i++) {
          const file = files[i]
          setUploadProgress(`Laster opp fil ${i + 1} av ${files.length}…`)
          const blob = await upload(file.name, file, {
            access: 'public',
            handleUploadUrl: '/api/upload',
          })
          blobUrls.push({ name: file.name, url: blob.url, size: file.size })
        }
      }

      // Send skjema med blob-URLer
      setStatus('sending')
      setUploadProgress('')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ navn, epost, telefon, prosjekttype, melding, vedlegg: blobUrls }),
      })
      if (!res.ok) throw new Error()

      setStatus('success')
      form.reset()
      setFiles([])
    } catch {
      setStatus('error')
      setUploadProgress('')
    }
  }

  const isBusy = status === 'uploading' || status === 'sending'

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
          <input type="tel" id="telefon" name="telefon" className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors" placeholder="+47 973 49 273" />
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

      {/* File upload */}
      <div>
        <label className="block text-sm font-bold text-brand-black mb-1.5">
          Vedlegg <span className="font-normal text-brand-darkgray">(valgfritt — tegninger, bilder, PDF)</span>
        </label>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={files.length >= MAX_FILES || isBusy}
          className="w-full flex items-center justify-center gap-3 px-4 py-4 border-2 border-dashed border-brand-gray rounded-[10px] text-brand-darkgray hover:border-brand-orange hover:text-brand-orange transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Upload size={18} />
          <span className="text-sm">Velg filer eller slipp dem her</span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={ACCEPTED}
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
          onClick={(e) => { (e.target as HTMLInputElement).value = '' }}
        />
        <p className="text-brand-darkgray text-xs mt-1.5">
          PDF, JPG, PNG, DWG, DXF — maks {MAX_FILE_MB} MB per fil, opptil {MAX_FILES} filer
        </p>

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((f, i) => (
              <li key={i} className="flex items-center justify-between gap-3 px-3 py-2 bg-brand-lightgray rounded-[8px] border border-brand-gray">
                <div className="flex items-center gap-2 min-w-0">
                  <Paperclip size={14} className="text-brand-orange shrink-0" />
                  <span className="text-sm text-brand-black truncate">{f.name}</span>
                  <span className="text-xs text-brand-darkgray shrink-0">{formatSize(f.size)}</span>
                </div>
                <button type="button" onClick={() => removeFile(i)} disabled={isBusy} className="shrink-0 text-brand-darkgray hover:text-red-500 transition-colors disabled:opacity-40">
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}

        {fileError && <p className="text-red-600 text-sm mt-2">{fileError}</p>}
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">Noe gikk galt. Prøv igjen eller send e-post direkte til post@alesundbrannkonsult.no.</p>
      )}

      <button type="submit" disabled={isBusy} className="w-full bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base disabled:opacity-60">
        {status === 'uploading' ? uploadProgress : status === 'sending' ? 'Sender…' : 'Send forespørsel'}
      </button>
    </form>
  )
}
