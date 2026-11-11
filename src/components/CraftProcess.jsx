import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';

const PROCESS_STEPS = [
  {
    num: '01',
    step: 'Phase One',
    title: 'Private Consultation & Quarry Sourcing',
    subtitle: 'Direct Material Discovery',
    desc: 'You walk our Harvey indoor slab reserve or collaborate with our curators to tag exact whole blocks quarried in Carrara and Brazil. Every lot is cataloged by mineral composition, crystallization, and natural veining pattern.',
    spec: 'Direct Quarry Imports · No Distributor Markups',
    bg: '#0F0F10',
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
    bg: '#141211',
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
    bg: '#0B0B0C',
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
    bg: '#171413',
    accent: '#FAB502',
    image: "/King’s Social Media/IMG_7690.webp",
  },
];

export default function CraftProcess() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [zoomScale, setZoomScale] = useState(1);

  useEffect(() => {
    let ticking = false;

    const calculateScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const normalized = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setProgress(normalized);

      const stepFloat = normalized * PROCESS_STEPS.length;
      const stepIndex = Math.min(PROCESS_STEPS.length - 1, Math.floor(stepFloat));
      setActiveStep(stepIndex);

      // Effect 9: Zoom-through calculation (smoothly expands scale from 1.0 to 1.18 within each phase)
      const subFraction = stepFloat - Math.floor(stepFloat);
      const calculatedScale = 1.0 + subFraction * 0.16;
      setZoomScale(calculatedScale);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateScroll, { passive: true });
    calculateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateScroll);
    };
  }, []);

  const jumpToStep = (index) => {
    setActiveStep(index);
    if (containerRef.current) {
      const containerTop = window.scrollY + containerRef.current.getBoundingClientRect().top;
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = containerTop + (index / PROCESS_STEPS.length) * totalScrollable + 30;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const current = PROCESS_STEPS[activeStep];

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative min-h-[250vh] sm:min-h-[280vh] transition-colors duration-1000 ease-luxury text-[#F4F2EE]"
      style={{ backgroundColor: current.bg }}
    >
      {/* Pinned Viewport Stage: Pinned cleanly to viewport without dead empty gaps */}
      <div className="sticky top-0 h-screen max-h-[1080px] flex flex-col justify-between py-14 sm:py-20 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div
          className="absolute -top-40 right-10 w-[550px] h-[550px] rounded-full blur-[140px] opacity-25 pointer-events-none transition-colors duration-1000"
          style={{ backgroundColor: current.accent }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          {/* Section Header with Clickable Stage Selector */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-5 mb-8 sm:mb-10 gap-4">
            <div className="text-left">
              <span
                className="text-xs uppercase tracking-[0.26em] block transition-colors duration-700 font-medium"
                style={{ color: current.accent }}
              >
                02 / Precision Execution
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-white font-light">
                The Monolith Journey
              </h2>
            </div>

            {/* Clickable Stage Selector Tabs */}
            <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
              <div className="flex items-center gap-1.5 bg-black/50 p-1 border border-white/10">
                {PROCESS_STEPS.map((step, idx) => (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => jumpToStep(idx)}
                    className={`text-xs uppercase tracking-wider px-3 py-1.5 transition-all duration-300 font-medium ${
                      activeStep === idx
                        ? 'bg-white text-black font-semibold shadow-sm'
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {step.num}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs text-white/70">
                <span className="hidden md:inline-block">Scroll or tap to advance</span>
                <span className="font-mono text-sm text-white font-bold bg-white/10 px-2 py-0.5 border border-white/10">
                  {current.num} / 04
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Split Stage with Zoom-Through Surface Effect */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Step Spec & Narrative */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 border border-white/15 px-3.5 py-1.5 text-xs uppercase tracking-widest text-white/90 bg-black/40">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: current.accent }}
                />
                <span>{current.step} · {current.subtitle}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-light leading-[1.08] text-white">
                {current.title}
              </h3>

              <p className="text-[15px] sm:text-[16px] text-[#DDD8CF] font-light leading-relaxed">
                {current.desc}
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span
                  className="font-medium tracking-wider uppercase text-xs"
                  style={{ color: current.accent }}
                >
                  ✦ {current.spec}
                </span>
              </div>

              {/* Dynamic Progress Line */}
              <div className="w-full bg-white/10 h-[2px] mt-4 overflow-hidden">
                <div
                  className="h-full transition-all duration-300 ease-out"
                  style={{
                    width: `${Math.max(10, progress * 100)}%`,
                    backgroundColor: current.accent,
                  }}
                />
              </div>
            </div>

            {/* Zoom-Through Image Monolith */}
            <div className="lg:col-span-7">
              <div className="relative h-[320px] sm:h-[480px] overflow-hidden border border-white/15 shadow-2xl bg-black group">
                <div
                  className="w-full h-full will-change-transform transition-transform duration-500 ease-out"
                  style={{
                    transform: `scale(${zoomScale})`,
                  }}
                >
                  <img
                    key={current.image}
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover animate-fadeIn transition-opacity duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-white/80 z-10 pointer-events-none">
                  <span className="text-xs uppercase tracking-widest bg-black/70 px-2.5 py-1 border border-white/10">
                    {current.step} Execution
                  </span>
                  <span className="italic font-light text-xs">Harvey, LA Atelier</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pinned Footer Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-white/60 border-t border-white/10">
          <span>Kings Marble &amp; Granite · 1848 Industrial Blvd, Harvey LA</span>
          <Link
            to="/services"
            className="text-[var(--accent)] hover:text-white uppercase tracking-wider text-xs transition-colors"
          >
            Explore all 6 fabrication capabilities &amp; CNC edge profiles →
          </Link>
        </div>
      </div>
    </section>
  );
}
