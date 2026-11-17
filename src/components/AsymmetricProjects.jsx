import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import ImageWithSkeleton from './ImageWithSkeleton';

// Curated 8 asymmetric case studies accurately matching verified authentic photography
const ASYMMETRIC_CASES = [
  {
    id: 'case-1',
    title: 'The Highland Open-Concept Estate',
    location: 'Metairie Club Estates',
    stone: 'Mont Blanc Quartzite',
    layout: 'col-span-12 lg:col-span-8',
    height: 'h-[440px] sm:h-[580px]',
    image: "/King’s Social Media/kitchen-open-concept-fireplace-view-01.webp",
    desc: 'Open-concept culinary island flowing directly into a soaring bookmatched Mont Blanc Quartzite linear fireplace wall.',
    parallaxFactor: 18,
  },
  {
    id: 'case-2',
    title: 'Panda Black & White Scullery Bar',
    location: 'Downtown Warehouse District',
    stone: 'Copacabana Exotic Granite',
    layout: 'col-span-12 lg:col-span-4 lg:translate-y-12',
    height: 'h-[400px] sm:h-[520px]',
    image: "/King’s Social Media/commercial-panda-marble-scullery-bar-01.webp",
    desc: 'Butler’s scullery wet bar featuring dramatic black-and-white stone veining with matching 6-inch mitered backsplash and matte black fixtures.',
    parallaxFactor: -16,
  },
  {
    id: 'case-3',
    title: 'Minimalist Dual-Sink Vanity Suite',
    location: 'Garden District, New Orleans',
    stone: 'Thassos Pure White Marble',
    layout: 'col-span-12 lg:col-span-5',
    height: 'h-[380px] sm:h-[480px]',
    image: "/King’s Social Media/bathroom-dual-sink-hex-floor-vanity-01.webp",
    desc: 'Expansive double vanity topped with crisp pure white stone, matte black widespread faucets, and hexagonal marble floor tile.',
    parallaxFactor: 20,
  },
  {
    id: 'case-4',
    title: 'The Grand Oyster Saloon Bar',
    location: 'Historic French Quarter District',
    stone: 'Calacatta Vintage Marble',
    layout: 'col-span-12 lg:col-span-7 lg:-translate-y-8',
    height: 'h-[420px] sm:h-[540px]',
    image: "/King’s Social Media/commercial-oyster-bar-marble-corner-01.webp",
    desc: 'Monumental 4-inch mitered wrap-around bar top with commercial radius return corners, custom blue millwork, and brass foot rail.',
    parallaxFactor: -18,
  },
  {
    id: 'case-5',
    title: 'Fluted Oak & Wolf Culinary Suite',
    location: 'Private Lakefront Estate',
    stone: 'Taj Mahal Quartzite',
    layout: 'col-span-12 lg:col-span-7',
    height: 'h-[440px] sm:h-[560px]',
    image: "/King’s Social Media/kitchen-fluted-oak-island-wolf-range-01.webp",
    desc: 'Warm fluted vertical white oak island paired with diamond-hard Brazilian quartzite and full-height slab backsplash behind a Wolf range.',
    parallaxFactor: 16,
  },
  {
    id: 'case-6',
    title: 'Black Forest Diamond Pavilion',
    location: 'Audubon Park Residence',
    stone: 'Black Forest Exotic Granite',
    layout: 'col-span-12 lg:col-span-5 lg:translate-y-6',
    height: 'h-[380px] sm:h-[480px]',
    image: "/King’s Social Media/slab-black-forest-4way-diamond-bookmatch-01.webp",
    desc: 'Masterpiece 4-way diamond bookmatch slab composition creating a hypnotic concentric geometric focal feature.',
    parallaxFactor: -14,
  },
  {
    id: 'case-7',
    title: 'Fluted Shower & Calacatta Bath',
    location: 'Old Metairie Estate',
    stone: 'Calacatta Gold Marble',
    layout: 'col-span-12 lg:col-span-6',
    height: 'h-[400px] sm:h-[520px]',
    image: "/King’s Social Media/bathroom-fluted-shower-calacatta-floor-01.webp",
    desc: 'Guest bath vanity in crisp white stone paired with vertical fluted shower tile and polished Calacatta marble flooring.',
    parallaxFactor: 18,
  },
  {
    id: 'case-8',
    title: 'Illuminated Ensuite Steam Retreat',
    location: 'Uptown Luxury Residence',
    stone: 'Bianco Superiore Quartzite',
    layout: 'col-span-12 lg:col-span-6 lg:-translate-y-6',
    height: 'h-[400px] sm:h-[520px]',
    image: "/King’s Social Media/bathroom-led-mirrors-steam-shower-01.webp",
    desc: 'Double-vanity primary bath featuring thick mitered quartzite countertops, backlit LED mirrors, and a frameless glass steam shower.',
    parallaxFactor: -16,
  },
];

// Single Case Study Card with Silky Framer Motion Entrance & Scrub Parallax
function CaseStudyCard({ project, onSelect, onHoverStart, onHoverEnd }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={`group cursor-pointer text-left ${project.layout}`}
    >
      {/* Image Monolith with Controlled Parallax Depth */}
      <div
        className={`relative overflow-hidden border border-[var(--line)] bg-[#0B0B0C] ${project.height} shadow-lg`}
      >
        <motion.img
          style={{ y: imgY }}
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-[116%] -top-[8%] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
    </motion.div>
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
    <section id="projects" className="pt-16 sm:pt-24 pb-24 sm:pb-36 bg-[var(--bg)] transition-colors duration-1000 ease-luxury relative overflow-hidden">
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
        {/* Section Lead with Framer Motion Fade-Up */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6 text-left"
        >
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
        </motion.div>

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

        {/* Quiet Link to Full Curated Image Archive with Framer Motion Fade-Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 p-8 sm:p-12 border border-[var(--line)] bg-[var(--bg)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 text-left"
        >
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium block">
              Complete Visual Catalog
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-[var(--text)] font-light">
              Browse the complete curated jobsite photography archive.
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
        </motion.div>
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
              <motion.div
                key={selectedProject.image}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="max-h-[75vh] max-w-[90vw] flex items-center justify-center"
              >
                <ImageWithSkeleton
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-h-[75vh] max-w-[90vw] shadow-2xl border border-white/10 rounded-sm"
                  imgClassName="max-h-[75vh] max-w-[90vw] object-contain"
                  loadingText="Loading Architectural Specimen..."
                />
              </motion.div>
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
