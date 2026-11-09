import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { MEDIA_ASSETS } from '../data/content';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/materials', label: 'Materials' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#171717] text-[#F5F1E8] border-b border-[#33312D] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3 text-[11px] tracking-wider uppercase font-medium">
            <span className="text-[#C9A44C]">◆</span>
            <span>Master Stone Fabricators &amp; Countertop Contractors</span>
            <span className="hidden md:inline text-[#777168]">|</span>
            <span className="hidden md:inline text-[#DED5C5]">Harvey, LA</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] tracking-wider">
            <span className="hidden sm:inline text-[#DED5C5]">Mon – Sat: 8:00 AM – 5:00 PM (Sun Closed)</span>
            <a href="tel:+15047237898" className="text-[#C9A44C] font-semibold hover:underline tracking-widest">
              +1 (504) 723-7898
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#DED5C5] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          {/* Logo only */}
          <Link to="/" className="flex items-center group">
            <img
              src={MEDIA_ASSETS.logo}
              alt="King's Marble & Granite"
              className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.18em] font-semibold transition-colors duration-200 py-1 border-b-2 ${
                    isActive
                      ? 'border-[#C9A44C] text-[#C9A44C]'
                      : 'border-transparent text-[#171717] hover:text-[#C9A44C]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Link to="/contact" className="btn-primary-luxury text-xs !py-2.5 !px-5">
              Free Estimate
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#171717] hover:text-[#C9A44C] focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F5F1E8] border-b border-[#DED5C5] px-6 py-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-widest font-semibold py-2 transition-colors ${
                      isActive ? 'text-[#C9A44C]' : 'text-[#171717] hover:text-[#C9A44C]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-[#DED5C5]">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary-luxury w-full text-center text-xs"
                >
                  Schedule Free Estimate
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
