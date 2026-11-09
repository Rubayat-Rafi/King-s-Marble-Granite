import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES } from '../data/content';
import { useStoneTheme } from '../context/StoneThemeContext';

export default function Portfolio() {
  const { activeStone } = useStoneTheme();
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(18);
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    'All',
    'Waterfall Islands',
    'Kitchens',
    'Bathrooms & Vanities',
    'Stone Slabs & Vein Flow',
    'Outdoor & Commercial',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((item) => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);

  // Helper to give varied heights and grid spans for a bespoke asymmetric editorial rhythm
  const getAsymmetricClass = (index) => {
    const cycle = index % 6;
    if (cycle === 0) return 'col-span-12 lg:col-span-8 h-[380px] sm:h-[500px]';
    if (cycle === 1) return 'col-span-12 lg:col-span-4 h-[380px] sm:h-[500px]';
    if (cycle === 2) return 'col-span-12 sm:col-span-6 lg:col-span-4 h-[340px] sm:h-[440px]';
    if (cycle === 3) return 'col-span-12 sm:col-span-6 lg:col-span-4 h-[340px] sm:h-[440px]';
    if (cycle === 4) return 'col-span-12 sm:col-span-6 lg:col-span-4 h-[340px] sm:h-[440px]';
    return 'col-span-12 lg:col-span-12 h-[420px] sm:h-[560px]';
  };

  return (
    <div className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-700 min-h-screen">
      {/* Editorial Header Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-24 bg-[#0B0B0C] text-[#F4F2EE] border-b border-[var(--line-dark)] overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-color" style={{ backgroundColor: activeStone.accent }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2.5 bg-white/10 px-3 py-1.5 backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeStone.accent }} />
              <span className="text-xs uppercase tracking-[0.22em] text-white/80 font-medium">
                Architectural Archive · Harvey, Louisiana
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-[-0.02em] leading-[1.05]">
              Signature <br />
              <span className="italic font-normal" style={{ color: activeStone.accent }}>
                stone installations.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#DDD8CF] max-w-2xl font-light leading-relaxed">
              Every photograph in this archive documents real, bespoke fabrication and installation commissions executed by King’s Marble &amp; Granite. Explore 45° mitered waterfalls, full-height slab backsplashes, and monolithic fireplaces with unbroken vein continuation.
            </p>

            <div className="pt-2 flex flex-wrap gap-6 text-xs text-[#DDD8CF]/80">
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-semibold">✦</span>
                <span>{GALLERY_IMAGES.length} Authentic Jobsite Photos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-semibold">✦</span>
                <span>0.4mm Digital Laser Precision</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-semibold">✦</span>
                <span>In-House Fabricators Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Architectural Filter Navigation (Static in-flow, non-sticky) */}
      <section className="py-5 sm:py-6 border-b border-[var(--line)] bg-[var(--bg)] transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Horizontal scrollable pills with Framer Motion gliding pill (scrollbar completely hidden) */}
            <div className="flex items-center gap-2 overflow-x-auto md:overflow-visible md:flex-wrap no-scrollbar py-1">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat);
                      setVisibleCount(18);
                    }}
                    className={`relative text-xs uppercase tracking-[0.16em] px-3.5 sm:px-4 py-2 sm:py-2.5 transition-colors duration-300 font-medium whitespace-nowrap shrink-0 border cursor-pointer ${
                      isActive
                        ? 'border-[var(--accent)] text-[#0F0F10] font-semibold shadow-sm'
                        : 'border-[var(--line)] bg-[var(--bg)] text-[var(--text)] hover:border-[var(--text-muted)]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="portfolioActiveTab"
                        className="absolute inset-0 bg-[var(--accent)] pointer-events-none"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>

            <div className="text-xs text-[var(--text-muted)] tracking-wider whitespace-nowrap text-left md:text-right shrink-0">
              Showing <strong className="text-[var(--text)] font-semibold">{displayedItems.length}</strong> of {filteredItems.length} items
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Luxury Portfolio Gallery */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-6 sm:gap-8">
            {displayedItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group cursor-pointer overflow-hidden border border-[var(--line)] relative bg-[#0B0B0C] transition-all duration-500 hover:border-[var(--text)] shadow-sm ${getAsymmetricClass(
                  idx
                )}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />

                {/* Stone details revealed on hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="text-xs uppercase tracking-[0.2em] bg-black/60 backdrop-blur-md px-2.5 py-1 text-white/90 border border-white/10">
                      {item.category}
                    </span>
                    <span className="w-8 h-8 rounded-none border border-white/20 bg-black/40 text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ↗
                    </span>
                  </div>

                  <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    <h3 className="font-display text-xl sm:text-2xl text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#DDD8CF]/80 font-light">
                      Natural Stone Monolith · Click to inspect veining details
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredItems.length && (
            <div className="text-center mt-20 pt-10 border-t border-[var(--line)]">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 18)}
                className="btn-primary-luxury"
              >
                Load Next {Math.min(18, filteredItems.length - visibleCount)} Installations ↓
              </button>
              <p className="text-xs text-[var(--text-muted)] mt-3">
                {filteredItems.length - visibleCount} additional verified photos in reserve
              </p>
            </div>
          )}
        </div>
      </section>

      {/* High-Resolution Veining Lightbox Modal with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 text-[#EDEDED]"
            style={{ backgroundColor: 'rgba(11, 11, 12, 0.98)' }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="flex items-center justify-between text-white z-20 max-w-7xl mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-1 text-left">
                <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] block font-medium">
                  {selectedImage.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-light">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="w-11 h-11 border border-white/20 text-white flex items-center justify-center hover:border-white transition-colors"
                aria-label="Close high-resolution modal"
              >
                ✕
              </button>
            </motion.div>

            {/* Large Image Preview */}
            <div
              className="flex-1 overflow-auto flex items-center justify-center my-4 max-w-7xl mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedImage.src}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[76vh] max-w-[92vw] object-contain shadow-2xl border border-white/10"
              />
            </div>

            {/* Footer Bar with Direct Action */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="border-t border-white/10 pt-4 max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/70 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-light">
                Crafted at Kings Marble &amp; Granite · 1848 Industrial Blvd, Harvey LA
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="tel:+15047237898"
                  className="text-[var(--accent)] font-medium hover:text-white transition-colors uppercase tracking-wider"
                >
                  Direct: (504) 723-7898
                </a>
                <Link
                  to="/contact"
                  onClick={() => setSelectedImage(null)}
                  className="btn-primary-luxury !py-2 !px-4 text-xs"
                >
                  Inquire About Similar Work →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Editorial Bottom CTA */}
      <section className="py-24 border-t border-[var(--line)] bg-[var(--bg)] transition-colors duration-700">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-label text-[var(--accent)] tracking-[0.24em] block">
            Bespoke Architectural Surface Commissioning
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[var(--text)] font-light leading-tight">
            Have a demanding stone design in mind?
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            From seamless waterfall kitchen islands to 18-foot floor-to-ceiling fireplaces, our master stone fabricators bring generational precision to your residential or commercial project.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary-luxury">
              Request Project Estimate
            </Link>
            <a href="tel:+15047237898" className="btn-outline-luxury">
              Call Direct: (504) 723-7898
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
