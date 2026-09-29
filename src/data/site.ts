/**
 * Devi's Fall Pokhara (पाताले छाँगो) — 景点事实与站点名的唯一来源。
 * 页面文案、JSON-LD、manifest 都从这里取值，改价格/电话/评分只需动本文件。
 * 数据来源：Google Maps 商家列表 + 博卡拉旅游推广机构公开资料（同步 2026-09）。
 */

/** SEO 站名格式：景点名称 + 城市 + 旅游指南 */
export const SITE_NAME = 'Devi’s Fall Pokhara — Travel Guide';
export const SITE_NAME_NE = 'पाताले छाँगो पोखरा — यात्रा गाइड';

/** 子页标题统一追加 ' | SITE_NAME' */
export function withSiteName(suffix: string): string {
  return `${suffix} | ${SITE_NAME}`;
}

export const ATTRACTION = {
  fullName: 'Devi’s Fall Pokhara',
  localName: 'पाताले छाँगो',
  romanName: 'Patale Chhango',
  shortName: 'Devi’s Fall',
  /** 搜索中常见的拼写/别名变体，用于 alternateName 与正文关键词覆盖 */
  altNames: ['Devi’s Falls', 'Devi’s Falls Pokhara', 'Davis Falls', 'Patale Chhango', 'पाताले छाँगो'],

  cityName: 'Pokhara',
  stateName: 'Gandaki Province',
  countryName: 'Nepal',

  plusCode: '5XQ5+HP2',
  streetAddress: '5XQ5+HP2, H10, Chhorepatan',
  addressText: '5XQ5+HP2, H10, Pokhara, Gandaki Province 33700, Nepal',
  postalCode: '33700',
  countryCode: 'NP',

  lat: 28.1895641759,
  lng: 83.9560887771,
  mapsUrl: 'https://maps.app.goo.gl/fBtCZziA1LastCeP6',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6016.655445690082!2d83.9560887771393!3d28.189564175909652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595134e82378f%3A0xb581716c3b162f6b!2sDevi%27s%20Fall%20Pokhara!5e1!3m2!1sne!2snp!4v1788746180053!5m2!1sne!2snp',

  phoneHref: '+9779805889741',
  phoneDisplay: '+977 980-5889741',

  rating: '4.0',
  reviewCount: '21,529',
  ratingNote: 'सूचीबद्ध मूल्याङ्कन ४.०/५ · Google Maps सूची (२०२६-०९)',

  hours: {
    opens: '06:00',
    closes: '18:00',
    textNe: '०६:००–१८:००',
    textEn: '06:00–18:00',
  },

  tickets: {
    student: 'रु ३०',
    citizen: 'रु ५०',
    foreign: 'रु १५०',
    range: 'रु ३०–१५०',
    rangeEn: 'NPR 30–150',
  },

  govtTourismUrl: 'https://trade.ntb.gov.np/tourist-destination/pokhara/',
  govtTourismName: 'Nepal Tourism Board — Pokhara',
  govtTourismUrl2: 'https://pokharatourism.org.np/caves/',
  govtTourismName2: 'Pokhara Tourism Council — Caves & Devi’s Fall',

  nearby1: 'Gupteshwor Mahadev Cave',
  nearby2: 'International Mountain Museum',
  nearby3: 'World Peace Pagoda',
} as const;
