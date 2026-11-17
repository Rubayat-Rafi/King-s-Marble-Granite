import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStoneTheme, STONE_THEMES } from '../context/StoneThemeContext';
import ImageWithSkeleton from './ImageWithSkeleton';

export default function SlabSelector() {
  const { activeStone, setStoneById } = useStoneTheme();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const imageContainerRef = useRef(null);
  const selectorRef = useRef(null);

  // Smoothly activate stone and ensure the monolith image remains centered & visible
  const handleSelectStone = (stoneId) => {
    setStoneById(stoneId);
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      // If the top edge of the slab image is scrolled above or out of comfortable viewport range
      if (rect.top < 80 || rect.bottom > window.innerHeight + 120) {
        imageContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  // Mouse move: Cursor light highlight + 3D Card Tilt (2 to 5 degrees)
  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    imageContainerRef.current.style.setProperty('--mouse-x', `${x}%`);
    imageContainerRef.current.style.setProperty('--mouse-y', `${y}%`);

    // Tilt calculation: -4deg to +4deg
    const tiltX = (y / 100 - 0.5) * -8;
    const tiltY = (x / 100 - 0.5) * 8;
    setTilt({ rx: tiltX, ry: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  const handleOpenLightbox = () => {
    setZoomLevel(1);
    setLightboxOpen(true);
  };

  const isBacklitOnyx = activeStone.id === 'backlit-onyx';
  const displayedPhoto = activeStone.image;

  return (
    <section
      id="stone-selector"
      ref={selectorRef}
      className="py-24 sm:py-36 relative border-t border-[var(--line)] transition-colors duration-1000 ease-luxury overflow-hidden"
    >
      {/* Backlit Onyx Ambient Room Glow (Radiates warm amber + violet aura across the whole page) */}
      <div
        className={`absolute -top-32 left-1/4 w-[750px] h-[750px] rounded-full blur-[160px] pointer-events-none transition-all duration-1000 ${
          isBacklitOnyx ? 'opacity-40 scale-110' : 'opacity-10 scale-90'
        }`}
        style={{
          background: isBacklitOnyx
            ? 'radial-gradient(circle, #7A5BD0 0%, #D9954A 60%, transparent 80%)'
            : 'var(--glow)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Lead with Framer Motion Fade-Up */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div className="space-y-3 text-left">
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium block">
              01 / Featured Installations
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-[var(--text)] font-light leading-tight">
              Crafted for every space.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-sm font-light leading-relaxed text-left md:text-right">
            Select any completed project below to inspect the stone work in full detail.
          </p>
        </motion.div>

        {/* Split Screen Signature Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Fixed / Sticky Slab Monolith with Framer Motion Fade-In */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:sticky lg:top-24"
          >
            <div
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative h-[420px] sm:h-[520px] lg:h-[580px] overflow-hidden border border-[var(--line)] bg-[#0B0B0C] transition-transform duration-300 ease-out"
              style={{
                perspective: '1000px',
                transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              }}
            >
              {/* High-Res Actual Raw Slab Image with Cursor Light & Zoom */}
              <div
                onClick={handleOpenLightbox}
                className="has-cursor-light group w-full h-full relative cursor-zoom-in overflow-hidden"
              >
                <ImageWithSkeleton
                  src={displayedPhoto}
                  alt={`${activeStone.name} raw slab veining`}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loadingText={`Inspecting ${activeStone.name}...`}
                />

                {/* Polished stone cursor light highlight */}
                <div className="cursor-light-layer" />

                {/* Subtle Glare based on tilt */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(${tilt.ry * 15 + 45}deg, rgba(255,255,255,0.4) 0%, transparent 60%)`,
                  }}
                />

              </div>
            </div>
          </motion.div>

          {/* Right Column: Slabs Selection at TOP with Framer Motion Fade-Up */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            {/* Project Selection Grid */}
            <div className="p-5 sm:p-6 border border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-sm space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-semibold block">
                  Featured Applications
                </span>
                <span className="text-[11px] text-[var(--text-muted)] font-mono">6 Projects</span>
              </div>

              {/* 2-Column Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {STONE_THEMES.map((stone) => {
                  const isCurrent = stone.id === activeStone.id;
                  return (
                    <motion.button
                      key={stone.id}
                      type="button"
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      onClick={() => handleSelectStone(stone.id)}
                      className={`relative text-left p-3 border transition-colors duration-300 flex items-center justify-between gap-2.5 cursor-pointer group ${
                        isCurrent
                          ? 'border-[var(--accent)] bg-[var(--line)]/60 shadow-md'
                          : 'border-[var(--line)] hover:border-[var(--text-muted)] bg-[var(--bg)]/50'
                      }`}
                    >
                      {isCurrent && (
                        <motion.div
                          layoutId="activeSlabRing"
                          className="absolute inset-0 border-2 border-[var(--accent)] bg-[var(--line)]/40 pointer-events-none"
                          transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                        />
                      )}

                      <div className="flex items-center gap-2.5 min-w-0 relative z-10">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0 shadow-sm transition-transform group-hover:scale-110"
                          style={{ backgroundColor: stone.accent }}
                        />
                        <div className="min-w-0">
                          <h4 className="font-display text-sm sm:text-base text-[var(--text)] leading-tight font-medium truncate">
                            {stone.name}
                          </h4>
                          <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider block truncate">
                            {stone.type}
                          </span>
                        </div>
                      </div>

                      {isCurrent && (
                        <span className="text-[10px] uppercase tracking-wider text-[var(--accent)] font-bold shrink-0 relative z-10">
                          ✦
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Active Project Details Card */}
            <div className="p-6 sm:p-8 border border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStone.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full transition-colors duration-700"
                        style={{ backgroundColor: activeStone.accent }}
                      />
                      <span className="text-xs uppercase tracking-[0.22em] text-[var(--accent)] font-medium">
                        {activeStone.type}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-[var(--text)] font-light">
                      {activeStone.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                    {activeStone.veinDescription}
                  </p>

                  <div className="pt-2">
                    <motion.a
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      href="/contact"
                      className="btn-primary-luxury text-xs w-full text-center"
                    >
                      Request a quote for a similar project →
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-Screen Lightbox with High-Resolution Veining Zoom & Framer Motion Transitions */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 text-[#EDEDED]"
            style={{ backgroundColor: 'rgba(11, 11, 12, 0.98)' }}
            onClick={() => setLightboxOpen(false)}
          >
            {/* Top Bar */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between text-[#EDEDED] z-20 max-w-7xl mx-auto w-full gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-left space-y-1">
                <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] block font-medium">
                  {activeStone.type}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-light">
                  {activeStone.name}
                </h3>
              </div>

              <div className="flex items-center gap-3">

                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => (z >= 2.5 ? 1 : z + 0.75))}
                  className="btn-primary-luxury text-xs !py-2 !px-4"
                >
                  Zoom {zoomLevel}x
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  className="w-11 h-11 border border-white/20 text-[#EDEDED] flex items-center justify-center text-sm hover:border-white transition-colors"
                  aria-label="Close inspection lightbox"
                >
                  ✕
                </button>
              </div>
            </motion.div>

            {/* Zoomable Image Viewport with Luxury Skeleton */}
            <div
              className="flex-1 overflow-auto flex items-center justify-center my-4 cursor-grab max-w-7xl mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: zoomLevel }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="max-h-[76vh] max-w-[90vw] flex items-center justify-center"
              >
                <ImageWithSkeleton
                  src={displayedPhoto}
                  alt={`Ultra high-resolution veining pattern of ${activeStone.name}`}
                  className="max-h-[76vh] max-w-[90vw] shadow-2xl border border-white/10 rounded-sm"
                  imgClassName="max-h-[76vh] max-w-[90vw] object-contain"
                  loadingText={`Loading ${activeStone.name}...`}
                />
              </motion.div>
            </div>

            {/* Bottom Caption */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs text-[#9B9B9B] border-t border-white/10 pt-4 flex flex-wrap justify-between items-center gap-4 z-20 max-w-7xl mx-auto w-full text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Click zoom button to inspect micro-fissures, quartz crystals, and continuous vein lines.</span>
              <span className="text-[var(--accent)] font-medium">Call (504) 723-7898 to view this block in our Harvey slab yard.</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
