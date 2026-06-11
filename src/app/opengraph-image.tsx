import { ImageResponse } from 'next/og';
import { SITE_NAME } from '@/lib/site';

export const alt = 'TyreBrain AI autonomous tyre intelligence platform';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'radial-gradient(circle at 72% 42%, rgba(0, 212, 255, 0.22), transparent 32%), linear-gradient(135deg, #050810 0%, #081020 58%, #030609 100%)',
          color: '#FFFFFF',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              border: '3px dashed #00D4FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00D4FF',
              fontSize: '28px',
              fontWeight: 700,
            }}
          >
            AI
          </div>
          <div style={{ fontSize: '34px', fontWeight: 700 }}>{SITE_NAME}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '84px',
              lineHeight: 0.92,
              fontWeight: 800,
              letterSpacing: '-3px',
              maxWidth: '880px',
            }}
          >
            Quantum-Driven Tyre Intelligence
          </div>
          <div
            style={{
              fontSize: '26px',
              lineHeight: 1.35,
              color: '#A8B2C1',
              maxWidth: '780px',
            }}
          >
            Generative compound design, digital twin simulation, and adaptive grip architecture.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '22px',
            color: '#00D4FF',
            fontSize: '22px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          <span>AI-native SaaS platform</span>
          <span style={{ color: '#F5A623' }}>United Kingdom</span>
        </div>
      </div>
    ),
    size,
  );
}
