import type { Metadata } from 'next';
import FaqClient from './FaqClient';

export const metadata: Metadata = {
  title: 'FAQ — TyreBrain AI | Common Questions',
  description:
    'Answers to common questions about TyreBrain AI — the SaaS tyre design platform, credit model, platform capabilities, and how to get started.',
};

export default function FAQPage() {
  return <FaqClient />;
}
