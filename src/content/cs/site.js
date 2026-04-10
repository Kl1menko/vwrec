import { createLocaleContent } from '../create-locale-content.js'

export const csContent = createLocaleContent({
  code: 'cs',
  name: 'Czech',
  nativeName: 'Čeština',
  translated: true,
  homeLabel: 'Domů',
  heroTitle: 'Mezinárodní nábor pro firmy, které potřebují lidi na provozní pozice bez zpoždění.',
  heroLead:
    'Struktura webu je již připravena pro generování leadů, vícejazyčný SEO růst, kvízy, případové studie a konzultační CTA pro B2B klienty.',
})

csContent.site.description =
  'Snižte náklady na personál až o 54 % díky mezinárodnímu náboru pracovníků z Asie a Afriky na klíč.'

csContent.navigation.items = [
  { key: 'home', label: 'Domů' },
  { key: 'services', label: 'Služby' },
  { key: 'industries', label: 'Odvětví' },
  { key: 'cases', label: 'Případové studie' },
  { key: 'report', label: 'Report' },
  { key: 'contacts', label: 'Kontakty' },
]

csContent.navigation.primaryCta = 'Spočítat nábor'
csContent.navigation.secondaryCta = 'Rezervovat hovor'

csContent.home = {
  meta: {
    title: 'Mezinárodní nábor pracovníků pro firmy',
    description:
      'Snižte náklady na personál a vyřešte nedostatek zaměstnanců díky mezinárodnímu náboru pracovníků z Asie a Afriky na klíč.',
  },
  hero: {
    lines: ['SNIŽTE NÁKLADY', 'NA PERSONÁL'],
    highlight: 'AŽ O 54 %',
    lead:
      'díky mezinárodnímu náboru pracovníků z <strong>Asie a Afriky</strong> na klíč',
    stats: [
      { value: 10, suffix: ' DNÍ', label: 'výběr prvních kandidátů' },
      { value: 7, suffix: ' LET', label: 'zkušeností v mezinárodním náboru' },
      { value: 100, suffix: ' %', label: 'podpora dokumentů a příjezdu' },
    ],
    video: {
      src: '/videos/international-recruitment-overview.mp4',
      poster: '/video-poster-home.svg',
      type: 'video/mp4',
    },
  },
  comparison: {
    eyebrow: 'Porovnání modelu náboru',
    title: 'Kolik firma přeplácí za lokální nábor',
    cards: [
      {
        title: 'Ostatní',
        brandNote: 'lokální nábor / jiné agentury',
        amount: '$36 000',
        period: '/ měsíc',
        note: 'pro tým 30 pracovníků',
        variant: 'other',
        rows: [
          {
            title: 'Vyšší platový základ',
            text: 'V průměru 1000–1400 $ na pracovníka při lokálním náboru.',
          },
          {
            title: 'Delší spuštění týmu',
            text: 'Výběr prvních lidí trvá 3–6 týdnů nebo déle.',
          },
          {
            title: 'Neustálý opakovaný nábor',
            text: 'Kvůli fluktuaci a sezónnosti se firma neustále vrací k hledání.',
          },
        ],
      },
      {
        title: 'VW Recruit',
        brandNote: 'mezinárodní nábor na klíč',
        amount: '$18 000',
        period: '/ měsíc',
        note: 'pro tým 30 pracovníků',
        variant: 'brand',
        rows: [
          {
            title: 'Nižší průměrné náklady',
            text: 'V průměru 400–700 $ na pracovníka v závislosti na roli a zemi.',
          },
          {
            title: 'První kandidáti za 7–14 dní',
            text: 'Rychlé spuštění náboru přes mezinárodní databázi a partnerskou síť.',
          },
          {
            title: 'Stabilnější tým',
            text: 'Méně cyklů opakovaného hledání a lepší předvídatelnost pro firmu.',
          },
        ],
      },
    ],
    cta: 'Spočítat nábor',
  },
  industries: {
    eyebrow: 'Pro která odvětví je model vhodný',
    title: 'Nejčastěji se tento model náboru využívá pro provozní práce',
    lead:
      'Tvoříme týmy pro výrobu, sklady, stavebnictví a služby, když firma potřebuje předvídatelné spuštění a nižší náklady na personál.',
    items: [
      {
        title: 'Sklady a logistika',
        text: 'Vytváření týmů pro vychystávání, balení, přesun zboží a skladové operace.',
      },
      {
        title: 'Stavebnictví',
        text: 'Nábor pracovníků pro stavební projekty, montážní, pomocné a technické práce.',
      },
      {
        title: 'Hotely a služby',
        text: 'Nábor personálu pro úklid, kuchyni, údržbu a každodenní provozní činnosti.',
      },
      {
        title: 'Výroba',
        text: 'Nábor pracovníků pro výrobní linky, balení, třídění a pomocné procesy.',
      },
    ],
  },
  calculator: {
    eyebrow: 'Kvízová kalkulace',
    title: 'Spočítejte si nábor pracovníků pro váš podnik',
    lead:
      'Odpovězte na několik krátkých otázek a získejte kalkulaci náboru týmu pro vaši firmu.',
  },
  casesSection: {
    eyebrow: 'Naše projekty',
    title: 'Naše projekty náboru pracovníků',
    lead:
      'Ukazujeme, jak vypadá nábor v reálných projektech: od výroby a skladů až po služby a provozní týmy.',
    cta: 'Všechny projekty',
    items: [
      {
        title: 'Delta Pack',
        subtitle: 'Výrobní podnik, střední Evropa',
        problem: 'Vyřešili jsme nedostatek 32 pracovníků na balicí lince po dlouhém lokálním náboru a vysoké fluktuaci.',
        image: '/images/industry-manufacturing.jpg',
        alt: 'Pracovníci na výrobní lince',
      },
      {
        title: 'Nord Cargo Hub',
        subtitle: 'Skladový komplex a logistika',
        problem: 'Sestavili jsme směnný tým pro vychystávání a třídění, když firma nestíhala pokrývat špičky.',
        image: '/images/industry-logistics.jpg',
        alt: 'Pracovníci ve skladu a logistice',
      },
      {
        title: 'Urban Build Group',
        subtitle: 'Stavební dodavatel',
        problem: 'Posílili jsme objekty montéry a pomocnými dělníky, abychom nenarušili termíny spuštění nové etapy stavby.',
        image: '/images/industry-construction.jpg',
        alt: 'Pracovníci na staveniššti',
      },
    ],
  },
  process: {
    eyebrow: 'Co se děje po odeslání poptávky',
    title: 'Co následuje po vašem dotazu',
    intro:
      'Upřesníme počet pracovníků, požadavky na kandidáty a termíny spuštění týmu. Následně se spustí nábor přes naši databázi a partnerské agentury v zemích náboru.',
    steps: [
      {
        title: 'Analýza pozic a spuštění náboru',
        text: 'Vytvoříme profil kandidáta, dohodneme termíny a zahájíme hledání v relevantních zdrojích.',
      },
      {
        title: 'Výběr a ověření kandidátů',
        text: 'Kandidáti projdou předběžným výběrem, kontrolou dokumentů a základním pohovorem. Firma obdrží profily ke konečnému schválení.',
      },
      {
        title: 'Zpracování dokumentů',
        text: 'Zajistíme přípravu všech nezbytných dokumentů pro zaměstnání a příjezd, a kontrolujeme proces až do jejich vyhotovení.',
      },
      {
        title: 'Příjezd a spuštění práce',
        text: 'Koordinujeme logistiku a příjezd pracovníků. Po příjezdu tým nastupuje do práce v podniku.',
      },
    ],
  },
  guarantees: {
    eyebrow: 'Záruky a bezpečnost',
    title: 'Co firma získává společně s náborem',
    items: [
      {
        title: '100% legalita',
        text: 'Přebíráme odpovědnost za kvóty, pracovní povolení a vízové procesy, aby byla společnost chráněna před kontrolami.',
      },
      {
        title: 'Bezplatná výměna',
        text: 'Poskytujeme záruční dobu na výměnu kandidáta, pokud projekt vyžaduje stabilitu na startu.',
      },
      {
        title: 'Kompletní podpora na klíč',
        text: 'Od pohovoru v Asii až po setkání na letišti a nástup na směnu s podporou při adaptaci a komunikaci.',
      },
    ],
  },
  reportBlock: {
    eyebrow: 'Analytický materiál',
    title: 'Proč lokální nábor ztrácí na efektivitě?',
    lead:
      'Získejte neveřejný analytický report "Trh práce 2026: Integrace mezinárodního personálu".',
    points: [
      'Srovnávací tabulka nákladů: Lokální trh vs Expati',
      '5 právních chyb při zaměstnávání cizinců',
      'Jak překonat jazykovou bariéru ve výrobě',
    ],
    cta: 'Stáhnout report v PDF',
  },
  reviews: {
    eyebrow: 'Důvěra',
    title: 'Lídři na trhu nám důvěřují',
    items: [
      {
        name: 'Oleksandr Koval',
        company: 'Provozní ředitel, Delta Pack',
        text: 'Společnost VW Recruit pro nás vyřešila nedostatek lidí na výrobní lince bez přetížení interního HR. Nejhodnotnější bylo, že tým převzal jak nábor, tak podporu s dokumenty.',
      },
      {
        name: 'Iryna Melnyk',
        company: 'HR Lead, Nord Cargo Hub',
        text: 'Získali jsme nejen kandidáty, ale jasný proces spuštění týmu. Logistika, povolení a koordinace byly pod kontrolou, takže sklad vstoupil do sezóny bez výpadků.',
      },
      {
        name: 'Taras Humeniuk',
        company: 'Projektový manažer, Urban Build Group',
        text: 'Bylo pro nás důležité rychle posílit stavby lidmi, kteří reálně nastoupí na směnu. VW Recruit zajistil předvídatelnost termínů a silnou podporu i po příjezdu kandidátů.',
      },
      {
        name: 'Maryna Savchuk',
        company: 'People Partner, East Service Group',
        text: 'Po zahájení spolupráce jsme přestali řešit personální požáry ručně. Tým VW Recruit rychle synchronizoval požadavky, země náboru a termíny nástupu lidí na objekt.',
      },
      {
        name: 'Vitalij Bondar',
        company: 'Provozní manažer, Metal Works',
        text: 'Líbila se nám právě úroveň předvídatelnosti. Firma věděla, kdy kandidáti přijedou, jaké dokumenty jsou již hotové a v jaké fázi se každý pracovník nachází.',
      },
      {
        name: 'Natalija Černenko',
        company: 'HR Director, West Line Logistics',
        text: 'Pro logistiku je rychlost spuštění směn kritická. S VW Recruit jsme získali nejen nábor, ale normální operativní podporu až do nástupu lidí do práce.',
      },
    ],
    metrics: [
      {
        value: '7 LET',
        label: 'Zkušeností v mezinárodním náboru',
      },
      {
        value: '100 %',
        label: 'Kontrola dokumentů a legálního vyřízení',
      },
      {
        value: '10 DNÍ',
        label: 'K prvním kandidátům v náboru',
      },
      {
        value: 'NA KLÍČ',
        label: 'Podpora od výběru po nástup na směnu',
      },
    ],
  },
  media: {
    eyebrow: 'Video a odpovědi',
    title: 'Odpovědi na hlavní otázky majitelů firem',
    reels: [
      {
        title: 'Jak dlouho trvá spuštění mezinárodního náboru?',
        text: 'Vysvětlíme, kdy firma obdrží první kandidáty, co ovlivňuje termíny a v jaké fázi se připojuje dokumentační podpora.',
        meta: 'Časová osa spuštění',
        duration: '02:14',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Jak firma kontroluje legalitu a dokumenty?',
        text: 'Rozebíráme, jaké kvóty, povolení a vízové procesy vyřizujeme, aby společnost nenesla rizika před kontrolami.',
        meta: 'Dokumenty a legalita',
        duration: '03:02',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Co se stane po příjezdu pracovníků na projekt?',
        text: 'Ukazujeme, jak vypadá adaptace, začátek směny, komunikace s koordinátory a podpora týmu v první fázi.',
        meta: 'Adaptace a podpora',
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
    title: 'Často kladené dotazy',
    items: [
      {
        q: 'Jak se řeší jazyková bariéra?',
        a: 'Do procesu zahrnujeme adaptaci, základní školení a komunikaci přes koordinátora nebo mistra, aby se tým rychle zapojil do práce.',
      },
      {
        q: 'Kdo hledá ubytování pro pracovníky?',
        a: 'Model může zahrnovat koordinaci ubytování, logistiky a příjezdu v závislosti na formátu spolupráce a zemi spuštění.',
      },
      {
        q: 'Co dělat, když pracovník onemocní nebo nenastoupí na směnu?',
        a: 'Na začátku projektu se dohodne rezerva, záruční podmínky pro výměnu a postup rychlé komunikace s vaší stranou.',
      },
    ],
  },
  finalCta: {
    title: 'Jste připraveni vyřešit nedostatek zaměstnanců a škálovat svůj byznys?',
    lead: 'Rezervujte si bezplatnou 30minutovou Zoom schůzku s naším Head of Recruitment.',
  },
}

csContent.forms.lead.title = 'Získat kalkulaci náboru'
csContent.forms.lead.success = 'Děkujeme. Váš požadavek byl uložen a ohledně náboru vás budeme kontaktovat.'
csContent.forms.callback.title = 'Rezervovat hovor'
csContent.forms.callback.success = 'Děkujeme. Váš požadavek na hovor byl uložen.'
csContent.forms.report.title = 'Získat report'
csContent.forms.report.success = 'Děkujeme. Váš požadavek jsme přijali a dokument v PDF vám brzy zašleme na e-mail.'
csContent.forms.contact.title = 'Odeslat dotaz'
csContent.forms.contact.success = 'Děkujeme. Váš dotaz byl přijat a tým VW Recruit vás bude kontaktovat s dalším krokem.'
csContent.brand.tagline = 'Mezinárodní partner pro nábor'
csContent.brand.homeAriaLabel = 'VW Recruit domovská stránka'

csContent.about = {
  meta: {
    title: 'O společnosti VW Recruit',
    description:
      'Zjistěte více o VW Recruit, mezinárodním náboru pracovníků, cestě k nasazení týmu a přístupu ke spolupráci s firmami.',
  },
  title: 'O VW Recruit',
  lead:
    'Pomáháme firmám řešit nedostatek personálu prostřednictvím mezinárodního náboru pracovníků z Asie a Afriky s jasnou cestou od poptávky až po nástup lidí na směnu.',
}

csContent.faqPage = {
  meta: {
    title: 'Často kladené otázky pro zaměstnavatele',
    description:
      'Odpovědi na klíčové otázky zaměstnavatelů ohledně mezinárodního náboru: termíny, dokumenty, spuštění týmu, adaptace a formát spolupráce.',
  },
  title: 'Často kladené otázky pro zaměstnavatele',
  lead:
    'Shromáždili jsme klíčové otázky o mezinárodním náboru pracovníků: od termínů spuštění a dokumentů po ubytování, adaptaci a logiku podpory.',
}

csContent.privacy = {
  meta: {
    title: 'Zásady ochrany osobních údajů',
    description:
      'Přečtěte si zásady ochrany osobních údajů společnosti VW Recruit týkající se shromažďování, zpracování a ochrany osobních údajů na webu.',
  },
  title: 'Zásady ochrany osobních údajů',
  sections: [
    {
      title: '1. Obecná ustanovení',
      paragraphs: [
        'Tyto Zásady ochrany osobních údajů stanovují postup shromažďování, používání, ukládání a ochrany osobních údajů uživatelů webových stránek VW Recruit (dále jen "Web"). Používáním našeho Webu souhlasíte s podmínkami těchto Zásad. Pokud s těmito podmínkami nesouhlasíte, přestaňte prosím Web používat.',
      ],
    },
    {
      title: '2. Jaká data shromažďujeme',
      paragraphs: ['Při používání Webu můžeme shromažďovat následující osobní údaje:'],
      items: [
        'Kontaktní údaje: jméno, název společnosti, e-mailová adresa, telefonní číslo. Tyto údaje poskytujete dobrovolně při vyplňování formulářů (např. "Rezervovat hovor", "Získat report", "Spočítat nábor").',
        'Technická data: IP adresa, typ prohlížeče, typ zařízení, údaje o návštěvnosti stránek (pomocí souborů cookie a analytických nástrojů).',
      ],
    },
    {
      title: '3. Účel shromažďování a využití dat',
      paragraphs: ['Shromážděné osobní údaje se používají k:'],
      items: [
        'Kontaktování vaší osoby za účelem poskytnutí konzultací ohledně služeb mezinárodního náboru.',
        'Zasílání vyžádaných materiálů (např. PDF reportů, kalkulací nákladů).',
        'Zlepšení fungování Webu a analýzy efektivity našich marketingových kampaní.',
        'Zasílání důležitých oznámení a komerčních nabídek (s vaším souhlasem).',
      ],
    },
    {
      title: '4. Předávání údajů třetím stranám',
      paragraphs: [
        'Vaše osobní údaje neprodáváme, nevyměňujeme ani nepředáváme třetím stranám bez vašeho souhlasu, s výjimkou případů stanovených zákonem. Údaje mohou být přístupné našim spolehlivým dodavatelům (např. poskytovatelům hostingu, službám e-mailového marketingu), kteří jsou povinni zachovávat jejich důvěrnost.',
      ],
    },
    {
      title: '5. Ochrana a uchovávání dat',
      paragraphs: [
        'Přijímáme příslušná technická a organizační opatření na ochranu vašich údajů před neoprávněným přístupem, změnou, zveřejněním nebo zničením. Údaje jsou uchovávány pouze po dobu nezbytnou k naplnění účelů uvedených v těchto Zásadách nebo v souladu se zákonnými požadavky.',
      ],
    },
    {
      title: '6. Práva uživatelů',
      paragraphs: ['Máte právo:'],
      items: [
        'Získat přístup ke svým osobním údajům, které uchováváme.',
        'Požádat o opravu nepřesností ve vašich údajích.',
        'Požádat o vymazání vašich údajů ("právo být zapomenut").',
        'Kdykoli odvolat souhlas se zpracováním údajů.',
      ],
    },
    {
      title: '7. Využití souborů Cookie',
      paragraphs: [
        'Náš Web používá soubory cookie k zajištění správného fungování stránek, analytiky návštěvnosti a zlepšení uživatelské zkušenosti. Ukládání souborů cookie můžete nastavit nebo zakázat v nastavení vašeho prohlížeče.',
      ],
    },
    {
      title: '8. Změny Zásad ochrany osobních údajů',
      paragraphs: [
        'Vyhrazujeme si právo tyto Zásady aktualizovat. Změny vstupují v platnost okamžikem jejich zveřejnění na této stránce.',
      ],
    },
    {
      title: '9. Kontakty',
      paragraphs: [
        'Pokud máte dotazy týkající se těchto Zásad ochrany osobních údajů nebo chcete uplatnit svá práva na ochranu osobních údajů, kontaktujte nás prostřednictvím kontaktního formuláře na Webu nebo e-mailem: [Váš Email, např.: hello@vwrecruit.com].',
      ],
    },
  ],
}

csContent.terms = {
  meta: {
    title: 'Podmínky použití',
    description:
      'Přečtěte si podmínky použití webu VW Recruit, pravidla komunikace prostřednictvím formulářů a základní principy poskytování informací na webu.',
  },
  title: 'Podmínky použití',
  sections: [
    {
      title: '1. Obecná ustanovení',
      paragraphs: [
        'Tyto Podmínky použití (dále jen "Podmínky") upravují přístup a využívání webových stránek VW Recruit (dále jen "Web"). Přístupem na tento Web a jeho prohlížením plně souhlasíte s těmito Podmínkami.',
      ],
    },
    {
      title: '2. Služby společnosti',
      paragraphs: [
        'Web má výhradně informativní charakter a je vytvořen k seznámení uživatelů se službami mezinárodního náboru pracovníků a k poskytnutí možnosti zanechat žádost o konzultace, kalkulace nebo analytické materiály. Vyplnění formuláře na webu nepředstavuje uzavření smlouvy o poskytování služeb; smluvní vztahy jsou formálně ošetřeny zvlášť po individuální dohodě.',
      ],
    },
    {
      title: '3. Povinnosti uživatele',
      paragraphs: ['Uživatel se zavazuje:'],
      items: [
        'Poskytovat pravdivé informace (jméno, kontaktní údaje společnosti) při vyplňování formulářů na Webu.',
        'Nepoužívat Web k žádným nelegálním nebo podvodným činnostem ani k šíření škodlivého softwaru.',
        'Nepokoušet se získat neoprávněný přístup k administračním systémům Webu.',
      ],
    },
    {
      title: '4. Duševní vlastnictví',
      paragraphs: [
        'Všechny materiály umístěné na Webu, včetně textů (popisy služeb, případové studie, reporty), obrázků, log ("VW Recruit"), grafiky a struktury designu, jsou vlastnictvím společnosti nebo jsou používány na základě licence. Jakékoli kopírování, šíření nebo využívání materiálů Webu ke komerčním účelům bez předchozího písemného souhlasu vlastníka autorských práv je zakázáno.',
      ],
    },
    {
      title: '5. Zřeknutí se odpovědnosti',
      paragraphs: [
        'Informace na Webu jsou poskytovány "tak jak jsou". Snažíme se udržovat údaje aktuální (např. informace o termínech, nákladech nebo zárukách výměny), přesné podmínky spolupráce jsou však zakotveny výhradně v individuální smlouvě.',
        'Společnost nenese odpovědnost za případné technické výpadky v provozu Webu ani za dočasnou nemožnost přístupu na něj.',
        'Web může obsahovat odkazy na zdroje třetích stran. Neneseme odpovědnost za obsah a zásady ochrany osobních údajů těchto externích zdrojů.',
      ],
    },
    {
      title: '6. Změny Podmínek použití',
      paragraphs: [
        'Správa Webu si vyhrazuje právo kdykoli provádět změny těchto Podmínek bez předchozího osobního upozornění uživatelů. Aktualizované znění Podmínek nabývá účinnosti okamžikem jeho zveřejnění na této stránce. Doporučujeme tuto sekci pravidelně kontrolovat.',
      ],
    },
    {
      title: '7. Řešení sporů',
      paragraphs: [
        'Všechny spory vzniklé v souvislosti s užíváním tohoto Webu budou řešeny jednáním. V případě nedosažení dohody podléhá spor přezkoumání v souladu s platnými právními předpisy [uveďte zemi nebo jurisdikci].',
      ],
    },
    {
      title: '8. Zpětná vazba',
      paragraphs: [
        'Veškeré dotazy týkající se provozu Webu nebo podmínek spolupráce směřujte na nás prostřednictvím formuláře na stránce "Kontakty" nebo na adrese: [Váš Email / Telefon].',
      ],
    },
  ],
}

csContent.contacts = {
  meta: {
    title: 'Kontakty VW Recruit',
    description:
      'Kontaktujte VW Recruit ohledně mezinárodního náboru pracovníků, spuštění týmu, dokumentů a formátu spolupráce.',
  },
  title: 'Kontakty pro firmy, které potřebují rychle vyřešit nedostatek personálu',
  summary: [
    {
      label: 'Odpověď',
      value: 'během pracovního dne',
    },
    {
      label: 'Formát',
      value: 'hovor, Zoom nebo e-mail',
    },
    {
      label: 'Zaměření',
      value: 'zaměstnavatelé a provozní týmy',
    },
  ],
  channelsTitle: 'Jak je nejpohodlnější začít',
  channelsLead:
    'Vyberte si formát, který vám nyní nejvíce vyhovuje. Pokud ještě nemáte finální zadání, můžete začít krátkým hovorem a k detailům přejít později.',
  channels: [
    {
      icon: 'brief',
      label: 'Žádost o nábor',
      title: 'Zanechte poptávku podle vaší potřeby',
      text: 'Nejpohodlnější varianta, pokud již znáte role, přibližný počet pracovníků nebo požadovaný termín nástupu týmu.',
      actionLabel: 'Otevřít formulář',
      actionType: 'anchor',
      actionTarget: '#contact-form',
    },
    {
      icon: 'call',
      label: 'Rychlá synchronizace',
      title: 'Zarezervujte si krátký hovor s týmem',
      text: 'Vhodné, pokud potřebujete rychle zjistit, zda je mezinárodní nábor vhodný právě pro váš případ a jaké budou další kroky.',
      actionLabel: 'Rezervovat hovor',
      actionType: 'modal',
      actionTarget: 'callback',
    },
    {
      icon: 'documents',
      label: 'Cesta spuštění',
      title: 'Upřesněte dokumenty, termíny a logiku spuštění',
      text: 'Vysvětlíme proces od výběru a schválení kandidátů po dokumenty, logistiku, příjezd a nástup lidí na směnu.',
    },
  ],
  checklistTitle: 'Co je užitečné si připravit před kontaktem',
  checklistLead:
    'Není potřeba dokonale zpracované zadání. I základní informace pomohou rychleji přejít k věcné konverzaci.',
  checklist: [
    'Jaké konkrétní role nebo oddělení je třeba posílit',
    'Přibližný počet pracovníků a požadovaný termín startu',
    'Země a město, kde bude tým pracovat',
    'Zda potřebujete pouze nábor, nebo plnou podporu až do spuštění',
  ],
  supportTitle: 'Co může tým vyjasnit už při prvním kontaktu',
  supportLead:
    'První kontakt neslouží k formalitám, ale k odstranění nejistoty a k tomu, abychom ukázali, nakolik se náš model hodí pro vaši poptávku.',
  support: [
    'Jak rychle lze spustit tok kandidátů',
    'Které náborové země se k daným rolím hodí nejlépe',
    'Jak jsou organizovány dokumenty, povolení a koordinace příjezdu',
    'Jaký bude formát komunikace a spuštění týmu po schválení',
  ],
  form: {
    title: 'Zanechte poptávku a ozveme se vám s dalším krokem',
    lead:
      'Zanechte nám kontakty a tým VW Recruit navrhne nejpraktičtější formát startu přímo pro vaši situaci.',
    note: 'Nejvhodnější pro zaměstnavatele, kteří potřebují nábor, výměnu nebo spuštění týmu.',
  },
}

csContent.thankYouReport = {
  meta: {
    title: 'Děkujeme za žádost o report',
    description:
      'Vaše žádost o report byla uložena. Tým VW Recruit vás bude brzy kontaktovat a materiál vám zašle.',
  },
  title: 'Děkujeme. Vaše žádost o report byla přijata',
  lead:
    'Uložili jsme vaši žádost a materiál vám brzy zašleme. Zároveň vám doporučíme praktický další krok týkající se vaší personální situace.',
  ctaLabel: 'Zpět na hlavní stránku',
  secondaryCtaLabel: 'Otevřít kontakty',
}

csContent.ui.modalClose = 'Zavřít modální okno'
csContent.ui.leadCapture = 'Sběr leadů'
csContent.ui.video = 'Video'
csContent.ui.videoPlay = 'Přehrát video'
csContent.ui.openMenu = 'Otevřít menu'
csContent.ui.primaryNav = 'Hlavní navigace'
csContent.ui.languagePickerTitle = 'Vyberte jazyk'
csContent.ui.fieldName = 'Jméno'
csContent.ui.fieldCompany = 'Společnost'
csContent.ui.fieldEmail = 'E-mail'
csContent.ui.fieldPhone = 'Telefon'
csContent.ui.sendRequest = 'Odeslat dotaz'
csContent.ui.requestCallback = 'Rezervovat hovor'
csContent.ui.getReport = 'Získat report'
csContent.ui.bookCall = 'Rezervovat hovor'
csContent.ui.quizEyebrow = 'Kvíz'
csContent.ui.quizContinue = 'Pokračovat'
csContent.ui.quizBack = 'Zpět'
csContent.ui.quizSubmit = 'Odeslat'
csContent.ui.quizReady = 'Hotovo'
csContent.ui.quizValidationError = 'Vyplňte prosím aktuální krok.'
csContent.ui.quizSubmitError = 'Odeslání formuláře se nezdařilo. Zkuste to prosím znovu.'
csContent.ui.processEyebrow = 'Proces'
csContent.ui.caseStudy = 'Případová studie'
csContent.ui.caseViewLabel = 'Zobrazit případovou studii'
csContent.ui.leadCaptureEyebrow = 'Sběr leadů'
csContent.ui.faqEyebrow = 'FAQ'
csContent.ui.aboutEyebrow = 'O nás'
csContent.ui.contactsEyebrow = 'Kontakty'
csContent.ui.reportEyebrow = 'Report'
csContent.ui.privacyEyebrow = 'Zásady ochrany osobních údajů'
csContent.ui.termsEyebrow = 'Podmínky použití'
csContent.ui.thankYouEyebrow = 'Děkujeme'
csContent.ui.finalCtaEyebrow = 'Závěrečné CTA'
csContent.ui.downloadReport = 'Stáhnout report'
csContent.ui.openContactsPage = 'Otevřít stránku kontaktů'
csContent.ui.projectsExamples = 'Příklady projektů'
csContent.ui.reelPlaceholder = 'Místo pro reel nebo video v modálním okně po připojení zdrojů.'
csContent.ui.industriesLead =
  'Podniky nejčastěji využívají tento model pro provozní činnosti ve výrobě, skladech, stavebnictví a sektoru služeb.'
csContent.ui.legalPlaceholder = 'Zde bude právní text. Před spuštěním jej nahraďte schválenou finální verzí.'
csContent.ui.footerDescription =
  'Nábor pracovníků z Asie a Afriky na klíč: od vyhledání kandidátů a dokumentů po příjezd, adaptaci a nástup týmu na směnu.'
csContent.ui.footerCorePages = 'Hlavní stránky'
csContent.ui.footerLegal = 'Právní informace'
csContent.ui.privacyPolicy = 'Zásady ochrany osobních údajů'
csContent.ui.termsAndConditions = 'Podmínky použití'
csContent.ui.formRequiredError = 'Vyplňte prosím povinná pole formuláře.'
csContent.ui.formSubmittingButton = 'Odesílám...'
csContent.ui.formSubmittingStatus = 'Odesílání formuláře...'
csContent.ui.formSubmitError = 'Odeslání formuláře se nezdařilo. Zkuste to prosím znovu.'
csContent.ui.industryVisualLogisticsAlt = 'Pracovníci ve skladu a logistice'
csContent.ui.industryVisualConstructionAlt = 'Pracovníci na staveništi'
csContent.ui.industryVisualHospitalityAlt = 'Personál v hotelnictví a službách'
csContent.ui.industryVisualManufacturingAlt = 'Pracovníci ve výrobě'
csContent.ui.industrySlidePlaceholder =
  'Samostatnou vizuální případovou studii pro tuto vertikálu lze škálovat pro SEO stránky, kvízy a personalizovaná CTA.'
csContent.ui.comparisonCardCta = 'Spočítat nábor'
csContent.ui.comparisonOtherMark = 'OS'
csContent.ui.guaranteesLegalDelta = 'Kvóty, povolení, víza'
csContent.ui.guaranteesReplacementMetric = '0 Kč'
csContent.ui.guaranteesReplacementDelta = 'Rychlá výměna v záruce'
csContent.ui.guaranteesSupportMetric = 'Na klíč'
csContent.ui.guaranteesSupportDelta = 'Od výběru po směnu'
csContent.ui.guaranteesFallbackDelta = 'Výhoda VW Recruit'
csContent.ui.guaranteesReplacementLabel = 'Záruka při spuštění'
csContent.ui.guaranteesReplacementUnit = 'Kč'
csContent.ui.guaranteesReplacementWarrantyDays = 30
csContent.ui.guaranteesReplacementWarrantyLabel = 'dní záruka'
csContent.ui.guaranteesReplacementReplyHours = 48
csContent.ui.guaranteesReplacementReplyLabel = 'hodin na odpověď'
csContent.ui.guaranteesSupportBadge = 'Jeden tým pro celý proces'
csContent.ui.guaranteesCandidatesDays = 10
csContent.ui.guaranteesCandidatesDaysLabel = 'dní ke kandidátům'
csContent.ui.guaranteesSupportPercentLabel = '% podpora'
csContent.ui.guaranteesOneTeamCount = 1
csContent.ui.guaranteesOneTeamLabel = 'tým'
csContent.ui.guaranteeTimelineStepOne = 'Výběr'
csContent.ui.guaranteeTimelineStepTwo = 'Dokumenty'
csContent.ui.guaranteeTimelineStepThree = 'Logistika'
csContent.ui.guaranteeTimelineStepFour = 'Příjezd'
csContent.ui.guaranteeTimelineStepFive = 'Směna'
csContent.ui.guaranteeSupportStepOne = 'Výběr'
csContent.ui.guaranteeSupportStepTwo = 'Příjezd'
csContent.ui.guaranteeSupportNote = 'Start směny'
csContent.ui.guaranteeChecklistQuota = 'Kvóty'
csContent.ui.guaranteeChecklistPermit = 'Povolení'
csContent.ui.guaranteeChecklistVisa = 'Víza'
csContent.ui.reviewFallbackValue = '7 LET'
csContent.ui.reviewLabelPrefix = '7 let '
csContent.ui.servicesShortRequestEyebrow = 'Krátká poptávka'
csContent.ui.servicesHeroGhostCta = 'Zobrazit podmínky služby'
csContent.ui.servicesHeroPanelTitle =
  'Nábor, dokumenty, logistika a nasazení týmu v jednom procesu'
csContent.ui.servicesHeroPanelText =
  'Celá cesta je sestavena tak, aby firma viděla předvídatelné fáze spuštění a kandidát chápal, co se děje v každém kroku.'
csContent.ui.servicesPillarsEyebrow = 'Co pokrýváme'
csContent.ui.servicesPillarsTitle =
  'Služba není postavena na "hledání životopisů", ale jako kompletní cesta od poptávky po nástup do práce'
csContent.ui.servicesOfferEyebrow = 'Co získají obě strany'
csContent.ui.servicesOfferTitle =
  'Model, ve kterém firma získává řízený výsledek a kandidát vidí transparentní proces'
csContent.ui.servicesOfferVisualLabel = 'VW Recruit / cesta'
csContent.ui.servicesOfferVisualPrimary = 'Pro firmy'
csContent.ui.servicesOfferVisualSecondary = 'Pro kandidáty'
csContent.ui.servicesBeamEyebrow = 'Mapa procesu'
csContent.ui.servicesRouteEyebrow = 'Jak funguje spolupráce'
csContent.ui.servicesRouteTitle = 'Transparentní cesta od poptávky až k nástupu pracovníků na směnu'
csContent.ui.servicesRouteLead =
  'Firma vidí jasnou cestu spuštění s předvídatelnými fázemi od poptávky až po nástup lidí na směnu.'
csContent.ui.servicesProofEyebrow = 'Proč to prodává'
csContent.ui.servicesProofTitle =
  'Nejen nábor, ale řízená služba s jasným výsledkem v každé fázi'
csContent.ui.servicesFitEyebrow = 'Kde to funguje nejlépe'
csContent.ui.servicesFitTitle =
  'Role a niky, kde mezinárodní nábor přináší maximální provozní efekt'
csContent.ui.servicesFitLead =
  'Každá karta ukazuje, kde model poskytuje nejrychlejší provozní výsledek, nejčistší spuštění týmu a nejvyšší stabilitu procesu.'
csContent.ui.servicesFitScoreLabel = 'míra shody'
csContent.ui.servicesFitMetricOne = 'Rychlost spuštění'
csContent.ui.servicesFitMetricTwo = 'Stabilita'
csContent.ui.servicesFitMetricThree = 'Transparentnost'
csContent.ui.servicesFitCardTextOne =
  'Nejlépe funguje tam, kde jsou důležité opakující se směny, disciplína docházky a rychlé škálování bez výpadků.'
csContent.ui.servicesFitCardTextTwo =
  'Dobře funguje pro sezónní špičky, růst objemů a provozy, kde firma kriticky potřebuje rytmický nástup lidí.'
csContent.ui.servicesFitCardTextThree =
  'Vhodné pro projekty s přísnými termíny, kde je třeba spojit nábor, dokumenty a příjezd bez chaosu.'
csContent.ui.servicesFitCardTextFour =
  'Vykazuje dobré výsledky v servisních týmech, kde je kriticky důležitá jasná cesta, rychlá adaptace a stabilita spuštění.'
csContent.ui.servicesLeadEyebrow = 'Zahájit dialog'
csContent.ui.servicesLeadText =
  'Pro zaměstnavatele je to rychlý způsob, jak zjistit postup spuštění náboru. Pro kandidáty příležitost získat upřímné vysvětlení o cestě k zaměstnání a dokumentech.'
csContent.ui.servicesSegmentBadgeBusiness = 'B2B'
csContent.ui.servicesSegmentBadgeCandidate = 'B2C'
csContent.ui.industriesSectionTitle = 'PRO KTERÁ ODVĚTVÍ JE TENTO MODEL NÁBORU VHODNÝ'
csContent.ui.industrySliderPrev = 'Předchozí snímek'
csContent.ui.industrySliderNext = 'Další snímek'
csContent.ui.quizSectionLead =
  'Krátký krokový kvíz, který pomáhá rychle shromáždit požadavky a předat je v jednotném formátu.'
csContent.ui.casesSectionLead =
  'Ukazujeme příklady spuštění náboru pro výrobu, logistiku, hotely a další provozní týmy.'
csContent.ui.caseSliderPrev = 'Předchozí případ'
csContent.ui.caseSliderNext = 'Další případ'
csContent.ui.casesTimelineSteps = ['Brief', 'Hledání', 'Schválení', 'Dokumenty', 'Příjezd']
csContent.ui.industriesFitSummary =
  'Signály, které obvykle znamenají, že lokální nábor již nestíhá tempo vašeho provozu a je nutný systematičtější model doplňování týmu.'
csContent.ui.caseSubtitlePlaceholder = 'Stručný popis případu'
csContent.ui.caseProblemPlaceholder =
  'Samostatná SEO stránka pro případ s výsledky, termíny a cílovou akcí.'
csContent.ui.processStepLabel = 'Krok'
csContent.ui.reportPanelTitle = 'Získejte materiál na e-mail'
csContent.ui.reportPanelText =
  'Zanechte své kontakty a zašleme vám užitečný materiál k tématu mezinárodního náboru a optimalizace nákladů na personál.'
csContent.ui.reportPanelKicker = 'VW Recruit / Analytika'
csContent.ui.reportPanelReportTitle = 'Trh práce 2026'
csContent.ui.reportPanelReportText =
  'Integrace mezinárodního personálu pro firmy s nedostatkem zaměstnanců'
csContent.ui.reportPanelGuide = 'PDF'
csContent.ui.videoInsightLabel = 'Video insight'
csContent.ui.mediaDefaultDuration = '02:00'
csContent.ui.reviewsPrev = 'Předchozí recenze'
csContent.ui.reviewsNext = 'Další recenze'
csContent.ui.genericPageCardOne = 'Základní stránka připravena pro lokalizovaný obsah'
csContent.ui.genericPageCardTwo = 'Metadata a struktura jsou připraveny pro další plnění'
csContent.ui.genericPageCardThree = 'Každá trasa se generuje samostatně pro každý jazyk'

csContent.quiz.title = 'Kalkulace náboru'
csContent.quiz.progressLabel = 'Krok'
csContent.quiz.completionTitle = 'Vaše poptávka je připravena'
csContent.quiz.completionLead =
  'Obdrželi jsme vaše odpovědi. Dalším krokem je kontaktovat vás a připravit konzultaci nebo předběžnou kalkulaci.'
csContent.quiz.steps = [
  {
    id: 'industry',
    label: 'Pro jaký obor potřebujete pracovníky?',
    type: 'options',
    options: ['Výroba', 'Stavebnictví', 'Sklady a logistika', 'Hotely a služby', 'Jiné'],
  },
  {
    id: 'teamSize',
    label: 'Kolik pracovníků potřebujete?',
    type: 'options',
    options: ['1–10', '11–30', '31–50', '50+'],
  },
  {
    id: 'timeline',
    label: 'Kdy by měl tým nastoupit do práce?',
    type: 'options',
    options: ['Naléhavě', 'Během 2–4 týdnů', 'Během 1–2 měsíců', 'Zatím zjišťuji možnosti'],
  },
  {
    id: 'location',
    label: 'Kde sídlí váš podnik?',
    type: 'text',
    fields: [
      { name: 'country', label: 'Země', required: true },
      { name: 'city', label: 'Město', required: false },
    ],
  },
  {
    id: 'problem',
    label: 'Jaký je nyní největší problém s náborem?',
    type: 'options',
    options: ['Vysoké mzdové náklady', 'Nedostatek personálu', 'Fluktuace', 'Sezónní špičky', 'Škálování výroby', 'Jiné'],
  },
  {
    id: 'contact',
    label: 'Kam máme kalkulaci zaslat?',
    type: 'text',
    fields: [
      { name: 'name', label: 'Jméno', required: true },
      { name: 'company', label: 'Společnost', required: true },
      { name: 'phone', label: 'Telefon', required: true },
      { name: 'email', label: 'E-mail', required: true },
    ],
  },
]

csContent.services = {
  title: 'Služby mezinárodního náboru pracovníků na klíč',
  lead:
    'Řešíme <strong>nedostatek provozního personálu</strong> pro firmy a vedeme kandidáty k <strong>legálnímu nástupu do práce</strong>: od vyhledávání a výběru až po dokumenty, příjezd a zahájení směny.',
  intro: '',
  cta: 'Konzultovat nábor pro firmu',
  metrics: [
    { value: '10', suffix: ' dní', label: 'k prvním kandidátům v náboru' },
    { value: '100', suffix: ' %', label: 'podpora dokumentů a legality' },
    { value: '4', suffix: ' fáze', label: 'od žádosti po start týmu' },
  ],
  heroBadges: [
    { value: '10', suffix: ' dní', label: 'k prvním kandidátům' },
    { value: '100', suffix: ' %', label: 'právní podpora' },
    { value: 'Na klíč', suffix: '', label: 'od hledání po start směny' },
    { value: '1 tým', suffix: '', label: 'nábor, dokumenty, logistika' },
  ],
  segments: [
    {
      variant: 'business',
      label: 'Pro firmy',
      badge: 'B2B',
      title: 'Pro firmy, které potřebují stabilní tým bez personálních výpadků',
      text: 'Vhodné pro společnosti, které nedokážou obsadit provozní role lokálním náborem, rostou, mají sezónní špičky nebo jsou unavené z vysoké fluktuace.',
      cta: 'Získat plán náboru',
    },
    {
      variant: 'candidate',
      label: 'Pro kandidáty',
      badge: 'B2C',
      title: 'Pro kandidáty, kteří chtějí legálně pracovat v zahraničí',
      text: 'Jednoduše vysvětlujeme jednotlivé fáze: prvotní výběr, dokumenty, příjezd, adaptace a nástup do práce. Bez nejasných podmínek a neurčitých slibů.',
      cta: 'Podat žádost',
    },
  ],
  pillars: [
    {
      title: 'Hledání a výběr kandidátů',
      text: 'Vytvoříme profil pozice, zahájíme hledání v naší databázi a partnerské síti, odfiltrujeme slabé kandidáty a ke schválení nabídneme jen relevantní lidi.',
    },
    {
      title: 'Dokumenty, povolení a legalita',
      text: 'Vyřizujeme kvóty, povolení, vízové a migrační procesy, aby se zaměstnavatel neztratil v byrokracii a kandidát věděl, v jaké fázi se nachází.',
    },
    {
      title: 'Příjezd, adaptace a zahájení směny',
      text: 'Koordinujeme logistiku, příjezd, zahájení práce a první fázi adaptace, aby pracovníci skutečně nastoupili na objekt v dohodnutých termínech.',
    },
  ],
  timeline: [
    {
      title: 'Brief a výpočet modelu',
      text: 'Upřesníme počet lidí, role, harmonogram, zemi spuštění a omezení projektu. Následně vytvoříme realistický scénář náboru.',
    },
    {
      title: 'Výběr a schválení kandidátů',
      text: 'Spustíme hledání, provedeme screening, ověříme dokumenty a dáme vaší straně možnost finálně schválit kandidáty.',
    },
    {
      title: 'Zpracování a organizace příjezdu',
      text: 'Po schválení zahajujeme přípravu dokumentů, koordinaci povolení, logistiku a připravenost lidí k odjezdu.',
    },
    {
      title: 'Nástup do práce a podpora',
      text: 'Po příjezdu koordinujeme start směny, adaptaci a komunikaci mezi firmou, pracovníky a odpovědnými osobami na objektu.',
    },
  ],
  deliverables: [
    'Profil pozice a strategie hledání pro konkrétní roli',
    'Balíček vybraných kandidátů připravených ke schválení',
    'Kontrola všech fází dokumentačního vyřízení',
    'Časová osa příjezdu pracovníků a spuštění týmu',
    'Podpora týmu na začátku práce a v prvním období adaptace',
    'Záruční podmínky pro výměnu v závislosti na formátu projektu',
  ],
  offerCards: [
    {
      title: 'Nábor pro zaměstnavatele',
      text: 'Rychlé spuštění náboru na uvolněné pozice, sezónní špičky nebo škálování výroby.',
    },
    {
      title: 'Legální cesta pro kandidáty',
      text: 'Transparentní proces výběru, příprava dokumentů a podpora až do skutečného nástupu do práce.',
    },
    {
      title: 'Podpora po startu',
      text: 'Adaptace, komunikace, výměny a koordinace procesů v první fázi práce týmu.',
    },
  ],
  beam: {
    title: 'Jak postupuje proces náboru od poptávky až po nástup lidí na směnu',
    lead:
      'Vizuální mapa procesu ukazující, jak jsou brief, výběr, schválení, dokumenty a nasazení týmu spojeny do jednoho řízeného procesu.',
    centerLabel: 'Zpracování',
    outputLabel: 'Nástup na směnu',
    steps: ['Brief', 'Hledání', 'Schválení', 'Dokumenty', 'Příjezd'],
  },
  roles: [
    'Pracovníci na výrobní linky, balení, třídění a pomocné procesy',
    'Skladové týmy pro vychystávání, třídění, přesun a logistické operace',
    'Stavební a montážní dělníci pro objekty s nedostatkem personálu',
    'Pracovníci pro hotely, kuchyně, úklid pokojů a servisní služby',
  ],
  promise: {
    title: 'Za celou cestu kandidáta odpovídá jeden tým',
    text: 'Pro firmu to znamená méně zmatků mezi náborem, dokumenty, logistikou a zaváděním lidí do práce. Získáte jeden jasný model interakce místo složité sítě dodavatelů.',
  },
  trust: [
    'Zaměstnavatel vidí předvídatelnou cestu k nasazení týmu',
    'Kandidát získá legální a jasnou cestu k zaměstnání',
    'Jeden tým koordinuje nábor, dokumenty, logistiku a adaptaci',
  ],
  form: {
    title: 'Získejte plán náboru nebo konzultaci k zaměstnání',
    lead: 'Vyplňte krátký formulář. Pro zaměstnavatele připravíme další krok pro spuštění náboru. Pro kandidáta vysvětlíme postup a požadavky na start.',
    button: 'Získat konzultaci',
    note: 'Obvykle odpovídáme během pracovního dne.',
  },
}

csContent.cases = {
  title: 'Případové studie mezinárodního náboru s měřitelným provozním výsledkem',
  lead:
    'Reálné scénáře, ve kterých firma řeší nedostatek personálu, urychluje nasazení týmu a získává předvídatelnou cestu nástupu lidí do práce.',
  description:
    'Případové studie z mezinárodního náboru pracovníků: výzva, model nasazení, termíny a výsledek pro firmu.',
  eyebrow: 'Případové studie',
  intro:
    'Tato stránka neslouží jen pro "success stories", ale jako důkaz, že model funguje v reálných provozních podmínkách: když chybí lidé, nestíhají se termíny nebo nastupuje sezónní vytížení.',
  stats: [
    { value: '3', label: 'detailní případové studie' },
    { value: '4', label: 'klíčové oblasti podnikání' },
    { value: '96', suffix: ' %', label: 'nástupů na směnu' },
  ],
  featured: [
    {
      title: 'Delta Pack',
      category: 'Výroba',
      colSpan: 2,
      subtitle: 'Výrobní podnik, střední Evropa',
      problem:
        'Podnik dlouhodobě nedokázal stabilně obsadit směnu na balicí lince kvůli zdlouhavému lokálnímu náboru a neustálé fluktuaci.',
      solution:
        'Model spuštění propojil hledání kandidátů, podporu s dokumenty, logistiku a koordinaci startu týmu do jednoho procesu.',
      result:
        'Firma získala jasný plán obsazení směny, kratší cyklus schvalování kandidátů a větší kontrolu nad startem projektu.',
      timeline: 'První kandidáti za 7-14 dní',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Pracovníci na výrobní lince',
      metrics: [
        { label: 'Potřeba', value: '32 pracovníků' },
        { label: 'Formát', value: 'Balicí linka' },
        { label: 'Cíl', value: 'Stabilní nasazení směny' },
      ],
    },
    {
      title: 'Nord Cargo Hub',
      category: 'Logistika',
      colSpan: 1,
      subtitle: 'Skladový komplex a logistika',
      problem:
        'Sklad nestíhal pokrývat špičkové zatížení bez rezervy lidí a předvídatelného harmonogramu příjezdu pracovníků.',
      solution:
        'Případ se zaměřil na rychlost vytvoření short-listu, kontrolu dokumentů a přípravu lidí na směnný provoz.',
      result:
        'Provozní tým získal předvídatelnější časovou osu pro přípravu onboardingu, supervizorů a zvládnutí špiček bez zmatků.',
      timeline: 'Rýchlé spuštění pro sezónu',
      image: '/images/industry-logistics.jpg',
      alt: 'Pracovníci ve skladu a logistice',
      metrics: [
        { label: 'Potřeba', value: 'Tým pro třídění' },
        { label: 'Formát', value: 'Skladové operace' },
        { label: 'Cíl', value: 'Připravenost na špičku' },
      ],
    },
    {
      title: 'Urban Build Group',
      category: 'Stavebnictví',
      colSpan: 3,
      subtitle: 'Stavební dodavatel',
      problem:
        'Dodavatel potřeboval rychle posílit aktivní stavby, aniž by posouval termíny a selhal při doplňování part.',
      solution:
        'Vyhledávání, povolení, logistika a zahájení adaptace byly synchronizovány do jediného pracovního postupu od schválení po nástup na stavbu.',
      result:
        'Klient obdržel model, který snížil prodlevu mezi schválením kandidátů, vyřízením dokumentů a samotným začátkem prací.',
      timeline: 'Proces přizpůsobený termínům',
      image: '/images/industry-construction.jpg',
      alt: 'Pracovníci na staveništi',
      metrics: [
        { label: 'Potřeba', value: 'Posílení objektů' },
        { label: 'Formát', value: 'Stavební role' },
        { label: 'Cíl', value: 'Dodržení termínů' },
      ],
    },
  ],
  convincingTitle: 'Od výzvy k výsledku: proč naše zkušenosti pomáhají firmám jednat rychleji',
  frameworkTitle: 'Od výzvy k výsledku: proč naše zkušenosti pomáhají firmám jednat rychleji',
  frameworkLead:
    'Silná případová studie ukazuje nejen výsledek, ale také důvod, proč byl postup spuštění pro daného zaměstnavatele realistický.',
  routeLabel: 'Cesta',
  outcomeLabel: 'Výsledek',
  framework: [
    {
      title: 'Jasná výchozí situace',
      text: 'Ukazujeme, kde přesně vytvořil lokální nábor, sezónnost nebo fluktuace provozní riziko pro firmu.',
    },
    {
      title: 'Transparentní model spuštění',
      text: 'Vysvětlujeme, jak byly v jednom procesu propojeny nábor, dokumenty, logistika a uvedení pracovníků do práce.',
    },
    {
      title: 'Provozní výsledek',
      text: 'Případovou studii převádíme do jazyka byznysu: stabilita směn, rychlost spuštění a předvídatelnost pro daný objekt.',
    },
  ],
  checklistTitle: 'Co by nemělo chybět v každé další studii',
  checklist: [
    'Popis role a počáteční personální výzvy',
    'Logika výběru země nebo modelu hledání',
    'Časová osa od briefu po příjezd',
    'Klíčové body k dokumentům a logistice',
    'Výsledek pro firmu a jasné CTA',
  ],
  ctaTitle: 'Potřebujete zavést podobný model náboru pro svůj tým?',
  ctaLead:
    'Popište svůj nedostatek personálu a my pro vaši firmu připravíme postup náboru, termíny spuštění a další praktický krok.',
}

csContent.industries = {
  title: 'Odvětví, kde mezinárodní nábor přináší nejsilnější provozní efekt',
  lead:
    'Zaměřujeme se na sektory, kde nedostatek liniového personálu a vysoká fluktuace nejvíce brzdí rozvoj podnikání.',
  description:
    'Mezinárodní nábor pracovníků pro výrobu, stavebnictví, sklady, logistiku, hotely a servisní týmy.',
  eyebrow: 'Odvětví',
  intro: '',
  sectorsTitle: 'Klíčové oblasti, kde model přináší nejrychlejší výsledek',
  sectorsLead: '',
  stats: [
    { value: '3', label: 'klíčová odvětví s nejvyšším vlivem' },
    { value: '1+', label: 'rok smlouvy pro většinu týmů' },
    { value: '54 %', label: 'potenciál snížení nákladů na personál' },
  ],
  sectors: [
    {
      title: 'Výroba',
      colSpan: 2,
      text: 'Stabilní týmy pro pásové linky, balicí dílny a třídicí centra.',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Pracovníci ve výrobě',
      tags: ['Výrobní linky', 'Balení', 'Třídění'],
      problem:
        'Neustálé "díry" ve směnách z důvodu absence místních pracovníků a roční fluktuace na úrovni 30-50 %.',
      solution:
        'Vytváříme skupiny pracovníků, kteří přijíždějí na základě smlouvy v délce od 1 roku. Tím je zaručena disciplína a odpadá nutnost každý týden přeškolovat nové lidi.',
      roles: ['Operátoři linek', 'Baliči', 'Třídiči', 'Pomocní dělníci'],
      points: [
        'Stabilizujeme nástupy na směny bez neustálého dodatečného náboru',
        'Snižujeme zátěž mistrů a HR týmu',
        'Poskytujeme předvídatelné tempo zapojování lidí do pracovního procesu',
      ],
      cta: 'Získat kalkulaci pro výrobu',
    },
    {
      title: 'Stavebnictví',
      colSpan: 1,
      text: 'Škálování stavebních projektů bez závislosti na nedostatku pracovníků na místním trhu.',
      image: '/images/industry-construction.jpg',
      alt: 'Pracovníci na staveništi',
      tags: ['Montáže', 'Pomocné práce', 'Stavební týmy'],
      problem:
        'Nedodržování termínů dokončení projektů kvůli neschopnosti rychle najít 20-50 pomocných dělníků nebo montérů během hlavní sezóny.',
      solution:
        'Zajišťujeme rychlý příjezd sestavených pracovních skupin. Přebíráme veškerou legalizaci, aby se vaši stavbyvedoucí věnovali stavbě a ne papírování.',
      roles: ['Pomocní dělníci', 'Montéři', 'Železobetonáři', 'Betonáři'],
      points: [
        'Posilujeme aktivní stavby bez posouvání termínů',
        'Zbavujeme stavbyvedoucí administrativní zátěže',
        'Pracujeme pro sezónní špičky a rozšiřování skupin',
      ],
      cta: 'Získat kalkulaci pro stavebnictví',
    },
    {
      title: 'Sklady a logistika',
      colSpan: 1,
      text: 'Flexibilita a výkon pro 3PL operátory a E-commerce.',
      image: '/images/industry-logistics.jpg',
      alt: 'Pracovníci ve skladu a logistice',
      tags: ['Vychystávání', 'Třídění', 'Manipulace se zbožím'],
      problem:
        'Nepředvídatelnost během sezónních špiček a vysoké náklady na "noční" směny lokálního personálu.',
      solution:
        'Získáte tým připravený na intenzivní směnný provoz. Personální náklady se stávají předvídatelnými a fixními.',
      roles: ['Vychystávači (Pickers)', 'Baliči', 'Skladníci', 'Operátoři manipulační techniky'],
      points: [
        'Pracujeme s ohledem na sezónní výkyvy a vysoké tempo směn',
        'Zajišťujeme větší předvídatelnost personálních nákladů',
        'Pomáháme plánovat nasazení týmů bez paniky',
      ],
      cta: 'Získat kalkulaci pro sklady a logistiku',
    },
    {
      title: 'Hotely a služby',
      colSpan: 2,
      text: 'Stabilní týmy pro úklid pokojů, výpomoc v kuchyni a každodenní provoz hotelů.',
      image: '/images/industry-hospitality.jpg',
      alt: 'Personál v hotelnictví a službách',
      tags: ['Úklid pokojů', 'Výpomoc v kuchyni', 'Provozní služby'],
      problem:
        'V obdobích špičky je obtížné udržet stabilní servisní tým, kdy lokální personál rychle mění zaměstnavatele nebo nenastupuje na směny.',
      solution:
        'Vybíráme pracovníky s delším pracovním horizontem a budujeme legální cestu na pracoviště, aby provozní tým nemusel neustále řešit krizový nábor.',
      roles: ['Pokojské', 'Pomocná síla v kuchyni', 'Pracovníci servisu', 'Univerzální pomocníci'],
      points: [
        'Snižujeme zmatky v každodenním plánování směn',
        'Posilujeme hotely a servisní pracoviště během sezónních špiček',
        'Poskytujeme jasnou a legální cestu k zaměstnání',
      ],
      cta: 'Získat kalkulaci pro hotely a služby',
    },
  ],
  frameworkTitle: 'Proč si byznys vybírá pracovníky z Asie a Afriky?',
  frameworkLead:
    'Není to otázka "levnější náhrady", ale otázka stability týmu, motivace a předvídatelného dlouhého pracovního cyklu na pracovišti.',
  framework: [
    {
      title: 'Vysoká motivace',
      text: 'Pro kandidáty z těchto regionů je práce v Evropě šancí na lepší budoucnost, a proto si více váží pracovního místa a po měsíci jen zřídka mění zaměstnavatele.',
    },
    {
      title: 'Disciplína',
      text: 'V mnoha asijských zemích je pracovní kultura založena na respektu k hierarchii, jasných pokynech a stabilním provádění opakujících se úkonů.',
    },
    {
      title: 'Dlouhodobý závazek',
      text: 'Pracovníci přijíždějí na účelová víza na dlouhé období, což odstraňuje problém sezónního úbytku personálu a neustálých restartů náboru.',
    },
  ],
  fitTitle: 'Kdy určitě potřebujete mezinárodní nábor?',
  fitLead:
    'Pokud v těchto signálech poznáváte svou situaci, lokální nábor pravděpodobně již váš problém systematicky neřeší.',
  fitSignals: [
    'Fluktuace přesahuje 20 %: trávíte více času pohovory než řízením výroby.',
    'Přehřátý lokální trh: platová očekávání místních kandidátů rostou, ale produktivita ne.',
    'Plánování nových projektů nebo linek: bojíte se spouštět nové kapacity, protože není, kdo by pracoval.',
    'Cena náboru stoupá: lokální agentury účtují vysoké provize a lidé odcházejí po týdnu.',
  ],
  ctaTitle: 'Potřebujete plán nasazení pro konkrétní obor?',
  ctaLead:
    'Napište nám svou oblast působení, velikost týmu a termín spuštění, a my vám navrhneme nejlepší model náboru přesně pro váš provoz.',
  seoTitle: 'Mezinárodní nábor personálu pro výrobu, sklady a stavebnictví',
  seoText:
    'VW Recruit se specializuje na komplexní řešení nedostatku personálu pro evropské firmy. Zajišťujeme nábor liniového personálu pro sklady, továrny a stavby s využitím zdrojů ze zemí s převisem pracovní síly, zejména z Filipín, Indie, Vietnamu a afrických států. Náš model nezahrnuje pouze samotný nábor, ale i kompletní dokumentační servis, logistiku a adaptaci pracovníků na pracovišti, což umožňuje klientům snížit provozní náklady na personál až o 54 %.',
}

csContent.report = {
  title: 'Trh práce 2026: Když už lokální nábor nestačí',
  lead:
    'Analytická zpráva pro zaměstnavatele, kteří chtějí porozumět skutečným nákladům, termínům a právním nuancím mezinárodního náboru.',
  description:
    'Stáhněte si zprávu o mezinárodním náboru pracovníků, nákladech na personál, právních rizicích a nasazení týmu.',
  eyebrow: 'Report',
  intro:
    'Nejde jen o PDF "do počtu", ale o obsah, který převádí zájem na věcný rozhovor o nákladech, termínech nasazení, legalitě a připravenosti firmy na mezinárodní nábor.',
  stats: [
    { value: '1', label: 'praktický analytický report' },
    { value: '5', label: 'klíčových poznatků uvnitř' },
    { value: '1', label: 'jasná konverzní akce' },
  ],
  pointsTitle: 'Co obsahuje report',
  points: [
    'Logika porovnání nákladů: lokální nábor vs. mezinárodní nábor',
    'Nejčastější právní chyby při zaměstnávání cizinců',
    'Jak připravit provoz na onboarding a adaptaci',
    'Co reálně ovlivňuje termíny od poptávky po start směny',
    'Jak snížit tlak na personál v provozních a manuálních rolích',
  ],
  benefitsTitle: 'Proč si firmy žádají tento report',
  benefitsLead:
    'Report je obzvláště užitečný, když firma již pociťuje personální tlak a potřebuje místo abstraktních informací jasný model řešení.',
  benefits: [
    {
      title: 'Rychlejší interní shoda',
      text: 'Pomáhá majiteli, provozu a HR oddělení hovořit společnou řečí o skutečném postupu zahájení náboru.',
    },
    {
      title: 'Jasnější pohled na náklady',
      text: 'Umožňuje střízlivěji porovnat mzdový tlak, termíny spuštění a rizika z hlediska kontinuity týmu.',
    },
    {
      title: 'Lepší přechod k dalšímu kroku',
      text: 'Přenáší zájem z úrovně "jen se dívám" na věcnou konzultaci s konkrétními omezeními a termíny.',
    },
  ],
  trustTitle: 'Co dělá tento report skutečně užitečným',
  trustLead:
    'Silný analytický materiál by neměl být jen obecným HR obsahem. Musí přímo odpovídat na byznysový problém, kvůli kterému člověk formulář odesílá.',
  trustPoints: [
    'Postavený na problematice nedostatku personálu v provozním byznysu, nikoli na obecné teorii',
    'Připravený jako základ pro první konzultaci nebo prodejní schůzku',
    'Užitečný pro zaměstnavatele, kteří posuzují, zda model vyhovuje jejich provozu a termínům',
  ],
  faqTitle: 'Otázky před stažením',
  faq: [
    {
      q: 'Pro koho je tento report určen?',
      a: 'Pro zaměstnavatele ve výrobě, logistice, stavebnictví, hotelnictví a dalších provozních oblastech s nedostatkem zaměstnanců nebo mzdovým tlakem.',
    },
    {
      q: 'Je to jen obecné PDF?',
      a: 'Ne. Report by měl pomoci přijmout reálné rozhodnutí o náboru a připravit věcnou diskusi o modelu nasazení, termínech a limitech.',
    },
    {
      q: 'Co se stane po odeslání formuláře?',
      a: 'Zájemce obdrží postup pro získání PDF a zároveň se stává kvalifikovaným leadem pro další konzultaci ohledně náborových potřeb.',
    },
  ],
  ctaTitle: 'Získejte report a zjistěte, jaký bude váš další personální krok',
  ctaLead:
    'Zanechte nám kontakty a my vám zašleme PDF. Zároveň vám pomůžeme posoudit, zda je model mezinárodního náboru vhodný pro váš aktuální nedostatek zaměstnanců.',
  formTitle: 'Získat report',
  formLead:
    'Vyplňte krátký formulář a obdržíte PDF. Posuneme se tak k věcnějšímu rozhovoru o personálních nákladech, termínech a právní přípravě.',
  formNote: 'Nejužitečnější pro zaměstnavatele, kteří plánují nábor, obměnu nebo rozšiřování týmu.',
}
