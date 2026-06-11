'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const INDUSTRIES = [
  'Tyre Manufacturer',
  'OEM',
  'EV Company',
  'Fleet Operator',
  'Research & Academia',
  'Other',
];

const DEMO_TYPES = [
  'Full Platform Walkthrough',
  'Compound Generation',
  'Digital Twin Simulation',
  'Wear & Thermal Modelling',
  'Enterprise Access',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    title: '',
    email: '',
    industry: '',
    demoType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const form = e.currentTarget as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || 'Unable to submit your demo request.');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        company: '',
        title: '',
        email: '',
        industry: '',
        demoType: '',
        message: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit your demo request.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGlow1} aria-hidden="true" />
        <div className={styles.heroGlow2} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroContent}>
            {/* Left panel */}
            <div className={`reveal-left ${styles.heroLeft}`}>
              <div className="section-label">Contact</div>
              <h1 className={`text-display-xl ${styles.heroH1}`}>
                Redefine<br />
                <span className="text-gradient-cyan">Tyre Innovation</span>
              </h1>
              <p className={styles.heroDesc}>
                Book a private platform demonstration to explore adaptive compound generation
                and predictive performance simulation.
              </p>

              <div className={styles.contactDetails}>
                <a href="mailto:contact@tyrebrainai.com" className={styles.contactItem}>
                  <div className={styles.contactIcon} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.contactItemLabel}>Email</div>
                    <div className={styles.contactItemValue}>contact@tyrebrainai.com</div>
                  </div>
                </a>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.contactItemLabel}>Headquarters</div>
                    <div className={styles.contactItemValue}>12 The Pines, Hook Road, Chessingtom, United Kingdom, KT9 1EB</div>
                  </div>
                </div>

                <a href="tel:+447448667347" className={styles.contactItem}>
                  <div className={styles.contactIcon} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.contactItemLabel}>Phone</div>
                    <div className={styles.contactItemValue}>+447448667347</div>
                  </div>
                </a>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.contactItemLabel}>Response Time</div>
                    <div className={styles.contactItemValue}>Within 24 hours</div>
                  </div>
                </div>
              </div>

              <div className={styles.trustBadges}>
                {['Confidential', 'No commitment required', 'Global access'].map((b, i) => (
                  <span key={i} className={styles.badge}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0AF0C8" strokeWidth="3" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className={`reveal-right ${styles.formWrap}`}>
              {submitted ? (
                <div className={`card ${styles.successCard}`}>
                  <div className={styles.successIcon} aria-hidden="true">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0AF0C8" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h2 className={styles.successTitle}>Demo Request Received</h2>
                  <p className={styles.successDesc}>
                    Thank you. Your request is active and our team will be in touch within
                    24 hours to arrange your private platform demonstration.
                  </p>
                  <p className={styles.successMeta}>
                    A confirmation has been prepared for contact@tyrebrainai.com.
                  </p>
                  <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form
                  className={`card ${styles.form}`}
                  onSubmit={handleSubmit}
                  aria-label="Book a Demo Form"
                >
                  <h2 className={styles.formTitle}>Book a Private Demo</h2>
                  <p className={styles.formSub}>Complete all fields to request your demonstration.</p>

                  <div className={styles.formGrid}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="Dr. Jane Smith"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company / Organisation *</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="form-input"
                        placeholder="Acme Tyres Ltd."
                        required
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-title">Job Title *</label>
                      <input
                        id="contact-title"
                        name="title"
                        type="text"
                        className="form-input"
                        placeholder="Head of R&D"
                        required
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="jane.smith@company.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="industry">Industry *</label>
                    <div className={styles.selectWrap}>
                      <select
                        id="industry"
                        name="industry"
                        className="form-select"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                      >
                        <option value="">Select your industry...</option>
                        {INDUSTRIES.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                      <svg className={styles.selectChevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="demoType">Demo Interest *</label>
                    <div className={styles.selectWrap}>
                      <select
                        id="demoType"
                        name="demoType"
                        className="form-select"
                        required
                        value={formData.demoType}
                        onChange={handleChange}
                      >
                        <option value="">Select the demo you want...</option>
                        {DEMO_TYPES.map((demo) => (
                          <option key={demo} value={demo}>{demo}</option>
                        ))}
                      </select>
                      <svg className={styles.selectChevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Message / What are you looking to solve?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Describe your current tyre development challenge..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn} ${submitting ? styles.submitting : ''}`}
                    disabled={submitting}
                    id="contact-submit"
                  >
                    {submitting ? (
                      <>
                        <span className={styles.spinner} aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Request Demo
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </>
                    )}
                  </button>

                  {error && (
                    <p className={styles.formError} role="alert">
                      {error}
                    </p>
                  )}

                  <p className={styles.formNote}>
                    Your information is kept strictly confidential and never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
