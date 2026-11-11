import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, animate } from 'framer-motion';

export default function AboutHeritage() {
  const [counts, setCounts] = useState({ surfaces: 0, years: 0, precision: 0 });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const harveyX = useTransform(scrollYProgress, [0, 1], ['-2%', '3%']);

  useEffect(() => {
    if (!isInView) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCounts({ surfaces: 2800, years: 15, precision: 0.4 });
      return;
    }

    const controls1 = animate(0, 2800, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCounts((c) => ({ ...c, surfaces: Math.floor(latest) })),
    });

    const controls2 = animate(0, 15, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCounts((c) => ({ ...c, years: Math.floor(latest) })),
    });

    const controls3 = animate(0, 0.4, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCounts((c) => ({ ...c, precision: +latest.toFixed(1) })),
    });

    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
    };
  }, [isInView]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-36 bg-[var(--bg)] border-t border-[var(--line)] text-left transition-colors duration-1000 ease-luxury overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* EFFECT 5: Giant "HARVEY" Architectural Wordmark with Stone Inside It */}
        <div className="mb-16 sm:mb-24 select-none relative overflow-hidden">
          <motion.span
            style={{
              x: harveyX,
              backgroundImage: 'url("/King’s Social Media/IMG_7694.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
            className="font-display font-bold text-[clamp(4.5rem,15vw,12rem)] tracking-tight block leading-[0.85] text-transparent uppercase opacity-90 will-change-transform"
          >
            HARVEY
          </motion.span>
          <span className="text-xs uppercase tracking-[0.28em] text-[var(--accent)] font-medium block mt-2">
            1848 Industrial Blvd · Atelier &amp; Covered Crane Yard
          </span>
        </div>

        {/* Studio Philosophy & Master Craftsman Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text narrative with Framer Motion Fade-Up */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium block">
              04 / Studio &amp; Heritage
            </span>

            <h2 className="font-display text-4xl sm:text-6xl text-[var(--text)] font-light leading-[1.02]">
              Sculpted in Harvey, <br />
              <span className="italic font-normal opacity-90" style={{ color: 'var(--accent)' }}>
                anchored
              </span> in stone.
            </h2>

            <p className="text-[17px] sm:text-[18px] text-[var(--text-muted)] font-light leading-relaxed max-w-xl">
              Kings Marble &amp; Granite is a private stone fabrication facility in Harvey, Louisiana. We work
              exclusively with homeowners, interior architects, and custom builders who demand hairline
              tolerances. Every block is imported directly from Carrara and Brazil, robotically waterjet milled in
              our shop, and hand-finished by master artisans.
            </p>

            {/* Real Metrics with Animated Count-Up */}
            <div className="pt-8 border-t border-[var(--line)] grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              <div>
                <strong className="block font-display text-3xl sm:text-4xl text-[var(--text)] font-light">
                  {counts.surfaces > 0 ? `${counts.surfaces.toLocaleString()}+` : '2,800+'}
                </strong>
                <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] block mt-1 font-medium">
                  Surfaces Installed
                </span>
              </div>
              <div>
                <strong className="block font-display text-3xl sm:text-4xl text-[var(--text)] font-light">
                  {counts.years > 0 ? `${counts.years}-Year` : '15-Year'}
                </strong>
                <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] block mt-1 font-medium">
                  Stain Warranty
                </span>
              </div>
              <div>
                <strong className="block font-display text-3xl sm:text-4xl text-[var(--text)] font-light">
                  {counts.precision > 0 ? `${counts.precision} mm` : '0.4 mm'}
                </strong>
                <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] block mt-1 font-medium">
                  Laser Precision
                </span>
              </div>
            </div>
          </motion.div>

          {/* Master Craftsman / Atelier Founder Portrait with Framer Motion Fade-In */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-[480px] sm:h-[580px] overflow-hidden border border-[var(--line)] bg-[#0B0B0C] shadow-2xl group">
              <img
                src="/King’s Social Media/IMG_7691.webp"
                alt="Master Craftsman and Founder of Kings Marble and Granite"
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs flex justify-between items-end z-10">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-medium block mb-1">
                    Atelier Principal &amp; Master Stone Mason
                  </span>
                  <p className="text-sm font-light text-white">
                    Direct oversight on every slab cut, mitered, and sealed in our Harvey shop.
                  </p>
                </div>
                <span className="text-xs bg-black/70 px-2.5 py-1 border border-white/10 hidden sm:inline-block">
                  Zero Subcontracting
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Three Large Numbered Statements with Framer Motion Fade-Up */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-28 pt-20 border-t border-[var(--line)]"
        >
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.26em] text-[var(--accent)] font-medium block mb-2">
              The Architectural Standard
            </span>
            <h3 className="font-display text-3xl sm:text-5xl text-[var(--text)] font-light leading-tight">
              Why discerning homeowners bypass commercial volume yards.
            </h3>
          </div>

          {/* Three Expansive Editorial Statements with Whitespace */}
          <div className="space-y-12">
            <div className="about-statement-row border-t border-[var(--line)] pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
              <div className="md:col-span-2">
                <span className="font-display text-4xl sm:text-5xl text-[var(--accent)] font-light">
                  01
                </span>
              </div>
              <div className="md:col-span-4">
                <h4 className="font-display text-2xl sm:text-3xl text-[var(--text)] font-light">
                  Direct Whole-Block Quarry Selection
                </h4>
                <span className="text-xs uppercase tracking-widest text-[var(--accent)] block mt-1 font-medium">
                  Provenance &amp; Structural Integrity
                </span>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-[var(--text-muted)] font-light leading-relaxed">
                  Commercial discounters buy leftover distributor bundles with disguised fracture lines and synthetic resin fillers. We import first-quality whole monolith blocks directly from historic quarries in Carrara, Italy and Brazil, certifying pure mineral authenticity before fabrication begins.
                </p>
              </div>
            </div>

            <div className="about-statement-row border-t border-[var(--line)] pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
              <div className="md:col-span-2">
                <span className="font-display text-4xl sm:text-5xl text-[var(--accent)] font-light">
                  02
                </span>
              </div>
              <div className="md:col-span-4">
                <h4 className="font-display text-2xl sm:text-3xl text-[var(--text)] font-light">
                  3D Pre-Cut Vein Orchestration
                </h4>
                <span className="text-xs uppercase tracking-widest text-[var(--accent)] block mt-1 font-medium">
                  Continuous Vein Continuation
                </span>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-[var(--text-muted)] font-light leading-relaxed">
                  Before a single diamond blade touches stone, our clients preview a full-scale digital vein map. We simulate exactly how natural striations cascade down 45-degree mitered waterfalls and climb full-height backsplashes without random orientation breaks or misaligned joints.
                </p>
              </div>
            </div>

            <div className="about-statement-row border-t border-[var(--line)] pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
              <div className="md:col-span-2">
                <span className="font-display text-4xl sm:text-5xl text-[var(--accent)] font-light">
                  03
                </span>
              </div>
              <div className="md:col-span-4">
                <h4 className="font-display text-2xl sm:text-3xl text-[var(--text)] font-light">
                  0.4mm Laser Precision &amp; In-House Artisans
                </h4>
                <span className="text-xs uppercase tracking-widest text-[var(--accent)] block mt-1 font-medium">
                  Zero Subcontracting &amp; 15-Yr Warranty
                </span>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-[var(--text-muted)] font-light leading-relaxed">
                  Sub-millimeter Prodim 3D digital laser digitizers capture wall out-of-square irregularities down to 0.4 mm. We mill every piece on 5-axis Intermac CNC waterjets, then our certified in-house master craftsmen install, seam, and seal your surfaces with our 15-year fluoropolymer warranty.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}