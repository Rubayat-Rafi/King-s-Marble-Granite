import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const CURRENT_YEAR = new Date().getFullYear();

export default function MinimalFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg)] pt-16 sm:pt-20 pb-12 text-[var(--text-muted)] transition-colors duration-1000 ease-luxury overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[var(--line)] text-left">
          {/* Logo & Identity (Original logo on light background) */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="inline-block group">
              <img
                src="/logo.webp"
                alt="Kings Marble & Granite"
                className="h-11 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-sm"
              />
            </Link>
            <p className="text-xs text-[var(--text-muted)] max-w-sm font-light leading-relaxed">
              Master countertop fabricators and direct stone importers in Harvey, Louisiana.
              Crafting bookmatched waterfall islands, full-height slab walls, and stone sanctuaries.
            </p>
            <span className="text-xs text-[var(--accent)] tracking-widest block font-medium">
              15-Year Craftsmanship &amp; Stain Warranty Certified
            </span>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-2 text-xs">
            <span className="text-xs uppercase tracking-widest text-[var(--text)] block mb-3 font-medium">
              Explore
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link to="/materials" className="hover:text-[var(--text)] transition-colors">
                  Stone Reserve
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[var(--text)] transition-colors">
                  Fabrication Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[var(--text)] transition-colors">
                  125-Piece Portfolio
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[var(--text)] transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[var(--text)] transition-colors">
                  Harvey Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Address & Schedule */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="text-xs uppercase tracking-widest text-[var(--text)] block mb-3 font-medium">
              Studio &amp; Slab Yard
            </span>
            <p className="text-[var(--text)] font-medium">1848 Industrial Blvd</p>
            <p>Harvey, LA 70058, United States</p>
            <p className="pt-2">Hours: Mon – Sat: 8:00 AM – 5:00 PM</p>
            <p className="text-[var(--accent)] font-medium">Sunday: Closed</p>
          </div>

          {/* Direct Estimating Lines */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="text-xs uppercase tracking-widest text-[var(--text)] block mb-3 font-medium">
              Direct Desk
            </span>
            <p>
              <a
                href="tel:+15047237898"
                className="text-[var(--text)] font-medium hover:text-[var(--accent)] transition-colors text-base"
              >
                (504) 723-7898
              </a>
            </p>
            <p>estimating@kingsmarbleandgranite.com</p>
            <div className="pt-3">
              <Link to="/contact" className="btn-primary-luxury text-xs !py-2.5 !px-5">
                Request Estimate →
              </Link>
            </div>
          </div>
        </div>

        {/* EFFECT 4: Giant Architectural Wordmark that reveals on scroll across footer */}
        <div className="pt-12 pb-6 overflow-hidden select-none text-center">
          <span
            className="font-display font-light text-[clamp(2.5rem,8.5vw,7.5rem)] tracking-[0.08em] block leading-none text-transparent uppercase opacity-85 transition-opacity"
            style={{
              backgroundImage: 'url("/King’s Social Media/IMG_7694.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            KINGS MARBLE &amp; GRANITE
          </span>
        </div>

        <div className="pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
          <p>© {CURRENT_YEAR} Kings Marble &amp; Granite. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest text-xs">
            <span>Sub-Millimeter 3D Laser Precision</span>
            <span>5-Axis CNC Waterjet</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
