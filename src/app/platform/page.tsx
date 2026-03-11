import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Platform — TyreBrain AI | Quantum Tyre Design SaaS',
  description:
    'Explore TyreBrain AI\'s SaaS-based computational engine: adaptive compound generation, real-world simulation, wear modelling, and manufacturing-ready outputs.',
};

const FEATURES = [
  {
    id: 'compound-gen',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Adaptive Multi-Phase Compound Generation',
    desc: 'AI generates novel tyre compound formulations tuned to specific performance targets across grip, stiffness, and durability. Each generation cycle explores configurations beyond the reach of conventional methods.',
    accent: 'cyan',
    tags: ['Generative AI', 'Materials Science', 'Formulation'],
  },
  {
    id: 'simulation',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M7 8l3 3 2-2 3 3"/><path d="M8 21h8"/><path d="M12 17v4"/>
      </svg>
    ),
    title: 'Real-World Performance Simulation',
    desc: 'Digital twin modelling simulates compound behaviour across surface types, temperatures, and load conditions. Thousands of virtual test runs replace months of physical prototype testing.',
    accent: 'amber',
    tags: ['Digital Twin', 'FEA Simulation', 'Thermal Modelling'],
  },
  {
    id: 'wear-modelling',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Wear & Thermal Modelling',
    desc: 'Predictive analysis of tyre degradation and heat management over the full lifecycle. Understand wear curves, hotspot formation, and compound fatigue before manufacturing a single prototype.',
    accent: 'cyan',
    tags: ['Predictive Analytics', 'Lifecycle Analysis', 'Thermal FEA'],
  },
  {
    id: 'mfg-output',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Manufacturing-Ready Outputs',
    desc: 'Every design is delivered as a complete, production-ready specification — not a concept or rough recommendation. Outputs are formatted for direct integration into existing manufacturing workflows.',
    accent: 'amber',
    tags: ['Spec Sheets', 'CAD Compatible', 'Production Ready'],
  },
];

const TIERS = [
  {
    name: 'Starter',
    credits: '500',
    desc: 'Targeted compound tests and initial exploration',
    features: ['Compound generation runs', 'Basic simulation suite', 'Spec sheet export', 'Email support'],
    accent: 'secondary',
    badge: null,
  },
  {
    name: 'Professional',
    credits: '2,500',
    desc: 'Full-platform access for active development teams',
    features: ['Advanced compound generation', 'Full digital twin suite', 'Wear & thermal modelling', 'Priority support', 'API access'],
    accent: 'primary',
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    credits: 'Custom',
    desc: 'Unlimited access for large-scale R&D operations',
    features: ['Unlimited simulations', 'Custom model training', 'Dedicated infrastructure', 'SLA guarantee', 'Account manager'],
    accent: 'amber',
    badge: 'Full Power',
  },
];

export default function PlatformPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label">SaaS Platform</div>
            <h1 className={`text-display-xl ${styles.heroH1}`}>
              The Quantum<br />
              <span className="text-gradient-cyan">Design Platform</span>
            </h1>
            <p className={styles.heroDesc}>
              A SaaS-based computational engine for tyre manufacturers, OEMs, and mobility innovators.
              Not a manufacturer — a design intelligence layer.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary btn-pulse" id="platform-book-demo">
                Request Platform Access
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/technology" className="btn btn-secondary" id="platform-view-tech">
                View Technology Stack
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Positioning */}
      <section className={styles.positioningSection}>
        <div className="container">
          <div className={styles.positioningGrid}>
            {[
              { icon: '🧠', title: 'AI-Powered', desc: 'Generative models that design compounds no human team would discover in time.' },
              { icon: '☁️', title: 'Cloud-Based', desc: 'Access computational power from anywhere. No hardware, no infrastructure.' },
              { icon: '📐', title: 'Engineering-Grade', desc: 'Every output meets production specification standards, ready for manufacture.' },
              { icon: '⚡', title: 'Rapid Iteration', desc: 'Compress 12-month R&D cycles into hours of automated simulation.' },
            ].map((item, i) => (
              <div key={i} className={`card reveal stagger-${i + 1} ${styles.posCard}`}>
                <span className={styles.posIcon}>{item.icon}</span>
                <h3 className={styles.posTitle}>{item.title}</h3>
                <p className={styles.posDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Core Capabilities</div>
            <h2 className="text-display-lg">Everything You Need to Design Better Tyres</h2>
          </div>

          <div className={styles.featuresGrid}>
            {FEATURES.map((f, i) => (
              <div
                key={f.id}
                id={f.id}
                className={`card reveal stagger-${(i % 2) + 1} ${styles.featureCard} ${f.accent === 'amber' ? 'card-amber' : ''}`}
              >
                <div className={`${styles.featureIcon} ${f.accent === 'amber' ? styles.featureIconAmber : ''}`}>
                  {f.icon}
                </div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
                <div className={styles.featureTags}>
                  {f.tags.map((tag) => (
                    <span key={tag} className={`${styles.tag} ${f.accent === 'amber' ? styles.tagAmber : ''}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Economy */}
      <section className={styles.creditsSection} id="credits">
        <div className={styles.creditsGlow} aria-hidden="true" />
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Pricing Model</div>
            <h2 className="text-display-lg">Usage-Based Intelligence</h2>
            <p className={styles.creditsDesc}>
              Computational credits are consumed based on optimisation depth and simulation complexity.
              Scale up or down as your R&D demands change.
            </p>
          </div>

          <div className={styles.tiersGrid}>
            {TIERS.map((tier, i) => (
              <div
                key={i}
                className={`card reveal stagger-${i + 1} ${styles.tierCard} ${tier.accent === 'primary' ? styles.tierFeatured : ''} ${tier.accent === 'amber' ? 'card-amber' : ''}`}
              >
                {tier.badge && (
                  <div className={`${styles.tierBadge} ${tier.accent === 'amber' ? styles.tierBadgeAmber : ''}`}>
                    {tier.badge}
                  </div>
                )}
                <h3 className={styles.tierName}>{tier.name}</h3>
                <div className={styles.tierCredits}>
                  <span className={`${styles.tierCreditNum} ${tier.accent === 'amber' ? 'text-gradient-amber' : 'text-gradient-cyan'}`}>
                    {tier.credits}
                  </span>
                  <span className={styles.tierCreditLabel}>
                    {tier.credits === 'Custom' ? 'Credits' : 'Credits / mo'}
                  </span>
                </div>
                <p className={styles.tierDesc}>{tier.desc}</p>
                <ul className={styles.tierFeatures}>
                  {tier.features.map((feat) => (
                    <li key={feat} className={styles.tierFeature}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0AF0C8" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn ${tier.accent === 'primary' ? 'btn-primary' : tier.accent === 'amber' ? 'btn-amber' : 'btn-secondary'}`}
                  id={`tier-cta-${i}`}
                >
                  {tier.credits === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>

          <p className={styles.creditNote}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
            </svg>
            Credits roll over monthly. Enterprise clients receive dedicated credit allocations and SLA support.
          </p>
        </div>
      </section>

      {/* Platform CTA */}
      <section className={styles.platformCta}>
        <div className="container">
          <div className={`text-center reveal ${styles.ctaInner}`}>
            <h2 className="text-display-lg">Ready to Accelerate Your R&D?</h2>
            <p>Book a private demonstration and see TyreBrain AI in action.</p>
            <Link href="/contact" className="btn btn-primary btn-pulse" id="platform-bottom-cta">
              Book a Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
