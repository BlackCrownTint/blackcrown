import { site } from '../data/site';

type Schema = Record<string, any>;
export function canonicalUrl(path: string): string {
  const clean = path === '/' || /\.[a-z]+$/i.test(path) ? path : `${path.replace(/\/+$/, '')}/`;
  return new URL(clean, site.url).href;
}

export function pageGraph(url: string, title: string, description: string, input: Schema[] = []) {
  const businessId = `${site.url}/#business`;
  const websiteId = `${site.url}/#website`;
  const pageId = `${url}#webpage`;
  const business: Schema = {
    '@type': 'LocalBusiness', '@id': businessId, name: site.name, url: `${site.url}/`,
    telephone: site.phoneHref.replace('tel:', ''), email: site.email,
    logo: `${site.url}/brand/logo-lockup.webp`, image: `${site.url}/images/auto-project-960.webp`,
    areaServed: [{ '@type': 'City', name: 'Jacksonville' }, { '@type': 'Place', name: 'Northeast Florida' }],
    address: { '@type': 'PostalAddress', addressLocality: site.city, addressRegion: site.region, addressCountry: 'US' },
    sameAs: [site.instagramHref],
  };
  const pageType = input.find(s => ['AboutPage', 'CollectionPage', 'ContactPage'].includes(s['@type']))?.['@type'] ?? (new URL(url).pathname === '/contact/' ? 'ContactPage' : 'WebPage');
  const page: Schema = { '@type': pageType, '@id': pageId, url, name: title, description,
    inLanguage: 'en-US', isPartOf: { '@id': websiteId }, about: { '@id': businessId } };
  const content: Schema[] = [];
  for (const raw of input) {
    const { '@context': ignored, ...node } = raw;
    if (node['@type'] === 'LocalBusiness' || (node['@type'] === 'Organization' && node.name === site.name)) {
      if (node.contactPoint) business.contactPoint = node.contactPoint;
      if (node.founder) business.founder = node.founder;
      continue;
    }
    if (['AboutPage', 'CollectionPage', 'ContactPage'].includes(node['@type'])) continue;
    node['@id'] = `${url}#${String(node['@type']).toLowerCase()}`;
    if (node['@type'] === 'Service') {
      node.name ??= node.serviceType;
      node.provider = { '@id': businessId };
      node.url = url;
      page.mainEntity = { '@id': node['@id'] };
    }
    if (node['@type'] === 'Article') {
      node.author = { '@id': businessId }; node.publisher = { '@id': businessId };
      node.mainEntityOfPage = { '@id': pageId };
      page.mainEntity = { '@id': node['@id'] };
    }
    if (node['@type'] === 'ItemList') page.mainEntity = { '@id': node['@id'] };
    content.push(node);
  }
  return { '@context': 'https://schema.org', '@graph': [business,
    { '@type': 'WebSite', '@id': websiteId, url: `${site.url}/`, name: site.name, publisher: { '@id': businessId }, inLanguage: 'en-US' },
    page, ...content] };
}
