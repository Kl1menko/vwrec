import { createLocaleContent } from '../create-locale-content.js'

export const huContent = createLocaleContent({
  code: 'hu',
  name: 'Hungarian',
  nativeName: 'Magyar',
  translated: true,
  homeLabel: 'Kezdőlap',
  heroTitle: 'Nemzetközi toborzás olyan vállalatok számára, amelyeknek késedelem nélkül van szükségük operatív munkatársakra.',
  heroLead:
    'Az oldal szerkezete már fel van készítve a lead-generálásra, a többnyelvű SEO-növekedésre, kvízekre, esettanulmányokra és konzultációs CTA-kra B2B ügyfelek számára.',
})

huContent.site.description =
  'Csökkentse személyzeti költségeit akár 54%-kal az Ázsiából és Afrikából származó munkaerő kulcsrakész nemzetközi toborzásával.'

huContent.navigation.items = [
  { key: 'home', label: 'Kezdőlap' },
  { key: 'services', label: 'Szolgáltatások' },
  { key: 'industries', label: 'Iparágak' },
  { key: 'cases', label: 'Projektek' },
  { key: 'report', label: 'Riport' },
  { key: 'contacts', label: 'Kapcsolat' },
]

huContent.navigation.primaryCta = 'Toborzás kiszámítása'
huContent.navigation.secondaryCta = 'Hívás foglalása'

huContent.home = {
  meta: {
    title: 'Nemzetközi toborzás vállalatok számára',
    description:
      'Csökkentse személyzeti költségeit és oldja meg a munkaerőhiányt az Ázsiából és Afrikából származó munkaerő kulcsrakész nemzetközi toborzásával.',
  },
  hero: {
    lines: ['SZEMÉLYZETI KÖLTSÉGEK', 'CSÖKKENTÉSE'],
    highlight: 'AKÁR 54%-KAL',
    lead:
      'az <strong>Ázsiából és Afrikából</strong> származó munkaerő kulcsrakész nemzetközi toborzásával',
    stats: [
      { value: 10, suffix: ' NAP', label: 'az első jelöltek kiválasztásáig' },
      { value: 7, suffix: ' ÉV', label: 'tapasztalat a nemzetközi toborzásban' },
      { value: 100, suffix: ' %', label: 'dokumentációs és érkezési támogatás' },
    ],
    video: {
      src: '/videos/international-recruitment-overview.mp4',
      poster: '/video-poster-home.svg',
      type: 'video/mp4',
    },
  },
  comparison: {
    eyebrow: 'Toborzási modellek összehasonlítása',
    title: 'Mennyit fizet túl egy cég a helyi toborzás során',
    cards: [
      {
        title: 'Mások',
        brandNote: 'helyi toborzás / más ügynökségek',
        amount: '$36 000',
        period: '/ hónap',
        note: 'egy 30 fős csapat számára',
        variant: 'other',
        rows: [
          {
            title: 'Magasabb béralap',
            text: 'Átlagosan 1000–1400 $ munkavállalónként helyi toborzás esetén.',
          },
          {
            title: 'Lassabb csapatépítés',
            text: 'Az első munkatársak kiválasztása 3–6 hetet vagy még többet is igénybe vehet.',
          },
          {
            title: 'Folyamatos újratoborzás',
            text: 'A fluktuáció és a szezonalitás miatt a vállalat folyamatosan keresni kényszerül.',
          },
        ],
      },
      {
        title: 'VW Recruit',
        brandNote: 'kulcsrakész nemzetközi toborzás',
        amount: '$18 000',
        period: '/ hónap',
        note: 'egy 30 fős csapat számára',
        variant: 'brand',
        rows: [
          {
            title: 'Alacsonyabb átlagköltség',
            text: 'Átlagosan 400–700 $ munkavállalónként, pozíciótól és országtól függően.',
          },
          {
            title: 'Első jelöltek 7–14 napon belül',
            text: 'Gyors toborzási indulás a nemzetközi adatbázis és partnerhálózat révén.',
          },
          {
            title: 'Stabilabb csapat',
            text: 'Kevesebb újrakeresési ciklus és jobb kiszámíthatóság a vállalat számára.',
          },
        ],
      },
    ],
    cta: 'Toborzás kiszámítása',
  },
  industries: {
    eyebrow: 'Mely iparágak számára megfelelő ez a modell',
    title: 'Ezt a toborzási modellt leggyakrabban operatív munkákra használják',
    lead:
      'Csapatokat építünk a gyártás, a raktározás, az építőipar és a szolgáltatások területén, amikor a vállalatnak kiszámítható indulásra és alacsonyabb személyzeti költségekre van szüksége.',
    items: [
      {
        title: 'Raktározás és logisztika',
        text: 'Csapatok kialakítása komissiózáshoz, csomagoláshoz, árumozgatáshoz és raktári műveletekhez.',
      },
      {
        title: 'Építőipar',
        text: 'Munkavállalók toborzása építési projektekhez, szerelési, segéd- és műszaki munkákhoz.',
      },
      {
        title: 'Szállodaipar és szolgáltatások',
        text: 'Személyzet toborzása takarításhoz, konyhai munkákhoz, karbantartáshoz és napi operatív tevékenységekhez.',
      },
      {
        title: 'Gyártás',
        text: 'Munkavállalók toborzása gyártósorokra, csomagoláshoz, válogatáshoz és segédfolyamatokhoz.',
      },
    ],
  },
  calculator: {
    eyebrow: 'Kvíz kalkuláció',
    title: 'Számítsa ki vállalata toborzási költségeit',
    lead:
      'Válaszoljon néhány rövid kérdésre, és kapjon kalkulációt csapata toborzására vállalkozása számára.',
  },
  casesSection: {
    eyebrow: 'Projektjeink',
    title: 'Toborzási projektjeink',
    lead:
      'Megmutatjuk, hogyan néz ki a toborzás valós projektekben: a gyártástól és a raktáraktól kezdve a szolgáltatásokig és az operatív csapatokig.',
    cta: 'Minden projekt',
    items: [
      {
        title: 'Delta Pack',
        subtitle: 'Gyártó vállalat, Közép-Európa',
        problem: '32 dolgozó hiányát oldottuk meg a csomagolósoron egy hosszú helyi toborzási folyamat és magas fluktuáció után.',
        image: '/images/industry-manufacturing.jpg',
        alt: 'Dolgozók a gyártósoron',
      },
      {
        title: 'Nord Cargo Hub',
        subtitle: 'Raktárkomplexum és logisztika',
        problem: 'Összeállítottunk egy műszakos csapatot a komissiózáshoz és válogatáshoz, amikor a vállalat nem tudta kezelni a csúcsterheléseket.',
        image: '/images/industry-logistics.jpg',
        alt: 'Dolgozók a raktárban és a logisztikában',
      },
      {
        title: 'Urban Build Group',
        subtitle: 'Építőipari kivitelező',
        problem: 'Szerelőkkel és segédmunkásokkal erősítettük meg az építkezéseket, hogy ne csússzanak az új építési fázis kezdési határidői.',
        image: '/images/industry-construction.jpg',
        alt: 'Dolgozók az építkezésen',
      },
    ],
  },
  process: {
    eyebrow: 'Mi történik az ajánlatkérés után',
    title: 'Mik a következő lépések a megkeresése után',
    intro:
      'Pontosítjuk a dolgozók számát, a jelöltekkel szembeni elvárásokat és a csapat indulási határidejét. Ezt követően elindul a toborzás saját adatbázisunkon és a célországokban lévő partnerügynökségeinken keresztül.',
    steps: [
      {
        title: 'Pozíciók elemzése és toborzás indítása',
        text: 'Létrehozzuk a jelölt profilját, egyeztetjük a határidőket és megkezdjük a keresést a megfelelő forrásokban.',
      },
      {
        title: 'Jelöltek kiválasztása és ellenőrzése',
        text: 'A jelöltek előszűrésen, dokumentum-ellenőrzésen és egy alapinterjún esnek át. A vállalat megkapja a profilokat végső jóváhagyásra.',
      },
      {
        title: 'Dokumentumok intézése',
        text: 'Gondoskodunk a foglalkoztatáshoz és a beutazáshoz szükséges összes dokumentum előkészítéséről, és végigkövetjük a folyamatot azok elkészültéig.',
      },
      {
        title: 'Érkezés és munkakezdés',
        text: 'Koordináljuk a logisztikát és a dolgozók érkezését. Megérkezésük után a csapat megkezdi a munkát a vállalatnál.',
      },
    ],
  },
  guarantees: {
    eyebrow: 'Garanciák és biztonság',
    title: 'Mit kap a vállalat a toborzással együtt',
    items: [
      {
        title: '100% legalitás',
        text: 'Vállaljuk a felelősséget a kvótákért, munkavállalási engedélyekért és vízumfolyamatokért, hogy a vállalat védve legyen az ellenőrzésektől.',
      },
      {
        title: 'Ingyenes csere',
        text: 'Garanciális időszakot biztosítunk a jelölt cseréjére, ha a projekt az induláskor stabilitást igényel.',
      },
      {
        title: 'Teljes körű, kulcsrakész támogatás',
        text: 'Az ázsiai interjútól a repülőtéri fogadtatásig és a műszakkezdésig, beilleszkedési és kommunikációs támogatással.',
      },
    ],
  },
  reportBlock: {
    eyebrow: 'Elemző anyag',
    title: 'Miért veszít hatékonyságából a helyi toborzás?',
    lead:
      'Szerezze be a "Munkaerőpiac 2026: Nemzetközi személyzet integrációja" című zárt elemző riportot.',
    points: [
      'Költség-összehasonlító táblázat: Helyi piac vs. Külföldi munkavállalók',
      '5 jogi hiba külföldiek foglalkoztatásakor',
      'Hogyan küzdjük le a nyelvi akadályokat a gyártásban',
    ],
    cta: 'Riport letöltése PDF-ben',
  },
  reviews: {
    eyebrow: 'Bizalom',
    title: 'A piacvezetők bíznak bennünk',
    items: [
      {
        name: 'Oleksandr Koval',
        company: 'Operatív igazgató, Delta Pack',
        text: 'A VW Recruit úgy oldotta meg a gyártósori emberhiányunkat, hogy nem terhelte túl a belső HR-t. A legértékesebb az volt, hogy a csapat átvállalta a toborzást és a dokumentációs támogatást is.',
      },
      {
        name: 'Iryna Melnyk',
        company: 'HR vezető, Nord Cargo Hub',
        text: 'Nemcsak jelölteket kaptunk, hanem egy világos folyamatot a csapat elindításához. A logisztika, az engedélyek és a koordináció kézben volt tartva, így a raktár fennakadások nélkül kezdhette a szezont.',
      },
      {
        name: 'Taras Humeniuk',
        company: 'Projektmenedzser, Urban Build Group',
        text: 'Fontos volt számunkra, hogy gyorsan megerősítsük az építkezéseket olyan emberekkel, akik ténylegesen felveszik a műszakot. A VW Recruit kiszámítható határidőket és erős támogatást biztosított még a jelöltek megérkezése után is.',
      },
      {
        name: 'Maryna Savchuk',
        company: 'People Partner, East Service Group',
        text: 'A közös munka megkezdése után befejeztük a személyzeti "tüzek" kézi oltását. A VW Recruit csapata gyorsan szinkronizálta az igényeket, a toborzási országokat és az emberek munkába állásának határidejét.',
      },
      {
        name: 'Vitalij Bondar',
        company: 'Operatív menedzser, Metal Works',
        text: 'Pontosan a kiszámíthatóság szintje tetszett nekünk. A cég tudta, hogy mikor érkeznek a jelöltek, milyen dokumentumok vannak már készen, és melyik szakaszban van éppen egy-egy dolgozó.',
      },
      {
        name: 'Natalija Csernenko',
        company: 'HR igazgató, West Line Logistics',
        text: 'A logisztikában a műszakok indulásának gyorsasága kritikus. A VW Recruit révén nemcsak toborzást kaptunk, hanem normális operatív támogatást az emberek munkába állásáig.',
      },
    ],
    metrics: [
      {
        value: '7 ÉV',
        label: 'Tapasztalat a nemzetközi toborzásban',
      },
      {
        value: '100 %',
        label: 'A dokumentumok és a jogi ügyintézés ellenőrzése',
      },
      {
        value: '10 NAP',
        label: 'Az első jelöltekig a toborzási folyamatban',
      },
      {
        value: 'KULCSRAKÉSZ',
        label: 'Támogatás a kiválasztástól a műszakba állásig',
      },
    ],
  },
  media: {
    eyebrow: 'Videók és válaszok',
    title: 'Válaszok a cégtulajdonosok fő kérdéseire',
    reels: [
      {
        title: 'Mennyi ideig tart a nemzetközi toborzás elindítása?',
        text: 'Elmagyarázzuk, hogy a vállalat mikor kapja meg az első jelölteket, mi befolyásolja a határidőket, és melyik szakaszban kapcsolódik be a dokumentációs támogatás.',
        meta: 'Indítási ütemterv',
        duration: '02:14',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Hogyan ellenőrzi a vállalat a legalitást és a dokumentumokat?',
        text: 'Részletezzük, hogy milyen kvótákat, engedélyeket és vízumfolyamatokat intézünk, hogy a vállalat ne viseljen kockázatot az ellenőrzésekkel szemben.',
        meta: 'Dokumentumok és legalitás',
        duration: '03:02',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Mi történik a dolgozók projektre érkezése után?',
        text: 'Megmutatjuk, hogyan néz ki a beilleszkedés, a műszakkezdés, a koordinátorokkal való kommunikáció és a csapat támogatása az első szakaszban.',
        meta: 'Beilleszkedés és támogatás',
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
    title: 'Gyakran Ismételt Kérdések',
    items: [
      {
        q: 'Hogyan oldják meg a nyelvi akadályokat?',
        a: 'A folyamatba beépítjük a beilleszkedést, az alapképzést és a koordinátoron vagy műszakvezetőn keresztüli kommunikációt, hogy a csapat gyorsan bekapcsolódhasson a munkába.',
      },
      {
        q: 'Ki keres szállást a dolgozóknak?',
        a: 'A modell magában foglalhatja a szállás, a logisztika és az érkezés koordinálását, az együttműködés formájától és az indulási országtól függően.',
      },
      {
        q: 'Mit tegyünk, ha egy dolgozó megbetegszik vagy nem veszi fel a műszakot?',
        a: 'A projekt elején megállapodunk egy tartalék keretről, a cserére vonatkozó garanciális feltételekről és az Önökkel való gyors kommunikáció folyamatáról.',
      },
    ],
  },
  finalCta: {
    title: 'Készen áll arra, hogy megoldja a munkaerőhiányt és skálázza üzletét?',
    lead: 'Foglaljon egy ingyenes 30 perces Zoom-beszélgetést a toborzási vezetőnkkel (Head of Recruitment).',
  },
}

huContent.forms.lead.title = 'Kalkuláció kérése'
huContent.forms.lead.success = 'Köszönjük. Kérését rögzítettük, és hamarosan felvesszük Önnel a kapcsolatot a toborzással kapcsolatban.'
huContent.forms.callback.title = 'Hívás foglalása'
huContent.forms.callback.success = 'Köszönjük. Visszahívási kérelmét rögzítettük.'
huContent.forms.report.title = 'Riport lekérése'
huContent.forms.report.success = 'Köszönjük. Megkaptuk a kérését, és hamarosan elküldjük a PDF dokumentumot az e-mail címére.'
huContent.forms.contact.title = 'Ajánlatkérés küldése'
huContent.forms.contact.success = 'Köszönjük. Kérését megkaptuk, és a VW Recruit csapata hamarosan jelentkezik a következő lépésekkel.'
huContent.brand.tagline = 'Nemzetközi toborzási partner'
huContent.brand.homeAriaLabel = 'VW Recruit kezdőlap'

huContent.about = {
  meta: {
    title: 'A VW Recruit-ról',
    description:
      'Tudjon meg többet a VW Recruit-ról, a nemzetközi toborzásról, a csapat elindításának útjáról és a vállalatokkal való együttműködés megközelítéséről.',
  },
  title: 'A VW Recruit-ról',
  lead:
    'Segítünk a vállalatoknak a személyzethiány megoldásában az Ázsiából és Afrikából származó munkaerő nemzetközi toborzásával, egyértelmű útvonalat biztosítva az ajánlatkéréstől a műszakkezdésig.',
}

huContent.faqPage = {
  meta: {
    title: 'Gyakran ismételt kérdések munkáltatók számára',
    description:
      'Válaszok a munkáltatók legfontosabb kérdéseire a nemzetközi toborzással kapcsolatban: határidők, dokumentumok, csapatindulás, beilleszkedés és együttműködési forma.',
  },
  title: 'Gyakran ismételt kérdések munkáltatók számára',
  lead:
    'Összegyűjtöttük a legfontosabb kérdéseket a nemzetközi toborzással kapcsolatban: a kezdési határidőktől és dokumentumoktól a szállásig, a beilleszkedésig és a támogatás logikájáig.',
}

huContent.privacy = {
  meta: {
    title: 'Adatvédelmi irányelvek',
    description:
      'Olvassa el a VW Recruit adatvédelmi irányelveit a személyes adatok gyűjtéséről, feldolgozásáról és védelméről a weboldalon.',
  },
  title: 'Adatvédelmi irányelvek',
  sections: [
    {
      title: '1. Általános rendelkezések',
      paragraphs: [
        'Jelen Adatvédelmi irányelvek meghatározzák a VW Recruit weboldal (a továbbiakban: "Weboldal") felhasználói személyes adatainak gyűjtésére, felhasználására, tárolására és védelmére vonatkozó eljárást. Weboldalunk használatával Ön elfogadja ezen Irányelvek feltételeit. Amennyiben nem ért egyet ezekkel a feltételekkel, kérjük, hagyja abba a Weboldal használatát.',
      ],
    },
    {
      title: '2. Milyen adatokat gyűjtünk',
      paragraphs: ['A Weboldal használata során az alábbi személyes adatokat gyűjthetjük:'],
      items: [
        'Kapcsolattartási adatok: név, cégnév, e-mail cím, telefonszám. Ezeket az adatokat Ön önkéntesen adja meg az űrlapok kitöltésekor (pl. "Hívás foglalása", "Riport lekérése", "Toborzás kiszámítása").',
        'Műszaki adatok: IP-cím, böngésző típusa, eszköz típusa, oldalletöltési adatok (sütik és analitikai eszközök használatával).',
      ],
    },
    {
      title: '3. Az adatgyűjtés és -felhasználás célja',
      paragraphs: ['A gyűjtött személyes adatokat az alábbi célokra használjuk fel:'],
      items: [
        'Kapcsolatfelvétel Önnel a nemzetközi toborzási szolgáltatásokkal kapcsolatos tanácsadás nyújtása céljából.',
        'A kért anyagok (pl. PDF riportok, költségkalkulációk) elküldése.',
        'A Weboldal működésének javítása és marketingkampányaink hatékonyságának elemzése.',
        'Fontos értesítések és kereskedelmi ajánlatok küldése (az Ön hozzájárulásával).',
      ],
    },
    {
      title: '4. Adatok továbbítása harmadik feleknek',
      paragraphs: [
        'Személyes adatait az Ön hozzájárulása nélkül nem értékesítjük, nem cseréljük el és nem továbbítjuk harmadik feleknek, kivéve a törvényben meghatározott eseteket. Az adatokhoz hozzáférhetnek megbízható alvállalkozóink (pl. tárhelyszolgáltatók, e-mail marketing szolgáltatások), akik kötelesek azokat bizalmasan kezelni.',
      ],
    },
    {
      title: '5. Adatvédelem és tárolás',
      paragraphs: [
        'Megfelelő technikai és szervezési intézkedéseket teszünk annak érdekében, hogy megvédjük adatait a jogosulatlan hozzáféréstől, megváltoztatástól, nyilvánosságra hozataltól vagy megsemmisüléstől. Az adatokat csak a jelen Irányelvekben meghatározott célok teljesítéséhez, illetve a jogszabályi előírásoknak megfelelően szükséges ideig tároljuk.',
      ],
    },
    {
      title: '6. Felhasználói jogok',
      paragraphs: ['Önnek joga van:'],
      items: [
        'Hozzáféréshez az általunk tárolt személyes adataihoz.',
        'Adatai pontatlanságainak helyesbítését kérni.',
        'Adatai törlését kérni ("az elfeledtetéshez való jog").',
        'Az adatkezeléshez adott hozzájárulását bármikor visszavonni.',
      ],
    },
    {
      title: '7. Sütik (Cookies) használata',
      paragraphs: [
        'Weboldalunk sütiket használ az oldalak megfelelő működésének, a forgalomelemzésnek és a felhasználói élmény javításának biztosítása érdekében. A sütik mentését a böngészője beállításaiban konfigurálhatja vagy letilthatja.',
      ],
    },
    {
      title: '8. Az Adatvédelmi irányelvek módosításai',
      paragraphs: [
        'Fenntartjuk a jogot a jelen Irányelvek frissítésére. A módosítások az ezen az oldalon történő közzétételük pillanatában lépnek hatályba.',
      ],
    },
    {
      title: '9. Kapcsolat',
      paragraphs: [
        'Ha bármilyen kérdése van a jelen Adatvédelmi irányelvekkel kapcsolatban, vagy gyakorolni szeretné adatvédelmi jogait, kérjük, vegye fel velünk a kapcsolatot a Weboldalon található kapcsolatfelvételi űrlapon vagy e-mailben: [Az Ön E-mailje, pl.: hello@vwrecruit.com].',
      ],
    },
  ],
}

huContent.terms = {
  meta: {
    title: 'Felhasználási feltételek',
    description:
      'Olvassa el a VW Recruit weboldal felhasználási feltételeit, az űrlapokon keresztüli interakció szabályait és a weboldalon történő információszolgáltatás alapelveit.',
  },
  title: 'Felhasználási feltételek',
  sections: [
    {
      title: '1. Általános rendelkezések',
      paragraphs: [
        'Jelen Felhasználási feltételek (a továbbiakban: "Feltételek") szabályozzák a VW Recruit weboldalhoz (a továbbiakban: "Weboldal") való hozzáférést és annak használatát. A Weboldal megnyitásával és böngészésével Ön teljes mértékben elfogadja a jelen Feltételeket.',
      ],
    },
    {
      title: '2. A vállalat szolgáltatásai',
      paragraphs: [
        'A Weboldal kizárólag tájékoztató jellegű, és azzal a céllal hoztuk létre, hogy megismertesse a felhasználókat a nemzetközi toborzási szolgáltatásokkal, valamint lehetőséget biztosítson tanácsadásra, kalkulációkra vagy elemző anyagokra vonatkozó kérések leadására. A weboldalon található űrlap kitöltése nem jelenti szolgáltatási szerződés megkötését; a szerződéses kapcsolatok egyéni megállapodás alapján, külön kerülnek formalizálásra.',
      ],
    },
    {
      title: '3. A felhasználó kötelezettségei',
      paragraphs: ['A felhasználó vállalja, hogy:'],
      items: [
        'A Weboldalon lévő űrlapok kitöltésekor valós adatokat (név, céges elérhetőségek) ad meg.',
        'Nem használja a Weboldalt semmilyen illegális, csalárd tevékenységre vagy rosszindulatú szoftverek terjesztésére.',
        'Nem kísérli meg a jogosulatlan hozzáférést a Weboldal adminisztrációs rendszereihez.',
      ],
    },
    {
      title: '4. Szellemi tulajdon',
      paragraphs: [
        'A Weboldalon elhelyezett minden anyag, beleértve a szövegeket (szolgáltatásleírások, esettanulmányok, riportok), képeket, logókat ("VW Recruit"), grafikákat és a dizájn felépítését, a vállalat tulajdonát képezi, vagy engedély alapján kerül felhasználásra. A Weboldal anyagainak bármilyen másolása, terjesztése vagy kereskedelmi célú felhasználása a szerzői jog tulajdonosának előzetes írásbeli engedélye nélkül tilos.',
      ],
    },
    {
      title: '5. Jogi nyilatkozat',
      paragraphs: [
        'A Weboldalon található információk "ahogy vannak" alapon kerülnek biztosításra. Igyekszünk az adatokat naprakészen tartani (pl. határidőkkel, költségekkel vagy cseregaranciákkal kapcsolatos információk), a pontos együttműködési feltételeket azonban kizárólag az egyedi szerződés rögzíti.',
        'A vállalat nem vállal felelősséget a Weboldal működésében fellépő esetleges technikai hibákért vagy a hozzáférés átmeneti lehetetlenségéért.',
        'A Weboldal harmadik felek erőforrásaira mutató hivatkozásokat tartalmazhat. Nem vállalunk felelősséget ezen külső források tartalmáért és adatvédelmi irányelveiért.',
      ],
    },
    {
      title: '6. A Felhasználási feltételek módosításai',
      paragraphs: [
        'A Weboldal adminisztrációja fenntartja a jogot, hogy a jelen Feltételeket bármikor módosítsa a felhasználók előzetes személyes értesítése nélkül. A Feltételek frissített változata az ezen az oldalon történő közzétételük pillanatától hatályos. Javasoljuk a szakasz rendszeres ellenőrzését.',
      ],
    },
    {
      title: '7. Vitarendezés',
      paragraphs: [
        'A Weboldal használatával kapcsolatban felmerülő minden vitát tárgyalásos úton kell rendezni. Amennyiben nem jön létre megállapodás, a vitát a hatályos jogszabályoknak megfelelően kell elbírálni [adja meg az országot vagy a joghatóságot].',
      ],
    },
    {
      title: '8. Visszajelzés',
      paragraphs: [
        'A Weboldal működésével vagy az együttműködési feltételekkel kapcsolatos minden kérdésével kérjük, forduljon hozzánk a "Kapcsolat" oldalon található űrlapon keresztül vagy az alábbi címen: [Az Ön E-mailje / Telefonszáma].',
      ],
    },
  ],
}

huContent.contacts = {
  meta: {
    title: 'VW Recruit Kapcsolat',
    description:
      'Lépjen kapcsolatba a VW Recruit céggel a nemzetközi toborzással, a csapat elindításával, a dokumentumokkal és az együttműködési formával kapcsolatban.',
  },
  title: 'Kapcsolat olyan cégeknek, amelyeknek gyorsan meg kell oldaniuk a munkaerőhiányt',
  summary: [
    {
      label: 'Válasz',
      value: 'munkanapon belül',
    },
    {
      label: 'Formátum',
      value: 'telefon, Zoom vagy e-mail',
    },
    {
      label: 'Fókusz',
      value: 'munkáltatók és operatív csapatok',
    },
  ],
  channelsTitle: 'Hogyan a legkényelmesebb elkezdeni',
  channelsLead:
    'Válassza ki a jelenleg leginkább megfelelő formátumot. Ha még nincs végleges specifikációja (brief), kezdhetjük egy rövid beszélgetéssel, a részletekre pedig később térünk ki.',
  channels: [
    {
      icon: 'brief',
      label: 'Toborzási kérelem',
      title: 'Hagyjon ajánlatkérést igényeinek megfelelően',
      text: 'A legkényelmesebb opció, ha már ismeri a szerepköröket, a hozzávetőleges létszámot vagy a csapat indulásának kívánt dátumát.',
      actionLabel: 'Űrlap megnyitása',
      actionType: 'anchor',
      actionTarget: '#contact-form',
    },
    {
      icon: 'call',
      label: 'Gyors szinkronizáció',
      title: 'Foglaljon egy rövid hívást a csapattal',
      text: 'Akkor megfelelő, ha gyorsan meg kell értenie, hogy a nemzetközi toborzás illik-e az Ön esetéhez, és mik lesznek a következő lépések.',
      actionLabel: 'Hívás foglalása',
      actionType: 'modal',
      actionTarget: 'callback',
    },
    {
      icon: 'documents',
      label: 'Indulási útvonal',
      title: 'Pontosítsa a dokumentumokat, határidőket és az indulás logikáját',
      text: 'Elmagyarázzuk a folyamatot a jelöltek kiválasztásától és jóváhagyásától a dokumentumokig, a logisztikáig, az érkezésig és a műszakba állásig.',
    },
  ],
  checklistTitle: 'Mit érdemes előkészíteni a kapcsolatfelvétel előtt',
  checklistLead:
    'Tökéletesen kidolgozott brief nem szükséges. Még az alapinformációk is segítenek gyorsabban eljutni az érdemi beszélgetéshez.',
  checklist: [
    'Milyen konkrét szerepköröket vagy részlegeket kell megerősíteni',
    'A dolgozók hozzávetőleges száma és a kívánt kezdési időpont',
    'Az ország és város, ahol a csapat dolgozni fog',
    'Csak toborzásra van szükség, vagy teljes körű támogatásra a kezdésig',
  ],
  supportTitle: 'Mit tud a csapat már az első kapcsolatfelvételkor tisztázni',
  supportLead:
    'Az első kapcsolatfelvétel nem formaság, hanem a bizonytalanságok eloszlatását szolgálja, és megmutatja, mennyire illeszkedik a modell valójában az Ön igényeihez.',
  support: [
    'Milyen gyorsan lehet elindítani a jelöltek áramlását',
    'Mely célországok a legalkalmasabbak az adott szerepkörökhöz',
    'Hogyan szervezik a dokumentumokat, engedélyeket és az érkezés koordinálását',
    'Milyen formátumú lesz a kommunikáció és a csapat indulása a jóváhagyás után',
  ],
  form: {
    title: 'Hagyjon üzenetet, és a következő lépéssel jelentkezünk',
    lead:
      'Hagyja meg elérhetőségeit, és a VW Recruit csapata javaslatot tesz a legpraktikusabb indulási formátumra, kifejezetten az Ön helyzetére szabva.',
    note: 'Leginkább azoknak a munkáltatóknak megfelelő, akiknek toborzásra, cserére vagy egy csapat elindítására van szükségük.',
  },
}

huContent.thankYouReport = {
  meta: {
    title: 'Köszönjük a riportigénylést',
    description:
      'Riportigénylését rögzítettük. A VW Recruit csapata hamarosan felveszi Önnel a kapcsolatot és elküldi az anyagot.',
  },
  title: 'Köszönjük. A riportigénylését megkaptuk',
  lead:
    'Rögzítettük kérését, az anyagot hamarosan elküldjük, egyúttal javaslatot teszünk egy gyakorlatias következő lépésre a toborzási helyzetével kapcsolatban.',
  ctaLabel: 'Vissza a kezdőlapra',
  secondaryCtaLabel: 'Kapcsolat megnyitása',
}

huContent.ui.modalClose = 'Modális ablak bezárása'
huContent.ui.leadCapture = 'Lead-ek gyűjtése'
huContent.ui.video = 'Videó'
huContent.ui.videoPlay = 'Videó lejátszása'
huContent.ui.openMenu = 'Menü megnyitása'
huContent.ui.primaryNav = 'Fő navigáció'
huContent.ui.languagePickerTitle = 'Válasszon nyelvet'
huContent.ui.fieldName = 'Név'
huContent.ui.fieldCompany = 'Vállalat'
huContent.ui.fieldEmail = 'E-mail'
huContent.ui.fieldPhone = 'Telefon'
huContent.ui.sendRequest = 'Ajánlatkérés küldése'
huContent.ui.requestCallback = 'Hívás foglalása'
huContent.ui.getReport = 'Riport lekérése'
huContent.ui.bookCall = 'Hívás foglalása'
huContent.ui.quizEyebrow = 'Kvíz'
huContent.ui.quizContinue = 'Tovább'
huContent.ui.quizBack = 'Vissza'
huContent.ui.quizSubmit = 'Küldés'
huContent.ui.quizReady = 'Kész'
huContent.ui.quizValidationError = 'Kérjük, töltse ki az aktuális lépést.'
huContent.ui.quizSubmitError = 'Az űrlap elküldése sikertelen. Kérjük, próbálja újra.'
huContent.ui.processEyebrow = 'Folyamat'
huContent.ui.caseStudy = 'Esettanulmány'
huContent.ui.caseViewLabel = 'Projekt megtekintése'
huContent.ui.leadCaptureEyebrow = 'Lead-ek gyűjtése'
huContent.ui.faqEyebrow = 'GYIK'
huContent.ui.aboutEyebrow = 'Rólunk'
huContent.ui.contactsEyebrow = 'Kapcsolat'
huContent.ui.reportEyebrow = 'Riport'
huContent.ui.privacyEyebrow = 'Adatvédelmi irányelvek'
huContent.ui.termsEyebrow = 'Felhasználási feltételek'
huContent.ui.thankYouEyebrow = 'Köszönjük'
huContent.ui.finalCtaEyebrow = 'Végső CTA'
huContent.ui.downloadReport = 'Riport letöltése'
huContent.ui.openContactsPage = 'Kapcsolat oldal megnyitása'
huContent.ui.projectsExamples = 'Példaprojektek'
huContent.ui.reelPlaceholder = 'Hely a reelnek vagy videónak a felugró ablakban a források csatlakoztatása után.'
huContent.ui.industriesLead =
  'A vállalatok ezt a modellt leggyakrabban operatív feladatokra használják a gyártás, a raktározás, az építőipar és a szolgáltatási szektor területén.'
huContent.ui.legalPlaceholder = 'Itt lesz a jogi szöveg. Indítás előtt cserélje ki a jóváhagyott végleges verzióra.'
huContent.ui.footerDescription =
  'Kulcsrakész munkaerő-toborzás Ázsiából és Afrikából: a jelöltek és dokumentumok felkutatásától az érkezésig, a beilleszkedésig és a csapat műszakkezdéséig.'
huContent.ui.footerCorePages = 'Fő oldalak'
huContent.ui.footerLegal = 'Jogi információk'
huContent.ui.privacyPolicy = 'Adatvédelmi irányelvek'
huContent.ui.termsAndConditions = 'Felhasználási feltételek'
huContent.ui.formRequiredError = 'Kérjük, töltse ki az űrlap kötelező mezőit.'
huContent.ui.formSubmittingButton = 'Küldés...'
huContent.ui.formSubmittingStatus = 'Űrlap küldése...'
huContent.ui.formSubmitError = 'Az űrlap elküldése sikertelen. Kérjük, próbálja újra.'
huContent.ui.industryVisualLogisticsAlt = 'Dolgozók a raktárban és a logisztikában'
huContent.ui.industryVisualConstructionAlt = 'Dolgozók az építkezésen'
huContent.ui.industryVisualHospitalityAlt = 'Személyzet a szálloda- és szolgáltatóiparban'
huContent.ui.industryVisualManufacturingAlt = 'Dolgozók a gyártásban'
huContent.ui.industrySlidePlaceholder =
  'Ehhez a vertikumhoz tartozó külön vizuális esettanulmány skálázható SEO oldalakra, kvízekre és személyre szabott CTA-kra.'
huContent.ui.comparisonCardCta = 'Toborzás kiszámítása'
huContent.ui.comparisonOtherMark = 'MÁ'
huContent.ui.guaranteesLegalDelta = 'Kvóták, engedélyek, vízumok'
huContent.ui.guaranteesReplacementMetric = '0 $'
huContent.ui.guaranteesReplacementDelta = 'Gyors csere garanciálisan'
huContent.ui.guaranteesSupportMetric = 'Kulcsrakész'
huContent.ui.guaranteesSupportDelta = 'Kiválasztástól a műszakig'
huContent.ui.guaranteesFallbackDelta = 'VW Recruit előny'
huContent.ui.guaranteesReplacementLabel = 'Indulási garancia'
huContent.ui.guaranteesReplacementUnit = '$'
huContent.ui.guaranteesReplacementWarrantyDays = 30
huContent.ui.guaranteesReplacementWarrantyLabel = 'napos garancia'
huContent.ui.guaranteesReplacementReplyHours = 48
huContent.ui.guaranteesReplacementReplyLabel = 'órás válaszidő'
huContent.ui.guaranteesSupportBadge = 'Egy csapat a teljes folyamatra'
huContent.ui.guaranteesCandidatesDays = 10
huContent.ui.guaranteesCandidatesDaysLabel = 'nap a jelöltekig'
huContent.ui.guaranteesSupportPercentLabel = '% támogatás'
huContent.ui.guaranteesOneTeamCount = 1
huContent.ui.guaranteesOneTeamLabel = 'csapat'
huContent.ui.guaranteeTimelineStepOne = 'Kiválasztás'
huContent.ui.guaranteeTimelineStepTwo = 'Dokumentumok'
huContent.ui.guaranteeTimelineStepThree = 'Logisztika'
huContent.ui.guaranteeTimelineStepFour = 'Érkezés'
huContent.ui.guaranteeTimelineStepFive = 'Műszak'
huContent.ui.guaranteeSupportStepOne = 'Kiválasztás'
huContent.ui.guaranteeSupportStepTwo = 'Érkezés'
huContent.ui.guaranteeSupportNote = 'Műszakkezdés'
huContent.ui.guaranteeChecklistQuota = 'Kvóták'
huContent.ui.guaranteeChecklistPermit = 'Engedélyek'
huContent.ui.guaranteeChecklistVisa = 'Vízumok'
huContent.ui.reviewFallbackValue = '7 ÉV'
huContent.ui.reviewLabelPrefix = '7 év '
huContent.ui.servicesShortRequestEyebrow = 'Rövid megkeresés'
huContent.ui.servicesHeroGhostCta = 'A szolgáltatás feltételeinek megtekintése'
huContent.ui.servicesHeroPanelTitle =
  'Toborzás, dokumentumok, logisztika és csapatindulás egy folyamatban'
huContent.ui.servicesHeroPanelText =
  'A teljes útvonal úgy van felépítve, hogy a vállalat lássa a kiszámítható indulási szakaszokat, a jelölt pedig megértse, mi történik minden lépésben.'
huContent.ui.servicesPillarsEyebrow = 'Mit fedünk le'
huContent.ui.servicesPillarsTitle =
  'A szolgáltatás nem "önéletrajz-keresésre" épül, hanem egy teljes útvonal az emberek munkába állításához'
huContent.ui.servicesOfferEyebrow = 'Mit kap mindkét fél'
huContent.ui.servicesOfferTitle =
  'Egy modell, amelyben a cég ellenőrzött eredményt kap, a jelölt pedig átlátható folyamatot lát'
huContent.ui.servicesOfferVisualLabel = 'VW Recruit / útvonal'
huContent.ui.servicesOfferVisualPrimary = 'A vállalatoknak'
huContent.ui.servicesOfferVisualSecondary = 'A jelölteknek'
huContent.ui.servicesBeamEyebrow = 'Folyamattérkép'
huContent.ui.servicesRouteEyebrow = 'Hogyan működik az együttműködés'
huContent.ui.servicesRouteTitle = 'Átlátható útvonal a kéréstől a dolgozók műszakba állásáig'
huContent.ui.servicesRouteLead =
  'A vállalat egyértelmű indulási utat lát, kiszámítható szakaszokkal a kéréstől a dolgozók munkába állásáig.'
huContent.ui.servicesProofEyebrow = 'Miért adja el magát'
huContent.ui.servicesProofTitle =
  'Nem csak toborzás, hanem egy irányított szolgáltatás egyértelmű eredménnyel minden szakaszban'
huContent.ui.servicesFitEyebrow = 'Hol működik a legjobban'
huContent.ui.servicesFitTitle =
  'Szerepkörök és rések, ahol a nemzetközi toborzás maximális operatív hatást biztosít'
huContent.ui.servicesFitLead =
  'Minden kártya megmutatja, hol adja a modell a leggyorsabb operatív eredményt, a legtisztább csapatindulást és a legnagyobb folyamatstabilitást.'
huContent.ui.servicesFitScoreLabel = 'megfelelőségi szint'
huContent.ui.servicesFitMetricOne = 'Indulási sebesség'
huContent.ui.servicesFitMetricTwo = 'Stabilitás'
huContent.ui.servicesFitMetricThree = 'Átláthatóság'
huContent.ui.servicesFitCardTextOne =
  'A legerősebben ott működik, ahol fontosak az ismétlődő műszakok, a jelenléti fegyelem és a gyors, indulási kudarcok nélküli skálázás.'
huContent.ui.servicesFitCardTextTwo =
  'Jól alkalmazható szezonális csúcsok, volumenbővülés és olyan műveletek esetén, ahol a vállalatnak kritikusan szüksége van az emberek ritmikus bevonására.'
huContent.ui.servicesFitCardTextThree =
  'Megfelelő olyan szigorú határidős projektekhez, ahol a toborzást, a dokumentumokat és az érkezést káosz nélkül kell kombinálni.'
huContent.ui.servicesFitCardTextFour =
  'Jó eredményeket mutat szolgáltató csapatoknál, ahol a világos útvonal, a gyors beilleszkedés és az indulási stabilitás kritikus fontosságú.'
huContent.ui.servicesLeadEyebrow = 'Párbeszéd indítása'
huContent.ui.servicesLeadText =
  'A munkáltatók számára ez egy gyors módja annak, hogy megértsék, hogyan indítsák el a toborzást. A jelöltek számára lehetőség arra, hogy őszinte magyarázatot kapjanak a foglalkoztatási útvonalról és a dokumentumokról.'
huContent.ui.servicesSegmentBadgeBusiness = 'B2B'
huContent.ui.servicesSegmentBadgeCandidate = 'B2C'
huContent.ui.industriesSectionTitle = 'MELY IPARÁGAK SZÁMÁRA MEGFELELŐ EZ A TOBORZÁSI MODELL'
huContent.ui.industrySliderPrev = 'Előző dia'
huContent.ui.industrySliderNext = 'Következő dia'
huContent.ui.quizSectionLead =
  'Egy rövid, lépésről-lépésre haladó kvíz, amely segít az igények gyors összegyűjtésében és egységes formátumban történő továbbításában.'
huContent.ui.casesSectionLead =
  'Példákat mutatunk a toborzás elindítására a gyártásban, a logisztikában, a szállodákban és más operatív csapatoknál.'
huContent.ui.caseSliderPrev = 'Előző projekt'
huContent.ui.caseSliderNext = 'Következő projekt'
huContent.ui.casesTimelineSteps = ['Briefing', 'Keresés', 'Jóváhagyás', 'Dokumentumok', 'Érkezés']
huContent.ui.industriesFitSummary =
  'Jelek, amelyek általában azt jelentik, hogy a helyi toborzás már nem tart lépést az Ön műveleteinek tempójával, és rendszerszintűbb csapatépítési modellre van szükség.'
huContent.ui.caseSubtitlePlaceholder = 'A projekt rövid leírása'
huContent.ui.caseProblemPlaceholder =
  'Külön SEO-oldal az esettanulmányhoz eredményekkel, határidőkkel és célművelettel.'
huContent.ui.processStepLabel = 'Lépés'
huContent.ui.reportPanelTitle = 'Kérje az anyagot e-mailben'
huContent.ui.reportPanelText =
  'Adja meg elérhetőségét, és mi elküldjük a hasznos anyagot a nemzetközi toborzás és a személyzeti költségek optimalizálása témájában.'
huContent.ui.reportPanelKicker = 'VW Recruit / Analitika'
huContent.ui.reportPanelReportTitle = 'Munkaerőpiac 2026'
huContent.ui.reportPanelReportText =
  'A nemzetközi személyzet integrációja a munkaerőhiánnyal küzdő vállalatok számára'
huContent.ui.reportPanelGuide = 'PDF'
huContent.ui.videoInsightLabel = 'Videó insight'
huContent.ui.mediaDefaultDuration = '02:00'
huContent.ui.reviewsPrev = 'Előző vélemény'
huContent.ui.reviewsNext = 'Következő vélemény'
huContent.ui.genericPageCardOne = 'Az alapoldal felkészítve a lokalizált tartalomra'
huContent.ui.genericPageCardTwo = 'A metaadatok és a struktúra készen állnak a további kitöltésre'
huContent.ui.genericPageCardThree = 'Minden útvonal külön generálódik minden nyelvhez'

huContent.quiz.title = 'Toborzási kalkuláció'
huContent.quiz.progressLabel = 'Lépés'
huContent.quiz.completionTitle = 'A kérése készen áll'
huContent.quiz.completionLead =
  'Megkaptuk a válaszait. A következő lépés, hogy felvesszük Önnel a kapcsolatot, és előkészítünk egy konzultációt vagy előkalkulációt.'
huContent.quiz.steps = [
  {
    id: 'industry',
    label: 'Melyik iparágba van szüksége dolgozókra?',
    type: 'options',
    options: ['Gyártás', 'Építőipar', 'Raktározás és logisztika', 'Szállodaipar és szolgáltatások', 'Egyéb'],
  },
  {
    id: 'teamSize',
    label: 'Hány dolgozóra van szüksége?',
    type: 'options',
    options: ['1–10', '11–30', '31–50', '50+'],
  },
  {
    id: 'timeline',
    label: 'Mikor kellene a csapatnak munkába állnia?',
    type: 'options',
    options: ['Sürgős', '2–4 héten belül', '1–2 hónapon belül', 'Egyelőre vizsgálom a lehetőségeket'],
  },
  {
    id: 'location',
    label: 'Hol található az Ön vállalkozása?',
    type: 'text',
    fields: [
      { name: 'country', label: 'Ország', required: true },
      { name: 'city', label: 'Város', required: false },
    ],
  },
  {
    id: 'problem',
    label: 'Jelenleg mi a legnagyobb toborzási probléma?',
    type: 'options',
    options: ['Magas bérköltségek', 'Személyzethiány', 'Fluktuáció', 'Szezonális csúcsok', 'A gyártás skálázása', 'Egyéb'],
  },
  {
    id: 'contact',
    label: 'Hová küldhetjük a kalkulációt?',
    type: 'text',
    fields: [
      { name: 'name', label: 'Név', required: true },
      { name: 'company', label: 'Vállalat', required: true },
      { name: 'phone', label: 'Telefon', required: true },
      { name: 'email', label: 'E-mail', required: true },
    ],
  },
]

huContent.services = {
  title: 'Kulcsrakész nemzetközi toborzási szolgáltatások',
  lead:
    'Megoldjuk a vállalatok <strong>operatív személyzethiányát</strong>, és a jelölteket a <strong>legális munkába állásig</strong> vezetjük: a kereséstől és kiválasztástól kezdve a dokumentumokon, érkezésen át a műszakkezdésig.',
  intro: '',
  cta: 'Toborzás megbeszélése a cég számára',
  metrics: [
    { value: '10', suffix: ' nap', label: 'az első jelöltekig a kiválasztásban' },
    { value: '100', suffix: ' %', label: 'dokumentációs és jogi támogatás' },
    { value: '4', suffix: ' szakasz', label: 'az ajánlatkéréstől a csapat indulásáig' },
  ],
  heroBadges: [
    { value: '10', suffix: ' nap', label: 'az első jelöltekig' },
    { value: '100', suffix: ' %', label: 'jogi támogatás' },
    { value: 'Kulcsrakész', suffix: '', label: 'a kereséstől a műszakkezdésig' },
    { value: '1 csapat', suffix: '', label: 'toborzás, dokumentumok, logisztika' },
  ],
  segments: [
    {
      variant: 'business',
      label: 'Vállalatoknak',
      badge: 'B2B',
      title: 'Azon cégek számára, amelyeknek stabil csapatra van szükségük személyzeti kiesések nélkül',
      text: 'Ideális olyan cégeknek, amelyek nem tudják betölteni az operatív pozíciókat helyi toborzással, növekednek, szezonális csúcsokkal küzdenek, vagy belefáradtak a magas fluktuációba.',
      cta: 'Toborzási terv igénylése',
    },
    {
      variant: 'candidate',
      label: 'Jelölteknek',
      badge: 'B2C',
      title: 'Külföldön legálisan munkát vállalni kívánó jelölteknek',
      text: 'Egyszerűen elmagyarázzuk a lépéseket: előszűrés, dokumentumok, érkezés, beilleszkedés és munkakezdés. Nincsenek homályos feltételek vagy ködös ígéretek.',
      cta: 'Jelentkezés benyújtása',
    },
  ],
  pillars: [
    {
      title: 'Jelöltek felkutatása és kiválasztása',
      text: 'Létrehozzuk a pozíció profilját, elindítjuk a keresést az adatbázisunkon és a partnerhálózatunkon keresztül, kiszűrjük a gyenge jelölteket, és csak a megfelelő embereket kínáljuk jóváhagyásra.',
    },
    {
      title: 'Dokumentumok, engedélyek és legalitás',
      text: 'Intézzük a kvótákat, engedélyeket, vízum- és migrációs folyamatokat, hogy a munkáltató ne fulladjon bele a bürokráciába, a jelölt pedig megértse, melyik szakaszban van éppen.',
    },
    {
      title: 'Érkezés, beilleszkedés és műszakkezdés',
      text: 'Koordináljuk a logisztikát, az érkezést, a munkakezdést és a beilleszkedés első szakaszát, hogy a dolgozók ténylegesen a megbeszélt időben kezdjenek a helyszínen.',
    },
  ],
  timeline: [
    {
      title: 'Briefing és a modell kalkulációja',
      text: 'Pontosítjuk a létszámot, a szerepköröket, az ütemtervet, a célországot és a projekt korlátait, majd elkészítünk egy reális toborzási forgatókönyvet.',
    },
    {
      title: 'Kiválasztás és jelöltek jóváhagyása',
      text: 'Elindítjuk a keresést, elvégezzük az előszűrést (screening), ellenőrizzük a dokumentumokat, és lehetőséget adunk Önöknek a jelöltek végső jóváhagyására.',
    },
    {
      title: 'Ügyintézés és érkezés megszervezése',
      text: 'A jóváhagyás után megkezdjük a dokumentumok előkészítését, az engedélyek koordinálását, a logisztikát és a munkavállalók indulásra való felkészítését.',
    },
    {
      title: 'Munkába állás és támogatás',
      text: 'Az érkezés után koordináljuk a műszakkezdést, a beilleszkedést és a kommunikációt a vállalat, a dolgozók és az objektum felelősei között.',
    },
  ],
  deliverables: [
    'A pozíció profilja és a keresési stratégia az adott szerepkörhöz',
    'A kiválasztott, jóváhagyásra kész jelöltek csomagja',
    'A dokumentációs ügyintézés minden szakaszának ellenőrzése',
    'A dolgozók érkezésének és a csapat elindításának ütemterve',
    'A csapat támogatása a munkakezdéskor és a kezdeti beilleszkedési időszakban',
    'Cseregarancia feltételei a projekt formátumától függően',
  ],
  offerCards: [
    {
      title: 'Toborzás munkáltatóknak',
      text: 'Gyors toborzási indulás üres pozíciókra, szezonális csúcsokra vagy a termelés skálázására.',
    },
    {
      title: 'Legális út a jelöltek számára',
      text: 'Átlátható kiválasztási folyamat, dokumentumok előkészítése és támogatás egészen a tényleges munkába állásig.',
    },
    {
      title: 'Támogatás az indulás után',
      text: 'Beilleszkedés, kommunikáció, cserék és a folyamatok koordinálása a csapat munkájának első szakaszában.',
    },
  ],
  beam: {
    title: 'Hogyan halad a toborzási folyamat az ajánlatkéréstől a dolgozók műszakba állásáig',
    lead:
      'Egy vizuális folyamattérkép, amely bemutatja, hogyan fonódik össze a briefing, a kiválasztás, a jóváhagyás, a dokumentáció és a csapat elindítása egyetlen, irányított folyamatba.',
    centerLabel: 'Feldolgozás',
    outputLabel: 'Műszakba állás',
    steps: ['Briefing', 'Keresés', 'Jóváhagyás', 'Dokumentumok', 'Érkezés'],
  },
  roles: [
    'Dolgozók a gyártósorokra, csomagoláshoz, válogatáshoz és a segédfolyamatokhoz',
    'Raktári csapatok komissiózáshoz, válogatáshoz, anyagmozgatáshoz és logisztikai műveletekhez',
    'Építőipari és szerelőmunkások munkaerőhiányos létesítményekbe',
    'Személyzet szállodákba, konyhákba, szobatakarításhoz és szolgáltatási munkákhoz',
  ],
  promise: {
    title: 'Egyetlen csapat felel a jelölt teljes útvonaláért',
    text: 'A cég számára ez kevesebb káoszt jelent a toborzás, a dokumentumok, a logisztika és az emberek munkába állítása között. Ahelyett, hogy alvállalkozók hálózatát kéne kezelnie, egyetlen világos interakciós modellt kap.',
  },
  trust: [
    'A munkáltató egy kiszámítható utat lát a csapat elindításáig',
    'A jelölt legális és érthető munkavállalási útvonalat kap',
    'Egyetlen csapat koordinálja a toborzást, a dokumentumokat, a logisztikát és a beilleszkedést',
  ],
  form: {
    title: 'Szerezzen be toborzási tervet vagy munkavállalási tanácsadást',
    lead: 'Töltsön ki egy rövid űrlapot. A munkáltató számára előkészítjük a következő lépést a toborzás elindításához. A jelöltnek pedig elmagyarázzuk az utat és az indulási követelményeket.',
    button: 'Konzultáció igénylése',
    note: 'Általában egy munkanapon belül válaszolunk.',
  },
}

huContent.cases = {
  title: 'Nemzetközi toborzási projektek mérhető operatív eredménnyel',
  lead:
    'Valós forgatókönyvek, ahol a vállalat megszünteti a személyzethiányt, felgyorsítja a csapat indítását, és kiszámítható utat kap az emberek munkába állításához.',
  description:
    'Esettanulmányok a nemzetközi személyzettoborzásból: a kihívás, az indulási modell, a határidők és a vállalat számára hozott eredmény.',
  eyebrow: 'Esettanulmányok',
  intro:
    'Ez az oldal nem csupán "sikersztoriknak" készült, hanem bizonyítéknak, hogy a modell valós működési körülmények között is megállja a helyét: amikor hiányoznak az emberek, csúsznak a határidők, vagy beköszönt a szezonális csúcs.',
  stats: [
    { value: '3', label: 'részletes indulási esettanulmány' },
    { value: '4', label: 'kulcsfontosságú üzleti terület' },
    { value: '96', suffix: ' %', label: 'sikeres műszakba állás' },
  ],
  featured: [
    {
      title: 'Delta Pack',
      category: 'Gyártás',
      colSpan: 2,
      subtitle: 'Gyártó vállalat, Közép-Európa',
      problem:
        'A vállalat hosszú ideig képtelen volt stabilan lefedni a csomagolósori műszakokat az elhúzódó helyi toborzás és az állandó fluktuáció miatt.',
      solution:
        'Az indulási modell egyetlen folyamatban egyesítette a jelöltkeresést, a dokumentációs támogatást, a logisztikát és a csapatkezdés koordinációját.',
      result:
        'A cég egyértelmű tervet kapott a műszakok feltöltésére, lerövidült a jelöltek jóváhagyási ciklusa, és nagyobb ellenőrzést kapott a projektindítás felett.',
      timeline: 'Első jelöltek 7-14 napon belül',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Dolgozók a gyártósoron',
      metrics: [
        { label: 'Igény', value: '32 dolgozó' },
        { label: 'Formátum', value: 'Csomagolósor' },
        { label: 'Fókusz', value: 'Stabil műszakindítás' },
      ],
    },
    {
      title: 'Nord Cargo Hub',
      category: 'Logisztika',
      colSpan: 1,
      subtitle: 'Raktárkomplexum és logisztika',
      problem:
        'A raktár nem tudta fedezni a csúcsterheléseket embertartalék és a dolgozók érkezésének kiszámítható ütemterve nélkül.',
      solution:
        'Az eset fókuszában a shortlist elkészítésének sebessége, a dokumentumok ellenőrzése és az emberek műszakos rendbe való felkészítése állt.',
      result:
        'Az operatív csapat egy kiszámíthatóbb idővonalat kapott az onboarding és a műszakvezetők felkészítéséhez, hogy káosz nélkül vészeljék át a szezonális csúcsokat.',
      timeline: 'Gyors indulás a szezonra',
      image: '/images/industry-logistics.jpg',
      alt: 'Dolgozók a raktárban és a logisztikában',
      metrics: [
        { label: 'Igény', value: 'Válogató csapat' },
        { label: 'Formátum', value: 'Raktári műveletek' },
        { label: 'Fókusz', value: 'Felkészültség a csúcsra' },
      ],
    },
    {
      title: 'Urban Build Group',
      category: 'Építőipar',
      colSpan: 3,
      subtitle: 'Építőipari kivitelező',
      problem:
        'A kivitelezőnek gyorsan meg kellett erősítenie az aktív építkezéseket anélkül, hogy kitolná a határidőket, és elkerülve a brigádok összeállításának csúszását.',
      solution:
        'A keresés, az engedélyeztetés, a logisztika és a beilleszkedés megkezdése egységes munkafolyamatként lett szinkronizálva a jóváhagyástól az építkezésre lépésig.',
      result:
        'Az ügyfél egy olyan modellt kapott, amely csökkentette a szakadékot a jelöltek jóváhagyása, a dokumentumok elkészítése és a munkálatok tényleges megkezdése között.',
      timeline: 'Útvonal az építkezés határidőihez igazítva',
      image: '/images/industry-construction.jpg',
      alt: 'Dolgozók az építkezésen',
      metrics: [
        { label: 'Igény', value: 'Objektumok megerősítése' },
        { label: 'Formátum', value: 'Építőipari szerepkörök' },
        { label: 'Fókusz', value: 'Indulási határidők védelme' },
      ],
    },
  ],
  convincingTitle: 'A kihívástól az eredményig: miért segít tapasztalatunk a cégeknek a gyorsabb cselekvésben',
  frameworkTitle: 'A kihívástól az eredményig: miért segít tapasztalatunk a cégeknek a gyorsabb cselekvésben',
  frameworkLead:
    'Egy erős esettanulmány nemcsak az eredményt mutatja meg, hanem azt is, miért volt az indulási útvonal reális éppen az adott típusú munkáltató számára.',
  routeLabel: 'Útvonal',
  outcomeLabel: 'Eredmény',
  framework: [
    {
      title: 'Világos kezdeti kihívás',
      text: 'Megmutatjuk, pontosan hol okozott működési kockázatot a cég számára a helyi toborzás, a szezonalitás vagy a fluktuáció.',
    },
    {
      title: 'Átlátható indulási modell',
      text: 'Elmagyarázzuk, hogyan kapcsolódott össze egyetlen folyamattá a kiválasztás, a dokumentáció, a logisztika és a dolgozók munkába állása.',
    },
    {
      title: 'Operatív eredmény',
      text: 'Az esetet érthető üzleti nyelvre fordítjuk: műszakstabilitás, indulási sebesség és kiszámíthatóság a létesítményben.',
    },
  ],
  checklistTitle: 'Minek kell szerepelnie minden további projektben (esettanulmányban)',
  checklist: [
    'A szerepkör és a kezdeti személyzeti kihívás leírása',
    'A célország vagy a keresési modell logikája',
    'Az idővonal a briefing-től az érkezésig',
    'A dokumentumokkal és a logisztikával kapcsolatos kulcspontok',
    'Eredmény a vállalat számára és egy világos CTA',
  ],
  ctaTitle: 'Szeretne hasonló toborzási modellt indítani a csapata számára?',
  ctaLead:
    'Írja le a munkaerőhiányt, mi pedig elkészítjük vállalata számára a toborzási útvonalat, az indulási határidőket és a következő gyakorlati lépést.',
}

huContent.industries = {
  title: 'Iparágak, ahol a nemzetközi toborzás a legerősebb operatív hatást nyújtja',
  lead:
    'Olyan szektorokra összpontosítunk, ahol az operatív személyzet hiánya és a magas fluktuáció a leginkább gátolja a vállalkozás fejlődését.',
  description:
    'Nemzetközi személyzet toborzása gyártáshoz, építőiparhoz, raktárakhoz, logisztikához, szállodákhoz és szolgáltató csapatokhoz.',
  eyebrow: 'Iparágak',
  intro: '',
  sectorsTitle: 'Kulcsfontosságú területek, ahol a modell a leggyorsabb eredményt hozza',
  sectorsLead: '',
  stats: [
    { value: '3', label: 'kulcsfontosságú ágazat a legnagyobb hatással' },
    { value: '1+', label: 'éves szerződés a legtöbb csapat számára' },
    { value: '54 %', label: 'potenciális személyzeti költségcsökkentés' },
  ],
  sectors: [
    {
      title: 'Gyártás',
      colSpan: 2,
      text: 'Stabil csapatok szerelőszalagokhoz, csomagolóüzemekbe és válogatóközpontokba.',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Dolgozók a gyártásban',
      tags: ['Gyártósorok', 'Csomagolás', 'Válogatás'],
      problem:
        'Folyamatos "lyukak" a műszakokban a helyi munkaerő hiánya és az évi 30-50%-os fluktuáció miatt.',
      solution:
        'Olyan munkavállalói csoportokat hozunk létre, akik legalább 1 éves szerződéssel érkeznek. Ez garantálja a fegyelmet és kiküszöböli a hétről hétre történő új betanítás szükségességét.',
      roles: ['Gépkezelők', 'Csomagolók', 'Válogatók', 'Segédmunkások'],
      points: [
        'Stabilizáljuk a műszakkezdéseket anélkül, hogy folyamatosan újabb embereket kellene keresni',
        'Csökkentjük a műszakvezetők és a HR csapat terhelését',
        'Kiszámítható ritmust biztosítunk az emberek munkába állításához',
      ],
      cta: 'Kalkuláció a gyártás számára',
    },
    {
      title: 'Építőipar',
      colSpan: 1,
      text: 'Projektek skálázása a helyi munkaerőhiánytól való függés nélkül.',
      image: '/images/industry-construction.jpg',
      alt: 'Dolgozók az építkezésen',
      tags: ['Szerelés', 'Segédmunkák', 'Létesítményi csapatok'],
      problem:
        'A létesítmények átadási határidőinek meghiúsulása amiatt, hogy a csúcsszezonban nem lehet gyorsan 20-50 segédmunkást vagy szerelőt találni.',
      solution:
        'Megszervezzük az összeállított brigádok operatív érkezését. Átvállaljuk a teljes legalizációt, hogy az Ön építésvezetői az építkezéssel foglalkozzanak, ne pedig a papírmunkával.',
      roles: ['Segédmunkások', 'Szerelők', 'Vasszerelők', 'Betonozók'],
      points: [
        'Megerősítjük az aktív építkezéseket a határidők felborítása nélkül',
        'Levesszük az adminisztrációs terhet az építésvezetőkről',
        'A szezonális csúcsokra és a brigádok bővítésére fókuszálunk',
      ],
      cta: 'Kalkuláció az építőipar számára',
    },
    {
      title: 'Raktározás és logisztika',
      colSpan: 1,
      text: 'Rugalmasság és kapacitás a 3PL szolgáltatók és az E-kereskedelem számára.',
      image: '/images/industry-logistics.jpg',
      alt: 'Dolgozók a raktárban és a logisztikában',
      tags: ['Komissiózás', 'Válogatás', 'Árumozgatás'],
      problem:
        'Kiszámíthatatlanság a szezonális csúcsok idején, és a helyi személyzet magas költsége az "éjszakai" műszakokban.',
      solution:
        'Egy olyan csapatot kap, amely készen áll az intenzív műszakos beosztásra. A személyzeti költségek kiszámíthatóvá és rögzítetté válnak.',
      roles: ['Komissiózók (Pickers)', 'Csomagolók', 'Rakodók', 'Raktári gépkezelők'],
      points: [
        'Kezeljük a szezonális hullámokat és a magas műszakos tempót',
        'Nagyobb kiszámíthatóságot biztosítunk a személyzeti költségek terén',
        'Segítünk a csapatok indulásának pánik nélküli megtervezésében',
      ],
      cta: 'Kalkuláció raktárak és logisztika számára',
    },
    {
      title: 'Szállodaipar és szolgáltatások',
      colSpan: 2,
      text: 'Stabil csapatok szobatakarításhoz, konyhai kisegítéshez és a mindennapi szolgáltatási tevékenységekhez.',
      image: '/images/industry-hospitality.jpg',
      alt: 'Személyzet a szálloda- és szolgáltatóiparban',
      tags: ['Szobatakarítás', 'Konyhai kisegítés', 'Szolgáltatási tevékenységek'],
      problem:
        'A csúcsidőszakokban nehéz fenntartani egy stabil szolgáltató csapatot, amikor a helyi személyzet gyorsan munkahelyet vált, vagy nem veszi fel a műszakot.',
      solution:
        'Hosszabb munkahorizontú munkavállalókat választunk ki, és legális utat építünk ki az érkezéshez, hogy az operatív csapatnak ne kelljen folyamatos vészhelyzeti toborzási módban működnie.',
      roles: ['Szobalányok', 'Konyhai kisegítők', 'Szervizszemélyzet', 'Univerzális segítők'],
      points: [
        'Csökkentjük a káoszt a napi műszakok tervezésében',
        'Megerősítjük a szállodákat és szolgáltató helyeket a szezonális csúcsok idején',
        'Egyértelmű és legális foglalkoztatási utat biztosítunk',
      ],
      cta: 'Kalkuláció szállodák és szolgáltatások számára',
    },
  ],
  frameworkTitle: 'Miért választják a cégek az ázsiai és afrikai munkaerőt?',
  frameworkLead:
    'Ez nem "olcsóbb helyettesítés" kérdése, hanem a csapatstabilitás, a motiváció és egy kiszámítható, hosszú munkaciklus biztosítása.',
  framework: [
    {
      title: 'Magas motiváció',
      text: 'Ezekből a régiókból érkező jelöltek számára az európai munka egy esély a jobb jövőre, ezért jobban megbecsülik a munkahelyüket, és ritkábban váltanak céget egy hónap után.',
    },
    {
      title: 'Fegyelem',
      text: 'Sok ázsiai országban a munkakultúra a hierarchia tiszteletén, az egyértelmű utasításokon és az ismétlődő műveletek stabil végrehajtásán alapul.',
    },
    {
      title: 'Hosszú távú elkötelezettség',
      text: 'A dolgozók célzott vízummal, hosszú időre érkeznek, ami megszünteti a szezonális létszámcsökkenés és az állandó újratoborzás okozta túlterheltség problémáját.',
    },
  ],
  fitTitle: 'Mikor van biztosan szüksége nemzetközi toborzásra?',
  fitLead:
    'Ha az alábbi jelek alapján felismeri saját helyzetét, a helyi toborzás valószínűleg már nem jelent rendszerszintű megoldást a problémára.',
  fitSignals: [
    'A fluktuáció meghaladja a 20%-ot: több időt tölt interjúztatással, mint a termelés irányításával.',
    'Túlhevült helyi piac: a helyi jelöltek bérigénye nő, de a termelékenység nem.',
    'Új létesítmények vagy gyártósorok tervezése: fél elindítani az új kapacitásokat, mert nincs, aki dolgozzon.',
    'A toborzási költségek emelkednek: a helyi ügynökségek magas jutalékot számítanak fel, és az emberek egy hét után kilépnek.',
  ],
  ctaTitle: 'Szüksége van egy indulási tervre egy adott ágazathoz?',
  ctaLead:
    'Írja meg nekünk, hogy melyik szektorban tevékenykedik, mekkora a csapat mérete és mik az indulási határidők, mi pedig javaslatot teszünk a legmegfelelőbb toborzási modellre kifejezetten az Ön vállalkozásához.',
  seoTitle: 'Nemzetközi munkaerő-toborzás a gyártás, a raktározás és az építőipar számára',
  seoText:
    'A VW Recruit az európai vállalatok munkaerőhiányának komplex megoldására specializálódott. Operatív személyzet kiválasztását biztosítjuk raktárak, gyárak és építkezések számára, a többlet munkaerővel rendelkező országok, különösen a Fülöp-szigetek, India, Vietnam és afrikai országok erőforrásait felhasználva. Modellünk nemcsak a toborzást foglalja magában, hanem a teljes dokumentációs támogatást, a logisztikát és a dolgozók helyszíni beilleszkedését is, amely lehetővé teszi az ügyfelek számára, hogy operatív személyzeti költségeiket akár 54%-kal csökkentsék.',
}

huContent.report = {
  title: 'Munkaerőpiac 2026: Amikor a helyi toborzás már nem bírja a tempót',
  lead:
    'Elemző riport olyan munkáltatók számára, akik szeretnék megérteni a nemzetközi toborzás valós költségeit, határidőit és jogi árnyalatait.',
  description:
    'Töltse le a nemzetközi toborzásról, a személyzeti költségekről, a jogi kockázatokról és a csapat elindításáról szóló jelentést.',
  eyebrow: 'Riport',
  intro:
    'Ez nem egy "pipálás kedvéért" letölthető PDF, hanem olyan tartalom, amely az érdeklődést érdemi beszélgetéssé alakítja a költségekről, az indulási határidőkről, a legalitásról és a vállalat nemzetközi toborzásra való felkészültségéről.',
  stats: [
    { value: '1', label: 'gyakorlatias elemző riport' },
    { value: '5', label: 'kulcsfontosságú felismerés belül' },
    { value: '1', label: 'világos konverziós cselekvés' },
  ],
  pointsTitle: 'Mi található a riportban',
  points: [
    'A költség-összehasonlítás logikája: helyi toborzás vs. nemzetközi toborzás',
    'A leggyakoribb jogi hibák a külföldiek foglalkoztatásakor',
    'Hogyan készítse fel a működést az onboarding-ra és a beilleszkedésre',
    'Mi befolyásolja valójában a kezdési határidőket az ajánlatkéréstől a műszakkezdésig',
    'Hogyan csökkentsük a személyzeti nyomást a fizikai és operatív szerepkörökben',
  ],
  benefitsTitle: 'Miért kérik a cégek ezt a riportot',
  benefitsLead:
    'A riport különösen hasznos akkor, amikor a vállalat már érzi a személyzeti nyomást, és nem elvont információkra, hanem egy egyértelmű megoldási modellre van szüksége.',
  benefits: [
    {
      title: 'Gyorsabb belső megegyezés',
      text: 'Segít a tulajdonosnak, az operatív vezetőknek és a HR-nek közös nyelvet beszélni a toborzás elindításának valós menetéről.',
    },
    {
      title: 'Tisztább rálátás a költségekre',
      text: 'Lehetővé teszi a bérnyomás, a kezdési határidők és a csapat folytonossági kockázatainak józanabb összehasonlítását.',
    },
    {
      title: 'Jobb átmenet a következő lépéshez',
      text: 'A "csak nézelődöm" szintről egy érdemi konzultáció felé tereli az érdeklődést, figyelembe véve a konkrét korlátokat és határidőket.',
    },
  ],
  trustTitle: 'Mitől igazán hasznos ez a riport',
  trustLead:
    'Egy erős elemző anyagnak nem szabad csupán általános HR tartalomnak lennie. Közvetlenül arra az üzleti problémára kell válaszolnia, ami miatt az ember kitölti az űrlapot.',
  trustPoints: [
    'Az operatív cégek munkaerőhiány-nyomására épül, nem pedig általános elméletekre',
    'Alapként szolgál az első konzultációhoz vagy értékesítési (sales) megbeszéléshez',
    'Hasznos azoknak a munkáltatóknak, akik azt vizsgálják, hogy a modell illeszkedik-e az objektumukhoz és a határidőikhez',
  ],
  faqTitle: 'Kérdések a letöltés előtt',
  faq: [
    {
      q: 'Kinek szól ez a riport?',
      a: 'Olyan munkáltatóknak a gyártásban, logisztikában, építőiparban, szállodaiparban és más operatív üzletágakban, akiknél munkaerőhiány vagy bérnyomás tapasztalható.',
    },
    {
      q: 'Ez csak egy újabb általános PDF?',
      a: 'Nem. A riport célja, hogy segítsen meghozni egy valós toborzási döntést, és felkészítsen egy érdemi beszélgetésre az indulási modellről, a határidőkről és a korlátokról.',
    },
    {
      q: 'Mi történik az űrlap elküldése után?',
      a: 'A felhasználó megkapja a PDF letöltésének útvonalát, és ezzel egyidejűleg minősített leaddé válik egy további konzultációhoz a toborzási igényeiről.',
    },
  ],
  ctaTitle: 'Szerezze be a riportot, és értse meg a következő lépést a személyzetfejlesztésben',
  ctaLead:
    'Hagyja meg elérhetőségét, és mi elküldjük a PDF-et, valamint segítünk felmérni, hogy a nemzetközi toborzási modell megfelel-e az Ön jelenlegi munkaerőhiányának.',
  formTitle: 'Riport lekérése',
  formLead:
    'Töltsön ki egy rövid űrlapot a PDF megszerzéséhez, hogy áttérhessünk egy érdemibb beszélgetésre a személyzeti költségekről, az indulási határidőkről és a jogi előkészületekről.',
  formNote: 'A leginkább azoknak a munkáltatóknak hasznos, akik toborzást, munkaerő-cserét vagy a csapat bővítését tervezik.',
}
