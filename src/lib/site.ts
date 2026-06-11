export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://tyrebrainai.com'
).replace(/\/$/, '');

export const SITE_NAME = 'TyreBrain AI';

export const SITE_DESCRIPTION =
  "TyreBrain AI is the world's first AI-native tyre design and optimisation platform, combining generative compound intelligence, quantum-inspired optimisation, and digital twin simulation.";

export const CONTACT_EMAIL = 'contact@tyrebrainai.com';

export type SiteRoute = {
  path: string;
  title: string;
  description: string;
  changeFrequency: 'weekly' | 'monthly';
  priority: number;
};

export const SITE_ROUTES: SiteRoute[] = [
  {
    path: '/',
    title: 'Quantum-Driven Autonomous Tyre Intelligence',
    description: SITE_DESCRIPTION,
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    path: '/platform',
    title: 'Quantum Tyre Design SaaS Platform',
    description:
      'Explore the TyreBrain AI SaaS platform for compound generation, real-world performance simulation, wear modelling, and production-ready tyre specifications.',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/technology',
    title: 'Four Pillars of Tyre Intelligence',
    description:
      'Deep dive into the four TyreBrain AI technology pillars: generative compound intelligence, quantum-inspired optimisation, digital twin simulation, and adaptive grip.',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/industries',
    title: 'Industries Served by TyreBrain AI',
    description:
      'TyreBrain AI serves electric vehicle manufacturers, autonomous system developers, fleet operators, and performance mobility teams.',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/sustainability',
    title: 'Sustainable Tyre Compound Design',
    description:
      'TyreBrain AI builds compounds from bioengineered rubbers, recyclable materials, and microplastic-reducing formulations.',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/about',
    title: 'About TyreBrain AI',
    description:
      'Meet the founder and industry experience behind TyreBrain AI, a platform built from first-hand tyre-sector knowledge.',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/faq',
    title: 'TyreBrain AI FAQ',
    description:
      'Answers to common questions about TyreBrain AI, the SaaS tyre design platform, credit model, and how to get started.',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/contact',
    title: 'Book a Private Demo',
    description:
      'Book a private TyreBrain AI platform demonstration and contact the team to explore AI-native tyre design.',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
];

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
