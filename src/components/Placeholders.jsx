import React from 'react';
import { useStoneTheme } from '../context/StoneThemeContext';

export default function Placeholders() {
  const { activeStone } = useStoneTheme();

  return (
    <div className="space-y-24 border-t border-[var(--line)] pt-20">
      {/* 4. Craft & Process Section */}
      <section id="process" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-2xl space-y-3 mb-12">
          <span className="text-label text-[var(--accent)] tracking-[0.24em] block">
            02 / Step-by-Step Monolith Execution
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-[var(--text)]">
            Craft &amp; Process
          </h2>
          <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
            [Step 2 Pinned section will anchor here across Private Consultation, Digital Laser Templating, 5-Axis Waterjet Milling, and White-Glove Installation].
          </p>
        </div>
      </section>

      {/* 5. Projects Section */}
      <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--line)] text-left">
        <div className="max-w-2xl space-y-3 mb-12">
          <span className="text-label text-[var(--accent)] tracking-[0.24em] block">
            03 / Asymmetric Case Studies
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-[var(--text)]">
            Selected Installations
          </h2>
          <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
            [Step 2 Asymmetric 6-8 case study layouts will populate here with architectural photography].
          </p>
        </div>
      </section>

      {/* 6. About Section */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--line)] text-left">
        <div className="max-w-3xl space-y-4">
          <span className="text-label text-[var(--accent)] tracking-[0.24em] block">
            04 / Workshop Heritage
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[var(--text)]">
            Kings Marble &amp; Granite is a stone fabrication studio in Harvey, Louisiana.
          </h2>
          <p className="text-[17px] text-[var(--text-muted)] font-light leading-relaxed">
            We work with interior architects, general contractors, and private estate owners who require sub-millimeter tolerances. Slabs are imported directly from Italian and Brazilian quarries, milled on our 5-axis CNC diamond waterjets, and installed by our bonded craftsmen.
          </p>
          <div className="pt-6 grid grid-cols-3 gap-6 text-xs text-[var(--text-muted)]">
            <div>
              <strong className="block text-xl font-display text-[var(--text)]">2,800+</strong>
              <span>Installed Surfaces</span>
            </div>
            <div>
              <strong className="block text-xl font-display text-[var(--text)]">15-Year</strong>
              <span>Craftsmanship Warranty</span>
            </div>
            <div>
              <strong className="block text-xl font-display text-[var(--text)]">0.4 mm</strong>
              <span>Laser Template Precision</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--line)] text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-label text-[var(--accent)] tracking-[0.24em] block">
              05 / Consultation &amp; Inquiry
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-[var(--text)]">
              Begin your commission.
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
              Call our Harvey studio directly at{' '}
              <a href="tel:+15047237898" className="text-[var(--text)] underline font-medium">
                (504) 723-7898
              </a>{' '}
              or leave your details below for a same-day callback from our senior estimating team.
            </p>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-10 border border-[var(--line)] bg-[var(--bg)] rounded-[2px]">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-label text-[11px] text-[var(--text-muted)] block mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Marcus Vance"
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label className="text-label text-[11px] text-[var(--text-muted)] block mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    placeholder="(504) 723-7898"
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>
              </div>

              <div>
                <label className="text-label text-[11px] text-[var(--text-muted)] block mb-2">
                  Project Type
                </label>
                <select className="w-full bg-[var(--bg)] border border-[var(--line)] px-4 py-3 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)]">
                  <option>Mitered Waterfall Kitchen Island</option>
                  <option>Full-Height Slab Backsplash</option>
                  <option>Master Bath Floating Vanity &amp; Shower</option>
                  <option>Floor-to-Ceiling Stone Fireplace</option>
                  <option>Outdoor Covered Kitchen Pavilion</option>
                </select>
              </div>

              <button type="submit" className="btn-primary-luxury w-full">
                Submit Consultation Request →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. Minimal Footer */}
      <footer className="border-t border-[var(--line)] py-12 text-xs text-[var(--text-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-1">
            <span className="font-display text-xl text-[var(--text)] block">Kings Marble &amp; Granite</span>
            <p>1848 Industrial Blvd, Harvey, LA 70058 · (504) 723-7898</p>
          </div>
          <div className="text-right space-y-1">
            <p>Hours: Mon–Sat 8:00 AM – 5:00 PM · Sunday Closed</p>
            <p className="text-label text-[10px]">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

