import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A4A5C',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(60, 60)">
            {/* Main shell */}
            <ellipse
              cx="0"
              cy="0"
              rx="30"
              ry="24"
              stroke="#F5E6D3"
              strokeWidth="3"
              fill="none"
            />
            {/* Shell pattern */}
            <path d="M0 -24 L0 24" stroke="#F5E6D3" strokeWidth="2" opacity="0.5" />
            <path d="M-26 -8 Q0 -14 26 -8" stroke="#F5E6D3" strokeWidth="2" opacity="0.5" />
            <path d="M-26 8 Q0 14 26 8" stroke="#F5E6D3" strokeWidth="2" opacity="0.5" />
            {/* Head */}
            <circle cx="30" cy="-4" r="5.5" fill="#F5E6D3" />
            {/* Front flipper */}
            <path
              d="M-26 -18 Q-36 -28 -40 -20 Q-36 -12 -24 -12"
              fill="#F5E6D3"
              fillOpacity="0.3"
              stroke="#F5E6D3"
              strokeWidth="2"
            />
            {/* Back flipper */}
            <path
              d="M-26 18 Q-36 28 -40 20 Q-36 12 -24 12"
              fill="#F5E6D3"
              fillOpacity="0.3"
              stroke="#F5E6D3"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
