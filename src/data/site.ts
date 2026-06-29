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

// 18 service-area zones. `slug` drives /service-areas/<slug>/.
export const zones = [
  { name: 'Jacksonville', slug: 'jacksonville' },
  { name: 'Jacksonville Beach', slug: 'jacksonville-beach' },
  { name: 'Orange Park', slug: 'orange-park' },
  { name: 'St. Augustine', slug: 'st-augustine' },
  { name: 'St. Johns', slug: 'st-johns' },
  { name: 'Nocatee', slug: 'nocatee' },
  { name: 'Ponte Vedra & Palm Valley', slug: 'ponte-vedra-palm-valley' },
  { name: 'Fruit Cove', slug: 'fruit-cove' },
  { name: 'World Golf Village', slug: 'world-golf-village' },
  { name: 'Fleming Island', slug: 'fleming-island' },
  { name: 'Middleburg', slug: 'middleburg' },
  { name: 'Green Cove Springs', slug: 'green-cove-springs' },
  { name: 'Penney Farms', slug: 'penney-farms' },
  { name: 'Macclenny', slug: 'macclenny' },
  { name: 'Callahan', slug: 'callahan' },
  { name: 'Yulee', slug: 'yulee' },
  { name: 'Fernandina Beach', slug: 'fernandina-beach' },
  { name: 'Mayport', slug: 'mayport' },
];

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
