import React, { createContext, useContext, useState, useEffect } from 'react';

export const STONE_THEMES = [
  {
    id: 'calacatta',
    name: 'Calacatta Michelangelo',
    origin: 'Carrara, Italy',
    type: 'Classic Italian Marble',
    bg: '#F6F3EC',
    accent: '#B8A07A',
    text: '#1A1A1A',
    textMuted: '#6B6862',
    line: '#DDD8CF',
    glow: 'rgba(184, 160, 122, 0.22)',
    isDark: false,
    thickness: '2cm / 3cm / 6cm Mitered',
    finishes: ['Honed Matte', 'Polished High-Luster'],
    bestUses: 'Sculptural kitchen islands, full-height backsplashes, master ensuites',
    // Actual raw slab specimen with dramatic veining
    image: "/King’s Social Media/IMG_7690.webp",
    detailImage: "/King’s Social Media/3a4f499a-a7da-47d7-a4eb-9e015653e63f.webp",
    veinDescription:
      'Translucent alabaster background traversed by feathery amber ribbons and champagne-gold sub-fissures.',
  },
  {
    id: 'nero-marquina',
    name: 'Nero Marquina Obsidian',
    origin: 'Markina, Spain',
    type: 'Deep Metamorphic Marble',
    bg: '#0B0B0C',
    accent: '#EDEDED',
    text: '#EDEDED',
    textMuted: '#9B9B9B',
    line: '#242426',
    glow: 'rgba(237, 237, 237, 0.15)',
    isDark: true,
    thickness: '2cm / 3cm Mitered',
    finishes: ['Leathered Velvet', 'Diamond Polished'],
    bestUses: 'Architectural wet bars, dramatic powder rooms, hearth plinths',
    // Actual raw slab specimen
    image: "/King’s Social Media/IMG_7701.webp",
    detailImage: "/King’s Social Media/369e1b63-ec7b-4c34-8678-7a273c6dda41.webp",
    veinDescription:
      'Midnight charcoal field shattered by lightning-like calcite fractures and warm oxidized mineral traces.',
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal Quartzite',
    origin: 'Ceará, Brazil',
    type: 'Natural Hard Quartzite',
    bg: '#F1E9DA',
    accent: '#C58A3D',
    text: '#1C1A17',
    textMuted: '#6E665B',
    line: '#DACFBC',
    glow: 'rgba(197, 138, 61, 0.25)',
    isDark: false,
    thickness: '3cm Solid / 6cm Apron',
    finishes: ['Tactile Leathered', 'Honed', 'Polished'],
    bestUses: 'Heavy-traffic culinary islands, outdoor covered chef stations, pantry counters',
    // Actual raw slab specimen
    image: "/King’s Social Media/IMG_2557.webp",
    detailImage: "/King’s Social Media/15d5ac9c-3e7e-4067-ac7d-9f5379ac1173.webp",
    veinDescription:
      'Warm clotted-cream and sand waves infused with translucent quartz crystal clusters. Mohs-7 hardness.',
  },
  {
    id: 'backlit-onyx',
    name: 'Patagonia Backlit Onyx',
    origin: 'Espírito Santo, Brazil',
    type: 'Translucent Exotic Quartzite',
    bg: '#14100F',
    accent: '#D9954A',
    glowAccent: '#7A5BD0',
    text: '#F2EDE7',
    textMuted: '#A0968C',
    line: '#312724',
    glow: 'rgba(122, 91, 208, 0.45)',
    isDark: true,
    thickness: '2cm (LED Panel Adapted)',
    finishes: ['High Polish Resinated'],
    bestUses: 'LED-backlit statement islands, hospitality bar fronts, executive lounges',
    // Actual raw backlit slab specimen
    image: "/King’s Social Media/IMG_7718.webp",
    detailImage: "/King’s Social Media/29179780-ec27-4a2c-9b2b-80932b83c32e.webp",
    veinDescription:
      'Brecciated quartz clasts and volcanic obsidian islands that illuminate with a deep amber-violet radiance under 2700K rear LED arrays.',
  },
  {
    id: 'bianco-superiore',
    name: 'Bianco Superiore',
    origin: 'Bahia, Brazil',
    type: 'Crystalline Quartzite',
    bg: '#F3EFE9',
    accent: '#9A8E7D',
    text: '#1B1A18',
    textMuted: '#6A655C',
    line: '#D7D0C4',
    glow: 'rgba(154, 142, 125, 0.22)',
    isDark: false,
    thickness: '3cm',
    finishes: ['Satin Honed', 'Polished'],
    bestUses: 'Modernist waterfall perimeters, seamless chef stations',
    // Actual raw slab specimen
    image: "/King’s Social Media/IMG_7698.webp",
    detailImage: "/King’s Social Media/37f7fe75-cfba-4b13-a4d5-50f462dc972b.webp",
    veinDescription:
      'Subtle linear platinum strata flowing across pure snow crystal ground. Acid, heat, and scratch immune.',
  },
  {
    id: 'titanium-cosmic',
    name: 'Titanium Cosmic Granite',
    origin: 'Minas Gerais, Brazil',
    type: 'Deep Metamorphic Granite',
    bg: '#0D0E10',
    accent: '#B09A6E',
    text: '#ECEBE7',
    textMuted: '#92928E',
    line: '#25262A',
    glow: 'rgba(176, 154, 110, 0.20)',
    isDark: true,
    thickness: '3cm',
    finishes: ['Deep Leathered', 'Flame Textured'],
    bestUses: 'Outdoor hurricane-grade grilling stations, monolithic fireplace surrounds',
    // Actual raw slab specimen
    image: "/King’s Social Media/10778277328_IMG_0017.webp",
    detailImage: "/King’s Social Media/18002a95-8d46-4866-bf82-42a028c2fc7a.webp",
    veinDescription:
      'Cosmic swirls of mica silver, bronze feldspar, and black hornblende resistant to all thermal shock.',
  },
];

const StoneThemeContext = createContext({
  activeStone: STONE_THEMES[0],
  setStoneById: () => {},
  isTransitioning: false,
});

export const StoneThemeProvider = ({ children }) => {
  const [activeStone, setActiveStone] = useState(STONE_THEMES[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const applyThemeTokens = (stone) => {
    const root = document.documentElement;
    root.style.setProperty('--bg', stone.bg);
    root.style.setProperty('--text', stone.text);
    root.style.setProperty('--text-muted', stone.textMuted);
    root.style.setProperty('--line', stone.line);
    root.style.setProperty('--accent', stone.accent);
    root.style.setProperty('--glow', stone.glow);
    if (stone.glowAccent) {
      root.style.setProperty('--glow-accent', stone.glowAccent);
    } else {
      root.style.setProperty('--glow-accent', 'transparent');
    }
  };

  const setStoneById = (id) => {
    const found = STONE_THEMES.find((s) => s.id === id);
    if (!found || found.id === activeStone.id) return;

    setIsTransitioning(true);
    setActiveStone(found);
    applyThemeTokens(found);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  useEffect(() => {
    applyThemeTokens(activeStone);
  }, []);

  return (
    <StoneThemeContext.Provider value={{ activeStone, setStoneById, isTransitioning }}>
      {children}
    </StoneThemeContext.Provider>
  );
};

export const useStoneTheme = () => useContext(StoneThemeContext);
