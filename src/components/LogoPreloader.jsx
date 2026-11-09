import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LogoPreloader() {
  const [progress, setProgress] = useState(0);
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // 3.2-second progression (3–4s range)
    const startTime = Date.now();
    const duration = 3200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        // Start curtain reveal
        setTimeout(() => {
          setIsOpening(true);
        }, 250);

        // Remove from DOM when transition finishes (total ~3.8s)
        setTimeout(() => {
          setIsDone(true);
        }, 1100);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (isDone) return null;

  const getPhaseText = (p) => {
    if (p < 34) return '0.4mm Laser Calibrating';
    if (p < 68) return 'Syncing 5-Axis Waterjet Miters';
    if (p < 99) return 'Aligning Vein Continuation';
    return 'Atelier Ready';
  };

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden select-none bg-[#080809]">
      {/* Upper Curtain */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? '-100%' : 0 }}
        transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#080809] border-b border-white/5 will-change-transform z-20"
      />

      {/* Lower Curtain */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? '100%' : 0 }}
        transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#080809] border-t border-white/5 will-change-transform z-20"
      />

      {/* Center Logo & Progress Content */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: isOpening ? 0 : 1,
          scale: isOpening ? 1.05 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6"
      >
        <div className="flex flex-col items-center max-w-sm text-center space-y-6">
          {/* Logo with Soft Glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#E5C578]/20 blur-3xl rounded-full scale-150 pointer-events-none" />
            <img
              src="/logo.webp"
              alt="Kings Marble & Granite"
              className="relative h-14 sm:h-16 w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
            />
          </div>

          {/* Laser Progress Bar */}
          <div className="w-60 sm:w-72 space-y-2.5">
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-[#E5C578]/40 via-[#E5C578] to-[#E5C578] transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Dynamic Status & Percentage */}
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-white/80 uppercase">
              <span className="truncate max-w-[200px]">{getPhaseText(progress)}</span>
              <span className="text-[#E5C578] font-bold shrink-0">{progress}%</span>
            </div>
          </div>

          {/* Subtitle */}
          <div className="text-[10px] uppercase tracking-[0.28em] text-[#DDD8CF]/60 font-light">
            Harvey, Louisiana · Stone Atelier
          </div>
        </div>
      </motion.div>
    </div>
  );
}
