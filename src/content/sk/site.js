import { createLocaleContent } from '../create-locale-content.js'

export const skContent = createLocaleContent({
  code: 'sk',
  name: 'Slovak',
  nativeName: 'Slovenčina',
  translated: true,
  homeLabel: 'Domov',
  heroTitle: 'Medzinárodný nábor pre firmy, ktoré potrebujú ľudí na prevádzkové pozície bez meškania.',
  heroLead:
    'Štruktúra webu je už pripravená na generovanie leadov, viacjazyčný SEO rast, kvízy, prípadové štúdie a konzultačné CTA pre B2B klientov.',
})

skContent.site.description =
  'Znížte náklady na personál až o 54 % vďaka medzinárodnému náboru pracovníkov z Ázie a Afriky na kľúč.'

skContent.navigation.items = [
  { key: 'home', label: 'Domov' },
  { key: 'services', label: 'Služby' },
  { key: 'industries', label: 'Odvetvia' },
  { key: 'cases', label: 'Prípadové štúdie' },
  { key: 'report', label: 'Report' },
  { key: 'contacts', label: 'Kontakty' },
]

skContent.navigation.primaryCta = 'Vypočítať nábor'
skContent.navigation.secondaryCta = 'Rezervovať hovor'

skContent.home = {
  meta: {
    title: 'Medzinárodný nábor pracovníkov pre firmy',
    description:
      'Znížte náklady na personál a vyriešte nedostatok zamestnancov vďaka medzinárodnému náboru pracovníkov z Ázie a Afriky na kľúč.',
  },
  hero: {
    lines: ['ZNÍŽTE NÁKLADY', 'NA PERSONÁL'],
    highlight: 'AŽ O 54 %',
    lead:
      'vďaka medzinárodnému náboru pracovníkov z <strong>Ázie a Afriky</strong> na kľúč',
    stats: [
      { value: 10, suffix: ' DNÍ', label: 'výber prvých kandidátov' },
      { value: 7, suffix: ' ROKOV', label: 'skúseností v medzinárodnom nábore' },
      { value: 100, suffix: ' %', label: 'podpora dokumentov a príchodu' },
    ],
    video: {
      src: '/videos/international-recruitment-overview.mp4',
      poster: '/video-poster-home.svg',
      type: 'video/mp4',
    },
  },
  comparison: {
    eyebrow: 'Porovnanie modelu náboru',
    title: 'Koľko firma prepláca za lokálny nábor',
    cards: [
      {
        title: 'Ostatní',
        brandNote: 'lokálny nábor / iné agentúry',
        amount: '$36 000',
        period: '/ mesiac',
        note: 'pre tím 30 pracovníkov',
        variant: 'other',
        rows: [
          {
            title: 'Vyšší platový základ',
            text: 'V priemere 1000 – 1400 $ na pracovníka pri lokálnom nábore.',
          },
          {
            title: 'Dlhšie spustenie tímu',
            text: 'Výber prvých ľudí trvá 3 – 6 týždňov alebo dlhšie.',
          },
          {
            title: 'Neustály opakovaný nábor',
            text: 'Kvôli fluktuácii a sezónnosti sa firma neustále vracia k hľadaniu.',
          },
        ],
      },
      {
        title: 'VW Recruit',
        brandNote: 'medzinárodný nábor na kľúč',
        amount: '$18 000',
        period: '/ mesiac',
        note: 'pre tím 30 pracovníkov',
        variant: 'brand',
        rows: [
          {
            title: 'Nižšie priemerné náklady',
            text: 'V priemere 400 – 700 $ na pracovníka v závislosti od roly a krajiny.',
          },
          {
            title: 'Prví kandidáti za 7 – 14 dní',
            text: 'Rýchle spustenie náboru cez medzinárodnú databázu a partnerskú sieť.',
          },
          {
            title: 'Stabilnejší tím',
            text: 'Menej cyklov opakovaného hľadania a lepšia predvídateľnosť pre firmu.',
          },
        ],
      },
    ],
    cta: 'Vypočítať nábor',
  },
  industries: {
    eyebrow: 'Pre ktoré odvetvia je model vhodný',
    title: 'Najčastejšie sa tento model náboru využíva pre prevádzkové práce',
    lead:
      'Tvoríme tímy pre výrobu, sklady, stavebníctvo a služby, keď firma potrebuje predvídateľné spustenie a nižšie náklady na personál.',
    items: [
      {
        title: 'Sklady a logistika',
        text: 'Vytváranie tímov pre vychystávanie, balenie, presun tovaru a skladové operácie.',
      },
      {
        title: 'Stavebníctvo',
        text: 'Nábor pracovníkov pre stavebné projekty, montážne, pomocné a technické práce.',
      },
      {
        title: 'Hotely a služby',
        text: 'Nábor personálu pre upratovanie, kuchyňu, údržbu a každodenné prevádzkové činnosti.',
      },
      {
        title: 'Výroba',
        text: 'Nábor pracovníkov pre výrobné linky, balenie, triedenie a pomocné procesy.',
      },
    ],
  },
  calculator: {
    eyebrow: 'Kvízová kalkulácia',
    title: 'Vypočítajte si nábor pracovníkov pre váš podnik',
    lead:
      'Odpovedzte na niekoľko krátkych otázok a získajte kalkuláciu náboru tímu pre vašu firmu.',
  },
  casesSection: {
    eyebrow: 'Naše projekty',
    title: 'Naše projekty náboru pracovníkov',
    lead:
      'Ukazujeme, ako vyzerá nábor v reálnych projektoch: od výroby a skladov až po služby a prevádzkové tímy.',
    cta: 'Všetky projekty',
    items: [
      {
        title: 'Delta Pack',
        subtitle: 'Výrobný podnik, stredná Európa',
        problem: 'Vyriešili sme nedostatok 32 pracovníkov na baliacej linke po dlhom lokálnom nábore a vysokej fluktuácii.',
        image: '/images/industry-manufacturing.jpg',
        alt: 'Pracovníci na výrobnej linke',
      },
      {
        title: 'Nord Cargo Hub',
        subtitle: 'Skladový komplex a logistika',
        problem: 'Zostavili sme zmenový tím na vychystávanie a triedenie, keď firma nestíhala pokrývať špičky.',
        image: '/images/industry-logistics.jpg',
        alt: 'Pracovníci v sklade a logistike',
      },
      {
        title: 'Urban Build Group',
        subtitle: 'Stavebný dodávateľ',
        problem: 'Posilnili sme objekty montérmi a pomocnými robotníkmi, aby sme nenarušili termíny spustenia novej etapy stavby.',
        image: '/images/industry-construction.jpg',
        alt: 'Pracovníci na stavenisku',
      },
    ],
  },
  process: {
    eyebrow: 'Čo sa deje po odoslaní dopytu',
    title: 'Čo nasleduje po vašej požiadavke',
    intro:
      'Spresníme počet pracovníkov, požiadavky na kandidátov a termíny spustenia tímu. Následne sa spustí nábor cez našu databázu a partnerské agentúry v krajinách náboru.',
    steps: [
      {
        title: 'Analýza pozícií a spustenie náboru',
        text: 'Vytvoríme profil kandidáta, dohodneme termíny a začneme hľadať v relevantných zdrojoch.',
      },
      {
        title: 'Výber a overenie kandidátov',
        text: 'Kandidáti prejdú predbežným výberom, kontrolou dokumentov a základným pohovorom. Firma dostane profily na konečné schválenie.',
      },
      {
        title: 'Spracovanie dokumentov',
        text: 'Zabezpečíme prípravu všetkých potrebných dokumentov pre zamestnanie a príchod a kontrolujeme proces až do ich vyhotovenia.',
      },
      {
        title: 'Príchod a spustenie práce',
        text: 'Koordinujeme logistiku a príchod pracovníkov. Po príchode tím nastupuje do práce v podniku.',
      },
    ],
  },
  guarantees: {
    eyebrow: 'Záruky a bezpečnosť',
    title: 'Čo firma získava spolu s náborom',
    items: [
      {
        title: '100 % legalita',
        text: 'Preberáme zodpovednosť za kvóty, pracovné povolenia a vízové procesy, aby bola spoločnosť chránená pred kontrolami.',
      },
      {
        title: 'Bezplatná výmena',
        text: 'Poskytujeme záručnú dobu na výmenu kandidáta, ak projekt vyžaduje stabilitu na štarte.',
      },
      {
        title: 'Kompletná podpora na kľúč',
        text: 'Od pohovoru v Ázii až po stretnutie na letisku a nástup na zmenu s podporou pri adaptácii a komunikácii.',
      },
    ],
  },
  reportBlock: {
    eyebrow: 'Analytický materiál',
    title: 'Prečo lokálny nábor stráca na efektivite?',
    lead:
      'Získajte neverejný analytický report "Trh práce 2026: Integrácia medzinárodného personálu".',
    points: [
      'Porovnávacia tabuľka nákladov: Lokálny trh vs Expati',
      '5 právnych chýb pri zamestnávaní cudzincov',
      'Ako prekonať jazykovú bariéru vo výrobe',
    ],
    cta: 'Stiahnuť report v PDF',
  },
  reviews: {
    eyebrow: 'Dôvera',
    title: 'Lídri na trhu nám dôverujú',
    items: [
      {
        name: 'Oleksandr Koval',
        company: 'Prevádzkový riaditeľ, Delta Pack',
        text: 'Spoločnosť VW Recruit pre nás vyriešila nedostatok ľudí na výrobnej linke bez preťaženia interného HR. Najhodnotnejšie bolo, že tím prevzal tak nábor, ako aj podporu s dokumentmi.',
      },
      {
        name: 'Iryna Melnyk',
        company: 'HR Lead, Nord Cargo Hub',
        text: 'Získali sme nielen kandidátov, ale aj jasný proces spustenia tímu. Logistika, povolenia a koordinácia boli pod kontrolou, takže sklad vstúpil do sezóny bez výpadkov.',
      },
      {
        name: 'Taras Humeniuk',
        company: 'Projektový manažér, Urban Build Group',
        text: 'Bolo pre nás dôležité rýchlo posilniť stavby ľuďmi, ktorí reálne nastúpia na zmenu. VW Recruit zabezpečil predvídateľnosť termínov a silnú podporu aj po príchode kandidátov.',
      },
      {
        name: 'Maryna Savchuk',
        company: 'People Partner, East Service Group',
        text: 'Po začatí spolupráce sme prestali riešiť personálne požiare ručne. Tím VW Recruit rýchlo synchronizoval požiadavky, krajiny náboru a termíny nástupu ľudí na objekt.',
      },
      {
        name: 'Vitalij Bondar',
        company: 'Prevádzkový manažér, Metal Works',
        text: 'Páčila sa nám práve úroveň predvídateľnosti. Firma vedela, kedy kandidáti prídu, aké dokumenty sú už hotové a v akej fáze sa každý pracovník nachádza.',
      },
      {
        name: 'Natalija Černenko',
        company: 'HR Director, West Line Logistics',
        text: 'Pre logistiku je rýchlosť spustenia zmien kritická. S VW Recruit sme získali nielen nábor, ale normálnu operatívnu podporu až do nástupu ľudí do práce.',
      },
    ],
    metrics: [
      {
        value: '7 ROKOV',
        label: 'Skúseností v medzinárodnom nábore',
      },
      {
        value: '100 %',
        label: 'Kontrola dokumentov a legálneho vybavenia',
      },
      {
        value: '10 DNÍ',
        label: 'K prvým kandidátom v nábore',
      },
      {
        value: 'NA KĽÚČ',
        label: 'Podpora od výberu po nástup na zmenu',
      },
    ],
  },
  media: {
    eyebrow: 'Video a odpovede',
    title: 'Odpovede na hlavné otázky majiteľov firim',
    reels: [
      {
        title: 'Ako dlho trvá spustenie medzinárodného náboru?',
        text: 'Vysvetlíme, kedy firma získa prvých kandidátov, čo ovplyvňuje termíny a v akej fáze sa pripája dokumentačná podpora.',
        meta: 'Časová os spustenia',
        duration: '02:14',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Ako firma kontroluje legalitu a dokumenty?',
        text: 'Rozoberáme, aké kvóty, povolenia a vízové procesy vybavujeme, aby spoločnosť neniesla riziká pred kontrolami.',
        meta: 'Dokumenty a legalita',
        duration: '03:02',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Čo sa stane po príchode pracovníkov na projekt?',
        text: 'Ukazujeme, ako vyzerá adaptácia, začiatok zmeny, komunikácia s koordinátormi a podpora tímu v prvej fáze.',
        meta: 'Adaptácia a podpora',
        duration: '02:37',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
    ],
  },
  faq: {
    title: 'Často kladené otázky',
    items: [
      {
        q: 'Ako sa rieši jazyková bariéra?',
        a: 'Do procesu zahŕňame adaptáciu, základné školenie a komunikáciu cez koordinátora alebo majstra, aby sa tím rýchlo zapojil do práce.',
      },
      {
        q: 'Kto hľadá ubytovanie pre pracovníkov?',
        a: 'Model môže zahŕňať koordináciu ubytovania, logistiky a príchodu v závislosti od formátu spolupráce a krajiny spustenia.',
      },
      {
        q: 'Čo robiť, ak pracovník ochorie alebo nenastúpi na zmenu?',
        a: 'Na začiatku projektu sa dohodne rezerva, záručné podmienky pre výmenu a postup rýchlej komunikácie s vašou stranou.',
      },
    ],
  },
  finalCta: {
    title: 'Ste pripravení vyriešiť nedostatok zamestnancov a škálovať svoj biznis?',
    lead: 'Rezervujte si bezplatné 30-minútové Zoom stretnutie s naším Head of Recruitment.',
  },
}

skContent.forms.lead.title = 'Získať kalkuláciu náboru'
skContent.forms.lead.success = 'Ďakujeme. Vaša požiadavka bola uložená a ohľadom náboru vás budeme kontaktovať.'
skContent.forms.callback.title = 'Rezervovať hovor'
skContent.forms.callback.success = 'Ďakujeme. Vaša požiadavka na hovor bola uložená.'
skContent.forms.report.title = 'Získať report'
skContent.forms.report.success = 'Ďakujeme. Vašu požiadavku sme prijali a dokument v PDF vám čoskoro pošleme na e-mail.'
skContent.forms.contact.title = 'Odoslať dopyt'
skContent.forms.contact.success = 'Ďakujeme. Váš dopyt bol prijatý a tím VW Recruit vás bude kontaktovať s ďalším krokom.'
skContent.brand.tagline = 'Medzinárodný partner pre nábor'
skContent.brand.homeAriaLabel = 'VW Recruit domovská stránka'

skContent.about = {
  meta: {
    title: 'O spoločnosti VW Recruit',
    description:
      'Zistite viac o VW Recruit, medzinárodnom nábore pracovníkov, ceste k nasadeniu tímu a prístupu k spolupráci s firmami.',
  },
  title: 'O VW Recruit',
  lead:
    'Pomáhame firmám riešiť nedostatok personálu prostredníctvom medzinárodného náboru pracovníkov z Ázie a Afriky s jasnou cestou od dopytu až po nástup ľudí na zmenu.',
}

skContent.faqPage = {
  meta: {
    title: 'Často kladené otázky pre zamestnávateľov',
    description:
      'Odpovede na kľúčové otázky zamestnávateľov ohľadom medzinárodného náboru: termíny, dokumenty, spustenie tímu, adaptácia a formát spolupráce.',
  },
  title: 'Často kladené otázky pre zamestnávateľov',
  lead:
    'Zhromaždili sme kľúčové otázky o medzinárodnom nábore pracovníkov: od termínov spustenia a dokumentov po ubytovanie, adaptáciu a logiku podpory.',
}

skContent.privacy = {
  meta: {
    title: 'Zásady ochrany osobných údajov',
    description:
      'Prečítajte si zásady ochrany osobných údajov spoločnosti VW Recruit týkajúce sa zhromažďovania, spracovania a ochrany osobných údajov na webe.',
  },
  title: 'Zásady ochrany osobných údajov',
  sections: [
    {
      title: '1. Všeobecné ustanovenia',
      paragraphs: [
        'Tieto Zásady ochrany osobných údajov stanovujú postup zhromažďovania, používania, ukladania a ochrany osobných údajov používateľov webových stránok VW Recruit (ďalej len "Web"). Používaním nášho Webu súhlasíte s podmienkami týchto Zásad. Ak s týmito podmienkami nesúhlasíte, prestaňte, prosím, Web používať.',
      ],
    },
    {
      title: '2. Aké dáta zhromažďujeme',
      paragraphs: ['Pri používaní Webu môžeme zhromažďovať nasledujúce osobné údaje:'],
      items: [
        'Kontaktné údaje: meno, názov spoločnosti, e-mailová adresa, telefónne číslo. Tieto údaje poskytujete dobrovoľne pri vyplňovaní formulárov (napr. "Rezervovať hovor", "Získať report", "Vypočítať nábor").',
        'Technické dáta: IP adresa, typ prehliadača, typ zariadenia, údaje o návštevnosti stránok (pomocou súborov cookie a analytických nástrojov).',
      ],
    },
    {
      title: '3. Účel zhromažďovania a využitia dát',
      paragraphs: ['Zhromaždené osobné údaje sa používajú na:'],
      items: [
        'Kontaktovanie vašej osoby za účelom poskytnutia konzultácií ohľadom služieb medzinárodného náboru.',
        'Zasielanie vyžiadaných materiálov (napr. PDF reportov, kalkulácií nákladov).',
        'Zlepšenie fungovania Webu a analýzy efektivity našich marketingových kampaní.',
        'Zasielanie dôležitých oznámení a komerčných ponúk (s vaším súhlasom).',
      ],
    },
    {
      title: '4. Odovzdávanie údajov tretím stranám',
      paragraphs: [
        'Vaše osobné údaje nepredávame, nevymieňame ani neodovzdávame tretím stranám bez vášho súhlasu, s výnimkou prípadov stanovených zákonom. Údaje môžu byť prístupné našim spoľahlivým dodávateľom (napr. poskytovateľom hostingu, službám e-mailového marketingu), ktorí sú povinní zachovávať ich dôvernosť.',
      ],
    },
    {
      title: '5. Ochrana a uchovávanie dát',
      paragraphs: [
        'Prijímame príslušné technické a organizačné opatrenia na ochranu vašich údajov pred neoprávneným prístupom, zmenou, zverejnením alebo zničením. Údaje sú uchovávané len na dobu nevyhnutnú na naplnenie účelov uvedených v týchto Zásadách alebo v súlade so zákonnými požiadavkami.',
      ],
    },
    {
      title: '6. Práva používateľov',
      paragraphs: ['Máte právo:'],
      items: [
        'Získať prístup k svojim osobným údajom, ktoré uchovávame.',
        'Požiadať o opravu nepresností vo vašich údajoch.',
        'Požiadať o vymazanie vašich údajov ("právo byť zabudnutý").',
        'Kedykoľvek odvolať súhlas so spracovaním údajov.',
      ],
    },
    {
      title: '7. Využitie súborov Cookie',
      paragraphs: [
        'Náš Web používa súbory cookie na zabezpečenie správneho fungovania stránok, analytiky návštevnosti a zlepšenia používateľskej skúsenosti. Ukladanie súborov cookie môžete nastaviť alebo zakázať v nastaveniach vášho prehliadača.',
      ],
    },
    {
      title: '8. Zmeny Zásad ochrany osobných údajov',
      paragraphs: [
        'Vyhradzujeme si právo tieto Zásady aktualizovať. Zmeny vstupujú do platnosti okamihom ich zverejnenia na tejto stránke.',
      ],
    },
    {
      title: '9. Kontakty',
      paragraphs: [
        'Ak máte otázky týkajúce sa týchto Zásad ochrany osobných údajov alebo chcete uplatniť svoje práva na ochranu osobných údajov, kontaktujte nás prostredníctvom kontaktného formulára na Webe alebo e-mailom: [Váš Email, napr.: hello@vwrecruit.com].',
      ],
    },
  ],
}

skContent.terms = {
  meta: {
    title: 'Podmienky používania',
    description:
      'Prečítajte si podmienky používania webu VW Recruit, pravidlá komunikácie prostredníctvom formulárov a základné princípy poskytovania informácií na webe.',
  },
  title: 'Podmienky používania',
  sections: [
    {
      title: '1. Všeobecné ustanovenia',
      paragraphs: [
        'Tieto Podmienky používania (ďalej len "Podmienky") upravujú prístup a využívanie webových stránok VW Recruit (ďalej len "Web"). Prístupom na tento Web a jeho prezeraním plne súhlasíte s týmito Podmienkami.',
      ],
    },
    {
      title: '2. Služby spoločnosti',
      paragraphs: [
        'Web má výhradne informatívny charakter a je vytvorený na oboznámenie používateľov so službami medzinárodného náboru pracovníkov a na poskytnutie možnosti zanechať žiadosť o konzultácie, kalkulácie alebo analytické materiály. Vyplnenie formulára na webe nepredstavuje uzavretie zmluvy o poskytovaní služieb; zmluvné vzťahy sú formálne ošetrené zvlášť po individuálnej dohode.',
      ],
    },
    {
      title: '3. Povinnosti používateľa',
      paragraphs: ['Používateľ sa zaväzuje:'],
      items: [
        'Poskytovať pravdivé informácie (meno, kontaktné údaje spoločnosti) pri vyplňovaní formulárov na Webe.',
        'Nepoužívať Web na žiadne nelegálne alebo podvodné činnosti ani na šírenie škodlivého softvéru.',
        'Nepokúšať sa získať neoprávnený prístup k administračným systémom Webu.',
      ],
    },
    {
      title: '4. Duševné vlastníctvo',
      paragraphs: [
        'Všetky materiály umiestnené na Webu, vrátane textov (popisy služieb, prípadové štúdie, reporty), obrázkov, log ("VW Recruit"), grafiky a štruktúry dizajnu, sú vlastníctvom spoločnosti alebo sú používané na základe licencie. Akékoľvek kopírovanie, šírenie alebo využívanie materiálov Webu na komerčné účely bez predchádzajúceho písomného súhlasu vlastníka autorských práv je zakázané.',
      ],
    },
    {
      title: '5. Zrieknutie sa zodpovednosti',
      paragraphs: [
        'Informácie na Webe sú poskytované "tak ako sú". Snažíme sa udržiavať údaje aktuálne (napr. informácie o termínoch, nákladoch alebo zárukách výmeny), presné podmienky spolupráce sú však zakotvené výhradne v individuálnej zmluve.',
        'Spoločnosť nenesie zodpovednosť za prípadné technické výpadky v prevádzke Webu ani za dočasnú nemožnosť prístupu k nemu.',
        'Web môže obsahovať odkazy na zdroje tretích strán. Nenesieme zodpovednosť za obsah a zásady ochrany osobných údajov týchto externých zdrojov.',
      ],
    },
    {
      title: '6. Zmeny Podmienok používania',
      paragraphs: [
        'Správa Webu si vyhradzuje právo kedykoľvek vykonávať zmeny týchto Podmienok bez predchádzajúceho osobného upozornenia používateľov. Aktualizované znenie Podmienok nadobúda účinnosť okamihom jeho zverejnenia na tejto stránke. Odporúčame túto sekciu pravidelne kontrolovať.',
      ],
    },
    {
      title: '7. Riešenie sporov',
      paragraphs: [
        'Všetky spory vzniknuté v súvislosti s užívaním tohto Webu budú riešené rokovaním. V prípade nedosiahnutia dohody podlieha spor preskúmaniu v súlade s platnými právnymi predpismi [uveďte krajinu alebo jurisdikciu].',
      ],
    },
    {
      title: '8. Spätná väzba',
      paragraphs: [
        'Všetky otázky týkajúce sa prevádzky Webu alebo podmienok spolupráce smerujte na nás prostredníctvom formulára na stránke "Kontakty" alebo na adrese: [Váš Email / Telefón].',
      ],
    },
  ],
}

skContent.contacts = {
  meta: {
    title: 'Kontakty VW Recruit',
    description:
      'Kontaktujte VW Recruit ohľadom medzinárodného náboru pracovníkov, spustenia tímu, dokumentov a formátu spolupráce.',
  },
  title: 'Kontakty pre firmy, ktoré potrebujú rýchlo vyriešiť nedostatok personálu',
  summary: [
    {
      label: 'Odpoveď',
      value: 'počas pracovného dňa',
    },
    {
      label: 'Formát',
      value: 'hovor, Zoom alebo e-mail',
    },
    {
      label: 'Zameranie',
      value: 'zamestnávatelia a prevádzkové tímy',
    },
  ],
  channelsTitle: 'Ako je najpohodlnejšie začať',
  channelsLead:
    'Vyberte si formát, ktorý vám teraz najviac vyhovuje. Ak ešte nemáte finálne zadanie, môžete začať krátkym hovorom a k detailom prejsť neskôr.',
  channels: [
    {
      icon: 'brief',
      label: 'Žiadosť o nábor',
      title: 'Zanechajte dopyt podľa vašej potreby',
      text: 'Najpohodlnejší variant, ak už poznáte roly, približný počet pracovníkov alebo požadovaný termín nástupu tímu.',
      actionLabel: 'Otvoriť formulár',
      actionType: 'anchor',
      actionTarget: '#contact-form',
    },
    {
      icon: 'call',
      label: 'Rýchla synchronizácia',
      title: 'Zarezervujte si krátky hovor s tímom',
      text: 'Vhodné, ak potrebujete rýchlo zistiť, či je medzinárodný nábor vhodný práve pre váš prípad a aké budú ďalšie kroky.',
      actionLabel: 'Rezervovať hovor',
      actionType: 'modal',
      actionTarget: 'callback',
    },
    {
      icon: 'documents',
      label: 'Cesta spustenia',
      title: 'Upresnite dokumenty, termíny a logiku spustenia',
      text: 'Vysvetlíme proces od výberu a schválenia kandidátov po dokumenty, logistiku, príchod a nástup ľudí na zmenu.',
    },
  ],
  checklistTitle: 'Čo je užitočné si pripraviť pred kontaktom',
  checklistLead:
    'Nie je potrebné dokonale spracované zadanie. Aj základné informácie pomôžu rýchlejšie prejsť k vecnej konverzácii.',
  checklist: [
    'Aké konkrétne roly alebo oddelenia je potrebné posilniť',
    'Približný počet pracovníkov a požadovaný termín štartu',
    'Krajina a mesto, kde bude tím pracovať',
    'Či potrebujete len nábor, alebo plnú podporu až do spustenia',
  ],
  supportTitle: 'Čo môže tím vyjasniť už pri prvom kontakte',
  supportLead:
    'Prvý kontakt neslúži na formálnosť, ale na odstránenie neistoty a na to, aby sme ukázali, nakoľko sa náš model hodí pre váš dopyt.',
  support: [
    'Ako rýchlo je možné spustiť tok kandidátov',
    'Ktoré náborové krajiny sa k daným rolám hodia najlepšie',
    'Ako sú organizované dokumenty, povolenia a koordinácia príchodu',
    'Aký bude formát komunikácie a spustenia tímu po schválení',
  ],
  form: {
    title: 'Zanechajte dopyt a ozveme sa vám s ďalším krokom',
    lead:
      'Zanechajte nám kontakty a tím VW Recruit navrhne najpraktickejší formát štartu priamo pre vašu situáciu.',
    note: 'Najvhodnejšie pre zamestnávateľov, ktorí potrebujú nábor, výmenu alebo spustenie tímu.',
  },
}

skContent.thankYouReport = {
  meta: {
    title: 'Ďakujeme za žiadosť o report',
    description:
      'Vaša žiadosť o report bola uložená. Tím VW Recruit vás bude čoskoro kontaktovať a materiál vám zašle.',
  },
  title: 'Ďakujeme. Vaša žiadosť o report bola prijatá',
  lead:
    'Uložili sme vašu žiadosť a materiál vám čoskoro zašleme. Zároveň vám odporučíme praktický ďalší krok týkajúci sa vašej personálnej situácie.',
  ctaLabel: 'Späť na hlavnú stránku',
  secondaryCtaLabel: 'Otvoriť kontakty',
}

skContent.ui.modalClose = 'Zavrieť modálne okno'
skContent.ui.leadCapture = 'Zber leadov'
skContent.ui.video = 'Video'
skContent.ui.videoPlay = 'Prehrať video'
skContent.ui.openMenu = 'Otvoriť menu'
skContent.ui.primaryNav = 'Hlavná navigácia'
skContent.ui.languagePickerTitle = 'Vyberte jazyk'
skContent.ui.fieldName = 'Meno'
skContent.ui.fieldCompany = 'Spoločnosť'
skContent.ui.fieldEmail = 'E-mail'
skContent.ui.fieldPhone = 'Telefón'
skContent.ui.sendRequest = 'Odoslať dopyt'
skContent.ui.requestCallback = 'Rezervovať hovor'
skContent.ui.getReport = 'Získať report'
skContent.ui.bookCall = 'Rezervovať hovor'
skContent.ui.quizEyebrow = 'Kvíz'
skContent.ui.quizContinue = 'Pokračovať'
skContent.ui.quizBack = 'Späť'
skContent.ui.quizSubmit = 'Odoslať'
skContent.ui.quizReady = 'Hotovo'
skContent.ui.quizValidationError = 'Vyplňte, prosím, aktuálny krok.'
skContent.ui.quizSubmitError = 'Odoslanie formulára zlyhalo. Skúste to prosím znova.'
skContent.ui.processEyebrow = 'Proces'
skContent.ui.caseStudy = 'Prípadová štúdia'
skContent.ui.caseViewLabel = 'Zobraziť prípadovú štúdiu'
skContent.ui.leadCaptureEyebrow = 'Zber leadov'
skContent.ui.faqEyebrow = 'FAQ'
skContent.ui.aboutEyebrow = 'O nás'
skContent.ui.contactsEyebrow = 'Kontakty'
skContent.ui.reportEyebrow = 'Report'
skContent.ui.privacyEyebrow = 'Zásady ochrany osobných údajov'
skContent.ui.termsEyebrow = 'Podmienky používania'
skContent.ui.thankYouEyebrow = 'Ďakujeme'
skContent.ui.finalCtaEyebrow = 'Záverečné CTA'
skContent.ui.downloadReport = 'Stiahnuť report'
skContent.ui.openContactsPage = 'Otvoriť stránku kontaktov'
skContent.ui.projectsExamples = 'Príklady projektov'
skContent.ui.reelPlaceholder = 'Miesto pre reel alebo video v modálnom okne po pripojení zdrojov.'
skContent.ui.industriesLead =
  'Podniky najčastejšie využívajú tento model pre prevádzkové činnosti vo výrobe, skladoch, stavebníctve a sektore služieb.'
skContent.ui.legalPlaceholder = 'Tu bude právny text. Pred spustením ho nahraďte schválenou finálnou verziou.'
skContent.ui.footerDescription =
  'Nábor pracovníkov z Ázie a Afriky na kľúč: od vyhľadania kandidátov a dokumentov po príchod, adaptáciu a nástup tímu na zmenu.'
skContent.ui.footerCorePages = 'Hlavné stránky'
skContent.ui.footerLegal = 'Právne informácie'
skContent.ui.privacyPolicy = 'Zásady ochrany osobných údajov'
skContent.ui.termsAndConditions = 'Podmienky používania'
skContent.ui.formRequiredError = 'Vyplňte, prosím, povinné polia formulára.'
skContent.ui.formSubmittingButton = 'Odosiela sa...'
skContent.ui.formSubmittingStatus = 'Odosielanie formulára...'
skContent.ui.formSubmitError = 'Odoslanie formulára zlyhalo. Skúste to prosím znova.'
skContent.ui.industryVisualLogisticsAlt = 'Pracovníci v sklade a logistike'
skContent.ui.industryVisualConstructionAlt = 'Pracovníci na stavenisku'
skContent.ui.industryVisualHospitalityAlt = 'Personál v hotelierstve a službách'
skContent.ui.industryVisualManufacturingAlt = 'Pracovníci vo výrobe'
skContent.ui.industrySlidePlaceholder =
  'Samostatnú vizuálnu prípadovú štúdiu pre túto vertikálu je možné škálovať pre SEO stránky, kvízy a personalizované CTA.'
skContent.ui.comparisonCardCta = 'Vypočítať nábor'
skContent.ui.comparisonOtherMark = 'IN'
skContent.ui.guaranteesLegalDelta = 'Kvóty, povolenia, víza'
skContent.ui.guaranteesReplacementMetric = '0 €'
skContent.ui.guaranteesReplacementDelta = 'Rýchla výmena v záruke'
skContent.ui.guaranteesSupportMetric = 'Na kľúč'
skContent.ui.guaranteesSupportDelta = 'Od výberu po zmenu'
skContent.ui.guaranteesFallbackDelta = 'Výhoda VW Recruit'
skContent.ui.guaranteesReplacementLabel = 'Záruka pri spustení'
skContent.ui.guaranteesReplacementUnit = '€'
skContent.ui.guaranteesReplacementWarrantyDays = 30
skContent.ui.guaranteesReplacementWarrantyLabel = 'dní záruka'
skContent.ui.guaranteesReplacementReplyHours = 48
skContent.ui.guaranteesReplacementReplyLabel = 'hodín na odpoveď'
skContent.ui.guaranteesSupportBadge = 'Jeden tím pre celý proces'
skContent.ui.guaranteesCandidatesDays = 10
skContent.ui.guaranteesCandidatesDaysLabel = 'dní ku kandidátom'
skContent.ui.guaranteesSupportPercentLabel = '% podpora'
skContent.ui.guaranteesOneTeamCount = 1
skContent.ui.guaranteesOneTeamLabel = 'tím'
skContent.ui.guaranteeTimelineStepOne = 'Výber'
skContent.ui.guaranteeTimelineStepTwo = 'Dokumenty'
skContent.ui.guaranteeTimelineStepThree = 'Logistika'
skContent.ui.guaranteeTimelineStepFour = 'Príchod'
skContent.ui.guaranteeTimelineStepFive = 'Zmena'
skContent.ui.guaranteeSupportStepOne = 'Výber'
skContent.ui.guaranteeSupportStepTwo = 'Príchod'
skContent.ui.guaranteeSupportNote = 'Štart zmeny'
skContent.ui.guaranteeChecklistQuota = 'Kvóty'
skContent.ui.guaranteeChecklistPermit = 'Povolenia'
skContent.ui.guaranteeChecklistVisa = 'Víza'
skContent.ui.reviewFallbackValue = '7 ROKOV'
skContent.ui.reviewLabelPrefix = '7 rokov '
skContent.ui.servicesShortRequestEyebrow = 'Krátky dopyt'
skContent.ui.servicesHeroGhostCta = 'Zobraziť podmienky služby'
skContent.ui.servicesHeroPanelTitle =
  'Nábor, dokumenty, logistika a nasadenie tímu v jednom procese'
skContent.ui.servicesHeroPanelText =
  'Celá cesta je zostavená tak, aby firma videla predvídateľné fázy spustenia a kandidát chápal, čo sa deje v každom kroku.'
skContent.ui.servicesPillarsEyebrow = 'Čo pokrývame'
skContent.ui.servicesPillarsTitle =
  'Služba nie je postavená na "hľadaní životopisov", ale ako kompletná cesta od dopytu po nástup do práce'
skContent.ui.servicesOfferEyebrow = 'Čo získajú obe strany'
skContent.ui.servicesOfferTitle =
  'Model, v ktorom firma získava riadený výsledok a kandidát vidí transparentný proces'
skContent.ui.servicesOfferVisualLabel = 'VW Recruit / cesta'
skContent.ui.servicesOfferVisualPrimary = 'Pre firmy'
skContent.ui.servicesOfferVisualSecondary = 'Pre kandidátov'
skContent.ui.servicesBeamEyebrow = 'Mapa procesu'
skContent.ui.servicesRouteEyebrow = 'Ako funguje spolupráca'
skContent.ui.servicesRouteTitle = 'Transparentná cesta od dopytu až k nástupu pracovníkov na zmenu'
skContent.ui.servicesRouteLead =
  'Firma vidí jasnú cestu spustenia s predvídateľnými fázami od dopytu až po nástup ľudí na zmenu.'
skContent.ui.servicesProofEyebrow = 'Prečo to predáva'
skContent.ui.servicesProofTitle =
  'Nielen nábor, ale riadená služba s jasným výsledkom v každej fáze'
skContent.ui.servicesFitEyebrow = 'Kde to funguje najlepšie'
skContent.ui.servicesFitTitle =
  'Roly a niky, kde medzinárodný nábor prináša maximálny prevádzkový efekt'
skContent.ui.servicesFitLead =
  'Každá karta ukazuje, kde model poskytuje najrýchlejší prevádzkový výsledok, najčistejšie spustenie tímu a najvyššiu stabilitu procesu.'
skContent.ui.servicesFitScoreLabel = 'miera zhody'
skContent.ui.servicesFitMetricOne = 'Rýchlosť spustenia'
skContent.ui.servicesFitMetricTwo = 'Stabilita'
skContent.ui.servicesFitMetricThree = 'Transparentnosť'
skContent.ui.servicesFitCardTextOne =
  'Najlepšie funguje tam, kde sú dôležité opakujúce sa zmeny, disciplína dochádzky a rýchle škálovanie bez výpadkov.'
skContent.ui.servicesFitCardTextTwo =
  'Dobre funguje pre sezónne špičky, rast objemov a prevádzky, kde firma kriticky potrebuje rytmický nástup ľudí.'
skContent.ui.servicesFitCardTextThree =
  'Vhodné pre projekty s prísnymi termínmi, kde je potrebné spojiť nábor, dokumenty a príchod bez chaosu.'
skContent.ui.servicesFitCardTextFour =
  'Vykazuje dobré výsledky v servisných tímoch, kde je kriticky dôležitá jasná cesta, rýchla adaptácia a stabilita spustenia.'
skContent.ui.servicesLeadEyebrow = 'Začať dialóg'
skContent.ui.servicesLeadText =
  'Pre zamestnávateľov je to rýchly spôsob, ako zistiť postup spustenia náboru. Pre kandidátov príležitosť získať úprimné vysvetlenie o ceste k zamestnaniu a dokumentoch.'
skContent.ui.servicesSegmentBadgeBusiness = 'B2B'
skContent.ui.servicesSegmentBadgeCandidate = 'B2C'
skContent.ui.industriesSectionTitle = 'PRE KTORÉ ODVETVIA JE TENTO MODEL NÁBORU VHODNÝ'
skContent.ui.industrySliderPrev = 'Predchádzajúca snímka'
skContent.ui.industrySliderNext = 'Ďalšia snímka'
skContent.ui.quizSectionLead =
  'Krátky krokový kvíz, ktorý pomáha rýchlo zhromaždiť požiadavky a odovzdať ich v jednotnom formáte.'
skContent.ui.casesSectionLead =
  'Ukazujeme príklady spustenia náboru pre výrobu, logistiku, hotely a ďalšie prevádzkové tímy.'
skContent.ui.caseSliderPrev = 'Predchádzajúci prípad'
skContent.ui.caseSliderNext = 'Ďalší prípad'
skContent.ui.casesTimelineSteps = ['Brief', 'Hľadanie', 'Schválenie', 'Dokumenty', 'Príchod']
skContent.ui.industriesFitSummary =
  'Signály, ktoré zvyčajne znamenajú, že lokálny nábor už nestíha tempo vašej prevádzky a je nutný systematickejší model doplňovania tímu.'
skContent.ui.caseSubtitlePlaceholder = 'Stručný popis prípadu'
skContent.ui.caseProblemPlaceholder =
  'Samostatná SEO stránka pre prípad s výsledkami, termínmi a cieľovou akciou.'
skContent.ui.processStepLabel = 'Krok'
skContent.ui.reportPanelTitle = 'Získajte materiál na e-mail'
skContent.ui.reportPanelText =
  'Zanechajte svoje kontakty a pošleme vám užitočný materiál k téme medzinárodného náboru a optimalizácie nákladov na personál.'
skContent.ui.reportPanelKicker = 'VW Recruit / Analytika'
skContent.ui.reportPanelReportTitle = 'Trh práce 2026'
skContent.ui.reportPanelReportText =
  'Integrácia medzinárodného personálu pre firmy s nedostatkom zamestnancov'
skContent.ui.reportPanelGuide = 'PDF'
skContent.ui.videoInsightLabel = 'Video insight'
skContent.ui.mediaDefaultDuration = '02:00'
skContent.ui.reviewsPrev = 'Predchádzajúca recenzia'
skContent.ui.reviewsNext = 'Ďalšia recenzia'
skContent.ui.genericPageCardOne = 'Základná stránka pripravená pre lokalizovaný obsah'
skContent.ui.genericPageCardTwo = 'Metadáta a štruktúra sú pripravené na ďalšie plnenie'
skContent.ui.genericPageCardThree = 'Každá trasa sa generuje samostatne pre každý jazyk'

skContent.quiz.title = 'Kalkulácia náboru'
skContent.quiz.progressLabel = 'Krok'
skContent.quiz.completionTitle = 'Vaša požiadavka je pripravená'
skContent.quiz.completionLead =
  'Dostali sme vaše odpovede. Ďalším krokom je kontaktovať vás a pripraviť konzultáciu alebo predbežnú kalkuláciu.'
skContent.quiz.steps = [
  {
    id: 'industry',
    label: 'Pre aký odbor potrebujete pracovníkov?',
    type: 'options',
    options: ['Výroba', 'Stavebníctvo', 'Sklady a logistika', 'Hotely a služby', 'Iné'],
  },
  {
    id: 'teamSize',
    label: 'Koľko pracovníkov potrebujete?',
    type: 'options',
    options: ['1–10', '11–30', '31–50', '50+'],
  },
  {
    id: 'timeline',
    label: 'Kedy by mal tím nastúpiť do práce?',
    type: 'options',
    options: ['Naliehavo', 'V priebehu 2–4 týždňov', 'V priebehu 1–2 mesiacov', 'Zatiaľ zisťujem možnosti'],
  },
  {
    id: 'location',
    label: 'Kde sídli váš podnik?',
    type: 'text',
    fields: [
      { name: 'country', label: 'Krajina', required: true },
      { name: 'city', label: 'Mesto', required: false },
    ],
  },
  {
    id: 'problem',
    label: 'Aký je teraz najväčší problém s náborom?',
    type: 'options',
    options: ['Vysoké mzdové náklady', 'Nedostatok personálu', 'Fluktuácia', 'Sezónne špičky', 'Škálovanie výroby', 'Iné'],
  },
  {
    id: 'contact',
    label: 'Kam máme kalkuláciu zaslať?',
    type: 'text',
    fields: [
      { name: 'name', label: 'Meno', required: true },
      { name: 'company', label: 'Spoločnosť', required: true },
      { name: 'phone', label: 'Telefón', required: true },
      { name: 'email', label: 'E-mail', required: true },
    ],
  },
]

skContent.services = {
  title: 'Služby medzinárodného náboru pracovníkov na kľúč',
  lead:
    'Riešime <strong>nedostatok prevádzkového personálu</strong> pre firmy a vedieme kandidátov k <strong>legálnemu nástupu do práce</strong>: od vyhľadávania a výberu až po dokumenty, príchod a začiatok zmeny.',
  intro: '',
  cta: 'Konzultovať nábor pre firmu',
  metrics: [
    { value: '10', suffix: ' dní', label: 'k prvým kandidátom v nábore' },
    { value: '100', suffix: ' %', label: 'podpora dokumentov a legality' },
    { value: '4', suffix: ' fázy', label: 'od žiadosti po štart tímu' },
  ],
  heroBadges: [
    { value: '10', suffix: ' dní', label: 'k prvým kandidátom' },
    { value: '100', suffix: ' %', label: 'právna podpora' },
    { value: 'Na kľúč', suffix: '', label: 'od hľadania po štart zmeny' },
    { value: '1 tím', suffix: '', label: 'nábor, dokumenty, logistika' },
  ],
  segments: [
    {
      variant: 'business',
      label: 'Pre firmy',
      badge: 'B2B',
      title: 'Pre firmy, ktoré potrebujú stabilný tím bez personálnych výpadkov',
      text: 'Vhodné pre spoločnosti, ktoré nedokážu obsadiť prevádzkové roly lokálnym náborom, rastú, majú sezónne špičky alebo sú unavené z vysokej fluktuácie.',
      cta: 'Získať plán náboru',
    },
    {
      variant: 'candidate',
      label: 'Pre kandidátov',
      badge: 'B2C',
      title: 'Pre kandidátov, ktorí chcú legálne pracovať v zahraničí',
      text: 'Jednoducho vysvetľujeme jednotlivé fázy: prvotný výber, dokumenty, príchod, adaptácia a nástup do práce. Bez nejasných podmienok a neurčitých sľubov.',
      cta: 'Podať žiadosť',
    },
  ],
  pillars: [
    {
      title: 'Hľadanie a výber kandidátov',
      text: 'Vytvoríme profil pozície, začneme hľadanie v našej databáze a partnerskej sieti, odfiltrujeme slabých kandidátov a na schválenie ponúkneme len relevantných ľudí.',
    },
    {
      title: 'Dokumenty, povolenia a legalita',
      text: 'Vybavujeme kvóty, povolenia, vízové a migračné procesy, aby sa zamestnávateľ nestratil v byrokracii a kandidát vedel, v akej fáze sa nachádza.',
    },
    {
      title: 'Príchod, adaptácia a začiatok zmeny',
      text: 'Koordinujeme logistiku, príchod, začiatok práce a prvú fázu adaptácie, aby pracovníci skutočne nastúpili na objekt v dohodnutých termínoch.',
    },
  ],
  timeline: [
    {
      title: 'Brief a výpočet modelu',
      text: 'Spresníme počet ľudí, roly, harmonogram, krajinu spustenia a obmedzenia projektu. Následne vytvoríme realistický scenár náboru.',
    },
    {
      title: 'Výber a schválenie kandidátov',
      text: 'Spustíme hľadanie, vykonáme screening, overíme dokumenty a dáme vašej strane možnosť finálne schváliť kandidátov.',
    },
    {
      title: 'Spracovanie a organizácia príchodu',
      text: 'Po schválení začíname prípravu dokumentov, koordináciu povolení, logistiku a pripravenosť ľudí na odchod.',
    },
    {
      title: 'Nástup do práce a podpora',
      text: 'Po príchode koordinujeme štart zmeny, adaptáciu a komunikáciu medzi firmou, pracovníkmi a zodpovednými osobami na objekte.',
    },
  ],
  deliverables: [
    'Profil pozície a stratégia hľadania pre konkrétnu rolu',
    'Balíček vybraných kandidátov pripravených na schválenie',
    'Kontrola všetkých fáz dokumentačného vybavenia',
    'Časová os príchodu pracovníkov a spustenia tímu',
    'Podpora tímu na začiatku práce a v prvom období adaptácie',
    'Záručné podmienky pre výmenu v závislosti od formátu projektu',
  ],
  offerCards: [
    {
      title: 'Nábor pre zamestnávateľov',
      text: 'Rýchle spustenie náboru na uvoľnené pozície, sezónne špičky alebo škálovanie výroby.',
    },
    {
      title: 'Legálna cesta pre kandidátov',
      text: 'Transparentný proces výberu, príprava dokumentov a podpora až do skutočného nástupu do práce.',
    },
    {
      title: 'Podpora po štarte',
      text: 'Adaptácia, komunikácia, výmeny a koordinácia procesov v prvej fáze práce tímu.',
    },
  ],
  beam: {
    title: 'Ako postupuje proces náboru od dopytu až po nástup ľudí na zmenu',
    lead:
      'Vizuálna mapa procesu ukazujúca, ako sú brief, výber, schválenie, dokumenty a nasadenie tímu spojené do jedného riadeného procesu.',
    centerLabel: 'Spracovanie',
    outputLabel: 'Nástup na zmenu',
    steps: ['Brief', 'Hľadanie', 'Schválenie', 'Dokumenty', 'Príchod'],
  },
  roles: [
    'Pracovníci na výrobné linky, balenie, triedenie a pomocné procesy',
    'Skladové tímy pre vychystávanie, triedenie, presun a logistické operácie',
    'Stavební a montážni robotníci pre objekty s nedostatkom personálu',
    'Pracovníci pre hotely, kuchyne, upratovanie izieb a servisné služby',
  ],
  promise: {
    title: 'Za celú cestu kandidáta zodpovedá jeden tím',
    text: 'Pre firmu to znamená menej zmätkov medzi náborom, dokumentmi, logistikou a zavádzaním ľudí do práce. Získate jeden jasný model interakcie namiesto zložitej siete dodávateľov.',
  },
  trust: [
    'Zamestnávateľ vidí predvídateľnú cestu k nasadeniu tímu',
    'Kandidát získa legálnu a jasnú cestu k zamestnaniu',
    'Jeden tím koordinuje nábor, dokumenty, logistiku a adaptáciu',
  ],
  form: {
    title: 'Získajte plán náboru alebo konzultáciu k zamestnaniu',
    lead: 'Vyplňte krátky formulár. Pre zamestnávateľa pripravíme ďalší krok pre spustenie náboru. Pre kandidáta vysvetlíme postup a požiadavky na štart.',
    button: 'Získať konzultáciu',
    note: 'Zvyčajne odpovedáme počas pracovného dňa.',
  },
}

skContent.cases = {
  title: 'Prípadové štúdie medzinárodného náboru s merateľným prevádzkovým výsledkom',
  lead:
    'Reálne scenáre, v ktorých firma rieši nedostatok personálu, urýchľuje nasadenie tímu a získava predvídateľnú cestu nástupu ľudí do práce.',
  description:
    'Prípadové štúdie z medzinárodného náboru pracovníkov: výzva, model nasadenia, termíny a výsledok pre firmu.',
  eyebrow: 'Prípadové štúdie',
  intro:
    'Táto stránka neslúži len pre "success stories", ale ako dôkaz, že model funguje v reálnych prevádzkových podmienkach: keď chýbajú ľudia, nestíhajú sa termíny alebo nastupuje sezónne vyťaženie.',
  stats: [
    { value: '3', label: 'detailné prípadové štúdie' },
    { value: '4', label: 'kľúčové oblasti podnikania' },
    { value: '96', suffix: ' %', label: 'nástupov na zmenu' },
  ],
  featured: [
    {
      title: 'Delta Pack',
      category: 'Výroba',
      colSpan: 2,
      subtitle: 'Výrobný podnik, stredná Európa',
      problem:
        'Podnik dlhodobo nedokázal stabilne obsadiť zmenu na baliacej linke kvôli zdĺhavému lokálnemu náboru a neustálej fluktuácii.',
      solution:
        'Model spustenia prepojil hľadanie kandidátov, podporu s dokumentmi, logistiku a koordináciu štartu tímu do jedného procesu.',
      result:
        'Firma získala jasný plán obsadenia zmeny, kratší cyklus schvaľovania kandidátov a väčšiu kontrolu nad štartom projektu.',
      timeline: 'Prví kandidáti za 7-14 dní',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Pracovníci na výrobnej linke',
      metrics: [
        { label: 'Potreba', value: '32 pracovníkov' },
        { label: 'Formát', value: 'Baliaca linka' },
        { label: 'Cieľ', value: 'Stabilné nasadenie zmeny' },
      ],
    },
    {
      title: 'Nord Cargo Hub',
      category: 'Logistika',
      colSpan: 1,
      subtitle: 'Skladový komplex a logistika',
      problem:
        'Sklad nestíhal pokrývať špičkové zaťaženie bez rezervy ľudí a predvídateľného harmonogramu príchodu pracovníkov.',
      solution:
        'Prípad sa zameral na rýchlosť vytvorenia short-listu, kontrolu dokumentov a prípravu ľudí na zmenovú prevádzku.',
      result:
        'Prevádzkový tím získal predvídateľnejšiu časovú os na prípravu onboardingu, supervízorov a zvládnutie špičiek bez zmätkov.',
      timeline: 'Rýchle spustenie pre sezónu',
      image: '/images/industry-logistics.jpg',
      alt: 'Pracovníci v sklade a logistike',
      metrics: [
        { label: 'Potreba', value: 'Tím pre triedenie' },
        { label: 'Formát', value: 'Skladové operácie' },
        { label: 'Cieľ', value: 'Pripravenosť na špičku' },
      ],
    },
    {
      title: 'Urban Build Group',
      category: 'Stavebníctvo',
      colSpan: 3,
      subtitle: 'Stavebný dodávateľ',
      problem:
        'Dodávateľ potreboval rýchlo posilniť aktívne stavby bez posúvania termínov a bez zlyhania pri doplňovaní partií.',
      solution:
        'Vyhľadávanie, povolenia, logistika a začatie adaptácie boli synchronizované do jediného pracovného postupu od schválenia po nástup na stavbu.',
      result:
        'Klient dostal model, ktorý znížil oneskorenie medzi schválením kandidátov, vybavením dokumentov a samotným začiatkom prác.',
      timeline: 'Proces prispôsobený termínom',
      image: '/images/industry-construction.jpg',
      alt: 'Pracovníci na stavenisku',
      metrics: [
        { label: 'Potreba', value: 'Posilnenie objektov' },
        { label: 'Formát', value: 'Stavebné roly' },
        { label: 'Cieľ', value: 'Dodržanie termínov' },
      ],
    },
  ],
  convincingTitle: 'Od výzvy k výsledku: prečo naše skúsenosti pomáhajú firmám konať rýchlejšie',
  frameworkTitle: 'Od výzvy k výsledku: prečo naše skúsenosti pomáhajú firmám konať rýchlejšie',
  frameworkLead:
    'Silná prípadová štúdia ukazuje nielen výsledok, ale aj dôvod, prečo bol postup spustenia pre daného zamestnávateľa realistický.',
  routeLabel: 'Cesta',
  outcomeLabel: 'Výsledok',
  framework: [
    {
      title: 'Jasná východisková situácia',
      text: 'Ukazujeme, kde presne vytvoril lokálny nábor, sezónnosť alebo fluktuácia prevádzkové riziko pre firmu.',
    },
    {
      title: 'Transparentný model spustenia',
      text: 'Vysvetľujeme, ako boli v jednom procese prepojené nábor, dokumenty, logistika a uvedenie pracovníkov do práce.',
    },
    {
      title: 'Prevádzkový výsledok',
      text: 'Prípadovú štúdiu prevádzame do jazyka biznisu: stabilita zmien, rýchlosť spustenia a predvídateľnosť pre daný objekt.',
    },
  ],
  checklistTitle: 'Čo by nemalo chýbať v každej ďalšej štúdii',
  checklist: [
    'Popis roly a počiatočnej personálnej výzvy',
    'Logika výberu krajiny alebo modelu hľadania',
    'Časová os od briefu po príchod',
    'Kľúčové body k dokumentom a logistike',
    'Výsledok pre firmu a jasné CTA',
  ],
  ctaTitle: 'Potrebujete zaviesť podobný model náboru pre svoj tím?',
  ctaLead:
    'Popíšte svoj nedostatok personálu a my pre vašu firmu pripravíme postup náboru, termíny spustenia a ďalší praktický krok.',
}

skContent.industries = {
  title: 'Odvetvia, kde medzinárodný nábor prináša najsilnejší prevádzkový efekt',
  lead:
    'Zameriavame sa na sektory, kde nedostatok líniového personálu a vysoká fluktuácia najviac brzdia rozvoj podnikania.',
  description:
    'Medzinárodný nábor pracovníkov pre výrobu, stavebníctvo, sklady, logistiku, hotely a servisné tímy.',
  eyebrow: 'Odvetvia',
  intro: '',
  sectorsTitle: 'Kľúčové oblasti, kde model prináša najrýchlejší výsledok',
  sectorsLead: '',
  stats: [
    { value: '3', label: 'kľúčové odvetvia s najvyšším vplyvom' },
    { value: '1+', label: 'rok zmluvy pre väčšinu tímov' },
    { value: '54 %', label: 'potenciál zníženia nákladov na personál' },
  ],
  sectors: [
    {
      title: 'Výroba',
      colSpan: 2,
      text: 'Stabilné tímy pre pásové linky, baliace dielne a triediace centrá.',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Pracovníci vo výrobe',
      tags: ['Výrobné linky', 'Balenie', 'Triedenie'],
      problem:
        'Neustále "diery" v zmenách z dôvodu absencie miestnych pracovníkov a ročná fluktuácia na úrovni 30 - 50 %.',
      solution:
        'Vytvárame skupiny pracovníkov, ktorí prichádzajú na základe zmluvy v dĺžke od 1 roka. Tým je zaručená disciplína a odpadá nutnosť každý týždeň preškoľovať nových ľudí.',
      roles: ['Operátori liniek', 'Baliči', 'Triediči', 'Pomocní robotníci'],
      points: [
        'Stabilizujeme nástupy na zmeny bez neustáleho dodatočného náboru',
        'Znižujeme záťaž majstrov a HR tímu',
        'Poskytujeme predvídateľné tempo zapájania ľudí do pracovného procesu',
      ],
      cta: 'Získať kalkuláciu pre výrobu',
    },
    {
      title: 'Stavebníctvo',
      colSpan: 1,
      text: 'Škálovanie stavebných projektov bez závislosti od nedostatku pracovníkov na miestnom trhu.',
      image: '/images/industry-construction.jpg',
      alt: 'Pracovníci na stavenisku',
      tags: ['Montáže', 'Pomocné práce', 'Stavebné tímy'],
      problem:
        'Nedodržiavanie termínov dokončenia projektov pre neschopnosť rýchlo nájsť 20 - 50 pomocných robotníkov alebo montérov počas hlavnej sezóny.',
      solution:
        'Zabezpečujeme rýchly príchod zostavených pracovných skupín. Preberáme všetku legalizáciu, aby sa vaši stavbyvedúci venovali stavbe a nie papierovaniu.',
      roles: ['Pomocní robotníci', 'Montéri', 'Železobetonári', 'Betonári'],
      points: [
        'Posilňujeme aktívne stavby bez posúvania termínov',
        'Zbavujeme stavbyvedúcich administratívnej záťaže',
        'Pracujeme pre sezónne špičky a rozširovanie skupín',
      ],
      cta: 'Získať kalkuláciu pre stavebníctvo',
    },
    {
      title: 'Sklady a logistika',
      colSpan: 1,
      text: 'Flexibilita a výkon pre 3PL operátorov a E-commerce.',
      image: '/images/industry-logistics.jpg',
      alt: 'Pracovníci v sklade a logistike',
      tags: ['Vychystávanie', 'Triedenie', 'Manipulácia s tovarom'],
      problem:
        'Nepredvídateľnosť počas sezónnych špičiek a vysoké náklady na "nočné" zmeny lokálneho personálu.',
      solution:
        'Získate tím pripravený na intenzívnu zmenovú prevádzku. Personálne náklady sa stávajú predvídateľnými a fixnými.',
      roles: ['Vychystávači (Pickers)', 'Baliči', 'Skladníci', 'Operátori manipulačnej techniky'],
      points: [
        'Pracujeme s ohľadom na sezónne výkyvy a vysoké tempo zmien',
        'Zabezpečujeme väčšiu predvídateľnosť personálnych nákladov',
        'Pomáhame plánovať nasadenie tímov bez paniky',
      ],
      cta: 'Získať kalkuláciu pre sklady a logistiku',
    },
    {
      title: 'Hotely a služby',
      colSpan: 2,
      text: 'Stabilné tímy pre upratovanie izieb, výpomoc v kuchyni a každodennú prevádzku hotelov.',
      image: '/images/industry-hospitality.jpg',
      alt: 'Personál v hotelierstve a službách',
      tags: ['Upratovanie izieb', 'Výpomoc v kuchyni', 'Prevádzkové služby'],
      problem:
        'V obdobiach špičky je ťažké udržať stabilný servisný tím, keď lokálny personál rýchlo mení zamestnávateľa alebo nenastupuje na zmeny.',
      solution:
        'Vyberáme pracovníkov s dlhším pracovným horizontom a budujeme legálnu cestu na pracovisko, aby prevádzkový tím nemusel neustále riešiť krízový nábor.',
      roles: ['Chyžné', 'Pomocná sila v kuchyni', 'Pracovníci servisu', 'Univerzálni pomocníci'],
      points: [
        'Znižujeme zmätky v každodennom plánovaní zmien',
        'Posilňujeme hotely a servisné pracoviská počas sezónnych špičiek',
        'Poskytujeme jasnú a legálnu cestu k zamestnaniu',
      ],
      cta: 'Získať kalkuláciu pre hotely a služby',
    },
  ],
  frameworkTitle: 'Prečo si biznis vyberá pracovníkov z Ázie a Afriky?',
  frameworkLead:
    'Nie je to otázka "lacnejšej náhrady", ale otázka stability tímu, motivácie a predvídateľného dlhého pracovného cyklu na pracovisku.',
  framework: [
    {
      title: 'Vysoká motivácia',
      text: 'Pre kandidátov z týchto regiónov je práca v Európe šancou na lepšiu budúcnosť, a preto si viac vážia pracovné miesto a po mesiaci len zriedka menia zamestnávateľa.',
    },
    {
      title: 'Disciplína',
      text: 'V mnohých ázijských krajinách je pracovná kultúra založená na rešpektovaní hierarchie, jasných pokynoch a stabilnom vykonávaní opakujúcich sa úkonov.',
    },
    {
      title: 'Dlhodobý záväzok',
      text: 'Pracovníci prichádzajú na účelové víza na dlhé obdobie, čo odstraňuje problém sezónneho úbytku personálu a neustálych reštartov náboru.',
    },
  ],
  fitTitle: 'Kedy určite potrebujete medzinárodný nábor?',
  fitLead:
    'Ak v týchto signáloch spoznávate svoju situáciu, lokálny nábor pravdepodobne už váš problém systematicky nerieši.',
  fitSignals: [
    'Fluktuácia presahuje 20 %: trávite viac času pohovormi ako riadením výroby.',
    'Prehriaty lokálny trh: platové očakávania miestnych kandidátov rastú, ale produktivita nie.',
    'Plánovanie nových projektov alebo liniek: bojíte sa spúšťať nové kapacity, pretože nie je, kto by pracoval.',
    'Cena náboru stúpa: lokálne agentúry účtujú vysoké provízie a ľudia odchádzajú po týždni.',
  ],
  ctaTitle: 'Potrebujete plán nasadenia pre konkrétny odbor?',
  ctaLead:
    'Napíšte nám svoju oblasť pôsobenia, veľkosť tímu a termín spustenia, a my vám navrhneme najlepší model náboru presne pre vašu prevádzku.',
  seoTitle: 'Medzinárodný nábor personálu pre výrobu, sklady a stavebníctvo',
  seoText:
    'VW Recruit sa špecializuje na komplexné riešenie nedostatku personálu pre európske firmy. Zabezpečujeme nábor líniového personálu pre sklady, továrne a stavby s využitím zdrojov z krajín s prevysom pracovnej sily, najmä z Filipín, Indie, Vietnamu a afrických štátov. Náš model nezahŕňa len samotný nábor, ale aj kompletný dokumentačný servis, logistiku a adaptáciu pracovníkov na pracovisku, čo umožňuje klientom znížiť prevádzkové náklady na personál až o 54 %.',
}

skContent.report = {
  title: 'Trh práce 2026: Keď už lokálny nábor nestačí',
  lead:
    'Analytická správa pre zamestnávateľov, ktorí chcú porozumieť skutočným nákladom, termínom a právnym nuansám medzinárodného náboru.',
  description:
    'Stiahnite si správu o medzinárodnom nábore pracovníkov, nákladoch na personál, právnych rizikách a nasadení tímu.',
  eyebrow: 'Report',
  intro:
    'Nejde len o PDF "do počtu", ale o obsah, ktorý prevádza záujem na vecný rozhovor o nákladoch, termínoch nasadenia, legalite a pripravenosti firmy na medzinárodný nábor.',
  stats: [
    { value: '1', label: 'praktický analytický report' },
    { value: '5', label: 'kľúčových poznatkov vnútri' },
    { value: '1', label: 'jasná konverzná akcia' },
  ],
  pointsTitle: 'Čo obsahuje report',
  points: [
    'Logika porovnania nákladov: lokálny nábor vs. medzinárodný nábor',
    'Najčastejšie právne chyby pri zamestnávaní cudzincov',
    'Ako pripraviť prevádzku na onboarding a adaptáciu',
    'Čo reálne ovplyvňuje termíny od dopytu po štart zmeny',
    'Ako znížiť tlak na personál v prevádzkových a manuálnych rolách',
  ],
  benefitsTitle: 'Prečo si firmy žiadajú tento report',
  benefitsLead:
    'Report je obzvlášť užitočný, keď firma už pociťuje personálny tlak a potrebuje namiesto abstraktných informácií jasný model riešenia.',
  benefits: [
    {
      title: 'Rýchlejšia interná zhoda',
      text: 'Pomáha majiteľovi, prevádzke a HR oddeleniu hovoriť spoločnou rečou o skutočnom postupe začatia náboru.',
    },
    {
      title: 'Jasnejší pohľad na náklady',
      text: 'Umožňuje triezvejšie porovnať mzdový tlak, termíny spustenia a riziká z hľadiska kontinuity tímu.',
    },
    {
      title: 'Lepší prechod k ďalšiemu kroku',
      text: 'Prenáša záujem z úrovne "len sa pozerám" na vecnú konzultáciu s konkrétnymi obmedzeniami a termínmi.',
    },
  ],
  trustTitle: 'Čo robí tento report skutočne užitočným',
  trustLead:
    'Silný analytický materiál by nemal byť len všeobecným HR obsahom. Musí priamo odpovedať na biznisový problém, kvôli ktorému človek formulár odosiela.',
  trustPoints: [
    'Postavený na problematike nedostatku personálu v prevádzkovom biznise, nie na všeobecnej teórii',
    'Pripravený ako základ pre prvú konzultáciu alebo predajné stretnutie',
    'Užitočný pre zamestnávateľov, ktorí posudzujú, či model vyhovuje ich prevádzke a termínom',
  ],
  faqTitle: 'Otázky pred stiahnutím',
  faq: [
    {
      q: 'Pre koho je tento report určený?',
      a: 'Pre zamestnávateľov vo výrobe, logistike, stavebníctve, hotelierstve a ďalších prevádzkových oblastiach s nedostatkom zamestnancov alebo mzdovým tlakom.',
    },
    {
      q: 'Je to len všeobecné PDF?',
      a: 'Nie. Report by mal pomôcť prijať reálne rozhodnutie o nábore a pripraviť vecnú diskusiu o modeli nasadenia, termínoch a limitoch.',
    },
    {
      q: 'Čo sa stane po odoslaní formulára?',
      a: 'Záujemca dostane postup na získanie PDF a zároveň sa stáva kvalifikovaným leadom pre ďalšiu konzultáciu ohľadom náborových potrieb.',
    },
  ],
  ctaTitle: 'Získajte report a zistite, aký bude váš ďalší personálny krok',
  ctaLead:
    'Zanechajte nám kontakty a my vám pošleme PDF. Zároveň vám pomôžeme posúdiť, či je model medzinárodného náboru vhodný pre váš aktuálny nedostatok zamestnancov.',
  formTitle: 'Získať report',
  formLead:
    'Vyplňte krátky formulár a dostanete PDF. Posunieme sa tak k vecnejšiemu rozhovoru o personálnych nákladoch, termínoch a právnej príprave.',
  formNote: 'Najužitočnejšie pre zamestnávateľov, ktorí plánujú nábor, obmenu alebo rozširovanie tímu.',
}
