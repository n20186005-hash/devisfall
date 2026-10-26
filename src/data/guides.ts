import type { Locale, PageKey } from '../i18n';
import type { FaqItem } from '../content/types';

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

export const guides: Record<GuideKey, Record<Locale, GuideEntry>> = {
  "fee": {
    "en": {
      "key": "fee",
      "title": "Devi’s Fall admission: current ticket checks during the closure listing",
      "description": "Current Devi’s Fall admission is unconfirmed: dated temporary-closure listing, fee and concession checks, separate cave entry and avoiding unverified ticket offers.",
      "kicker": "Visitor information · dated source limits",
      "h1": "Admission and ticket checks",
      "lead": "Google Maps listed Devi’s Fall as temporarily closed on 26 October 2026. A current management explanation, reopening date and admission timetable have not been verified.",
      "updated": "Sources checked: 26 October 2026",
      "blocks": [
        {
          "heading": "No current sale or price confirmed",
          "body": [
            "Google Maps listed Devi’s Fall as temporarily closed on 26 October 2026. A current management explanation, reopening date and admission timetable have not been verified.",
            "Older rate lists do not show that tickets can be bought or used today. Confirm that access is permitted before discussing the fee; no numeric current tariff is presented here."
          ]
        },
        {
          "heading": "Questions for the responsible management",
          "body": [
            "Ask which areas are open on your intended date, whether a ticket is required and which rate applies to you. If concessions are offered, ask what identification is needed. Verify payment and receipt arrangements directly rather than relying on an old photograph or third-party tour offer."
          ]
        },
        {
          "heading": "The cave is a separate destination",
          "body": [
            "NTB describes Gupteshwar Mahadev Cave on the other side of the fall. That relationship does not establish a combined ticket, present waterfall admission or a guaranteed view from the cave. Check the cave’s own arrangements independently."
          ]
        }
      ],
      "faq": [
        {
          "q": "What is the current entry fee?",
          "a": "No current price has been verified. Confirm permission to enter and the applicable rate with management before making arrangements."
        },
        {
          "q": "Does a tour sale prove the fall is open?",
          "a": "No. A third-party offer does not override the dated closure listing or establish management permission."
        },
        {
          "q": "Is the cave included?",
          "a": "Do not assume a shared ticket or access. Verify each destination separately."
        }
      ]
    },
    "ne": {
      "key": "fee",
      "title": "पाताले छाँगो प्रवेश शुल्क: बन्द सूची हुँदा टिकटबारे पुष्टि",
      "description": "पाताले छाँगोको हालको प्रवेश अपुष्ट: मितिसहितको अस्थायी बन्द सूची, शुल्क र छुटबारे सोध्ने विषय, छुट्टै गुफा प्रवेश र अपुष्ट टिकट प्रस्तावबाट सावधानी।",
      "kicker": "यात्रा जानकारी · मितिसहित स्रोतको सीमा",
      "h1": "प्रवेश र टिकटबारे पुष्टि",
      "lead": "२६ अक्टोबर २०२६ मा Google Maps मा पाताले छाँगो अस्थायी रूपमा बन्द देखिएको थियो। हालको व्यवस्थापनको कारण, पुनः खुल्ने मिति र प्रवेश समय पुष्टि गरिएको छैन।",
      "updated": "स्रोत जाँच: २६ अक्टोबर २०२६",
      "blocks": [
        {
          "heading": "हालको बिक्री वा मूल्य पुष्टि छैन",
          "body": [
            "२६ अक्टोबर २०२६ मा Google Maps मा पाताले छाँगो अस्थायी रूपमा बन्द देखिएको थियो। हालको व्यवस्थापनको कारण, पुनः खुल्ने मिति र प्रवेश समय पुष्टि गरिएको छैन।",
            "पुराना दर सूचीले आज टिकट किन्न वा प्रयोग गर्न सकिन्छ भन्ने देखाउँदैनन्। शुल्क बुझ्नुअघि प्रवेश अनुमति छ कि छैन पुष्टि गर्नुहोस्; यहाँ हालको निश्चित दर प्रस्तुत गरिएको छैन।"
          ]
        },
        {
          "heading": "जिम्मेवार व्यवस्थापनलाई सोध्ने कुरा",
          "body": [
            "जाने मितिमा कुन क्षेत्र खुला छन्, टिकट आवश्यक छ कि छैन र आफूलाई कुन दर लागू हुन्छ सोध्नुहोस्। छुट भए कस्तो परिचयपत्र चाहिन्छ बुझ्नुहोस्। पुरानो तस्बिर वा तेस्रो पक्षको टुर प्रस्तावमा भर नपरी भुक्तानी र रसिदको व्यवस्था प्रत्यक्ष पुष्टि गर्नुहोस्।"
          ]
        },
        {
          "heading": "गुफा छुट्टै गन्तव्य हो",
          "body": [
            "पर्यटन बोर्डले झरनाको अर्कोपट्टि गुप्तेश्वर महादेव गुफाको वर्णन गर्छ। यो सम्बन्धले संयुक्त टिकट, अहिले झरनामा प्रवेश वा गुफाबाट निश्चित दृश्यको पुष्टि गर्दैन। गुफाको आफ्नै व्यवस्था छुट्टै बुझ्नुहोस्।"
          ]
        }
      ],
      "faq": [
        {
          "q": "हालको प्रवेश शुल्क कति हो?",
          "a": "हालको मूल्य पुष्टि गरिएको छैन। व्यवस्था गर्नुअघि प्रवेश अनुमति र लागू दर व्यवस्थापनसँग बुझ्नुहोस्।"
        },
        {
          "q": "टुर बिक्री हुँदा झरना खुला भएको प्रमाण हुन्छ?",
          "a": "हुँदैन। तेस्रो पक्षको प्रस्तावले मितिसहितको बन्द सूची हटाउँदैन वा व्यवस्थापनको अनुमति स्थापित गर्दैन।"
        },
        {
          "q": "गुफा पनि समावेश हुन्छ?",
          "a": "एउटै टिकट वा प्रवेश मान्नुहोस् भन्ने छैन। प्रत्येक स्थल अलग पुष्टि गर्नुहोस्।"
        }
      ]
    }
  },
  "hours": {
    "en": {
      "key": "hours",
      "title": "Devi’s Fall opening status: temporary-closure listing and timing checks",
      "description": "Maps lists a temporary closure checked 26 October 2026. Current hours, reason and reopening remain unconfirmed; old schedules and cave opening do not prove admission.",
      "kicker": "Visitor information · dated source limits",
      "h1": "Opening status and timing checks",
      "lead": "Google Maps listed Devi’s Fall as temporarily closed on 26 October 2026. A current management explanation, reopening date and admission timetable have not been verified.",
      "updated": "Sources checked: 26 October 2026",
      "blocks": [
        {
          "heading": "The dated status is the starting point",
          "body": [
            "Google Maps listed Devi’s Fall as temporarily closed on 26 October 2026. A current management explanation, reopening date and admission timetable have not been verified.",
            "The notice supplies no reopening date. It is a third-party listing, not a management statement about why the site is closed. Do not interpret an old daily timetable as current permission to visit."
          ]
        },
        {
          "heading": "What confirmation should include",
          "body": [
            "Ask the responsible management about your intended date, the areas open, last admission, restrictions and any changes during the day. A nearby cave’s hours or a tour booking is not a substitute for that confirmation."
          ]
        },
        {
          "heading": "Historical flow is not an access forecast",
          "body": [
            "The gallery contains photographs taken in 2013 and 2018, including a July scene. They illustrate different water-and-rock appearances, not today’s flow or safe viewing conditions. Do not infer reopening from a season or weather outlook."
          ]
        }
      ],
      "faq": [
        {
          "q": "Is it open daily?",
          "a": "Google Maps listed Devi’s Fall as temporarily closed on 26 October 2026. A current management explanation, reopening date and admission timetable have not been verified."
        },
        {
          "q": "Why is it temporarily closed?",
          "a": "No current management explanation has been verified. Historical closure reports do not prove the reason for the present Maps notice."
        },
        {
          "q": "When will it reopen?",
          "a": "No verified reopening date is available in the sources read. Obtain fresh management confirmation before travelling."
        }
      ]
    },
    "ne": {
      "key": "hours",
      "title": "पाताले छाँगो खुल्ने अवस्था: अस्थायी बन्द सूची र समय पुष्टि",
      "description": "२६ अक्टोबर २०२६ मा जाँचिएको Maps मा अस्थायी बन्द सूची। हालको समय, कारण र पुनः खुल्ने मिति अपुष्ट; पुरानो समय वा गुफा खुल्नु प्रवेशको प्रमाण होइन।",
      "kicker": "यात्रा जानकारी · मितिसहित स्रोतको सीमा",
      "h1": "खुल्ने अवस्था र समय पुष्टि",
      "lead": "२६ अक्टोबर २०२६ मा Google Maps मा पाताले छाँगो अस्थायी रूपमा बन्द देखिएको थियो। हालको व्यवस्थापनको कारण, पुनः खुल्ने मिति र प्रवेश समय पुष्टि गरिएको छैन।",
      "updated": "स्रोत जाँच: २६ अक्टोबर २०२६",
      "blocks": [
        {
          "heading": "मितिसहितको अवस्था पहिले बुझ्नुहोस्",
          "body": [
            "२६ अक्टोबर २०२६ मा Google Maps मा पाताले छाँगो अस्थायी रूपमा बन्द देखिएको थियो। हालको व्यवस्थापनको कारण, पुनः खुल्ने मिति र प्रवेश समय पुष्टि गरिएको छैन।",
            "सूचनामा पुनः खुल्ने मिति छैन। यो किन बन्द छ भन्ने व्यवस्थापनको भनाइ नभई तेस्रो पक्षको सूची हो। पुरानो दैनिक समयलाई हाल भ्रमण गर्ने अनुमति नमान्नुहोस्।"
          ]
        },
        {
          "heading": "पुष्टिमा के हुनुपर्छ",
          "body": [
            "जिम्मेवार व्यवस्थापनसँग जाने मिति, खुला क्षेत्र, अन्तिम प्रवेश, प्रतिबन्ध र दिनभरिको सम्भावित परिवर्तनबारे सोध्नुहोस्। छेउको गुफाको समय वा टुर बुकिङ त्यसको विकल्प होइन।"
          ]
        },
        {
          "heading": "पुरानो बहाव प्रवेशको पूर्वानुमान होइन",
          "body": [
            "ग्यालरीमा जुलाईको दृश्यसहित सन् २०१३ र २०१८ मा खिचिएका तस्बिर छन्। तिनले पानी र चट्टानका भिन्न दृश्य बुझाउँछन्, आजको बहाव वा सुरक्षित अवलोकन होइन। मौसम वा ऋतुबाट पुनः खुल्ने अनुमान नगर्नुहोस्।"
          ]
        }
      ],
      "faq": [
        {
          "q": "दैनिक खुला हुन्छ?",
          "a": "२६ अक्टोबर २०२६ मा Google Maps मा पाताले छाँगो अस्थायी रूपमा बन्द देखिएको थियो। हालको व्यवस्थापनको कारण, पुनः खुल्ने मिति र प्रवेश समय पुष्टि गरिएको छैन।"
        },
        {
          "q": "अस्थायी रूपमा किन बन्द छ?",
          "a": "हालको व्यवस्थापनको स्पष्टीकरण पुष्टि गरिएको छैन। पुराना बन्दसम्बन्धी समाचारले अहिलेको Maps सूचनाको कारण प्रमाणित गर्दैनन्।"
        },
        {
          "q": "कहिले पुनः खुल्छ?",
          "a": "पढिएका स्रोतमा पुष्टि भएको पुनः खुल्ने मिति उपलब्ध छैन। यात्राअघि व्यवस्थापनसँग नयाँ पुष्टि लिनुहोस्।"
        }
      ]
    }
  },
  "reach": {
    "en": {
      "key": "reach",
      "title": "How to locate Devi’s Fall in Chhorepatan and check access before travel",
      "description": "Find the correct Chhorepatan waterfall map point, distinguish Gupteshwar Cave and verify transport, mobility and return arrangements while access remains unconfirmed.",
      "kicker": "Visitor information · dated source limits",
      "h1": "Location and conditional travel planning",
      "lead": "Google Maps listed Devi’s Fall as temporarily closed on 26 October 2026. A current management explanation, reopening date and admission timetable have not been verified.",
      "updated": "Sources checked: 26 October 2026",
      "blocks": [
        {
          "heading": "Use the correct destination",
          "body": [
            "The map place point is 28.1895642, 83.9586637 for Devi’s Fall / Patale Chhango in Chhorepatan, H10, Pokhara 33700. The listed phone +9779805889741 comes from Maps and has not been independently verified as the current management contact.",
            "Google Maps listed Devi’s Fall as temporarily closed on 26 October 2026. A current management explanation, reopening date and admission timetable have not been verified."
          ]
        },
        {
          "heading": "Transport choices to verify",
          "body": [
            "For a taxi or ride, agree on the exact destination, route, fare, luggage requirements and return pickup. For public transport, check a current service and stop with the operator before boarding. This guide has not verified current bus timetables, fares or fixed journey times from Lakeside or either airport."
          ]
        },
        {
          "heading": "Walking, parking and another destination",
          "body": [
            "Review the actual route and your mobility needs; neither a map pin nor an old photograph proves an accessible entrance, parking space or open gate. Gupteshwar Cave is separately described by NTB: check its own arrangements rather than using it as proof that the fall is open."
          ]
        }
      ],
      "faq": [
        {
          "q": "Can I rely on a short taxi time?",
          "a": "No fixed journey time is verified here. Confirm actual traffic, pickup and access before agreeing on a plan."
        },
        {
          "q": "Is the cave the same entrance?",
          "a": "Treat the cave as a separate destination with its own access and arrangements."
        },
        {
          "q": "Can I travel assuming the gate is open?",
          "a": "Google Maps listed Devi’s Fall as temporarily closed on 26 October 2026. A current management explanation, reopening date and admission timetable have not been verified."
        }
      ]
    },
    "ne": {
      "key": "reach",
      "title": "छोरेपाटनको पाताले छाँगो स्थान र यात्राअघि प्रवेश जाँच",
      "description": "छोरेपाटनको झरनाको सही नक्सा बिन्दु, गुप्तेश्वर गुफासँगको भिन्नता र प्रवेश अपुष्ट हुँदा यातायात, आवागमन तथा फर्कने व्यवस्था पुष्टि।",
      "kicker": "यात्रा जानकारी · मितिसहित स्रोतको सीमा",
      "h1": "स्थान र सर्तसहित यात्रा योजना",
      "lead": "२६ अक्टोबर २०२६ मा Google Maps मा पाताले छाँगो अस्थायी रूपमा बन्द देखिएको थियो। हालको व्यवस्थापनको कारण, पुनः खुल्ने मिति र प्रवेश समय पुष्टि गरिएको छैन।",
      "updated": "स्रोत जाँच: २६ अक्टोबर २०२६",
      "blocks": [
        {
          "heading": "सही गन्तव्य प्रयोग गर्नुहोस्",
          "body": [
            "नक्साको स्थानबिन्दु 28.1895642, 83.9586637 हो। यो छोरेपाटन, H10, पोखरा ३३७०० स्थित पाताले छाँगो / Devi’s Fall को हो। सूचीकृत फोन +9779805889741 Google Maps बाट लिइएको हो; हालको व्यवस्थापन सम्पर्क हो भन्ने स्वतन्त्र पुष्टि छैन।",
            "२६ अक्टोबर २०२६ मा Google Maps मा पाताले छाँगो अस्थायी रूपमा बन्द देखिएको थियो। हालको व्यवस्थापनको कारण, पुनः खुल्ने मिति र प्रवेश समय पुष्टि गरिएको छैन।"
          ]
        },
        {
          "heading": "पुष्टि गर्नुपर्ने यातायात विकल्प",
          "body": [
            "ट्याक्सी वा सवारीका लागि ठ्याक्कै गन्तव्य, बाटो, भाडा, सामान र फर्कने सवारी तय गर्नुहोस्। सार्वजनिक यातायातमा चढ्नुअघि सञ्चालकसँग हालको सेवा र बिसौनी बुझ्नुहोस्। यस गाइडले लेकसाइड वा कुनै विमानस्थलबाट हालको बस समय, भाडा वा निश्चित यात्रा समय पुष्टि गरेको छैन।"
          ]
        },
        {
          "heading": "हिँडाइ, पार्किङ र अर्को गन्तव्य",
          "body": [
            "वास्तविक बाटो र आफ्नो आवागमन आवश्यकता बुझ्नुहोस्; नक्साको बिन्दु वा पुरानो तस्बिरले पहुँचयोग्य प्रवेश, पार्किङ वा खुला गेट प्रमाणित गर्दैन। पर्यटन बोर्डले गुप्तेश्वर गुफा अलग वर्णन गर्छ: झरना खुला भएको प्रमाण मान्नुको सट्टा यसको आफ्नै व्यवस्था बुझ्नुहोस्।"
          ]
        }
      ],
      "faq": [
        {
          "q": "छोटो ट्याक्सी समयमा भर पर्न सक्छु?",
          "a": "यहाँ निश्चित यात्रा समय पुष्टि छैन। योजना तय गर्नुअघि वास्तविक ट्राफिक, सवारी चढ्ने ठाउँ र प्रवेश बुझ्नुहोस्।"
        },
        {
          "q": "गुफा र झरनाको प्रवेश एउटै हो?",
          "a": "गुफालाई आफ्नै प्रवेश र व्यवस्था भएको छुट्टै गन्तव्य मान्नुहोस्।"
        },
        {
          "q": "गेट खुला छ मानेर यात्रा गर्न मिल्छ?",
          "a": "२६ अक्टोबर २०२६ मा Google Maps मा पाताले छाँगो अस्थायी रूपमा बन्द देखिएको थियो। हालको व्यवस्थापनको कारण, पुनः खुल्ने मिति र प्रवेश समय पुष्टि गरिएको छैन।"
        }
      ]
    }
  }
};
