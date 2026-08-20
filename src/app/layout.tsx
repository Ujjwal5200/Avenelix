import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://avenelix.com'),
  title: { default: 'Avenelix — Intelligent Software Studio', template: '%s — Avenelix' },
  description: 'Avenelix builds intelligent software systems, AI products and production-grade digital experiences.',
  applicationName: 'Avenelix',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  robots: { index: true, follow: true },
  openGraph: { type: 'website', siteName: 'Avenelix', title: 'Avenelix — Intelligent Software Studio', description: 'Intelligent software systems, AI products and digital experiences.', url: 'https://avenelix.com' },
  twitter: { card: 'summary_large_image', title: 'Avenelix — Intelligent Software Studio', description: 'Intelligent software systems, AI products and digital experiences.' }
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#050505' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
