import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useStoneTheme } from '../context/StoneThemeContext';

const HERO_VIDEOS = [
  { id: 'vid-1', src: '/Hero Videos/A_seamless_video_sweeping_across_be1576ab.mp4' },
  { id: 'vid-2', src: '/Hero Videos/Cinematic_camera_pan_through_a_c96625d1.mp4' },
  { id: 'vid-3', src: '/Hero Videos/Slow_cinematic_pan_through_a_0da05e2b.mp4' },
];

export default function Hero() {
  const { activeStone } = useStoneTheme();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]);
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);
  const particlesY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    const activeVid = videoRefs.current[currentVideoIndex];
    if (activeVid) {
      activeVid.currentTime = 0;
      activeVid.muted = true;
      const playPromise = activeVid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [currentVideoIndex]);

  const handleVideoEnded = (endedIdx) => {
    if (endedIdx === currentVideoIndex) {
      setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
    }
  };

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (e.clientX / innerWidth - 0.5) * 20,
      y: (e.clientY / innerHeight - 0.5) * 20,
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#0B0B0C] text-[#F4F2EE]"
    >
      {/* LAYER 1: Background Sequential Videos with Framer Motion Scrub Parallax */}
      <motion.div
        style={{ y: videoY, scale: videoScale }}
        className="absolute inset-0 z-0 will-change-transform pointer-events-none"
      >
        {HERO_VIDEOS.map((item, index) => {
          const isActive = index === currentVideoIndex;
          return (
            <video
              key={item.id}
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.src}
              autoPlay={index === 0}
              muted
              playsInline
              preload="auto"
              poster={activeStone.image}
              onEnded={() => handleVideoEnded(index)}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            />
          );
        })}

        {/* Balanced contrast overlays */}
        <div className="absolute inset-0 z-20 bg-black/45" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0E0E10] via-transparent to-black/35" />
      </motion.div>

      {/* LAYER 2: Mid-Layer Floating Mineral Dust & Light Particles */}
      <motion.div
        style={{
          y: particlesY,
          x: mousePos.x,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 100 }}
        className="absolute inset-0 z-[1] pointer-events-none will-change-transform"
      >
        <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#FAB502] opacity-60 blur-[0.5px] animate-pulse" />
        <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-white opacity-40 blur-[1px] animate-pulse delay-700" />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 rounded-full bg-[#FAB502] opacity-50 blur-[0.5px] animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-white/60 blur-[1.5px] animate-pulse delay-500" />
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-[120px]" />
      </motion.div>

      {/* LAYER 3: Foreground Content with Framer Motion Entrance Reveal & Left-Aligned Typography */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 py-16 sm:py-24 flex items-center justify-center">
        <div className="w-full max-w-3xl lg:max-w-4xl text-left mx-auto space-y-5 sm:space-y-7 flex flex-col items-start">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden flex justify-start w-full"
          >
            <div className="inline-flex items-center gap-2 bg-black/60 px-3.5 sm:px-4 py-1.5 sm:py-2 backdrop-blur-md border border-white/10">
              <span
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-700"
                style={{ backgroundColor: activeStone.accent }}
              />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/90 font-medium">
                Fabrication Atelier · Harvey, Louisiana
              </span>
            </div>
          </motion.div>

          {/* Fluid Responsive Headline: Grand Architectural Atelier Scale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden py-1 w-full text-left"
          >
            <h1 className="font-display text-[clamp(2.75rem,7.5vw,5.75rem)] text-white tracking-[-0.02em] leading-[1.04] sm:leading-[0.98] drop-shadow-lg text-left">
              The surface <br />
              <span
                className="italic font-normal transition-colors duration-700"
                style={{ color: activeStone.accent }}
              >
                commands
              </span>{' '}
              the room.
            </h1>
          </motion.div>

          {/* Responsive Paragraph Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden w-full text-left"
          >
            <p className="text-sm sm:text-base md:text-lg text-[#DDD8CF]/90 max-w-xl font-light leading-relaxed drop-shadow-sm text-left">
              We import rare natural monoliths directly from historic quarries in Carrara and Brazil,
              digitize them with 0.4mm 3D lasers, and finish them with continuous vein continuation.
            </p>
          </motion.div>

          {/* Responsive Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden pt-3 w-full flex justify-start"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-4 sm:gap-6">
              <Link
                to="/materials"
                className="btn-primary-luxury text-xs sm:text-sm !py-3.5 !px-8 text-center"
              >
                Inspect current reserve
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Sequence Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-20 sm:right-24 z-20 hidden sm:flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 mr-1 font-mono">
          Scene {currentVideoIndex + 1}/{HERO_VIDEOS.length}
        </span>
        {HERO_VIDEOS.map((vid, idx) => (
          <button
            key={vid.id}
            type="button"
            onClick={() => setCurrentVideoIndex(idx)}
            aria-label={`Switch to video scene ${idx + 1}`}
            className="h-1 rounded-full transition-all duration-500 cursor-pointer"
            style={{
              backgroundColor: idx === currentVideoIndex ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
              width: idx === currentVideoIndex ? '20px' : '8px',
            }}
          />
        ))}
      </div>
    </section>
  );
}
