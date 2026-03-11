'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Platform', href: '/platform' },
  { label: 'Technology', href: '/technology' },
  { label: 'Industries', href: '/industries' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setActiveSection(window.location.pathname);
  }, []);

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="banner">
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="TyreBrain AI Home">
            <div className={styles.logoIcon} aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="16" stroke="#00D4FF" strokeWidth="1.5" strokeDasharray="4 2" />
                <circle cx="18" cy="18" r="10" stroke="#00D4FF" strokeWidth="1" opacity="0.5" />
                <circle cx="18" cy="18" r="4" fill="#00D4FF" />
                <path d="M18 2 L18 34" stroke="#00D4FF" strokeWidth="0.5" opacity="0.3" />
                <path d="M2 18 L34 18" stroke="#00D4FF" strokeWidth="0.5" opacity="0.3" />
                <path d="M6.1 6.1 L29.9 29.9" stroke="#00D4FF" strokeWidth="0.5" opacity="0.2" />
                <path d="M29.9 6.1 L6.1 29.9" stroke="#00D4FF" strokeWidth="0.5" opacity="0.2" />
              </svg>
            </div>
            <span className={styles.logoText}>
              <span className={styles.logoTyre}>Tyre</span>
              <span className={styles.logoBrain}>Brain</span>
              <span className={styles.logoAi}> AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${activeSection === link.href ? styles.active : ''}`}
                onClick={() => setActiveSection(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className={styles.actions}>
            <Link href="/contact" className={`btn btn-primary btn-pulse ${styles.ctaBtn}`}>
              Book a Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            {/* Hamburger */}
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ''}`}
        ref={menuRef}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileInner}>
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => { setMenuOpen(false); setActiveSection(link.href); }}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span className={styles.mobileNavIndex}>{String(i + 1).padStart(2, '0')}</span>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={styles.mobileFooter}>
            <Link
              href="/contact"
              className="btn btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              Book a Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <p className={styles.mobileLocation}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              United Kingdom
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
