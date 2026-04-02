import Link from 'next/link';
import styles from './Footer.module.css';

const NAV_LINKS = [
  { label: 'Platform', href: '/platform' },
  { label: 'Technology', href: '/technology' },
  { label: 'Industries', href: '/industries' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Circuit line top */}
      <div className={styles.topLine} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <circle cx="18" cy="18" r="16" stroke="#00D4FF" strokeWidth="1.5" strokeDasharray="4 2" />
                <circle cx="18" cy="18" r="10" stroke="#00D4FF" strokeWidth="1" opacity="0.5" />
                <circle cx="18" cy="18" r="4" fill="#00D4FF" />
              </svg>
              <span className={styles.logoText}>
                <span style={{ color: '#fff' }}>Tyre</span>
                <span style={{ color: '#00D4FF' }}>Brain</span>
                <span style={{ color: '#F5A623', fontSize: '1.1rem' }}> AI</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              The world&apos;s first AI-native tyre design and optimisation platform.
            </p>
            <div className={styles.badges}>
              <span className={styles.badge}>🇬🇧 United Kingdom</span>
              <span className={styles.badge}>SaaS Platform</span>
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <nav aria-label="Footer navigation">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className={styles.footerLink}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Platform */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Platform</h4>
            <Link href="/platform#compound-gen" className={styles.footerLink}>Compound Generation</Link>
            <Link href="/platform#simulation" className={styles.footerLink}>Performance Simulation</Link>
            <Link href="/platform#wear-modelling" className={styles.footerLink}>Wear &amp; Thermal Modelling</Link>
            <Link href="/platform#credits" className={styles.footerLink}>Credit Economy</Link>
          </div>

          {/* Contact */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Get in Touch</h4>
            <a href="mailto:contact@tyrebrainai.com" className={styles.footerLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              contact@tyrebrainai.com
            </a>
            <a href="tel:+447448667347" className={styles.footerLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +447448667347
            </a>
            <p className={styles.footerText} style={{ alignItems: 'flex-start' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, marginTop: '4px' }}>
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              12 The Pines, Hook Road, Chessingtom, United Kingdom, KT9 1EB
            </p>
            <Link href="/contact" className={`btn btn-primary ${styles.demoBtn}`}>
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} TyreBrain AI Ltd. All rights reserved.
          </p>
          <p className={styles.bottomNote}>
            <span className={styles.monoText}>v1.0.0</span>
            &nbsp;·&nbsp; Built by industry insiders. Powered by Levelweb.co.uk.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>Privacy</Link>
            <Link href="/terms" className={styles.bottomLink}>Terms</Link>
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div className={styles.glowBottom} aria-hidden="true" />
    </footer>
  );
}
