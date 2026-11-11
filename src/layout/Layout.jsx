import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Lenis from 'lenis';
import { StoneThemeProvider } from '../context/StoneThemeContext';
import Header from '../components/Header';
import MinimalFooter from '../components/MinimalFooter';
import ScrollControls from '../components/ScrollControls';
import LogoPreloader from '../components/LogoPreloader';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize smooth scroll via Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <StoneThemeProvider>
      {/* Short Luxury Logo Preloader (<1.6s) */}
      <LogoPreloader />

      <ScrollToTop />
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] relative flex flex-col justify-between overflow-x-clip w-full max-w-full">
        {/* Subtle Organic Film Grain Layer */}
        <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.025] mix-blend-overlay bg-repeat bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Global Luxury Navigation */}
        <Header />

        {/* Routed Page Content - Instant, Zero White Flash */}
        <div className="flex-grow bg-[var(--bg)] w-full max-w-full overflow-x-clip">
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
