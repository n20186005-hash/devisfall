/** 语言路由与 hreflang 的唯一来源：ne 为默认语（/），en 在 /en/。 */
export const locales = ['ne', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ne';

export const htmlLang: Record<Locale, string> = { ne: 'ne', en: 'en' };
export const ogLocale: Record<Locale, string> = { ne: 'ne_NP', en: 'en_US' };
export const hreflangCode: Record<Locale, string> = { ne: 'ne-NP', en: 'en' };

/** 页面键：首页 + 三篇长尾子页（门票 / 营业时间 / 交通） */
export type PageKey = 'home' | 'fee' | 'hours' | 'reach';

export const paths: Record<Locale, Record<PageKey, string>> = {
  ne: {
    home: '/',
    fee: '/pravesh-shulka/',
    hours: '/khulne-samaya/',
    reach: '/bato/',
  },
  en: {
    home: '/en/',
    fee: '/en/entry-fee/',
    hours: '/en/opening-hours/',
    reach: '/en/how-to-reach/',
  },
};

export function localizePath(locale: Locale, key: PageKey): string {
  return paths[locale][key];
}

export function absoluteUrl(locale: Locale, key: PageKey, site: URL | undefined): string | undefined {
  if (!site) return undefined;
  return new URL(paths[locale][key], site).toString();
}

/**
 * x-default 指向英文版：GSC 显示曝光查询几乎全部为英文（devi's falls pokhara nepal 等），
 * 未匹配语区的用户应落到英文页。
 */
export function alternates(key: PageKey, site: URL | undefined) {
  if (!site) return [];
  return [
    { hreflang: hreflangCode.ne, href: new URL(paths.ne[key], site).toString() },
    { hreflang: hreflangCode.en, href: new URL(paths.en[key], site).toString() },
    { hreflang: 'x-default', href: new URL(paths.en[key], site).toString() },
  ];
}
