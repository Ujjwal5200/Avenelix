import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const siteUrl = 'https://avenelix.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Avenelix — AI & Software Engineering Studio', template: '%s — Avenelix' },
  description: 'Avenelix is an independent software studio building AI systems, production software, data systems and digital experiences.',
  applicationName: 'Avenelix',
  keywords: ['AI engineering studio', 'AI software development', 'AI systems', 'RAG development', 'LLM applications', 'software engineering studio', 'data engineering'],
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/favicon.svg' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: { type: 'website', siteName: 'Avenelix', title: 'Avenelix — AI & Software Engineering Studio', description: 'AI systems, production software, data and infrastructure engineered for real-world outcomes.', url: siteUrl },
  twitter: { card: 'summary_large_image', title: 'Avenelix — AI & Software Engineering Studio', description: 'AI systems, production software, data and infrastructure engineered for real-world outcomes.' }
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#050505' };

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Avenelix',
  url: siteUrl,
  description: 'Independent software studio building AI systems, production software, data systems and digital experiences.',
  logo: `${siteUrl}/favicon.svg`
};

const websiteSchema = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Avenelix', url: siteUrl };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
