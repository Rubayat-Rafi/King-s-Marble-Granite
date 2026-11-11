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
              From direct quarry block selection in Carrara and Brazil to 0.4mm 3D laser digitizing and robotic 5-axis CNC waterjet mitering. Discover our four-phase architectural process.
            </p>

            <div className="pt-2 flex flex-wrap gap-6 text-xs text-[#DDD8CF]/80">
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-semibold">✦</span>
                <span>Direct Quarry Provenance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-semibold">✦</span>
                <span>0.4mm Optical Laser Digitizers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-semibold">✦</span>
                <span>Zero Subcontracting Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pinned Monolith Process Story (CraftProcess) */}
      <CraftProcess />

      {/* Technical Precision Standards */}
      <section className="py-24 sm:py-32 border-t border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16"
          >
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium block mb-2">
              Tolerance &amp; Engineering
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-light leading-tight">
              Why our joints disappear where commercial saws fail.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 border border-[var(--line)] bg-[var(--bg)] space-y-4"
            >
              <span className="font-display text-3xl text-[var(--accent)] font-light block">01 / Laser</span>
              <h3 className="font-display text-xl sm:text-2xl font-medium">Prodim 3D Digitizing</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                We capture wall bowings, out-of-square cabinet faces, and electrical cutouts optically down to 0.4mm tolerance before any blade touches natural stone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 border border-[var(--line)] bg-[var(--bg)] space-y-4"
            >
              <span className="font-display text-3xl text-[var(--accent)] font-light block">02 / Waterjet</span>
              <h3 className="font-display text-xl sm:text-2xl font-medium">5-Axis Compound Miters</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                60,000 PSI diamond abrasive waterjets cut true 45-degree compound edges, allowing vein continuation to wrap seamlessly from islands to floor plinths.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 border border-[var(--line)] bg-[var(--bg)] space-y-4"
            >
              <span className="font-display text-3xl text-[var(--accent)] font-light block">03 / In-House</span>
              <h3 className="font-display text-xl sm:text-2xl font-medium">Master Artisans Only</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                Every phase of cutting, profiling, edge-polishing, and chemical fusing is performed exclusively by our factory-trained Harvey fabrication artisans.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
