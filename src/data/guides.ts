import { ATTRACTION } from './site';
import type { Locale, PageKey } from '../i18n';
import type { FaqItem } from '../content/types';

const A = ATTRACTION;
export type GuideKey = Exclude<PageKey, 'home'>;

export interface GuideBlock {
  kicker?: string;
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface GuideEntry {
  key: GuideKey;
  title: string;
  description: string;
  kicker: string;
  h1: string;
  lead: string;
  updated: string;
  blocks: GuideBlock[];
  faq: FaqItem[];
}

const fee: Record<Locale, GuideEntry> = {
  ne: {
    key: 'fee',
    title: 'पाताले छाँगो प्रवेश शुल्क र टिकट (२०८२/२०२६)',
    description: `${A.fullName} को प्रवेश शुल्क: नेपाली विद्यार्थी ${A.tickets.student}, नेपाली नागरिक ${A.tickets.citizen}, विदेशी पर्यटक ${A.tickets.foreign}। काउन्टरमा कहाँबाट किन्ने, छुट र ${A.nearby1} टिकट अलग हुने कुरा।`,
    kicker: 'प्रवेश शुल्क · Ticket',
    h1: 'प्रवेश शुल्क र टिकट',
    lead: `${A.fullName} (${A.localName}) टिकट लाग्ने स्थल हो। तलको दर नगरबाट सार्वजनिक गरिएको शुल्क संरचना हो; यात्राअघि काउन्टरमा हालको दर पुष्टि गर्नुहोस्।`,
    updated: 'अपडेट: सेप्टेम्बर २०२६',
    blocks: [
      {
        heading: 'दर संरचना',
        body: ['नेपाली र विदेशी अवस्थाअनुसार तीन वर्गमा शुल्क तोकिएको छ:'],
        bullets: [
          `नेपाली विद्यार्थी: ${A.tickets.student}`,
          `नेपाली नागरिक: ${A.tickets.citizen}`,
          `विदेशी पर्यटक: ${A.tickets.foreign}`,
        ],
      },
      {
        heading: 'कहाँबाट र कसरी किन्ने',
        body: ['टिकट मुख्य प्रवेशद्वारको काउन्टरबाट किनिन्छ। छुट (विद्यार्थी/नागरिक) का लागि परिचयपत्र (ID) साथ राख्नुहोस्।', 'शुल्क समयानुकूल परिवर्तन हुन सक्ने भएकाले किन्दा हालको दर सोध्नु राम्रो हुन्छ।'],
      },
      {
        heading: `${A.nearby1} टिकट अलग हुन्छ`,
        body: ['गुप्तेश्वर महादेव गुफा सडकपारि छुट्टै आकर्षण हो र यसको प्रवेश व्यवस्था अलग छ।', 'दुवै हेर्ने योजना भएमा छुट्टाछुट्टै टिकट लिनुपर्छ; एउटै टिकटमा दुवै पर्दैन।'],
      },
      {
        heading: 'सुझाव',
        body: ['भीड कम हुने बिहान वा बेलुकी जानुहोस्।', 'वर्षा/चाडपर्वमा समय र व्यवस्था फरक हुन सक्छ—अनिश्चित कुरा स्थलमै पुष्टि गर्नुहोस्।'],
      },
    ],
    faq: [
      { q: 'प्रवेश शुल्क कति छ?', a: `नगरबाट सार्वजनिक गरिएको शुल्क संरचनाअनुसार नेपाली विद्यार्थी ${A.tickets.student}, नेपाली नागरिक ${A.tickets.citizen} र विदेशी पर्यटक ${A.tickets.foreign} राखिएको छ। शुल्क परिवर्तन हुन सक्ने भएकाले टिकट काउन्टरमा हालको दर पुष्टि गर्नुहोस्।` },
      { q: 'प्रवेश शुल्क नै लाग्छ?', a: `हो, ${A.fullName} टिकट लाग्ने स्थल हो। नगरको शुल्क संरचनाअनुसार माथिका दर राखिएको छ।` },
      { q: `${A.nearby1} यही टिकटमा पर्छ?`, a: 'पर्दैन। गुफा सडकपारि छुट्टै आकर्षण हो र यसको प्रवेश व्यवस्था अलग हुन्छ।' },
      { q: 'विद्यार्थी छुट पाइन्छ?', a: 'नेपाली विद्यार्थीका लागि छुट दर छ; छुट पाउन आफ्नो विद्यार्थी परिचयपत्र (ID) साथ राख्नुहोस् र काउन्टरमा देखाउनुहोस्।' },
    ],
  },
  en: {
    key: 'fee',
    title: 'Devi’s Fall Pokhara Entry Fee & Ticket Price (2026)',
    description: `${A.fullName} entry fee: NPR 30 Nepali students, NPR 50 Nepali citizens, NPR 150 foreign visitors. Where to buy at the counter, concessions and why the ${A.nearby1} ticket is separate.`,
    kicker: 'Entry fee · Ticket',
    h1: 'Entry fee & ticket price',
    lead: `${A.fullName} (${A.localName}) is a ticketed site. The rates below are the published municipal structure — confirm the current rate at the counter before you travel.`,
    updated: 'Updated: September 2026',
    blocks: [
      {
        heading: 'Rate structure',
        body: ['Three tiers by resident/visitor status:'],
        bullets: [
          `Nepali students: ${A.tickets.student}`,
          `Nepali citizens: ${A.tickets.citizen}`,
          `Foreign visitors: ${A.tickets.foreign}`,
        ],
      },
      {
        heading: 'Where & how to buy',
        body: ['Tickets are bought at the counter by the main entrance. Carry ID for any concession (student/citizen).', 'Rates can change over time, so ask for the current price when you buy.'],
      },
      {
        heading: `${A.nearby1} ticket is separate`,
        body: ['Gupteshwor Mahadev Cave across the road is a separate attraction with its own entry arrangement.', 'If you plan to see both, buy two separate tickets — one ticket does not cover both.'],
      },
      {
        heading: 'Tips',
        body: ['Go in the morning or later in the day to avoid crowds.', 'During the monsoon or festivals, timing and arrangements can differ — confirm uncertain details on site.'],
      },
    ],
    faq: [
      { q: 'How much is the Devi’s Fall entry fee / ticket price?', a: `Devi’s Fall is ticketed. The published municipal rate structure is NPR 30 for Nepali students, NPR 50 for Nepali citizens and NPR 150 for foreign visitors. Rates can change—check the current price at the counter and carry ID for any concession.` },
      { q: 'Is there an entrance fee for Devi’s Fall Pokhara?', a: `Yes. The municipal rate structure lists NPR 30 for Nepali students, NPR 50 for Nepali citizens and NPR 150 for foreign visitors; please confirm current rates at the ticket counter.` },
      { q: 'Is Gupteshwor Mahadev Cave included in the Devi’s Fall ticket?', a: 'No. The cave sits across the road and is a separate attraction with its own entry arrangement. The two are easy to combine in one trip, so most visitors see the fall first and then the cave.' },
      { q: 'Is there a student discount?', a: 'Yes, there is a concession rate for Nepali students; carry your student ID and show it at the counter to use it.' },
    ],
  },
};

const hours: Record<Locale, GuideEntry> = {
  ne: {
    key: 'hours',
    title: 'पाताले छाँगो खुल्ने समय र उत्तम भ्रमण समय (२०८२/२०२६)',
    description: `${A.fullName} को खुल्ने समय दैनिक करिब ${A.hours.textEn} हो। वर्षा/सुख्खाको फरक, तस्बिरका लागि बिहानको सुझाव र भीड कम गर्ने समय।`,
    kicker: 'खुल्ने समय · Timings',
    h1: 'खुल्ने समय र उत्तम मौसम',
    lead: `अधिकांश सूचीअनुसार ${A.fullName} दैनिक करिब ${A.hours.textEn} खुल्छ। मौसमअनुसार फरक हुन सक्ने भएकाले जानुअघि काउन्टरमा पुष्टि गर्नुहोस्।`,
    updated: 'अपडेट: सेप्टेम्बर २०२६',
    blocks: [
      { heading: 'दैनिक समय', body: [`सामान्यतया करिब ${A.hours.textEn} (प्रायः बिहानदेखि साँझसम्म)।`, 'चाडपर्व, मौसम वा स्थानीय व्यवस्थापनअनुसार समय बदलिन सक्छ।'] },
      { heading: 'वर्षा बनाम सुख्खा', body: ['वर्षा र वर्षापछि (करिब जुन–सेप्टेम्बर) मा पानीको बहाव सबैभन्दा बलियो र दृश्य प्रभावशाली हुन्छ।', 'सुख्खा समयमा चट्टानका तह र साँघुरो खोंच स्पष्ट देखिन्छ।'] },
      { heading: 'तस्बिरका लागि बिहान', body: ['बिहानको समयमा भीड कम हुन्छ र उज्यालो अनुकूल हुन्छ।', 'वर्षामा लेन्स कपडा साथमा राख्नुहोस्; फोहरा लेन्स भिजाउन सक्छ।'] },
      { heading: 'भीड कम गर्ने समय', body: ['डिसेम्बर–फेब्रुअरीको मुख्य सिजनमा दिउँसो भीड हुन सक्छ।', 'खुल्ने बेला वा बेलुकी जाँदा सजिलो हुन्छ।'] },
    ],
    faq: [
      { q: 'खुल्ने समय कति हो?', a: `अधिकांश सूचीअनुसार ${A.fullName} दैनिक करिब ${A.hours.textEn} खुल्छ। समय बदलिन सक्ने भएकाले जानुअघि काउन्टरमा पुष्टि गर्नुहोस्।` },
      { q: 'सबैभन्दा राम्रो समयमा कहिले जाने?', a: 'वर्षा र वर्षापछिको समयमा बहाव बलियो हुन्छ। वर्षामा दृश्य प्रभावशाली भए पनि रेलिङ, ढुंगा र गुफा आसपास चिप्लो हुन सक्छ; सुरक्षित जुत्ता उपयोगी हुन्छ।' },
      { q: 'कहिले नजाने?', a: 'बेलुकीपख धेरै बन्द हुन सक्ने भएकाले खुल्ने समयभित्रै पुग्नुहोस्। वर्षामा बाढी/सावधानीका कारण अवलोकन सीमित हुन सक्छ।' },
      { q: 'तस्बिर खिच्न कहाँ राम्रो?', a: 'मुख्य रेलिङको तिरछो कोणबाट खोंच र पानीको गहिराइ एउटै फ्रेममा आउँछ। वर्षामा लेन्स कपडा उपयोगी हुन्छ।' },
    ],
  },
  en: {
    key: 'hours',
    title: 'Devi’s Fall Pokhara Opening Hours & Best Time to Visit (2026)',
    description: `${A.fullName} is generally open daily about ${A.hours.textEn}. Monsoon vs dry differences, morning photo tips and when to avoid crowds.`,
    kicker: 'Opening hours · Timings',
    h1: 'Opening hours & best time to visit',
    lead: `Most listings show ${A.fullName} open daily from about ${A.hours.textEn}. Hours can shift, so confirm at the counter before you go.`,
    updated: 'Updated: September 2026',
    blocks: [
      { heading: 'Daily timing', body: [`Typically about ${A.hours.textEn} (roughly morning to evening).`, 'Timing can change with festivals, weather or local management.'] },
      { heading: 'Monsoon vs dry', body: ['During and just after the monsoon (roughly June–September) the flow is strongest and the scene is most dramatic.', 'In the dry season the rock layers and narrow gorge are clearer.'] },
      { heading: 'Mornings for photos', body: ['Mornings are less crowded and the light is favourable.', 'Carry a lens cloth in the monsoon; spray can wet the lens.'] },
      { heading: 'When to avoid crowds', body: ['The Dec–Feb peak season can get busy midday.', 'Arriving at opening or later in the day is easier.'] },
    ],
    faq: [
      { q: 'What are Devi’s Fall Pokhara opening hours (timings)?', a: `Most visitor listings show ${A.fullName} (${A.localName}) open daily from about ${A.hours.textEn}. Hours can shift with weather, festivals or local management, so confirm the day’s timing at the ticket counter before you set out.` },
      { q: 'What is the best time to visit Devi’s Fall?', a: 'Flow is strongest during and just after the monsoon (roughly June–September), when the fall looks most dramatic; the dry season reveals the eroded rock layers and the narrow gorge more clearly. Mornings are usually less crowded, and railings, stones and the cave area can be slippery in rain, so wear shoes with grip.' },
      { q: 'When should I avoid going?', a: 'Try to arrive within opening hours; late evening may mean closures. During the monsoon, viewing can be limited by high water and safety caution.' },
      { q: 'Where is the best spot for photos?', a: 'From the angled railing you get the gorge and the water’s depth in one frame. Carry a lens cloth in the monsoon (spray is heavy).' },
    ],
  },
};

const reach: Record<Locale, GuideEntry> = {
  ne: {
    key: 'reach',
    title: 'पाताले छाँगो कसरी पुग्ने: लेकसाइडबाट बाटो (२०८२/२०२६)',
    description: `${A.cityName} को लेकसाइडबाट ${A.fullName} कसरी पुग्ने? ट्याक्सी/राइड (करिब १०–१५ मिनेट), स्थानीय बस, स्कुटर र चोरेपाटन पार्किङको बारेमा।`,
    kicker: 'यातायात · How to reach',
    h1: 'लेकसाइडबाट कसरी जाने',
    lead: `${A.fullName} (${A.localName}) चोरेपाटन, ${A.cityName} मा छ — लेकसाइडबाट ट्याक्सीमा करिब १०–१५ मिनेट। तल विकल्पहरू छन्।`,
    updated: 'अपडेट: सेप्टेम्बर २०२६',
    blocks: [
      { heading: 'ट्याक्सी / राइड', body: ['लेकसाइडबाट सबैभन्दा सीधा विकल्प; ट्राफिकअनुसार करिब १०–१५ मिनेट।', `चालकलाई “पाताले छाँगो, चोरेपाटन / Devi’s Fall” भन्नुहोस्।`] },
      { heading: 'स्थानीय बस', body: ['सिद्धार्थ राजमार्ग/चोरेपाटनतर्फ जाने बस वा माइक्रो समात्न सकिन्छ।', 'चढ्नुअघि सहचालकसँग “डेभिस फल/पाताले छाँगो” रोकाइ पुष्टि गर्नुहोस्।'] },
      { heading: 'स्कुटर / मोटरसाइकल', body: ['H10/सिद्धार्थ राजमार्ग हुँदै चोरेपाटन प्रवेश गर्नुहोस्।', 'भीडको समयमा प्रवेशद्वार अगाडि अनियमित पार्किङ नगर्नुहोस्।'] },
      { heading: 'पार्किङ', body: [`मुख्य प्रवेश आसपास स्थानीय/सडकछेउ पार्किङ भेटिन सक्छ, तर भीडमा ठाउँ सीमित हुन सक्छ।`, 'गेट वा ट्राफिक अवरुद्ध नगर्नुहोस्; शुल्क र उपलब्धता स्थलमै सोध्नुहोस्।'] },
    ],
    faq: [
      { q: 'लेकसाइडबाट कसरी जाने?', a: 'ट्याक्सी वा राइड सबैभन्दा सीधा विकल्प हो र ट्राफिकअनुसार करिब १०–१५ मिनेट लाग्न सक्छ। स्थानीय बसमा चोरेपाटन/सिद्धार्थ राजमार्गतर्फ जाने र झरना नजिक झर्ने विकल्प पनि छ।' },
      { q: 'कति समय लाग्छ?', a: 'लेकसाइडबाट ट्याक्सीमा ट्राफिकअनुसार करिब १०–१५ मिनेट लाग्छ।' },
      { q: 'पार्किङ छ?', a: 'मुख्य प्रवेश आसपास स्थानीय/सडकछेउ पार्किङ भेटिन सक्छ, तर भीडमा ठाउँ सीमित हुन सक्छ। शुल्क र उपलब्धता स्थलमै सोध्नुहोस्।' },
      { q: 'हवाई मैदानबाट कसरी जाने?', a: 'पोखरा विमानस्थलबाट पनि ट्याक्सी/राइड सबैभन्दा सहज हो; लेकसाइड हुँदै वा सिधै चोरेपाटनतर्फ जान सकिन्छ (समय ट्राफिकअनुसार)।' },
    ],
  },
  en: {
    key: 'reach',
    title: 'How to Reach Devi’s Fall Pokhara from Lakeside (2026)',
    description: `How to get to ${A.fullName} from ${A.cityName} Lakeside: taxi/ride (about 10–15 min), local bus, scooter and Chhorepatan parking.`,
    kicker: 'Getting there · How to reach',
    h1: 'How to reach from Lakeside',
    lead: `${A.fullName} (${A.localName}) is in Chhorepatan, ${A.cityName} — about 10–15 minutes by taxi from Lakeside. Options below.`,
    updated: 'Updated: September 2026',
    blocks: [
      { heading: 'Taxi / ride', body: ['The most direct option from Lakeside; about 10–15 minutes depending on traffic.', 'Tell the driver “पाताले छाँगो, Chhorepatan / Devi’s Fall”.'] },
      { heading: 'Local bus', body: ['Buses or micros heading along the Siddhartha Highway toward Chhorepatan also stop near the falls.', 'Confirm the “Devi’s Fall / पाताले छाँगो” stop with the conductor before boarding.'] },
      { heading: 'Scooter / motorcycle', body: ['Enter Chhorepatan via H10 / the Siddhartha Highway.', 'Avoid irregular parking right at the entrance when it is busy.'] },
      { heading: 'Parking', body: ['Some local/roadside parking may be found near the main entrance, but it fills up when busy.', 'Do not block the gate or traffic; ask on site about fees and availability.'] },
    ],
    faq: [
      { q: 'How do I get to Devi’s Fall from Pokhara Lakeside?', a: 'A taxi or ride is the most direct option and usually takes about 10–15 minutes depending on traffic; ask for “पाताले छाँगो / Devi’s Fall, Chhorepatan”. Local buses and micros heading along the Siddhartha Highway toward Chhorepatan also stop near the falls—confirm the stop with the conductor before boarding.' },
      { q: 'How long does it take?', a: 'By taxi from Lakeside it is about 10–15 minutes depending on traffic.' },
      { q: 'Is there parking?', a: 'Some local/roadside parking may be found near the main entrance, but it fills up when busy. Ask on site about fees and availability and do not block the gate.' },
      { q: 'How to reach from the airport?', a: 'From Pokhara airport a taxi/ride is simplest; you can go via Lakeside or directly toward Chhorepatan (time depends on traffic).' },
    ],
  },
};

export const guides: Record<GuideKey, Record<Locale, GuideEntry>> = { fee, hours, reach };
