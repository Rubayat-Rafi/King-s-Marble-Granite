import React, { useState } from 'react';
import { STONES } from '../data/content';
import { useStoneTheme } from '../context/StoneThemeContext';

export default function Contact() {
  const { activeStone } = useStoneTheme();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Kitchen Countertops & Island',
    stonePreference: 'Calacatta Michelangelo',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-700 min-h-screen">
      {/* Editorial Header Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-24 bg-[#0B0B0C] text-[#F4F2EE] border-b border-[var(--line-dark)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-color"
          style={{ backgroundColor: activeStone.accent }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2.5 bg-white/10 px-3 py-1.5 backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeStone.accent }} />
              <span className="text-xs uppercase tracking-[0.22em] text-white/80 font-medium">
                Direct Desk · Harvey, Louisiana
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-[-0.02em] leading-[1.05]">
              Initiate your <br />
              <span className="italic font-normal" style={{ color: activeStone.accent }}>
                stone commission.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#DDD8CF] max-w-2xl font-light leading-relaxed">
              Schedule a private walkthrough of our Harvey slab reserve or request an in-home digital laser template consultation with our senior stone estimating team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-12 lg:gap-16">
            {/* Showroom & Logistics Information */}
            <div className="col-span-12 lg:col-span-5 space-y-10 text-left">
              <div className="space-y-3">
                <span className="text-label text-xs text-[var(--accent)] tracking-[0.22em] block font-medium">
                  Studio &amp; Indoor Yard
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-light text-[var(--text)]">
                  Visit the Harvey Facility
                </h2>
                <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                  Experience full slabs under natural and calibrated lighting. Meet directly with our fabrication engineers to examine veining continuity and edge options.
                </p>
              </div>

              <div className="space-y-8 pt-4 border-t border-[var(--line)]">
                <div>
                  <span className="text-label text-xs text-[var(--text)] tracking-wider block mb-1">
                    Facility Address
                  </span>
                  <p className="text-base font-light text-[var(--text)]">1848 Industrial Blvd</p>
                  <p className="text-xs text-[var(--text-muted)] font-light">Harvey, LA 70058, United States</p>
                  <p className="text-xs text-[var(--text-muted)] font-light mt-1">Private client parking &amp; covered slab crane viewing yard</p>
                </div>

                <div>
                  <span className="text-label text-xs text-[var(--text)] tracking-wider block mb-2">
                    Hours of Operation
                  </span>
                  <div className="text-xs space-y-1.5 font-light text-[var(--text-muted)]">
                    <div className="flex justify-between py-1 border-b border-[var(--line)]">
                      <span>Monday – Friday</span>
                      <span className="text-[var(--text)] font-medium">8:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[var(--line)]">
                      <span>Saturday</span>
                      <span className="text-[var(--text)] font-medium">8:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Sunday</span>
                      <span className="text-[var(--accent)] font-medium">Closed</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-label text-xs text-[var(--text)] tracking-wider block mb-1">
                    Direct Contact
                  </span>
                  <p className="text-lg font-light text-[var(--text)]">
                    <a href="tel:+15047237898" className="hover:text-[var(--accent)] transition-colors">
                      (504) 723-7898
                    </a>
                  </p>
                  <p className="text-xs text-[var(--text-muted)] font-light">estimating@kingsmarbleandgranite.com</p>
                </div>

                {/* Quick Map & Directions Card */}
                <div className="p-4 sm:p-5 border border-[var(--line)] bg-[var(--bg-dark)]/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Harvey Slab Yard
                    </span>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=King%27s+Marble+%26+Granite,+1848+Industrial+Blvd,+Harvey,+LA+70058"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[var(--text)] hover:text-[var(--accent)] underline underline-offset-4 transition-colors font-medium"
                    >
                      Directions ↗
                    </a>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    12 minutes from Downtown New Orleans across the Crescent City Connection. Covered crane viewing yard.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <div className="col-span-12 lg:col-span-7 border border-[var(--line)] p-8 sm:p-12 bg-[var(--bg)] transition-colors duration-700">
              {formSubmitted ? (
                <div className="text-left py-12 space-y-4">
                  <span className="text-label text-xs text-[var(--accent)] tracking-widest block">
                    Inquiry Transmitted
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-[var(--text)] font-light">
                    Thank you, {formData.name || 'Valued Client'}.
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed max-w-lg">
                    Your details have been routed directly to our senior estimating desk. A stone specialist will contact you at <strong className="text-[var(--text)]">{formData.phone}</strong> within 2 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="btn-primary-luxury text-xs mt-6"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="space-y-2">
                    <span className="text-label text-xs text-[var(--accent)] tracking-widest block">
                      Direct Estimate Request
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-light text-[var(--text)]">
                      Request Consultation &amp; Quote
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-label text-xs text-[var(--text)] block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Victoria Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[var(--bg)] border border-[var(--line)] px-4 py-3 text-xs text-[var(--text)] focus:outline-none focus:border-[var(--text)]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-label text-xs text-[var(--text)] block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(504) 723-7898"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[var(--bg)] border border-[var(--line)] px-4 py-3 text-xs text-[var(--text)] focus:outline-none focus:border-[var(--text)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-label text-xs text-[var(--text)] block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="client@residence.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[var(--bg)] border border-[var(--line)] px-4 py-3 text-xs text-[var(--text)] focus:outline-none focus:border-[var(--text)]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-label text-xs text-[var(--text)] block">
                        Project Scope
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[var(--bg)] border border-[var(--line)] px-4 py-3 text-xs text-[var(--text)] focus:outline-none focus:border-[var(--text)]"
                      >
                        <option>Kitchen Countertops &amp; Island</option>
                        <option>Mitered Waterfall Island &amp; Slab Backsplash</option>
                        <option>Master Bathroom Vanity &amp; Shower</option>
                        <option>Floor-to-Ceiling Fireplace</option>
                        <option>Outdoor Kitchen &amp; Al Fresco Bar</option>
                        <option>Commercial / Hospitality Installation</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-label text-xs text-[var(--text)] block">
                      Stone Preference
                    </label>
                    <select
                      value={formData.stonePreference}
                      onChange={(e) => setFormData({ ...formData, stonePreference: e.target.value })}
                      className="w-full bg-[var(--bg)] border border-[var(--line)] px-4 py-3 text-xs text-[var(--text)] focus:outline-none focus:border-[var(--text)]"
                    >
                      {STONES.map((stone) => (
                        <option key={stone.id} value={stone.name}>
                          {stone.name} ({stone.category})
                        </option>
                      ))}
                      <option value="Undecided">Undecided / Request Material Advice</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-label text-xs text-[var(--text)] block">
                      Project Notes or Approximate Dimensions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share dimensions, drawings, or specific edge details..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[var(--bg)] border border-[var(--line)] px-4 py-3 text-xs text-[var(--text)] focus:outline-none focus:border-[var(--text)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-luxury w-full text-xs !py-4"
                  >
                    Submit Consultation Request →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[var(--line)] p-6 sm:p-10 bg-[var(--bg)] transition-colors duration-700 space-y-8 text-left">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 pb-6 border-b border-[var(--line)]">
              <div className="space-y-2">
                <span className="text-label text-xs text-[var(--accent)] tracking-widest block font-medium">
                  Studio &amp; Slab Yard Navigation
                </span>
                <h3 className="font-display text-2xl sm:text-4xl text-[var(--text)] font-light">
                  Find Our Harvey Fabrication Facility
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light max-w-xl">
                  Located in the Industrial corridor of Harvey, Louisiana. Conveniently accessible from New Orleans CBD, Metairie, and the Westbank expressway.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=King%27s+Marble+%26+Granite,+1848+Industrial+Blvd,+Harvey,+LA+70058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-luxury text-xs !py-2.5 !px-5"
                >
                  Get Driving Directions →
                </a>
                <a
                  href="https://maps.google.com/?q=King%27s+Marble+%26+Granite,+1848+Industrial+Blvd,+Harvey,+LA+70058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-luxury text-xs !py-2.5 !px-5"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

            {/* Live Interactive Google Map Frame */}
            <div className="w-full h-[420px] sm:h-[500px] overflow-hidden border border-[var(--line)] shadow-inner relative bg-[#0B0B0C]">
              <iframe
                src="https://maps.google.com/maps?q=King%27s+Marble+%26+Granite,+1848+Industrial+Blvd,+Harvey,+LA+70058&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kings Marble & Granite Studio Location"
                className="w-full h-full"
              />
            </div>

            {/* Travel Times & Facility Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-4 border border-[var(--line)] bg-[var(--bg-dark)]/5 space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[var(--accent)] font-semibold block">
                  New Orleans CBD
                </span>
                <p className="text-xs text-[var(--text)] font-medium">12 Minutes</p>
                <p className="text-[11px] text-[var(--text-muted)] font-light">Direct via US-90 BUS West across Crescent City Connection</p>
              </div>
              <div className="p-4 border border-[var(--line)] bg-[var(--bg-dark)]/5 space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[var(--accent)] font-semibold block">
                  Metairie / Old Metairie
                </span>
                <p className="text-xs text-[var(--text)] font-medium">18 Minutes</p>
                <p className="text-[11px] text-[var(--text-muted)] font-light">Via Causeway Blvd to Earhart or US-90 BUS</p>
              </div>
              <div className="p-4 border border-[var(--line)] bg-[var(--bg-dark)]/5 space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[var(--accent)] font-semibold block">
                  Kenner &amp; MSY Airport
                </span>
                <p className="text-xs text-[var(--text)] font-medium">25 Minutes</p>
                <p className="text-[11px] text-[var(--text-muted)] font-light">Via I-10 East to US-90 BUS West</p>
              </div>
              <div className="p-4 border border-[var(--line)] bg-[var(--bg-dark)]/5 space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[var(--accent)] font-semibold block">
                  Private Client Parking
                </span>
                <p className="text-xs text-[var(--text)] font-medium">Free On-Site</p>
                <p className="text-[11px] text-[var(--text-muted)] font-light">Dedicated spaces outside showroom &amp; covered yard</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
