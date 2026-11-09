import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BeforeAfterSlider from './BeforeAfterSlider';

gsap.registerPlugin(ScrollTrigger);

// Curated 8 asymmetric case studies from authentic photography
const ASYMMETRIC_CASES = [
  {
    id: 'case-1',
    title: 'The Sovereign Waterfall Residence',
    location: 'Metairie Country Club Grounds',
    stone: 'Calacatta Michelangelo Marble',
    layout: 'col-span-12 lg:col-span-8',
    height: 'h-[440px] sm:h-[580px]',
    image: "/King’s Social Media/IMG_7690.webp",
    desc: '14-foot bookmatched central island featuring 6cm mitered waterfall drops on both flanks and a ceiling-height monolithic slab backsplash.',
    parallaxFactor: 18,
  },
  {
    id: 'case-2',
    title: 'Obsidian Penthouse Wet Bar',
    location: 'Downtown Warehouse District',
    stone: 'Nero Marquina Marble',
    layout: 'col-span-12 lg:col-span-4 lg:translate-y-12',
    height: 'h-[400px] sm:h-[520px]',
    image: "/King’s Social Media/IMG_7701.webp",
    desc: 'Cantilevered bar top with concealed under-counter brass channel detailing and hand-chamfered edges.',
    parallaxFactor: -16,
  },
  {
    id: 'case-3',
    title: 'Villa Seraphina Primary Spa',
    location: 'Garden District, New Orleans',
    stone: 'Statuario Imperial',
    layout: 'col-span-12 lg:col-span-5',
    height: 'h-[380px] sm:h-[480px]',
    image: "/King’s Social Media/IMG_7692.webp",
    desc: 'Floating double vanity with integrated sloped trough sinks and bookmatched steam shower slab cladding.',
    parallaxFactor: 20,
  },
  {
    id: 'case-4',
    title: 'Monolithic Great Room Hearth',
    location: 'English Turn Golf Community',
    stone: 'Titanium Cosmic Granite',
    layout: 'col-span-12 lg:col-span-7 lg:-translate-y-8',
    height: 'h-[420px] sm:h-[540px]',
    image: "/King’s Social Media/IMG_7715.webp",
    desc: '18-foot floor-to-ceiling fireplace surround engineered with hidden mechanical anchors and thermal expansion joints.',
    parallaxFactor: -18,
  },
  {
    id: 'case-5',
    title: 'Patagonia Backlit Island',
    location: 'Private Lakefront Estate',
    stone: 'Patagonia Crystallo Quartzite',
    layout: 'col-span-12 lg:col-span-7',
    height: 'h-[440px] sm:h-[560px]',
    image: "/King’s Social Media/IMG_7718.webp",
    desc: 'Translucent volcanic crystal island illuminated with 2700K warm-dimming rear LED panels.',
    parallaxFactor: 16,
  },
  {
    id: 'case-6',
    title: 'Al Fresco Culinary Pavilion',
    location: 'Beau Chene, Mandeville',
    stone: 'Taj Mahal Leathered Quartzite',
    layout: 'col-span-12 lg:col-span-5 lg:translate-y-6',
    height: 'h-[380px] sm:h-[480px]',
    image: "/King’s Social Media/10778015280_IMG_0146.webp",
    desc: 'UV-stable quartzite barbecue suite cut for precision drop-in sear stations and under-mount marine sink.',
    parallaxFactor: -14,
  },
  {
    id: 'case-7',
    title: 'Statuario Perimeter Chef Suite',
    location: 'Highland Oaks Reserve',
    stone: 'Statuario Marble',
    layout: 'col-span-12 lg:col-span-6',
    height: 'h-[400px] sm:h-[520px]',
    image: "/King’s Social Media/IMG_7698.webp",
    desc: 'Full-height perimeter slab backsplashes with waterjet-cut electrical receptacle cutouts aligned to 1/32".',
    parallaxFactor: 18,
  },
  {
    id: 'case-8',
    title: 'Monolithic Calacatta Dining Credenza',
    location: 'Audubon Park Avenue',
    stone: 'Calacatta Michelangelo',
    layout: 'col-span-12 lg:col-span-6 lg:-translate-y-6',
    height: 'h-[400px] sm:h-[520px]',
    image: "/King’s Social Media/IMG_7694.webp",
    desc: 'Custom mitering on all four faces creating the visual mass of a solid four-ton marble monolith.',
    parallaxFactor: -16,
  },
];

// Single Case Study Card with Silky GSAP ScrollTrigger Entrance & Scrub Parallax
function CaseStudyCard({ project, onSelect, onHoverStart, onHoverEnd }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // 1. Entrance reveal as card enters the viewport
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 88%',
            once: true,
          },
        }
      );

      // 2. Silky GSAP scrub parallax on the image (strictly bounded inside container)
      if (!prefersReducedMotion && window.innerWidth >= 768 && imgRef.current) {
        const factor = project.parallaxFactor || 16;
        gsap.fromTo(
          imgRef.current,
          { yPercent: -factor * 0.35 },
          {
            yPercent: factor * 0.35,
            ease: 'none',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }
    }, cardRef);

    return () => ctx.revert();
  }, [project.parallaxFactor]);

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(project)}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={`group cursor-pointer text-left ${project.layout}`}
    >
      {/* Image Monolith with Controlled GSAP Parallax Depth */}
      <div
        className={`relative overflow-hidden border border-[var(--line)] bg-[#0B0B0C] ${project.height} shadow-lg`}
      >
        <img
          ref={imgRef}
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-[116%] -top-[8%] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />

        {/* Badges on Image (Minimum 12px) */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="text-xs uppercase tracking-widest bg-black/75 backdrop-blur-md px-3 py-1.5 text-white border border-white/10 font-medium">
            {project.stone}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-end text-white pointer-events-none">
          <div>
            <span className="text-xs uppercase tracking-wider text-[var(--accent)] block font-medium">
              {project.location}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white font-light">
              {project.title}
            </h3>
          </div>
          <span className="text-xs uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 border border-white/20 hidden sm:inline-block font-medium">
            Inspect ↗
          </span>
        </div>
      </div>

      <div className="pt-3.5 flex justify-between items-start text-xs text-[var(--text-muted)]">
        <p className="max-w-md font-light leading-relaxed">
          {project.desc}
        </p>
      </div>
    </div>
  );
}

export default function AsymmetricProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorHovering, setCursorHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="projects" className="py-24 sm:py-36 bg-[var(--bg)] transition-colors duration-1000 ease-luxury relative overflow-hidden">
      {/* Floating "View" Cursor Pill for Project Images */}
      {cursorHovering && (
        <div
          className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 text-xs uppercase tracking-widest font-semibold shadow-2xl transition-opacity duration-200 hidden md:flex items-center gap-1.5"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        >
          <span>View Specimen</span>
          <span>↗</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6 text-left">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium block">
              03 / Selected Case Studies
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-[var(--text)] font-light leading-tight">
              Monoliths in residence.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md font-light leading-relaxed">
            Eight commissions from private residences across Greater New Orleans. Asymmetric layouts,
            varying depths, and zero template repetition.
          </p>
        </div>

        {/* Asymmetric Case Studies Grid with Controlled Bounded Parallax per Image */}
        <div className="grid grid-cols-12 gap-y-16 sm:gap-y-24 gap-x-8 sm:gap-x-12 items-start">
          {ASYMMETRIC_CASES.map((project) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
              onHoverStart={() => setCursorHovering(true)}
              onHoverEnd={() => setCursorHovering(false)}
            />
          ))}
        </div>

        {/* Interactive Metamorphosis Before/After Slider (Effect 11) */}
        <BeforeAfterSlider />

        {/* Quiet Link to Full 125+ Image Archive */}
        <div className="mt-20 p-8 sm:p-12 border border-[var(--line)] bg-[var(--bg)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium block">
              Complete Visual Catalog
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-[var(--text)] font-light">
              Browse the complete 125+ jobsite photography archive.
            </h3>
            <p className="text-xs text-[var(--text-muted)] max-w-xl font-light">
              Filter unedited client installations by stone classification, kitchen perimeter, floating vanities, and raw quarry blocks.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="btn-primary-luxury shrink-0 text-xs"
          >
            Explore Full 125+ Archive →
          </Link>
        </div>
      </div>

      {/* Case Study Lightbox Inspection with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 text-[#EDEDED]"
            style={{ backgroundColor: 'rgba(11, 11, 12, 0.98)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="flex items-center justify-between text-white z-20 max-w-7xl mx-auto w-full text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] block font-medium">
                  {selectedProject.location}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-light">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-11 h-11 border border-white/20 text-white flex items-center justify-center hover:border-white transition-colors"
                aria-label="Close inspection dialog"
              >
                ✕
              </button>
            </motion.div>

            <div className="flex-1 overflow-auto flex items-center justify-center my-4 max-w-7xl mx-auto w-full" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={selectedProject.image}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-h-[75vh] max-w-[90vw] object-contain shadow-2xl border border-white/10"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="text-xs text-white/70 border-t border-white/10 pt-4 flex flex-wrap justify-between items-center gap-4 z-20 max-w-7xl mx-auto w-full text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Stone: <strong className="text-white">{selectedProject.stone}</strong> — {selectedProject.desc}</span>
              <a href="tel:+15047237898" className="text-[var(--accent)] uppercase tracking-wider font-medium text-xs">
                Call (504) 723-7898 to discuss similar execution →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
