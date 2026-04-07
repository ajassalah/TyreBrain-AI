import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About — TyreBrain AI | Randeer Sandaruwan, Founder & CEO',
  description:
    'Meet Randeer Sandaruwan — 14+ years in the tyre industry, MBA from University of Gloucestershire. TyreBrain AI is the platform he wished existed.',
};

const CREDENTIALS = [
  {
    icon: '🎓',
    title: 'MBA',
    sub: 'University of Gloucestershire',
  },
  {
    icon: '📜',
    title: 'Level 7 Diploma Data Science Strategic Management',
    //sub: 'Strategic Management',
  },

  {
    icon: '🕐',
    title: '14+ Years',
    sub: 'Tyre Industry Experience',
  },
];

const TIMELINE = [
  {
    period: 'Early Career',
    role: 'Tyre industry operations',
    desc: 'Hands-on experience across commercial and passenger tyre segments. Deep exposure to the constraints of traditional compound development.',
  },
  {
    period: 'Global Tyre Leader',
    role: 'Senior Fleet Management',
    desc: 'Managing enterprise-scale fleet tyre performance, safety, and compliance. Daily exposure to the gap between what compounds could be and what traditional R&D delivers.',
  },
  {
    period: 'MBA & Level 7 Data Science',
    role: 'University of Gloucestershire',
    desc: 'Formalised strategic thinking and business architecture. Developed the commercial framework for TyreBrain AI alongside deep technical development.',
  },
  {
    period: '2024 — Present',
    role: 'Founder & CEO, TyreBrain AI',
    desc: 'Founded TyreBrain AI to solve the exact problems encountered daily in the industry. Building the platform he wished had existed throughout his career.',
  },
];

const QUOTES = [
  'I spent years watching the industry solve tomorrow\'s mobility challenges with yesterday\'s R&D tools.',
  'TyreBrain AI is the platform I wished existed at every stage of my career.',
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={`reveal-left ${styles.heroText}`}>
              <div className="section-label">About the Founder</div>
              <h1 className={`text-display-xl ${styles.heroH1}`}>
                Built by Someone<br />
                Who Has <span className="text-gradient-cyan">Lived the Problem</span>
              </h1>
              <p className={styles.heroDesc}>
                TyreBrain AI was founded by a tyre industry professional who spent over a decade 
                confronting the limitations of conventional compound R&D — and decided to build the solution.
              </p>
            </div>

            <div className={`reveal-right ${styles.founderCard}`}>
              <div className={styles.founderAvatar} aria-label="Randeer Sandaruwan, Founder">
                <Image
                  src="/dp.jpeg"
                  alt="Randeer Sandaruwan"
                  fill
                  sizes="110px"
                  style={{ objectFit: 'cover' }}
                  className={styles.avatarImage}
                  priority
                />
              </div>
              <h2 className={styles.founderName}>Randeer Sandaruwan</h2>
              <p className={styles.founderRole}>Founder &amp; CEO — TyreBrain AI</p>
              <div className={styles.founderDivider} />
              <div className={styles.credentialsGrid}>
                {CREDENTIALS.map((c, i) => (
                  <div key={i} className={styles.credential}>
                    <span className={styles.credIcon}>{c.icon}</span>
                    <div>
                      <div className={styles.credTitle}>{c.title}</div>
                      <div className={styles.credSub}>{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quotes */}
      <section className={styles.quotesSection}>
        <div className="container">
          <div className={styles.quotesGrid}>
            {QUOTES.map((q, i) => (
              <blockquote key={i} className={`card reveal stagger-${i + 1} ${styles.quoteCard}`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="rgba(0,212,255,0.1)" stroke="#00D4FF" strokeWidth="1"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="rgba(0,212,255,0.1)" stroke="#00D4FF" strokeWidth="1"/>
                </svg>
                <p className={styles.quoteText}>&ldquo;{q}&rdquo;</p>
                <cite className={styles.quoteCite}>— Randeer Sandaruwan, Founder</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Career Journey</div>
            <h2 className="text-display-lg">The Path to TyreBrain AI</h2>
          </div>

          <div className={styles.timeline}>
            {TIMELINE.map((item, i) => (
              <div key={i} className={`reveal stagger-${i + 1} ${styles.timelineItem}`}>
                <div className={styles.timelineLeft}>
                  <div className={styles.timelinePeriod}>{item.period}</div>
                  <div className={styles.timelineRole}>{item.role}</div>
                </div>
                <div className={styles.timelineConnector}>
                  <div className={styles.timelineDot} />
                  {i < TIMELINE.length - 1 && <div className={styles.timelineLine} />}
                </div>
                <div className={styles.timelineRight}>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className={styles.whySection}>
        <div className={styles.whyGlow} aria-hidden="true" />
        <div className="container">
          <div className={`reveal ${styles.whyContent}`}>
            <div className="section-label">The Mission</div>
            <h2 className="text-display-lg">Why TyreBrain AI</h2>
            <p className={styles.whyText}>
              Randeer founded TyreBrain AI to solve the exact problems he encountered daily in the industry — 
              slow R&D cycles, reactive optimisation processes, and the persistent gap between what computational 
              capability could offer and what materials engineering was actually receiving.
            </p>
            <p className={styles.whyText}>
              TyreBrain AI is the platform he wished existed. Built from first-hand industry knowledge, 
              powered by frontier AI research, and designed to be genuinely useful to every person who 
              has ever been slowed down by the limitations of traditional tyre development.
            </p>
            <Link href="/contact" className="btn btn-primary" id="about-cta">
              Work With Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
