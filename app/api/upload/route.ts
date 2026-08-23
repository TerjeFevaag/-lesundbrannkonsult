import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { NextResponse } from 'next/server'

const ALLOWED_ORIGINS = [
  'https://www.xn--lesundbrannkonsult-3tb.no',
  'https://xn--lesundbrannkonsult-3tb.no',
  'https://www.alesundbrannkonsult.no',
  'https://alesundbrannkonsult.no',
]

export async function POST(request: Request): Promise<NextResponse> {
  const origin = request.headers.get('origin') ?? ''
  if (!ALLOWED_ORIGINS.includes(origin) && process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Ikke tillatt' }, { status: 403 })
  }

  const body = (await request.json()) as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: [
          'application/pdf',
          'image/jpeg',
          'image/png',
          'image/gif',
          'image/webp',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ],
        maximumSizeInBytes: 20 * 1024 * 1024,
      }),
      onUploadCompleted: async () => {},
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 })
  }
}
