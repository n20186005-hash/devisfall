import { ATTRACTION, SITE_NAME, SITE_NAME_NE } from '../data/site';
import type { FaqItem } from '../content/types';

const FALLBACK = 'https://devisfall.com/';

function base(site: URL | undefined): string {
  return site ? site.toString() : FALLBACK;
}

function attractionId(site: URL | undefined): string {
  return `${base(site)}#attraction`;
}

export function buildWebsiteSchema(site: URL | undefined) {
  const b = base(site);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${b}#website`,
    name: SITE_NAME,
    alternateName: [SITE_NAME_NE, ATTRACTION.fullName],
    inLanguage: ['ne', 'en'],
    about: { '@id': attractionId(site) },
    url: b,
  };
}

export function buildAttractionSchema(site: URL | undefined, description: string) {
  const b = base(site);
  const A = ATTRACTION;
  const heroImage = new URL('/images/devis-fall-monsoon.jpg', b).toString();
  const ogImage = new URL('/og-card.jpg', b).toString();
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LocalBusiness'],
    '@id': attractionId(site),
    name: A.fullName,
    alternateName: [A.shortName, A.localName, A.romanName, `${A.cityName} ${A.fullName}`, ...A.altNames],
    description,
    telephone: A.phoneHref,
    isAccessibleForFree: false,
    publicAccess: true,
    availableLanguage: ['ne', 'en'],
    touristType: ['Nature lovers', 'Families', 'Photographers'],
    hasMap: A.mapsUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5XQ5+HP2, H10',
      addressLocality: A.cityName,
      addressRegion: A.stateName,
      postalCode: A.postalCode,
      addressCountry: A.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: A.lat,
      longitude: A.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: A.hours.opens,
        closes: A.hours.closes,
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: A.rating,
      bestRating: '5',
      reviewCount: A.reviewCount.replace(',', ''),
    },
    priceRange: A.tickets.range,
    sameAs: [A.mapsUrl, A.govtTourismUrl, A.govtTourismUrl2],
    url: b,
    image: [heroImage, ogImage],
  };
}

export function buildBreadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: t.url,
    })),
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}
