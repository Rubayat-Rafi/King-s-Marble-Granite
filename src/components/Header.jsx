import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { useStoneTheme } from '../context/StoneThemeContext';

export default function Header() {
  const { activeStone } = useStoneTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Materials', href: '/materials', isRoute: true },
    { label: 'Services', href: '/services', isRoute: true },
    { label: 'Portfolio', href: '/portfolio', isRoute: true },
    { label: 'Process', href: '/process', isRoute: true },
    { label: 'About', href: '/about', isRoute: true },
    { label: 'Contact', href: '/contact', isRoute: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? 'bg-[var(--bg)]/95 backdrop-blur-md shadow-sm'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
    >
      {/* ── TOP UTILITY NAVIGATION: Number, Location & Hours ── */}
      <div
        className={`w-full bg-transparent transition-colors duration-500 text-[11px] sm:text-xs select-none ${
          scrolled ? 'text-[var(--text-muted)]' : 'text-white/85'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex items-center justify-between gap-3 sm:gap-6">
          {/* Left: Physical Atelier & Slab Yard Location */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <a
              href="https://maps.google.com/?q=1848+Industrial+Blvd,+Harvey,+LA+70058"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors group truncate"
              title="Open Kings Marble & Granite in Google Maps"
            >
              <svg
                className="w-3.5 h-3.5 shrink-0 text-[var(--accent)] transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium tracking-wide truncate">
                1848 Industrial Blvd, Harvey, LA 70058
              </span>
            </a>
            <span className="hidden md:inline text-current opacity-30">|</span>
            <span className="hidden md:inline tracking-wider font-light text-[10px] sm:text-[11px] opacity-80">
              Mon – Sat: 8:00 AM – 5:00 PM
            </span>
          </div>

          {/* Right: Phone Line & Direct Yard Tour CTA */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href="tel:+15047237898"
              className="inline-flex items-center gap-1.5 font-semibold tracking-wider hover:text-[var(--accent)] transition-colors group"
              title="Call King's Marble & Granite directly"
            >
              <svg
                className="w-3.5 h-3.5 shrink-0 text-[var(--accent)] transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-[var(--accent)] font-semibold">(504) 723-7898</span>
            </a>
            <span className="hidden sm:inline text-current opacity-30">|</span>
            <Link
              to="/contact"
              className="hidden sm:inline uppercase tracking-[0.18em] text-[10px] sm:text-[11px] font-semibold text-[var(--accent)] hover:underline"
            >
              Tour Slab Yard →
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN PRIMARY NAVIGATION ROW ── */}
      <div className={`transition-all duration-500 ${scrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-4.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Authentic Full-Color Original Logo across both Hero and Scrolled states */}
          <Link to="/" className="flex items-center group text-decoration-none">
            <img
              src="/logo.webp"
              alt="Kings Marble & Granite"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
            />
          </Link>

          {/* Quiet Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = link.isRoute && location.pathname === link.href;

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs uppercase tracking-[0.22em] transition-colors duration-300 relative py-1 font-medium ${
                    scrolled
                      ? isActive
                        ? 'text-[var(--text)] font-semibold border-b border-[var(--accent)]'
                        : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                      : isActive
                        ? 'text-white font-semibold border-b border-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]'
                        : 'text-white/80 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/contact"
              className="btn-primary-luxury text-xs !py-2.5 !px-5 hidden sm:inline-flex"
            >
              Request estimate
            </Link>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center ${
                scrolled ? 'text-[var(--text)]' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              <span className="text-xs uppercase tracking-widest font-medium">
                {mobileMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Framer Motion Smooth Height Collapse */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[var(--bg)] border-b border-[var(--line)] px-6 py-8 transition-colors duration-700 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-5 text-left">
              {navLinks.map((link) => {
                if (link.isRoute) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-display text-2xl text-[var(--text)] font-light"
                    >
                      {link.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-2xl text-[var(--text)] font-light"
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-6 border-t border-[var(--line)] flex flex-col gap-3">
                <div className="space-y-1 text-xs text-[var(--text-muted)]">
                  <p className="font-medium text-[var(--text)]">1848 Industrial Blvd, Harvey, LA 70058</p>
                  <p>Mon – Sat: 8:00 AM – 5:00 PM</p>
                </div>
                <a
                  href="tel:+15047237898"
                  className="text-xs uppercase tracking-wider text-[var(--accent)] font-semibold"
                >
                  Direct: (504) 723-7898
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary-luxury w-full text-center text-xs mt-1"
                >
                  Request estimate
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
