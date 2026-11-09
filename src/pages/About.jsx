import React from 'react';
import { Link } from 'react-router';
import { MEDIA_ASSETS, GALLERY_IMAGES } from '../data/content';
import { useStoneTheme } from '../context/StoneThemeContext';

export default function About() {
  const { activeStone } = useStoneTheme();
  const workshopGallery = GALLERY_IMAGES.slice(10, 16);

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
                Heritage &amp; Workshop · Harvey, Louisiana
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-[-0.02em] leading-[1.05]">
              Generational craft <br />
              <span className="italic font-normal" style={{ color: activeStone.accent }}>
                meets laser precision.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#DDD8CF] max-w-2xl font-light leading-relaxed">
              Founded in Harvey, Louisiana, King’s Marble &amp; Granite operates on direct quarry provenance, zero subcontracting, and sub-millimeter 3D digital fabrication.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Workshop Imagery */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="col-span-12 lg:col-span-6 space-y-6">
              <span className="text-label text-xs text-[var(--accent)] tracking-[0.24em] font-medium block">
                Direct Importers &amp; In-House Fabricators
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-[var(--text)] leading-tight">
                We curate architectural permanence from the Earth&apos;s oldest geology.
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)] font-light leading-relaxed">
                King’s Marble &amp; Granite was established to solve the compromise of modern construction: middleman slab dealers, subcontracted installers, and mismatched veining seams.
              </p>
              <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                We import whole blocks directly from Carrara, Italy, and Minas Gerais, Brazil. Every slab is digitally modeled using Prodim 3D laser digitizers and milled on our 5-axis Intermac CNC waterjets, ensuring seamless 45° waterfalls and continuous vein continuation across every room.
              </p>

              <div className="pt-6 border-t border-[var(--line)] grid grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-display text-2xl text-[var(--text)]">0.4 mm</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1 font-light">Laser templating tolerance across walls and cabinetry.</p>
                </div>
                <div>
                  <h4 className="font-display text-2xl text-[var(--text)]">15-Year</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1 font-light">Fluoropolymer stain and structural craftsmanship guarantee.</p>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="relative border border-[var(--line)] overflow-hidden shadow-2xl bg-[#0B0B0C] h-[440px] sm:h-[540px]">
                <img
                  src={MEDIA_ASSETS.workshop}
                  alt="Kings Marble and Granite Workshop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="text-label text-xs text-[var(--accent)] block tracking-widest mb-1">
                    Harvey Facility
                  </span>
                  <p className="text-xs font-light text-[#DDD8CF]">
                    1848 Industrial Blvd · Direct slab reserve and waterjet cutting cell.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Gallery Snapshot */}
      <section className="py-20 border-y border-[var(--line)] bg-[var(--bg)] transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2 text-left">
            <span className="text-label text-[var(--accent)] tracking-[0.22em] block">
              Behind the Diamond Blades
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-light text-[var(--text)]">
              Artisan Masonry in Action
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {workshopGallery.map((img, idx) => (
              <div key={idx} className="h-44 sm:h-52 overflow-hidden border border-[var(--line)] bg-[#0B0B0C] group">
                <img
                  src={img.src}
                  alt={`Workshop ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Standards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[var(--line)] p-8 space-y-4 bg-[var(--bg)]">
              <span className="text-label text-xs text-[var(--accent)] block">01 / Provenance</span>
              <h3 className="font-display text-2xl text-[var(--text)]">Direct Block Quarrying</h3>
              <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                We inspect every stone lot at the quarry source in Italy and Brazil to ensure zero resin fillers, hidden fracture faults, or counterfeit synthetic quartz blends.
              </p>
            </div>

            <div className="border border-[var(--line)] p-8 space-y-4 bg-[var(--bg)]">
              <span className="text-label text-xs text-[var(--accent)] block">02 / Orchestration</span>
              <h3 className="font-display text-2xl text-[var(--text)]">Vein-Flow Pre-Visualization</h3>
              <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                Before a single diamond cut is made, clients inspect a high-resolution 3D digital model showing exactly how geological veins transition across waterfalls and walls.
              </p>
            </div>

            <div className="border border-[var(--line)] p-8 space-y-4 bg-[var(--bg)]">
              <span className="text-label text-xs text-[var(--accent)] block">03 / Accountability</span>
              <h3 className="font-display text-2xl text-[var(--text)]">In-House Master Crews</h3>
              <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                Zero third-party subcontractors. The same certified craftsmen who laser-digitize your home and cut your stone oversee the white-glove delivery and installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[var(--line)] bg-[#0B0B0C] text-[#F4F2EE] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <span className="text-label text-[var(--accent)] tracking-[0.24em] block">
            Visit Our Private Slab Yard
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-white">
            Touch monolithic stone in person.
          </h2>
          <p className="text-sm text-[#DDD8CF] max-w-xl mx-auto font-light leading-relaxed">
            Walk our Harvey indoor reserve and inspect full-size Calacatta, Taj Mahal, and Titanium Granite slabs under calibrated gallery illumination.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/#contact" className="btn-primary-luxury">
              Book Studio Consultation
            </Link>
            <a href="tel:+15047237898" className="btn-outline-luxury !text-white !border-white/30">
              (504) 723-7898
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
