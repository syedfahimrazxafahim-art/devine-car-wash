import { ServicePackage, ServiceAddon, BeforeAfterItem, Testimonial, FaqItem } from '../types';

export const OFFICIAL_LOGO_URL = 'https://res.cloudinary.com/fzobzdco/image/upload/v1788211412/Logo.jpg';

export const BUSINESS_INFO = {
  name: 'Divine EcoWash',
  subtitle: 'Mobile Car Wash & Auto Detailing',
  tagline: 'Clean Smarter. Drive Greener.',
  city: 'Los Angeles, California',
  phone: '323-921-1494',
  phoneFormatted: '(323) 921-1494',
  whatsappUrl: 'https://wa.me/13239211494',
  instagram: 'https://www.instagram.com/divineecowash',
  instagramHandle: '@divineecowash',
  facebook: 'https://www.facebook.com/profile.php?id=61590162133022',
  email: 'service@divineecowash.com',
  logoUrl: OFFICIAL_LOGO_URL,
  workingHours: 'Mon - Sat: 7:30 AM - 6:30 PM | Sun: 8:00 AM - 4:00 PM',
  serviceAreas: [
    'Downtown Los Angeles',
    'Beverly Hills',
    'Santa Monica & Venice',
    'West Hollywood',
    'Culver City',
    'Pasadena & Glendale',
    'San Fernando Valley',
    'Silver Lake & Echo Park',
    'Torrance & South Bay',
    'Long Beach & Surrounding'
  ],
  stats: {
    waterSavedGallons: '450,000+',
    vehiclesDetailed: '3,800+',
    satisfactionRate: '99.4%',
    clientRating: '4.9/5'
  }
};

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'eco-exterior',
    name: 'Eco Exterior Precision Wash',
    tagline: 'Scratch-free hand wash with hydrophobic shine sealant',
    badge: 'Popular Eco Wash',
    pricing: {
      sedan: 75,
      suv: 85,
      truck: 95,
      luxury: 105
    },
    duration: '45 - 60 mins',
    waterSaved: '35 Gallons Saved',
    description: 'A revolutionary low-water exterior cleanse using advanced plant-derived polymers that safely encapsulate dirt particles, leaving a swirl-free, mirror-gloss shine.',
    features: [
      'Eco-polymer hand wash (safe for all clear coats)',
      'High-grade scratch-free microfiber technique',
      'Wheel faces, brake dust removal & rim detailing',
      'Non-sling premium tire dressing & shine',
      'Crystal-clear streakless exterior glass polish',
      'Polymer spray sealant for 30-day UV & water protection'
    ],
    recommendedFor: 'Routine bi-weekly maintenance & fast high-gloss refresh'
  },
  {
    id: 'interior-deep',
    name: 'Interior Deep Rejuvenation',
    tagline: 'Deep steam sanitization, mat extraction & allergen removal',
    badge: 'Fresh & Clean Cabin',
    pricing: {
      sedan: 145,
      suv: 165,
      truck: 185,
      luxury: 210
    },
    duration: '90 - 120 mins',
    waterSaved: '20 Gallons Saved',
    description: 'Transform your vehicle cabin into a showroom-fresh, allergy-safe sanctuary with deep vacuuming, steam sanitization, and upholstery conditioning.',
    features: [
      'High-power 3-stage interior vacuuming (crevices, trunk, under seats)',
      'Deep carpet & floor mat shampoo & spot stain extraction',
      'Dashboard, center console & cup holder precision sanitization',
      'Leather cleaning & UV-blocking conditioning treatment',
      'Door jambs degreasing & interior glass streak-free cleaning',
      'Organic odor neutralizing treatment (long-lasting fresh scent)'
    ],
    recommendedFor: 'Vehicles with dust, spills, pet hair, or routine deep sanitize'
  },
  {
    id: 'divine-signature',
    name: 'The Divine Full Transformation',
    tagline: 'Complete bumper-to-bumper interior & exterior luxury detail',
    badge: 'Best Value Detail',
    popular: true,
    pricing: {
      sedan: 199,
      suv: 235,
      truck: 265,
      luxury: 295
    },
    duration: '2.5 - 3.5 hrs',
    waterSaved: '65 Gallons Saved',
    description: 'Our premier mobile detail. Combines our meticulous Eco Exterior Wash with full Interior Deep Rejuvenation and enhanced polymer paint protection.',
    features: [
      'Everything in Eco Exterior Precision Wash',
      'Everything in Interior Deep Rejuvenation',
      'Engine bay dust-down & plastic dressing',
      'Clay mitt paint decontamination & surface smoothening',
      'Hydrophobic ceramic spray sealant (3+ months protection)',
      'Headlight clarity enhancement & trim restore'
    ],
    recommendedFor: 'Complete showroom transformation & seasonal protection'
  },
  {
    id: 'ceramic-shield',
    name: 'Ceramic Shield & Paint Enhancement',
    tagline: 'Maximum gloss, scratch deterrence & hydrophobic barrier',
    badge: 'Ultimate Paint Defense',
    pricing: {
      sedan: 380,
      suv: 440,
      truck: 490,
      luxury: 550
    },
    duration: '4 - 5 hrs',
    waterSaved: '80 Gallons Saved',
    description: 'For automotive enthusiasts and luxury vehicle owners looking for extreme depth of gloss, UV resistance, and water-beading performance.',
    features: [
      'Multi-stage foam pre-soak and iron particle decontamination',
      '1-step machine polish to eliminate light swirls & hazing',
      'Application of 1-Year Professional Ceramic Coating',
      'Complete interior steam sterilization & leather ceramic shield',
      'Glass hydrophobic rain repellent coating',
      'Alloy wheels ceramic brake dust repellent'
    ],
    recommendedFor: 'New vehicles, luxury exotics, and deep color restorations'
  }
];

export const SERVICE_ADDONS: ServiceAddon[] = [
  {
    id: 'pet-hair',
    name: 'Heavy Pet Hair & Dander Removal',
    price: 35,
    description: 'Specialized rubber extraction brushes and high-lift suction for embedded pet hair.',
    iconName: 'Sparkles'
  },
  {
    id: 'leather-conditioner',
    name: 'Premium Leather Ceramic Barrier',
    price: 45,
    description: 'Micro-coating to guard against dye transfer, cracking, and spills on luxury leather.',
    iconName: 'Shield'
  },
  {
    id: 'headlight-restoration',
    name: 'Headlight Oxidation Restoration',
    price: 55,
    description: 'Sanding, polishing, and UV clear coating to restore cloudy yellow headlights.',
    iconName: 'Sun'
  },
  {
    id: 'ozone-odor',
    name: 'Ozone Odor Elimination & Anti-Bacterial',
    price: 40,
    description: 'Destroys stubborn smoke, food, or mildew odors at the molecular level.',
    iconName: 'Wind'
  },
  {
    id: 'engine-bay',
    name: 'Engine Bay Deep Clean & Dressing',
    price: 50,
    description: 'Safe dry-steam cleaning and matte dressing of engine plastics and hoses.',
    iconName: 'Wrench'
  }
];

export const BEFORE_AFTER_GALLERY: BeforeAfterItem[] = [
  {
    id: 'windshield-clarity',
    title: 'Windshield & Glass Clarity Polish',
    category: 'exterior',
    vehicle: 'White Sedan Windshield',
    description: 'Removal of baked-on tree sap, highway grime, and water spots, restoring 100% optical clarity.',
    beforeDescription: 'Heavy film of road dust, sun-baked grime, and water spots obstructing visibility.',
    afterDescription: 'Crystal clear streak-free glass treated with hydrophobic water-repellent coating.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788211449/1.jpg',
    beforeVisualType: 'windshield',
    accentText: 'Before / After Windshield Clarity'
  },
  {
    id: 'center-console-detailing',
    title: 'Precision Center Console & Cockpit Detailing',
    category: 'interior',
    vehicle: 'Electric Crossover Console',
    description: 'Meticulous soft-brush agitation and vacuuming of gloss black piano trim, gear buttons, and cup holders.',
    beforeDescription: 'Accumulated debris, beverage spills, dust in seams, and hazy piano black panels.',
    afterDescription: 'Deep cleaned, sanitized, fingerprint-free, and dressed in non-greasy OEM matte finish.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788211452/2.jpg',
    beforeVisualType: 'console',
    accentText: 'Dirt, Dust & Debris → Deep Cleaning Freshness'
  },
  {
    id: 'side-mirror-trim',
    title: 'Side Mirror & Window Frame Restoration',
    category: 'exterior',
    vehicle: 'White Commuter Vehicle',
    description: 'Removal of stubborn road dust and bugs from aerodynamic contours and plastic rubber seals.',
    beforeDescription: 'Dull, road-grimed paint, spotted mirror caps, and dirty window trim seams.',
    afterDescription: 'Pristine, gleaming gloss white surface with conditioned deep black UV-protected trim.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788211446/3.jpg',
    beforeVisualType: 'mirror',
    accentText: 'Clean Smarter. Drive Greener.'
  },
  {
    id: 'carpet-mat-extraction',
    title: 'Deep Carpet & Floor Mat Extraction (IONIQ)',
    category: 'interior',
    vehicle: 'Hyundai IONIQ Clean Carpet',
    description: 'Deep high-lift vacuum extraction removing embedded dirt, sand, and food crumbs from dense velour floor mats.',
    beforeDescription: 'Heavy embedded sand, shoe scuffs, pet dander, and loose debris across the carpet fibers.',
    afterDescription: 'Even, textured carpet pile, allergen-free, deep black OEM showroom look.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788211443/4.jpg',
    beforeVisualType: 'mats',
    accentText: 'Deep Fibre Dirt Extraction'
  },
  {
    id: 'toyota-prius-footwell',
    title: 'Footwell & All-Weather Liner Deep Sanitization',
    category: 'interior',
    vehicle: 'Toyota Prius Cockpit',
    description: 'Complete restorative extraction of stained floor carpets and rubber floor liner degreasing.',
    beforeDescription: 'Ground-in dirt, leaves, mud stains, and dull oxidized rubber mats.',
    afterDescription: 'Sanitized pedal assembly, deep extracted carpet, and jet-black restored rubber liner.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788211440/5.jpg',
    beforeVisualType: 'prius_interior',
    accentText: 'Taking care of your car is what drives us!'
  },
  {
    id: 'kia-niro-exterior',
    title: 'Rear Liftgate & Bumper Eco-Decontamination',
    category: 'exterior',
    vehicle: 'Kia Niro Hybrid SUV',
    description: 'Water-saving polymer wash safely dissolving thick road film and exhaust soot without a single swirl mark.',
    beforeDescription: 'Extremely dirty rear hatch covered in road film, water residue, and dust streaks.',
    afterDescription: 'Up to 70% less water used, swirl-free gloss, spotless badge recesses and bumper.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788211434/6.jpg',
    beforeVisualType: 'rear_suv',
    accentText: 'Extremely Dirty? Perfect Result. (We Save 50%–70% Water)'
  },
  {
    id: 'metallic-blue-gloss',
    title: 'Metallic Blue Paint Protection & Hydrophobic Polish',
    category: 'paint',
    vehicle: 'Metallic Blue Hood Finish',
    description: 'High-clarity polymer sealant application highlighting metallic flake sparkle and shielding against California sun damage.',
    beforeDescription: 'Dull oxidized clear coat with light wash marring and loss of reflection.',
    afterDescription: 'Shine you can see: mirror reflection, deep metallic sparkle, scratch-free lasting finish.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788211424/23.jpg',
    beforeVisualType: 'blue_hood',
    accentText: 'Shine You Can See • Protects Your Paint'
  },
  {
    id: 'luxury-rover-mobile',
    title: 'Mobile Luxury SUV Exterior & Rim Treatment',
    category: 'exterior',
    vehicle: 'Luxury White Range Rover SUV',
    description: 'On-site mobile detailing at client location with zero water runoff, saving 50%+ water.',
    beforeDescription: 'Brake dust covered multi-spoke alloy wheels, water marks, and road film.',
    afterDescription: 'Showroom finish, brilliant polished alloy rims, hydrophobic paint protection.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788211429/8.jpg',
    beforeVisualType: 'luxury_suv',
    accentText: 'Detailing That Impresses • We Save 50% Water'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Marcus Sterling',
    location: 'Beverly Hills, CA',
    vehicle: 'Porsche Cayenne Turbo',
    rating: 5,
    date: '2 days ago',
    review: 'Divine EcoWash came right to my driveway in Beverly Hills. The fact that they save so much water while delivering a finish that rivaled dealership high-end details is astonishing. My paint looks like wet glass!',
    service: 'The Divine Full Transformation',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Elena Rostova',
    location: 'Santa Monica, CA',
    vehicle: 'Tesla Model Y',
    rating: 5,
    date: '1 week ago',
    review: 'As an EV owner, environmental responsibility matters to me. Divine EcoWash did an incredible job on my interior after a beach trip with two dogs. Every trace of sand and fur is gone, and the car smells divine!',
    service: 'Interior Deep Rejuvenation + Pet Hair',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'David Chen',
    location: 'Downtown Los Angeles, CA',
    vehicle: 'Audi RS6 Avant',
    rating: 5,
    date: '2 weeks ago',
    review: 'Booking was super simple via WhatsApp. They arrived on time at my apartment building, brought all their self-contained eco equipment, and left zero dirty runoff in the garage. 10/10 recommend.',
    service: 'Ceramic Shield & Paint Enhancement',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Jessica Morales',
    location: 'Pasadena, CA',
    vehicle: 'Kia Niro EV',
    rating: 5,
    date: '3 weeks ago',
    review: 'My car was extremely dirty after a road trip to Big Sur. When Divine EcoWash finished, the car looked brand new out of the showroom. Their before/after results are 100% genuine.',
    service: 'The Divine Full Transformation',
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'mobile',
    question: 'Do you need access to my home water or electricity?',
    answer: 'No! Our mobile detailing units are fully self-contained with our own specialized filtered water supply, portable quiet power generators, and high-efficiency eco extraction tools. We can detail your vehicle at your home, office, parking structure, or driveway anywhere in Los Angeles.'
  },
  {
    id: 'faq-2',
    category: 'eco',
    question: 'How does an Eco Wash work without scratching my vehicle paint?',
    answer: 'We use high-lubricity, biodegradable polymer formulas engineered to encapsulate dirt particles on contact. When wiped with ultra-plush, 500+ GSM microfiber towels in single-directional motions, the dirt is lifted away from the clear coat without friction or swirling. It is actually safer than automated brush car washes!'
  },
  {
    id: 'faq-3',
    category: 'eco',
    question: 'How much water do you save compared to a regular car wash?',
    answer: 'A standard driveway garden hose wash uses between 80 to 140 gallons of potable water with toxic runoff entering storm drains. Divine EcoWash uses high-efficiency precision techniques that use as little as 2 to 5 gallons of water per car — saving 50% to 70%+ of water with zero toxic runoff.'
  },
  {
    id: 'faq-4',
    category: 'services',
    question: 'How long does a detailing service usually take?',
    answer: 'Our Eco Exterior Wash takes approximately 45 to 60 minutes. Interior Deep Rejuvenation takes 1.5 to 2 hours. The Divine Full Transformation takes between 2.5 and 3.5 hours depending on the size and initial condition of your vehicle.'
  },
  {
    id: 'faq-5',
    category: 'mobile',
    question: 'What areas in Los Angeles do you cover?',
    answer: 'We serve Greater Los Angeles, including Downtown LA, Beverly Hills, West Hollywood, Santa Monica, Venice, Culver City, Glendale, Pasadena, San Fernando Valley, and surrounding Southern California neighborhoods.'
  },
  {
    id: 'faq-6',
    category: 'pricing',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major Credit/Debit cards, Apple Pay, Google Pay, Zelle, Venmo, and Cash upon completion of your mobile service.'
  }
];
