import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import {
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from '@/lib/site';

const title = 'TyreBrain AI - Quantum-Driven Autonomous Tyre Intelligence';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title,
  description: SITE_DESCRIPTION,
  keywords: [
    'tyre design AI',
    'compound optimisation',
    'digital twin tyre',
    'quantum tyre engineering',
    'EV tyre technology',
    'autonomous vehicle tyres',
    'tyre SaaS platform',
    'TyreBrain AI',
  ],
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': absoluteUrl('/rss.xml'),
    },
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/icon.svg?v=3', type: 'image/svg+xml' },
      { url: '/favicon.svg?v=3', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg?v=3',
    apple: '/icon.svg?v=3',
  },
  openGraph: {
    title,
    description: SITE_DESCRIPTION,
    url: '/',
    type: 'website',
    locale: 'en_GB',
    siteName: SITE_NAME,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'TyreBrain AI autonomous tyre intelligence platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: SITE_DESCRIPTION,
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': absoluteUrl('/#organization'),
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl('/opengraph-image'),
      email: CONTACT_EMAIL,
      foundingDate: '2024',
      founder: {
        '@type': 'Person',
        name: 'Randeer Sandaruwan',
        jobTitle: 'Founder & CEO',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '12 The Pines, Hook Road',
        addressLocality: 'Chessington',
        postalCode: 'KT9 1EB',
        addressCountry: 'GB',
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      name: SITE_NAME,
      url: SITE_URL,
      publisher: {
        '@id': absoluteUrl('/#organization'),
      },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': absoluteUrl('/#software'),
      name: SITE_NAME,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      publisher: {
        '@id': absoluteUrl('/#organization'),
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'GBP',
        price: '0',
        description: 'Private demonstration available on request.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <ScrollReveal />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
