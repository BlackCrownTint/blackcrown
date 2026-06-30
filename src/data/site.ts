// Central business data + routing. NAP must stay identical across all pages
// and the Google Business Profile.

export const site = {
  name: 'Black Crown Tint',
  legalName: 'Black Crown Tint',
  url: 'https://www.blackcrowntint.net',
  phone: '(904) 893-0927',
  phoneAlt: '(904) 749-3655',
  phoneHref: 'tel:+19048930927',
  phoneAltHref: 'tel:+19047493655',
  email: 'info@blackcrowntint.net',
  emailHref: 'mailto:info@blackcrowntint.net',
  instagram: '@blackcrowntint',
  instagramHref: 'https://instagram.com/blackcrowntint',
  city: 'Jacksonville',
  region: 'FL',
  regionName: 'Florida',
  slogan1: 'Crown your ride.',
  slogan2: 'Protect what matters.',
  founders: ['Camilo', 'Marco'],
} as const;

// Clean routes (the prototypes used bare *.dc.html filenames).
export const routes = {
  home: '/',
  auto: '/services/auto-window-tinting/',
  residential: '/services/residential-window-tinting/',
  commercial: '/services/commercial-window-tinting/',
  ceramic: '/ceramic-window-tint/',
  floridaLaws: '/florida-tint-laws/',
  contact: '/contact/',
  about: '/about/',
  reviews: '/reviews/',
  ceramicVsCarbon: '/ceramic-vs-carbon-tint/',
  cost: '/window-tinting-cost/',
  installation: '/window-tint-installation/',
  serviceAreas: '/service-areas/',
  gallery: '/gallery/',
} as const;

// Center-nav items used in the header.
export const nav = [
  { label: 'Auto', href: routes.auto },
  { label: 'Residential', href: routes.residential },
  { label: 'Commercial', href: routes.commercial },
  { label: 'Tint Laws', href: routes.floridaLaws },
  { label: 'Gallery', href: routes.gallery },
  { label: 'About', href: routes.about },
];

// 18 service-area zones. `slug` reserved for future per-zone pages.
// Only zones with `page: true` have a dedicated landing page today (the
// rest link to Contact — clone the zone template with unique 300+ word
// copy before turning each into its own page, per the handoff).
export const zones = [
  { name: 'Jacksonville', slug: 'jacksonville', county: 'Duval County' },
  { name: 'Jacksonville Beach', slug: 'jacksonville-beach', county: 'The Beaches', page: true },
  { name: 'Orange Park', slug: 'orange-park', county: 'Clay County' },
  { name: 'St. Augustine', slug: 'st-augustine', county: 'St. Johns County' },
  { name: 'St. Johns', slug: 'st-johns', county: 'St. Johns County' },
  { name: 'Nocatee', slug: 'nocatee', county: 'Ponte Vedra area' },
  { name: 'Ponte Vedra & Palm Valley', slug: 'ponte-vedra-palm-valley', county: 'Coastal St. Johns' },
  { name: 'Fruit Cove', slug: 'fruit-cove', county: 'St. Johns County' },
  { name: 'World Golf Village', slug: 'world-golf-village', county: 'St. Johns County' },
  { name: 'Fleming Island', slug: 'fleming-island', county: 'Clay County' },
  { name: 'Middleburg', slug: 'middleburg', county: 'Clay County' },
  { name: 'Green Cove Springs', slug: 'green-cove-springs', county: 'Clay County' },
  { name: 'Penney Farms', slug: 'penney-farms', county: 'Clay County' },
  { name: 'Macclenny', slug: 'macclenny', county: 'Baker County' },
  { name: 'Callahan', slug: 'callahan', county: 'Nassau County' },
  { name: 'Yulee', slug: 'yulee', county: 'Nassau County' },
  { name: 'Fernandina Beach', slug: 'fernandina-beach', county: 'Amelia Island' },
  { name: 'Mayport', slug: 'mayport', county: 'The Beaches' },
] as const;

// Short list of areas shown as chips on the Home page.
export const homeAreas = [
  'Jacksonville',
  'Jacksonville Beach',
  'Orange Park',
  'St. Augustine',
  'Nocatee',
  'Ponte Vedra',
  'Fleming Island',
  'Yulee',
  'Fernandina Beach',
];
