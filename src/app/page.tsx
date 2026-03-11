'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './page.module.css';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });
const TyreVisual = dynamic(() => import('@/components/TyreVisual'), { ssr: false });

const STATS = [
  { value: '12', suffix: '+', label: 'Years Industry Experience', sub: 'Tyre sector expertise' },
  { value: '18', suffix: 'mo', label: 'Traditional R&D Cycle', sub: 'Compressed by AI' },
  { value: '1B', suffix: '+', label: 'Compound Permutations', sub: 'Explored per optimisation run' },
];

const PILLARS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Generative Compound Intelligence',
    desc: 'AI generates entirely new compound architectures — not incremental modifications of existing formulas.',
    href: '/technology#generative',
    color: 'cyan',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41"/><path d="M4.93 4.93l1.41 1.41"/>
        <path d="M12 2v2"/><path d="M12 20v2"/><path d="M20 12h2"/><path d="M2 12h2"/>
        <path d="M6.34 17.66l-1.41 1.41"/><path d="M18.36 5.64l-1.41 1.41"/>
        <path d="M17.66 17.66l1.41 1.41"/><path d="M5.64 6.36l1.41 1.41"/>
      </svg>
    ),
    title: 'Quantum-Inspired Optimisation',
    desc: 'Traverses billions of compound permutations to surface global optima no classical method can reach.',
    href: '/technology#quantum',
    color: 'amber',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
        <path d="M7 8l3 3 2-2 3 3"/>
      </svg>
    ),
    title: 'AI Digital Twin Simulation',
    desc: 'Thousands of virtual test scenarios before a compound is ever manufactured — eliminating costly prototypes.',
    href: '/technology#digital-twin',
    color: 'cyan',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
        <path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Mechanically Adaptive Grip',
    desc: 'Load-responsive tread systems without sensors or electronics — adaptation embedded in the material itself.',
    href: '/technology#adaptive-grip',
    color: 'amber',
  },
];

const TRUST_ITEMS = [
  'Michelin Tyre PLC',
  'University of Gloucestershire MBA',
  '12+ Years Industry Experience',
  'United Kingdom HQ',
];

export default function HomePage() {
  useScrollReveal();

  // Typing animation
  const typingRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const words = ['Tyre Compounds', 'R&D Cycles', 'Design Spaces', 'Performance Models'];
    let wi = 0, ci = 0, deleting = false;
    const el = typingRef.current;
    if (!el) return;

    let timeout: ReturnType<typeof setTimeout>;
    const type = () => {
      const word = words[wi];
      if (!deleting) {
        el.textContent = word.slice(0, ci + 1);
        ci++;
        if (ci === word.length) { deleting = true; timeout = setTimeout(type, 1800); return; }
      } else {
        el.textContent = word.slice(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
      }
      timeout = setTimeout(type, deleting ? 50 : 90);
    };
    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.page}>

      {/* ━━━━━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━━━━━ */}
      <section className={styles.hero} id="hero" aria-label="Hero Section">
        <div className={styles.particleBg} aria-hidden="true">
          <ParticleField />
        </div>

        {/* Radial glow layers */}
        <div className={styles.heroBgGlow1} aria-hidden="true" />
        <div className={styles.heroBgGlow2} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={`section-label ${styles.heroLabel}`}>
              World&apos;s First AI-Native Tyre Platform
            </div>

            <h1 className={`text-display-xl ${styles.heroHeadline}`}>
              Quantum-Driven<br />
              <span className="text-gradient-cyan">Autonomous</span><br />
              Tyre Intelligence
            </h1>

            <p className={styles.heroSub}>
              Self-adaptive, multi-layered tyre compounds that dynamically optimise{' '}
              <strong>grip, stiffness, and contact behaviour</strong> across all driving conditions —
              without sensors or electronics.
            </p>

            {/* Typing row */}
            <div className={styles.typingRow} aria-hidden="true">
              <span className={styles.typingLabel}>AI is optimising </span>
              <span ref={typingRef} className={styles.typingWord} />
              <span className={styles.typingCursor}>|</span>
            </div>

            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary btn-pulse" id="hero-book-demo">
                Book a Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a href="#platform-preview" className="btn btn-secondary" id="hero-explore-platform">
                Explore the Platform
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </a>
            </div>

            <div className={styles.heroMeta}>
              <span className={styles.heroMetaBadge}>
                <span className={styles.dot} />
                Platform Live
              </span>
              <span className={styles.heroMetaBadge}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                </svg>
                UK Headquartered
              </span>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <TyreVisual />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator} aria-hidden="true">
          <span className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ PROBLEM STATS ━━━━━━━━━━━━━━━━━━━━ */}
      <section className={styles.statsSection} id="problem" aria-label="Industry Problem">
        <div className="container">
          <div className={`text-center reveal ${styles.statsSectionTop}`}>
            <div className="section-label">The Problem</div>
            <h2 className="text-display-lg">The Problem with Traditional Tyre R&D</h2>
            <p className={styles.sectionDesc}>
              Traditional tyre development is slow, expensive, and constrained by static material systems.
              The industry hasn&apos;t changed — until now.
            </p>
          </div>

          <div className={styles.statsGrid}>
            {STATS.map((s, i) => (
              <div key={i} className={`card reveal stagger-${i + 1} ${styles.statCard}`}>
                <div className={styles.warningDot} aria-hidden="true" />
                <div className={styles.statValue}>
                  {s.value}<span className={styles.statSuffix}>{s.suffix}</span>
                </div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statSub}>{s.sub}</div>
              </div>
            ))}
          </div>

          <div className={`reveal stagger-4 ${styles.problemText}`}>
            <p>
              Static compounds cannot adapt to the dynamic demands of modern mobility: EVs, autonomous systems, and commercial fleets.
              R&D cycles lasting <strong>12–18 months</strong> with high prototyping costs make innovation slow and risky.
              TyreBrain AI changes the equation entirely.
            </p>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ SOLUTION ━━━━━━━━━━━━━━━━━━━━ */}
      <section className={styles.solutionSection} id="solution" aria-label="TyreBrain Solution">
        <div className={styles.solutionGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.solutionGrid}>
            <div className={`reveal-left ${styles.solutionVisual}`} aria-hidden="true">
              <div className={styles.solutionDiagram}>
                <div className={styles.diagramCenter}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#00D4FF" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="6" stroke="#0AF0C8" strokeWidth="1" strokeDasharray="3 2" />
                    <circle cx="12" cy="12" r="3" fill="#00D4FF" opacity="0.8" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#00D4FF" strokeWidth="1" opacity="0.4" />
                  </svg>
                </div>
                {['Generative AI', 'Quantum Opt.', 'Digital Twin', 'Adaptive Grip'].map((label, i) => {
                  const angles = [315, 45, 135, 225];
                  const angle = (angles[i] * Math.PI) / 180;
                  const r = 110;
                  return (
                    <div
                      key={label}
                      className={styles.diagramNode}
                      style={{
                        left: `calc(50% + ${Math.cos(angle) * r}px)`,
                        top: `calc(50% + ${Math.sin(angle) * r}px)`,
                      }}
                    >
                      {label}
                    </div>
                  );
                })}
                <svg className={styles.diagramLines} viewBox="0 0 300 300" aria-hidden="true">
                  <circle cx="150" cy="150" r="110" stroke="rgba(0,212,255,0.1)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                  <circle cx="150" cy="150" r="70" stroke="rgba(10,240,200,0.1)" strokeWidth="1" fill="none" />
                </svg>
              </div>
            </div>

            <div className={`reveal-right ${styles.solutionText}`}>
              <div className="section-label">The Solution</div>
              <h2 className="text-display-lg">A New Intelligence for Tyre Design</h2>
              <div className="divider" />
              <p>
                TyreBrain AI transforms tyre design into a fully autonomous computational process — 
                combining generative AI, quantum-inspired optimisation, and digital twin simulation 
                into a single, unified SaaS platform.
              </p>
              <div className={styles.solutionFeatures}>
                {[
                  'Autonomous compound generation in hours, not months',
                  'Virtual testing across millions of real-world scenarios',
                  'Manufacturing-ready output specs, every time',
                  'Embedded adaptation — no sensors, no electronics',
                ].map((f, i) => (
                  <div key={i} className={styles.solutionFeature}>
                    <div className={styles.featureCheck} aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/platform" className="btn btn-primary" id="solution-explore-platform">
                Explore the Platform
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ FOUR PILLARS PREVIEW ━━━━━━━━━━━━━━━━━━━━ */}
      <section className={styles.pillarsSection} id="platform-preview" aria-label="Four Pillars">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Core Technology</div>
            <h2 className="text-display-lg">Four Pillars of Intelligence</h2>
            <p className={styles.sectionDesc}>
              Every TyreBrain AI compound is engineered through a four-layer computational stack.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {PILLARS.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className={`card reveal stagger-${i + 1} ${styles.pillarCard} ${p.color === 'amber' ? 'card-amber' : ''}`}
                id={`pillar-card-${i + 1}`}
              >
                <div className={`${styles.pillarIcon} ${p.color === 'amber' ? styles.pillarIconAmber : ''}`}>
                  {p.icon}
                </div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
                <div className={styles.pillarArrow}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center reveal" style={{ marginTop: '2.5rem' }}>
            <Link href="/technology" className="btn btn-secondary" id="view-all-pillars">
              View Full Technology Stack
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ TRUST BAR ━━━━━━━━━━━━━━━━━━━━ */}
      <section className={styles.trustSection} aria-label="Trust Indicators">
        <div className="container">
          <p className={styles.trustTagline}>
            &ldquo;Built by an industry insider. Powered by frontier AI.&rdquo;
          </p>
          <div className={styles.trustBar}>
            {TRUST_ITEMS.map((item, i) => (
              <div key={i} className={styles.trustItem}>
                <div className={styles.trustDot} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ HOME CTA ━━━━━━━━━━━━━━━━━━━━ */}
      <section className={styles.ctaSection} id="home-cta" aria-label="Call to Action">
        <div className={styles.ctaGlow} aria-hidden="true" />
        <div className="container">
          <div className={`text-center reveal ${styles.ctaContent}`}>
            <div className="section-label">Ready to Begin</div>
            <h2 className={`text-display-lg ${styles.ctaHeadline}`}>
              Redefine Tyre Innovation
            </h2>
            <p className={styles.ctaDesc}>
              Join the frontier of tyre engineering. Book a private platform demonstration today.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary btn-pulse" id="cta-book-demo">
                Book a Private Demo
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/platform" className="btn btn-secondary" id="cta-learn-more">
                Learn More
              </Link>
            </div>
            <p className={styles.ctaNote}>No commitment required · United Kingdom based</p>
          </div>
        </div>
      </section>
    </div>
  );
}
