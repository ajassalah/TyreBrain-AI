import type { MetadataRoute } from 'next';
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'TyreBrain AI',
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#050810',
    theme_color: '#00D4FF',
    lang: 'en-GB',
    icons: [
      {
        src: '/icon.svg?v=3',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
