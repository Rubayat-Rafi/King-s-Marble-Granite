import allImagesList from './allImages.json';

const BASE_PATH = "/King’s Social Media/";

// Encode filenames safely for browser URLs (handles spaces, symbols, etc.)
export const formatImagePath = (filename) => `${BASE_PATH}${encodeURIComponent(filename)}`;

export const MEDIA_ASSETS = {
  logo: '/logo.webp',
  favicon: '/favicon.png',
  // Hero: Beautiful real finished kitchen countertop shot
  heroKitchen: formatImagePath('IMG_7690.webp'),
  heroAlternate: formatImagePath('IMG_7696.webp'),
  heroIsland: formatImagePath('IMG_7718.webp'),
  truckGraphic: formatImagePath('10777776448_IMG_0223.webp'),
  workshop: formatImagePath('IMG_7693.webp'),
  craftsman: formatImagePath('IMG_7691.webp'),
  stoneYard: formatImagePath('15d5ac9c-3e7e-4067-ac7d-9f5379ac1173.webp'),
};

// All 125 curated images from your public directory with categorized metadata
export const GALLERY_IMAGES = allImagesList.map((filename, index) => {
  let category = 'Kitchens';
  if (index % 5 === 1) category = 'Waterfall Islands';
  else if (index % 5 === 2) category = 'Bathrooms & Vanities';
  else if (index % 5 === 3) category = 'Stone Slabs & Vein Flow';
  else if (index % 5 === 4) category = 'Outdoor & Commercial';

  return {
    id: `img-${index + 1}`,
    filename,
    src: formatImagePath(filename),
    title: `Custom Stone Installation #${index + 1}`,
    category,
  };
});

export const SERVICES = [
  {
    id: 'kitchen-countertops',
    title: 'Custom Kitchen Countertops',
    subtitle: 'Heart of the Home',
    image: formatImagePath('IMG_7690.webp'),
    description:
      'Precision-engineered stone countertops tailored to your culinary space. From bookmatched islands to seamless perimeter counters, crafted to withstand everyday living with effortless elegance.',
    features: ['Laser digital templating for 1/16" accuracy', 'Custom sink cutouts and integrated drainboards', 'Continuous vein flow across seams'],
  },
  {
    id: 'waterfall-islands',
    title: 'Mitered Waterfall Islands',
    subtitle: 'Architectural Showpiece',
    image: formatImagePath('IMG_7713.webp'),
    description:
      'Statement waterfall edges where the stone seamlessly cascades down the cabinetry sides. Mitered 45-degree joints ensure undisturbed vein continuation from top to floor.',
    features: ['Seamless 45° vein-matched miter joins', 'Sub-surface reinforced structural support', 'Custom apron thickness from 2cm to 8cm'],
  },
  {
    id: 'full-height-backsplashes',
    title: 'Full-Height Slab Backsplashes',
    subtitle: 'Grout-Free Luxury',
    image: formatImagePath('IMG_7718.webp'),
    description:
      'Elevate your kitchen by extending the identical natural stone slab up the wall to the upper cabinets or ceiling, creating a monolithic, easy-to-clean design statement.',
    features: ['Perfect vertical vein alignment with counters', 'Precision cutouts for electrical receptacles', 'Zero grout lines for pristine maintenance'],
  },
  {
    id: 'bathroom-vanities',
    title: 'Master Baths & Floating Vanities',
    subtitle: 'Spa Sanctuary',
    image: formatImagePath('IMG_7692.webp'),
    description:
      'Transform master ensuites with custom floating stone vanities, bookmatched shower walls, curbless thresholds, and custom stone ramp or trough sinks.',
    features: ['Integrated stone ramp sinks', 'Waterproof moisture barrier installation', 'Polished edge detailing on all exposed sides'],
  },
  {
    id: 'fireplaces-surrounds',
    title: 'Floor-to-Ceiling Fireplaces',
    subtitle: 'Focal Point',
    image: formatImagePath('IMG_7715.webp'),
    description:
      'Dramatic stone fireplace surrounds, hearths, and full-height cladded feature walls engineered for heat tolerance and arresting visual presence.',
    features: ['High-temperature rated adhesives', 'Floor-to-ceiling bookmatched panels', 'Concealed anchoring systems'],
  },
  {
    id: 'outdoor-kitchens',
    title: 'Outdoor Chef Stations & Bars',
    subtitle: 'Al Fresco Living',
    image: formatImagePath('10778015280_IMG_0146.webp'),
    description:
      'Weather-resistant granite and quartzite countertops specifically chosen to endure freeze-thaw cycles and UV exposure without fading or degrading.',
    features: ['UV and weather-resistant natural stone', 'Built-in grill and appliance cutouts', 'Leathered and honed tactile finishes'],
  },
];

export const STONES = [
  {
    id: 'calacatta-gold',
    name: 'Calacatta Michelangelo',
    category: 'Marble',
    origin: 'Carrara, Italy',
    image: formatImagePath('IMG_7694.webp'),
    priceLevel: 'Luxury Reserve',
    description: 'Crisp white alabaster field accented by luminous champagne-gold and smoky grey veining.',
    bestFor: 'Signature Kitchen Islands, Master Vanities',
  },
  {
    id: 'nero-marquina',
    name: 'Obsidian Noir',
    category: 'Marble',
    origin: 'Markina, Spain',
    image: formatImagePath('IMG_7701.webp'),
    priceLevel: 'Premium',
    description: 'Deep midnight obsidian stone punctuated by striking, lightning-like white and bronze veins.',
    bestFor: 'Wet Bars, Powder Rooms, Fireplace Mantels',
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal Quartzite',
    category: 'Quartzite',
    origin: 'Ceará, Brazil',
    image: formatImagePath('IMG_2557.webp'),
    priceLevel: 'Premier Choice',
    description: 'Warm cream and amber waves with crystalline translucency and the unmatched durability of pure quartzite.',
    bestFor: 'High-Traffic Kitchens, Butler Pantries',
  },
  {
    id: 'titanium-granite',
    name: 'Titanium Cosmic',
    category: 'Granite',
    origin: 'Minas Gerais, Brazil',
    image: formatImagePath('10778277328_IMG_0017.webp'),
    priceLevel: 'Heritage',
    description: 'Dramatic black and dark grey canvas brushed with swirling rivers of quartz, mica, and gold.',
    bestFor: 'Outdoor Kitchens, Statement Entertaining Bars',
  },
  {
    id: 'statuary-classic',
    name: 'Statuario Imperial',
    category: 'Marble',
    origin: 'Carrara, Italy',
    image: formatImagePath('IMG_7719.webp'),
    priceLevel: 'Luxury Reserve',
    description: 'Luminous silver-white stone with bold, sculptural graphite ribbons favored by classical sculptors.',
    bestFor: 'Waterfall Edge Islands, Full-Height Backsplashes',
  },
  {
    id: 'honed-bianco',
    name: 'Bianco Superiore',
    category: 'Quartzite',
    origin: 'Espírito Santo, Brazil',
    image: formatImagePath('IMG_7698.webp'),
    priceLevel: 'Premier Choice',
    description: 'Soft porcelain-white ground with subtle linear platinum veining. Scratch, heat, and acid-etch immune.',
    bestFor: 'Chef Kitchens, Waterfall Islands',
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
