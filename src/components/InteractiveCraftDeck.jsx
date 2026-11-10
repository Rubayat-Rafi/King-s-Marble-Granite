import React, { useState, useEffect, useRef } from 'react';
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

  const containerRef = useRef(null);
  const pointerStartX = useRef(null);
  const total = SHOWCASE_IMAGES.length;

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === 'ArrowLeft') prevCard();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Pointer drag / grab handlers (mouse & touch unified)
  const handlePointerDown = (e) => {
    pointerStartX.current = e.clientX;
    setIsGrabbing(true);
  };

  const handlePointerUp = (e) => {
    if (pointerStartX.current !== null) {
      const deltaX = e.clientX - pointerStartX.current;
      if (deltaX > 35) {
        prevCard();
      } else if (deltaX < -35) {
        nextCard();
      }
    }
    pointerStartX.current = null;
    setIsGrabbing(false);
  };

  const handlePointerCancel = () => {
    pointerStartX.current = null;
    setIsGrabbing(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    pointerStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (pointerStartX.current !== null) {
      const deltaX = e.changedTouches[0].clientX - pointerStartX.current;
      if (deltaX > 35) {
        prevCard();
      } else if (deltaX < -35) {
        nextCard();
      }
    }
    pointerStartX.current = null;
  };

  // Responsive spread spacing: fine-tuned for small mobile phones to prevent horizontal overflow
  const cardSpacing = windowWidth >= 1024 ? 260 : windowWidth >= 768 ? 200 : windowWidth >= 480 ? 140 : 105;

  return (
    <section className="relative py-16 sm:py-24 bg-[#080809] overflow-hidden select-none border-b border-white/5 w-full max-w-full">
      {/* Subtle ambient lighting responding to the active stone */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full blur-[140px] opacity-15 transition-all duration-1000"
        style={{ backgroundColor: activeStone.accent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
        {/* ── GRABBABLE 3D IMAGE DECK (Pure visual, zero text) ── */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`relative h-[420px] sm:h-[490px] md:h-[550px] flex items-center justify-center touch-pan-y w-full max-w-full overflow-hidden ${
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
            const scale = Math.max(0.55, 1 - Math.abs(diff) * 0.14);
            const zIndex = 30 - Math.abs(diff) * 6;
            const opacity = Math.max(0.18, 1 - Math.abs(diff) * 0.28);
            const rotateY = diff * -14;

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
                className={`absolute w-[210px] sm:w-[260px] md:w-[310px] h-[320px] sm:h-[390px] md:h-[470px] rounded-2xl sm:rounded-3xl will-change-transform overflow-hidden shadow-2xl transition-all duration-500 group outline-none focus:outline-none focus:ring-0 select-none border cursor-pointer ${
                  isCenter
                    ? 'border-2 border-white/45 shadow-[0_25px_60px_rgba(0,0,0,0.95)]'
                    : 'border border-white/15 hover:border-white/35'
                }`}
                style={{
                  backgroundColor: '#0F0F12',
                }}
              >
                {/* Pure Installation Photograph with Skeleton */}
                <ImageWithSkeleton
                  src={item.src}
                  alt={item.alt}
                  draggable={false}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                  loadingText=""
                />

                {/* Subtle vignette layer for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                {/* Center Card Click-to-View Badge */}
                {isCenter && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[11px] uppercase tracking-wider bg-black/80 backdrop-blur-md px-3 py-1.5 text-white/90 border border-white/20 font-medium whitespace-nowrap shadow-lg">
                      Click to inspect ↗
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ── MINIMAL NAVIGATION CONTROLS (Arrows & Dots Only) ── */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prevCard}
            aria-label="Previous image"
            className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/50 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth="2.4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">
            {SHOWCASE_IMAGES.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Jump to slide ${idx + 1}`}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: idx === activeIndex ? 'var(--accent)' : 'rgba(255,255,255,0.25)',
                  transform: idx === activeIndex ? 'scale(1.35)' : 'scale(1)',
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextCard}
            aria-label="Next image"
            className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/50 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth="2.4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

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
                className="w-11 h-11 border border-white/20 text-white flex items-center justify-center hover:border-white transition-colors"
                aria-label="Close high-resolution modal"
              >
                ✕
              </button>
            </motion.div>

            {/* Large Image Preview with Luxury Skeleton */}
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
                className="max-h-[76vh] max-w-[92vw] w-full flex items-center justify-center"
              >
                <ImageWithSkeleton
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[76vh] max-w-[92vw] shadow-2xl border border-white/10 rounded-sm"
                  imgClassName="max-h-[76vh] max-w-[92vw] object-contain"
                  loadingText="Loading High-Res Specimen · 0.4mm Detail"
                />
              </motion.div>
            </div>

            {/* Footer Bar */}
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
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="btn-primary-luxury !py-2 !px-5 text-xs"
              >
                Close View ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
