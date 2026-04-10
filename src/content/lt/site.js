import { createLocaleContent } from '../create-locale-content.js'

export const ltContent = createLocaleContent({
  code: 'lt',
  name: 'Lithuanian',
  nativeName: 'Lietuvių',
  translated: true,
  homeLabel: 'Pagrindinis',
  heroTitle: 'Tarptautinis įdarbinimas verslui, kuriam reikia darbuotojų operatyviniam darbui be vėlavimų.',
  heroLead:
    'Svetainės struktūra jau paruošta potencialių klientų (lead) generavimui, daugiakalbiam SEO augimui, apklausoms, atvejų analizėms ir konsultaciniams CTA, skirtiems B2B klientams.',
})

ltContent.site.description =
  'Sumažinkite personalo išlaidas iki 54 % naudodamiesi visapusišku („iki raktų“) tarptautiniu darbuotojų iš Azijos ir Afrikos įdarbinimu.'

ltContent.navigation.items = [
  { key: 'home', label: 'Pagrindinis' },
  { key: 'services', label: 'Paslaugos' },
  { key: 'industries', label: 'Sferos' },
  { key: 'cases', label: 'Projektai' },
  { key: 'report', label: 'Ataskaita' },
  { key: 'contacts', label: 'Kontaktai' },
]

ltContent.navigation.primaryCta = 'Apskaičiuoti įdarbinimą'
ltContent.navigation.secondaryCta = 'Užsakyti skambutį'

ltContent.home = {
  meta: {
    title: 'Tarptautinis darbuotojų įdarbinimas verslui',
    description:
      'Sumažinkite personalo išlaidas ir užpildykite darbuotojų trūkumą naudodamiesi visapusišku darbuotojų iš Azijos ir Afrikos įdarbinimu.',
  },
  hero: {
    lines: ['SUMAŽINKITE PERSONALO', 'IŠLAIDAS'],
    highlight: 'IKI 54 %',
    lead:
      'naudodamiesi tarptautiniu darbuotojų iš <strong>Azijos ir Afrikos</strong> įdarbinimu „iki raktų“',
    stats: [
      { value: 10, suffix: ' DIENŲ', label: 'iki pirmųjų kandidatų atrankos' },
      { value: 7, suffix: ' METAI', label: 'patirties tarptautiniame įdarbinime' },
      { value: 100, suffix: ' %', label: 'dokumentų ir atvykimo palaikymas' },
    ],
    video: {
      src: '/videos/international-recruitment-overview.mp4',
      poster: '/video-poster-home.svg',
      type: 'video/mp4',
    },
  },
  comparison: {
    eyebrow: 'Įdarbinimo modelių palyginimas',
    title: 'Kiek verslas permoka už vietinį įdarbinimą',
    cards: [
      {
        title: 'Kiti',
        brandNote: 'vietinis įdarbinimas / kitos agentūros',
        amount: '$36 000',
        period: '/ mėn.',
        note: '30 darbuotojų komandai',
        variant: 'other',
        rows: [
          {
            title: 'Didesnė atlyginimų bazė',
            text: 'Vidutiniškai 1000–1400 $ vienam darbuotojui samdant vietinėje rinkoje.',
          },
          {
            title: 'Ilgesnis komandos formavimas',
            text: 'Pirmųjų žmonių atranka trunka 3–6 savaites ar ilgiau.',
          },
          {
            title: 'Nuolatinė pakartotinė paieška',
            text: 'Dėl kaitos ir sezoniškumo verslas nuolat grįžta prie darbuotojų paieškos.',
          },
        ],
      },
      {
        title: 'VW Recruit',
        brandNote: 'tarptautinis įdarbinimas „iki raktų“',
        amount: '$18 000',
        period: '/ mėn.',
        note: '30 darbuotojų komandai',
        variant: 'brand',
        rows: [
          {
            title: 'Mažesnės vidutinės išlaidos',
            text: 'Vidutiniškai 400–700 $ vienam darbuotojui, priklausomai nuo pareigų ir šalies.',
          },
          {
            title: 'Pirmi kandidatai per 7–14 dienų',
            text: 'Greita atrankos pradžia naudojant tarptautinę duomenų bazę ir partnerių tinklą.',
          },
          {
            title: 'Stabilesnė komanda',
            text: 'Mažiau pakartotinės paieškos ciklų ir geresnis nuspėjamumas verslui.',
          },
        ],
      },
    ],
    cta: 'Apskaičiuoti įdarbinimą',
  },
  industries: {
    eyebrow: 'Kurioms sferoms tinka šis modelis',
    title: 'Dažniausiai šis įdarbinimo modelis naudojamas operatyviniam darbui',
    lead:
      'Formuojame komandas gamybai, sandėliams, statyboms ir aptarnavimo sektoriui, kai verslui reikia nuspėjamo starto ir mažesnių personalo išlaidų.',
    items: [
      {
        title: 'Sandėliai ir logistika',
        text: 'Komandų formavimas prekių surinkimui, pakavimui, perkėlimui ir sandėlio operacijoms.',
      },
      {
        title: 'Statyba',
        text: 'Darbuotojų atranka statybos objektams, montavimo, pagalbiniams ir techniniams darbams.',
      },
      {
        title: 'Viešbučiai ir aptarnavimas',
        text: 'Personalo atranka valymui, virtuvei, priežiūrai ir kasdieniam operatyviniam darbui.',
      },
      {
        title: 'Gamyba',
        text: 'Darbuotojų atranka gamybos linijoms, pakavimui, rūšiavimui ir pagalbiniams procesams.',
      },
    ],
  },
  calculator: {
    eyebrow: 'Kalkuliatorius',
    title: 'Apskaičiuokite darbuotojų įdarbinimą savo įmonei',
    lead:
      'Atsakykite į kelis trumpus klausimus ir gaukite komandos įdarbinimo skaičiavimą savo verslui.',
  },
  casesSection: {
    eyebrow: 'Mūsų projektai',
    title: 'Mūsų darbuotojų įdarbinimo projektai',
    lead:
      'Rodyti, kaip atrodo įdarbinimas realiuose projektuose: nuo gamybos ir sandėlių iki aptarnavimo ir operatyvinių komandų.',
    cta: 'Visi projektai',
    items: [
      {
        title: 'Delta Pack',
        subtitle: 'Gamybos įmonė, Centrinė Europa',
        problem: 'Užpildėme 32 darbuotojų trūkumą pakavimo linijoje po ilgos vietinės paieškos ir didelės kaitos.',
        image: '/images/industry-manufacturing.jpg',
        alt: 'Darbuotojai gamybos linijoje',
      },
      {
        title: 'Nord Cargo Hub',
        subtitle: 'Sandėlių kompleksas ir logistika',
        problem: 'Suformavome pamaininę komandą surinkimui ir rūšiavimui, kai verslas nespėjo susidoroti su piko apkrovomis.',
        image: '/images/industry-logistics.jpg',
        alt: 'Darbuotojai sandėlyje ir logistikoje',
      },
      {
        title: 'Urban Build Group',
        subtitle: 'Statybų rangovas',
        problem: 'Sustiprinome objektus montuotojais ir pagalbiniais darbininkais, kad nesužlugdytume naujo statybų etapo pradžios terminų.',
        image: '/images/industry-construction.jpg',
        alt: 'Darbuotojai statybų aikštelėje',
      },
    ],
  },
  process: {
    eyebrow: 'Kas vyksta po jūsų užklausos',
    title: 'Kas vyksta po jūsų užklausos',
    intro:
      'Patiksliname darbuotojų skaičių, reikalavimus kandidatams ir komandos darbo pradžios terminus. Po to pradedama atranka per mūsų duomenų bazę ir partnerių agentūras atrankos šalyse.',
    steps: [
      {
        title: 'Laisvų darbo vietų analizė ir atrankos pradžia',
        text: 'Suformuojame kandyto profilį, suderiname terminus ir pradedame paiešką atitinkamuose šaltiniuose.',
      },
      {
        title: 'Kandidatų atranka ir patikrinimas',
        text: 'Kandidatai praeina pirminę atranką, dokumentų patikrinimą ir bazinį interviu. Įmonė gauna profilius galutiniam patvirtinimui.',
      },
      {
        title: 'Dokumentų įforminimas',
        text: 'Organizuojame visų reikiamų dokumentų įdarbinimui ir atvykimui paruošimą, kontroliuojame procesą iki visiško parengtumo.',
      },
      {
        title: 'Atvykimas ir darbo pradžia',
        text: 'Koordinuojame logistiką ir darbuotojų atvykimą. Po atvykimo komanda pradeda darbą įmonėje.',
      },
    ],
  },
  guarantees: {
    eyebrow: 'Garantijos ir saugumas',
    title: 'Ką verslas gauna kartu su įdarbinimu',
    items: [
      {
        title: '100 % legalumas',
        text: 'Prisiimame atsakomybę už kvotas, darbo leidimus ir vizų procesus, kad įmonė būtų apsaugota nuo patikrinimų.',
      },
      {
        title: 'Nemokamas pakeitimas',
        text: 'Suteikiame garantinį laikotarpį kandidato pakeitimui, jei projektui reikia stabilumo pradžioje.',
      },
      {
        title: 'Pilnas palaikymas „iki raktų“',
        text: 'Nuo interviu Azijoje iki pasitikimo oro uoste ir išėjimo į pamainą, kartu su adaptacijos ir komunikacijos palaikymu.',
      },
    ],
  },
  reportBlock: {
    eyebrow: 'Analitinė medžiaga',
    title: 'Kodėl vietinis įdarbinimas praranda efektyvumą?',
    lead:
      'Gaukite uždarą analitinę ataskaitą „Darbo rinka 2026: Tarptautinio personalo integracija“.',
    points: [
      'Išlaidų palyginimo lentelė: Vietinė rinka vs Ekstramai',
      '5 teisinės klaidos samdant užsieniečius',
      'Kaip įveikti kalbos barjerą gamyboje',
    ],
    cta: 'Atsisiųsti ataskaitą PDF formatu',
  },
  reviews: {
    eyebrow: 'Pasitikėjimas',
    title: 'Rinkos lyderiai mumis pasitiki',
    items: [
      {
        name: 'Oleksandr Koval',
        company: 'Operacijų direktorius, Delta Pack',
        text: 'VW Recruit užpildė darbuotojų trūkumą gamybos linijoje, neapkraunant mūsų vidinio HR. Vertingiausia buvo tai, kad komanda prisiėmė atsakomybę tiek už atranką, tiek už dokumentų tvarkymą.',
      },
      {
        name: 'Iryna Melnyk',
        company: 'HR Lead, Nord Cargo Hub',
        text: 'Gavome ne tik kandidatus, bet ir aiškų komandos paleidimo procesą. Logistika, leidimai ir koordinavimas buvo kontroliuojami, todėl sandėlys į sezoną įžengė be trikdžių.',
      },
      {
        name: 'Taras Humeniuk',
        company: 'Projekto vadovas, Urban Build Group',
        text: 'Mums buvo svarbu greitai sustiprinti objektus žmonėmis, kurie realiai išeina į pamainą. VW Recruit suteikė terminų nuspėjamumą ir stiprų palaikymą net ir po kandidatų atvykimo.',
      },
      {
        name: 'Maryna Savchuk',
        company: 'People Partner, East Service Group',
        text: 'Pradėję bendradarbiauti, nustojome rankiniu būdu gesinti kadrų „gaisrus“. VW Recruit komanda greitai sinchronizavo reikalavimus, atrankos šalis ir žmonių išėjimo į objektą terminus.',
      },
      {
        name: 'Vitaliy Bondar',
        company: 'Operacijų vadovas, Metal Works',
        text: 'Mums patiko būtent nuspėjamumo lygis. Verslas suprato, kada atvyks kandidatai, kokie dokumentai jau paruošti ir kokiame etape yra kiekvienas darbuotojas.',
      },
      {
        name: 'Nataliya Chernenko',
        company: 'HR direktorė, West Line Logistics',
        text: 'Logistikai kritiškai svarbus pamainų paleidimo greitis. Su VW Recruit gavome ne tik atranką, bet ir normalų operatyvinį palaikymą iki žmonių išėjimo į darbą.',
      },
    ],
    metrics: [
      {
        value: '7 METAI',
        label: 'Patirties tarptautiniame įdarbinime',
      },
      {
        value: '100 %',
        label: 'Dokumentų ir teisinio įforminimo kontrolė',
      },
      {
        value: '10 DIENŲ',
        label: 'Iki pirmųjų kandidatų atrankoje',
      },
      {
        value: 'IKI RAKTŲ',
        label: 'Palaikymas nuo atrankos iki išėjimo į pamainą',
      },
    ],
  },
  media: {
    eyebrow: 'Vaizdo įrašai ir atsakymai',
    title: 'Atsakymai į pagrindinius verslo savininkų klausimus',
    reels: [
      {
        title: 'Kiek laiko užtrunka paleisti tarptautinį įdarbinimą?',
        text: 'Paaiškiname, kada verslas gauna pirmuosius kandidatus, kas turi įtakos terminams ir kokiame etape prisijungia dokumentų palaikymas.',
        meta: 'Paleidimo laiko juosta',
        duration: '02:14',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Kaip verslas kontroliuoja legalumą ir dokumentus?',
        text: 'Išskaidome, kokias kvotas, leidimus ir vizų procesus prisiimame, kad įmonė nepatirtų rizikos prieš patikrinimus.',
        meta: 'Dokumentai ir legalumas',
        duration: '03:02',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Kas vyksta darbuotojams atvykus į projektą?',
        text: 'Parodome, kaip atrodo adaptacija, pamainos pradžia, komunikacija su koordinatoriais ir komandos palaikymas pirmajame etape.',
        meta: 'Adaptacija ir palaikymas',
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
    title: 'Dažniausiai užduodami klausimai',
    items: [
      {
        q: 'Kaip sprendžiama kalbos barjero problema?',
        a: 'Mes įtraukiame adaptaciją, bazinį mokymą ir komunikaciją per koordinatorių ar brigadininką, kad komanda greitai įsitrauktų į darbą.',
      },
      {
        q: 'Kas ieško būsto darbuotojams?',
        a: 'Modelis gali apimti būsto, logistikos ir atvykimo koordinavimą, priklausomai nuo bendradarbiavimo formato ir paleidimo šalies.',
      },
      {
        q: 'Ką daryti, jei darbuotojas suserga arba neišeina į pamainą?',
        a: 'Projekto pradžioje suderinamas rezervas, garantinės pakeitimo sąlygos ir operatyvios komunikacijos su jūsų puse procedūra.',
      },
    ],
  },
  finalCta: {
    title: 'Pasiruošę užpildyti kadrų trūkumą ir plėsti verslą?',
    lead: 'Užsisakykite nemokamą 30 minučių trukmės „Zoom“ sesiją su mūsų Head of Recruitment.',
  },
}

ltContent.forms.lead.title = 'Gauti įdarbinimo skaičiavimą'
ltContent.forms.lead.success = 'Ačiū. Jūsų užklausa išsaugota, ir mes su jumis susisieksime dėl įdarbinimo.'
ltContent.forms.callback.title = 'Užsakyti skambutį'
ltContent.forms.callback.success = 'Ačiū. Jūsų skambučio užklausa išsaugota.'
ltContent.forms.report.title = 'Gauti ataskaitą'
ltContent.forms.report.success = 'Ačiū. Gavome jūsų užklausą ir netrukus išsiųsime PDF dokumentą į jūsų el. paštą.'
ltContent.forms.contact.title = 'Siųsti užklausą'
ltContent.forms.contact.success = 'Ačiū. Jūsų užklausa gauta, ir „VW Recruit“ komanda susisieks su jumis dėl kito žingsnio.'
ltContent.brand.tagline = 'Tarptautinis įdarbinimo partneris'
ltContent.brand.homeAriaLabel = 'VW Recruit pagrindinis puslapis'

ltContent.about = {
  meta: {
    title: 'Apie VW Recruit',
    description:
      'Sužinokite daugiau apie „VW Recruit“, tarptautinį darbuotojų įdarbinimą, komandos paleidimo maršrutą ir požiūrį į darbą su verslu.',
  },
  title: 'Apie VW Recruit',
  lead:
    'Padedame verslui užpildyti kadrų trūkumą per tarptautinį darbuotojų iš Azijos ir Afrikos įdarbinimą su aiškiu maršrutu nuo užklausos iki žmonių išėjimo į pamainą.',
}

ltContent.faqPage = {
  meta: {
    title: 'Dažniausiai užduodami darbdavių klausimai',
    description:
      'Atsakymai į pagrindinius darbdavių klausimus apie tarptautinį įdarbinimą: terminai, dokumentai, komandos paleidimas, adaptacija ir bendradarbiavimo formatas.',
  },
  title: 'Dažniausiai užduodami darbdavių klausimai',
  lead:
    'Surinkome pagrindinius klausimus apie tarptautinį darbuotojų įdarbinimą: nuo paleidimo terminų ir dokumentų iki būsto, adaptacijos ir palaikymo logikos.',
}

ltContent.privacy = {
  meta: {
    title: 'Privatumo politika',
    description:
      'Susipažinkite su „VW Recruit“ privatumo politika dėl asmens duomenų rinkimo, tvarkymo ir apsaugos svetainėje.',
  },
  title: 'Privatumo politika',
  sections: [
    {
      title: '1. Bendrosios nuostatos',
      paragraphs: [
        'Ši Privatumo politika nustato „VW Recruit“ svetainės (toliau – „Svetainė“) vartotojų asmens duomenų rinkimo, naudojimo, saugojimo ir apsaugos tvarką. Naudodamiesi mūsų Svetaine, sutinkate su šios Politikos sąlygomis. Jei nesutinkate su šiomis sąlygomis, prašome nustoti naudotis Svetaine.',
      ],
    },
    {
      title: '2. Kokius duomenis mes renkame',
      paragraphs: ['Naudojantis Svetaine, mes galime rinkti šiuos asmens duomenis:'],
      items: [
        'Kontaktinė informacija: vardas, įmonės pavadinimas, el. pašto adresas, telefono numeris. Šiuos duomenis pateikiate savanoriškai pildydami formas (pvz., „Užsakyti skambutį“, „Gauti ataskaitą“, „Apskaičiuoti įdarbinimą“).',
        'Techniniai duomenys: IP adresas, naršyklės tipas, įrenginio tipas, puslapių lankomumo duomenys (naudojant slapukus ir analitinius įrankius).',
      ],
    },
    {
      title: '3. Duomenų rinkimo ir naudojimo tikslas',
      paragraphs: ['Surinkti asmens duomenys naudojami:'],
      items: [
        'Susisiekti su jumis, siekiant suteikti konsultacijas dėl tarptautinio įdarbinimo paslaugų.',
        'Siųsti prašomą medžiagą (pvz., PDF ataskaitas, išlaidų skaičiavimus).',
        'Gerinti Svetainės veikimą ir analizuoti mūsų rinkodaros kampanijų efektyvumą.',
        'Siųsti svarbius pranešimus ir komercinius pasiūlymus (jums sutikus).',
      ],
    },
    {
      title: '4. Duomenų perdavimas trečiosioms šalims',
      paragraphs: [
        'Mes neparduodame, nekeičiame ir neperduodame jūsų asmens duomenų trečiosioms šalims be jūsų sutikimo, išskyrus įstatymų numatytus atvejus. Duomenys gali būti prieinami mūsų patikimiems rangovams (pvz., prieglobos (hosting) paslaugų teikėjams, el. pašto rinkodaros paslaugoms), kurie privalo išlaikyti jų konfidencialumą.',
      ],
    },
    {
      title: '5. Duomenų apsauga ir saugojimas',
      paragraphs: [
        'Mes imamės atitinkamų techninių ir organizacinių priemonių, kad apsaugotume jūsų duomenis nuo neteisėtos prieigos, pakeitimo, atskleidimo ar sunaikinimo. Duomenys saugomi tik tiek laiko, kiek būtina šioje Politikoje nurodytiems tikslams pasiekti, arba laikantis teisės aktų reikalavimų.',
      ],
    },
    {
      title: '6. Vartotojų teisės',
      paragraphs: ['Jūs turite teisę:'],
      items: [
        'Gauti prieigą prie savo asmens duomenų, kuriuos mes saugome.',
        'Reikalauti ištaisyti jūsų duomenų netikslumus.',
        'Reikalauti ištrinti jūsų duomenis („teisė būti pamirštam“).',
        'Bet kuriuo metu atšaukti sutikimą tvarkyti duomenis.',
      ],
    },
    {
      title: '7. Slapukų (Cookies) naudojimas',
      paragraphs: [
        'Mūsų Svetainė naudoja slapukus, siekiant užtikrinti tinkamą puslapių veikimą, srauto analitiką ir pagerinti vartotojo patirtį. Galite sukonfigūruoti arba išjungti slapukų išsaugojimą savo naršyklės nustatymuose.',
      ],
    },
    {
      title: '8. Privatumo politikos pakeitimai',
      paragraphs: [
        'Pasiliekame teisę atnaujinti šią Politiką. Pakeitimai įsigalioja nuo jų paskelbimo šiame puslapyje momento.',
      ],
    },
    {
      title: '9. Kontaktai',
      paragraphs: [
        'Jei turite klausimų dėl šios Privatumo politikos arba norite pasinaudoti savo teisėmis dėl asmens duomenų, susisiekite su mumis naudodami kontaktinę formą Svetainėje arba el. paštu: [Jūsų el. paštas, pvz.: hello@vwrecruit.com].',
      ],
    },
  ],
}

ltContent.terms = {
  meta: {
    title: 'Naudojimo sąlygos',
    description:
      'Susipažinkite su „VW Recruit“ svetainės naudojimo sąlygomis, sąveikos per formas taisyklėmis ir pagrindiniais informacijos teikimo svetainėje principais.',
  },
  title: 'Naudojimo sąlygos',
  sections: [
    {
      title: '1. Bendrosios nuostatos',
      paragraphs: [
        'Šios Naudojimo sąlygos (toliau – „Sąlygos“) reglamentuoja prieigą prie „VW Recruit“ svetainės (toliau – „Svetainė“) ir jos naudojimą. Atidarydami ir naršydami šią Svetainę, visiškai sutinkate su šiomis Sąlygomis.',
      ],
    },
    {
      title: '2. Įmonės paslaugos',
      paragraphs: [
        'Svetainė yra išskirtinai informacinio pobūdžio ir sukurta siekiant supažindinti vartotojus su tarptautinio darbuotojų įdarbinimo paslaugomis, taip pat suteikti galimybę palikti užklausą konsultacijoms, skaičiavimams ar analitinei medžiagai gauti. Formos užpildymas svetainėje nereiškia paslaugų teikimo sutarties sudarymo; sutartiniai santykiai įforminami atskirai po individualaus suderinimo.',
      ],
    },
    {
      title: '3. Vartotojo pareigos',
      paragraphs: ['Vartotojas įsipareigoja:'],
      items: [
        'Pateikti teisingą informaciją (vardas, įmonės kontaktiniai duomenys) pildant formas Svetainėje.',
        'Nenaudoti Svetainės jokiems neteisėtiems, apgaulingiems veiksmams ar kenkėjiškos programinės įrangos platinimui.',
        'Nebandyti gauti neteisėtos prieigos prie Svetainės administravimo sistemų.',
      ],
    },
    {
      title: '4. Intelektinė nuosavybė',
      paragraphs: [
        'Visa Svetainėje patalpinta medžiaga, įskaitant tekstus (paslaugų aprašymai, atvejų analizės, ataskaitos), vaizdus, logotipus („VW Recruit“), grafiką ir dizaino struktūrą, yra įmonės nuosavybė arba naudojama pagal licenciją. Bet koks Svetainės medžiagos kopijavimas, platinimas ar naudojimas komerciniais tikslais be išankstinio rašytinio autorių teisių savininko sutikimo yra draudžiamas.',
      ],
    },
    {
      title: '5. Atsakomybės atsisakymas',
      paragraphs: [
        'Informacija Svetainėje pateikiama tokiu principu „kaip yra“. Mes stengiamės palaikyti duomenis aktualius (pvz., informaciją apie terminus, išlaidas ar pakeitimo garantijas), tačiau tikslios bendradarbiavimo sąlygos fiksuojamos išskirtinai individualioje sutartyje.',
        'Įmonė neatsako už galimus techninius Svetainės veikimo sutrikimus ar laikiną negalėjimą prie jos prisijungti.',
        'Svetainėje gali būti nuorodų į trečiųjų šalių išteklius. Mes neatsakome už tokių išorinių išteklių turinį ir privatumo politiką.',
      ],
    },
    {
      title: '6. Naudojimo sąlygų pakeitimai',
      paragraphs: [
        'Svetainės administracija pasilieka teisę bet kuriuo metu daryti šių Sąlygų pakeitimus be išankstinio asmeninio vartotojų informavimo. Atnaujinta Sąlygų redakcija įsigalioja nuo jos paskelbimo šiame puslapyje momento. Rekomenduojame periodiškai tikrinti šį skyrių.',
      ],
    },
    {
      title: '7. Ginčų sprendimas',
      paragraphs: [
        'Visi ginčai, kylantys dėl šios Svetainės naudojimo, sprendžiami derybų keliu. Nepasiekus susitarimo, ginčas nagrinėjamas pagal galiojančius įstatymus [nurodykite šalį arba jurisdikciją].',
      ],
    },
    {
      title: '8. Grįžtamasis ryšys',
      paragraphs: [
        'Visais klausimais, susijusiais su Svetainės veikimu ar bendradarbiavimo sąlygomis, kreipkitės į mus per formą puslapyje „Kontaktai“ arba adresu: [Jūsų el. paštas / Telefonas].',
      ],
    },
  ],
}

ltContent.contacts = {
  meta: {
    title: 'VW Recruit Kontaktai',
    description:
      'Susisiekite su „VW Recruit“ dėl tarptautinio darbuotojų įdarbinimo, komandos paleidimo, dokumentų ir bendradarbiavimo formato.',
  },
  title: 'Kontaktai verslui, kuriam reikia greitai užpildyti kadrų trūkumą',
  summary: [
    {
      label: 'Atsakymas',
      value: 'darbo dienos bėgyje',
    },
    {
      label: 'Formatas',
      value: 'skambutis, „Zoom“ arba el. paštas',
    },
    {
      label: 'Fokusas',
      value: 'darbdaviai ir operatyvinės komandos',
    },
  ],
  channelsTitle: 'Kaip patogiai pradėti bendrauti',
  channelsLead:
    'Pasirinkite formatą, kuris šiuo metu geriausiai tinka. Jei dar neturite galutinio aprašo, galite pradėti nuo trumpo skambučio ir vėliau pereiti prie detalių.',
  channels: [
    {
      icon: 'brief',
      label: 'Įdarbinimo užklausa',
      title: 'Palikite užklausą pagal savo poreikį',
      text: 'Patogiausias variantas, jei jau žinote roles, apytikslį darbuotojų skaičių ar pageidaujamą komandos paleidimo terminą.',
      actionLabel: 'Atidaryti formą',
      actionType: 'anchor',
      actionTarget: '#contact-form',
    },
    {
      icon: 'call',
      label: 'Greita sinchronizacija',
      title: 'Užsisakykite trumpą skambutį su komanda',
      text: 'Tinka, jei reikia greitai suprasti, ar tarptautinis įdarbinimas tinka būtent jūsų atveju ir kokie bus kiti žingsniai.',
      actionLabel: 'Užsakyti skambutį',
      actionType: 'modal',
      actionTarget: 'callback',
    },
    {
      icon: 'documents',
      label: 'Paleidimo maršrutas',
      title: 'Patikslinkite dokumentus, terminus ir paleidimo logiką',
      text: 'Paaiškiname procesą nuo kandidatų atrankos ir patvirtinimo iki dokumentų, logistikos, atvykimo ir žmonių išėjimo į pamainą.',
    },
  ],
  checklistTitle: 'Ką naudinga pasiruošti prieš kreipiantis',
  checklistLead:
    'Nereikia tobulai suformuluoto aprašo (brief). Net ir bazinė informacija padės greičiau pereiti prie dalykiško pokalbio.',
  checklist: [
    'Kokias konkrečias roles ar padalinius reikia sustiprinti',
    'Apytikslis darbuotojų skaičius ir pageidaujamas starto terminas',
    'Šalis ir miestas, kur dirbs komanda',
    'Ar reikia tik atrankos, ar visiško palaikymo iki paleidimo',
  ],
  supportTitle: 'Ką komanda gali paaiškinti jau pirmo kontakto metu',
  supportLead:
    'Pirmasis kontaktas reikalingas ne dėl formalumo, o tam, kad pašalintume netikrumą ir parodytume, kiek modelis realiai atitinka jūsų užklausą.',
  support: [
    'Kaip greitai galima paleisti kandidatų srautą',
    'Kurios atrankos šalys geriausiai atitinka roles',
    'Kaip organizuojami dokumentai, leidimai ir atvykimo koordinavimas',
    'Koks bus komunikacijos ir komandos paleidimo formatas po patvirtinimo',
  ],
  form: {
    title: 'Palikite užklausą ir mes grįšime su kitu žingsniu',
    lead:
      'Palikite kontaktus, ir „VW Recruit“ komanda patars praktiškiausią starto formatą būtent jūsų situacijai.',
    note: 'Geriausiai tinka darbdaviams, kuriems reikia įdarbinimo, pakeitimo ar komandos paleidimo.',
  },
}

ltContent.thankYouReport = {
  meta: {
    title: 'Ačiū už ataskaitos užklausą',
    description:
      'Jūsų ataskaitos užklausa išsaugota. „VW Recruit“ komanda susisieks su jumis ir atsiųs medžiagą artimiausiu metu.',
  },
  title: 'Ačiū. Jūsų ataskaitos užklausa jau gauta',
  lead:
    'Išsaugojome užklausą ir artimiausiu metu atsiųsime medžiagą, taip pat patarsime praktišką kitą žingsnį dėl jūsų įdarbinimo situacijos.',
  ctaLabel: 'Grįžti į pagrindinį',
  secondaryCtaLabel: 'Atidaryti kontaktus',
}

ltContent.ui.modalClose = 'Uždaryti modalinį langą'
ltContent.ui.leadCapture = 'Užklausų rinkimas'
ltContent.ui.video = 'Vaizdo įrašas'
ltContent.ui.videoPlay = 'Leisti vaizdo įrašą'
ltContent.ui.openMenu = 'Atidaryti meniu'
ltContent.ui.primaryNav = 'Pagrindinė navigacija'
ltContent.ui.languagePickerTitle = 'Pasirinkite kalbą'
ltContent.ui.fieldName = 'Vardas'
ltContent.ui.fieldCompany = 'Įmonė'
ltContent.ui.fieldEmail = 'El. paštas'
ltContent.ui.fieldPhone = 'Telefonas'
ltContent.ui.sendRequest = 'Siųsti užklausą'
ltContent.ui.requestCallback = 'Užsakyti skambutį'
ltContent.ui.getReport = 'Gauti ataskaitą'
ltContent.ui.bookCall = 'Užsakyti skambutį'
ltContent.ui.quizEyebrow = 'Apklausa'
ltContent.ui.quizContinue = 'Tęsti'
ltContent.ui.quizBack = 'Atgal'
ltContent.ui.quizSubmit = 'Pateikti'
ltContent.ui.quizReady = 'Paruošta'
ltContent.ui.quizValidationError = 'Prašome užpildyti esamą žingsnį.'
ltContent.ui.quizSubmitError = 'Nepavyko išsiųsti formos. Bandykite dar kartą.'
ltContent.ui.processEyebrow = 'Procesas'
ltContent.ui.caseStudy = 'Projektas'
ltContent.ui.caseViewLabel = 'Žiūrėti projektą'
ltContent.ui.leadCaptureEyebrow = 'Užklausų rinkimas'
ltContent.ui.faqEyebrow = 'DUK'
ltContent.ui.aboutEyebrow = 'Apie mus'
ltContent.ui.contactsEyebrow = 'Kontaktai'
ltContent.ui.reportEyebrow = 'Ataskaita'
ltContent.ui.privacyEyebrow = 'Privatumo politika'
ltContent.ui.termsEyebrow = 'Naudojimo sąlygos'
ltContent.ui.thankYouEyebrow = 'Ačiū'
ltContent.ui.finalCtaEyebrow = 'Finalinis CTA'
ltContent.ui.downloadReport = 'Atsisiųsti ataskaitą'
ltContent.ui.openContactsPage = 'Atidaryti kontaktų puslapį'
ltContent.ui.projectsExamples = 'Projektų pavyzdžiai'
ltContent.ui.reelPlaceholder = 'Vieta reel ar vaizdo įrašui popup modale po šaltinių prijungimo.'
ltContent.ui.industriesLead =
  'Dažniausiai įmonės naudoja šį modelį operatyviniam darbui gamyboje, sandėliuose, statyboje ir aptarnavimo sektoriuje.'
ltContent.ui.legalPlaceholder = 'Čia bus teisinis tekstas. Pakeiskite jį patvirtinta galutine versija prieš paleidimą.'
ltContent.ui.footerDescription =
  'Darbuotojų iš Azijos ir Afriki įdarbinimas „iki raktų“: nuo kandidatų ir dokumentų paieškos iki atvykimo, adaptacijos ir komandos išėjimo į pamainą.'
ltContent.ui.footerCorePages = 'Pagrindiniai puslapiai'
ltContent.ui.footerLegal = 'Teisinė informacija'
ltContent.ui.privacyPolicy = 'Privatumo politika'
ltContent.ui.termsAndConditions = 'Naudojimo sąlygos'
ltContent.ui.formRequiredError = 'Prašome užpildyti privalomus formos laukus.'
ltContent.ui.formSubmittingButton = 'Siunčiama...'
ltContent.ui.formSubmittingStatus = 'Forma siunčiama...'
ltContent.ui.formSubmitError = 'Nepavyko išsiųsti formos. Bandykite dar kartą.'
ltContent.ui.industryVisualLogisticsAlt = 'Darbuotojai sandėlyje ir logistikoje'
ltContent.ui.industryVisualConstructionAlt = 'Darbuotojai statybų aikštelėje'
ltContent.ui.industryVisualHospitalityAlt = 'Personalas viešbučių ir aptarnavimo sferoje'
ltContent.ui.industryVisualManufacturingAlt = 'Darbuotojai gamyboje'
ltContent.ui.industrySlidePlaceholder =
  'Atskiras vizualinis atvejis šiai vertikalei gali būti pritaikomas SEO puslapiams, apklausoms ir personalizuotiems CTA.'
ltContent.ui.comparisonCardCta = 'Apskaičiuoti įdarbinimą'
ltContent.ui.comparisonOtherMark = 'KI'
ltContent.ui.guaranteesLegalDelta = 'Kvotos, leidimai, vizos'
ltContent.ui.guaranteesReplacementMetric = '0 $'
ltContent.ui.guaranteesReplacementDelta = 'Greitas pakeitimas pagal garantiją'
ltContent.ui.guaranteesSupportMetric = '„Iki raktų“'
ltContent.ui.guaranteesSupportDelta = 'Nuo atrankos iki pamainos'
ltContent.ui.guaranteesFallbackDelta = 'VW Recruit pranašumas'
ltContent.ui.guaranteesReplacementLabel = 'Garantija starto metu'
ltContent.ui.guaranteesReplacementUnit = '$'
ltContent.ui.guaranteesReplacementWarrantyDays = 30
ltContent.ui.guaranteesReplacementWarrantyLabel = 'dienų garantija'
ltContent.ui.guaranteesReplacementReplyHours = 48
ltContent.ui.guaranteesReplacementReplyLabel = 'valandų atsakymas'
ltContent.ui.guaranteesSupportBadge = 'Viena komanda visam procesui'
ltContent.ui.guaranteesCandidatesDays = 10
ltContent.ui.guaranteesCandidatesDaysLabel = 'dienų iki kandidatų'
ltContent.ui.guaranteesSupportPercentLabel = '% palaikymas'
ltContent.ui.guaranteesOneTeamCount = 1
ltContent.ui.guaranteesOneTeamLabel = 'komanda'
ltContent.ui.guaranteeTimelineStepOne = 'Atranka'
ltContent.ui.guaranteeTimelineStepTwo = 'Dokumentai'
ltContent.ui.guaranteeTimelineStepThree = 'Logistika'
ltContent.ui.guaranteeTimelineStepFour = 'Atvykimas'
ltContent.ui.guaranteeTimelineStepFive = 'Pamaina'
ltContent.ui.guaranteeSupportStepOne = 'Atranka'
ltContent.ui.guaranteeSupportStepTwo = 'Atvykimas'
ltContent.ui.guaranteeSupportNote = 'Pamainos pradžia'
ltContent.ui.guaranteeChecklistQuota = 'Kvotos'
ltContent.ui.guaranteeChecklistPermit = 'Leidimas'
ltContent.ui.guaranteeChecklistVisa = 'Viza'
ltContent.ui.reviewFallbackValue = '7 METAI'
ltContent.ui.reviewLabelPrefix = '7 metai '
ltContent.ui.servicesShortRequestEyebrow = 'Trumpa užklausa'
ltContent.ui.servicesHeroGhostCta = 'Peržiūrėti paslaugos sąlygas'
ltContent.ui.servicesHeroPanelTitle =
  'Įdarbinimas, dokumentai, logistika ir komandos paleidimas viename procese'
ltContent.ui.servicesHeroPanelText =
  'Visas maršrutas sudarytas taip, kad verslas matytų nuspėjamus paleidimo etapus, o kandidatas suprastų, kas vyksta kiekviename žingsnyje.'
ltContent.ui.servicesPillarsEyebrow = 'Ką mes apimame'
ltContent.ui.servicesPillarsTitle =
  'Paslauga sukurta ne kaip "CV paieška", bet kaip pilnas žmonių įvedimo į darbą maršrutas'
ltContent.ui.servicesOfferEyebrow = 'Ką gauna abi pusės'
ltContent.ui.servicesOfferTitle =
  'Modelis, kuriame verslas gauna valdomą rezultatą, o kandidatas mato skaidrų procesą'
ltContent.ui.servicesOfferVisualLabel = 'VW Recruit / maršrutas'
ltContent.ui.servicesOfferVisualPrimary = 'Verslui'
ltContent.ui.servicesOfferVisualSecondary = 'Kandidatams'
ltContent.ui.servicesBeamEyebrow = 'Proceso žemėlapis'
ltContent.ui.servicesRouteEyebrow = 'Kaip vyksta bendradarbiavimas'
ltContent.ui.servicesRouteTitle = 'Skaidrus maršrutas nuo paraiškos iki darbuotojų išėjimo į pamainą'
ltContent.ui.servicesRouteLead =
  'Verslas mato aiškų paleidimo maršrutą su nuspėjamais etapais nuo užklausos iki žmonių išėjimo į pamainą.'
ltContent.ui.servicesProofEyebrow = 'Kodėl tai parduoda'
ltContent.ui.servicesProofTitle =
  'Ne tik įdarbinimas, bet ir valdoma paslauga su aiškiu rezultatu kiekviename etape'
ltContent.ui.servicesFitEyebrow = 'Kur tai veikia geriausiai'
ltContent.ui.servicesFitTitle =
  'Rolės ir nišos, kur tarptautinis įdarbinimas duoda maksimalų operatyvinį efektą'
ltContent.ui.servicesFitLead =
  'Kiekviena kortelė rodo, kur modelis duoda greičiausią operatyvinį rezultatą, švariausią komandos paleidimą ir aukščiausią proceso stabilumą.'
ltContent.ui.servicesFitScoreLabel = 'atitikties lygis'
ltContent.ui.servicesFitMetricOne = 'Paleidimo greitis'
ltContent.ui.servicesFitMetricTwo = 'Stabilumas'
ltContent.ui.servicesFitMetricThree = 'Skaidrumas'
ltContent.ui.servicesFitCardTextOne =
  'Stipriausiai veikia ten, kur svarbios pasikartojančios pamainos, lankomumo disciplina ir greitas mastelio keitimas be paleidimo nesėkmių.'
ltContent.ui.servicesFitCardTextTwo =
  'Gerai tinka sezoniniams pikams, apimčių augimui ir operacijoms, kur verslui kritiškai reikia ritmingo žmonių paleidimo.'
ltContent.ui.servicesFitCardTextThree =
  'Tinka projektams su griežtais terminais, kur reikia sujungti rekrūtingą, dokumentus ir atvykimą be chaoso.'
ltContent.ui.servicesFitCardTextFour =
  'Rodo gerą rezultatą aptarnavimo komandose, kur kritiškai svarbus aiškus maršrutas, greita adaptacija ir starto stabilumas.'
ltContent.ui.servicesLeadEyebrow = 'Pradėti dialogą'
ltContent.ui.servicesLeadText =
  'Darbdaviams tai greitas būdas suprasti, kaip paleisti įdarbinimą. Kandidatams – galimybė gauti sąžiningą paaiškinimą apie įdarbinimo maršrutą ir dokumentus.'
ltContent.ui.servicesSegmentBadgeBusiness = 'B2B'
ltContent.ui.servicesSegmentBadgeCandidate = 'B2C'
ltContent.ui.industriesSectionTitle = 'KURIOMS SFEROMS TINKA ŠIS ĮDARBINIMO MODELIS'
ltContent.ui.industrySliderPrev = 'Ankstesnė skaidrė'
ltContent.ui.industrySliderNext = 'Kita skaidrė'
ltContent.ui.quizSectionLead =
  'Trumpa žingsninė apklausa, kuri padeda greitai surinkti užklausą ir perduoti ją vienodu formatu.'
ltContent.ui.casesSectionLead =
  'Rodyti įdarbinimo paleidimo pavyzdžius gamybai, logistikai, viešbučiams ir kitoms operatyvinėms komandoms.'
ltContent.ui.caseSliderPrev = 'Ankstesnis projektas'
ltContent.ui.caseSliderNext = 'Kitas projektas'
ltContent.ui.casesTimelineSteps = ['Briefingas', 'Paieška', 'Patvirtinimas', 'Dokumentai', 'Atvykimas']
ltContent.ui.industriesFitSummary =
  'Signalai, kurie paprastai reiškia, kad vietinis įdarbinimas jau nespėja su jūsų operacijų tempu ir reikia sistemingesnio komandos formavimo modelio.'
ltContent.ui.caseSubtitlePlaceholder = 'Trumpas projekto aprašymas'
ltContent.ui.caseProblemPlaceholder =
  'Atskiras SEO puslapis projektui su rezultatais, terminais ir tiksliniu veiksmu.'
ltContent.ui.processStepLabel = 'Žingsnis'
ltContent.ui.reportPanelTitle = 'Gaukite medžiagą el. paštu'
ltContent.ui.reportPanelText =
  'Palikite kontaktus, ir mes atsiųsime naudingą medžiagą tarptautinio įdarbinimo ir personalo išlaidų optimizavimo tema.'
ltContent.ui.reportPanelKicker = 'VW Recruit / Analitika'
ltContent.ui.reportPanelReportTitle = 'Darbo rinka 2026'
ltContent.ui.reportPanelReportText =
  'Tarptautinio personalo integracija verslui, susiduriančiam su kadrų trūkumu'
ltContent.ui.reportPanelGuide = 'PDF'
ltContent.ui.videoInsightLabel = 'Video įžvalga'
ltContent.ui.mediaDefaultDuration = '02:00'
ltContent.ui.reviewsPrev = 'Ankstesnis atsiliepimas'
ltContent.ui.reviewsNext = 'Kitas atsiliepimas'
ltContent.ui.genericPageCardOne = 'Bazinis puslapis paruoštas lokalizuotam turiniui'
ltContent.ui.genericPageCardTwo = 'Metaduomenys ir struktūra jau paruošti tolesniam pildymui'
ltContent.ui.genericPageCardThree = 'Kiekvienas maršrutas generuojamas atskirai kiekvienai lokalei'

ltContent.quiz.title = 'Įdarbinimo apskaičiavimas'
ltContent.quiz.progressLabel = 'Žingsnis'
ltContent.quiz.completionTitle = 'Jūsų užklausa paruošta'
ltContent.quiz.completionLead =
  'Gavome jūsų atsakymus. Kitas žingsnis – susisiekti su jumis ir paruošti konsultaciją ar išankstinį skaičiavimą.'
ltContent.quiz.steps = [
  {
    id: 'industry',
    label: 'Kuriai sferai reikia darbuotojų?',
    type: 'options',
    options: ['Gamyba', 'Statyba', 'Sandėliai ir logistika', 'Viešbučiai ir aptarnavimas', 'Kita'],
  },
  {
    id: 'teamSize',
    label: 'Kiek darbuotojų jums reikia?',
    type: 'options',
    options: ['1–10', '11–30', '31–50', '50+'],
  },
  {
    id: 'timeline',
    label: 'Kada komanda turi išeiti į darbą?',
    type: 'options',
    options: ['Skubiai', 'Per 2–4 savaites', 'Per 1–2 mėnesius', 'Kol kas vertinu variantus'],
  },
  {
    id: 'location',
    label: 'Kur yra jūsų verslas?',
    type: 'text',
    fields: [
      { name: 'country', label: 'Šalis', required: true },
      { name: 'city', label: 'Miestas', required: false },
    ],
  },
  {
    id: 'problem',
    label: 'Kokia dabar didžiausia įdarbinimo problema?',
    type: 'options',
    options: ['Didelės atlyginimų išlaidos', 'Personalo trūkumas', 'Kadrų kaita', 'Sezoniniai pikai', 'Gamybos plėtra', 'Kita'],
  },
  {
    id: 'contact',
    label: 'Kur atsiųsti apskaičiavimą?',
    type: 'text',
    fields: [
      { name: 'name', label: 'Vardas', required: true },
      { name: 'company', label: 'Įmonė', required: true },
      { name: 'phone', label: 'Telefonas', required: true },
      { name: 'email', label: 'El. paštas', required: true },
    ],
  },
]

ltContent.services = {
  title: 'Tarptautinio darbuotojų įdarbinimo paslaugos „iki raktų“',
  lead:
    'Uždengiame <strong>operatyvinio personalo trūkumą</strong> verslui ir vedame kandidatus iki <strong>legalaus išėjimo į darbą</strong>: nuo paieškos ir atrankos iki dokumentų, atvykimo ir pamainos paleidimo.',
  intro: '',
  cta: 'Aptarti įdarbinimą verslui',
  metrics: [
    { value: '10', suffix: ' dienų', label: 'iki pirmųjų kandidatų atrankoje' },
    { value: '100', suffix: ' %', label: 'dokumentų ir legalumo palaikymas' },
    { value: '4', suffix: ' etapai', label: 'nuo užklausos iki komandos starto' },
  ],
  heroBadges: [
    { value: '10', suffix: ' dienų', label: 'iki pirmųjų kandidatų' },
    { value: '100', suffix: ' %', label: 'teisinis palaikymas' },
    { value: '„Iki raktų“', suffix: '', label: 'nuo paieškos iki pamainos starto' },
    { value: '1 komanda', suffix: '', label: 'įdarbinimas, dokumentai, logistika' },
  ],
  segments: [
    {
      variant: 'business',
      label: 'Verslui',
      badge: 'B2B',
      title: 'Verslui, kuriam reikia stabilios komandos be kadrų duobių',
      text: 'Tinka įmonėms, kurios negali užpildyti operatyvinių rolių vietiniu įdarbinimu, plečiasi, turi sezoninių pikų ar pavargo nuo didelės personalo kaitos.',
      cta: 'Gauti įdarbinimo planą',
    },
    {
      variant: 'candidate',
      label: 'Kandidatams',
      badge: 'B2C',
      title: 'Kandidatams, norintiems legaliai išvykti dirbti į užsienį',
      text: 'Paprastai paaiškiname etapus: pirminė atranka, dokumentai, atvykimas, adaptacija ir darbo pradžia. Jokių nepermatomų sąlygų ir miglotų pažadų.',
      cta: 'Pateikti paraišką',
    },
  ],
  pillars: [
    {
      title: 'Kandidatų paieška ir atranka',
      text: 'Suformuojame rolės profilį, pradedame paiešką per duomenų bazę ir partnerių tinklą, atmetame silpnus kandidatus ir patvirtinimui pateikiame tik tinkamus žmones.',
    },
    {
      title: 'Dokumentai, leidimai ir legalumas',
      text: 'Tvarkome kvotas, leidimus, vizų ir migracijos procesus, kad darbdavys nepaskęstų biurokratijoje, o kandidatas suprastų, kokiame etape jis yra.',
    },
    {
      title: 'Atvykimas, adaptacija ir pamainos paleidimas',
      text: 'Koordinuojame logistiką, atvykimą, darbo pradžią ir pirmąjį adaptacijos etapą, kad darbuotojai realiai išeitų į objektą sutartu laiku.',
    },
  ],
  timeline: [
    {
      title: 'Briefingas ir modelio apskaičiavimas',
      text: 'Patiksliname žmonių skaičių, roles, grafiką, paleidimo šalį ir projekto apribojimus, po to suformuojame realistinį įdarbinimo scenarijų.',
    },
    {
      title: 'Atranka ir kandidatų patvirtinimas',
      text: 'Pradedame paiešką, atliekame atranką (screening), tikriname dokumentus ir leidžiame jūsų pusei galutinai patvirtinti kandidatus.',
    },
    {
      title: 'Įforminimas ir atvykimo organizavimas',
      text: 'Po patvirtinimo pradedame dokumentų ruošimą, leidimų koordinavimą, logistiką ir žmonių pasirengimą išvykimui.',
    },
    {
      title: 'Išėjimas į darbą ir palaikymas',
      text: 'Po atvykimo koordinuojame pamainos startą, adaptaciją ir komunikaciją tarp verslo, darbuotojų ir atsakingų asmenų objekte.',
    },
  ],
  deliverables: [
    'Vakansijos profilis ir paieškos strategija konkrečiai rolei',
    'Atrinktų kandidatų, paruoštų patvirtinimui, paketas',
    'Visų dokumentinio įforminimo etapų kontrolė',
    'Darbuotojų atvykimo ir komandos paleidimo laiko juosta',
    'Komandos palaikymas darbo pradžioje ir pirmuoju adaptacijos laikotarpiu',
    'Garantinės pakeitimo sąlygos priklausomai nuo projekto formato',
  ],
  offerCards: [
    {
      title: 'Įdarbinimas darbdaviams',
      text: 'Greitas įdarbinimo paleidimas laisvoms vietoms, sezoniniams pikams ar gamybos plėtrai.',
    },
    {
      title: 'Legalus maršrutas kandidatams',
      text: 'Skaidrus atrankos procesas, dokumentų paruošimas ir palaikymas iki faktinio išėjimo į darbą.',
    },
    {
      title: 'Palaikymas po starto',
      text: 'Adaptacija, komunikacija, pakeitimai ir procesų koordinavimas pirmajame komandos darbo etape.',
    },
  ],
  beam: {
    title: 'Kaip įdarbinimo procesas juda nuo užklausos iki žmonių išėjimo į pamainą',
    lead:
      'Vizualinis maršruto žemėlapis, parodantis, kaip briefingas, atranka, patvirtinimas, dokumentai ir komandos paleidimas sujungiami į vieną valdomą procesą.',
    centerLabel: 'Apdorojimas',
    outputLabel: 'Išėjimas į pamainą',
    steps: ['Briefingas', 'Paieška', 'Patvirtinimas', 'Dokumentai', 'Atvykimas'],
  },
  roles: [
    'Darbuotojai gamybos linijoms, pakavimui, rūšiavimui ir pagalbiniams procesams',
    'Sandėlio komandos surinkimui, rūšiavimui, perkėlimui ir logistikos operacijoms',
    'Statybos ir montavimo darbuotojai objektams, kuriuose trūksta personalo',
    'Darbuotojai viešbučiams, virtuvei, kambarių valymui ir aptarnavimo paslaugoms',
  ],
  promise: {
    title: 'Viena komanda atsako už visą kandidato maršrutą',
    text: 'Verslui tai reiškia mažiau chaoso tarp rekrūtingo, dokumentų, logistikos ir žmonių išvedimo į darbą. Gaunate vieną suprantamą sąveikos modelį vietoje atskirų rangovų rinkinio.',
  },
  trust: [
    'Darbdavys mato nuspėjamą komandos paleidimo kelią',
    'Kandidatas gauna legalų ir suprantamą įsidarbinimo maršrutą',
    'Viena komanda koordinuoja rekrūtingą, dokumentus, logistiką ir adaptaciją',
  ],
  form: {
    title: 'Gaukite įdarbinimo planą arba įsidarbinimo konsultaciją',
    lead: 'Užpildykite trumpą formą. Darbdaviui paruošime kitą žingsnį dėl įdarbinimo paleidimo. Kandidatui paaiškinsime maršrutą ir reikalavimus startui.',
    button: 'Gauti konsultaciją',
    note: 'Paprastai atsakome darbo dienos bėgyje.',
  },
}

ltContent.cases = {
  title: 'Tarptautinio įdarbinimo projektai su išmatuojamu operatyviniu rezultatu',
  lead:
    'Realūs scenarijai, kai verslas užpildo personalo trūkumą, pagreitina komandos paleidimą ir gauna nuspėjamą žmonių išėjimo į darbą maršrutą.',
  description:
    'Tarptautinio darbuotojų įdarbinimo projektai: iššūkis, paleidimo modelis, terminai ir rezultatas verslui.',
  eyebrow: 'Projektai',
  intro:
    'Šis puslapis reikalingas ne tik „sėkmės istorijoms“, bet kaip įrodymas, kad modelis veikia realiomis operatyvinėmis sąlygomis: kai trūksta žmonių, vėluojama su terminais ar atsiranda sezoninė apkrova.',
  stats: [
    { value: '3', label: 'detalūs paleidimo atvejai' },
    { value: '4', label: 'pagrindinės verslo sritys' },
    { value: '96', suffix: ' %', label: 'išėjimas į pamainą' },
  ],
  featured: [
    {
      title: 'Delta Pack',
      category: 'Gamyba',
      colSpan: 2,
      subtitle: 'Gamybos įmonė, Centrinė Europa',
      problem:
        'Įmonė ilgą laiką negalėjo stabiliai uždaryti pamainos pakavimo linijoje dėl ilgo vietinio samdymo ir nuolatinės kaitos.',
      solution:
        'Paleidimo modelis apjungė kandidatų paiešką, dokumentų palaikymą, logistiką ir komandos starto koordinavimą į vieną maršrutą.',
      result:
        'Verslas gavo aiškų pamainos paleidimo planą, trumpesnį kandidatų patvirtinimo ciklą ir didesnę projekto starto kontrolę.',
      timeline: 'Pirmieji kandidatai per 7-14 dienų',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Darbuotojai gamybos linijoje',
      metrics: [
        { label: 'Poreikis', value: '32 darbuotojai' },
        { label: 'Formatas', value: 'Pakavimo linija' },
        { label: 'Fokusas', value: 'Stabilus pamainos paleidimas' },
      ],
    },
    {
      title: 'Nord Cargo Hub',
      category: 'Logistika',
      colSpan: 1,
      subtitle: 'Sandėlių kompleksas ir logistika',
      problem:
        'Sandėlis nespėjo dengti piko apkrovų be žmonių rezervo ir nuspėjamo darbuotojų atvykimo grafiko.',
      solution:
        'Atvejo fokusas buvo short-list greitis, dokumentų kontrolė ir žmonių paruošimas išėjimui į pamaininį grafiką.',
      result:
        "Operatyvinė komanda gavo labiau nuspėjamą laiko juostą, kad paruoštų onboarding'ą, prižiūrėtojus ir piko padengimą be chaoso.",
      timeline: 'Greitas paleidimas sezonui',
      image: '/images/industry-logistics.jpg',
      alt: 'Darbuotojai sandėlyje ir logistikoje',
      metrics: [
        { label: 'Poreikis', value: 'Rūšiavimo komanda' },
        { label: 'Formatas', value: 'Sandėlio operacijos' },
        { label: 'Fokusas', value: 'Pasirengimas pikui' },
      ],
    },
    {
      title: 'Urban Build Group',
      category: 'Statyba',
      colSpan: 3,
      subtitle: 'Statybų rangovas',
      problem:
        'Rangovui reikėjo greitai sustiprinti aktyvius objektus neperkeliant dedlainų ir be brigadų komplektavimo nesėkmių.',
      solution:
        'Paieška, leidimai, logistika ir adaptacijos startas buvo sinchronizuoti kaip vienas workflow nuo patvirtinimo iki išėjimo į objektą.',
      result:
        'Klientas gavo modelį, kuris sumažino atotrūkį tarp kandidatų patvirtinimo, dokumentų paruošimo ir faktinio darbų starto.',
      timeline: 'Maršrutas pagal objekto dedlainus',
      image: '/images/industry-construction.jpg',
      alt: 'Darbuotojai statybų aikštelėje',
      metrics: [
        { label: 'Poreikis', value: 'Objektų stiprinimas' },
        { label: 'Formatas', value: 'Statybinės rolės' },
        { label: 'Fokusas', value: 'Starto terminų apsauga' },
      ],
    },
  ],
  convincingTitle: 'Nuo iššūkio iki rezultato: kodėl mūsų patirtis padeda verslui veikti greičiau',
  frameworkTitle: 'Nuo iššūkio iki rezultato: kodėl mūsų patirtis padeda verslui veikti greičiau',
  frameworkLead:
    'Stiprus projektas (case) rodo ne tik rezultatą, bet ir tai, kodėl paleidimo maršrutas buvo realistiškas būtent šiam darbdavio tipui.',
  routeLabel: 'Maršrutas',
  outcomeLabel: 'Rezultatas',
  framework: [
    {
      title: 'Aiškus pradinis iššūkis',
      text: 'Parodome, kur tiksliai vietinis samdymas, sezoniškumas ar kaita sukūrė operatyvinę riziką verslui.',
    },
    {
      title: 'Skaidrus paleidimo modelis',
      text: 'Paaiškiname, kaip atranka, dokumentai, logistika ir darbuotojų išvedimas į darbą buvo sujungti viename procese.',
    },
    {
      title: 'Operatyvinis rezultatas',
      text: 'Išverčiame atvejį į suprantamą verslo kalbą: pamainos stabilumas, paleidimo greitis ir nuspėjamumas objektui.',
    },
  ],
  checklistTitle: 'Kas turi būti kiekviename kitame projekte (case)',
  checklist: [
    'Rolės ir pradinio kadrų iššūkio aprašymas',
    'Atrankos šalies ar paieškos modelio logika',
    'Laiko juosta nuo briefingo iki atvykimo',
    'Pagrindiniai taškai dėl dokumentų ir logistikos',
    'Rezultatas verslui ir aiškus CTA',
  ],
  ctaTitle: 'Reikia paleisti panašų įdarbinimo modelį jūsų komandai?',
  ctaLead:
    'Apibūdinkite kadrų trūkumą, ir mes paruošime įdarbinimo maršrutą, paleidimo terminus bei kitą praktinį žingsnį jūsų verslui.',
}

ltContent.industries = {
  title: 'Sferos, kur tarptautinis įdarbinimas duoda stipriausią operatyvinį efektą',
  lead:
    'Mes orientuojamės į šakas, kur linijinio personalo trūkumas ir didelė kadrų kaita labiausiai stabdo verslo plėtrą.',
  description:
    'Tarptautinis darbuotojų įdarbinimas gamybai, statybai, sandėliams, logistikai, viešbučiams ir aptarnavimo komandoms.',
  eyebrow: 'Sferos',
  intro: '',
  sectorsTitle: 'Pagrindinės sferos, kur modelis duoda greičiausią rezultatą',
  sectorsLead: '',
  stats: [
    { value: '3', label: 'pagrindinės šakos su didžiausiu poveikiu' },
    { value: '1+', label: 'metų kontraktas daugumai komandų' },
    { value: '54 %', label: 'personalo išlaidų mažinimo potencialas' },
  ],
  sectors: [
    {
      title: 'Gamyba',
      colSpan: 2,
      text: 'Stabilios komandos konvejerio linijoms, pakavimo cechams ir rūšiavimo centrams.',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Darbuotojai gamyboje',
      tags: ['Gamybos linijos', 'Pakavimas', 'Rūšiavimas'],
      problem:
        'Nuolatinės „skylės“ pamainose dėl vietinių darbuotojų neatvykimo ir 30-50 % metinės kaitos.',
      solution:
        'Formuojame darbuotojų grupes, kurie atvyksta su kontraktu nuo 1 metų. Tai garantuoja discipliną ir nereikia kas savaitę perkvalifikuoti naujų žmonių.',
      roles: ['Linijų operatoriai', 'Pakuotojai', 'Rūšiuotojai', 'Pagalbiniai darbininkai'],
      points: [
        'Stabilizuojame išėjimą į pamainą be nuolatinio papildomo samdymo',
        'Sumažiname spaudimą pamainų vadovams ir HR komandai',
        'Suteikiame nuspėjamą žmonių paleidimo į darbą ritmą',
      ],
      cta: 'Gauti apskaičiavimą gamybai',
    },
    {
      title: 'Statyba',
      colSpan: 1,
      text: 'Objektų mastelio keitimas be prisirišimo prie kadrų trūkumo vietinėje rinkoje.',
      image: '/images/industry-construction.jpg',
      alt: 'Darbuotojai statybų aikštelėje',
      tags: ['Montavimas', 'Pagalbinės rolės', 'Objektų komandos'],
      problem:
        'Objektų pridavimo terminų žlugdymas dėl negalėjimo greitai rasti 20-50 pagalbinių darbininkų ar montuotojų sezono piko metu.',
      solution:
        'Organizuojame operatyvų suformuotų brigadų atvykimą. Mes prisiimame visą legalizavimą, kad jūsų darbų vadovai užsiimtų statyba, o ne popieriais.',
      roles: ['Pagalbiniai darbininkai', 'Montuotojai', 'Armatūrininkai', 'Betonuotojai'],
      points: [
        'Stipriname aktyvius objektus be terminų žlugdymo',
        'Nuimame administracinę naštą nuo darbų vadovų',
        'Dirbame sezoniniams pikams ir brigadų plėtrai',
      ],
      cta: 'Gauti apskaičiavimą statyboms',
    },
    {
      title: 'Sandėliai ir logistika',
      colSpan: 1,
      text: 'Lankstumas ir galia 3PL operatoriams bei E-komercijai.',
      image: '/images/industry-logistics.jpg',
      alt: 'Darbuotojai sandėlyje ir logistikoje',
      tags: ['Surinkimas', 'Rūšiavimas', 'Prekių perkėlimas'],
      problem:
        'Nenuspėjamumas sezoninių pikų metu ir didelė vietinio personalo „naktinių“ pamainų kaina.',
      solution:
        'Gaunate komandą, kuri pasiruošusi intensyviam pamaininiam grafikui. Personalo išlaidos tampa nuspėjamos ir fiksuotos.',
      roles: ['Rinkėjai (Pickers)', 'Pakuotojai', 'Krovėjai', 'Sandėlio technikos operatoriai'],
      points: [
        'Dirbame sezoninėms bangoms ir dideliam pamainų tempui',
        'Suteikiame didesnį personalo išlaidų nuspėjamumą',
        'Padedame planuoti komandų paleidimą be panikos',
      ],
      cta: 'Gauti apskaičiavimą sandėliui ir logistikai',
    },
    {
      title: 'Viešbučiai ir aptarnavimas',
      colSpan: 2,
      text: 'Stabilios komandos kambarių valymui, virtuvės pagalbai ir kasdienėms aptarnavimo operacijoms.',
      image: '/images/industry-hospitality.jpg',
      alt: 'Personalas viešbučių ir aptarnavimo sferoje',
      tags: ['Kambarių valymas', 'Virtuvės pagalba', 'Aptarnavimo operacijos'],
      problem:
        'Sunku išlaikyti stabilią aptarnavimo komandą piko metu, kai vietinis personalas greitai keičia darbdavį ar neišeina į pamainą.',
      solution:
        'Parenkame darbuotojus ilgesniam darbo horizontui ir kuriame legalų išėjimo į objektą maršrutą, kad operatyvinė komanda negyventų nuolatinio avarinio samdymo režimu.',
      roles: ['Kambarinės', 'Virtuvės darbuotojai', 'Aptarnavimo darbuotojai', 'Universalūs padėjėjai'],
      points: [
        'Sumažiname chaosą kasdieniame pamainų planavime',
        'Stipriname viešbučius ir aptarnavimo objektus sezoninių pikų metu',
        'Suteikiame aiškų ir legalų įsidarbinimo maršrutą',
      ],
      cta: 'Gauti apskaičiavimą viešbučiams ir aptarnavimui',
    },
  ],
  frameworkTitle: 'Kodėl verslas renkasi darbuotojus iš Azijos ir Afrikos?',
  frameworkLead:
    'Tai ne „pigesnio pakeitimo“ klausimas, o komandos stabilumo, motyvacijos ir nuspėjamo ilgo darbo ciklo objekte klausimas.',
  framework: [
    {
      title: 'Aukšta motyvacija',
      text: 'Kandidatams iš šių regionų darbas Europoje – tai šansas geresnei ateičiai, todėl jie labiau vertina darbo vietą ir rečiau keičia įmonę po mėnesio.',
    },
    {
      title: 'Disciplina',
      text: 'Daugelyje Azijos šalių darbo kultūra paremta pagarba hierarchijai, aiškioms instrukcijoms ir stabiliu pasikartojančių operacijų vykdymu.',
    },
    {
      title: 'Ilgalaikiškumas',
      text: 'Darbuotojai atvyksta su tikslinėmis vizomis ilgam laikui, o tai pašalina sezoninio personalo dingimo ir nuolatinio samdymo perkrovimo problemą.',
    },
  ],
  fitTitle: 'Kada jums tikrai reikia tarptautinio įdarbinimo?',
  fitLead:
    'Jei atpažįstate savo situaciją šiuose signaluose, vietinis samdymas greičiausiai jau nebesprendžia problemos sistemiškai.',
  fitSignals: [
    'Kadrų kaita virš 20 %: praleidžiate daugiau laiko interviu nei gamybos valdymui.',
    'Perkaitusi vietinė rinka: vietinių kandidatų atlyginimų lūkesčiai auga, o produktyvumas – ne.',
    'Naujų objektų ar linijų planavimas: bijote paleisti naujus pajėgumus, nes nėra kam dirbti.',
    'Samdymo kaina auga: vietinės agentūros ima didelius komisinius, o žmonės išeina po savaitės.',
  ],
  ctaTitle: 'Reikia paleidimo plano konkrečiai sferai?',
  ctaLead:
    'Parašykite, kokia jūsų niša, komandos dydis ir paleidimo terminai, o mes patarsime geriausią įdarbinimo modelį būtent šiai operacijai.',
  seoTitle: 'Tarptautinis personalo įdarbinimas gamybai, sandėliams ir statyboms',
  seoText:
    'VW Recruit specializuojasi kompleksiškai sprendžiant kadrų trūkumo problemą Europos verslui. Užtikriname linijinio personalo atranką sandėliams, gamykloms ir statybų aikštelėms, naudodamiesi šalių su pertekliniu darbo potencialu, ypač Filipinų, Indijos, Vietnamo ir Afrikos šalių, resursais. Mūsų modelis apima ne tik rekrūtingą, bet ir pilną dokumentinį palaikymą, logistiką bei darbuotojų adaptaciją objekte, kas leidžia klientams sumažinti operatyvines personalo išlaidas iki 54 %.',
}

ltContent.report = {
  title: 'Darbo rinka 2026: kai vietinis įdarbinimas nebeištempia',
  lead:
    'Analitinė ataskaita darbdaviams, norintiems suprasti realias tarptautinio įdarbinimo išlaidas, terminus ir teisinius niuansus.',
  description:
    'Atsisiųskite ataskaitą apie tarptautinį darbuotojų įdarbinimą, personalo išlaidas, teisines rizikas ir komandos paleidimą.',
  eyebrow: 'Ataskaita',
  intro:
    'Tai ne šiaip PDF „dėl vaizdo“, o turinys, kuris paverčia susidomėjimą dalykišku pokalbiu apie išlaidas, paleidimo terminus, legalumą ir verslo pasirengimą tarptautiniam samdymui.',
  stats: [
    { value: '1', label: 'praktinė analitinė ataskaita' },
    { value: '5', label: 'pagrindinės įžvalgos viduje' },
    { value: '1', label: 'aiškus konversijos veiksmas' },
  ],
  pointsTitle: 'Kas yra ataskaitos viduje',
  points: [
    'Išlaidų palyginimo logika: vietinis samdymas vs tarptautinis įdarbinimas',
    'Dažniausios teisinės klaidos samdant užsieniečius',
    "Kaip paruošti operaciją onboarding'ui ir adaptacijai",
    'Kas realiai įtakoja paleidimo terminus nuo briefo iki išėjimo į pamainą',
    'Kaip sumažinti kadrų spaudimą darbinėse ir operatyvinėse rolėse',
  ],
  benefitsTitle: 'Kodėl verslas prašo šios ataskaitos',
  benefitsLead:
    'Ataskaita ypač naudinga tada, kai įmonė jau jaučia kadrų spaudimą ir jai reikia ne abstrakčios informacijos, o aiškaus sprendimo modelio.',
  benefits: [
    {
      title: 'Greitesnis vidinis suderinimas',
      text: 'Padeda savininkui, operacijoms ir HR kalbėti viena kalba apie realų atrankos paleidimo maršrutą.',
    },
    {
      title: 'Aiškus išlaidų matymas',
      text: 'Leidžia blaiviau palyginti atlyginimų spaudimą, paleidimo terminus ir komandos nepertraukiamumo rizikas.',
    },
    {
      title: 'Geresnis perėjimas prie kito žingsnio',
      text: 'Perkelia susidomėjimą iš lygio „pažiūrėti“ į dalykinę konsultaciją su konkrečiais apribojimais ir terminais.',
    },
  ],
  trustTitle: 'Kas daro šią ataskaitą tikrai naudingą',
  trustLead:
    'Stipri analitinė medžiaga neturi būti bendras HR turinys. Ji turi tiesiogiai atsakyti į verslo problemą, dėl kurios žmogus palieka formą.',
  trustPoints: [
    'Sukurta aplink kadrų spaudimą operatyviniame versle, o ne bendrą teoriją',
    'Paruošta kaip bazė pirmai konsultacijai ar pardavimo (sales) pokalbiui',
    'Naudinga darbdaviams, kurie vertina, ar modelis tinka jų objektui ir terminams',
  ],
  faqTitle: 'Klausimai prieš atsisiunčiant',
  faq: [
    {
      q: 'Kam skirta ši ataskaita?',
      a: 'Darbdaviams gamybos, logistikos, statybos, viešbučių ir aptarnavimo sferoje bei kituose operatyviniuose versluose, turinčiuose kadrų trūkumą ar atlyginimų spaudimą.',
    },
    {
      q: 'Ar tai tiesiog bendras PDF?',
      a: 'Ne. Ataskaita turi padėti priimti realų kadrų sprendimą ir paruošti dalykinį pokalbį apie paleidimo modelį, terminus ir apribojimus.',
    },
    {
      q: 'Kas vyksta išsiuntus formą?',
      a: "Žmogus gauna PDF išdavimo maršrutą ir tuo pačiu tampa kvalifikuotu lead'u tolesnei konsultacijai dėl įdarbinimo poreikio.",
    },
  ],
  ctaTitle: 'Gaukite ataskaitą ir supraskite savo kitą kadrų žingsnį',
  ctaLead:
    'Palikite kontaktus, ir mes atsiųsime PDF, taip pat padėsime įvertinti, ar tarptautinio įdarbinimo modelis tinka jūsų dabartiniam personalo trūkumui.',
  formTitle: 'Gauti ataskaitą',
  formLead:
    'Užpildykite trumpą formą, kad gautumėte PDF ir pereitumėte prie dalykiškesnio pokalbio apie personalo išlaidas, paleidimo terminus ir teisinį pasiruošimą.',
  formNote: 'Naudingiausia darbdaviams, planuojantiems įdarbinimą, pakeitimą ar komandos plėtrą.',
}
