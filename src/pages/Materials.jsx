import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { STONES } from '../data/content';
import { Link } from 'react-router';
import { useStoneTheme } from '../context/StoneThemeContext';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

export default function Materials() {
  const { activeStone } = useStoneTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Marble', 'Quartzite', 'Granite'];

  const filteredStones =
    selectedCategory === 'All'
      ? STONES
      : STONES.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-700 min-h-screen">
      {/* Header Banner */}
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
                The King&apos;s Stone Reserve · Harvey, Louisiana
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-[-0.02em] leading-[1.05]">
              Rare natural &amp; <br />
              <span className="italic font-normal" style={{ color: activeStone.accent }}>
                monolithic slabs.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#DDD8CF] max-w-2xl font-light leading-relaxed">
              Hand-selected blocks of Italian marble, indestructible Brazilian quartzite, and exotic granite in stock at our Harvey warehouse and available for reserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs (Static in-flow, non-sticky) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="py-5 sm:py-6 border-b border-[var(--line)] bg-[var(--bg)] transition-colors duration-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2 sm:gap-3 overflow-x-auto md:overflow-visible md:flex-wrap no-scrollbar py-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative text-xs uppercase tracking-[0.16em] px-4 py-2 sm:py-2.5 transition-colors duration-300 font-medium whitespace-nowrap shrink-0 border cursor-pointer ${
                  isActive
                    ? 'border-[var(--accent)] text-[#0F0F10] font-semibold shadow-sm'
                    : 'border-[var(--line)] bg-[var(--bg)] text-[var(--text)] hover:border-[var(--text-muted)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="materialsActiveTab"
                    className="absolute inset-0 bg-[var(--accent)] pointer-events-none"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </motion.section>

      {/* Stone Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStones.map((stone, idx) => (
              <motion.div
                key={stone.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: (idx % 3) * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border border-[var(--line)] overflow-hidden group hover:border-[var(--text)] transition-all duration-300 flex flex-col bg-[var(--bg)]"
              >
                <div className="h-80 overflow-hidden relative bg-[#0B0B0C]">
                  <ImageWithSkeleton
                    src={stone.image}
                    alt={stone.name}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loadingText=""
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs uppercase tracking-widest px-2.5 py-1 border border-white/10 z-20">
                    {stone.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-[var(--accent)] text-xs uppercase tracking-widest px-2.5 py-1 border border-white/10 z-20">
                    {stone.origin}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl text-[var(--text)] font-light">
                      {stone.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                      {stone.description}
                    </p>
                    <div className="pt-2 text-xs text-[var(--text)] font-light">
                      <span className="text-[var(--accent)] font-medium">Ideal For:</span> {stone.bestFor}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--line)] flex justify-between items-center text-xs">
                    <span className="text-[var(--text-muted)]">Grade: <strong className="text-[var(--text)] font-medium">{stone.priceLevel}</strong></span>
                    <Link
                      to="/contact"
                      className="btn-primary-luxury text-xs !py-2 !px-4"
                    >
                      Reserve Slab
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
