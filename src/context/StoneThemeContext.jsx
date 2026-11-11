import React, { createContext, useContext, useState, useEffect } from 'react';

export const STONE_THEMES = [
  {
    id: 'calacatta',
    name: 'Calacatta Michelangelo',
    origin: 'Carrara, Italy',
    type: 'Classic Italian Marble',
    bg: '#0E0E10',
    accent: '#FAB502',
    text: '#F4F2EE',
    textMuted: '#A3A09A',
    line: '#242427',
    glow: 'rgba(250, 181, 2, 0.14)',
    isDark: true,
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
    bg: '#0A0A0B',
    accent: '#FAB502',
    text: '#EDEDED',
    textMuted: '#9E9E9E',
    line: '#222225',
    glow: 'rgba(250, 181, 2, 0.14)',
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
    bg: '#11100F',
    accent: '#FAB502',
    text: '#F5F2EC',
    textMuted: '#A59F96',
    line: '#282523',
    glow: 'rgba(250, 181, 2, 0.14)',
    isDark: true,
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
    bg: '#131110',
    accent: '#FAB502',
    glowAccent: '#FAB502',
    text: '#F2EDE7',
    textMuted: '#A59D94',
    line: '#2D2522',
    glow: 'rgba(250, 181, 2, 0.22)',
    isDark: true,
    thickness: '2cm (LED Panel Adapted)',
    finishes: ['High Polish Resinated'],
    bestUses: 'LED-backlit statement islands, hospitality bar fronts, executive lounges',
    // Actual raw backlit slab specimen
    image: "/King’s Social Media/IMG_7718.webp",
    detailImage: "/King’s Social Media/29179780-ec27-4a2c-9b2b-80932b83c32e.webp",
    veinDescription:
      'Brecciated quartz clasts and volcanic obsidian islands that illuminate with a deep amber-gold radiance under 2700K rear LED arrays.',
  },
  {
    id: 'bianco-superiore',
    name: 'Bianco Superiore',
    origin: 'Bahia, Brazil',
    type: 'Crystalline Quartzite',
    bg: '#0F0F12',
    accent: '#FAB502',
    text: '#F0EFF4',
    textMuted: '#9B9AA2',
    line: '#26262B',
    glow: 'rgba(250, 181, 2, 0.14)',
    isDark: true,
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
    bg: '#0B0C0E',
    accent: '#FAB502',
    text: '#ECEBE7',
    textMuted: '#979793',
    line: '#222428',
    glow: 'rgba(250, 181, 2, 0.14)',
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
