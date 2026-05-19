import { createLocaleContent } from '../create-locale-content.js'

export const etContent = createLocaleContent({
  code: 'et',
  name: 'Estonian',
  nativeName: 'Eesti',
  translated: true,
  homeLabel: 'Avaleht',
  heroTitle: 'Rahvusvaheline värbamine ettevõtetele, kes vajavad operatiivtöötajaid ilma viivitusteta.',
  heroLead:
    'Veebisaidi struktuur on juba ette valmistatud müügivihjete (lead) genereerimiseks, mitmekeelseks SEO kasvuks, küsimustikeks, juhtumiuuringuteks ja konsultatiivseteks CTA-deks B2B klientidele.',
})

etContent.site.description =
  'Vähendage personalikulusid kuni 54% tänu Aasia ja Aafrika töötajate "võtmed kätte" rahvusvahelisele värbamisele.'

etContent.navigation.items = [
  { key: 'home', label: 'Avaleht' },
  { key: 'services', label: 'Teenused' },
  { key: 'industries', label: 'Valdkonnad' },
  { key: 'cases', label: 'Projektid' },
  { key: 'report', label: 'Raport' },
  { key: 'contacts', label: 'Kontaktid' },
]

etContent.navigation.primaryCta = 'Arvuta värbamiskulu'
etContent.navigation.secondaryCta = 'Broneeri kõne'

etContent.home = {
  meta: {
    title: 'Rahvusvaheline töötajate värbamine ettevõtetele',
    description:
      'Vähendage personalikulusid ja lahendage töötajate puudus Aasia ja Aafrika töötajate "võtmed kätte" rahvusvahelise värbamise abil.',
  },
  hero: {
    lines: ['VÄHENDAGE', 'PERSONALIKULUSID'],
    highlight: 'KUNI 54%',
    lead:
      'tänu Aasia ja Aafrika töötajate <strong>"võtmed kätte"</strong> rahvusvahelisele värbamisele',
    stats: [
      { value: 10, suffix: ' PÄEVA', label: 'esimeste kandidaatide valikuni' },
      { value: 7, suffix: ' AASTAT', label: 'kogemust rahvusvahelises värbamises' },
      { value: 100, suffix: ' %', label: 'dokumentide ja saabumise tugi' },
    ],
    video: {
      src: '/videos/international-recruitment-overview.mp4',
      poster: '/video-poster-home.svg',
      type: 'video/mp4',
    },
  },
  comparison: {
    eyebrow: 'Värbamismudelite võrdlus',
    title: 'Kuidas ettevõtted kaotavad tööjõupuuduse tõttu kohalikul turul',
    cards: [
      {
        title: 'Teised',
        brandNote: 'kohalik värbamine / teised agentuurid',
        amount: '$36 000',
        period: '/ kuu',
        note: '30 töötajaga meeskonnale',
        variant: 'other',
        rows: [
          {
            title: 'Heade kandidaatide puudus',
            text: 'Kümned ettevõtted võistlevad samaaegselt samade heade töötajate pärast.',
          },
          {
            title: 'Vabad kohad jäävad kauemaks avatuks',
            text: 'Kuni otsing kestab, töötab meeskond ülekoormuse all.',
          },
          {
            title: 'Pidev korduvvärbamine',
            text: 'Tööjõupuuduse tõttu pöördub ettevõte pidevalt tagasi otsingute juurde.',
          },
        ],
      },
      {
        title: 'VW Recruit',
        brandNote: 'tööjõupuuduse süstemaatiline lahendamine',
        amount: '$18 000',
        period: '/ kuu',
        note: '30 töötajaga meeskonnale',
        variant: 'brand',
        rows: [
          {
            title: 'Juurdepääs laiemale kandidaatide reservile',
            text: 'Töötame väljaspool kohaliku turu tööjõupuuduse piire.',
          },
          {
            title: 'Kiire juurdepääs kandidaatidele',
            text: 'Esimesed sobivad inimesed juba 7–14 päevaga.',
          },
          {
            title: 'Fookus äritegevuse järjepidevusele',
            text: 'Täidate vabad kohad kiiremini, kuni konkurendid veel otsivad.',
          },
        ],
      },
    ],
    cta: 'Sulge tööjõupuudus',
  },
  industries: {
    eyebrow: 'Millistele valdkondadele see mudel sobib',
    title: 'Enamasti kasutatakse seda värbamismudelit operatiivtöödeks',
    lead:
      'Loome meeskondi tootmise, ladude, ehituse ja teeninduse jaoks, kui ettevõte vajab prognoositavat käivitamist ja madalamaid personalikulusid.',
    items: [
      {
        title: 'Laod ja logistika',
        text: 'Meeskondade loomine komplekteerimiseks, pakkimiseks, kauba teisaldamiseks ja laooperatsioonideks.',
      },
      {
        title: 'Ehitus',
        text: 'Töötajate värbamine ehitusobjektidele, montaaži-, abi- ja tehnilisteks töödeks.',
      },
      {
        title: 'Hotellid ja teenindus',
        text: 'Personali värbamine koristamiseks, kööki, hoolduseks ja igapäevasteks operatiivtegevusteks.',
      },
      {
        title: 'Tootmine',
        text: 'Töötajate värbamine tootmisliinidele, pakkimiseks, sorteerimiseks ja abiprotsessideks.',
      },
    ],
  },
  calculator: {
    eyebrow: 'Kalkulaator',
    title: 'Arvutage oma ettevõtte värbamiskulud',
    lead:
      'Vastake mõnele lühikesele küsimusele ja saage oma ettevõtte meeskonna värbamise kalkulatsioon.',
  },
  casesSection: {
    eyebrow: 'Meie projektid',
    title: 'Meie töötajate värbamise projektid',
    lead:
      'Näitame, kuidas näeb välja värbamine reaalsetes projektides: alates tootmisest ja ladudest kuni teeninduse ja operatiivmeeskondadeni.',
    cta: 'Kõik projektid',
    items: [
      {
        title: 'Delta Pack',
        subtitle: 'Tootmisettevõte, Kesk-Euroopa',
        problem: 'Lahendasime 32 töötaja puuduse pakkimisliinil pärast pikka kohalikku värbamist ja suurt voolavust.',
        image: '/images/industry-manufacturing.jpg',
        alt: 'Töötajad tootmisliinil',
      },
      {
        title: 'Nord Cargo Hub',
        subtitle: 'Laokompleks ja logistika',
        problem: 'Panime kokku vahetustega meeskonna komplekteerimiseks ja sorteerimiseks, kui ettevõte ei suutnud tippkoormustega toime tulla.',
        image: '/images/industry-logistics.jpg',
        alt: 'Töötajad laos ja logistikas',
      },
      {
        title: 'Urban Build Group',
        subtitle: 'Ehitusettevõtja',
        problem: 'Tugevdasime objekte monteerijate ja abitöölistega, et mitte rikkuda uue ehitusetapi käivitamise tähtaegu.',
        image: '/images/industry-construction.jpg',
        alt: 'Töötajad ehitusplatsil',
      },
    ],
  },
  process: {
    eyebrow: 'Mis juhtub pärast päringu esitamist',
    title: 'Mis järgneb teie päringule',
    intro:
      'Täpsustame töötajate arvu, nõudeid kandidaatidele ja meeskonna käivitamise tähtaegu. Seejärel algab värbamine meie andmebaasi ja sihtriikide partneragentuuride kaudu.',
    steps: [
      {
        title: 'Vabade töökohtade analüüs ja värbamise algus',
        text: 'Loome kandidaadi profiili, lepime kokku tähtajad ja alustame otsingut asjakohastest allikatest.',
      },
      {
        title: 'Kandidaatide valik ja kontroll',
        text: 'Kandidaadid läbivad eelvaliku, dokumentide kontrolli ja põhiintervjuu. Ettevõte saab profiilid lõplikuks kinnitamiseks.',
      },
      {
        title: 'Dokumentide vormistamine',
        text: 'Korraldame kõigi tööleasumiseks ja saabumiseks vajalike dokumentide ettevalmistamise ning kontrollime protsessi kuni täieliku valmisolekuni.',
      },
      {
        title: 'Saabumine ja töö alustamine',
        text: 'Koordineerime logistikat ja töötajate saabumist. Pärast saabumist alustab meeskond tööd ettevõttes.',
      },
    ],
  },
  guarantees: {
    eyebrow: 'Garantiid ja turvalisus',
    title: 'Mida ettevõte koos värbamisega saab',
    items: [
      {
        title: '100% legaalsus',
        text: 'Võtame vastutuse kvootide, töölubade ja viisaprotsesside eest, et ettevõte oleks kontrollide eest kaitstud.',
      },
      {
        title: 'Tasuta asendamine',
        text: 'Pakume garantiiaega kandidaadi asendamiseks, kui projekt nõuab stabiilsust stardis.',
      },
      {
        title: 'Täielik "võtmed kätte" tugi',
        text: 'Alates intervjuust Aasias kuni lennujaamas vastuvõtmise ja vahetusse astumiseni koos kohanemis- ja suhtlustoe.',
      },
    ],
  },
  reportBlock: {
    eyebrow: 'Analüütiline materjal',
    title: 'Miks kohalik värbamine kaotab oma efektiivsuse?',
    lead:
      'Hankige suletud analüütiline raport "Tööturg 2026: Rahvusvahelise personali integratsioon".',
    points: [
      'Kulude võrdlustabel: Kohalik turg vs Ekspatid',
      '5 juriidilist viga välismaalaste palkamisel',
      'Kuidas ületada keelebarjääri tootmises',
    ],
    cta: 'Laadi raport alla PDF-ina',
  },
  reviews: {
    eyebrow: 'Usaldus',
    title: 'Turuliidrid usaldavad meid',
    items: [
      {
        name: 'Oleksandr Koval',
        company: 'Operatsioonide juht, Delta Pack',
        text: 'VW Recruit lahendas meie töötajate puuduse tootmisliinil ilma meie sisemist HR-i üle koormamata. Kõige väärtuslikum oli see, et meeskond võttis enda kanda nii värbamise kui ka dokumentatsiooni.',
      },
      {
        name: 'Iryna Melnyk',
        company: 'HR Lead, Nord Cargo Hub',
        text: 'Saime mitte ainult kandidaadid, vaid ka selge protsessi meeskonna käivitamiseks. Logistika, load ja koordineerimine olid kontrolli all, nii et ladu sisenes hooaega tõrgeteta.',
      },
      {
        name: 'Taras Humeniuk',
        company: 'Projektijuht, Urban Build Group',
        text: 'Meie jaoks oli oluline kiiresti tugevdada objekte inimestega, kes reaalselt vahetusse ilmuvad. VW Recruit pakkus tähtaegade prognoositavust ja tugevat tuge isegi pärast kandidaatide saabumist.',
      },
      {
        name: 'Maryna Savchuk',
        company: 'People Partner, East Service Group',
        text: 'Pärast koostöö algust lõpetasime personaliprobleemide käsitsi "kustutamise". VW Recruiti meeskond sünkroniseeris kiiresti nõuded, värbamisriigid ja inimeste objektile jõudmise tähtajad.',
      },
      {
        name: 'Vitali Bondar',
        company: 'Operatsioonide juht, Metal Works',
        text: 'Meile meeldis just prognoositavuse tase. Ettevõte teadis, millal kandidaadid saabuvad, millised dokumendid on juba valmis ja millises etapis on iga töötaja.',
      },
      {
        name: 'Natalia Tšernenko',
        company: 'HR-direktor, West Line Logistics',
        text: 'Logistika jaoks on vahetuste käivitamise kiirus kriitiline. VW Recruitiga saime mitte ainult värbamise, vaid ka normaalse operatiivse toe kuni inimeste tööleasumiseni.',
      },
    ],
    metrics: [
      {
        value: '7 AASTAT',
        label: 'Kogemust rahvusvahelises värbamises',
      },
      {
        value: '100%',
        label: 'Dokumentide ja juriidilise vormistamise kontroll',
      },
      {
        value: '10 PÄEVA',
        label: 'Esimeste kandidaatideni värbamises',
      },
      {
        value: 'VÕTMED KÄTTE',
        label: 'Tugi valikust kuni vahetusse astumiseni',
      },
    ],
  },
  media: {
    eyebrow: 'Video ja vastused',
    title: 'Vastused ettevõtete omanike peamistele küsimustele',
    reels: [
      {
        title: 'Kui kaua aega võtab rahvusvahelise värbamise käivitamine?',
        text: 'Selgitame, millal ettevõte saab esimesed kandidaadid, mis mõjutab tähtaegu ja millises etapis liitub dokumentide tugi.',
        meta: 'Käivitamise ajatelg',
        duration: '02:14',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Kuidas ettevõte kontrollib legaalsust ja dokumente?',
        text: 'Selgitame lahti, millised kvoodid, load ja viisaprotsessid me enda kanda võtame, et ettevõte ei kannaks kontrolle oodates riske.',
        meta: 'Dokumendid ja legaalsus',
        duration: '03:02',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Mis juhtub pärast töötajate saabumist projekti?',
        text: 'Näitame, kuidas näeb välja kohanemine, vahetuse algus, suhtlus koordinaatoritega ja meeskonna tugi esimeses etapis.',
        meta: 'Kohanemine ja tugi',
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
    title: 'Korduma kippuvad küsimused',
    items: [
      {
        q: 'Kuidas lahendatakse keelebarjääri probleem?',
        a: 'Kaasame kohanemise, põhikoolituse ja suhtluse koordinaatori või meistri kaudu, et meeskond sulanduks kiiresti töösse.',
      },
      {
        q: 'Kes otsib töötajatele majutust?',
        a: 'Mudel võib hõlmata majutuse, logistika ja saabumise koordineerimist sõltuvalt koostööformaadist ja käivitamisriigist.',
      },
      {
        q: 'Mida teha, kui töötaja haigestub või ei ilmu vahetusse?',
        a: 'Projekti alguses lepitakse kokku reserv, garantiitingimused asendamiseks ja kiire suhtlemise kord teie poolega.',
      },
    ],
  },
  finalCta: {
    title: 'Kas olete valmis lahendama töötajate puuduse ja laiendama oma äri?',
    lead: 'Broneerige tasuta 30-minutiline Zoom-kohtumine meie värbamisjuhiga (Head of Recruitment).',
  },
}

etContent.forms.lead.title = 'Saa värbamise kalkulatsioon'
etContent.forms.lead.success = 'Aitäh. Teie päring on salvestatud ja me võtame teiega värbamise osas ühendust.'
etContent.forms.callback.title = 'Broneeri kõne'
etContent.forms.callback.success = 'Aitäh. Teie kõnesoov on salvestatud.'
etContent.forms.report.title = 'Hankige raport'
etContent.forms.report.success = 'Aitäh. Oleme teie päringu kätte saanud ja saadame PDF-dokumendi peagi teie e-posti aadressile.'
etContent.forms.contact.title = 'Saada päring'
etContent.forms.contact.success = 'Aitäh. Teie päring on vastu võetud ja VW Recruiti meeskond võtab teiega järgmise sammu osas ühendust.'
etContent.brand.tagline = 'Rahvusvaheline värbamispartner'
etContent.brand.homeAriaLabel = 'VW Recruit avaleht'

etContent.about = {
  meta: {
    title: 'Teave VW Recruiti kohta',
    description:
      'Lisateave VW Recruiti, rahvusvahelise töötajate värbamise, meeskonna käivitamise teekonna ja ettevõtetega koostöö lähenemisviisi kohta.',
  },
  title: 'VW Recruitist',
  lead:
    'Aitame ettevõtetel lahendada töötajate puudust Aasia ja Aafrika töötajate rahvusvahelise värbamise kaudu, pakkudes selget teekonda päringust kuni inimeste vahetusse astumiseni.',
}

etContent.faqPage = {
  meta: {
    title: 'KKK tööandjatele',
    description:
      'Vastused tööandjate peamistele küsimustele rahvusvahelise värbamise kohta: tähtajad, dokumendid, meeskonna käivitamine, kohanemine ja koostööformaat.',
  },
  title: 'KKK tööandjatele',
  lead:
    'Oleme kogunud peamised küsimused rahvusvahelise töötajate värbamise kohta: alates käivitamise tähtaegadest ja dokumentidest kuni majutuse, kohanemise ja toe loogikani.',
}

etContent.privacy = {
  meta: {
    title: 'Privaatsuspoliitika',
    description:
      'Tutvuge VW Recruiti privaatsuspoliitikaga isikuandmete kogumise, töötlemise ja kaitsmise kohta veebisaidil.',
  },
  title: 'Privaatsuspoliitika',
  sections: [
    {
      title: '1. Üldsätted',
      paragraphs: [
        'Käesolev privaatsuspoliitika määrab kindlaks VW Recruiti veebisaidi (edaspidi "Veebisait") kasutajate isikuandmete kogumise, kasutamise, säilitamise ja kaitsmise korra. Meie Veebisaiti kasutades nõustute käesoleva poliitika tingimustega. Kui te nende tingimustega ei nõustu, palun lõpetage Veebisaidi kasutamine.',
      ],
    },
    {
      title: '2. Milliseid andmeid me kogume',
      paragraphs: ['Veebisaidi kasutamisel võime koguda järgmisi isikuandmeid:'],
      items: [
        'Kontaktandmed: nimi, ettevõtte nimi, e-posti aadress, telefoninumber. Need andmed esitate vabatahtlikult vormide täitmisel (nt "Broneeri kõne", "Hankige raport", "Arvuta värbamiskulu").',
        'Tehnilised andmed: IP-aadress, brauseri tüüp, seadme tüüp, lehe külastuse andmed (küpsiste ja analüütiliste tööriistade abil).',
      ],
    },
    {
      title: '3. Andmete kogumise ja kasutamise eesmärk',
      paragraphs: ['Kogutud isikuandmeid kasutatakse selleks, et:'],
      items: [
        'Teiega ühendust võtta rahvusvahelise värbamise teenuste alasteks konsultatsioonideks.',
        'Saata soovitud materjale (nt PDF-raportid, kulukalkulatsioonid).',
        'Parandada Veebisaidi toimimist ja analüüsida meie turunduskampaaniate efektiivsust.',
        'Saata olulisi teateid ja kommertspakkumisi (teie nõusolekul).',
      ],
    },
    {
      title: '4. Andmete edastamine kolmandatele isikutele',
      paragraphs: [
        'Me ei müü, vaheta ega edasta teie isikuandmeid kolmandatele isikutele ilma teie nõusolekuta, välja arvatud seaduses ettenähtud juhtudel. Andmetele võivad juurde pääseda meie usaldusväärsed töövõtjad (nt majutusteenuse pakkujad, e-posti turundusteenused), kes on kohustatud hoidma nende konfidentsiaalsust.',
      ],
    },
    {
      title: '5. Andmete kaitse ja säilitamine',
      paragraphs: [
        'Rakendame asjakohaseid tehnilisi ja korralduslikke meetmeid teie andmete kaitsmiseks loata juurdepääsu, muutmise, avalikustamise või hävitamise eest. Andmeid säilitatakse ainult nii kaua, kui see on vajalik käesolevas poliitikas nimetatud eesmärkide täitmiseks või vastavalt seaduse nõuetele.',
      ],
    },
    {
      title: '6. Kasutajate õigused',
      paragraphs: ['Teil on õigus:'],
      items: [
        'Saada juurdepääs oma isikuandmetele, mida me säilitame.',
        'Nõuda teie andmete ebatäpsuste parandamist.',
        'Nõuda oma andmete kustutamist ("õigus olla unustatud").',
        'Igal ajal tagasi võtta andmete töötlemise nõusolek.',
      ],
    },
    {
      title: '7. Küpsiste (Cookies) kasutamine',
      paragraphs: [
        'Meie Veebisait kasutab küpsiseid lehtede nõuetekohase toimimise, liikluse analüüsi ja kasutajakogemuse parandamise tagamiseks. Saate küpsiste salvestamise konfigureerida või keelata oma brauseri seadetes.',
      ],
    },
    {
      title: '8. Privaatsuspoliitika muudatused',
      paragraphs: [
        'Jätame endale õiguse käesolevat poliitikat uuendada. Muudatused jõustuvad nende avaldamise hetkest sellel lehel.',
      ],
    },
    {
      title: '9. Kontaktid',
      paragraphs: [
        'Kui teil on küsimusi seoses käesoleva privaatsuspoliitikaga või soovite kasutada oma isikuandmetega seotud õigusi, võtke meiega ühendust Veebisaidi kontaktivormi kaudu või e-posti teel: partners.vizarecruting.com@gmail.com.',
      ],
    },
  ],
}

etContent.terms = {
  meta: {
    title: 'Kasutustingimused',
    description:
      'Tutvuge VW Recruiti veebisaidi kasutustingimustega, vormide kaudu suhtlemise reeglitega ja veebisaidil teabe esitamise põhiprintsiipidega.',
  },
  title: 'Kasutustingimused',
  sections: [
    {
      title: '1. Üldsätted',
      paragraphs: [
        'Käesolevad kasutustingimused (edaspidi "Tingimused") reguleerivad juurdepääsu VW Recruiti veebisaidile (edaspidi "Veebisait") ja selle kasutamist. Seda Veebisaiti avades ja sirvides nõustute täielikult käesolevate Tingimustega.',
      ],
    },
    {
      title: '2. Ettevõtte teenused',
      paragraphs: [
        'Veebisait on eranditult informatiivne ja loodud selleks, et tutvustada kasutajatele rahvusvahelise töötajate värbamise teenuseid ning anda võimalus jätta päring konsultatsioonideks, kalkulatsioonideks või analüütilisteks materjalideks. Vormi täitmine veebisaidil ei tähenda teenuste osutamise lepingu sõlmimist; lepingulised suhted vormistatakse eraldi pärast individuaalset kokkulepet.',
      ],
    },
    {
      title: '3. Kasutaja kohustused',
      paragraphs: ['Kasutaja kohustub:'],
      items: [
        'Esitama Veebisaidil vormide täitmisel tõest teavet (nimi, ettevõtte kontaktandmed).',
        'Mitte kasutama Veebisaiti ebaseaduslikeks, petturlikeks tegevusteks ega pahavara levitamiseks.',
        'Mitte püüdma saada loata juurdepääsu Veebisaidi haldussüsteemidele.',
      ],
    },
    {
      title: '4. Intellektuaalne omand',
      paragraphs: [
        'Kõik Veebisaidil asuvad materjalid, sealhulgas tekstid (teenuste kirjeldused, juhtumiuuringud, raportid), pildid, logod ("VW Recruit"), graafika ja disainistruktuur, on ettevõtte omand või neid kasutatakse litsentsi alusel. Veebisaidi materjalide igasugune kopeerimine, levitamine või kasutamine ärilistel eesmärkidel ilma autoriõiguse omaniku eelneva kirjaliku nõusolekuta on keelatud.',
      ],
    },
    {
      title: '5. Vastutusest loobumine',
      paragraphs: [
        'Teave Veebisaidil on esitatud "nagu on" põhimõttel. Püüame hoida andmeid ajakohasena (nt teave tähtaegade, kulude või asendusgarantiide kohta), kuid täpsed koostöötingimused on fikseeritud eranditult individuaalses lepingus.',
        'Ettevõte ei vastuta Veebisaidi võimalike tehniliste tõrgete või sellele juurdepääsu ajutise võimatuse eest.',
        'Veebisait võib sisaldada linke kolmandate osapoolte ressurssidele. Me ei vastuta selliste väliste ressursside sisu ja privaatsuspoliitika eest.',
      ],
    },
    {
      title: '6. Kasutustingimuste muudatused',
      paragraphs: [
        'Veebisaidi administratsioon jätab endale õiguse teha käesolevatesse Tingimustesse igal ajal muudatusi ilma kasutajaid eelnevalt isiklikult teavitamata. Tingimuste uuendatud versioon jõustub sellel lehel avaldamise hetkest. Soovitame seda jaotist regulaarselt kontrollida.',
      ],
    },
    {
      title: '7. Vaidluste lahendamine',
      paragraphs: [
        'Kõik selle Veebisaidi kasutamisega seotud vaidlused lahendatakse läbirääkimiste teel. Kokkuleppe mittesaavutamisel vaadatakse vaide läbi vastavalt kehtivatele seadustele [märkige riik või jurisdiktsioon].',
      ],
    },
    {
      title: '8. Tagasiside',
      paragraphs: [
        'Kõigi Veebisaidi toimimise või koostöötingimustega seotud küsimustega pöörduge meie poole lehel "Kontaktid" oleva vormi kaudu või aadressil: partners.vizarecruting.com@gmail.com.',
      ],
    },
  ],
}

etContent.contacts = {
  meta: {
    title: 'VW Recruiti kontaktid',
    description:
      'Võtke ühendust VW Recruitiga rahvusvahelise töötajate värbamise, meeskonna käivitamise, dokumentide ja koostööformaadi osas.',
  },
  title: 'Kontaktid ettevõtetele, kes peavad kiiresti lahendama töötajate puuduse',
  summary: [
    {
      label: 'Vastus',
      value: 'tööpäeva jooksul',
    },
    {
      label: 'Formaat',
      value: 'kõne, Zoom või e-post',
    },
    {
      label: 'Fookus',
      value: 'tööandjad ja operatiivmeeskonnad',
    },
  ],
  channelsTitle: 'Kuidas on kõige mugavam alustada',
  channelsLead:
    'Valige formaat, mis teile praegu kõige paremini sobib. Kui teil pole veel lõplikku lähteülesannet (briefi), võite alustada lühikesest kõnest ja hiljem detailide juurde minna.',
  channels: [
    {
      icon: 'brief',
      label: 'Värbamispäring',
      title: 'Jätke päring vastavalt oma vajadustele',
      text: 'Kõige mugavam variant, kui teate juba rolle, ligikaudset töötajate arvu või meeskonna käivitamise soovitud tähtaega.',
      actionLabel: 'Ava vorm',
      actionType: 'anchor',
      actionTarget: '#contact-form',
    },
    {
      icon: 'call',
      label: 'Kiire sünkroniseerimine',
      title: 'Broneerige lühike kõne meeskonnaga',
      text: 'Sobib, kui peate kiiresti aru saama, kas rahvusvaheline värbamine sobib just teie juhtumiga ja millised on järgmised sammud.',
      actionLabel: 'Broneeri kõne',
      actionType: 'modal',
      actionTarget: 'callback',
    },
    {
      icon: 'documents',
      label: 'Käivitamise teekond',
      title: 'Täpsustage dokumente, tähtaegu ja loogikat',
      text: 'Selgitame protsessi alates kandidaatide valikust ja kinnitamisest kuni dokumentide, logistika, saabumise ja inimeste vahetusse astumiseni.',
    },
  ],
  checklistTitle: 'Mida on kasulik enne ühenduse võtmist ette valmistada',
  checklistLead:
    'Ideaalne lähteülesanne (brief) pole nõutav. Isegi põhiteave aitab kiiremini asjaliku vestluseni jõuda.',
  checklist: [
    'Milliseid konkreetseid rolle või osakondi on vaja tugevdada',
    'Ligikaudne töötajate arv ja soovitud algustähtaeg',
    'Riik ja linn, kus meeskond tööle hakkab',
    'Kas vajate ainult värbamist või täielikku tuge kuni käivitamiseni',
  ],
  supportTitle: 'Mida meeskond saab juba esimesel kontaktil selgitada',
  supportLead:
    'Esimene kontakt pole formaalsus, vaid selleks, et kõrvaldada ebakindlus ja näidata, kui palju mudel reaalselt teie päringule vastab.',
  support: [
    'Kui kiiresti saab kandidaatide voogu käivitada',
    'Millised sihtriigid sobivad rollidele kõige paremini',
    'Kuidas on korraldatud dokumendid, load ja saabumise koordineerimine',
    'Milline on suhtluse ja meeskonna käivitamise formaat pärast kinnitamist',
  ],
  form: {
    title: 'Jätke päring ja me tuleme tagasi järgmise sammuga',
    lead:
      'Jätke oma kontaktandmed ja VW Recruiti meeskond soovitab teie olukorra jaoks kõige praktilisema stardiformaadi.',
    note: 'Sobib kõige paremini tööandjatele, kes vajavad värbamist, asendamist või meeskonna käivitamist.',
  },
}

etContent.thankYouReport = {
  meta: {
    title: 'Aitäh raporti päringu eest',
    description:
      'Teie raporti päring on salvestatud. VW Recruiti meeskond võtab teiega peagi ühendust ja saadab materjali.',
  },
  title: 'Aitäh. Teie raporti päring on kätte saadud',
  lead:
    'Salvestasime teie päringu ja saadame materjali peagi, samuti soovitame praktilise järgmise sammu seoses teie värbamisolukorraga.',
  ctaLabel: 'Tagasi avalehele',
  secondaryCtaLabel: 'Ava kontaktid',
}

etContent.ui.modalClose = 'Sulge modaalaken'
etContent.ui.leadCapture = 'Müügivihjete kogumine'
etContent.ui.video = 'Video'
etContent.ui.videoPlay = 'Mängi videot'
etContent.ui.openMenu = 'Ava menüü'
etContent.ui.primaryNav = 'Peamine navigeerimine'
etContent.ui.languagePickerTitle = 'Valige keel'
etContent.ui.fieldName = 'Nimi'
etContent.ui.fieldCompany = 'Ettevõte'
etContent.ui.fieldEmail = 'E-post'
etContent.ui.fieldPhone = 'Telefon'
etContent.ui.fieldIsBusiness = 'Kas olete päris agentuur või ettevõte?'
etContent.ui.fieldTargetCountries = 'Millised riigid teid huvitavad?'
etContent.ui.fieldWorkersCount = 'Mitmele inimesele vajate värbamist?'
etContent.ui.fieldSelectOption = 'Valige sobiv variant'
etContent.ui.optionYes = 'Jah'
etContent.ui.optionNo = 'Ei'
etContent.ui.sendRequest = 'Saada päring'
etContent.ui.requestCallback = 'Broneeri kõne'
etContent.ui.getReport = 'Hankige raport'
etContent.ui.bookCall = 'Broneeri kõne'
etContent.ui.quizEyebrow = 'Küsitlus'
etContent.ui.quizContinue = 'Jätka'
etContent.ui.quizBack = 'Tagasi'
etContent.ui.quizSubmit = 'Esita'
etContent.ui.quizReady = 'Valmis'
etContent.ui.quizValidationError = 'Palun täitke praegune samm.'
etContent.ui.quizSubmitError = 'Vormi saatmine ebaõnnestus. Palun proovige uuesti.'
etContent.ui.processEyebrow = 'Protsess'
etContent.ui.caseStudy = 'Projekt'
etContent.ui.caseViewLabel = 'Vaata projekti'
etContent.ui.leadCaptureEyebrow = 'Müügivihjete kogumine'
etContent.ui.faqEyebrow = 'KKK'
etContent.ui.aboutEyebrow = 'Meist'
etContent.ui.contactsEyebrow = 'Kontaktid'
etContent.ui.reportEyebrow = 'Raport'
etContent.ui.privacyEyebrow = 'Privaatsuspoliitika'
etContent.ui.termsEyebrow = 'Kasutustingimused'
etContent.ui.thankYouEyebrow = 'Aitäh'
etContent.ui.finalCtaEyebrow = 'Finaalne CTA'
etContent.ui.downloadReport = 'Laadi raport alla'
etContent.ui.openContactsPage = 'Ava kontaktide leht'
etContent.ui.projectsExamples = 'Projektide näited'
etContent.ui.reelPlaceholder = 'Koht reeli või video jaoks hüpikaknas pärast allikate ühendamist.'
etContent.ui.industriesLead =
  'Enamasti kasutavad ettevõtted seda mudelit operatiivtöödeks tootmises, ladudes, ehituses ja teenindussektoris.'
etContent.ui.legalPlaceholder = 'Siin on juriidiline tekst. Asendage see enne käivitamist kinnitatud lõpliku versiooniga.'
etContent.ui.footerDescription =
  '"Võtmed kätte" Aasia ja Aafrika töötajate värbamine: alates kandidaatide ja dokumentide otsimisest kuni saabumise, kohanemise ja meeskonna vahetusse astumiseni.'
etContent.ui.footerCorePages = 'Peamised lehed'
etContent.ui.footerLegal = 'Juriidiline teave'
etContent.ui.privacyPolicy = 'Privaatsuspoliitika'
etContent.ui.termsAndConditions = 'Kasutustingimused'
etContent.ui.formRequiredError = 'Palun täitke vormi kohustuslikud väljad.'
etContent.ui.formSubmittingButton = 'Saadame...'
etContent.ui.formSubmittingStatus = 'Vormi saatmine...'
etContent.ui.formSubmitError = 'Vormi saatmine ebaõnnestus. Palun proovige uuesti.'
etContent.ui.industryVisualLogisticsAlt = 'Töötajad laos ja logistikas'
etContent.ui.industryVisualConstructionAlt = 'Töötajad ehitusplatsil'
etContent.ui.industryVisualHospitalityAlt = 'Personal hotellides ja teeninduses'
etContent.ui.industryVisualManufacturingAlt = 'Töötajad tootmises'
etContent.ui.industrySlidePlaceholder =
  'Eraldi visuaalset juhtumiuuringut selle vertikaali jaoks saab laiendada SEO lehtedele, küsitlustele ja isikupärastatud CTA-dele.'
etContent.ui.comparisonCardCta = 'Arvuta värbamiskulu'
etContent.ui.comparisonOtherMark = 'TE'
etContent.ui.guaranteesLegalDelta = 'Kvoodid, load, viisad'
etContent.ui.guaranteesReplacementMetric = '0 $'
etContent.ui.guaranteesReplacementDelta = 'Kiire asendus garantii korras'
etContent.ui.guaranteesSupportMetric = 'Võtmed kätte'
etContent.ui.guaranteesSupportDelta = 'Valikust vahetuseni'
etContent.ui.guaranteesFallbackDelta = 'VW Recruiti eelis'
etContent.ui.guaranteesReplacementLabel = 'Garantii stardis'
etContent.ui.guaranteesReplacementUnit = '$'
etContent.ui.guaranteesReplacementWarrantyDays = 30
etContent.ui.guaranteesReplacementWarrantyLabel = 'päeva garantii'
etContent.ui.guaranteesReplacementReplyHours = 48
etContent.ui.guaranteesReplacementReplyLabel = 'tundi vastuseni'
etContent.ui.guaranteesSupportBadge = 'Üks meeskond kogu protsessile'
etContent.ui.guaranteesCandidatesDays = 10
etContent.ui.guaranteesCandidatesDaysLabel = 'päeva kandidaatideni'
etContent.ui.guaranteesSupportPercentLabel = '% tugi'
etContent.ui.guaranteesOneTeamCount = 1
etContent.ui.guaranteesOneTeamLabel = 'meeskond'
etContent.ui.guaranteeTimelineStepOne = 'Valik'
etContent.ui.guaranteeTimelineStepTwo = 'Dokumendid'
etContent.ui.guaranteeTimelineStepThree = 'Logistika'
etContent.ui.guaranteeTimelineStepFour = 'Saabumine'
etContent.ui.guaranteeTimelineStepFive = 'Vahetus'
etContent.ui.guaranteeSupportStepOne = 'Valik'
etContent.ui.guaranteeSupportStepTwo = 'Saabumine'
etContent.ui.guaranteeSupportNote = 'Vahetuse algus'
etContent.ui.guaranteeChecklistQuota = 'Kvoodid'
etContent.ui.guaranteeChecklistPermit = 'Load'
etContent.ui.guaranteeChecklistVisa = 'Viisad'
etContent.ui.reviewFallbackValue = '7 AASTAT'
etContent.ui.reviewLabelPrefix = '7 aastat '
etContent.ui.servicesShortRequestEyebrow = 'Lühike päring'
etContent.ui.servicesHeroGhostCta = 'Vaata teenuse tingimusi'
etContent.ui.servicesHeroPanelTitle =
  'Värbamine, dokumendid, logistika ja meeskonna käivitamine ühes protsessis'
etContent.ui.servicesHeroPanelText =
  'Kogu teekond on üles ehitatud nii, et ettevõte näeks prognoositavaid käivitamisetappe ja kandidaat mõistaks, mis igal sammul toimub.'
etContent.ui.servicesPillarsEyebrow = 'Mida me katame'
etContent.ui.servicesPillarsTitle =
  'Teenus pole loodud "CV-de otsinguna", vaid kui terviklik teekond inimeste tööle toomiseks'
etContent.ui.servicesOfferEyebrow = 'Mida saavad mõlemad pooled'
etContent.ui.servicesOfferTitle =
  'Mudel, kus ettevõte saab juhitud tulemuse ja kandidaat näeb läbipaistvat protsessi'
etContent.ui.servicesOfferVisualLabel = 'VW Recruit / teekond'
etContent.ui.servicesOfferVisualPrimary = 'Ettevõttele'
etContent.ui.servicesOfferVisualSecondary = 'Kandidaatidele'
etContent.ui.servicesBeamEyebrow = 'Protsessikaart'
etContent.ui.servicesRouteEyebrow = 'Kuidas koostöö toimib'
etContent.ui.servicesRouteTitle = 'Läbipaistev teekond päringust töötajate vahetusse astumiseni'
etContent.ui.servicesRouteLead =
  'Ettevõte näeb selget käivitamisteekonda koos prognoositavate etappidega alates päringust kuni inimeste vahetusse astumiseni.'
etContent.ui.servicesProofEyebrow = 'Miks see müüb'
etContent.ui.servicesProofTitle =
  'Mitte ainult värbamine, vaid juhitud teenus selge tulemusega igas etapis'
etContent.ui.servicesFitEyebrow = 'Kus see töötab kõige paremini'
etContent.ui.servicesFitTitle =
  'Rollid ja nišid, kus rahvusvaheline värbamine annab maksimaalse operatiivse efekti'
etContent.ui.servicesFitLead =
  'Iga kaart näitab, kus mudel annab kiireima operatiivse tulemuse, puhtaima meeskonna käivitamise ja kõrgeima protsessi stabiilsuse.'
etContent.ui.servicesFitScoreLabel = 'sobivuse tase'
etContent.ui.servicesFitMetricOne = 'Käivitamise kiirus'
etContent.ui.servicesFitMetricTwo = 'Stabiilsus'
etContent.ui.servicesFitMetricThree = 'Läbipaistvus'
etContent.ui.servicesFitCardTextOne =
  'Töötab kõige tugevamini seal, kus on olulised korduvad vahetused, kohaloleku distsipliin ja kiire skaleerimine ilma käivitamistõrgeteta.'
etContent.ui.servicesFitCardTextTwo =
  'Sobib hästi hooajalisteks tippudeks, mahtude kasvuks ja operatsioonideks, kus ettevõte vajab kriitiliselt rütmilist inimeste tööleasumist.'
etContent.ui.servicesFitCardTextThree =
  'Sobib rangete tähtaegadega projektidele, kus on vaja värbamine, dokumendid ja saabumine kombineerida ilma kaoseta.'
etContent.ui.servicesFitCardTextFour =
  'Näitab head tulemust teenindusmeeskondades, kus selge teekond, kiire kohanemine ja stabiilsus on kriitilise tähtsusega.'
etContent.ui.servicesLeadEyebrow = 'Alusta dialoogi'
etContent.ui.servicesLeadText =
  'Tööandjate jaoks on see kiire viis aru saada, kuidas värbamist käivitada. Kandidaatidele on see võimalus saada aus selgitus värbamisteekonna ja dokumentide kohta.'
etContent.ui.servicesSegmentBadgeBusiness = 'B2B'
etContent.ui.servicesSegmentBadgeCandidate = 'B2C'
etContent.ui.industriesSectionTitle = 'MILLISTELE VALDKONDADELE SEE VÄRBAMISMUDEL SOBIB'
etContent.ui.industrySliderPrev = 'Eelmine slaid'
etContent.ui.industrySliderNext = 'Järgmine slaid'
etContent.ui.quizSectionLead =
  'Lühike samm-sammuline küsitlus, mis aitab päringut kiiresti koguda ja ühtses vormingus edastada.'
etContent.ui.casesSectionLead =
  'Näitame värbamise käivitamise näiteid tootmisele, logistikale, hotellidele ja muudele operatiivmeeskondadele.'
etContent.ui.caseSliderPrev = 'Eelmine projekt'
etContent.ui.caseSliderNext = 'Järgmine projekt'
etContent.ui.casesTimelineSteps = ['Briefing', 'Otsing', 'Kinnitamine', 'Dokumendid', 'Saabumine']
etContent.ui.industriesFitSummary =
  'Signaalid, mis tavaliselt tähendavad, et kohalik värbamine ei suuda enam teie operatsioonide tempoga sammu pidada ja vajate süsteemsemat meeskonna loomise mudelit.'
etContent.ui.caseSubtitlePlaceholder = 'Projekti lühikirjeldus'
etContent.ui.caseProblemPlaceholder =
  'Eraldi SEO leht projekti jaoks koos tulemuste, tähtaegade ja sihttegevusega.'
etContent.ui.processStepLabel = 'Samm'
etContent.ui.reportPanelTitle = 'Saage materjal e-posti teel'
etContent.ui.reportPanelText =
  'Jätke oma kontaktandmed ja me saadame kasuliku materjali rahvusvahelise värbamise ja personalikulude optimeerimise teemal.'
etContent.ui.reportPanelKicker = 'VW Recruit / Analüütika'
etContent.ui.reportPanelReportTitle = 'Tööturg 2026'
etContent.ui.reportPanelReportText =
  'Rahvusvahelise personali integratsioon ettevõtetele, kes seisavad silmitsi töötajate puudusega'
etContent.ui.reportPanelGuide = 'PDF'
etContent.ui.videoInsightLabel = 'Video ülevaade'
etContent.ui.mediaDefaultDuration = '02:00'
etContent.ui.reviewsPrev = 'Eelmine arvustus'
etContent.ui.reviewsNext = 'Järgmine arvustus'
etContent.ui.genericPageCardOne = 'Baasleht on valmis lokaliseeritud sisuks'
etContent.ui.genericPageCardTwo = 'Metaandmed ja struktuur on edasiseks täitmiseks valmis'
etContent.ui.genericPageCardThree = 'Iga marsruut luuakse iga keele jaoks eraldi'

etContent.quiz.title = 'Värbamise kalkulatsioon'
etContent.quiz.progressLabel = 'Samm'
etContent.quiz.completionTitle = 'Teie päring on valmis'
etContent.quiz.completionLead =
  'Oleme teie vastused kätte saanud. Järgmine samm on teiega ühendust võtta ning valmistada ette konsultatsioon või eelkalkulatsioon.'
etContent.quiz.steps = [
  {
    id: 'industry',
    label: 'Millisesse valdkonda vajate töötajaid?',
    type: 'options',
    options: ['Tootmine', 'Ehitus', 'Laod ja logistika', 'Hotellid ja teenindus', 'Muu'],
  },
  {
    id: 'teamSize',
    label: 'Mitu töötajat vajate?',
    type: 'options',
    options: ['1–10', '11–30', '31–50', '50+'],
  },
  {
    id: 'timeline',
    label: 'Millal peaks meeskond tööd alustama?',
    type: 'options',
    options: ['Kiireloomuline', '2–4 nädala jooksul', '1–2 kuu jooksul', 'Hetkel uurin võimalusi'],
  },
  {
    id: 'location',
    label: 'Kus teie ettevõte asub?',
    type: 'text',
    fields: [
      { name: 'country', label: 'Riik', required: true },
      { name: 'city', label: 'Linn', required: false },
    ],
  },
  {
    id: 'problem',
    label: 'Mis on praegu suurim värbamisprobleem?',
    type: 'options',
    options: ['Kõrged palgakulud', 'Personali puudus', 'Voolavus', 'Hooajalised tipud', 'Tootmise skaleerimine', 'Muu'],
  },
  {
    id: 'contact',
    label: 'Kuhu peaksime kalkulatsiooni saatma?',
    type: 'text',
    fields: [
      { name: 'name', label: 'Nimi', required: true },
      { name: 'company', label: 'Ettevõte', required: true },
      { name: 'phone', label: 'Telefon', required: true },
      { name: 'email', label: 'E-post', required: true },
    ],
  },
]

etContent.services = {
  title: 'Võtmed kätte rahvusvahelise töötajate värbamise teenused',
  lead:
    'Katame ettevõtete <strong>operatiivpersonali puuduse</strong> ja juhime kandidaadid <strong>legaalse tööleasumiseni</strong>: alates otsingust ja valikust kuni dokumentide, saabumise ja vahetuse alguseni.',
  intro: '',
  cta: 'Aruta ettevõtte värbamist',
  metrics: [
    { value: '10', suffix: ' päeva', label: 'esimeste kandidaatideni valikus' },
    { value: '100', suffix: ' %', label: 'dokumentide ja legaalsuse tugi' },
    { value: '4', suffix: ' etappi', label: 'päringust kuni meeskonna stardini' },
  ],
  heroBadges: [
    { value: '10', suffix: ' päeva', label: 'esimeste kandidaatideni' },
    { value: '100', suffix: ' %', label: 'juriidiline tugi' },
    { value: 'Võtmed kätte', suffix: '', label: 'otsingust vahetuse stardini' },
    { value: '1 meeskond', suffix: '', label: 'värbamine, dokumendid, logistika' },
  ],
  segments: [
    {
      variant: 'business',
      label: 'Ettevõtetele',
      badge: 'B2B',
      title: 'Ettevõtetele, kes vajavad stabiilset meeskonda ilma kadrilünkadeta',
      text: 'Sobib ettevõtetele, kes ei suuda täita operatiivseid rolle kohaliku värbamisega, laienevad, kogevad hooajalisi tippe või on väsinud suurest personali voolavusest.',
      cta: 'Saa värbamisplaan',
    },
    {
      variant: 'candidate',
      label: 'Kandidaatidele',
      badge: 'B2C',
      title: 'Kandidaatidele, kes soovivad legaalselt välismaale tööle minna',
      text: 'Selgitame etappe lihtsalt: eelvalik, dokumendid, saabumine, kohanemine ja töö algus. Ei mingeid varjatud tingimusi ega ähmaseid lubadusi.',
      cta: 'Esita avaldus',
    },
  ],
  pillars: [
    {
      title: 'Kandidaatide otsing ja valik',
      text: 'Loome rolliprofiili, käivitame otsingu andmebaasi ja partnerite võrgustiku kaudu, filtreerime välja nõrgad kandidaadid ja pakume kinnitamiseks ainult sobivaid inimesi.',
    },
    {
      title: 'Dokumendid, load ja legaalsus',
      text: 'Tegeleme kvootide, lubade, viisa- ja rändeprotsessidega, et tööandja ei upuks bürokraatiasse ja kandidaat mõistaks, millises etapis ta viibib.',
    },
    {
      title: 'Saabumine, kohanemine ja vahetuse algus',
      text: 'Koordineerime logistikat, saabumist, töö alustamist ja esimest kohanemise etappi, et töötajad astuksid reaalselt objektile kokkulepitud ajal.',
    },
  ],
  timeline: [
    {
      title: 'Briefing ja mudeli kalkulatsioon',
      text: 'Täpsustame inimeste arvu, rollid, graafiku, sihtriigi ja projekti piirangud, misjärel koostame realistliku värbamisstsenaariumi.',
    },
    {
      title: 'Valik ja kandidaatide kinnitamine',
      text: 'Käivitame otsingu, teeme eelvaliku (screening), kontrollime dokumente ja anname teie poolele võimaluse kandidaadid lõplikult kinnitada.',
    },
    {
      title: 'Vormistamine ja saabumise korraldamine',
      text: 'Pärast kinnitamist alustame dokumentide ettevalmistamist, lubade koordineerimist, logistikat ja inimeste lahkumiseks ettevalmistamist.',
    },
    {
      title: 'Tööleasumine ja tugi',
      text: 'Pärast saabumist koordineerime vahetuse starti, kohanemist ning suhtlust ettevõtte, töötajate ja objektil vastutavate isikute vahel.',
    },
  ],
  deliverables: [
    'Vakantsi profiil ja otsingustrateegia konkreetsele rollile',
    'Valitud ja kinnitamiseks valmis kandidaatide pakett',
    'Dokumentide vormistamise kõigi etappide kontroll',
    'Töötajate saabumise ja meeskonna käivitamise ajatelg',
    'Meeskonna tugi töö alguses ja esimesel kohanemisperioodil',
    'Garantiitingimused asendamiseks sõltuvalt projekti formaadist',
  ],
  offerCards: [
    {
      title: 'Värbamine tööandjatele',
      text: 'Kiire värbamise käivitamine vabadele töökohtadele, hooajalistele tippudele või tootmise laiendamisele.',
    },
    {
      title: 'Legaalne marsruut kandidaatidele',
      text: 'Läbipaistev valikuprotsess, dokumentide ettevalmistamine ja tugi kuni tegeliku tööleasumiseni.',
    },
    {
      title: 'Tugi pärast starti',
      text: 'Kohanemine, suhtlus, asendused ja protsesside koordineerimine meeskonna esimeses tööetapis.',
    },
  ],
  beam: {
    title: 'Kuidas liigub värbamisprotsess päringust töötajate vahetusse astumiseni',
    lead:
      'Visuaalne protsessikaart, mis näitab, kuidas briefing, valik, kinnitamine, dokumendid ja meeskonna käivitamine on ühendatud üheks juhitavaks protsessiks.',
    centerLabel: 'Töötlemine',
    outputLabel: 'Vahetusse astumine',
    steps: ['Briefing', 'Otsing', 'Kinnitamine', 'Dokumendid', 'Saabumine'],
  },
  roles: [
    'Töötajad tootmisliinidele, pakkimiseks, sorteerimiseks ja abiprotsessideks',
    'Laomeeskonnad komplekteerimiseks, sorteerimiseks, teisaldamiseks ja logistikaoperatsioonideks',
    'Ehitus- ja paigaldustöölised objektidele, kus on töötajate puudus',
    'Töötajad hotellidele, kööki, tubade koristamiseks ja teenindustöödeks',
  ],
  promise: {
    title: 'Üks meeskond vastutab kogu kandidaadi teekonna eest',
    text: 'Ettevõtte jaoks tähendab see vähem kaost värbamise, dokumentide, logistika ja inimeste tööle viimise vahel. Saate eraldi töövõtjate asemel ühe arusaadava koostöömudeli.',
  },
  trust: [
    'Tööandja näeb prognoositavat meeskonna käivitamise teekonda',
    'Kandidaat saab legaalse ja arusaadava tööleasumise marsruudi',
    'Üks meeskond koordineerib värbamist, dokumente, logistikat ja kohanemist',
  ],
  form: {
    title: 'Saa värbamisplaan või tööalane konsultatsioon',
    lead: 'Täitke lühike vorm. Tööandjale valmistame ette järgmise sammu värbamise käivitamiseks. Kandidaadile selgitame marsruuti ja nõudeid stardiks.',
    button: 'Saa konsultatsioon',
    note: 'Tavaliselt vastame tööpäeva jooksul.',
  },
}

etContent.cases = {
  title: 'Rahvusvahelise värbamise projektid mõõdetava operatiivse tulemusega',
  lead:
    'Reaalsed stsenaariumid, kus ettevõte katab personalipuuduse, kiirendab meeskonna käivitamist ja saab prognoositava marsruudi inimeste tööleasumiseks.',
  description:
    'Rahvusvahelise töötajate värbamise projektid: väljakutse, käivitusmudel, tähtajad ja tulemus ettevõttele.',
  eyebrow: 'Projektid',
  intro:
    'See leht pole mõeldud ainult "edulugude" jaoks, vaid tõestuseks, et mudel töötab reaalsetes operatiivtingimustes: kui inimesi napib, tähtajad viibivad või tekib hooajaline koormus.',
  stats: [
    { value: '3', label: 'detailset käivitusjuhtu' },
    { value: '4', label: 'peamist ärivaldkonda' },
    { value: '96', suffix: ' %', label: 'vahetusse astumine' },
  ],
  featured: [
    {
      title: 'Delta Pack',
      category: 'Tootmine',
      colSpan: 2,
      subtitle: 'Tootmisettevõte, Kesk-Euroopa',
      problem:
        'Ettevõte ei suutnud pikka aega pakkimisliinil stabiilselt vahetust sulgeda pikaajalise kohaliku värbamise ja pideva voolavuse tõttu.',
      solution:
        'Käivitusmudel ühendas kandidaatide otsingu, dokumentide toe, logistika ja meeskonna stardi koordineerimise üheks marsruudiks.',
      result:
        'Ettevõte sai selge plaani vahetuste katmiseks, lühema kandidaatide kinnitamise tsükli ja suurema kontrolli projekti stardi üle.',
      timeline: 'Esimesed kandidaadid 7-14 päevaga',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Töötajad tootmisliinil',
      metrics: [
        { label: 'Vajadus', value: '32 töötajat' },
        { label: 'Formaat', value: 'Pakkimisliin' },
        { label: 'Fookus', value: 'Stabiilne vahetuse algus' },
      ],
    },
    {
      title: 'Nord Cargo Hub',
      category: 'Logistika',
      colSpan: 1,
      subtitle: 'Laokompleks ja logistika',
      problem:
        'Ladu ei suutnud toime tulla tippkoormustega ilma inimeste reservi ja töötajate saabumise prognoositava graafikuta.',
      solution:
        'Juhtumi fookus oli short-listi kiirusel, dokumentide kontrollil ja inimeste ettevalmistamisel vahetustega graafikusse asumiseks.',
      result:
        'Operatiivmeeskond sai prognoositavama ajatelje, et valmistada ette onboarding, ülevaatajad ja katta tipud ilma kaoseta.',
      timeline: 'Kiire käivitamine hooajaks',
      image: '/images/industry-logistics.jpg',
      alt: 'Töötajad laos ja logistikas',
      metrics: [
        { label: 'Vajadus', value: 'Sorteerimismeeskond' },
        { label: 'Formaat', value: 'Laooperatsioonid' },
        { label: 'Fookus', value: 'Valmisolek tipuks' },
      ],
    },
    {
      title: 'Urban Build Group',
      category: 'Ehitus',
      colSpan: 3,
      subtitle: 'Ehitusettevõtja',
      problem:
        'Töövõtja pidi kiiresti tugevdama aktiivseid objekte ilma tähtaegu nihutamata ja brigaadide komplekteerimise tõrgeteta.',
      solution:
        'Otsing, load, logistika ja kohanemise start sünkroniseeriti ühtse töövoona alates kinnitamisest kuni objektile astumiseni.',
      result:
        'Klient sai mudeli, mis vähendas lõhet kandidaatide kinnitamise, dokumentide ettevalmistamise ja töö tegeliku alguse vahel.',
      timeline: 'Marsruut vastavalt objekti tähtaegadele',
      image: '/images/industry-construction.jpg',
      alt: 'Töötajad ehitusplatsil',
      metrics: [
        { label: 'Vajadus', value: 'Objektide tugevdamine' },
        { label: 'Formaat', value: 'Ehitusrollid' },
        { label: 'Fookus', value: 'Starditähtaegade kaitse' },
      ],
    },
  ],
  convincingTitle: 'Väljakutsest tulemuseni: miks meie kogemus aitab ettevõtetel kiiremini tegutseda',
  frameworkTitle: 'Väljakutsest tulemuseni: miks meie kogemus aitab ettevõtetel kiiremini tegutseda',
  frameworkLead:
    'Tugev projekt (case) ei näita ainult tulemust, vaid ka seda, miks käivitamismarsruut oli realistlik just seda tüüpi tööandja jaoks.',
  routeLabel: 'Marsruut',
  outcomeLabel: 'Tulemus',
  framework: [
    {
      title: 'Selge algne väljakutse',
      text: 'Näitame täpselt, kus kohalik värbamine, hooajalisus või voolavus tekitasid ettevõttele operatiivse riski.',
    },
    {
      title: 'Läbipaistev käivitusmudel',
      text: 'Selgitame, kuidas valik, dokumendid, logistika ja töötajate tööletoomine ühendati ühte protsessi.',
    },
    {
      title: 'Operatiivne tulemus',
      text: 'Tõlgime juhtumi arusaadavasse ärikeelde: vahetuse stabiilsus, käivitamise kiirus ja prognoositavus objektile.',
    },
  ],
  checklistTitle: 'Mis peab olema igas järgmises projektis (case)',
  checklist: [
    'Rolli ja esialgse personaliväljakutse kirjeldus',
    'Sihtriigi või otsingumudeli loogika',
    'Ajatelg alates briefingust kuni saabumiseni',
    'Põhipunktid dokumentide ja logistika osas',
    'Tulemus ettevõttele ja selge CTA',
  ],
  ctaTitle: 'Kas vajate oma meeskonnale sarnast värbamismudelit?',
  ctaLead:
    'Kirjeldage oma personalipuudust ja me koostame teie ettevõttele värbamismarsruudi, käivitamise tähtajad ja järgmise praktilise sammu.',
}

etContent.industries = {
  title: 'Valdkonnad, kus rahvusvaheline värbamine annab tugevaima operatiivse efekti',
  lead:
    'Keskendume sektoritele, kus liinipersonali puudus ja suur voolavus pidurdavad äriarengut kõige enam.',
  description:
    'Rahvusvaheline töötajate värbamine tootmisele, ehitusele, ladudele, logistikale, hotellidele ja teenindusmeeskondadele.',
  eyebrow: 'Valdkonnad',
  intro: '',
  sectorsTitle: 'Põhivaldkonnad, kus mudel annab kiireima tulemuse',
  sectorsLead: '',
  stats: [
    { value: '3', label: 'peamist sektorit suurima mõjuga' },
    { value: '1+', label: 'aastane leping enamikule meeskondadest' },
    { value: '54 %', label: 'personalikulude vähendamise potentsiaal' },
  ],
  sectors: [
    {
      title: 'Tootmine',
      colSpan: 2,
      text: 'Stabiilsed meeskonnad konveieriliinidele, pakkimistsehhidesse ja sorteerimiskeskustesse.',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Töötajad tootmises',
      tags: ['Tootmisliinid', 'Pakkimine', 'Sorteerimine'],
      problem:
        'Pidevad "augud" vahetustes kohalike töötajate puudumise ja 30-50% aastase voolavuse tõttu.',
      solution:
        'Moodustame töötajate rühmi, kes saabuvad vähemalt 1-aastase lepinguga. See tagab distsipliini ja kaotab vajaduse iga nädal uusi inimesi välja õpetada.',
      roles: ['Liinioperaatorid', 'Pakkijad', 'Sorteerijad', 'Abitöölised'],
      points: [
        'Stabiliseerime vahetusse astumist ilma pideva lisavärbamiseta',
        'Vähendame survet vahetuste vanematele ja HR-meeskonnale',
        'Pakume prognoositavat rütmi inimeste tööleasumisel',
      ],
      cta: 'Arvuta kulu tootmisele',
    },
    {
      title: 'Ehitus',
      colSpan: 1,
      text: 'Objektide skaleerimine ilma sõltuvuseta kohaliku turu personalipuudusest.',
      image: '/images/industry-construction.jpg',
      alt: 'Töötajad ehitusplatsil',
      tags: ['Montaaž', 'Abirollid', 'Objektimeeskonnad'],
      problem:
        'Objektide üleandmise tähtaegade nurjumine, kuna hooaja tipus ei suudeta kiiresti leida 20-50 abitöölist või monteerijat.',
      solution:
        'Korraldame kokkupandud brigaadide operatiivse saabumise. Võtame kogu legaliseerimise enda kanda, et teie töödejuhatajad tegeleksid ehituse, mitte paberimajandusega.',
      roles: ['Abitöölised', 'Monteerijad', 'Armeerijad', 'Betoneerijad'],
      points: [
        'Tugevdame aktiivseid objekte ilma tähtaegade rikkumiseta',
        'Eemaldame töödejuhatajatelt halduskoormuse',
        'Töötame hooajaliste tippude ja brigaadide laiendamise nimel',
      ],
      cta: 'Arvuta kulu ehitusele',
    },
    {
      title: 'Laod ja logistika',
      colSpan: 1,
      text: 'Paindlikkus ja võimsus 3PL operaatoritele ning E-kaubandusele.',
      image: '/images/industry-logistics.jpg',
      alt: 'Töötajad laos ja logistikas',
      tags: ['Komplekteerimine', 'Sorteerimine', 'Kauba teisaldamine'],
      problem:
        'Ettenägematus hooajaliste tippude ajal ja kohaliku personali kõrged "öiste" vahetuste kulud.',
      solution:
        'Saate meeskonna, kes on valmis intensiivseks vahetustega graafikuks. Personalikulud muutuvad prognoositavaks ja fikseerituks.',
      roles: ['Komplekteerijad (Pickers)', 'Pakkijad', 'Laadijad', 'Laotehnika operaatorid'],
      points: [
        'Töötame hooajaliste lainete ja suure vahetustetempoga',
        'Anname suurema personalikulude prognoositavuse',
        'Aitame planeerida meeskondade käivitamist ilma paanikata',
      ],
      cta: 'Arvuta kulu laole ja logistikale',
    },
    {
      title: 'Hotellid ja teenindus',
      colSpan: 2,
      text: 'Stabiilsed meeskonnad tubade koristamiseks, köögiabiks ja igapäevasteks teenindusoperatsioonideks.',
      image: '/images/industry-hospitality.jpg',
      alt: 'Personal hotellides ja teeninduses',
      tags: ['Tubade koristamine', 'Köögiabi', 'Teenindusoperatsioonid'],
      problem:
        'Tipphooajal on raske hoida stabiilset teenindusmeeskonda, kui kohalik personal vahetab kiiresti tööandjat või ei ilmu vahetusse.',
      solution:
        'Valime töötajad pikemaajaliseks tööks ja loome legaalse marsruudi objektile astumiseks, et operatiivmeeskond ei peaks elama pidevas avariilise värbamise režiimis.',
      roles: ['Toateenijad', 'Köögitöölised', 'Teenindajad', 'Universaalsed abilised'],
      points: [
        'Vähendame kaost igapäevases vahetuste planeerimises',
        'Tugevdame hotelle ja teenindusobjekte hooajaliste tippude ajal',
        'Pakume selget ja legaalset tööleasumise marsruuti',
      ],
      cta: 'Arvuta kulu hotellidele ja teenindusele',
    },
  ],
  frameworkTitle: 'Miks valivad ettevõtted Aasia ja Aafrika töötajaid?',
  frameworkLead:
    'See pole "odavama asenduse", vaid meeskonna stabiilsuse, motivatsiooni ja prognoositava pika töötsükli küsimus.',
  framework: [
    {
      title: 'Kõrge motivatsioon',
      text: 'Nende piirkondade kandidaatidele on töö Euroopas võimalus paremaks tulevikuks, mistõttu nad hindavad töökohta rohkem ja vahetavad ettevõtet harvemini juba kuu aja pärast.',
    },
    {
      title: 'Distsipliin',
      text: 'Paljudes Aasia riikides põhineb töökultuur austusel hierarhia vastu, selgetel juhistel ja korduvate toimingute stabiilsel täitmisel.',
    },
    {
      title: 'Pikaajalisus',
      text: 'Töötajad saabuvad sihtviisadega pikaks ajaks, mis kõrvaldab hooajalise personali kadumise ja pideva värbamise ülekoormuse probleemi.',
    },
  ],
  fitTitle: 'Millal vajate kindlasti rahvusvahelist värbamist?',
  fitLead:
    'Kui tunnete oma olukorra neis signaalides ära, siis kohalik värbamine tõenäoliselt enam ei lahenda probleemi süsteemselt.',
  fitSignals: [
    'Voolavus üle 20%: kulutate rohkem aega intervjuudele kui tootmise juhtimisele.',
    'Ülekuumenenud kohalik turg: kohalike kandidaatide palgaootused kasvavad, kuid tootlikkus mitte.',
    'Uute objektide või liinide planeerimine: kardate uusi võimsusi käivitada, sest pole kedagi, kes töötaks.',
    'Värbamise hind tõuseb: kohalikud agentuurid võtavad suuri vahendustasusid ja inimesed lahkuvad nädala pärast.',
  ],
  ctaTitle: 'Kas vajate käivitusplaani konkreetsele valdkonnale?',
  ctaLead:
    'Kirjutage meile, milline on teie nišš, meeskonna suurus ja käivitamise tähtajad, ning me soovitame just selle operatsiooni jaoks parimat värbamismudelit.',
  seoTitle: 'Rahvusvaheline personali värbamine tootmisele, ladudele ja ehitusele',
  seoText:
    'VW Recruit spetsialiseerub Euroopa ettevõtete töötajate puuduse komplekssele lahendamisele. Tagame liinitöötajate valiku ladudele, tehastele ja ehitusplatsidele, kasutades ära riike, kus on liigse tööjõu potentsiaal, eriti Filipiine, Indiat, Vietnami ja Aafrika riike. Meie mudel ei hõlma ainult värbamist, vaid ka täielikku dokumentaalset tuge, logistikat ja töötajate kohanemist objektil, mis võimaldab klientidel vähendada operatiivseid personalikulusid kuni 54%.',
}

etContent.report = {
  title: 'Tööturg 2026: Kui kohalik värbamine enam ei toimi',
  lead:
    'Analüütiline raport tööandjatele, kes tahavad mõista rahvusvahelise värbamise reaalseid kulusid, tähtaegu ja juriidilisi nüansse.',
  description:
    'Laadige alla raport rahvusvahelise töötajate värbamise, personalikulude, õiguslike riskide ja meeskonna käivitamise kohta.',
  eyebrow: 'Raport',
  intro:
    'See pole lihtsalt PDF "linnukese pärast", vaid sisu, mis muudab huvi asjalikuks vestluseks kulude, starditähtaegade, legaalsuse ja ettevõtte valmisoleku teemal rahvusvaheliseks värbamiseks.',
  stats: [
    { value: '1', label: 'praktiline analüütiline raport' },
    { value: '5', label: 'peamist teadmist sees' },
    { value: '1', label: 'selge konversioonitegevus' },
  ],
  pointsTitle: 'Mis on raporti sees',
  points: [
    'Kulude võrdlemise loogika: kohalik värbamine vs rahvusvaheline värbamine',
    'Kõige levinumad juriidilised vead välismaalaste palkamisel',
    'Kuidas valmistada operatsiooni ette onboardinguks ja kohanemiseks',
    'Mis tegelikult mõjutab käivitamise tähtaegu alates briefingust kuni vahetusse astumiseni',
    'Kuidas vähendada kadrilist survet füüsilistes ja operatiivrollides',
  ],
  benefitsTitle: 'Miks ettevõtted seda raportit küsivad',
  benefitsLead:
    'Raport on eriti kasulik siis, kui ettevõte juba tunneb kadrilist survet ja vajab mitte abstraktset teavet, vaid selget lahendusmudelit.',
  benefits: [
    {
      title: 'Kiirem sisemine kokkulepe',
      text: 'Aitab omanikul, operatsioonidel ja HR-il rääkida ühes keeles värbamise käivitamise reaalsest marsruudist.',
    },
    {
      title: 'Selgem kulude nägemine',
      text: 'Võimaldab kainemalt võrrelda palgasurvet, käivitamistähtaegu ja meeskonna katkematuse riske.',
    },
    {
      title: 'Parem üleminek järgmisele sammule',
      text: 'Viib huvi tasemelt "lihtsalt vaatan" asjaliku konsultatsioonini konkreetsete piirangute ja tähtaegadega.',
    },
  ],
  trustTitle: 'Mis teeb selle raporti tõeliselt kasulikuks',
  trustLead:
    'Tugev analüütiline materjal ei tohiks olla üldine HR-sisu. See peab otseselt vastama äriprobleemile, mille tõttu inimene vormi täidab.',
  trustPoints: [
    'Loodud operatiivse äri kadrilise surve, mitte üldise teooria ümber',
    'Ettevalmistatud alusena esimeseks konsultatsiooniks või müügivestluseks',
    'Kasulik tööandjatele, kes hindavad, kas mudel sobib nende objekti ja tähtaegadega',
  ],
  faqTitle: 'Küsimused enne allalaadimist',
  faq: [
    {
      q: 'Kellele see raport on mõeldud?',
      a: 'Tööandjatele tootmises, logistikas, ehituses, hotellides ja teeninduses ning teistes operatiivsetes ärides, kellel on töötajate puudus või palgasurve.',
    },
    {
      q: 'Kas see on lihtsalt üldine PDF?',
      a: 'Ei. Raport peaks aitama teha reaalse otsuse värbamise kohta ja valmistama ette asjaliku vestluse käivitusmudeli, tähtaegade ja piirangute üle.',
    },
    {
      q: 'Mis juhtub pärast vormi esitamist?',
      a: 'Inimene saab PDF-i allalaadimise marsruudi ja muutub samal ajal kvalifitseeritud leadiks edasiseks konsultatsiooniks värbamisvajaduse üle.',
    },
  ],
  ctaTitle: 'Hankige raport ja mõistke oma järgmist sammu värbamisel',
  ctaLead:
    'Jätke oma kontaktid ja me saadame PDF-i, samuti aitame hinnata, kas rahvusvaheline värbamismudel sobib teie praeguse töötajate puudusega.',
  formTitle: 'Hankige raport',
  formLead:
    'Täitke lühike vorm PDF-i saamiseks ja üleminekuks asjalikumale vestlusele personalikulude, starditähtaegade ja juriidilise ettevalmistuse teemal.',
  formNote: 'Kõige kasulikum tööandjatele, kes planeerivad värbamist, asendamist või meeskonna laiendamist.',
}
