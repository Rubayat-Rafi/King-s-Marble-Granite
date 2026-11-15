import React, { useState, useRef } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { useStoneTheme } from '../context/StoneThemeContext';

// Verified, visually analyzed photographic documentation from Brazil and New Orleans
const BRAZIL_QUARRY_EXPEDITION_MEDIA = [
  {
    id: 1,
    src: '/brazil/owner-quarry-summit.webp',
    title: 'Co-Founder at the Mountain Quarry Summit',
    location: 'Espírito Santo / Minas Gerais, Brazil',
    category: 'Quarry Expedition',
    caption: 'King’s Marble & Granite co-founder standing at the sheer mountain rim overlooking the massive open-pit extraction crater. Behind him, terracotta clay caps millions of years of white quartzite and crystalline marble bedrock plunging hundreds of feet below.',
    tag: 'Founder On-Site Expedition',
    details: 'Raw Mountain Bedrock · High-Elevation Quarry Crest',
    lotCode: 'EXPEDITION-BR-01'
  },
  {
    id: 2,
    src: '/brazil/owner-monolith-blocks.webp',
    title: 'Hand-Tagging Giant Monolith Blocks',
    location: 'Quarry Reserve & Gang-Saw Yard, Brazil',
    category: 'Block Selection',
    caption: 'Directly inspecting multi-ton monolithic stone blocks fresh off the diamond-wire excavation benches. Each block is audited for solid crystal density, tagged with lot codes ("5957"), and reserved exclusively for King’s Marble & Granite before shipping to the Gulf Coast.',
    tag: 'First-Choice Monolith Reserve',
    details: 'Calibrated Mega-Blocks · Stamped Lot #5957',
    lotCode: 'RESERVE-LOT-5957'
  },
  {
    id: 3,
    src: '/brazil/brazil-quarry-landscape.webp',
    title: 'Active Quarry Amphitheater & Derrick Crane',
    location: 'Cachoeiro de Itapemirim, Brazil',
    category: 'Extraction Site',
    caption: 'Expansive panoramic landscape of the stepped open-pit quarry basin. A heavy-duty derrick crane hoists squared monolithic blocks along the stepped bedrock tiers, framed by lush tropical green mountain topography.',
    tag: 'Active Geological Extraction',
    details: 'Stepped Bench Quarrying · 30+ Meter Vertical Faces',
    lotCode: 'QUARRY-PIT-SECTOR-A'
  },
  {
    id: 4,
    src: '/brazil/quarry-basin-blocks.webp',
    title: 'Numbered Sequential Blocks in the Basin',
    location: 'Espírito Santo, Brazil',
    category: 'Sequential Slices',
    caption: 'High-angle perspective of precision-cut rectangular quartzite and marble blocks staged in the quarry basin. Each block is numbered sequentially with red stencils so that consecutive sister slabs retain flawless continuous vein flow when sliced.',
    tag: 'Sequential Lot Coding',
    details: 'Sequential Bookmatch Parcels · Diamond Wire Sawn',
    lotCode: 'LOT-BUNDLE-SERIES-B'
  },
  {
    id: 5,
    src: '/brazil/tiered-bedrock-cliffs.webp',
    title: 'Sunlit Diamond-Wire Stepped Cut Face',
    location: 'Minas Gerais, Brazil',
    category: 'Geological Strata',
    caption: 'Golden afternoon sunlight illuminating the vertical bedrock tiers and clean perpendicular diamond-wire cuts. Zero explosives are used, preserving the natural quartz crystal lattice without hidden shock fractures.',
    tag: 'Wire-Saw Precision Cleavage',
    details: 'Pure Quartzite Strata · Zero Explosive Fractures',
    lotCode: 'GEOLOGICAL-STRATA-05'
  },
  {
    id: 6,
    src: '/brazil/quarry-cleavage-rigging.webp',
    title: 'Heavy Bedrock Cleavage & Crane Hoisting Rig',
    location: 'Brazil Mountain Extraction Pit',
    category: 'Heavy Rigging',
    caption: 'Close detail of the sheer vertical cleavage line and heavy steel derrick cables used to safely hoist massive 25-ton monolithic blocks away from the mountain face into the transport staging yard.',
    tag: 'Heavy Hoisting & Transport',
    details: '25-Ton Monolith Rigging · Transatlantic Prep',
    lotCode: 'RIGGING-LINE-ALPHA'
  }
];

const SUPERDOME_EXHIBITION_MEDIA = [
  {
    id: 7,
    src: '/brazil/superdome-founders-column.webp',
    title: 'Co-Founders Hussein & Musa at the Superdome',
    location: 'Mercedes-Benz Superdome · New Orleans, Louisiana',
    category: 'Master Exhibition',
    caption: 'Co-founders Hussein & Musa standing proudly beside their signature hand-carved solid marble fluted column, crowned by a bespoke hand-sculpted marble "KINGS" crown sculpture at the premier New Orleans Home & Architecture Expo in the Mercedes-Benz Superdome. Full-height bookmatched Brazilian quartzite slabs line the A-frames behind them.',
    tag: 'Hussein & Musa · Superdome Showcase',
    details: 'Custom Hand-Carved Marble Column & Crown Sculpture',
    event: 'New Orleans Home & Architecture Expo · Mercedes-Benz Superdome'
  },
  {
    id: 8,
    src: '/brazil/superdome-founder-solo.webp',
    title: 'Classical Stone Masonry: Hand-Carved Marble Pillar',
    location: 'Mercedes-Benz Superdome · New Orleans, Louisiana',
    category: 'Classical Stone Masonry',
    caption: 'Beside the monumental fluted classical column and custom marble crown logo. This masterpiece demonstrates the complete lifecycle of our craft: from hand-selecting raw stone in Brazilian quarries to hand-carving classical architectural monuments in Louisiana.',
    tag: 'Architectural Stone Craftsmanship',
    details: 'Solid Natural Marble · Fluted Classical Column',
    event: 'Mercedes-Benz Superdome Exhibition Booth'
  }
];

const BRAZILIAN_STONE_PROFILES = [
  {
    name: 'Taj Mahal Quartzite',
    origin: 'Ceará & Bahia, Brazil',
    description: 'The global benchmark for serene luxury. Warm creamy tones woven with champagne and amber filaments. Combines the timeless softness of Calacatta with diamond-hard quartzite strength.',
    hardness: 'Mohs 7.0',
    acidResistance: '100% Etch-Proof (Lemons, Wine, Vinegar)',
    idealFor: 'Full Waterfall Kitchen Islands, High-Traffic Chef Countertops',
    badge: 'Most Requested'
  },
  {
    name: 'Patagonia Exotic',
    origin: 'Bahia & Minas Gerais, Brazil',
    description: 'Nature’s most theatrical geology. Giant crystalline quartz deposits juxtaposed with black tourmaline clusters and creamy feldspar. Dramatically illuminates when backlit.',
    hardness: 'Mohs 7.5',
    acidResistance: 'Scratch & Heat Impervious',
    idealFor: 'Backlit Bar Displays, Monolithic Fireplace Hearth, Statement Powder Room',
    badge: 'Backlit Luminescence'
  },
  {
    name: 'Cristallo Extra',
    origin: 'Minas Gerais, Brazil',
    description: 'Pure translucent quartz crystal. When paired with hidden low-profile LED illumination, the entire slab transforms into a glowing, ethereal jewel of solid ice and golden veins.',
    hardness: 'Mohs 7.0',
    acidResistance: 'Zero Porosity with Professional Seal',
    idealFor: 'Backlit Kitchen Islands, Floating Master Vanities, Spa Wall Paneling',
    badge: 'Translucent Crystal'
  },
  {
    name: 'Mont Blanc Quartzite',
    origin: 'Espírito Santo, Brazil',
    description: 'Crisp alpine whites crossed by quiet charcoal and cool dove-grey striations. The visual poetry of pristine marble with zero etching worries or soft-calcite vulnerability.',
    hardness: 'Mohs 7.0',
    acidResistance: 'Stain & Acid Resilient',
    idealFor: 'Modern Minimalist Kitchens, Full-Height Backsplashes, Outdoor Kitchens',
    badge: 'Modern Heritage'
  }
];

// All 5 authentic video recordings from the owners' Brazil quarry expeditions
const BRAZIL_QUARRY_VIDEO_REELS = [
  {
    id: 'reel-1',
    reelNumber: '01',
    title: 'Diamond Wire Sawing & Bedrock Cleavage',
    duration: '0:10',
    location: 'Mountain Quarry Face · Espírito Santo, Brazil',
    category: 'Active Cleavage Sawing',
    tag: 'Live Field Recording',
    description: 'High-tension water-cooled diamond wire saws slice through hundreds of tons of solid bedrock mountain under cooling streams. Notice the sheer, polished natural cut face being cleaved away from the geological formation without explosive micro-fractures.',
    mp4: '/brazil/quarry-reel-1.mp4',
    webm: '/brazil/quarry-reel-1.webm',
    poster: '/brazil/quarry-reel-1-thumb.webp'
  },
  {
    id: 'reel-2',
    reelNumber: '02',
    title: 'Quarry Amphitheater & Derrick Crane Rigging',
    duration: '1:11',
    location: 'Open-Pit Quarry Basin · Cachoeiro de Itapemirim, Brazil',
    category: 'Extraction Scale Overview',
    tag: 'Monumental Pit Survey',
    description: 'Panoramic walk-through across the stepped benches of the active open-pit quarry basin. Heavy derrick cranes hoist 25-ton squared monolithic blocks along the stepped bedrock amphitheater framed by lush tropical mountain topography.',
    mp4: '/brazil/quarry-reel-2.mp4',
    webm: '/brazil/quarry-reel-2.webm',
    poster: '/brazil/quarry-reel-2-thumb.webp'
  },
  {
    id: 'reel-3',
    reelNumber: '03',
    title: 'Monolith Block Staging & Lot Survey',
    duration: '0:33',
    location: 'Block Staging Reserve Yard · Brazil',
    category: 'Block Quality Audit',
    tag: 'Lot Verification',
    description: 'Up-close inspection of giant squared stone blocks staged on the quarry floor. Co-founders inspect the crystal integrity, natural veining depth, and structural soundness of each massive block before stamping them for Harvey shipment.',
    mp4: '/brazil/quarry-reel-3.mp4',
    webm: '/brazil/quarry-reel-3.webm',
    poster: '/brazil/quarry-reel-3-thumb.webp'
  },
  {
    id: 'reel-4',
    reelNumber: '04',
    title: 'Stepped Bedrock Extraction Face',
    duration: '0:05',
    location: 'Mountain Quarry Crest · Minas Gerais, Brazil',
    category: 'Geological Formation',
    tag: 'Bedrock Profile',
    description: 'Panoramic sweep across the towering stepped quartzite rock wall under the Brazilian afternoon sun. Pure stone strata carved without explosive blasting, preserving the structural crystal lattice.',
    mp4: '/brazil/quarry-reel-4.mp4',
    webm: '/brazil/quarry-reel-4.webm',
    poster: '/brazil/quarry-reel-4-thumb.webp'
  },
  {
    id: 'reel-5',
    reelNumber: '05',
    title: 'Full Sourcing Expedition & Master Block Audit',
    duration: '2:35',
    location: 'Deep Quarry Expedition · Brazil',
    category: 'Founder Field Inspection',
    tag: 'Extended Documentary Reel',
    description: 'Extended full-length field documentary recording showing the co-founders on foot across the active quarry basin floor, evaluating consecutive sister cuts, auditing block dimensions, and tagging exclusive stone lots destined for New Orleans.',
    mp4: '/brazil/quarry-reel-5.mp4',
    webm: '/brazil/quarry-reel-5.webm',
    poster: '/brazil/quarry-reel-5-thumb.webp'
  }
];

const PROVENANCE_STEPS = [
  {
    step: '01',
    phase: 'Geological Expedition',
    title: 'The Owner Treks to the Brazil Summit',
    description: 'We don&apos;t buy from wholesaler catalogs. The owner travels directly to the bedrock mining regions of Espírito Santo and Minas Gerais to stand at the quarry summit and inspect the raw rock face.'
  },
  {
    step: '02',
    phase: 'Physical Block Tagging',
    title: 'Stamping Whole Monolith Blocks',
    description: 'The owner walks the quarry yard in person to audit freshly wire-sawn blocks (e.g. Lot #5957). Blocks with flawless crystal structure are stamped with King’s reserve markings.'
  },
  {
    step: '03',
    phase: 'Sequential Slicing & Bookmatching',
    title: 'Consecutive Sister Slabs',
    description: 'Sequential block cuts ensure that contiguous slab bundles stay together during transit, guaranteeing continuous uninterrupted vein flow across kitchen waterfalls and full-height hearths.'
  },
  {
    step: '04',
    phase: 'Direct Transatlantic Freight',
    title: 'Port of Vitória to Harvey Atelier',
    description: 'Sealed ocean containers ship directly to the Gulf Coast and straight to our indoor yard at 1848 Industrial Blvd in Harvey, LA, completely eliminating secondary broker markups.'
  },
  {
    step: '05',
    phase: 'Digital Laser Fabrication',
    title: 'Harvey In-House 3D Precision',
    description: 'Using 0.4mm Prodim 3D laser digitizing and 5-axis Intermac CNC diamond waterjets, our in-house master artisans mill, seam, and hand-finish your architectural commission.'
  }
];

export default function BrazilProvenance() {
  const { activeStone } = useStoneTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // 5-Reel Interactive Quarry Cinema Archive state
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const cinemaVideoRef = useRef(null);

  const handleSelectReel = (index) => {
    setActiveReelIndex(index);
    if (cinemaVideoRef.current) {
      cinemaVideoRef.current.load();
      cinemaVideoRef.current
        .play()
        .catch(() => {
          // Autoplay policy fallback: user will click play
        });
    }
  };

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setVideoPlaying(true))
        .catch((err) => console.error('Video playback error:', err));
    } else {
      videoRef.current.pause();
      setVideoPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-700 min-h-screen">
      {/* ── 1. CINEMATIC HERO: BRAZIL TO HARVEY PROVENANCE ── */}
      <section className="relative pt-32 sm:pt-44 pb-24 sm:pb-32 bg-[#08080A] text-[#F4F2EE] border-b border-white/10 overflow-hidden">
        {/* Glow backdrop */}
        <div
          className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none mix-blend-screen"
          style={{ backgroundColor: activeStone.accent }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,181,2,0.06),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-6"
          >
            {/* Super-badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-3.5 py-1.5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeStone.accent }} />
              <span className="text-xs uppercase tracking-[0.24em] text-white/80 font-medium">
                Verified Provenance · From Brazilian Mountain Bedrock to Harvey, LA
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-[-0.02em] leading-[1.04]">
              Hand-selected at the <br />
              <span className="italic font-normal" style={{ color: activeStone.accent }}>
                Brazilian mountain face.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#DDD8CF] max-w-2xl font-light leading-relaxed">
              Founded by master stone fabricators Hussein &amp; Musa, King’s Marble &amp; Granite operates on direct origin provenance. We never order stone blindly from digital trade catalogs or third-party brokers. We personally travel to the bedrock mountain quarries of Brazil, inspect freshly cut monolith blocks, and hand-tag exclusive stone lots directly for our Harvey atelier.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10">
              <div>
                <span className="font-display text-2xl sm:text-3xl text-white block">5,100+ mi</span>
                <span className="text-[11px] uppercase tracking-wider text-white/60 block mt-1">Transatlantic Direct</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl text-[var(--accent)] block">0 Middlemen</span>
                <span className="text-[11px] uppercase tracking-wider text-white/60 block mt-1">Direct Quarry Value</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl text-white block">100% Sequential</span>
                <span className="text-[11px] uppercase tracking-wider text-white/60 block mt-1">Consecutive Bookmatch</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl text-[var(--accent)] block">Mohs 7+</span>
                <span className="text-[11px] uppercase tracking-wider text-white/60 block mt-1">Diamond-Hard Quartzite</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#owner-journal"
                className="inline-flex items-center gap-2 bg-[var(--accent)] text-black text-xs uppercase tracking-[0.16em] font-medium px-6 py-3.5 hover:bg-white transition-colors duration-300 shadow-lg shadow-[var(--accent)]/10"
              >
                Read The Owner&apos;s Story ↓
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white text-xs uppercase tracking-[0.16em] font-medium px-6 py-3.5 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-300 backdrop-blur-sm"
              >
                Reserve Slabs in Harvey Yard →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. THE OWNER'S DIRECT JOURNAL & MANIFESTO ── */}
      <section id="owner-journal" className="py-24 sm:py-32 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large Editorial Quote & Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-7 text-left"
            >
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--accent)] font-medium">
                <span>The Founders&apos; Manifesto · Hussein &amp; Musa</span>
                <span className="w-8 h-px bg-[var(--accent)]" />
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-light text-[var(--text)] leading-tight">
                &ldquo;Why we cross oceans to stand on the Brazilian quarry floor.&rdquo;
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[var(--text-muted)] font-light leading-relaxed">
                <p>
                  Most countertop shops buy whatever surplus inventory a commercial wholesale distributor happens to ship to their regional warehouse. That means homeowners end up with stone that was picked over multiple times—often concealing micro-fissures, brittle quartz pockets, or weak veins patched with colored epoxy resin.
                </p>
                <p className="text-[var(--text)] font-normal italic border-l-2 border-[var(--accent)] pl-5 py-2 my-4">
                  &ldquo;We refuse to deliver compromises to our clients in New Orleans and the Gulf Coast. When a homeowner invests in a monumental kitchen island or a bookmatched fireplace, they deserve geological perfection. That is why we personally fly to Espírito Santo and Minas Gerais in Brazil.&rdquo;
                </p>
                <p>
                  We hike the mountain quarry summits to witness the active rockface cuts. We walk the quarry floor under the Brazilian sun, touch the raw diamond-wire cleavage planes, and inspect whole stacked blocks like Lot #5957 before they ever touch a container ship. When you choose a slab from King’s Marble &amp; Granite, you know that stone was personally inspected, tagged, and delivered to Harvey with authentic provenance.
                </p>
              </div>

              {/* Owner Signature Block with Authentic Brazil Photo Avatar */}
              <div className="pt-6 border-t border-[var(--line)] flex items-center gap-5">
                <div className="w-14 h-14 rounded-full border-2 border-[var(--accent)] overflow-hidden shrink-0 shadow-md">
                  <img
                    src="/brazil/owner-quarry-summit.webp"
                    alt="Hussein & Musa · King's Marble Founders"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display text-lg text-[var(--text)] font-normal">
                    Hussein &amp; Musa
                  </h4>
                  <p className="text-xs text-[var(--accent)] tracking-wider uppercase font-medium">
                    Co-Founders &amp; Master Curators · King&apos;s Marble &amp; Granite
                  </p>
                  <p className="text-[11px] text-[var(--text-muted)] font-light mt-0.5">
                    Harvey, Louisiana · On-Site Quarry Sourcing Expeditions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Featured Owner Video & Authentic Quarry Footage */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Luxury Video Reel Component */}
              <div
                onClick={toggleVideo}
                className="relative bg-[#0E0E10] border border-[var(--line)] overflow-hidden shadow-2xl group cursor-pointer"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-black">
                  <video
                    ref={videoRef}
                    poster="/brazil/quarry-reel-1-thumb.webp"
                    loop
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                    onPlay={() => setVideoPlaying(true)}
                    onPause={() => setVideoPlaying(false)}
                    className="w-full h-full object-cover brightness-95 contrast-105"
                  >
                    <source src="/brazil/quarry-reel-1.webm" type="video/webm" />
                    <source src="/brazil/quarry-reel-1.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Play / Pause Interactive Button */}
                  <div
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 z-20 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-black pointer-events-none"
                    aria-hidden="true"
                  >
                    {videoPlaying ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </div>

                  {/* Floating live tag */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[11px] uppercase tracking-wider text-white">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>Live Quarry Footage · Brazil Extraction</span>
                  </div>

                  {/* Audio Mute / Unmute Toggle Button */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                    className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[var(--accent)] hover:text-black transition-colors"
                  >
                    {isMuted ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    )}
                  </button>

                  {/* Bottom Video Caption */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-left pointer-events-none">
                    <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-medium">
                      Authentic Field Recording
                    </p>
                    <h3 className="font-display text-lg text-white font-light mt-0.5">
                      Diamond Wire Extraction &amp; Block Handling
                    </h3>
                  </div>
                </div>
              </div>

              {/* Informational Callout */}
              <div className="p-5 bg-[var(--surface)] border border-[var(--line)] text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] font-semibold block mb-1">
                  Transatlantic Freight Guarantee
                </span>
                <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                  Every slab shipped from Brazil is tracked from the Port of Vitória directly to our indoor Harvey slab yard. No warehouse stops, no broker auctions, no compromised handling.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. VISUALLY ANALYZED PHOTO GALLERY: BRAZIL EXPEDITIONS ── */}
      <section className="py-24 sm:py-32 bg-[var(--surface)] border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium">
              <span>Section 01 · Geological Origin</span>
              <span className="w-8 h-px bg-[var(--accent)]" />
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[var(--text)] leading-tight">
              At the Quarry Source in Brazil. <br />
              <span className="italic font-normal" style={{ color: activeStone.accent }}>
                Every photograph authenticated by the owner.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] font-light leading-relaxed">
              Examine verified photographic documentation from the owner’s sourcing expeditions across the mountain quarries of Espírito Santo and Minas Gerais. Click any photograph to view the complete visual inspection details.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {BRAZIL_QUARRY_EXPEDITION_MEDIA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedImage(item)}
                className="group relative cursor-pointer bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Image Frame */}
                <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-black/40">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner Badge */}
                  <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white font-medium">
                    {item.tag}
                  </span>

                  {/* Zoom Icon indicator */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Content description accurately matching the photo */}
                <div className="p-5 space-y-2 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] text-[var(--accent)] font-medium uppercase tracking-wider">
                      {item.location}
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)] font-mono">
                      {item.lotCode}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="pt-3 border-t border-[var(--line)] flex items-center justify-between text-[11px] text-[var(--text-muted)] font-light">
                    <span>{item.category}</span>
                    <span className="text-[var(--accent)] font-medium">Inspect Analysis →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CHAPTER TWO: FROM BRAZIL QUARRIES TO THE MERCEDES-BENZ SUPERDOME SHOWCASE ── */}
      <section className="py-24 sm:py-32 border-b border-[var(--line)] bg-[#0B0B0C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium">
              <span>Section 02 · Gulf Coast Architectural Mastery</span>
              <span className="w-8 h-px bg-[var(--accent)]" />
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-white leading-tight">
              From Brazilian Bedrock to the Superdome. <br />
              <span className="italic font-normal" style={{ color: activeStone.accent }}>
                Master marble craftsmanship exhibited in New Orleans.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#DDD8CF] font-light leading-relaxed">
              Once these monolithic blocks arrive in Louisiana, our master stone fabricators transform them into monumental architectural works. Below: King’s Marble &amp; Granite founders exhibiting their bespoke hand-carved solid marble fluted column and &ldquo;KINGS&rdquo; crown sculpture alongside direct-imported Brazilian quartzite slabs inside the Mercedes-Benz Superdome at the New Orleans Home &amp; Architecture Expo.
            </p>
          </div>

          {/* Superdome Exhibition Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUPERDOME_EXHIBITION_MEDIA.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedImage(item)}
                className="group relative cursor-pointer bg-[#111114] border border-white/10 hover:border-[var(--accent)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Superdome Photo Frame */}
                <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-black">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Corner Badge */}
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/15 px-3 py-1 text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold">
                    {item.tag}
                  </span>

                  {/* Zoom Icon indicator */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Content description accurately explaining the Superdome image */}
                <div className="p-6 space-y-3 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] text-[var(--accent)] font-medium uppercase tracking-wider">
                      {item.location}
                    </span>
                    <span className="text-[10px] text-white/50 font-mono">
                      HBA PROUD MEMBER
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-white group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DDD8CF] font-light leading-relaxed">
                    {item.caption}
                  </p>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                    <span>{item.details}</span>
                    <span className="text-[var(--accent)] font-medium">Inspect Exhibition →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LIGHTBOX MODAL: FULL-SCREEN VISUAL INSPECTION ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#0E0E10] border border-white/10 overflow-hidden shadow-2xl text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-[var(--accent)] hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Image side */}
                <div className="lg:col-span-8 bg-black flex items-center justify-center p-2 sm:p-4">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="max-h-[75vh] w-auto object-contain"
                  />
                </div>

                {/* Details side with verified analysis */}
                <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 font-semibold">
                      {selectedImage.tag}
                    </span>
                    <h3 className="font-display text-2xl text-white font-light">
                      {selectedImage.title}
                    </h3>
                    <p className="text-xs text-[var(--accent)] font-medium uppercase tracking-wider">
                      📍 {selectedImage.location}
                    </p>
                    <p className="text-xs sm:text-sm text-[#DDD8CF] font-light leading-relaxed">
                      {selectedImage.caption}
                    </p>

                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-white/50 block">Subject Analysis</span>
                        <span className="text-xs text-white font-medium">{selectedImage.details || selectedImage.category}</span>
                      </div>
                      {selectedImage.lotCode && (
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-white/50 block">Inventory Lot Verification</span>
                          <span className="text-xs text-[var(--accent)] font-medium">{selectedImage.lotCode}</span>
                        </div>
                      )}
                      {selectedImage.event && (
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-white/50 block">Exhibition Venue</span>
                          <span className="text-xs text-[var(--accent)] font-medium">{selectedImage.event}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <Link
                      to="/contact"
                      className="w-full text-center block bg-[var(--accent)] text-black text-xs uppercase tracking-widest font-semibold py-3 px-4 hover:bg-white transition-colors"
                    >
                      Inquire About This Stone Lot →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 6. LIVE VIDEO CINEMA ARCHIVE: 5 VERIFIED QUARRY REELS ── */}
      <section className="py-20 sm:py-28 border-b border-[var(--line)] bg-[#0A0A0C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium">
              <span>Authentic Video Archive · 5 Quarry Field Recordings</span>
              <span className="w-8 h-px bg-[var(--accent)]" />
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-white leading-tight">
              Watch the raw power of the Brazilian quarry floor.
            </h2>
            <p className="text-sm sm:text-base text-[#DDD8CF] font-light leading-relaxed">
              High-tension water-cooled diamond wire saws slice through hundreds of tons of solid bedrock mountain under cooling streams. Our recorded video archives capture the monumental scale of the blocks selected by Hussein &amp; Musa for our Harvey fabrication center. Explore all 5 verified field recordings below.
            </p>
          </div>

          {/* Master Cinema Theater Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Master Cinema Player (8 cols) */}
            <div className="lg:col-span-8 bg-[#0E0E11] border border-white/10 overflow-hidden shadow-2xl flex flex-col">
              <div className="relative aspect-video bg-black overflow-hidden group">
                <video
                  ref={cinemaVideoRef}
                  key={BRAZIL_QUARRY_VIDEO_REELS[activeReelIndex].id}
                  poster={BRAZIL_QUARRY_VIDEO_REELS[activeReelIndex].poster}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src={BRAZIL_QUARRY_VIDEO_REELS[activeReelIndex].webm} type="video/webm" />
                  <source src={BRAZIL_QUARRY_VIDEO_REELS[activeReelIndex].mp4} type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>

                {/* Badges on video screen */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/15 text-[11px] uppercase tracking-wider text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Reel {BRAZIL_QUARRY_VIDEO_REELS[activeReelIndex].reelNumber} of 05 · {BRAZIL_QUARRY_VIDEO_REELS[activeReelIndex].duration}</span>
                </div>

                <div className="absolute top-4 right-4 z-10 pointer-events-none bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/15 text-[11px] uppercase tracking-wider text-[var(--accent)] font-mono">
                  {BRAZIL_QUARRY_VIDEO_REELS[activeReelIndex].tag}
                </div>
              </div>

              {/* Video metadata bar */}
              <div className="p-6 text-left space-y-3 bg-[#111115]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-medium">
                    📍 {BRAZIL_QUARRY_VIDEO_REELS[activeReelIndex].location}
                  </span>
                  <span className="text-[11px] font-mono text-white/50 bg-white/5 px-2.5 py-1 border border-white/10">
                    Dual Formats: WebM + H.264 Universal
                  </span>
                </div>
                <h3 className="font-display text-2xl text-white font-light">
                  {BRAZIL_QUARRY_VIDEO_REELS[activeReelIndex].title}
                </h3>
                <p className="text-sm text-[#DDD8CF] font-light leading-relaxed">
                  {BRAZIL_QUARRY_VIDEO_REELS[activeReelIndex].description}
                </p>
              </div>
            </div>

            {/* Playlist / Reel Selector (4 cols) */}
            <div className="lg:col-span-4 space-y-3 text-left">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
                  Quarry Video Archive
                </span>
                <span className="text-[11px] font-mono text-[var(--accent)]">
                  5 Field Reels Available
                </span>
              </div>

              <div className="space-y-2.5">
                {BRAZIL_QUARRY_VIDEO_REELS.map((reel, idx) => {
                  const isActive = idx === activeReelIndex;
                  return (
                    <button
                      key={reel.id}
                      type="button"
                      onClick={() => handleSelectReel(idx)}
                      className={`w-full text-left p-3.5 transition-all duration-300 flex items-center gap-3.5 border ${
                        isActive
                          ? 'bg-white/10 border-[var(--accent)] shadow-lg'
                          : 'bg-[#111114] border-white/10 hover:border-white/30 hover:bg-white/5'
                      }`}
                    >
                      {/* Thumbnail with duration badge */}
                      <div className="relative w-24 h-16 shrink-0 bg-black overflow-hidden border border-white/10">
                        <img
                          src={reel.poster}
                          alt={reel.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <span className="absolute bottom-1 right-1 bg-black/85 text-[10px] font-mono text-white px-1 py-0.5 leading-none">
                          {reel.duration}
                        </span>
                        {isActive && (
                          <div className="absolute inset-0 bg-[var(--accent)]/20 flex items-center justify-center">
                            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-ping" />
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--accent)]">
                            Reel {reel.reelNumber}
                          </span>
                          {isActive && (
                            <span className="text-[9px] uppercase tracking-wider text-black bg-[var(--accent)] px-1.5 py-0.5 font-bold">
                              Active
                            </span>
                          )}
                        </div>
                        <h4 className="font-display text-sm text-white font-normal truncate">
                          {reel.title}
                        </h4>
                        <p className="text-[11px] text-white/50 truncate">
                          {reel.category}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Instagram direct link banner */}
              <div className="pt-3">
                <a
                  href="https://www.instagram.com/kingmarble06?vrfl=ZWl4M2NuZTEzOGEw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-gradient-to-r from-white/5 to-[var(--accent)]/10 border border-white/10 hover:border-[var(--accent)] transition-colors text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[var(--accent)] fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <div className="text-left">
                      <span className="text-xs font-medium text-white block">@kingmarble06</span>
                      <span className="text-[10px] text-white/60 block">Follow live yard stories on Instagram</span>
                    </div>
                  </div>
                  <span className="text-xs text-[var(--accent)] group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CURATED BRAZILIAN STONE SPECIMENS ── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium block">
              Brazilian Geological Treasures
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[var(--text)] leading-tight">
              The crown jewels of South American stone.
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] font-light leading-relaxed">
              Brazil produces the world&apos;s most structurally resilient and visually stunning quartzites. Below are the signature Brazilian stones we import directly to our Harvey yard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BRAZILIAN_STONE_PROFILES.map((stone, index) => (
              <motion.div
                key={stone.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[var(--surface)] border border-[var(--line)] p-8 space-y-6 flex flex-col justify-between hover:border-[var(--accent)]/50 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] bg-[var(--accent)]/10 text-[var(--accent)] px-2.5 py-1 font-semibold">
                      {stone.badge}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      {stone.origin}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-[var(--text)] font-light">
                    {stone.name}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                    {stone.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--line)] space-y-3 text-xs">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-[var(--text-muted)]">Mineral Hardness:</span>
                    <span className="text-[var(--text)] font-medium">{stone.hardness}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-[var(--text-muted)]">Acid &amp; Stain Resistance:</span>
                    <span className="text-[var(--accent)] font-medium">{stone.acidResistance}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-[var(--line)] pt-2">
                    <span className="text-[var(--text-muted)]">Ideal Architecture:</span>
                    <span className="text-[var(--text)] font-medium text-right max-w-[60%]">{stone.idealFor}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. PROVENANCE TIMELINE: 5 PHASES FROM MOUNTAIN TO HOME ── */}
      <section className="py-24 sm:py-32 bg-[var(--surface)] border-y border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium block">
              The Journey of Authenticity
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[var(--text)] leading-tight">
              From the bedrock of Brazil to your Louisiana home.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROVENANCE_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 bg-[var(--bg)] border border-[var(--line)] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl text-[var(--accent)] font-light">
                      {step.step}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[var(--text-muted)]">
                      Phase {idx + 1}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold block">
                    {step.phase}
                  </span>
                  <h4 className="font-display text-lg text-[var(--text)] font-normal leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. DIRECT BLOCK RESERVATION CALL TO ACTION ── */}
      <section className="py-24 sm:py-36 bg-[#08080A] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-color"
          style={{ backgroundColor: activeStone.accent }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <span className="inline-block bg-white/10 text-[var(--accent)] border border-white/15 px-3 py-1.5 text-xs uppercase tracking-[0.22em] font-medium backdrop-blur-md">
            Direct Yard Viewing · Harvey, Louisiana
          </span>

          <h2 className="font-display text-4xl sm:text-6xl font-light text-white tracking-[-0.02em] leading-tight">
            Walk our Brazil slab reserve <br />
            <span className="italic font-normal" style={{ color: activeStone.accent }}>
              in person at our Harvey atelier.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#DDD8CF] max-w-2xl mx-auto font-light leading-relaxed">
            Touch genuine Brazilian quartzite monoliths tagged by our owner. Tour our indoor slab yard at 1848 Industrial Blvd or reserve an entire sequential block for your architectural project.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-5">
            <a
              href="tel:5047237898"
              className="bg-[var(--accent)] text-black font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 hover:bg-white transition-colors duration-300 shadow-xl shadow-[var(--accent)]/15"
            >
              Call Curator: (504) 723-7898
            </a>
            <Link
              to="/contact"
              className="border border-white/20 text-white font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              Schedule Private Viewing →
            </Link>
          </div>

          <div className="pt-8 text-xs text-white/50 flex flex-wrap justify-center items-center gap-6">
            <a
              href="https://maps.app.goo.gl/dkJQrof9kvrVG4mLA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors underline underline-offset-4"
            >
              📍 1848 Industrial Blvd, Harvey, LA 70058 (Google Maps ↗)
            </a>
            <span>•</span>
            <span>Mon – Sat: 8:00 AM – 5:00 PM</span>
            <span>•</span>
            <a
              href="https://www.instagram.com/kingmarble06?vrfl=ZWl4M2NuZTEzOGEw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors underline underline-offset-4"
            >
              Instagram @kingmarble06 ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
