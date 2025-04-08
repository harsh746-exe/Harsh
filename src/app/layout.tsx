import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { ColorProvider } from '@/context/ColorContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harsh Dwivedi - Portfolio',
  description: 'Software engineer specializing in building exceptional digital experiences',
  manifest: '/assets/favicon/site.webmanifest',
  icons: {
    icon: [
      {
        url: '/assets/favicon/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/assets/favicon/favicon-96x96.png',
        type: 'image/png',
        sizes: '96x96',
      },
      {
        url: '/assets/favicon/web-app-manifest-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/assets/favicon/web-app-manifest-512x512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/assets/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: [
      {
        url: '/assets/favicon/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ColorProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ColorProvider>
      </body>
    </html>
  );
}
