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

export const GALLERY_CATEGORIES = {
  Kitchens: [
    '18002a95-8d46-4866-bf82-42a028c2fc7a.webp',
    '241db44b-47d7-415b-93f5-11e8aeb3da39.webp',
    '2977f251-ed85-4cf5-a768-b812e8052977.webp',
    '32cdc14f-4301-4559-bafc-f96d03f9f59c.webp',
    '451eb5cb-3461-4e5a-a322-63567fb4667d.webp',
    '4a1e2360-ee9f-4a03-be0b-e0e730f26569.webp',
    '67e58009-70b2-4292-89d9-f57db420aff1.webp',
    '74b87986-ce1d-411a-a7e5-46f7c5740409.webp',
    '75589b5d-afe0-40d3-b66f-de5a0dcee777.webp',
    '781546f5-3ce6-488c-af7e-cb17669bb271.webp',
    '822cd93e-2175-4867-b896-420694997688.webp',
    '8ee1b6b5-879f-45af-ad02-43ba5667668c.webp',
    '9ae39905-9a3a-47bc-b188-2faae3dcec3b.webp',
    'b13cc9e4-3fd5-42e6-9672-1bad2980afbe.webp',
    'c2b2e843-67e3-453b-8517-ae3e3462459b.webp',
    'cec73999-da63-445d-a401-4a6f3f8148c6.webp',
    'd0dc03ca-da3e-4787-a8a6-7fe1e3bad511.webp',
    'd225c451-297e-473f-99f2-207549b6f07a.webp',
    'd558123c-021c-487c-84a7-1db41443e350.webp',
    'dd52d5f9-db08-4ce1-b4fd-dcd86c1b8d71.webp',
    'e1732186-0f93-4228-a48f-2b67bea6e548.webp',
    'e70bbfbf-a110-4a02-9768-9807ccae9a4b.webp',
    'e810ab13-0cb5-458b-af40-73628b0c0af0.webp',
    'f9f436bb-283e-4c15-97db-8e25f3771de0.webp',
    'IMG_2508.webp',
    'IMG_2556.webp',
    'IMG_2558.webp',
    'IMG_2567.webp',
    'IMG_2568.webp',
    'IMG_2569.webp',
    'IMG_2570.webp',
    'IMG_2571.webp',
    'IMG_2572.webp',
    'IMG_2573.webp',
    'IMG_2574.webp',
    'IMG_7691.webp',
    'IMG_7692.webp',
    'IMG_7699.webp',
    'IMG_7700.webp',
    'IMG_7701.webp',
    'IMG_7705.webp',
    'IMG_7706.webp',
    'IMG_7707.webp',
    'IMG_7708.webp',
    'IMG_7718.webp',
    'IMG_7719.webp',
    'IMG_7720.webp',
  ],
  'Waterfall Islands': [
    '00ba1c0c-ac8c-4237-a857-f166671cd9db.webp',
    '04db3663-26d9-4661-9050-ef4a42421891.webp',
    '0c6d9a7a-37f7-42a6-9bef-a07b974f2482.webp',
    '0d1a1341-84ae-4a46-a532-f75aa689aea1.webp',
    '2d390b8a-e3fe-4b83-8cc6-14ee1105419a.webp',
    '5a4d5ca7-3eb7-4002-946a-b04519c19ae6.webp',
    '6e9ffefc-d490-4fb2-b25f-ded1da3aa921.webp',
    'a3a527d8-56e9-4389-a156-45c748d488b9.webp',
    'bd2719a1-6220-4fb1-be0e-9fa5018dd1ac.webp',
    'c670f735-a339-4d05-bba8-4f3208f19008.webp',
    'e2b6829b-c990-46d8-8462-ea332bbd1922.webp',
    'fbe1ebac-f193-4c4d-a972-ce0f311d9deb.webp',
    'IMG_2519.webp',
    'IMG_2557.webp',
  ],
  'Bathrooms & Vanities': [
    '07a0f903-c20e-4cc4-938e-fec4d71f8a8a.webp',
    '107c197d-665a-4a27-952a-0a3136e94436.webp',
    '3b58bc77-4b81-4ac7-8e1c-b04522c52ddc.webp',
    '42c95895-e275-4c10-80b8-6f234c72c7dc.webp',
    '4ef53ad6-e9c7-4b87-9a7b-b875dffc2fe7.webp',
    '4f7fdabc-8948-4aab-b114-b57a5a9a004f.webp',
    '8c18b03c-7ccc-4ecc-a6ba-40ffd6dea2f5.webp',
    'a63eb770-9808-4bf4-991a-cd1ca0be2fc4.webp',
    'b1a90372-2d38-4ed5-b603-d4af1203252f.webp',
    'b508aba0-5690-4470-ac77-8ce7c3e7180e.webp',
    'e91a8ed5-534a-48ed-bd84-14e766ed142a.webp',
    'f14d1d49-dcd2-4cb3-9eee-4f56235dbd96.webp',
    'f779a185-1dc5-404c-918e-f88c6ad970ae.webp',
    'IMG_2514.webp',
    'IMG_2561.webp',
    'IMG_7693.webp',
    'IMG_7694.webp',
    'IMG_7696.webp',
    'IMG_7702.webp',
    'IMG_7703.webp',
    'IMG_7704.webp',
    'IMG_7697.webp',
    'IMG_7698.webp',
    'IMG_7709.webp',
    'IMG_7710.webp',
  ],
  'Stairs & Railings': [
    '46b714be-5c7e-45b2-9771-d5e6e5ba7693.webp',
    'IMG_2506.webp',
    'IMG_2507.webp',
    'IMG_2564.webp',
    'IMG_2565.webp',
    'IMG_2566.webp',
  ],
  'Feature Walls & Fireplaces': [
    '369e1b63-ec7b-4c34-8678-7a273c6dda41.webp',
    '3a4f499a-a7da-47d7-a4eb-9e015653e63f.webp',
    '78f54248-9817-43ad-8592-c9dbf0278524.webp',
    '7d1e661e-b0a7-4db1-9d7e-b2bbbe1e5de7.webp',
    '968605c2-a0f3-4ec8-b760-31411b274f9f.webp',
    'a8ba011a-1cb9-4440-95c8-022b9c38ab4a.webp',
    'IMG_7690.webp',
  ],
  'Outdoor Installations': [
    '29179780-ec27-4a2c-9b2b-80932b83c32e.webp',
    '45af0d9c-1ce1-4606-8bb1-26c47bdb6cec.webp',
    '7b336ce0-bbff-402f-b724-465b77bc6c17.webp',
    'bc6a7467-ebe4-4a7e-82e4-1ec6f9f28e2d.webp',
    'c29bf206-b926-44b3-a020-001584124c61.webp',
    'IMG_2575.webp',
  ],
  'Commercial & Hospitality': [
    'IMG_7695.webp',
    'IMG_7712.webp',
    'IMG_7713.webp',
    'IMG_7714.webp',
    'IMG_7715.webp',
    'IMG_7716.webp',
    'IMG_7717.webp',
  ],
  'Stone Slabs & Details': [
    '10778277328_IMG_0017.webp',
    '10778015280_IMG_0146.webp',
    '7593bf92-64ad-40ad-898a-b10ba6b68cab.webp',
    'd9b2ac30-9dda-4a5a-955e-4638a1d3026b.webp',
    'IMG_2559.webp',
  ],
  'Shop & Facility': [
    '10777776448_IMG_0223.webp',
    '10778039744_IMG_0036.webp',
    '15d5ac9c-3e7e-4067-ac7d-9f5379ac1173.webp',
    'c3e0ca86-ca4d-4002-8647-eaa7db8d44a0.webp',
    '37f7fe75-cfba-4b13-a4d5-50f462dc972b.webp',
    '70ba8b2b-6dde-4db4-81de-cbc5a6e68fa6.webp',
    'fe2dedbe-c510-4171-bf71-9f5e014eaba1.webp',
    'IMG_3318.webp',
  ],
};

const galleryCategoryByFilename = new Map(
  Object.entries(GALLERY_CATEGORIES).flatMap(([category, filenames]) =>
    filenames.map((filename) => [filename, category])
  )
);

export const GALLERY_IMAGES = allImagesList.map((filename, index) => {
  const category = galleryCategoryByFilename.get(filename);
  if (!category) {
    throw new Error(`Missing gallery category for image: ${filename}`);
  }

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
    id: 'thassos-pure-white',
    name: 'Thassos Pure White',
    category: 'Marble',
    origin: 'Thassos, Greece',
    image: formatImagePath('IMG_7694.webp'),
    priceLevel: 'Luxury Reserve',
    description: 'Pristine, ultra-refined crystal-white marble with mirror-like clarity and luminous light reflectivity. Showcased in this bespoke primary dressing suite as a centerpiece island credenza under a crystal waterfall chandelier.',
    bestFor: 'Walk-In Dressing Islands, Luxury Vanities, Boutique Ensuites',
  },
  {
    id: 'mont-blanc-quartzite',
    name: 'Mont Blanc Quartzite',
    category: 'Quartzite',
    origin: 'Espírito Santo, Brazil',
    image: formatImagePath('IMG_7701.webp'),
    priceLevel: 'Luxury Reserve',
    description: 'Luminous alpine-white background crossed by sweeping diagonal rivers of charcoal, platinum, and dove-grey veining. Featured on an expansive central culinary island with a matching full-height continuous slab backsplash and brass lantern fixtures.',
    bestFor: 'Monumental Chef Islands, Full-Height Slab Backsplashes, Luxury Open Kitchens',
  },
  {
    id: 'patagonia-exotic',
    name: 'Patagonia Exotic Quartzite',
    category: 'Quartzite',
    origin: 'Bahia, Brazil',
    image: formatImagePath('IMG_2557.webp'),
    priceLevel: 'Exotic Reserve',
    description: 'Nature’s most theatrical stone: translucent quartz crystals, rich amber-gold filaments, and dark tourmaline mineral clusters. Captured in an extraordinary mitered waterfall island where the veining flows seamlessly down to the floor under ambient cove lighting.',
    bestFor: 'Mitered Waterfall Islands, Translucent Backlit Features, Statement Culinary Showpieces',
  },
  {
    id: 'copacabana-granite',
    name: 'Copacabana Exotic Granite',
    category: 'Granite',
    origin: 'Minas Gerais, Brazil',
    image: formatImagePath('IMG_7690.webp'),
    priceLevel: 'Exotic Reserve',
    description: 'Dramatic high-contrast Brazilian granite featuring deep obsidian black bedrock swept by surging rivers of pure white and silver quartz. Photographed here as a floor-to-ceiling bookmatched fireplace surround with an integrated linear firebox and custom dark millwork.',
    bestFor: 'Bookmatched Fireplace Surrounds, High-Drama Feature Walls, Monolithic Great Rooms',
  },
  {
    id: 'taj-mahal-quartzite',
    name: 'Taj Mahal Quartzite',
    category: 'Quartzite',
    origin: 'Ceará, Brazil',
    image: formatImagePath('IMG_7719.webp'),
    priceLevel: 'Premier Choice',
    description: 'Warm creamy tones and translucent champagne filaments with the diamond-hard resilience of 100% natural quartzite. Exhibited here on an organic fluted white oak island with brushed brass fittings and a matching full-height range backsplash behind a Wolf commercial cooktop.',
    bestFor: 'Fluted & Natural Oak Islands, Heavy-Use Chef Countertops, Full-Height Range Backsplashes',
  },
  {
    id: 'calacatta-gold-bookmatch',
    name: 'Calacatta Gold Bookmatch',
    category: 'Marble',
    origin: 'Carrara, Italy',
    image: formatImagePath('IMG_7698.webp'),
    priceLevel: 'Luxury Reserve',
    description: 'Prestige Italian marble with bold, symmetrical graphite and honey-gold ribbon veining mirrored in a seamless bookmatch. Installed floor-to-ceiling across the walls and polished floors of an opulent primary spa retreat with a freestanding soaking tub.',
    bestFor: 'Bookmatched Spa Feature Walls, Luxury Bath Ensuites, Freestanding Tub Sanctuaries',
  },
  {
    id: 'cristallo-translucent',
    name: 'Cristallo Backlit Quartzite',
    category: 'Quartzite',
    origin: 'Minas Gerais, Brazil',
    image: formatImagePath('10778277328_IMG_0017.webp'),
    priceLevel: 'Museum Grade',
    description: 'Pure crystalline quartz bedrock illuminated from behind, highlighting fiery copper-amber and rust lightning fractures coursing through translucent ice crystal. Photographed in an illuminated gallery display frame.',
    bestFor: 'Backlit Island Fronts, Illuminated Luxury Bars, Translucent Wall Slabs',
  },
  {
    id: 'black-forest-bookmatch',
    name: 'Black Forest Diamond Bookmatch',
    category: 'Granite',
    origin: 'Espírito Santo, Brazil',
    image: formatImagePath('10778015280_IMG_0146.webp'),
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

