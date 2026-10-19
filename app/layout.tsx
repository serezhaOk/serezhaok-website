import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/inter';
import '@fontsource-variable/instrument-sans';
import './globals.css';
import { Header } from '@/components/Header';
import { SideNote } from '@/components/SideNote';
import { CursorDot } from '@/components/CursorDot';
import { site } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.titleName, template: `%s — ${site.titleName}` },
  description: site.description,
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  openGraph: {
    type: 'website',
    url: '/',
    title: site.titleName,
    description: site.description,
    images: [{ url: '/media/og.png', width: 1250, height: 650 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.titleName,
    description: site.description,
    images: ['/media/og.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Header />
        <SideNote />
        <main id="content">{children}</main>
        <CursorDot />
      </body>
    </html>
  );
}
