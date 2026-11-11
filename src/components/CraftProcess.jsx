import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageWithSkeleton from './ImageWithSkeleton';

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      PROCESS_STEPS.forEach((_, idx) => {
        const card = cardRefs.current[idx];
        if (!card) return;

        // 1. In-View Observer to track active tab header
        ScrollTrigger.create({
          trigger: card,
          start: 'top 40%',
          end: 'bottom 40%',
          onEnter: () => setActiveStep(idx),
          onEnterBack: () => setActiveStep(idx),
        });

        // 2. Stacking Cards Parallax: As the next card slides ABOVE this card,
        // subtly scale down this card and dim it to create tactile deck depth
        if (!prefersReducedMotion && idx < PROCESS_STEPS.length - 1) {
          const nextCard = cardRefs.current[idx + 1];
          if (nextCard) {
            gsap.to(card, {
              scale: 0.94,
              opacity: 0.5,
              transformOrigin: 'top center',
              ease: 'none',
              scrollTrigger: {
                trigger: nextCard,
                start: 'top 90%',
                end: 'top 20%',
                scrub: true,
              },
            });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const jumpToStep = (index) => {
    setActiveStep(index);
    const targetEl = cardRefs.current[index];
    if (targetEl) {
      const topOffset = targetEl.getBoundingClientRect().top + window.scrollY - 95;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const currentStep = PROCESS_STEPS[activeStep];

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-[#08080A] text-[#F4F2EE] transition-colors duration-1000 ease-luxury text-left"
    >
      {/* Ambient Lighting Glow */}
      <div
        className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: currentStep.accent }}
      />

      {/* Section Header */}
      <div className="relative border-b border-white/10 py-14 sm:py-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div>
              <span
                className="text-xs uppercase tracking-[0.26em] block transition-colors duration-700 font-medium mb-2"
                style={{ color: currentStep.accent }}
              >
                02 / Precision Execution
              </span>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white font-light">
                The Monolith Journey
              </h2>
            </div>

            {/* Clickable Stage Selector Tabs */}
            <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
              <div className="flex items-center gap-1.5 bg-black/60 p-1.5 border border-white/10 backdrop-blur-md">
                {PROCESS_STEPS.map((step, idx) => (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => jumpToStep(idx)}
                    className={`text-xs uppercase tracking-wider px-3.5 py-1.5 transition-all duration-300 font-medium cursor-pointer ${
                      activeStep === idx
                        ? 'bg-[var(--accent)] text-black font-semibold shadow-md'
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Phase {step.num}
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-white/70 font-mono">
                <span>Phase</span>
                <span className="font-bold text-white bg-white/10 px-2 py-0.5 border border-white/15">
                  0{activeStep + 1} / 04
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Stacking Cards (Section 2 slides ABOVE Section 1, 3 ABOVE 2, 4 ABOVE 3) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={step.num}
            ref={(el) => (cardRefs.current[idx] = el)}
            id={`process-phase-${idx + 1}`}
            className="sticky top-[85px] sm:top-[95px] min-h-[76vh] sm:min-h-[80vh] rounded-t-2xl sm:rounded-t-3xl border-t border-white/20 shadow-[0_-25px_65px_rgba(0,0,0,0.95)] overflow-hidden transition-all duration-300 mb-12 sm:mb-16 last:mb-0"
            style={{
              zIndex: idx + 1,
              backgroundColor: step.bg,
            }}
          >
            <div className="relative w-full h-full p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
              {/* Giant Watermark Numeral */}
              <div
                aria-hidden="true"
                className="absolute right-6 sm:right-12 top-4 sm:top-6 pointer-events-none select-none font-display font-light text-[clamp(7rem,16vw,14rem)] text-white/5 leading-none z-0"
              >
                {step.num}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Left Column: Narrative Content */}
                <div className="lg:col-span-5 space-y-5 text-left">
                  {/* Step Phase Badge */}
                  <div className="inline-flex items-center gap-2.5 border border-white/15 px-3.5 py-1.5 text-xs uppercase tracking-widest text-white/90 bg-black/60 backdrop-blur-md">
                    <span
                      className="w-2 h-2 rounded-full transition-colors duration-500"
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
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.08] text-white">
                    {step.title}
                  </h3>

                  {/* Story Description */}
                  <p className="text-sm sm:text-base md:text-lg text-[#DDD8CF]/90 font-light leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Technical Spec Pill */}
                  <div className="pt-2 flex items-center gap-3">
                    <div className="px-3.5 py-2 bg-white/[0.04] border border-white/10 rounded-sm">
                      <span
                        className="font-medium tracking-wider uppercase text-xs flex items-center gap-1.5"
                        style={{ color: step.accent }}
                      >
                        ✦ {step.spec}
                      </span>
                    </div>
                  </div>

                  {/* Step Mini Indicator */}
                  <div className="pt-4 flex items-center gap-4 text-xs text-white/50 font-mono uppercase tracking-wider">
                    <span>Phase {step.num} of 04</span>
                    <span className="h-[1px] flex-1 bg-white/10" />
                    <span className="text-white/80">Harvey, LA Atelier</span>
                  </div>
                </div>

                {/* Right Column: Monolith Image Frame */}
                <div className="lg:col-span-7">
                  <div className="relative h-[290px] sm:h-[400px] lg:h-[460px] overflow-hidden border border-white/15 shadow-2xl bg-black group rounded-sm">
                    <ImageWithSkeleton
                      src={step.image}
                      alt={`${step.step} - ${step.title}`}
                      className="w-full h-full"
                      imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loadingText={`${step.step} Monolith Visual · 0.4mm Laser`}
                    />

                    {/* Ambient Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    {/* Corner Badges */}
                    <div className="absolute top-4 left-4 z-10 pointer-events-none">
                      <span className="text-[10px] uppercase font-mono tracking-widest bg-black/75 backdrop-blur-md px-2.5 py-1 border border-white/10 text-white/80">
                        {step.subtitle}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-white/80 z-10 pointer-events-none">
                      <span className="text-xs uppercase tracking-widest bg-black/75 backdrop-blur-md px-3 py-1 border border-white/10">
                        {step.step} Execution
                      </span>
                      <span className="italic font-light text-xs text-white/80 bg-black/60 px-2 py-0.5 backdrop-blur-sm">
                        Continuous Vein Flow
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Process Capabilities Link */}
      <div className="border-t border-white/10 py-10 bg-black/40 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/60">
          <span>Kings Marble &amp; Granite · 1848 Industrial Blvd, Harvey LA</span>
          <Link
            to="/services"
            className="text-[var(--accent)] hover:text-white uppercase tracking-wider text-xs transition-colors flex items-center gap-1.5 font-medium"
          >
            Explore all 6 fabrication capabilities &amp; CNC edge profiles →
          </Link>
        </div>
      </div>
    </section>
  );
}
