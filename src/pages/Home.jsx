import React from 'react';
import Hero from '../components/Hero';
import SlabSelector from '../components/SlabSelector';
import CraftProcess from '../components/CraftProcess';
import AsymmetricProjects from '../components/AsymmetricProjects';
import InteractiveCraftDeck from '../components/InteractiveCraftDeck';
import AboutHeritage from '../components/AboutHeritage';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      {/* 1. Hero with Looping Video + Left Centered Typography */}
      <Hero />

      {/* 2. 3D Rotating Showcase Deck of Stone Images (Second Section) */}
      <InteractiveCraftDeck />

      {/* 3. Theme-Shifting Split-Screen Slab Selector (01 / Signature Slab Selection) */}
      <SlabSelector />

      {/* 4. Pinned Craft & Process with Step Background Shift (02 / The Monolith Journey) */}
      <CraftProcess />

      {/* 5. Asymmetric Projects Case Studies (03 / Selected Case Studies) */}
      <AsymmetricProjects />

      {/* 6. About Section (04 / Studio & Heritage) */}
      <AboutHeritage />

      {/* 7. Calm Contact Section with Direct Form, Phone & Map (05 / Direct Consultation) */}
      <ContactSection />
    </main>
  );
}
