import React, { createContext, useContext, useState, useEffect } from 'react';

export const STONE_THEMES = [
  {
    id: 'calacatta',
    name: 'Mont Blanc Kitchen Island',
    origin: 'Espírito Santo, Brazil',
    type: 'Estate Kitchen & Backsplash',
    bg: '#0E0E10',
    accent: '#FAB502',
    text: '#F4F2EE',
    textMuted: '#A3A09A',
    line: '#242427',
    glow: 'rgba(250, 181, 2, 0.14)',
    isDark: true,
    image: "/King’s Social Media/kitchen-mont-blanc-island-backsplash-01.webp",
    veinDescription:
      'Sunlit white chef’s kitchen featuring a sprawling Mont Blanc Quartzite island and matching full-height slab backsplash with sweeping diagonal charcoal veining.',
  },
  {
    id: 'nero-marquina',
    name: 'Copacabana Fireplace Wall',
    origin: 'Minas Gerais, Brazil',
    type: 'Bookmatched Linear Hearth',
    bg: '#0A0A0B',
    accent: '#FAB502',
    text: '#EDEDED',
    textMuted: '#9E9E9E',
    line: '#222225',
    glow: 'rgba(250, 181, 2, 0.14)',
    isDark: true,
    image: "/King’s Social Media/fireplace-bookmatched-copacabana-hearth-01.webp",
    veinDescription:
      'Floor-to-ceiling bookmatched black-and-white Copacabana Granite fireplace surround framed by custom dark millwork and an integrated linear firebox.',
  },
  {
    id: 'taj-mahal',
    name: 'Patagonia Waterfall Island',
    origin: 'Bahia, Brazil',
    type: 'Mitered Waterfall Kitchen',
    bg: '#11100F',
    accent: '#FAB502',
    text: '#F5F2EC',
    textMuted: '#A59F96',
    line: '#282523',
    glow: 'rgba(250, 181, 2, 0.14)',
    isDark: true,
    image: "/King’s Social Media/waterfall-patagonia-exotic-island-01.webp",
    veinDescription:
      'Monumental 45-degree mitered waterfall island in exotic Brazilian quartzite with translucent quartz crystals, warm gold veins, and matching range backsplash.',
  },
  {
    id: 'backlit-onyx',
    name: 'Backlit Amber Onyx Island',
    origin: 'Brazil',
    type: 'LED-Illuminated Quartzite',
    bg: '#131110',
    accent: '#FAB502',
    glowAccent: '#FAB502',
    text: '#F2EDE7',
    textMuted: '#A59D94',
    line: '#2D2522',
    glow: 'rgba(250, 181, 2, 0.22)',
    isDark: true,
    image: "/King’s Social Media/kitchen-backlit-amber-quartzite-island-01.webp",
    veinDescription:
      'Translucent natural stone kitchen island illuminated from within by warm rear LED panels, casting an amber-gold glow across the dining room.',
  },
  {
    id: 'bianco-superiore',
    name: 'Calacatta Bookmatched Spa',
    origin: 'Carrara, Italy',
    type: 'Primary Bath Sanctuary',
    bg: '#0F0F12',
    accent: '#FAB502',
    text: '#F0EFF4',
    textMuted: '#9B9AA2',
    line: '#26262B',
    glow: 'rgba(250, 181, 2, 0.14)',
    isDark: true,
    image: "/King’s Social Media/bathroom-freestanding-tub-bookmatch-spa-01.webp",
    veinDescription:
      'Floor-to-ceiling bookmatched Italian marble walls and matching polished floor surrounding a freestanding soaking tub and walk-in steam shower.',
  },
  {
    id: 'titanium-cosmic',
    name: 'Outdoor Granite Waterfront Bar',
    origin: 'Minas Gerais, Brazil',
    type: 'Al Fresco Outdoor Kitchen',
    bg: '#0B0C0E',
    accent: '#FAB502',
    text: '#ECEBE7',
    textMuted: '#979793',
    line: '#222428',
    glow: 'rgba(250, 181, 2, 0.14)',
    isDark: true,
    image: "/King’s Social Media/outdoor-waterfront-black-granite-bar-01.webp",
    veinDescription:
      'Weather-resistant dark granite outdoor grilling station and raised waterfront bar overlooking the Gulf Coast.',
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
