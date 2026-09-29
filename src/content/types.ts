import type { Locale } from '../i18n';

export interface MiniCard {
  /** 小标签（可选） */
  label?: string;
  title: string;
  body: string;
  /** 要点列表（票价卡等） */
  list?: string[];
  /** 卡片底部小字说明 */
  note?: string;
}

export interface TimelineStep {
  tag: string;
  title: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface GuideTeaser {
  key: 'fee' | 'hours' | 'reach';
  title: string;
  body: string;
}

export interface HomeContent {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    experience: string;
    plan: string;
    nearby: string;
    map: string;
    faq: string;
    sources: string;
    directions: string;
    ariaLabel: string;
    mobileAriaLabel: string;
    langSwitch: string;
  };
  hero: {
    breadcrumb: string;
    brandLine: string;
    kicker: string;
    titleTop: string;
    titleBottom: string;
    nameLine: string;
    lead: string;
    factsLine: string;
    pills: string[];
    altText: string;
  };
  about: {
    kicker: string;
    title: string;
    titleAccent: string;
    paragraphs: string[];
    facts: Fact[];
    nap: string;
  };
  experience: {
    kicker: string;
    title: string;
    titleAccent: string;
    copy: string;
    cards: MiniCard[];
    diagram: { inflow: string; drop: string; tunnel: string };
    ariaLabel: string;
  };
  plan: {
    kicker: string;
    title: string;
    titleAccent: string;
    cards: MiniCard[];
    orderKicker: string;
    orderTitle: string;
    orderTitleAccent: string;
    orderCopy: string;
    steps: TimelineStep[];
  };
  gallery: {
    kicker: string;
    title: string;
    note: string;
    captions: string[];
  };
  map: {
    kicker: string;
    title: string;
    titleAccent: string;
    addressLabel: string;
    phoneLabel: string;
    transports: MiniCard[];
    note: string;
    mapNote: string;
    mapCta: string;
    iframeTitle: string;
    sourcesTitle: string;
    sourcesNote: string;
  };
  nearby: {
    kicker: string;
    title: string;
    cards: MiniCard[];
    foodKicker: string;
    foodTitle: string;
    foodTitleAccent: string;
    foodCopy: string;
    foods: MiniCard[];
  };
  history: {
    kicker: string;
    title: string;
    titleAccent: string;
    paragraphs: string[];
    specTitle: string;
    spec: Fact[];
  };
  photo: {
    kicker: string;
    title: string;
    titleAccent: string;
    copy: string;
    cards: MiniCard[];
  };
  faq: {
    kicker: string;
    title: string;
    titleAccent: string;
    copy: string;
    items: FaqItem[];
  };
  guides: {
    kicker: string;
    title: string;
    titleAccent: string;
    items: GuideTeaser[];
  };
  sources: {
    kicker: string;
    title: string;
    titleAccent: string;
    note: string;
    photoNote: string;
  };
  footer: {
    tagline: string;
    disclaimer: string;
    privacy: string;
    terms: string;
    credits: string;
    sources: string;
    cookie: string;
    copyright: string;
  };
  dialogs: {
    close: string;
    privacy: { kicker: string; title: string; paragraphs: string[] };
    terms: { kicker: string; title: string; paragraphs: string[] };
    credits: { kicker: string; title: string; note: string; photoNote: string };
    sources: { kicker: string; title: string; note: string };
  };
  cookie: {
    text: string;
    deny: string;
    allow: string;
  };
  homeLink: string;
}
