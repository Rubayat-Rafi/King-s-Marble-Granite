import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100%
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(clamped);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="mt-20 border border-[var(--line)] bg-[var(--bg)] p-6 sm:p-10 text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium block">
            Interactive Metamorphosis
          </span>
          <h3 className="font-display text-2xl sm:text-4xl text-[var(--text)] font-light">
            From raw quarry monolith to finished waterfall.
          </h3>
        </div>
        <p className="text-xs text-[var(--text-muted)] max-w-sm font-light">
          Drag the center divider to inspect the transformation from a raw Carrara slab lot into our precision 45° vein-matched waterfall island.
        </p>
      </div>

      {/* Slider Viewport */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative h-[380px] sm:h-[520px] overflow-hidden select-none cursor-ew-resize border border-[var(--line)] bg-[#0B0B0C]"
      >
        {/* AFTER IMAGE: Finished 14-ft Mitered Waterfall Kitchen (Full Width Underlying) */}
        <img
          src="/King’s Social Media/IMG_7690.webp"
          alt="Finished Mitered Waterfall Island Installation"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute top-5 right-5 z-10 bg-black/70 backdrop-blur-md px-3 py-1.5 text-xs text-white uppercase tracking-widest border border-white/10 pointer-events-none">
          Finished 6cm Waterfall Apron
        </div>

        {/* BEFORE IMAGE: Raw Quarry Monolith (Clipped via Modern CSS clip-path - 100% fluid & responsive) */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src="/King’s Social Media/IMG_7694.webp"
            alt="Raw Quarry Slab Specimen"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-5 left-5 z-10 bg-black/70 backdrop-blur-md px-3 py-1.5 text-xs text-[var(--accent)] uppercase tracking-widest border border-white/10">
            Raw Carrara Slab Lot
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE */}
        <div
          className="absolute top-0 bottom-0 z-20 w-[2px] bg-white pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Central Luxury Handle with Framer Motion spring physics */}
          <motion.div
            whileHover={{ scale: 1.18, boxShadow: '0 0 25px var(--glow)' }}
            whileTap={{ scale: 0.92 }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#0B0B0C] border-2 border-[var(--accent)] text-white flex items-center justify-center text-xs shadow-2xl pointer-events-auto cursor-grab active:cursor-grabbing transition-colors duration-300"
          >
            <span className="font-bold">↔</span>
          </motion.div>
        </div>

        {/* Bottom Helper Bar */}
        <div className="absolute bottom-4 inset-x-3 sm:inset-x-4 flex justify-between items-center text-[10px] sm:text-xs text-white/80 pointer-events-none z-10">
          <span className="bg-black/70 px-2 py-0.5 sm:px-2.5 sm:py-1 backdrop-blur-md border border-white/10">
            01 / First-Quality Block
          </span>
          <span className="bg-black/70 px-2 py-0.5 sm:px-2.5 sm:py-1 backdrop-blur-md border border-white/10">
            02 / 5-Axis Waterjet Miters
          </span>
        </div>
      </div>
    </div>
  );
}

