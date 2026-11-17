import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../data/content';
import { useStoneTheme } from '../context/StoneThemeContext';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

const CATEGORY_ORDER = [
  'Kitchens',
  'Waterfall Islands',
  'Bathrooms & Vanities',
  'Fireplaces & Staircases',
  'Outdoor Kitchens & Bars',
  'Commercial & Wine Lounges',
  'Stone Slabs & Quarry',
  'Showroom & Sculpture',
];

const applicationGroups = CATEGORY_ORDER.map((category) => ({
  id: category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
  label: category,
  items: GALLERY_IMAGES.filter((item) => item.category === category),
})).filter((g) => g.items.length > 0);

export default function Materials() {
  const { activeStone } = useStoneTheme();
  const [selectedGroup, setSelectedGroup] = useState('All');

  const visibleGroups =
    selectedGroup === 'All'
      ? applicationGroups
      : applicationGroups.filter((g) => g.label === selectedGroup);

  return (
    <div className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-700 min-h-screen">
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-24 bg-[#0B0B0C] text-[#F4F2EE] border-b border-[var(--line-dark)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-color"
          style={{ backgroundColor: activeStone.accent }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-5"
          >
            <div className="inline-flex items-center gap-2.5 bg-white/10 px-3 py-1.5 backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeStone.accent }} />
              <span className="text-xs uppercase tracking-[0.22em] text-white/80 font-medium">
                Stone Gallery · Harvey, Louisiana
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-[-0.02em] leading-[1.05]">
              Material inspiration <br />
              <span className="italic font-normal" style={{ color: activeStone.accent }}>
                by application.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#DDD8CF] max-w-2xl font-light leading-relaxed">
              Every project photograph sorted accurately by space and application — kitchens, waterfall islands, bathrooms, fireplaces, outdoor bars, commercial lounges, slabs, and our Harvey showroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clean Filter Bar */}
      <section className="py-5 border-b border-[var(--line)] bg-[var(--bg)] transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 sm:gap-2.5 overflow-x-auto md:flex-wrap no-scrollbar py-1">
          {['All', ...applicationGroups.map((g) => g.label)].map((cat) => {
            const isActive = selectedGroup === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedGroup(cat)}
                className={`text-xs uppercase tracking-[0.14em] px-3.5 py-2 transition-colors duration-200 whitespace-nowrap shrink-0 border cursor-pointer ${
                  isActive
                    ? 'bg-[var(--accent)] border-[var(--accent)] text-[#0B0B0C] font-semibold'
                    : 'border-[var(--line)] bg-[var(--bg)] text-[var(--text)] hover:border-[var(--text-muted)]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {visibleGroups.map((group) => (
            <div key={group.id} className="space-y-6">
              <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
                <h2 className="font-display text-2xl sm:text-3xl text-[var(--text)] font-light tracking-[-0.02em]">
                  {group.label}
                </h2>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {group.items.length} images
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
                {group.items.map((item, idx) => (
                  <motion.div
                    key={`${group.id}-${item.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{
                      duration: 0.5,
                      delay: (idx % 5) * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group overflow-hidden border border-[var(--line)] bg-[#0B0B0C] hover:border-[var(--text)] transition-colors duration-300"
                  >
                    <div className="aspect-[4/5] overflow-hidden relative">
                      <ImageWithSkeleton
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full"
                        imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loadingText=""
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
