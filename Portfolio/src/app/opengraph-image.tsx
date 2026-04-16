import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'linear-gradient(180deg, rgba(250,246,238,1) 0%, rgba(244,239,230,1) 100%)',
          padding: '68px',
          color: '#221f1c',
          fontFamily: 'Arial',
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#786f68',
          }}
        >
          Francisco Beca Murias
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 0.95,
              fontWeight: 600,
              maxWidth: '900px',
            }}
          >
            Interior design, 2D drafting, and 3D visualization.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              maxWidth: '760px',
              color: '#5f5852',
            }}
          >
            Bilingual portfolio with a calm, minimal, and editorial visual language.
          </div>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 24,
            color: '#786f68',
          }}
        >
          <span>Portfolio</span>
          <span>franciscobmbc@gmail.com</span>
        </div>
      </div>
    ),
    size,
  )
}
