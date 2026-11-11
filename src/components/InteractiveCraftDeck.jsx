import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStoneTheme } from '../context/StoneThemeContext';
import ImageWithSkeleton from './ImageWithSkeleton';

const SHOWCASE_IMAGES = [
  { id: 1, src: "/King’s Social Media/IMG_7694.webp", alt: "Mitered Waterfall Island Installation" },
  { id: 2, src: "/King’s Social Media/IMG_7701.webp", alt: "Obsidian Bar Top Installation" },
  { id: 3, src: "/King’s Social Media/IMG_7718.webp", alt: "Translucent Quartzite Monolith Installation" },
  { id: 4, src: "/King’s Social Media/IMG_7692.webp", alt: "Floating Marble Vanity & Spa Cladding" },
  { id: 5, src: "/King’s Social Media/10778015280_IMG_0146.webp", alt: "Outdoor Culinary Pavilion Countertops" },
  { id: 6, src: "/King’s Social Media/IMG_7705.webp", alt: "Full-Height Monolithic Slab Hearth" },
  { id: 7, src: "/King’s Social Media/IMG_7707.webp", alt: "Architectural Kitchen Perimeter & Waterfall" },
];

export default function InteractiveCraftDeck() {
  const { activeStone } = useStoneTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef(null);
  const pointerStartX = useRef(null);
  const total = SHOWCASE_IMAGES.length;

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Window resize listener for responsive card spacing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll every 3 seconds (pauses on hover, drag, or modal open)
  useEffect(() => {
    if (isPaused || isGrabbing || selectedImage) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, isGrabbing, selectedImage, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === 'ArrowLeft') prevCard();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextCard, prevCard]);

  // Pointer drag / grab handlers (mouse & touch unified)
  const handlePointerDown = (e) => {
    pointerStartX.current = e.clientX;
    setIsGrabbing(true);
    setIsPaused(true);
  };

  const handlePointerUp = (e) => {
    if (pointerStartX.current !== null) {
      const deltaX = e.clientX - pointerStartX.current;
      if (deltaX > 25) {
        prevCard();
      } else if (deltaX < -25) {
        nextCard();
      }
    }
    pointerStartX.current = null;
    setIsGrabbing(false);
    setTimeout(() => setIsPaused(false), 2500);
  };

  const handlePointerCancel = () => {
    pointerStartX.current = null;
    setIsGrabbing(false);
    setIsPaused(false);
  };

  // Touch handlers for mobile devices
  const handleTouchStart = (e) => {
    pointerStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    if (pointerStartX.current !== null) {
      const deltaX = e.changedTouches[0].clientX - pointerStartX.current;
      if (deltaX > 25) {
        prevCard();
      } else if (deltaX < -25) {
        nextCard();
      }
    }
    pointerStartX.current = null;
    setTimeout(() => setIsPaused(false), 2500);
  };

  // Responsive full-width card spacing across all viewports
  const cardSpacing =
    windowWidth >= 1440 ? 320 : windowWidth >= 1024 ? 270 : windowWidth >= 768 ? 210 : windowWidth >= 480 ? 150 : 110;

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative py-6 sm:py-10 bg-[#080809] overflow-hidden select-none border-0 w-full"
    >
      {/* Subtle ambient lighting responding to the active stone */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] opacity-15 transition-all duration-1000"
        style={{ backgroundColor: activeStone.accent }}
      />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative z-10 overflow-hidden px-2 sm:px-4"
      >
        {/* ── FULL WIDTH DRAGGABLE 3D IMAGE DECK ── */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`relative h-[380px] sm:h-[450px] md:h-[500px] flex items-center justify-center touch-pan-y w-full overflow-hidden ${
            isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ perspective: '1200px' }}
        >
          {SHOWCASE_IMAGES.map((item, idx) => {
            let diff = (idx - activeIndex) % total;
            if (diff > 3) diff -= total;
            if (diff < -3) diff += total;

            const isCenter = diff === 0;

            const xOffset = diff * cardSpacing;
            const scale = Math.max(0.55, 1 - Math.abs(diff) * 0.13);
            const zIndex = 30 - Math.abs(diff) * 6;
            const opacity = Math.max(0.18, 1 - Math.abs(diff) * 0.26);
            const rotateY = diff * -12;

            return (
              <motion.div
                key={item.id}
                onClick={() => {
                  if (isCenter) {
                    setSelectedImage(item);
                  } else {
                    setActiveIndex(idx);
                  }
                }}
                initial={false}
                animate={{
                  x: xOffset,
                  scale,
                  rotateY,
                  zIndex,
                  opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 28,
                  mass: 0.9,
                }}
                className={`absolute w-[210px] sm:w-[260px] md:w-[310px] h-[310px] sm:h-[380px] md:h-[440px] rounded-none will-change-transform overflow-hidden shadow-2xl transition-all duration-500 group outline-none focus:outline-none focus:ring-0 select-none cursor-pointer border-0 ${
                  isCenter ? 'shadow-[0_25px_60px_rgba(0,0,0,0.95)]' : 'shadow-xl'
                }`}
                style={{
                  backgroundColor: '#0F0F12',
                }}
              >
                {/* Pure Installation Photograph with Skeleton Loader (Zero Border, Sharp Rectangular Stone) */}
                <ImageWithSkeleton
                  src={item.src}
                  alt={item.alt}
                  draggable={false}
                  className="w-full h-full rounded-none border-0"
                  imgClassName="w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105 rounded-none border-0"
                  loadingText=""
                />

                {/* Subtle vignette layer for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 pointer-events-none rounded-none" />

                {/* Center Card Click-to-View Badge */}
                {isCenter && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[11px] uppercase tracking-wider bg-black/80 backdrop-blur-md px-3 py-1.5 text-white/90 font-medium whitespace-nowrap shadow-lg rounded-none border-0">
                      Click to inspect ↗
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ── SLEEK UNIFIED CONTROLS (Zero Rounded Corners, Zero Border) ── */}
        <div className="mt-4 sm:mt-5 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-none bg-black/60 backdrop-blur-md border-0 shadow-lg">
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={prevCard}
              aria-label="Previous slide"
              className="text-white/60 hover:text-white transition-colors p-1 cursor-pointer flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator with active pill expansion (Sharp bars, rounded-none) */}
            <div className="flex items-center gap-1.5 px-1">
              {SHOWCASE_IMAGES.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Jump to slide ${idx + 1}`}
                  className="h-1.5 rounded-none transition-all duration-300 cursor-pointer border-0"
                  style={{
                    backgroundColor: idx === activeIndex ? 'var(--accent)' : 'rgba(255,255,255,0.25)',
                    width: idx === activeIndex ? '16px' : '6px',
                  }}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={nextCard}
              aria-label="Next slide"
              className="text-white/60 hover:text-white transition-colors p-1 cursor-pointer flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Full-Screen High-Resolution Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="deck-modal"
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
              className="flex items-center justify-between text-white z-20 max-w-7xl mx-auto w-full text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] block font-medium">
                  Atelier Portfolio Highlight
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-light">
                  {selectedImage.alt}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="w-11 h-11 border-0 bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer rounded-none"
                aria-label="Close modal"
              >
                ✕
              </button>
            </motion.div>

            {/* Modal Image */}
            <div
              className="flex-1 overflow-auto flex items-center justify-center my-4 max-w-7xl mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={selectedImage.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="max-h-[75vh] max-w-[90vw] flex items-center justify-center"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[72vh] max-w-full object-contain shadow-2xl rounded-none border-0"
                />
              </motion.div>
            </div>

            {/* Footer */}
            <div
              className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 z-20 max-w-7xl mx-auto w-full border-0 pt-4"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Authentic Commission · King's Marble &amp; Granite Fabrication</span>
              <span className="mt-2 sm:mt-0 font-mono text-[var(--accent)]">
                SLIDE {selectedImage.id} OF {total}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
