import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Mitered Waterfall Kitchen Island',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[var(--bg)] border-t border-[var(--line)] text-left transition-colors duration-1000 ease-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Headline & Contact Info with Framer Motion Fade-Up */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium block">
              05 / Direct Consultation
            </span>

            <h2 className="font-display text-4xl sm:text-6xl text-[var(--text)] font-light leading-[1.02]">
              Begin your commission.
            </h2>

            <p className="text-base text-[var(--text-muted)] font-light leading-relaxed">
              Every project begins with a conversation about light, flow, and stone species.
              Reach our Harvey estimating desk directly at{' '}
              <a
                href="tel:+15047237898"
                className="text-[var(--text)] underline decoration-[var(--accent)] underline-offset-4 font-medium"
              >
                (504) 723-7898
              </a>{' '}
              or leave your project specifications for a same-day callback.
            </p>

            <div className="pt-6 border-t border-[var(--line)] space-y-3 text-xs text-[var(--text-muted)]">
              <p>
                <strong className="text-[var(--text)] font-medium">Studio &amp; Slab Yard:</strong> 1848 Industrial Blvd, Harvey, LA 70058
              </p>
              <p>
                <strong className="text-[var(--text)] font-medium">Direct Line:</strong>{' '}
                <a href="tel:+15047237898" className="hover:text-[var(--accent)] transition-colors font-medium">
                  (504) 723-7898
                </a>
              </p>
              <p>
                <strong className="text-[var(--text)] font-medium">Hours:</strong> Monday – Saturday: 8:00 AM – 5:00 PM (Sunday Closed)
              </p>
            </div>
          </motion.div>

          {/* Calm, High-End Short Form with Framer Motion Fade-Up */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-8 sm:p-12 border border-[var(--line)] bg-[var(--bg)] shadow-sm"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <span className="font-display text-4xl text-[var(--text)] block font-light">
                  Thank You, {formData.name || 'Valued Client'}
                </span>
                <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto font-light leading-relaxed">
                  Your project specifications have been delivered to our senior stone estimator. We will contact you at{' '}
                  <strong className="text-[var(--text)]">{formData.phone}</strong> within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary-luxury text-xs mt-4"
                >
                  Submit another project specification →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-[0.22em] text-[var(--accent)] font-medium block">
                    Immediate Estimating Desk
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[var(--text)] font-light">
                    Request an In-Home Laser Measure
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Field 1 with animated underline */}
                  <div className="relative group">
                    <label className="text-xs uppercase tracking-wider text-[var(--text-muted)] block mb-1 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Victoria Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-[var(--line)] py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-transparent transition-colors"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[var(--accent)] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>

                  {/* Field 2 with animated underline */}
                  <div className="relative group">
                    <label className="text-xs uppercase tracking-wider text-[var(--text-muted)] block mb-1 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(504) 723-7898"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-[var(--line)] py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-transparent transition-colors"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[var(--accent)] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>

                {/* Field 3 */}
                <div className="relative group">
                  <label className="text-xs uppercase tracking-wider text-[var(--text-muted)] block mb-1 font-medium">
                    Project Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--line)] py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-transparent transition-colors cursor-pointer"
                  >
                    <option value="Mitered Waterfall Kitchen Island">Mitered Waterfall Kitchen Island</option>
                    <option value="Full-Height Slab Backsplash">Full-Height Slab Backsplash</option>
                    <option value="Primary Bathroom Floating Vanity & Shower">Primary Bathroom Floating Vanity &amp; Shower</option>
                    <option value="Floor-to-Ceiling Stone Fireplace">Floor-to-Ceiling Stone Fireplace</option>
                    <option value="Outdoor Culinary Pavilion & Bar">Outdoor Culinary Pavilion &amp; Bar</option>
                    <option value="Commercial / Hospitality Installation">Commercial / Hospitality Installation</option>
                  </select>
                  <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[var(--accent)] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
                </div>

                {/* Luxury Interactive Button with Framer Motion spring physics */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.015, y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="btn-primary-luxury w-full py-4 text-xs tracking-[0.2em] cursor-pointer"
                >
                  Lock in Consultation &amp; Laser Measure →
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Embedded Interactive Google Map with Framer Motion Fade-Up */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 pt-12 border-t border-[var(--line)]"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium block">
                Atelier &amp; Slab Yard Location
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[var(--text)] font-light">
                1848 Industrial Blvd, Harvey, Louisiana 70058
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=King%27s+Marble+%26+Granite,+1848+Industrial+Blvd,+Harvey,+LA+70058"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-luxury text-xs !py-2.5 !px-5"
              >
                Get Driving Directions →
              </a>
            </div>
          </div>
          <div className="w-full h-[320px] sm:h-[420px] overflow-hidden border border-[var(--line)] bg-[#0B0B0C]">
            <iframe
              src="https://maps.google.com/maps?q=King%27s+Marble+%26+Granite,+1848+Industrial+Blvd,+Harvey,+LA+70058&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="King's Marble & Granite Harvey Facility Location"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
