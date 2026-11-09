import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollControls() {
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show up arrow if scrolled down more than 150px
      setCanScrollUp(scrollY > 150);

      // Show down arrow unless within 80px of page bottom
      setCanScrollDown(scrollY + windowHeight < documentHeight - 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex flex-col items-center gap-2 select-none">
      <AnimatePresence>
        {canScrollUp && (
          <motion.button
            key="scroll-up"
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.12, borderColor: 'var(--accent)', color: 'var(--accent)' }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/80 backdrop-blur-md border border-white/30 shadow-2xl text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Scroll to top of page"
            title="Scroll to Top"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              strokeWidth="2.4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {canScrollDown && (
          <motion.button
            key="scroll-down"
            type="button"
            onClick={scrollDown}
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            whileHover={{ scale: 1.12, borderColor: 'var(--accent)', color: 'var(--accent)' }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/80 backdrop-blur-md border border-white/30 shadow-2xl text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Scroll down page"
            title="Scroll Down"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              strokeWidth="2.4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

