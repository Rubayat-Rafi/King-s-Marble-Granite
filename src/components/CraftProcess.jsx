import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router';
import ImageWithSkeleton from './ImageWithSkeleton';

const PROCESS_STEPS = [
  {
    num: '01',
    step: 'Phase One',
    title: 'Private Consultation & Quarry Sourcing',
    subtitle: 'Direct Material Discovery',
    desc: 'You walk our Harvey indoor slab reserve or collaborate with our curators to tag exact whole blocks quarried in Carrara and Brazil. Every lot is cataloged by mineral composition, crystallization, and natural veining pattern.',
    spec: 'Direct Quarry Imports · No Distributor Markups',
    bg: '#0F0F11',
    accent: '#FAB502',
    image: "/King’s Social Media/15d5ac9c-3e7e-4067-ac7d-9f5379ac1173.webp",
  },
  {
    num: '02',
    step: 'Phase Two',
    title: 'Sub-Millimeter Prodim 3D Laser Templating',
    subtitle: 'Digital Blueprints with 0.4mm Tolerance',
    desc: 'Our engineers deploy optical 3D Prodim digital laser digitizers across your cabinetry and walls. We record electrical cutouts, uneven wall bowings, and radius corners with sub-millimeter precision before any stone is cut.',
    spec: '0.4 mm Accuracy · Eliminates Human Measuring Errors',
    bg: '#131110',
    accent: '#FAB502',
    image: "/King’s Social Media/18002a95-8d46-4866-bf82-42a028c2fc7a.webp",
  },
  {
    num: '03',
    step: 'Phase Three',
    title: '5-Axis CNC Waterjet & Mitered Vein Flow',
    subtitle: 'Robotic Diamond Milling',
    desc: 'Before cutting, clients review a digital vein-flow layout showing exactly where striations travel across islands, backsplashes, and mitered waterfall drops. Diamond waterjets mill 45° joints with hairline seams.',
    spec: '5-Axis Intermac CNC · 60,000 PSI Waterjet Precision',
    bg: '#0C0C0E',
    accent: '#FAB502',
    image: "/King’s Social Media/IMG_7693.webp",
  },
  {
    num: '04',
    step: 'Phase Four',
    title: 'White-Glove Installation & 15-Yr Fluoropolymer Seal',
    subtitle: 'Permanent Architectural Perfection',
    desc: 'Our certified master craftsmen anchor, level, and chemically fuse joints with UV-stable custom-pigmented epoxy. Every commission concludes with deep fluoropolymer penetrating sealer protection.',
    spec: '15-Year Craftsmanship & Stain Warranty',
    bg: '#141212',
    accent: '#FAB502',
    image: "/King’s Social Media/IMG_7690.webp",
  },
];

export default function CraftProcess() {
  const sectionRef = useRef(null);
  const touchStartY = useRef(null);
  const cooldownRef = useRef(false);
  const [activeStep, setActiveStep] = useState(0);

  // Wheel listener:
  // ONLY intercepts when the section is in the PROPER, FULL view (aligned near top navbar).
  // If the user hasn't scrolled all the way to Section 02 yet, it allows natural page scroll.
  useEffect(() => {
    const handleWheel = (e) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const navbarOffset = 75; // Top fixed header height

      // If Section 02 is approaching from below (rect.top between 80px and 220px) and scrolling down:
      // Smoothly snap section into full view so the whole card is visible
      if (e.deltaY > 20 && rect.top > navbarOffset && rect.top < 240) {
        if (window.lenis) {
          window.lenis.scrollTo(section, { offset: -navbarOffset, duration: 0.5 });
        } else {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
      }

      // Check if Section 02 is properly aligned on screen (within 25px of navbar)
      const isProperlyInView = rect.top <= (navbarOffset + 20) && rect.top >= (navbarOffset - 60);

      // If not properly aligned, do not hijack! Let the page scroll naturally
      if (!isProperlyInView) return;

      // Scrolling Down
      if (e.deltaY > 15) {
        if (activeStep < PROCESS_STEPS.length - 1) {
          e.preventDefault();
          if (!cooldownRef.current) {
            cooldownRef.current = true;
            setActiveStep((prev) => Math.min(prev + 1, PROCESS_STEPS.length - 1));
            setTimeout(() => {
              cooldownRef.current = false;
            }, 460);
          }
        }
        // When on the last card (Phase 4), do NOT prevent default -> page scrolls down to Section 03!
      } else if (e.deltaY < -15) {
        // Scrolling Up
        if (activeStep > 0) {
          e.preventDefault();
          if (!cooldownRef.current) {
            cooldownRef.current = true;
            setActiveStep((prev) => Math.max(prev - 1, 0));
            setTimeout(() => {
              cooldownRef.current = false;
            }, 460);
          }
        }
        // When on the first card (Phase 1), do NOT prevent default -> page scrolls up to Section 01!
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeStep]);

  // Touch swipe support for mobile/tablet
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartY.current === null) return;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    if (deltaY > 35 && activeStep < PROCESS_STEPS.length - 1) {
      setActiveStep((prev) => Math.min(prev + 1, PROCESS_STEPS.length - 1));
    } else if (deltaY < -35 && activeStep > 0) {
      setActiveStep((prev) => Math.max(prev - 1, 0));
    }
    touchStartY.current = null;
  };

  const currentStep = PROCESS_STEPS[activeStep];

  return (
    <section
      id="process"
      ref={sectionRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative bg-[#08080A] text-[#F4F2EE] text-left pt-20 sm:pt-24 pb-14 sm:pb-18 min-h-[calc(100vh-4.5rem)] flex flex-col justify-between overflow-hidden border-0 rounded-none"
    >
      {/* Ambient Lighting Glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentStep.accent }}
      />

      {/* ── TOP SECTION HEADER (Zero Borders, Zero Rounded Corners) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 sm:pb-4 border-0">
          <div>
            <span
              className="text-[11px] sm:text-xs uppercase tracking-[0.24em] block font-medium mb-1 transition-colors duration-500"
              style={{ color: currentStep.accent }}
            >
              02 / Precision Execution
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-light">
              The Monolith Journey
            </h2>
          </div>

          {/* Minimal Live Counter & Subtle Navigation */}
          <div className="flex items-center gap-3">
            {/* 4 Stage Dots */}
            <div className="flex items-center gap-1.5">
              {PROCESS_STEPS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`h-1.5 rounded-none transition-all duration-300 cursor-pointer border-0 ${
                    activeStep === idx
                      ? 'w-6 bg-[var(--accent)]'
                      : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to Phase 0${idx + 1}`}
                />
              ))}
            </div>

            {/* Pill: Prev / Counter / Next (Zero border, zero rounded corner) */}
            <div className="flex items-center gap-2 bg-black/60 px-3 py-1 rounded-none border-0 text-xs font-mono text-white/80">
              <button
                type="button"
                onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
                disabled={activeStep === 0}
                className="hover:text-[var(--accent)] disabled:opacity-30 disabled:hover:text-white/80 cursor-pointer transition-colors"
                aria-label="Previous Phase"
              >
                ←
              </button>
              <span className="px-1 text-white font-semibold">Phase 0{activeStep + 1} / 04</span>
              <button
                type="button"
                onClick={() => setActiveStep((prev) => Math.min(prev + 1, PROCESS_STEPS.length - 1))}
                disabled={activeStep === PROCESS_STEPS.length - 1}
                className="hover:text-[var(--accent)] disabled:opacity-30 disabled:hover:text-white/80 cursor-pointer transition-colors"
                aria-label="Next Phase"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── CENTER STAGE: ZERO BORDER, ZERO CORNER RADIUS (Sharp Monolithic Stone Slab) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-6xl mx-auto min-h-[420px] sm:min-h-[440px] lg:h-[470px]">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            const isPast = activeStep > idx;

            return (
              <div
                key={step.num}
                className={`absolute inset-0 w-full h-full rounded-none border-0 transition-all duration-500 ease-out ${
                  isActive
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-10 visible'
                    : isPast
                    ? 'opacity-0 -translate-y-8 scale-[0.98] pointer-events-none z-0 invisible'
                    : 'opacity-0 translate-y-8 scale-[0.98] pointer-events-none z-0 invisible'
                }`}
                style={{ backgroundColor: step.bg }}
              >
                <div className="relative w-full h-full p-5 sm:p-7 lg:p-9 flex flex-col justify-between overflow-hidden rounded-none border-0">
                  {/* Giant Watermark Numeral */}
                  <div
                    aria-hidden="true"
                    className="absolute right-6 sm:right-10 top-2 sm:top-4 pointer-events-none select-none font-display font-light text-[clamp(5rem,12vw,10rem)] text-white/[0.04] leading-none z-0"
                  >
                    {step.num}
                  </div>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center h-full my-auto">
                    {/* Left Column: Narrative Content */}
                    <div className="lg:col-span-5 space-y-3 sm:space-y-3.5 text-left">
                      {/* Step Phase Badge (Sharp rectangular, zero rounded corner) */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 text-[11px] sm:text-xs uppercase tracking-widest text-white/90 bg-black/60 backdrop-blur-md rounded-none border-0">
                        <span
                          className="w-2 h-2 rounded-none transition-colors duration-500"
                          style={{
                            backgroundColor: step.accent,
                            boxShadow: `0 0 10px ${step.accent}`,
                          }}
                        />
                        <span className="font-mono text-white/70">{step.num}</span>
                        <span className="text-white/30">/</span>
                        <span>{step.step}</span>
                        <span className="text-white/30 hidden sm:inline">·</span>
                        <span className="text-white/70 hidden sm:inline">{step.subtitle}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-light leading-[1.15] text-white">
                        {step.title}
                      </h3>

                      {/* Story Description */}
                      <p className="text-xs sm:text-sm lg:text-[13.5px] text-[#DDD8CF]/90 font-light leading-relaxed line-clamp-3 sm:line-clamp-4">
                        {step.desc}
                      </p>

                      {/* Technical Spec Pill (Sharp rectangular, zero rounded corner) */}
                      <div className="pt-0.5 flex items-center gap-3">
                        <div className="px-3 py-1.5 bg-white/[0.04] rounded-none border-0">
                          <span
                            className="font-medium tracking-wider uppercase text-[11px] sm:text-xs flex items-center gap-1.5"
                            style={{ color: step.accent }}
                          >
                            ✦ {step.spec}
                          </span>
                        </div>
                      </div>

                      {/* Step Mini Indicator */}
                      <div className="pt-1 flex items-center gap-3 text-[11px] text-white/50 font-mono uppercase tracking-wider">
                        <span>Phase {step.num} of 04</span>
                        <span className="h-[1px] flex-1 bg-white/10" />
                        <span className="text-white/80">Harvey, LA Atelier</span>
                      </div>
                    </div>

                    {/* Right Column: Monolith Image Frame (Sharp rectangular, zero border, zero radius) */}
                    <div className="lg:col-span-7 h-full flex items-center">
                      <div className="relative w-full h-[200px] sm:h-[260px] lg:h-[330px] overflow-hidden bg-black group rounded-none border-0">
                        <ImageWithSkeleton
                          src={step.image}
                          alt={`${step.step} - ${step.title}`}
                          className="w-full h-full rounded-none border-0"
                          imgClassName="w-full h-full object-cover rounded-none border-0 transition-transform duration-700 group-hover:scale-105"
                          loadingText={`${step.step} Monolith Visual · 0.4mm Laser`}
                        />

                        {/* Ambient Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none rounded-none border-0" />

                        {/* Corner Badges (Sharp rectangular, zero radius) */}
                        <div className="absolute top-3 left-3 z-10 pointer-events-none">
                          <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest bg-black/75 backdrop-blur-md px-2.5 py-1 text-white/80 rounded-none border-0">
                            {step.subtitle}
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[11px] sm:text-xs text-white/80 z-10 pointer-events-none">
                          <span className="uppercase tracking-widest bg-black/75 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-none border-0">
                            {step.step} Execution
                          </span>
                          <span className="italic font-light text-white/80 bg-black/60 px-2 py-0.5 backdrop-blur-sm rounded-none border-0">
                            Continuous Vein Flow
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── BOTTOM STAGE BAR WITH LINK TO SERVICES (Zero Borders) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pt-4 sm:pt-6 border-0">
        <div className="pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[11px] sm:text-xs text-white/60 border-0">
          <span>Kings Marble &amp; Granite · 1848 Industrial Blvd, Harvey LA</span>
          <Link
            to="/services"
            className="text-[var(--accent)] hover:text-white uppercase tracking-wider transition-colors flex items-center gap-1.5 font-medium"
          >
            Explore all 6 fabrication capabilities &amp; CNC edge profiles →
          </Link>
        </div>
      </div>
    </section>
  );
}
