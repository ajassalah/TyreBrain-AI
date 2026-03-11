import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact — TyreBrain AI | Book a Private Demo',
  description:
    'Book a private TyreBrain AI platform demonstration. Contact our team to explore adaptive compound generation and predictive performance simulation.',
};

export default function ContactPage() {
  return <ContactClient />;
}
