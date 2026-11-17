import allImagesList from './allImages.json';

const BASE_PATH = "/King’s Social Media/";

// Encode filenames safely for browser URLs (handles spaces, symbols, etc.)
export const formatImagePath = (filename) => `${BASE_PATH}${encodeURIComponent(filename)}`;

export const MEDIA_ASSETS = {
  logo: '/logo.webp',
  favicon: '/favicon.png',
  heroKitchen: formatImagePath('kitchen-mont-blanc-island-backsplash-01.webp'),
  heroAlternate: formatImagePath('kitchen-fluted-oak-island-wolf-range-01.webp'),
  heroIsland: formatImagePath('waterfall-patagonia-exotic-island-01.webp'),
  truckGraphic: formatImagePath('atelier-kings-marble-fleet-truck-01.webp'),
  workshop: formatImagePath('atelier-kings-1848-industrial-blvd-sign-01.webp'),
  craftsman: formatImagePath('slab-kings-carved-marble-crown-sculpture-01.webp'),
  stoneYard: formatImagePath('atelier-kings-harvey-monument-sign-01.webp'),
};

const CATEGORY_PREFIX_MAP = [
  { prefix: 'kitchen-', category: 'Kitchens' },
  { prefix: 'waterfall-', category: 'Waterfall Islands' },
  { prefix: 'bathroom-', category: 'Bathrooms & Vanities' },
  { prefix: 'fireplace-', category: 'Fireplaces & Staircases' },
  { prefix: 'staircase-', category: 'Fireplaces & Staircases' },
  { prefix: 'outdoor-', category: 'Outdoor Kitchens & Bars' },
  { prefix: 'commercial-', category: 'Commercial & Wine Lounges' },
  { prefix: 'slab-kings-', category: 'Showroom & Sculpture' },
  { prefix: 'atelier-', category: 'Showroom & Sculpture' },
  { prefix: 'slab-', category: 'Stone Slabs & Quarry' },
];

function formatTitleFromFilename(filename) {
  const base = filename.replace(/\.webp$/i, '').replace(/-\d+$/, '');
  const parts = base.split('-');
  return parts
    .slice(1)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// Curated 112 visually verified & semantically categorized images
export const GALLERY_IMAGES = allImagesList.map((filename, index) => {
  const matched = CATEGORY_PREFIX_MAP.find((m) => filename.startsWith(m.prefix));
  const category = matched ? matched.category : 'Kitchens';

  return {
    id: `img-${index + 1}`,
    filename,
    src: formatImagePath(filename),
    title: formatTitleFromFilename(filename),
    category,
  };
});

export const SERVICES = [
  {
    id: 'kitchen-countertops',
    title: 'Custom Kitchen Countertops',
    subtitle: 'Heart of the Home',
    image: formatImagePath('kitchen-mont-blanc-island-backsplash-01.webp'),
    description:
      'Precision-engineered stone countertops tailored to your culinary space. From bookmatched islands to seamless perimeter counters, crafted to withstand everyday living with effortless elegance.',
    features: ['Laser digital templating for 1/16" accuracy', 'Custom sink cutouts and integrated drainboards', 'Continuous vein flow across seams'],
  },
  {
    id: 'waterfall-islands',
    title: 'Mitered Waterfall Islands',
    subtitle: 'Architectural Showpiece',
    image: formatImagePath('waterfall-patagonia-exotic-island-01.webp'),
    description:
      'Statement waterfall edges where the stone seamlessly cascades down the cabinetry sides. Mitered 45-degree joints ensure undisturbed vein continuation from top to floor.',
    features: ['Seamless 45° vein-matched miter joins', 'Sub-surface reinforced structural support', 'Custom apron thickness from 2cm to 8cm'],
  },
  {
    id: 'full-height-backsplashes',
    title: 'Full-Height Slab Backsplashes',
    subtitle: 'Grout-Free Luxury',
    image: formatImagePath('kitchen-backlit-hood-wolf-range-01.webp'),
    description:
      'Elevate your kitchen by extending the identical natural stone slab up the wall to the upper cabinets or ceiling, creating a monolithic, easy-to-clean design statement.',
    features: ['Perfect vertical vein alignment with counters', 'Precision cutouts for electrical receptacles', 'Zero grout lines for pristine maintenance'],
  },
  {
    id: 'bathroom-vanities',
    title: 'Master Baths & Floating Vanities',
    subtitle: 'Spa Sanctuary',
    image: formatImagePath('bathroom-freestanding-tub-bookmatch-spa-01.webp'),
    description:
      'Transform master ensuites with custom floating stone vanities, bookmatched shower walls, curbless thresholds, and custom stone ramp or trough sinks.',
    features: ['Integrated stone ramp sinks', 'Waterproof moisture barrier installation', 'Polished edge detailing on all exposed sides'],
  },
  {
    id: 'fireplaces-surrounds',
    title: 'Floor-to-Ceiling Fireplaces',
    subtitle: 'Focal Point',
    image: formatImagePath('fireplace-bookmatched-copacabana-hearth-01.webp'),
    description:
      'Dramatic stone fireplace surrounds, hearths, and full-height cladded feature walls engineered for heat tolerance and arresting visual presence.',
    features: ['High-temperature rated adhesives', 'Floor-to-ceiling bookmatched panels', 'Concealed anchoring systems'],
  },
  {
    id: 'outdoor-kitchens',
    title: 'Outdoor Chef Stations & Bars',
    subtitle: 'Al Fresco Living',
    image: formatImagePath('outdoor-curved-black-gold-granite-bar-01.webp'),
    description:
      'Weather-resistant granite and quartzite countertops specifically chosen to endure freeze-thaw cycles and UV exposure without fading or degrading.',
    features: ['UV and weather-resistant natural stone', 'Built-in grill and appliance cutouts', 'Leathered and honed tactile finishes'],
  },
];

export const STONES = [
  {
    id: 'thassos-pure-white',
    name: 'Thassos Pure White',
    category: 'Marble',
    origin: 'Thassos, Greece',
    image: formatImagePath('bathroom-dressing-suite-white-island-01.webp'),
    priceLevel: 'Luxury Reserve',
    description: 'Pristine, ultra-refined crystal-white marble with mirror-like clarity and luminous light reflectivity. Showcased in this bespoke primary dressing suite as a centerpiece island credenza under a crystal waterfall chandelier.',
    bestFor: 'Walk-In Dressing Islands, Luxury Vanities, Boutique Ensuites',
  },
  {
    id: 'mont-blanc-quartzite',
    name: 'Mont Blanc Quartzite',
    category: 'Quartzite',
    origin: 'Espírito Santo, Brazil',
    image: formatImagePath('kitchen-mont-blanc-island-backsplash-01.webp'),
    priceLevel: 'Luxury Reserve',
    description: 'Luminous alpine-white background crossed by sweeping diagonal rivers of charcoal, platinum, and dove-grey veining. Featured on an expansive central culinary island with a matching full-height continuous slab backsplash and brass lantern fixtures.',
    bestFor: 'Monumental Chef Islands, Full-Height Slab Backsplashes, Luxury Open Kitchens',
  },
  {
    id: 'patagonia-exotic',
    name: 'Patagonia Exotic Quartzite',
    category: 'Quartzite',
    origin: 'Bahia, Brazil',
    image: formatImagePath('waterfall-patagonia-exotic-island-01.webp'),
    priceLevel: 'Exotic Reserve',
    description: 'Nature’s most theatrical stone: translucent quartz crystals, rich amber-gold filaments, and dark tourmaline mineral clusters. Captured in an extraordinary mitered waterfall island where the veining flows seamlessly down to the floor under ambient cove lighting.',
    bestFor: 'Mitered Waterfall Islands, Translucent Backlit Features, Statement Culinary Showpieces',
  },
  {
    id: 'copacabana-granite',
    name: 'Copacabana Exotic Granite',
    category: 'Granite',
    origin: 'Minas Gerais, Brazil',
    image: formatImagePath('fireplace-bookmatched-copacabana-hearth-01.webp'),
    priceLevel: 'Exotic Reserve',
    description: 'Dramatic high-contrast Brazilian granite featuring deep obsidian black bedrock swept by surging rivers of pure white and silver quartz. Photographed here as a floor-to-ceiling bookmatched fireplace surround with an integrated linear firebox and custom dark millwork.',
    bestFor: 'Bookmatched Fireplace Surrounds, High-Drama Feature Walls, Monolithic Great Rooms',
  },
  {
    id: 'taj-mahal-quartzite',
    name: 'Taj Mahal Quartzite',
    category: 'Quartzite',
    origin: 'Ceará, Brazil',
    image: formatImagePath('kitchen-fluted-oak-island-wolf-range-01.webp'),
    priceLevel: 'Premier Choice',
    description: 'Warm creamy tones and translucent champagne filaments with the diamond-hard resilience of 100% natural quartzite. Exhibited here on an organic fluted white oak island with brushed brass fittings and a matching full-height range backsplash behind a Wolf commercial cooktop.',
    bestFor: 'Fluted & Natural Oak Islands, Heavy-Use Chef Countertops, Full-Height Range Backsplashes',
  },
  {
    id: 'calacatta-gold-bookmatch',
    name: 'Calacatta Gold Bookmatch',
    category: 'Marble',
    origin: 'Carrara, Italy',
    image: formatImagePath('bathroom-freestanding-tub-bookmatch-spa-01.webp'),
    priceLevel: 'Luxury Reserve',
    description: 'Prestige Italian marble with bold, symmetrical graphite and honey-gold ribbon veining mirrored in a seamless bookmatch. Installed floor-to-ceiling across the walls and polished floors of an opulent primary spa retreat with a freestanding soaking tub.',
    bestFor: 'Bookmatched Spa Feature Walls, Luxury Bath Ensuites, Freestanding Tub Sanctuaries',
  },
  {
    id: 'cristallo-translucent',
    name: 'Cristallo Backlit Quartzite',
    category: 'Quartzite',
    origin: 'Minas Gerais, Brazil',
    image: formatImagePath('slab-cristallo-backlit-amber-veins-01.webp'),
    priceLevel: 'Museum Grade',
    description: 'Pure crystalline quartz bedrock illuminated from behind, highlighting fiery copper-amber and rust lightning fractures coursing through translucent ice crystal. Photographed in an illuminated gallery display frame.',
    bestFor: 'Backlit Island Fronts, Illuminated Luxury Bars, Translucent Wall Slabs',
  },
  {
    id: 'black-forest-bookmatch',
    name: 'Black Forest Diamond Bookmatch',
    category: 'Granite',
    origin: 'Espírito Santo, Brazil',
    image: formatImagePath('slab-black-forest-4way-diamond-bookmatch-01.webp'),
    priceLevel: 'Masterpiece Reserve',
    description: 'A flawless 4-way diamond bookmatch slab composition where four consecutive sister cuts meet to form a hypnotic concentric geometric diamond pattern in alternating charcoal, slate, and crystalline white strata.',
    bestFor: 'Architectural Feature Walls, Private Wine Cellars, Statement Foyer Murals',
  },
];

export const EDGE_PROFILES = [
  {
    id: 'eased',
    name: 'Eased & Polished',
    subtitle: 'Clean Architectural Standard',
    desc: 'A clean 90-degree edge softened with a subtle 1/8" top and bottom chamfer for a sleek contemporary profile.',
  },
  {
    id: 'mitered',
    name: 'Mitered Waterfall Edge (2" to 3")',
    subtitle: 'Dramatic Luxury Build-Up',
    desc: 'Precision 45-degree angle cut seamlessly joining horizontal and vertical slabs to simulate a monumental solid stone block.',
  },
  {
    id: 'half-bullnose',
    name: 'Half Bullnose',
    subtitle: 'Soft Fluid Curve',
    desc: 'Smooth rounded upper edge that directs spills away from cabinets while showcasing slab thickness.',
  },
  {
    id: 'ogee',
    name: 'Classic Ogee',
    subtitle: 'Timeless Roman Molding',
    desc: 'An elegant S-shaped curve that brings traditional architectural grandeur to grand islands and master baths.',
  },
  {
    id: 'bevel',
    name: 'Architectural Bevel',
    subtitle: 'Geometric Facet',
    desc: 'A sharp 45-degree cut along the top perimeter that catches overhead pendant lighting with crisp definition.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Private Consultation & Stone Selection',
    description:
      'Explore our curated indoor slab yard. Walk among hand-picked blocks of Italian marble, quartzite, and granite with our master stone consultant.',
  },
  {
    number: '02',
    title: 'Sub-Millimeter Digital Templating',
    description:
      'Our technicians visit your property with state-of-the-art Prodim laser scanners to create a flawless 3D digital model of your cabinetry and walls.',
  },
  {
    number: '03',
    title: '5-Axis CNC Waterjet Fabrication',
    description:
      'We digitally lay out your slabs so dramatic veins flow seamlessly across waterfalls and corners, then cut them with diamond CNC waterjets.',
  },
  {
    number: '04',
    title: 'White-Glove Installation & Sealing',
    description:
      'Our bonded master craftsman team levels, anchors, color-matches seams with specialized epoxy, and applies our commercial-grade 15-year fluoropolymer sealer.',
  },
];

export const COMPANY_INFO = {
  name: "King's Marble & Granite",
  phone: "(504) 723-7898",
  phoneRaw: "+15047237898",
  email: "estimating@kingsmarbleandgranite.com",
  address: "1848 Industrial Blvd",
  cityStateZip: "Harvey, LA 70058, United States",
  fullAddress: "1848 Industrial Blvd, Harvey, LA 70058",
  hours: "Mon – Sat: 8:00 AM – 5:00 PM",
  sundayHours: "Closed",
  googleMapsUrl: "https://maps.app.goo.gl/dkJQrof9kvrVG4mLA",
  instagramUrl: "https://www.instagram.com/kingmarble06?vrfl=ZWl4M2NuZTEzOGEw",
  instagramHandle: "@kingmarble06",
};
