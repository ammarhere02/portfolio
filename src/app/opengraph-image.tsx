import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = `${site.name} — ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Satori requires an explicit `display` on any element with multiple children,
 * and it has no cascade — every style is set inline.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0e1013',
          padding: '76px 84px',
          color: '#f2f4f6',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: '#3fb950',
              marginRight: 18,
            }}
          />
          <div style={{ fontSize: 24, color: '#7d8593', letterSpacing: 3 }}>
            {`AVAILABLE FOR WORK — ${site.locality.toUpperCase()}, ${site.country.toUpperCase()}`}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 116, lineHeight: 1.05, letterSpacing: -4 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 44, color: '#598eff', marginTop: 18 }}>{site.role}</div>
        </div>

        <div style={{ display: 'flex', fontSize: 27, color: '#a3aab4', maxWidth: 880 }}>
          {site.tagline}
        </div>
      </div>
    ),
    size,
  )
}
