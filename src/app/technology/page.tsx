import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Technology — TyreBrain AI | Four Pillars of Tyre Intelligence',
  description:
    'Deep dive into TyreBrain AI\'s four technology pillars: Generative Compound Intelligence, Quantum-Inspired Optimisation, AI Digital Twin Simulation, and Mechanically Adaptive Grip.',
};

const PILLARS = [
  {
    id: 'generative',
    number: '01',
    title: 'Generative Compound Intelligence',
    subtitle: 'AI-designed bioengineered rubber systems',
    desc: [
      'The platform generates entirely new compound architectures — not incremental modifications of existing formulas. Using generative models trained on material science data, TyreBrain AI discovers compound configurations that would take human R&D teams months to reach.',
      'Bioengineered rubber matrices are designed from first principles, combining petroleum-free base polymers with precisely tuned additive packages. Each compound is validated computationally before any physical material is produced.',
    ],
    visual: 'layers',
    tags: ['Generative Models', 'Material Science AI', 'Bioengineered Rubbers', 'Novel Formulation'],
    accent: 'cyan',
  },
  {
    id: 'quantum',
    number: '02',
    title: 'Quantum-Inspired Optimisation',
    subtitle: 'Exploration of billions of compound permutations',
    desc: [
      'Classical optimisation methods get trapped in local minima — finding a good solution, but never the best one. TyreBrain AI uses quantum-inspired algorithms to traverse vast design spaces and surface global optima: compounds that perform better across more conditions simultaneously.',
      'By simulating quantum superposition and entanglement in classical hardware, the optimisation engine explores solution landscapes orders of magnitude larger than any gradient-descent approach.',
    ],
    visual: 'quantum',
    tags: ['Quantum-Inspired Algorithms', 'Global Optimisation', 'Design Space Exploration', 'Multi-Objective'],
    accent: 'amber',
  },
  {
    id: 'digital-twin',
    number: '03',
    title: 'AI Digital Twin Simulation',
    subtitle: 'Predictive modelling of grip, wear, and deformation',
    desc: [
      'Before a compound is ever manufactured, TyreBrain AI runs thousands of virtual test scenarios. Each digital twin accurately replicates real-world tyre behaviour — contact patch dynamics, deformation under load, thermal distribution, and wear progression.',
      'The simulation layer eliminates costly physical prototypes at the early design stage. Only validated compounds proceed to physical testing, dramatically reducing waste and accelerating the development timeline.',
    ],
    visual: 'twin',
    tags: ['FEA Simulation', 'Contact Mechanics', 'Wear Prediction', 'Virtual Prototyping'],
    accent: 'cyan',
  },
  {
    id: 'adaptive-grip',
    number: '04',
    title: 'Mechanically Adaptive Grip Architecture',
    subtitle: 'Load-responsive tread systems without electronics',
    desc: [
      'The adaptation is embedded directly into the material structure. As load, temperature, and surface conditions change, the compound responds mechanically — no sensors, no software, no failure points.',
      'Micro-scale tread architecture and compound phase transitions are engineered to respond predictably across the full operating envelope. One compound, all conditions.',
    ],
    visual: 'grip',
    tags: ['Phase-Change Materials', 'Structural Adaptation', 'Zero Electronics', 'All-Condition Performance'],
    accent: 'amber',
  },
];

function PillarVisual({ type, accent }: { type: string; accent: string }) {
  const color = accent === 'cyan' ? '#00D4FF' : '#F5A623';
  const colorDim = accent === 'cyan' ? 'rgba(0,212,255,0.2)' : 'rgba(245,166,35,0.2)';

  if (type === 'layers') {
    return (
      <svg className={styles.pillarSvg} viewBox="0 0 280 220" fill="none" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(0, ${i * 38})`}>
            <rect x="20" y="8" width="240" height="24" rx="4" fill={colorDim} stroke={color} strokeWidth="0.75" opacity={1 - i * 0.15} />
            <rect x="20" y="8" width={`${200 - i * 25}px`} height="24" rx="4" fill={color} opacity={0.12 + i * 0.03} />
            <text x="30" y="24" fill={color} fontSize="8" fontFamily="JetBrains Mono" opacity="0.7">
              {['POLYMER BASE', 'FILLER MATRIX', 'ADDITIVE PKG', 'CURE SYSTEM', 'PLASTICISER'][i]}
            </text>
            <text x="240" y="24" textAnchor="end" fill={color} fontSize="8" fontFamily="JetBrains Mono" opacity="0.5">
              {['94%', '87%', '91%', '96%', '82%'][i]}
            </text>
          </g>
        ))}
      </svg>
    );
  }

  if (type === 'quantum') {
    return (
      <svg className={styles.pillarSvg} viewBox="0 0 280 220" fill="none" aria-hidden="true">
        <circle cx="140" cy="110" r="80" stroke={color} strokeWidth="0.5" opacity="0.2" strokeDasharray="3 3" />
        <circle cx="140" cy="110" r="55" stroke={color} strokeWidth="0.5" opacity="0.3" strokeDasharray="2 4" />
        <circle cx="140" cy="110" r="30" stroke={color} strokeWidth="1" opacity="0.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 140 + Math.cos(rad) * 80;
          const y = 110 + Math.sin(rad) * 80;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill={color} opacity="0.7" />
              <line x1="140" y1="110" x2={x} y2={y} stroke={color} strokeWidth="0.5" opacity="0.2" />
            </g>
          );
        })}
        <circle cx="140" cy="110" r="8" fill={color} opacity="0.9" />
        <text x="140" y="190" textAnchor="middle" fill={color} fontSize="9" fontFamily="JetBrains Mono" opacity="0.6">
          10⁹ PERMUTATIONS EXPLORED
        </text>
      </svg>
    );
  }

  if (type === 'twin') {
    return (
      <svg className={styles.pillarSvg} viewBox="0 0 280 220" fill="none" aria-hidden="true">
        <rect x="20" y="20" width="110" height="160" rx="8" stroke={color} strokeWidth="1" fill={colorDim} />
        <rect x="150" y="20" width="110" height="160" rx="8" stroke={color} strokeWidth="1" opacity="0.4" fill="none" strokeDasharray="4 3" />
        <text x="75" y="16" textAnchor="middle" fill={color} fontSize="8" fontFamily="JetBrains Mono">PHYSICAL</text>
        <text x="205" y="16" textAnchor="middle" fill={color} fontSize="8" fontFamily="JetBrains Mono" opacity="0.5">DIGITAL TWIN</text>
        {[40, 70, 100, 130, 150].map((y, i) => (
          <g key={i}>
            <circle cx={75} cy={y} r="3" fill={color} opacity="0.8" />
            <circle cx={205} cy={y} r="3" fill={color} opacity="0.35" />
            <line x1="130" y1={y} x2="150" y2={y} stroke={color} strokeWidth="0.5" opacity="0.3" strokeDasharray="3 2" />
          </g>
        ))}
        <text x="140" y="200" textAnchor="middle" fill={color} fontSize="8" fontFamily="JetBrains Mono" opacity="0.5">
          REAL-TIME SYNC
        </text>
      </svg>
    );
  }

  // grip
  return (
    <svg className={styles.pillarSvg} viewBox="0 0 280 220" fill="none" aria-hidden="true">
      <ellipse cx="140" cy="110" rx="100" ry="90" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="140" cy="110" rx="65" ry="58" stroke={color} strokeWidth="1" opacity="0.35" strokeDasharray="3 2" />
      {Array.from({ length: 24 }, (_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const innerR = 65, outerR = 100;
        return (
          <line
            key={i}
            x1={140 + Math.cos(angle) * innerR} y1={110 + Math.sin(angle) * innerR}
            x2={140 + Math.cos(angle) * outerR} y2={110 + Math.sin(angle) * outerR}
            stroke={color} strokeWidth="2.5" opacity={0.3 + 0.5 * Math.abs(Math.sin(i * 0.8))}
            strokeLinecap="round"
          />
        );
      })}
      <circle cx="140" cy="110" r="20" fill={colorDim} stroke={color} strokeWidth="1.5" />
      <text x="140" y="114" textAnchor="middle" fill={color} fontSize="8" fontFamily="JetBrains Mono">ADAPTIVE</text>
      <text x="140" y="195" textAnchor="middle" fill={color} fontSize="8" fontFamily="JetBrains Mono" opacity="0.5">
        NO SENSORS · NO ELECTRONICS
      </text>
    </svg>
  );
}

export default function TechnologyPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <div className="text-center">
            <div className="section-label">Technology</div>
            <h1 className={`text-display-xl ${styles.heroH1}`}>
              The Four Pillars of<br />
              <span className="text-gradient-cyan">TyreBrain AI</span>
            </h1>
            <p className={styles.heroDesc}>
              A layered computational stack that transforms tyre design from reactive engineering
              into fully autonomous, AI-driven discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Pillar sections */}
      {PILLARS.map((pillar, i) => (
        <section
          key={pillar.id}
          id={pillar.id}
          className={`${styles.pillarSection} ${i % 2 === 1 ? styles.pillarSectionAlt : ''}`}
        >
          {i % 2 === 0 && <div className={`${styles.pillarGlow} ${pillar.accent === 'amber' ? styles.pillarGlowAmber : ''}`} aria-hidden="true" />}
          <div className="container">
            <div className={`${styles.pillarGrid} ${i % 2 === 1 ? styles.pillarGridReverse : ''}`}>
              {/* Text */}
              <div className={`reveal-${i % 2 === 0 ? 'left' : 'right'} ${styles.pillarText}`}>
                <div className={styles.pillarNumber}>{pillar.number}</div>
                <div className={`section-label ${pillar.accent === 'amber' ? styles.labelAmber : ''}`}>
                  Pillar {pillar.number}
                </div>
                <h2 className={styles.pillarTitle}>{pillar.title}</h2>
                <p className={`${styles.pillarSubtitle} ${pillar.accent === 'amber' ? 'text-gradient-amber' : 'text-gradient-cyan'}`}>
                  {pillar.subtitle}
                </p>
                {pillar.desc.map((para, j) => (
                  <p key={j} className={styles.pillarDesc}>{para}</p>
                ))}
                <div className={styles.pillarTags}>
                  {pillar.tags.map((tag) => (
                    <span key={tag} className={`${styles.tag} ${pillar.accent === 'amber' ? styles.tagAmber : ''}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={`reveal-${i % 2 === 0 ? 'right' : 'left'} ${styles.pillarVisualWrap}`}>
                <div className={`${styles.pillarVisualCard} ${pillar.accent === 'amber' ? styles.pillarVisualCardAmber : ''}`}>
                  <PillarVisual type={pillar.visual} accent={pillar.accent} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className={styles.techCta}>
        <div className="container">
          <div className="text-center reveal">
            <h2 className="text-display-lg">See the Technology in Action</h2>
            <p className={styles.ctaDesc}>Book a private demonstration to explore each pillar hands-on.</p>
            <Link href="/contact" className="btn btn-primary btn-pulse" id="tech-cta">
              Book a Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
