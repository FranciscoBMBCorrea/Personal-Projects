import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'Francisco Beça Múrias'
  const description =
    searchParams.get('description') ??
    'Designer de interiores, desenho 2D, modelação 3D e visualização de interiores.'
  const type = searchParams.get('type') ?? 'Portfolio'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f7f7f4',
          color: '#111111',
          padding: '64px',
          fontFamily: 'Arial',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#5c5c57',
          }}
        >
          <span>{type}</span>
          <span>franciscobecamurias.com</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 0.94,
              fontWeight: 700,
              letterSpacing: '-0.05em',
              maxWidth: '930px',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              maxWidth: '780px',
              color: '#3f3f3b',
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 24,
            color: '#5c5c57',
          }}
        >
          <span>Francisco Beça Múrias</span>
          <span>Interior design · 2D · 3D</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
