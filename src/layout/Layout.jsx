import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StoneThemeProvider } from '../context/StoneThemeContext';
import Header from '../components/Header';
import MinimalFooter from '../components/MinimalFooter';
import ScrollControls from '../components/ScrollControls';
import LogoPreloader from '../components/LogoPreloader';

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize smooth scroll via Lenis synchronized with GSAP ScrollTrigger
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <StoneThemeProvider>
      {/* Short Luxury Logo Preloader (<1.6s) */}
      <LogoPreloader />

      <ScrollToTop />
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] relative flex flex-col justify-between overflow-x-hidden w-full max-w-full">
        {/* Subtle Organic Film Grain Layer */}
        <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.025] mix-blend-overlay bg-repeat bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Global Luxury Navigation */}
        <Header />

        {/* Routed Page Content - Instant, Zero White Flash */}
        <div className="flex-grow bg-[var(--bg)] w-full max-w-full overflow-x-hidden">
          <Outlet />
        </div>

        {/* Global Minimal Footer */}
        <MinimalFooter />

        {/* Global Floating Scroll Up/Down Controls (Fixed Bottom-Right) */}
        <ScrollControls />
      </div>
    </StoneThemeProvider>
  );
}
