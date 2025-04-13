import { ImageResponse } from 'next/og';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const runtime = 'edge';
export const alt = 'Harsh Dwivedi - Portfolio';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#121212', // Dark background matching the site
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '4rem',
          color: 'white',
          fontFamily: inter.style.fontFamily,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          <p
            style={{
              fontSize: '1.5rem',
              margin: 0,
              color: '#cccccc',
              opacity: 0.8,
            }}
          >
            Hi, my name is
          </p>
          <h1
            style={{
              fontSize: '5rem',
              fontWeight: 'bold',
              margin: 0,
              color: '#22aa4b', // Matching your site's green
              lineHeight: 1.1,
            }}
          >
            Harsh Dwivedi.
          </h1>
          <h2
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              margin: 0,
              color: '#cccccc',
              opacity: 0.8,
              lineHeight: 1.1,
            }}
          >
            Software Engineer & ML Enthusiast
          </h2>
          <p
            style={{
              fontSize: '1.5rem',
              margin: 0,
              color: '#888888',
              maxWidth: '800px',
              marginTop: '1rem',
            }}
          >
            I'm a software engineer enthusiastic about emerging technologies and their
            transformative potential, currently focused on building innovative projects that
            leverage the power of AI.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
