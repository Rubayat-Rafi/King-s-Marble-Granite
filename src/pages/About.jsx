import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { MEDIA_ASSETS, formatImagePath } from '../data/content';
import { useStoneTheme } from '../context/StoneThemeContext';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

export default function About() {
  const { activeStone } = useStoneTheme();
  const workshopGallery = [
    { src: formatImagePath('slab-kings-carved-marble-crown-sculpture-01.webp'), alt: 'Hand-carved solid marble Kings crown sculpture' },
    { src: formatImagePath('slab-black-forest-4way-diamond-bookmatch-01.webp'), alt: '4-way diamond bookmatched granite slab' },
    { src: formatImagePath('slab-cristallo-backlit-amber-veins-01.webp'), alt: 'Backlit translucent Cristallo quartzite slab' },
    { src: formatImagePath('slab-patagonia-bookmatched-quartzite-01.webp'), alt: 'Bookmatched Patagonia quartzite slab reserve' },
    { src: formatImagePath('atelier-kings-harvey-monument-sign-01.webp'), alt: 'King\'s Marble & Granite Harvey showroom' },
    { src: formatImagePath('atelier-kings-marble-fleet-truck-01.webp'), alt: 'King\'s Marble & Granite installation fleet' },
  ];

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
                Heritage &amp; Workshop · Harvey, Louisiana
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-[-0.02em] leading-[1.05]">
              Generational craft <br />
              <span className="italic font-normal" style={{ color: activeStone.accent }}>
                meets laser precision.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#DDD8CF] max-w-2xl font-light leading-relaxed">
              King&apos;s Marble &amp; Granite has been in business for 18 years. Founded in Harvey, Louisiana by Hussein &amp; Musa, we specialize in Marble, Granite, Quartz &amp; Quartzite — our work stands out above the rest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Philosophy & Workshop Imagery */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 lg:col-span-6 space-y-6 text-left"
            >
              <span className="text-label text-xs text-[var(--accent)] tracking-[0.24em] font-medium block">
                Direct Importers &amp; In-House Fabricators
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-[var(--text)] leading-tight">
                We curate architectural permanence from the Earth&apos;s oldest geology.
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)] font-light leading-relaxed">
                With 18 years in business, King’s Marble &amp; Granite was established by co-founders Hussein &amp; Musa to deliver precision craftsmanship across Marble, Granite, Quartz, and Quartzite without third-party subcontracting.
              </p>
              <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                From kitchen islands and waterfall counters to bathroom vanities and fireplace surrounds, we carefully measure, cut, polish, and install every piece in-house so our work stands out above the rest.
              </p>

              <div className="pt-2">
                <Link
                  to="/brazil"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--accent)] hover:text-white font-medium border-b border-[var(--accent)] pb-0.5 transition-colors"
                >
                  <span>Explore Direct Brazil Quarry Provenance &amp; Owner Sourcing</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="pt-6 border-t border-[var(--line)] grid grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-display text-2xl text-[var(--text)]">18 Years</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1 font-light">Established stone fabricators serving Harvey &amp; New Orleans.</p>
                </div>
                <div>
                  <h4 className="font-display text-2xl text-[var(--text)]">4 Specialties</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1 font-light">Marble, Granite, Quartz &amp; Quartzite crafted in-house.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 lg:col-span-6"
            >
              <div className="relative border border-[var(--line)] overflow-hidden shadow-2xl bg-[#0B0B0C] h-[440px] sm:h-[540px]">
                <ImageWithSkeleton
                  src={MEDIA_ASSETS.workshop}
                  alt="Kings Marble and Granite Workshop"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                  loadingText=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Gallery Snapshot */}
      <section className="py-20 border-y border-[var(--line)] bg-[var(--bg)] transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-12 space-y-2 text-left"
          >
            <span className="text-label text-[var(--accent)] tracking-[0.22em] block">
              Behind the Diamond Blades
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-light text-[var(--text)]">
              Artisan Masonry in Action
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {workshopGallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-44 sm:h-52 overflow-hidden border border-[var(--line)] bg-[#0B0B0C] group"
              >
                <ImageWithSkeleton
                  src={img.src}
                  alt={`Workshop ${idx + 1}`}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loadingText=""
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[var(--line)] bg-[#0B0B0C] text-[#F4F2EE] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto px-4 space-y-6"
        >
          <span className="text-label text-[var(--accent)] tracking-[0.24em] block">
            Visit Our Private Slab Yard
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-white">
            Touch monolithic stone in person.
          </h2>
          <p className="text-sm text-[#DDD8CF] max-w-xl mx-auto font-light leading-relaxed">
            Walk our Harvey indoor reserve and inspect full-size Calacatta, Taj Mahal, and Titanium Granite slabs under calibrated gallery illumination.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary-luxury">
              Book Studio Consultation
            </Link>
            <a href="tel:+15047237898" className="btn-outline-luxury !text-white !border-white/30">
              (504) 723-7898
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
