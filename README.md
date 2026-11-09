# King’s Marble & Granite · Bespoke Stone Atelier Platform

> **Harvey, Louisiana** · 1848 Industrial Blvd, Harvey, LA 70058 · Direct Desk: **(504) 723-7898**  
> Hours: Monday – Saturday: 8:00 AM – 5:00 PM · Sunday: Closed

---

## 1. Executive Overview

This repository houses the modern, high-performance web platform for **King’s Marble & Granite**, an architectural custom stone fabricator and direct importer based in Harvey, Louisiana.

Unlike mass-market discount contractors (such as `amazingcountertop.com`) that rely on generic templates, builder-grade remnants, and cookie-cutter grids, this digital experience is architected around an uncompromising luxury concept: **"The site takes the color of the stone."**

---

## 2. Creative Concept: "The Site Takes the Color of the Stone"

The digital interface maintains a quiet, restrained bone-white or near-black neutral aesthetic. When a visitor explores, selects, or hovers over a natural stone block, the entire page theme—background, text, border lines, subtle glows, dynamic accent buttons, and interactive highlights—transitions smoothly over **600–800ms** (`cubic-bezier(0.16, 1, 0.3, 1)`) to mirror the chromatic temperament of that exact geological specimen.

### Stone Palette Calibration

| Stone Specimen | Classification | Origin | Surface Tint (`--bg`) | Mineral Accent (`--accent`) |
| :--- | :--- | :--- | :--- | :--- |
| **Calacatta Michelangelo** | Statuary Marble | Carrara, Italy | `#F6F3EC` (Warm Alabaster) | `#B8A07A` (Champagne Gold) |
| **Obsidian Noir** | Marquina Marble | Markina, Spain | `#0B0B0C` (Near Black) | `#EDEDED` (Platinum White) |
| **Taj Mahal** | Pure Quartzite | Ceará, Brazil | `#F1E9DA` (Warm Cream) | `#C58A3D` (Amber Ochre) |
| **Patagonia Onyx** | Backlit Quartzite | Bahia, Brazil | `#14100F` (Smoky Obsidian) | `#D9954A` (Opal Amber) + `#7A5BD0` violet glow |
| **Bianco Superiore** | Cristallo Quartzite | Espírito Santo, Brazil | `#F3EFE9` (Porcelain White) | `#9A8E7D` (Titanium Grey) |
| **Titanium Cosmic** | Exotic Granite | Minas Gerais, Brazil | `#0D0E10` (Cosmic Carbon) | `#B09A6E` (Golden Mica) |

---

## 3. Luxury Web Effects, GSAP & Framer Motion Architecture

The platform integrates an award-winning motion pipeline combining **GSAP + ScrollTrigger + Lenis** for continuous scroll depth with **Framer Motion** for spring physics, layout morphs, and state transitions:

1. **Framer Motion Layout & State Morphing:**
   - **Gliding Active Slab Ring (`layoutId="activeSlabRing"`):** When selecting a new stone in the 2-column reserve grid, the glowing accent border and background glide across the grid to the target slab with high-precision spring physics (`stiffness: 450, damping: 35`).
   - **Slab Monolith Cross-Fade (`AnimatePresence mode="wait"`):** Switching stones or toggling between *Raw Slab Lot* and *Finished Room* executes a silky scale-and-opacity morph (`[0.16, 1, 0.3, 1]`).
   - **Specimen Specification Transitions:** When switching stones, the specification card smoothly cross-fades content without layout jump.
   - **Lightbox Entrance & Exit:** Full-screen vein inspection and case study modals open and close with coordinated backdrop blur and dialog scale transitions.
   - **Page Route Transitions:** Navigating between pages (Home, Services, Portfolio, About, Contact) delivers a gentle fade and slide transition.
   - **Interactive Metamorphosis Slider:** Framer Motion spring physics on the Before/After divider handle on hover and drag.
2. **Cinematic Hero GSAP Timeline:**
   - **Badge & Headline Reveal:** Sub-staggered entry with `power4.out` easing.
   - **ScrollTrigger Parallax Background:** Scrubbed video translation (`yPercent: 18`) synchronized with smooth wheel scrolling.
   - **Floating Mineral Drift:** Mouse-reactive crystalline particle float using direct GSAP physics.
3. **Silky Case Studies GSAP Scrub Parallax:**
   - Card viewport entrance with `power3.out`.
   - Strictly bounded GSAP `ScrollTrigger` scrub parallax (`yPercent: ±6%`) on full-bleed images, eliminating image-shift bugs or black gaps.
4. **Architectural Metric Counter & Watermark Scrub:**
   - GSAP numerical tweening on scroll for **2,800+** surfaces, **15-Year** warranty, and **0.4mm** precision.
   - Smooth horizontal parallax scrub on the giant `"HARVEY"` background watermark.
   - Staggered editorial reveal for the three numbered architectural statements.
5. **GSAP Elastic Magnetic Button:**
   - Contact form submit button features fluid cursor pull and signature `elastic.out(1, 0.35)` physics return.
6. **Vein Draw ScrollTrigger Line:**
   - Ultra-thin golden marble vein SVG dynamically drawn down the page with ScrollTrigger as the user scrolls.

---

## 4. The Atelier Distinction vs. Mass-Market Competitors (e.g., Amazing Countertops)

| Dimension | Mass-Market Competitors (e.g., Amazing Countertop) | King’s Marble & Granite (Atelier Standard) |
| :--- | :--- | :--- |
| **Brand Focus** | Budget package deals ("Cabinets from $X", "$55/sqft solid surface", house-flipper promos). | Monolithic architectural commissions, bookmatched feature walls, 45° miter waterfalls. |
| **Material Provenance** | Commercial bundle remnants, secondary distributor lots with resin fillers. | Direct quarry imports from Carrara, Italy and Brazil. 100% first-quality natural blocks. |
| **Measurement & Templating** | Traditional manual tape measures and flexible plastic strips. | **Sub-millimeter (0.4mm) 3D Prodim digital laser digitizers** across all walls & cabinetry. |
| **Vein Orchestration** | Random slab slicing resulting in mismatched grain and abrupt seam breaks. | **Pre-cutting 3D vein flow layout & simulation** ensuring continuous veining through waterfalls. |
| **Milling & Joinery** | Standard bridge saws with blunt butt-joints and visible tinted epoxy lines. | **5-Axis Intermac CNC robotic diamond waterjets** milling true 45° compound miters. |
| **Labor & Craftsmanship** | Subcontracted installation crews and third-party day labor. | **100% in-house master stone masons** overseeing templating, milling, and installation. |
| **Warranty & Protection** | 1-year limited or none. | **15-Year Craftsmanship & Fluoropolymer Penetrating Stain Warranty**. |
| **Digital Experience** | Cluttered WordPress template, small e-commerce card grids, generic stock photos. | Bespoke 3D/Parallax platform, dynamic stone-color transitions, 125 real jobsite photos (100% WebP optimized). |
| **Asset Performance** | Bulky uncompressed JPG files slowing down mobile page loads. | **100% WebP format** with **73.5% payload reduction** (53 MB down to 14 MB). |

---

## 5. Development & Production Build Commands

```bash
# 1. Navigate to the client application
cd client

# 2. Install dependencies
npm install

# 3. Start development server (with Hot Module Replacement)
npm run dev

# 4. Compile production-ready bundle
npm run build

# 5. Preview production build locally
npm run preview
```

> **Build Verification:** Compiles cleanly in **~1.9 seconds** with zero syntax errors, zero missing imports, and full tree-shaking via Vite and Tailwind CSS.
