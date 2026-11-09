import React from 'react';
import { Link } from 'react-router';
import { SERVICES, EDGE_PROFILES } from '../data/content';
import { useStoneTheme } from '../context/StoneThemeContext';

export default function Services() {
  const { activeStone } = useStoneTheme();

  return (
    <div className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-700 min-h-screen">
      {/* Editorial Header Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-24 bg-[#0B0B0C] text-[#F4F2EE] border-b border-[var(--line-dark)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-color"
          style={{ backgroundColor: activeStone.accent }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2.5 bg-white/10 px-3 py-1.5 backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeStone.accent }} />
              <span className="text-xs uppercase tracking-[0.22em] text-white/80 font-medium">
                Fabrication Capabilities · Harvey Studio
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-[-0.02em] leading-[1.05]">
              Engineered from <br />
              <span className="italic font-normal" style={{ color: activeStone.accent }}>
                block to polished monolith.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#DDD8CF] max-w-2xl font-light leading-relaxed">
              We operate an advanced digital fabrication shop equipped with 5-axis CNC diamond waterjets and sub-millimeter 3D laser digitizers. From compound mitered waterfall islands to 18-foot fireplace surrounds, we craft every stone element in-house with zero third-party subcontracting.
            </p>

            <div className="pt-2 flex flex-wrap gap-6 text-xs text-[#DDD8CF]/80">
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-semibold">✦</span>
                <span>Prodim 3D Laser Digitizing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-semibold">✦</span>
                <span>5-Axis Diamond Waterjets</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-semibold">✦</span>
                <span>15-Year Fluoropolymer Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Fabrication Capabilities (Asymmetric Editorial Features) */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36">
          {SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={service.id}
                className="grid grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Text Content */}
                <div
                  className={`col-span-12 lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="inline-flex items-center gap-3">
                    <span className="text-label text-xs text-[var(--accent)] tracking-[0.24em] font-medium">
                      Capability 0{idx + 1}
                    </span>
                    <span className="w-8 h-px bg-[var(--line)]" />
                    <span className="text-label text-xs text-[var(--text-muted)] tracking-widest">
                      {service.subtitle}
                    </span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[var(--text)] leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[var(--text-muted)] font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Fabrication Specifications */}
                  <div className="pt-4 border-t border-[var(--line)] space-y-3">
                    <span className="text-label text-xs text-[var(--text)] tracking-wider block font-medium">
                      Engineering Specifications:
                    </span>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-xs text-[var(--text-muted)] font-light">
                          <span className="text-[var(--accent)] mt-0.5">✦</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex items-center gap-5">
                    <Link
                      to="/#contact"
                      className="btn-primary-luxury text-xs !py-3 !px-6"
                    >
                      Inquire About This Service
                    </Link>
                    <a
                      href="tel:+15047237898"
                      className="text-label text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                    >
                      (504) 723-7898
                    </a>
                  </div>
                </div>

                {/* Monolithic Image Showcase */}
                <div
                  className={`col-span-12 lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative h-[380px] sm:h-[500px] overflow-hidden border border-[var(--line)] shadow-xl group bg-[#0B0B0C]">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-white/80 z-10 pointer-events-none">
                      <span className="text-label tracking-widest text-xs bg-black/60 px-2.5 py-1 border border-white/10">
                        Harvey Jobsite Capture
                      </span>
                      <span className="font-light italic text-xs">Kings Marble &amp; Granite</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Architectural Diamond CNC Edge Profiles Section */}
      <section className="py-24 border-t border-[var(--line)] bg-[var(--bg)] transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-4 text-left">
            <span className="text-label text-[var(--accent)] tracking-[0.22em] block">
              Architectural Edge Library
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[var(--text)]">
              Diamond CNC Edge Profiles
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
              The edge treatment establishes the architectural silhouette of your stone. All edges are cut with 5-axis robotic diamond router bits and polished with multi-grit diamond pads to match the face sheen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {EDGE_PROFILES.map((edge) => (
              <div
                key={edge.id}
                className="border border-[var(--line)] p-8 bg-[var(--bg)] transition-all duration-300 hover:border-[var(--text)] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline border-b border-[var(--line)] pb-3">
                    <h3 className="font-display text-2xl text-[var(--text)]">
                      {edge.name}
                    </h3>
                    <span className="text-label text-xs text-[var(--accent)]">
                      CNC Profile
                    </span>
                  </div>
                  <span className="text-label text-xs text-[var(--accent)] tracking-wider block">
                    {edge.subtitle}
                  </span>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                    {edge.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)] flex justify-between items-center text-xs text-[var(--text-muted)] uppercase tracking-wider">
                  <span>Diamond Polished</span>
                  <span>Hairline Tolerance</span>
                </div>
              </div>
            ))}

            {/* Custom Monolithic Apron Card */}
            <div className="border border-[var(--text)] p-8 bg-[#0B0B0C] text-[#F4F2EE] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-white/15 pb-3">
                  <h3 className="font-display text-2xl text-white">
                    Mitered Apron Build-Ups
                  </h3>
                  <span className="text-label text-xs text-[var(--accent)]">
                    2cm to 8cm
                  </span>
                </div>
                <span className="text-label text-xs text-[var(--accent)] tracking-wider block">
                  Monumental Stone Appearance
                </span>
                <p className="text-xs text-[#DDD8CF] font-light leading-relaxed">
                  We miter 2cm or 3cm slabs at 45 degrees to create custom apron heights up to 8cm (over 3 inches thick), achieving a monumental appearance with continuous vein wrapping.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/#contact"
                  className="text-label text-xs text-[var(--accent)] hover:text-white transition-colors uppercase tracking-widest inline-flex items-center gap-2"
                >
                  Consult on custom apron miters →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Bottom Consultation */}
      <section className="py-24 border-t border-[var(--line)] bg-[var(--bg)] transition-colors duration-700">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-label text-[var(--accent)] tracking-[0.24em] block">
            Direct Shop Consultation
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[var(--text)] font-light leading-tight">
            Consult directly with our master fabricator.
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            Bring your blueprints, cabinet layouts, or architectural drawings to our Harvey slab yard for a complimentary vein continuation review and formal estimate.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/#contact" className="btn-primary-luxury">
              Schedule Studio Consultation
            </Link>
            <a href="tel:+15047237898" className="btn-outline-luxury">
              Direct Desk: (504) 723-7898
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
