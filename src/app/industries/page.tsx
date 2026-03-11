import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Industries — TyreBrain AI | EV, Autonomous, Fleet & Performance',
  description:
    'TyreBrain AI serves electric vehicle manufacturers, autonomous system developers, commercial fleet operators, and performance mobility companies with AI-designed tyre compounds.',
};

const INDUSTRIES = [
  {
    id: 'ev',
    emoji: '⚡',
    title: 'Electric Vehicles',
    subtitle: 'Engineered for instant torque, extended range',
    challenge: 'EVs generate instant, high torque loads that destroy conventional tyre compounds prematurely. Regenerative braking creates unique thermal and mechanical stresses that static compounds cannot handle efficiently.',
    solution: 'TyreBrain AI engineers compounds optimised for EV torque profiles, rolling resistance, and extended range efficiency. Our platform models the full EV operating envelope — from launch torque to regen braking to sustained highway loads.',
    stats: [
      { value: '8–15%', label: 'Rolling resistance reduction' },
      { value: '40%', label: 'Longer compound life vs. conventional' },
      { value: '12%', label: 'Range efficiency improvement' },
    ],
    tags: ['High Torque', 'Low Rolling Resistance', 'Range Optimisation', 'Regen Braking'],
    accent: 'cyan',
  },
  {
    id: 'autonomous',
    emoji: '🤖',
    title: 'Autonomous Systems',
    subtitle: 'Predictable behaviour at the edge of capability',
    challenge: 'Autonomous vehicles require predictable, consistent tyre behaviour across all surface and weather conditions — with zero tolerance for performance variance. Unexpected grip loss or compound failure is not recoverable when there is no human in the loop.',
    solution: 'TyreBrain AI\'s simulation ensures compound reliability where it matters most. Every compound is validated across thousands of edge-case scenarios before production. Consistency is engineered in, not tested for.',
    stats: [
      { value: '<0.3%', label: 'Performance variance across conditions' },
      { value: '10k+', label: 'Simulation scenarios per compound' },
      { value: '99.8%', label: 'Specification compliance rate' },
    ],
    tags: ['Consistency', 'All-Weather', 'Edge-Case Validated', 'Safety Critical'],
    accent: 'amber',
  },
  {
    id: 'fleet',
    emoji: '🚛',
    title: 'Commercial Fleets',
    subtitle: 'Durability that improves operational margins',
    challenge: 'Fleet operators face constant pressure to reduce tyre costs and downtime. Unpredictable wear rates, premature compound failure, and inefficient replacement cycles consume budget and time.',
    solution: 'TyreBrain AI designs compounds for maximum durability, extended wear life, and predictable replacement cycles — directly improving operational margins. Digital twin lifecycle modelling gives fleet operators accurate compound longevity forecasts.',
    stats: [
      { value: '25–35%', label: 'Tyre cost reduction potential' },
      { value: '2.4×', label: 'Wear life extension vs. standard' },
      { value: '±5%', label: 'Replacement cycle prediction accuracy' },
    ],
    tags: ['Durability', 'Cost Reduction', 'Lifecycle Modelling', 'Fleet Scale'],
    accent: 'cyan',
  },
  {
    id: 'performance',
    emoji: '🏎️',
    title: 'Performance Mobility',
    subtitle: 'One compound. All conditions.',
    challenge: 'Competitive and high-performance vehicles need dynamic grip without the complexity of seasonal tyre switching. Current solutions force compromise — either peak-condition performance or all-weather capability, rarely both.',
    solution: 'TyreBrain AI creates compounds that perform intelligently across varying conditions. The mechanically adaptive grip architecture responds to surface and temperature changes at the material level — delivering peak grip when needed, predictable behaviour when required.',
    stats: [
      { value: '∞', label: 'Conditions covered by one compound' },
      { value: '< 2ms', label: 'Adaptive response time' },
      { value: 'All', label: 'Surface types validated' },
    ],
    tags: ['Adaptive Grip', 'All-Season', 'Peak Performance', 'Track & Road'],
    accent: 'amber',
  },
];

export default function IndustriesPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container text-center">
          <div className="section-label">Use Cases</div>
          <h1 className={`text-display-xl ${styles.heroH1}`}>
            Built for the Future<br />
            <span className="text-gradient-cyan">of Mobility</span>
          </h1>
          <p className={styles.heroDesc}>
            Every sector of modern mobility faces unique tyre challenges.
            TyreBrain AI is engineered to solve all of them.
          </p>
        </div>
      </section>

      {/* Industry sections */}
      {INDUSTRIES.map((ind, i) => (
        <section
          key={ind.id}
          id={ind.id}
          className={`${styles.industrySection} ${i % 2 === 1 ? styles.industrySectionAlt : ''}`}
        >
          <div className="container">
            <div className={styles.industryGrid}>
              {/* Header */}
              <div className={`reveal ${styles.industryHeader}`}>
                <div className={styles.industryEmoji} aria-hidden="true">{ind.emoji}</div>
                <div className={`section-label ${ind.accent === 'amber' ? styles.labelAmber : ''}`}>
                  Industry
                </div>
                <h2 className={styles.industryTitle}>{ind.title}</h2>
                <p className={`${styles.industrySubtitle} ${ind.accent === 'amber' ? 'text-gradient-amber' : 'text-gradient-cyan'}`}>
                  {ind.subtitle}
                </p>
              </div>

              {/* Content */}
              <div className={`reveal stagger-2 ${styles.industryContent}`}>
                <div className={`${styles.challengeBox} card`}>
                  <div className={styles.challengeLabel}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF4D6A" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    The Challenge
                  </div>
                  <p>{ind.challenge}</p>
                </div>

                <div className={`${styles.solutionBox} card`}>
                  <div className={styles.solutionLabel}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0AF0C8" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    TyreBrain AI Solution
                  </div>
                  <p>{ind.solution}</p>
                </div>
              </div>

              {/* Stats */}
              <div className={`reveal stagger-3 ${styles.industryStats}`}>
                {ind.stats.map((stat, j) => (
                  <div key={j} className={`${styles.statCard} card`}>
                    <div className={`${styles.statValue} ${ind.accent === 'amber' ? 'text-gradient-amber' : 'text-gradient-cyan'}`}>
                      {stat.value}
                    </div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className={`reveal stagger-4 ${styles.industryTags}`}>
                {ind.tags.map((tag) => (
                  <span key={tag} className={`${styles.tag} ${ind.accent === 'amber' ? styles.tagAmber : ''}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className={styles.industryCta}>
        <div className={styles.ctaGlow} aria-hidden="true" />
        <div className="container">
          <div className="text-center reveal">
            <h2 className="text-display-lg">Your Industry. Our Intelligence.</h2>
            <p className={styles.ctaDesc}>Tell us your challenge. We&apos;ll show you what&apos;s possible.</p>
            <Link href="/contact" className="btn btn-primary btn-pulse" id="industries-cta">
              Book a Private Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
