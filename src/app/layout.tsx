import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'TyreBrain AI — Quantum-Driven Autonomous Tyre Intelligence',
  description:
    "TyreBrain AI is the world's first AI-native platform engineering self-adaptive, multi-layered tyre compounds that dynamically optimise grip, stiffness, and contact behaviour across all driving conditions.",
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
  openGraph: {
    title: 'TyreBrain AI — Quantum-Driven Autonomous Tyre Intelligence',
    description:
      "The world's first AI-native tyre design platform. Generative compound intelligence, quantum-inspired optimisation, and digital twin simulation.",
    type: 'website',
    locale: 'en_GB',
    siteName: 'TyreBrain AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TyreBrain AI — Quantum-Driven Autonomous Tyre Intelligence',
    description: "The world's first AI-native tyre design platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TyreBrain AI',
  description: "The world's first AI-native tyre design and optimisation platform.",
  url: 'https://tyrebrainai.com',
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'Randeer Sandaruwan',
    jobTitle: 'Founder & CEO',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
  sameAs: [],
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
        <Navbar />
        <ScrollReveal />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
