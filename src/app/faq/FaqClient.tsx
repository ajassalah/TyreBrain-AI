'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

const FAQS = [
  {
    q: 'Is TyreBrain AI a tyre manufacturer?',
    a: 'No. TyreBrain AI is a SaaS-based tyre design and optimisation platform. We provide the computational intelligence — manufacturers bring the production capability. Our role is purely in the design and specification layer.',
  },
  {
    q: 'Does the platform require sensors or electronics in the tyre?',
    a: 'No. All adaptation is embedded directly into the material architecture of the compound. TyreBrain AI-designed tyres perform intelligently without any electronic components, sensors, or active systems. The intelligence is in the material itself.',
  },
  {
    q: 'Who is TyreBrain AI designed for?',
    a: 'Our primary users are tyre manufacturers, OEMs, EV innovators, and commercial fleet operators looking to accelerate compound development and reduce R&D costs. We also serve research institutions and performance mobility companies.',
  },
  {
    q: 'How does the credit economy model work?',
    a: 'Computational credits are consumed based on the depth of optimisation and simulation complexity chosen. A simple compound generation run uses fewer credits than a full multi-scenario digital twin simulation. This gives clients flexible, scalable access to AI design power — from targeted tests to full-platform simulations.',
  },
  {
    q: 'How long does it take to generate a compound design?',
    a: 'Traditional R&D cycles take 12–18 months. TyreBrain AI compresses initial compound generation into hours and comprehensive simulation validation into days. The exact timeline depends on simulation depth and complexity requirements.',
  },
  {
    q: 'Is TyreBrain AI available globally?',
    a: 'Yes. The platform is SaaS-based and accessible from anywhere with an internet connection. Our headquarters are in the United Kingdom, and we support clients globally.',
  },
  {
    q: 'What outputs does the platform deliver?',
    a: 'Every compound design is delivered as a complete, production-ready specification document — including compound formulation, additive packages, cure system specifications, and performance validation data. Outputs are formatted for direct integration into manufacturing workflows.',
  },
  {
    q: 'Can TyreBrain AI integrate with our existing R&D workflows?',
    a: 'Yes. Enterprise clients receive API access and dedicated integration support. TyreBrain AI is designed to augment your existing engineering team — not replace it. The platform handles the computational exploration; your engineers make the final manufacturing decisions.',
  },
  {
    q: 'How does TyreBrain AI approach data security?',
    a: 'All compound designs, client data, and simulation results are treated as strictly confidential. Enterprise clients receive dedicated infrastructure with complete data isolation. We do not share or use client compound data to train shared models.',
  },
  {
    q: 'What makes TyreBrain AI different from existing simulation tools?',
    a: 'Existing tools simulate compounds you have already designed. TyreBrain AI generates entirely new compound architectures using generative AI — discovering formulations that humans and classical tools would never reach. It\'s the difference between a better calculator and autonomous discovery.',
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button
        className={styles.faqQuestion}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id={`faq-${index}`}
        aria-controls={`faq-answer-${index}`}
      >
        <span className={styles.faqQ}>
          <span className={styles.faqQLabel} aria-hidden="true">Q{String(index + 1).padStart(2, '0')}</span>
          {q}
        </span>
        <span className={`${styles.faqChevron} ${open ? styles.faqChevronOpen : ''}`} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </button>
      <div
        className={styles.faqAnswer}
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-${index}`}
        style={{ maxHeight: open ? '400px' : '0' }}
      >
        <p className={styles.faqAnswerText}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container text-center">
          <div className="section-label">FAQ</div>
          <h1 className={`text-display-xl ${styles.heroH1}`}>
            Common <span className="text-gradient-cyan">Questions</span>
          </h1>
          <p className={styles.heroDesc}>
            Everything you need to know about TyreBrain AI, the platform, and how we work.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqGrid}>
            <div className={styles.faqList}>
              {FAQS.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>

            <aside className={`card ${styles.faqSidebar}`}>
              <div className={styles.sidebarTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
                </svg>
                Still have questions?
              </div>
              <p className={styles.sidebarDesc}>
                Can&apos;t find the answer you&apos;re looking for? Book a private demonstration
                and speak directly with our team.
              </p>
              <Link href="/contact" className="btn btn-primary" id="faq-book-demo">
                Book a Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <div className={styles.sidebarDivider} />
              <div className={styles.sidebarContact}>
                <a href="mailto:contact@tyrebrainai.com" className={styles.sidebarLink}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  contact@tyrebrainai.com
                </a>
                <span className={styles.sidebarLoc}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                  </svg>
                  12 The Pines, Hook Road, Chessingtom, United Kingdom, KT9 1EB
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
