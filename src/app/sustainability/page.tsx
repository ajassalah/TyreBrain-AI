import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Sustainability — TyreBrain AI | Carbon-Negative by Design',
  description:
    'TyreBrain AI builds compounds from bioengineered rubbers, recyclable materials, and microplastic-reducing formulations. Sustainability is the foundation, not a feature.',
};

const PILLARS = [
  {
    id: 'bioengineered',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 0 1 10 10c0 4-2.4 7.5-6 9.3"/><path d="M12 2C6.5 2 2 6.5 2 12"/>
        <path d="M12 22C6.5 22 2 17.5 2 12"/><path d="M12 2v20M2 12h20"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Bioengineered Rubbers',
    stat: '85%',
    statLabel: 'Petroleum-free composition achievable',
    desc: 'Compounds designed from bio-sourced, renewable rubber systems that reduce dependency on petroleum-derived materials. AI-driven formulation discovers novel bio-polymer combinations that match or exceed the performance of conventional synthetics.',
    color: 'teal',
  },
  {
    id: 'recyclable',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/>
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/>
      </svg>
    ),
    title: 'Recyclable Compounds',
    stat: '100%',
    statLabel: 'End-of-life material recovery architecture',
    desc: 'End-of-life compound architecture enables material recovery and reuse — closing the loop on tyre waste. Compound molecular structures are designed with disassembly in mind from the first formulation run.',
    color: 'cyan',
  },
  {
    id: 'microplastic',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22V12"/><path d="m8 18 4 4 4-4"/>
        <path d="M20 6C20 8.2 16.4 10 12 10S4 8.2 4 6s3.6-4 8-4 8 1.8 8 4z"/>
        <path d="M4 6v6c0 2.2 3.6 4 8 4"/>
        <path d="M20 12V6"/>
      </svg>
    ),
    title: 'Reduced Microplastic Shedding',
    stat: '60%',
    statLabel: 'Reduction in tyre particle emissions',
    desc: 'Precision compound design minimises tyre particle emissions — one of the leading sources of environmental microplastics. TyreBrain AI optimises compound cohesion at the molecular level to reduce wear-generated particle release.',
    color: 'teal',
  },
  {
    id: 'emissions',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20"/><path d="M5 20V8l7-6 7 6v12"/><path d="M9 20v-5h6v5"/>
      </svg>
    ),
    title: 'Lower Lifecycle Emissions',
    stat: '40%',
    statLabel: 'Lifecycle carbon footprint reduction',
    desc: 'From design to disposal, TyreBrain AI compounds generate fewer carbon emissions — validated through digital twin lifecycle analysis that models full cradle-to-grave environmental impact of every compound specification.',
    color: 'cyan',
  },
];

const TIMELINE = [
  { year: '2024', label: 'Platform launch with bio-polymer integration' },
  { year: '2025', label: 'Microplastic reduction validation completed' },
  { year: '2026', label: 'Full recyclable compound architecture released' },
  { year: '2027', label: 'Carbon-negative certification pathway achieved' },
];

export default function SustainabilityPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGlowGreen} aria-hidden="true" />
        <div className="container text-center">
          <div className={`section-label ${styles.labelGreen}`}>Sustainability</div>
          <h1 className={`text-display-xl ${styles.heroH1}`}>
            Carbon-Negative<br />
            <span className={styles.textGradientGreen}>by Design</span>
          </h1>
          <p className={styles.heroDesc}>
            Sustainability isn&apos;t a feature of TyreBrain AI — it&apos;s the foundation.
            Every compound we design is optimised for performance and the planet.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className={styles.visionSection}>
        <div className="container">
          <blockquote className={`reveal ${styles.vision}`}>
            <svg className={styles.quoteIcon} width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="rgba(10,240,200,0.15)" stroke="#0AF0C8" strokeWidth="1"/>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="rgba(10,240,200,0.15)" stroke="#0AF0C8" strokeWidth="1"/>
            </svg>
            <p className={styles.visionText}>
              Every compound TyreBrain AI designs is optimised not just for performance — but for the planet it drives on.
            </p>
            <cite className={styles.visionCite}>— TyreBrain AI sustainability mandate</cite>
          </blockquote>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div className="text-center reveal">
            <div className={`section-label ${styles.labelGreen}`}>Our Commitments</div>
            <h2 className="text-display-lg">Four Sustainability Pillars</h2>
          </div>

          <div className={styles.pillarsGrid}>
            {PILLARS.map((p, i) => (
              <div
                key={p.id}
                id={p.id}
                className={`card reveal stagger-${i + 1} ${styles.pillarCard}`}
              >
                <div className={styles.pillarIcon} aria-hidden="true">{p.icon}</div>
                <div className={styles.pillarStat}>{p.stat}</div>
                <div className={styles.pillarStatLabel}>{p.statLabel}</div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className="text-center reveal">
            <div className={`section-label ${styles.labelGreen}`}>Roadmap</div>
            <h2 className="text-display-lg">Sustainability Milestones</h2>
          </div>

          <div className={styles.timeline}>
            {TIMELINE.map((item, i) => (
              <div key={i} className={`reveal stagger-${i + 1} ${styles.timelineItem}`}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineDot} aria-hidden="true" />
                <div className={styles.timelineLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.sustainCta}>
        <div className="container">
          <div className="text-center reveal">
            <h2 className="text-display-lg">Design for Performance. Design for the Planet.</h2>
            <p className={styles.ctaDesc}>
              Explore how TyreBrain AI&apos;s sustainable compound engineering can meet your environmental commitments.
            </p>
            <Link href="/contact" className="btn btn-primary btn-pulse" id="sustain-cta">
              Book a Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
