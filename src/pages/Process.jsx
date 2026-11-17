import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { useStoneTheme } from '../context/StoneThemeContext';
import CraftProcess from '../components/CraftProcess';

export default function Process() {
  const { activeStone } = useStoneTheme();

  return (
    <div className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-700 min-h-screen">
      {/* Editorial Header Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-24 bg-[#0B0B0C] text-[#F4F2EE] border-b border-[var(--line-dark)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-color"
          style={{ backgroundColor: activeStone.accent }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-5"
          >
            <div className="inline-flex items-center gap-2.5 bg-white/10 px-3 py-1.5 backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeStone.accent }} />
              <span className="text-xs uppercase tracking-[0.22em] text-white/80 font-medium">
                Atelier Methodology · Harvey, Louisiana
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-[-0.02em] leading-[1.05]">
              The Monolith <br />
              <span className="italic font-normal" style={{ color: activeStone.accent }}>
                Journey.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#DDD8CF] max-w-2xl font-light leading-relaxed">
              From stone selection at our Harvey showroom to on-site templating, custom cutting, and installation — discover our four-step process.
            </p>

            <div className="pt-2 flex flex-wrap gap-6 text-xs text-[#DDD8CF]/80">
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-semibold">✦</span>
                <span>18 Years in Business</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-semibold">✦</span>
                <span>Marble · Granite · Quartz · Quartzite</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-semibold">✦</span>
                <span>In-House Fabrication &amp; Installation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pinned Monolith Process Story (CraftProcess) */}
      <CraftProcess />

      {/* Editorial Bottom Consultation */}
      <section className="py-24 border-t border-[var(--line)] bg-[var(--bg)] transition-colors duration-700">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto px-4 text-center space-y-6"
        >
          <span className="text-label text-[var(--accent)] tracking-[0.24em] block">
            Direct Atelier Walkthrough
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[var(--text)] font-light leading-tight">
            Witness precision stone fabrication in person.
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            Tour our Harvey slab reserve and observe 5-axis CNC diamond waterjets in action. Our master craftspeople will guide you through current blocks and vein flow layouts.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary-luxury">
              Schedule Harvey Atelier Tour
            </Link>
            <a href="tel:+15047237898" className="btn-outline-luxury">
              Direct Desk: (504) 723-7898
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
