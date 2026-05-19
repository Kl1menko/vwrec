import { createLocaleContent } from '../create-locale-content.js'

export const hrContent = createLocaleContent({
  code: 'hr',
  name: 'Croatian',
  nativeName: 'Hrvatski',
  translated: true,
  homeLabel: 'Početna',
  heroTitle: 'Međunarodno zapošljavanje za tvrtke koje trebaju operativne radnike bez odgode.',
  heroLead:
    'Struktura stranice već je pripremljena za generiranje potencijalnih klijenata (leadova), višejezični SEO rast, kvizove, studije slučaja i konzultativne CTA-ove za B2B klijente.',
})

hrContent.site.description =
  'Smanjite troškove osoblja do 54 % zahvaljujući međunarodnom zapošljavanju radnika iz Azije i Afrike "ključ u ruke".'

hrContent.navigation.items = [
  { key: 'home', label: 'Početna' },
  { key: 'services', label: 'Usluge' },
  { key: 'industries', label: 'Sektori' },
  { key: 'cases', label: 'Projekti' },
  { key: 'report', label: 'Izvješće' },
  { key: 'contacts', label: 'Kontakt' },
]

hrContent.navigation.primaryCta = 'Izračunajte troškove'
hrContent.navigation.secondaryCta = 'Rezervirajte poziv'

hrContent.home = {
  meta: {
    title: 'Međunarodno zapošljavanje radnika za tvrtke',
    description:
      'Smanjite troškove osoblja i riješite nedostatak radnika zahvaljujući međunarodnom zapošljavanju radnika iz Azije i Afrike "ključ u ruke".',
  },
  hero: {
    lines: ['SMANJITE TROŠKOVE', 'OSOBLJA'],
    highlight: 'DO 54 %',
    lead:
      'zahvaljujući međunarodnom zapošljavanju radnika iz <strong>Azije i Afrike</strong> "ključ u ruke"',
    stats: [
      { value: 10, suffix: ' DANA', label: 'do odabira prvih kandidata' },
      { value: 7, suffix: ' GODINA', label: 'iskustva u međunarodnom zapošljavanju' },
      { value: 100, suffix: ' %', label: 'podrška za dokumentaciju i dolazak' },
    ],
    video: {
      src: '/videos/international-recruitment-overview.mp4',
      poster: '/video-poster-home.svg',
      type: 'video/mp4',
    },
  },
  comparison: {
    eyebrow: 'Usporedba modela zapošljavanja',
    title: 'Kako tvrtke gube zbog nedostatka radne snage na lokalnom tržištu',
    cards: [
      {
        title: 'Ostali',
        brandNote: 'lokalno zapošljavanje / druge agencije',
        amount: '$36 000',
        period: '/ mjesec',
        note: 'za tim od 30 radnika',
        variant: 'other',
        rows: [
          {
            title: 'Nedostatak dobrih kandidata',
            text: 'Desetke tvrtki natječu se za iste dobre radnike istovremeno.',
          },
          {
            title: 'Pozicije ostaju otvorene dulje',
            text: 'Dok traje potraga, tim radi preopterećen.',
          },
          {
            title: 'Stalno ponovno zapošljavanje',
            text: 'Zbog nedostatka radne snage tvrtka se stalno vraća na traženje.',
          },
        ],
      },
      {
        title: 'VW Recruit',
        brandNote: 'sustavno rješavanje nedostatka radne snage',
        amount: '$18 000',
        period: '/ mjesec',
        note: 'za tim od 30 radnika',
        variant: 'brand',
        rows: [
          {
            title: 'Pristup širem fondu kandidata',
            text: 'Radimo izvan granica lokalnog nedostatka radne snage.',
          },
          {
            title: 'Brz pristup kandidatima',
            text: 'Prve relevantne osobe već za 7 – 14 dana.',
          },
          {
            title: 'Fokus na kontinuitet poslovanja',
            text: 'Popunjavate pozicije brže dok konkurenti još traže.',
          },
        ],
      },
    ],
    cta: 'Zatvorite deficit radne snage',
  },
  industries: {
    eyebrow: 'Za koje sektore je ovaj model pogodan',
    title: 'Najčešće se ovaj model zapošljavanja koristi za operativne poslove',
    lead:
      'Formiramo timove za proizvodnju, skladišta, građevinarstvo i usluge kada tvrtka treba predvidljiv početak i niže troškove osoblja.',
    items: [
      {
        title: 'Skladišta i logistika',
        text: 'Formiranje timova za komisioniranje, pakiranje, prijenos robe i skladišne operacije.',
      },
      {
        title: 'Građevinarstvo',
        text: 'Zapošljavanje radnika na gradilištima, za montažne, pomoćne i tehničke radove.',
      },
      {
        title: 'Hoteli i usluge',
        text: 'Zapošljavanje osoblja za čišćenje, kuhinju, održavanje i svakodnevne operativne poslove.',
      },
      {
        title: 'Proizvodnja',
        text: 'Zapošljavanje radnika na proizvodnim linijama, za pakiranje, sortiranje i pomoćne procese.',
      },
    ],
  },
  calculator: {
    eyebrow: 'Kviz kalkulacija',
    title: 'Izračunajte troškove zapošljavanja za Vašu tvrtku',
    lead:
      'Odgovorite na nekoliko kratkih pitanja i primite procjenu troškova zapošljavanja tima za Vaše poslovanje.',
  },
  casesSection: {
    eyebrow: 'Naši projekti',
    title: 'Naši projekti zapošljavanja',
    lead:
      'Pokazujemo kako izgleda zapošljavanje u stvarnim projektima: od proizvodnje i skladišta do usluga i operativnih timova.',
    cta: 'Svi projekti',
    items: [
      {
        title: 'Delta Pack',
        subtitle: 'Proizvodna tvrtka, Srednja Europa',
        problem: 'Riješili smo nedostatak 32 radnika na liniji za pakiranje nakon dugotrajnog lokalnog zapošljavanja i visoke fluktuacije.',
        image: '/images/industry-manufacturing.jpg',
        alt: 'Radnici na proizvodnoj liniji',
      },
      {
        title: 'Nord Cargo Hub',
        subtitle: 'Skladišni kompleks i logistika',
        problem: 'Sastavili smo smjenski tim za komisioniranje i sortiranje kada tvrtka nije mogla pratiti vršna opterećenja.',
        image: '/images/industry-logistics.jpg',
        alt: 'Radnici u skladištu i logistici',
      },
      {
        title: 'Urban Build Group',
        subtitle: 'Građevinski izvođač',
        problem: 'Pojačali smo gradilišta monterima i pomoćnim radnicima kako bismo spriječili kašnjenje u novoj fazi izgradnje.',
        image: '/images/industry-construction.jpg',
        alt: 'Radnici na gradilištu',
      },
    ],
  },
  process: {
    eyebrow: 'Što se događa nakon upita',
    title: 'Što slijedi nakon Vašeg upita',
    intro:
      'Preciziramo broj radnika, zahtjeve za kandidate i rokove za početak rada tima. Nakon toga pokrećemo zapošljavanje putem naše baze i partnerskih agencija u zemljama zapošljavanja.',
    steps: [
      {
        title: 'Analiza pozicija i početak zapošljavanja',
        text: 'Izrađujemo profil kandidata, dogovaramo rokove i započinjemo pretragu u relevantnim izvorima.',
      },
      {
        title: 'Odabir i provjera kandidata',
        text: 'Kandidati prolaze predselekciju, provjeru dokumenata i osnovni intervju. Tvrtka dobiva profile na konačno odobrenje.',
      },
      {
        title: 'Obrada dokumenata',
        text: 'Organiziramo pripremu svih potrebnih dokumenata za zapošljavanje i dolazak te pratimo proces do potpune spremnosti.',
      },
      {
        title: 'Dolazak i početak rada',
        text: 'Koordiniramo logistiku i dolazak radnika. Nakon dolaska, tim počinje s radom u tvrtki.',
      },
    ],
  },
  guarantees: {
    eyebrow: 'Jamstva i sigurnost',
    title: 'Što tvrtka dobiva uz zapošljavanje',
    items: [
      {
        title: '100 % legalnost',
        text: 'Preuzimamo odgovornost za kvote, radne dozvole i vizne procese kako bi tvrtka bila zaštićena od inspekcija.',
      },
      {
        title: 'Besplatna zamjena',
        text: 'Pružamo jamstveni rok za zamjenu kandidata ako projekt zahtijeva stabilnost na samom početku.',
      },
      {
        title: 'Potpuna podrška "ključ u ruke"',
        text: 'Od intervjua u Aziji do dočeka u zračnoj luci i početka smjene uz podršku u prilagodbi i komunikaciji.',
      },
    ],
  },
  reportBlock: {
    eyebrow: 'Analitički materijal',
    title: 'Zašto lokalno zapošljavanje gubi na učinkovitosti?',
    lead:
      'Preuzmite zatvoreno analitičko izvješće "Tržište rada 2026: Integracija međunarodnog osoblja".',
    points: [
      'Usporedna tablica troškova: Lokalno tržište vs. Strani radnici',
      '5 pravnih pogrešaka pri zapošljavanju stranaca',
      'Kako prevladati jezičnu barijeru u proizvodnji',
    ],
    cta: 'Preuzmite izvješće u PDF-u',
  },
  reviews: {
    eyebrow: 'Povjerenje',
    title: 'Tržišni lideri nam vjeruju',
    items: [
      {
        name: 'Oleksandr Koval',
        company: 'Operativni direktor, Delta Pack',
        text: 'VW Recruit riješio je naš problem nedostatka radnika na proizvodnoj liniji bez preopterećenja internog HR odjela. Najvrednije je bilo to što je tim preuzeo i zapošljavanje i dokumentaciju.',
      },
      {
        name: 'Iryna Melnyk',
        company: 'HR Lead, Nord Cargo Hub',
        text: 'Dobili smo ne samo kandidate, već i jasan proces integracije tima. Logistika, dozvole i koordinacija bili su pod kontrolom, tako da je skladište ušlo u sezonu bez zastoja.',
      },
      {
        name: 'Taras Humeniuk',
        company: 'Voditelj projekta, Urban Build Group',
        text: 'Bilo nam je važno brzo pojačati gradilišta ljudima koji stvarno dolaze u smjenu. VW Recruit pružio je predvidljivost rokova i snažnu podršku čak i nakon dolaska kandidata.',
      },
      {
        name: 'Maryna Savchuk',
        company: 'People Partner, East Service Group',
        text: 'Nakon početka suradnje prestali smo ručno rješavati "požare" s osobljem. Tim VW Recruit brzo je uskladio zahtjeve, zemlje zapošljavanja i rokove za dolazak ljudi na objekt.',
      },
      {
        name: 'Vitaliy Bondar',
        company: 'Operativni menadžer, Metal Works',
        text: 'Svidjela nam se upravo razina predvidljivosti. Tvrtka je znala kada dolaze kandidati, koji su dokumenti već spremni i u kojoj je fazi svaki pojedini radnik.',
      },
      {
        name: 'Nataliya Chernenko',
        company: 'HR direktorica, West Line Logistics',
        text: 'Za logistiku je brzina pokretanja smjena ključna. S VW Recruitom dobili smo ne samo zapošljavanje, već i normalnu operativnu podršku sve dok ljudi ne počnu raditi.',
      },
    ],
    metrics: [
      {
        value: '7 GODINA',
        label: 'Iskustva u međunarodnom zapošljavanju',
      },
      {
        value: '100 %',
        label: 'Kontrola dokumenata i legalizacije boravka',
      },
      {
        value: '10 DANA',
        label: 'Do prvih kandidata u procesu zapošljavanja',
      },
      {
        value: 'KLJUČ U RUKE',
        label: 'Podrška od selekcije do početka smjene',
      },
    ],
  },
  media: {
    eyebrow: 'Video i odgovori',
    title: 'Odgovori na ključna pitanja vlasnika tvrtki',
    reels: [
      {
        title: 'Koliko traje pokretanje međunarodnog zapošljavanja?',
        text: 'Objašnjavamo kada tvrtka dobiva prve kandidate, što utječe na rokove i u kojoj se fazi uključuje podrška za dokumentaciju.',
        meta: 'Vremenska linija pokretanja',
        duration: '02:14',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Kako tvrtka kontrolira legalnost i dokumente?',
        text: 'Detaljno opisujemo koje kvote, dozvole i vizne procese preuzimamo kako tvrtka ne bi snosila rizik pred inspekcijama.',
        meta: 'Dokumenti i legalnost',
        duration: '03:02',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Što se događa nakon dolaska radnika na projekt?',
        text: 'Prikazujemo kako izgleda prilagodba, početak smjene, komunikacija s koordinatorima i podrška timu u prvoj fazi.',
        meta: 'Prilagodba i podrška',
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
    title: 'Često postavljana pitanja',
    items: [
      {
        q: 'Kako se rješava problem jezične barijere?',
        a: 'Uključujemo prilagodbu, osnovnu obuku i komunikaciju putem koordinatora ili voditelja smjene kako bi se tim brzo uklopio u rad.',
      },
      {
        q: 'Tko traži smještaj za radnike?',
        a: 'Model može uključivati koordinaciju smještaja, logistike i dolaska ovisno o formatu suradnje i odredišnoj zemlji.',
      },
      {
        q: 'Što učiniti ako se radnik razboli ili ne dođe u smjenu?',
        a: 'Na početku projekta dogovara se rezerva, jamstveni uvjeti za zamjenu i procedura brze komunikacije s Vašom stranom.',
      },
    ],
  },
  finalCta: {
    title: 'Jeste li spremni riješiti nedostatak osoblja i skalirati svoje poslovanje?',
    lead: 'Rezervirajte besplatni 30-minutni Zoom sastanak s našim Head of Recruitment.',
  },
}

hrContent.forms.lead.title = 'Zatražite procjenu'
hrContent.forms.lead.success = 'Hvala Vam. Vaš je upit spremljen te ćemo Vas kontaktirati u vezi sa zapošljavanjem.'
hrContent.forms.callback.title = 'Rezervirajte poziv'
hrContent.forms.callback.success = 'Hvala Vam. Vaš zahtjev za poziv je spremljen.'
hrContent.forms.report.title = 'Zatražite izvješće'
hrContent.forms.report.success = 'Hvala Vam. Zaprimili smo Vaš upit i uskoro ćemo Vam poslati PDF dokument na e-mail.'
hrContent.forms.contact.title = 'Pošaljite upit'
hrContent.forms.contact.success = 'Hvala Vam. Vaš je upit zaprimljen i tim VW Recruit kontaktirat će Vas u vezi sa sljedećim korakom.'
hrContent.brand.tagline = 'Međunarodni partner za zapošljavanje'
hrContent.brand.homeAriaLabel = 'VW Recruit početna stranica'

hrContent.about = {
  meta: {
    title: 'O VW Recruit-u',
    description:
      'Saznajte više o VW Recruit-u, međunarodnom zapošljavanju radnika, procesu uvođenja tima i pristupu suradnji s tvrtkama.',
  },
  title: 'O VW Recruit-u',
  lead:
    'Pomažemo tvrtkama riješiti nedostatak osoblja putem međunarodnog zapošljavanja radnika iz Azije i Afrike, uz jasan proces od upita do dolaska radnika u smjenu.',
}

hrContent.faqPage = {
  meta: {
    title: 'Često postavljana pitanja za poslodavce',
    description:
      'Odgovori na ključna pitanja poslodavaca o međunarodnom zapošljavanju: rokovi, dokumenti, pokretanje tima, prilagodba i format suradnje.',
  },
  title: 'Često postavljana pitanja za poslodavce',
  lead:
    'Prikupili smo ključna pitanja o međunarodnom zapošljavanju radnika: od rokova pokretanja i dokumenata do smještaja, prilagodbe i logike podrške.',
}

hrContent.privacy = {
  meta: {
    title: 'Pravila privatnosti',
    description:
      'Pročitajte pravila privatnosti tvrtke VW Recruit o prikupljanju, obradi i zaštiti osobnih podataka na web stranici.',
  },
  title: 'Pravila privatnosti',
  sections: [
    {
      title: '1. Opće odredbe',
      paragraphs: [
        'Ova Pravila privatnosti utvrđuju postupak prikupljanja, korištenja, pohrane i zaštite osobnih podataka korisnika web stranice VW Recruit (u daljnjem tekstu "Web stranica"). Korištenjem naše Web stranice pristajete na uvjete ovih Pravila. Ako se ne slažete s ovim uvjetima, prestanite koristiti Web stranicu.',
      ],
    },
    {
      title: '2. Koje podatke prikupljamo',
      paragraphs: ['Tijekom korištenja Web stranice možemo prikupljati sljedeće osobne podatke:'],
      items: [
        'Kontakt podaci: ime, naziv tvrtke, e-mail adresa, broj telefona. Ove podatke unosite dobrovoljno prilikom ispunjavanja obrazaca (npr. "Rezervirajte poziv", "Zatražite izvješće", "Izračunajte troškove").',
        'Tehnički podaci: IP adresa, vrsta preglednika, vrsta uređaja, podaci o posjećenosti stranica (korištenjem kolačića i analitičkih alata).',
      ],
    },
    {
      title: '3. Svrha prikupljanja i korištenja podataka',
      paragraphs: ['Prikupljeni osobni podaci koriste se za:'],
      items: [
        'Kontaktiranje s Vama radi pružanja konzultacija o uslugama međunarodnog zapošljavanja.',
        'Slanje zatraženih materijala (npr. PDF izvješća, izračuni troškova).',
        'Poboljšanje rada Web stranice i analizu učinkovitosti naših marketinških kampanja.',
        'Slanje važnih obavijesti i komercijalnih ponuda (uz Vaš pristanak).',
      ],
    },
    {
      title: '4. Prijenos podataka trećim stranama',
      paragraphs: [
        'Ne prodajemo, ne razmjenjujemo niti prenosimo Vaše osobne podatke trećim stranama bez Vašeg pristanka, osim u slučajevima predviđenim zakonom. Podaci mogu biti dostupni našim pouzdanim suradnicima (npr. pružateljima usluga hostinga, uslugama e-mail marketinga) koji su obvezni čuvati njihovu povjerljivost.',
      ],
    },
    {
      title: '5. Zaštita i pohrana podataka',
      paragraphs: [
        'Poduzimamo odgovarajuće tehničke i organizacijske mjere kako bismo zaštitili Vaše podatke od neovlaštenog pristupa, izmjene, otkrivanja ili uništenja. Podaci se pohranjuju samo onoliko dugo koliko je potrebno za ispunjenje svrha navedenih u ovim Pravilima ili u skladu sa zakonskim zahtjevima.',
      ],
    },
    {
      title: '6. Prava korisnika',
      paragraphs: ['Imate pravo:'],
      items: [
        'Pristupiti svojim osobnim podacima koje pohranjujemo.',
        'Zatražiti ispravak netočnosti u Vašim podacima.',
        'Zatražiti brisanje Vaših podataka ("pravo na zaborav").',
        'U bilo kojem trenutku povući privolu za obradu podataka.',
      ],
    },
    {
      title: '7. Korištenje kolačića (Cookies)',
      paragraphs: [
        'Naša Web stranica koristi kolačiće kako bi osigurala pravilan rad stranica, analizu prometa i poboljšanje korisničkog iskustva. Možete konfigurirati ili isključiti spremanje kolačića u postavkama Vašeg preglednika.',
      ],
    },
    {
      title: '8. Promjene Pravila privatnosti',
      paragraphs: [
        'Zadržavamo pravo ažuriranja ovih Pravila. Promjene stupaju na snagu od trenutka njihove objave na ovoj stranici.',
      ],
    },
    {
      title: '9. Kontakt',
      paragraphs: [
        'Ako imate bilo kakvih pitanja o ovim Pravilima privatnosti ili želite ostvariti svoja prava u vezi s osobnim podacima, kontaktirajte nas putem kontakt obrasca na Web stranici ili e-mailom: partners.vizarecruting.com@gmail.com.',
      ],
    },
  ],
}

hrContent.terms = {
  meta: {
    title: 'Uvjeti korištenja',
    description:
      'Pročitajte uvjete korištenja web stranice VW Recruit, pravila interakcije putem obrazaca i osnovna načela pružanja informacija na web stranici.',
  },
  title: 'Uvjeti korištenja',
  sections: [
    {
      title: '1. Opće odredbe',
      paragraphs: [
        'Ovi Uvjeti korištenja (u daljnjem tekstu "Uvjeti") reguliraju pristup i korištenje web stranice VW Recruit (u daljnjem tekstu "Web stranica"). Otvaranjem i pregledavanjem ove Web stranice u potpunosti prihvaćate ove Uvjete.',
      ],
    },
    {
      title: '2. Usluge tvrtke',
      paragraphs: [
        'Web stranica isključivo je informativnog karaktera i kreirana je u svrhu upoznavanja korisnika s uslugama međunarodnog zapošljavanja radnika te pružanja mogućnosti slanja upita za konzultacije, kalkulacije ili analitičke materijale. Ispunjenje obrasca na stranici ne predstavlja sklapanje ugovora o pružanju usluga; ugovorni odnosi reguliraju se zasebno nakon individualnog dogovora.',
      ],
    },
    {
      title: '3. Obveze korisnika',
      paragraphs: ['Korisnik se obvezuje:'],
      items: [
        'Navesti istinite podatke (ime, kontakt podaci tvrtke) prilikom popunjavanja obrazaca na Web stranici.',
        'Ne koristiti Web stranicu za bilo kakve nezakonite, prijevarne aktivnosti ili širenje zlonamjernog softvera.',
        'Ne pokušavati neovlašteno pristupiti administrativnim sustavima Web stranice.',
      ],
    },
    {
      title: '4. Intelektualno vlasništvo',
      paragraphs: [
        'Svi materijali objavljeni na Web stranici, uključujući tekstove (opisi usluga, studije slučaja, izvješća), slike, logotipe ("VW Recruit"), grafike i strukturu dizajna, vlasništvo su tvrtke ili se koriste pod licencom. Zabranjeno je bilo kakvo kopiranje, distribucija ili korištenje materijala Web stranice u komercijalne svrhe bez prethodnog pismenog pristanka vlasnika autorskih prava.',
      ],
    },
    {
      title: '5. Odricanje od odgovornosti',
      paragraphs: [
        'Informacije na Web stranici daju se "kakve jesu". Nastojimo održavati podatke ažurnima (npr. informacije o rokovima, troškovima ili jamstvima zamjene), međutim, točni uvjeti suradnje utvrđuju se isključivo u individualnom ugovoru.',
        'Tvrtka ne snosi odgovornost za eventualne tehničke kvarove u radu Web stranice ili privremenu nemogućnost pristupa istoj.',
        'Web stranica može sadržavati poveznice na resurse trećih strana. Ne preuzimamo odgovornost za sadržaj i pravila privatnosti takvih vanjskih resursa.',
      ],
    },
    {
      title: '6. Promjene Uvjeta korištenja',
      paragraphs: [
        'Administracija Web stranice zadržava pravo izmjene ovih Uvjeta u bilo kojem trenutku bez prethodne osobne obavijesti korisnicima. Ažurirana verzija Uvjeta stupa na snagu od trenutka objave na ovoj stranici. Preporučujemo redovito provjeravanje ovog odjeljka.',
      ],
    },
    {
      title: '7. Rješavanje sporova',
      paragraphs: [
        'Svi sporovi koji proizlaze iz korištenja ove Web stranice rješavaju se pregovorima. U slučaju nepostizanja dogovora, spor se rješava u skladu s važećim zakonom [navedite državu ili jurisdikciju].',
      ],
    },
    {
      title: '8. Povratne informacije',
      paragraphs: [
        'Za sva pitanja u vezi s radom Web stranice ili uvjetima suradnje kontaktirajte nas putem obrasca na stranici "Kontakt" ili na: partners.vizarecruting.com@gmail.com.',
      ],
    },
  ],
}

hrContent.contacts = {
  meta: {
    title: 'VW Recruit Kontakt',
    description:
      'Kontaktirajte VW Recruit vezano uz međunarodno zapošljavanje radnika, pokretanje tima, dokumente i format suradnje.',
  },
  title: 'Kontakti za tvrtke koje trebaju brzo riješiti nedostatak osoblja',
  summary: [
    {
      label: 'Odgovor',
      value: 'tijekom radnog dana',
    },
    {
      label: 'Format',
      value: 'poziv, Zoom ili e-mail',
    },
    {
      label: 'Fokus',
      value: 'poslodavci i operativni timovi',
    },
  ],
  channelsTitle: 'Koji Vam je format kontakta najprikladniji',
  channelsLead:
    'Odaberite format koji Vam trenutno najviše odgovara. Ako još nemate konačni brief, možete započeti kratkim razgovorom, a kasnije preći na detalje.',
  channels: [
    {
      icon: 'brief',
      label: 'Upit za zapošljavanje',
      title: 'Ostavite upit prema Vašim potrebama',
      text: 'Najprikladnija opcija ako već znate uloge, približan broj radnika ili željeni rok za pokretanje tima.',
      actionLabel: 'Otvori obrazac',
      actionType: 'anchor',
      actionTarget: '#contact-form',
    },
    {
      icon: 'call',
      label: 'Brza sinkronizacija',
      title: 'Rezervirajte kratki razgovor s timom',
      text: 'Prikladno ako trebate brzo shvatiti odgovara li međunarodno zapošljavanje upravo Vašem slučaju i koji će biti sljedeći koraci.',
      actionLabel: 'Rezervirajte poziv',
      actionType: 'modal',
      actionTarget: 'callback',
    },
    {
      icon: 'documents',
      label: 'Put pokretanja',
      title: 'Precizirajte dokumente, rokove i logiku pokretanja',
      text: 'Objašnjavamo proces od odabira i odobrenja kandidata do dokumenata, logistike, dolaska i stupanja ljudi u smjenu.',
    },
  ],
  checklistTitle: 'Što je korisno pripremiti prije kontakta',
  checklistLead:
    'Nije potreban savršeno osmišljen brief. Čak i osnovne informacije pomoći će da brže prijeđemo na konkretan razgovor.',
  checklist: [
    'Koje točno uloge ili odjele treba pojačati',
    'Približan broj radnika i željeni datum početka',
    'Država i grad u kojem će tim raditi',
    'Trebate li samo zapošljavanje ili potpunu podršku do početka rada',
  ],
  supportTitle: 'Što tim može razjasniti već pri prvom kontaktu',
  supportLead:
    'Prvi kontakt nije radi formalnosti, već radi otklanjanja nesigurnosti i prikaza u kojoj mjeri model doista odgovara Vašem upitu.',
  support: [
    'Koliko se brzo može pokrenuti protok kandidata',
    'Koje zemlje zapošljavanja najbolje odgovaraju određenim ulogama',
    'Kako su organizirani dokumenti, dozvole i koordinacija dolaska',
    'Kakav će biti format komunikacije i pokretanja tima nakon odobrenja',
  ],
  form: {
    title: 'Ostavite upit i javit ćemo se s idućim korakom',
    lead:
      'Ostavite svoje kontakt podatke, a tim VW Recruit preporučit će najpraktičniji format pokretanja posebno za Vašu situaciju.',
    note: 'Najbolje funkcionira za poslodavce koji trebaju zapošljavanje, zamjenu ili pokretanje tima.',
  },
}

hrContent.thankYouReport = {
  meta: {
    title: 'Hvala Vam na upitu za izvješće',
    description:
      'Vaš upit za izvješće je spremljen. Tim VW Recruit uskoro će Vas kontaktirati i poslati materijal.',
  },
  title: 'Hvala Vam. Vaš upit za izvješće je primljen',
  lead:
    'Spremili smo Vaš upit i uskoro ćemo poslati materijal te Vam savjetovati praktičan sljedeći korak s obzirom na Vašu situaciju sa zapošljavanjem.',
  ctaLabel: 'Povratak na početnu',
  secondaryCtaLabel: 'Otvorite kontakte',
}

hrContent.ui.modalClose = 'Zatvori prozor'
hrContent.ui.leadCapture = 'Prikupljanje leadova'
hrContent.ui.video = 'Video'
hrContent.ui.videoPlay = 'Pokreni video'
hrContent.ui.openMenu = 'Otvori izbornik'
hrContent.ui.primaryNav = 'Glavna navigacija'
hrContent.ui.languagePickerTitle = 'Odaberite jezik'
hrContent.ui.fieldName = 'Ime'
hrContent.ui.fieldCompany = 'Tvrtka'
hrContent.ui.fieldEmail = 'E-mail'
hrContent.ui.fieldPhone = 'Telefon'
hrContent.ui.fieldIsBusiness = 'Jeste li stvarna agencija ili tvrtka?'
hrContent.ui.fieldTargetCountries = 'Koje zemlje vas zanimaju?'
hrContent.ui.fieldWorkersCount = 'Za koliko osoba trebate zapošljavanje?'
hrContent.ui.fieldSelectOption = 'Odaberite opciju'
hrContent.ui.optionYes = 'Da'
hrContent.ui.optionNo = 'Ne'
hrContent.ui.sendRequest = 'Pošaljite upit'
hrContent.ui.requestCallback = 'Rezervirajte poziv'
hrContent.ui.getReport = 'Preuzmite izvješće'
hrContent.ui.bookCall = 'Rezervirajte poziv'
hrContent.ui.quizEyebrow = 'Kviz'
hrContent.ui.quizContinue = 'Nastavi'
hrContent.ui.quizBack = 'Natrag'
hrContent.ui.quizSubmit = 'Pošalji'
hrContent.ui.quizReady = 'Spremno'
hrContent.ui.quizValidationError = 'Molimo ispunite trenutni korak.'
hrContent.ui.quizSubmitError = 'Slanje obrasca nije uspjelo. Molimo pokušajte ponovno.'
hrContent.ui.processEyebrow = 'Proces'
hrContent.ui.caseStudy = 'Studija slučaja'
hrContent.ui.caseViewLabel = 'Prikaz projekta'
hrContent.ui.leadCaptureEyebrow = 'Prikupljanje leadova'
hrContent.ui.faqEyebrow = 'Česta pitanja'
hrContent.ui.aboutEyebrow = 'O nama'
hrContent.ui.contactsEyebrow = 'Kontakt'
hrContent.ui.reportEyebrow = 'Izvješće'
hrContent.ui.privacyEyebrow = 'Pravila privatnosti'
hrContent.ui.termsEyebrow = 'Uvjeti korištenja'
hrContent.ui.thankYouEyebrow = 'Hvala'
hrContent.ui.finalCtaEyebrow = 'Završni CTA'
hrContent.ui.downloadReport = 'Preuzmite izvješće'
hrContent.ui.openContactsPage = 'Otvorite stranicu s kontaktima'
hrContent.ui.projectsExamples = 'Primjeri projekata'
hrContent.ui.reelPlaceholder = 'Mjesto za reel ili video u skočnom prozoru nakon spajanja izvora.'
hrContent.ui.industriesLead =
  'Najčešće tvrtke koriste ovaj model za operativne poslove u proizvodnji, skladištima, građevinarstvu i uslužnom sektoru.'
hrContent.ui.legalPlaceholder = 'Ovdje će biti pravni tekst. Zamijenite ga odobrenom konačnom verzijom prije pokretanja.'
hrContent.ui.footerDescription =
  'Sveobuhvatno zapošljavanje radnika iz Azije i Afrike "ključ u ruke": od traženja kandidata i dokumenata do dolaska, prilagodbe i ulaska tima u smjenu.'
hrContent.ui.footerCorePages = 'Glavne stranice'
hrContent.ui.footerLegal = 'Pravne informacije'
hrContent.ui.privacyPolicy = 'Pravila privatnosti'
hrContent.ui.termsAndConditions = 'Uvjeti korištenja'
hrContent.ui.formRequiredError = 'Molimo ispunite obavezna polja obrasca.'
hrContent.ui.formSubmittingButton = 'Slanje...'
hrContent.ui.formSubmittingStatus = 'Slanje obrasca...'
hrContent.ui.formSubmitError = 'Slanje obrasca nije uspjelo. Molimo pokušajte ponovno.'
hrContent.ui.industryVisualLogisticsAlt = 'Radnici u skladištu i logistici'
hrContent.ui.industryVisualConstructionAlt = 'Radnici na gradilištu'
hrContent.ui.industryVisualHospitalityAlt = 'Osoblje u hotelijerstvu i uslugama'
hrContent.ui.industryVisualManufacturingAlt = 'Radnici u proizvodnji'
hrContent.ui.industrySlidePlaceholder =
  'Odvojena vizualna studija slučaja za ovu vertikalu može se skalirati za SEO stranice, kvizove i personalizirane CTA-ove.'
hrContent.ui.comparisonCardCta = 'Izračunajte troškove'
hrContent.ui.comparisonOtherMark = 'IN'
hrContent.ui.guaranteesLegalDelta = 'Kvote, dozvole, vize'
hrContent.ui.guaranteesReplacementMetric = '0 $'
hrContent.ui.guaranteesReplacementDelta = 'Brza zamjena u jamstvu'
hrContent.ui.guaranteesSupportMetric = 'Ključ u ruke'
hrContent.ui.guaranteesSupportDelta = 'Od selekcije do smjene'
hrContent.ui.guaranteesFallbackDelta = 'Prednost VW Recruit'
hrContent.ui.guaranteesReplacementLabel = 'Jamstvo na startu'
hrContent.ui.guaranteesReplacementUnit = '$'
hrContent.ui.guaranteesReplacementWarrantyDays = 30
hrContent.ui.guaranteesReplacementWarrantyLabel = 'dana jamstva'
hrContent.ui.guaranteesReplacementReplyHours = 48
hrContent.ui.guaranteesReplacementReplyLabel = 'sati za odgovor'
hrContent.ui.guaranteesSupportBadge = 'Jedan tim za cijeli proces'
hrContent.ui.guaranteesCandidatesDays = 10
hrContent.ui.guaranteesCandidatesDaysLabel = 'dana do kandidata'
hrContent.ui.guaranteesSupportPercentLabel = '% podrška'
hrContent.ui.guaranteesOneTeamCount = 1
hrContent.ui.guaranteesOneTeamLabel = 'tim'
hrContent.ui.guaranteeTimelineStepOne = 'Selekcija'
hrContent.ui.guaranteeTimelineStepTwo = 'Dokumenti'
hrContent.ui.guaranteeTimelineStepThree = 'Logistika'
hrContent.ui.guaranteeTimelineStepFour = 'Dolazak'
hrContent.ui.guaranteeTimelineStepFive = 'Smjena'
hrContent.ui.guaranteeSupportStepOne = 'Selekcija'
hrContent.ui.guaranteeSupportStepTwo = 'Dolazak'
hrContent.ui.guaranteeSupportNote = 'Početak smjene'
hrContent.ui.guaranteeChecklistQuota = 'Kvote'
hrContent.ui.guaranteeChecklistPermit = 'Dozvole'
hrContent.ui.guaranteeChecklistVisa = 'Vize'
hrContent.ui.reviewFallbackValue = '7 GODINA'
hrContent.ui.reviewLabelPrefix = '7 godina '
hrContent.ui.servicesShortRequestEyebrow = 'Kratak upit'
hrContent.ui.servicesHeroGhostCta = 'Pogledajte uvjete usluge'
hrContent.ui.servicesHeroPanelTitle =
  'Zapošljavanje, dokumenti, logistika i pokretanje tima u jednom procesu'
hrContent.ui.servicesHeroPanelText =
  'Cijeli je put strukturiran tako da tvrtka vidi predvidljive faze pokretanja, a kandidat razumije što se događa u svakom koraku.'
hrContent.ui.servicesPillarsEyebrow = 'Što pokrivamo'
hrContent.ui.servicesPillarsTitle =
  'Usluga nije izgrađena na "traženju životopisa", već kao potpuni put uvođenja ljudi u radni proces'
hrContent.ui.servicesOfferEyebrow = 'Što dobivaju obje strane'
hrContent.ui.servicesOfferTitle =
  'Model u kojem tvrtka dobiva kontrolirani rezultat, a kandidat vidi transparentan proces'
hrContent.ui.servicesOfferVisualLabel = 'VW Recruit / put'
hrContent.ui.servicesOfferVisualPrimary = 'Za poslovanje'
hrContent.ui.servicesOfferVisualSecondary = 'Za kandidate'
hrContent.ui.servicesBeamEyebrow = 'Karta procesa'
hrContent.ui.servicesRouteEyebrow = 'Kako funkcionira suradnja'
hrContent.ui.servicesRouteTitle = 'Transparentan put od upita do ulaska radnika u smjenu'
hrContent.ui.servicesRouteLead =
  'Tvrtka vidi jasan put pokretanja s predvidljivim fazama od upita do ulaska ljudi u smjenu.'
hrContent.ui.servicesProofEyebrow = 'Zašto je učinkovito'
hrContent.ui.servicesProofTitle =
  'Ne samo zapošljavanje, već upravljana usluga s jasnim rezultatom u svakoj fazi'
hrContent.ui.servicesFitEyebrow = 'Gdje najbolje funkcionira'
hrContent.ui.servicesFitTitle =
  'Uloge i niše u kojima međunarodno zapošljavanje daje maksimalan operativni učinak'
hrContent.ui.servicesFitLead =
  'Svaka kartica pokazuje gdje model daje najbrži operativni rezultat, najčišće pokretanje tima i najveću stabilnost procesa.'
hrContent.ui.servicesFitScoreLabel = 'razina poklapanja'
hrContent.ui.servicesFitMetricOne = 'Brzina pokretanja'
hrContent.ui.servicesFitMetricTwo = 'Stabilnost'
hrContent.ui.servicesFitMetricThree = 'Transparentnost'
hrContent.ui.servicesFitCardTextOne =
  'Djeluje najsnažnije tamo gdje su važne ponavljajuće smjene, disciplina dolaska i brzo skaliranje bez zastoja.'
hrContent.ui.servicesFitCardTextTwo =
  'Dobro funkcionira za sezonske vrhunce, rast volumena i operacije u kojima tvrtka kritično treba ritmično dovođenje ljudi.'
hrContent.ui.servicesFitCardTextThree =
  'Prikladno za projekte sa strogim rokovima u kojima treba kombinirati zapošljavanje, dokumente i dolazak bez kaosa.'
hrContent.ui.servicesFitCardTextFour =
  'Pokazuje dobar rezultat u servisnim timovima, gdje su jasan put, brza prilagodba i stabilnost početka rada od kritične važnosti.'
hrContent.ui.servicesLeadEyebrow = 'Započnite dijalog'
hrContent.ui.servicesLeadText =
  'Za poslodavce je to brz način da shvate kako pokrenuti zapošljavanje. Za kandidate prilika da dobiju iskreno objašnjenje puta zapošljavanja i dokumenata.'
hrContent.ui.servicesSegmentBadgeBusiness = 'B2B'
hrContent.ui.servicesSegmentBadgeCandidate = 'B2C'
hrContent.ui.industriesSectionTitle = 'ZA KOJE SE KATEGORIJE OVAJ MODEL ZAPOŠLJAVANJA KORISTI'
hrContent.ui.industrySliderPrev = 'Prethodni slajd'
hrContent.ui.industrySliderNext = 'Sljedeći slajd'
hrContent.ui.quizSectionLead =
  'Kratki kviz korak po korak koji pomaže brzo prikupiti upit i prenijeti ga u jedinstvenom formatu.'
hrContent.ui.casesSectionLead =
  'Prikazujemo primjere pokretanja zapošljavanja za proizvodnju, logistiku, hotele i druge operativne timove.'
hrContent.ui.caseSliderPrev = 'Prethodni projekt'
hrContent.ui.caseSliderNext = 'Sljedeći projekt'
hrContent.ui.casesTimelineSteps = ['Briefing', 'Pretraga', 'Odobrenje', 'Dokumenti', 'Dolazak']
hrContent.ui.industriesFitSummary =
  'Signali koji obično znače da lokalno zapošljavanje više ne prati tempo Vaših operacija te je potreban sustavniji model formiranja tima.'
hrContent.ui.caseSubtitlePlaceholder = 'Kratak opis projekta'
hrContent.ui.caseProblemPlaceholder =
  'Zasebna SEO stranica za slučaj s rezultatima, rokovima i ciljanom akcijom.'
hrContent.ui.processStepLabel = 'Korak'
hrContent.ui.reportPanelTitle = 'Primite materijal na e-mail'
hrContent.ui.reportPanelText =
  'Ostavite svoje kontakte i poslat ćemo Vam koristan materijal na temu međunarodnog zapošljavanja i optimizacije troškova osoblja.'
hrContent.ui.reportPanelKicker = 'VW Recruit / Analitika'
hrContent.ui.reportPanelReportTitle = 'Tržište rada 2026'
hrContent.ui.reportPanelReportText =
  'Integracija međunarodnog osoblja za tvrtke koje imaju manjak radnika'
hrContent.ui.reportPanelGuide = 'PDF'
hrContent.ui.videoInsightLabel = 'Video uvid'
hrContent.ui.mediaDefaultDuration = '02:00'
hrContent.ui.reviewsPrev = 'Prethodna recenzija'
hrContent.ui.reviewsNext = 'Sljedeća recenzija'
hrContent.ui.genericPageCardOne = 'Osnovna stranica pripremljena za lokalizirani sadržaj'
hrContent.ui.genericPageCardTwo = 'Metapodaci i struktura su spremni za daljnje popunjavanje'
hrContent.ui.genericPageCardThree = 'Svaka ruta generira se zasebno za svaki jezik'

hrContent.quiz.title = 'Izračun zapošljavanja'
hrContent.quiz.progressLabel = 'Korak'
hrContent.quiz.completionTitle = 'Vaš je zahtjev spreman'
hrContent.quiz.completionLead =
  'Zaprimili smo Vaše odgovore. Sljedeći korak je da Vas kontaktiramo i pripremimo konzultacije ili preliminarni izračun.'
hrContent.quiz.steps = [
  {
    id: 'industry',
    label: 'Za koji sektor trebate radnike?',
    type: 'options',
    options: ['Proizvodnja', 'Građevinarstvo', 'Skladišta i logistika', 'Hoteli i usluge', 'Ostalo'],
  },
  {
    id: 'teamSize',
    label: 'Koliko Vam je radnika potrebno?',
    type: 'options',
    options: ['1–10', '11–30', '31–50', '50+'],
  },
  {
    id: 'timeline',
    label: 'Kada bi tim trebao početi raditi?',
    type: 'options',
    options: ['Hitno', 'U roku od 2–4 tjedna', 'U roku od 1–2 mjeseca', 'Zasad samo istražujem opcije'],
  },
  {
    id: 'location',
    label: 'Gdje se nalazi Vaša tvrtka?',
    type: 'text',
    fields: [
      { name: 'country', label: 'Država', required: true },
      { name: 'city', label: 'Grad', required: false },
    ],
  },
  {
    id: 'problem',
    label: 'Koji je trenutno najveći problem sa zapošljavanjem?',
    type: 'options',
    options: ['Visoki troškovi plaća', 'Nedostatak osoblja', 'Fluktuacija kadrova', 'Sezonski vrhunci', 'Širenje proizvodnje', 'Ostalo'],
  },
  {
    id: 'contact',
    label: 'Kamo da pošaljemo izračun?',
    type: 'text',
    fields: [
      { name: 'name', label: 'Ime', required: true },
      { name: 'company', label: 'Tvrtka', required: true },
      { name: 'phone', label: 'Telefon', required: true },
      { name: 'email', label: 'E-mail', required: true },
    ],
  },
]

hrContent.services = {
  title: 'Usluge međunarodnog zapošljavanja radnika "ključ u ruke"',
  lead:
    'Rješavamo <strong>nedostatak operativnog osoblja</strong> za tvrtke i vodimo kandidate do <strong>legalnog početka rada</strong>: od traženja i selekcije do dokumenata, dolaska i početka smjene.',
  intro: '',
  cta: 'Razgovarajte o zapošljavanju za tvrtku',
  metrics: [
    { value: '10', suffix: ' dana', label: 'do prvih kandidata u procesu' },
    { value: '100', suffix: ' %', label: 'podrška u dokumentima i legalnosti' },
    { value: '4', suffix: ' faze', label: 'od zahtjeva do pokretanja tima' },
  ],
  heroBadges: [
    { value: '10', suffix: ' dana', label: 'do prvih kandidata' },
    { value: '100', suffix: ' %', label: 'pravna podrška' },
    { value: 'Ključ u ruke', suffix: '', label: 'od potrage do starta smjene' },
    { value: '1 tim', suffix: '', label: 'zapošljavanje, dokumenti, logistika' },
  ],
  segments: [
    {
      variant: 'business',
      label: 'Za tvrtke',
      badge: 'B2B',
      title: 'Za tvrtke koje trebaju stabilan tim bez kadrovskih zastoja',
      text: 'Prikladno za tvrtke koje ne mogu popuniti operativne uloge lokalnim zapošljavanjem, koje rastu, imaju sezonske vrhunce ili su umorne od visoke fluktuacije osoblja.',
      cta: 'Nabavite plan zapošljavanja',
    },
    {
      variant: 'candidate',
      label: 'Za kandidate',
      badge: 'B2C',
      title: 'Za kandidate koji žele legalno raditi u inozemstvu',
      text: 'Jednostavno objašnjavamo faze: predselekcija, dokumenti, dolazak, prilagodba i početak rada. Nema netransparentnih uvjeta i nejasnih obećanja.',
      cta: 'Predajte prijavu',
    },
  ],
  pillars: [
    {
      title: 'Traženje i odabir kandidata',
      text: 'Stvaramo profil uloge, pokrećemo pretragu putem baze podataka i partnerske mreže, filtriramo slabe kandidate i na odobrenje nudimo samo odgovarajuće ljude.',
    },
    {
      title: 'Dokumenti, dozvole i legalnost',
      text: 'Bavimo se kvotama, dozvolama, viznim i migracijskim procesima kako se poslodavac ne bi utopio u birokraciji, a kandidat shvatio u kojoj je fazi.',
    },
    {
      title: 'Dolazak, prilagodba i početak smjene',
      text: 'Koordiniramo logistiku, dolazak, početak rada i prvu fazu prilagodbe kako bi radnici doista ušli na objekt u dogovoreno vrijeme.',
    },
  ],
  timeline: [
    {
      title: 'Briefing i izračun modela',
      text: 'Utvrđujemo broj ljudi, uloge, raspored, zemlju zapošljavanja i ograničenja projekta, a zatim formiramo realan scenarij zapošljavanja.',
    },
    {
      title: 'Selekcija i odobravanje kandidata',
      text: 'Pokrećemo pretragu, provodimo predselekciju (screening), provjeravamo dokumente i dajemo Vašoj strani priliku za konačno odobrenje kandidata.',
    },
    {
      title: 'Obrada i organizacija dolaska',
      text: 'Nakon odobrenja, započinjemo pripremu dokumenata, koordinaciju dozvola, logistiku i pripremu ljudi za odlazak.',
    },
    {
      title: 'Početak rada i podrška',
      text: 'Nakon dolaska koordiniramo početak smjene, prilagodbu i komunikaciju između tvrtke, radnika i odgovornih osoba na objektu.',
    },
  ],
  deliverables: [
    'Profil radnog mjesta i strategija pretraživanja za određenu ulogu',
    'Paket odabranih kandidata spremnih za odobrenje',
    'Kontrola svih faza dokumentarne obrade',
    'Vremenska linija za dolazak radnika i pokretanje tima',
    'Podrška timu pri početku rada i u prvom razdoblju prilagodbe',
    'Jamstveni uvjeti za zamjenu ovisno o formatu projekta',
  ],
  offerCards: [
    {
      title: 'Zapošljavanje za poslodavce',
      text: 'Brzo pokretanje zapošljavanja za otvorene pozicije, sezonske vrhunce ili povećanje proizvodnje.',
    },
    {
      title: 'Legalna ruta za kandidate',
      text: 'Transparentan proces selekcije, priprema dokumenata i podrška do stvarnog početka rada.',
    },
    {
      title: 'Podrška nakon starta',
      text: 'Prilagodba, komunikacija, zamjene i koordinacija procesa u prvoj fazi rada tima.',
    },
  ],
  beam: {
    title: 'Kako se kreće proces zapošljavanja od upita do ulaska ljudi u smjenu',
    lead:
      'Vizualna karta procesa koja pokazuje kako su briefing, selekcija, odobrenje, dokumenti i pokretanje tima integrirani u jedan upravljivi proces.',
    centerLabel: 'Obrada',
    outputLabel: 'Ulazak u smjenu',
    steps: ['Briefing', 'Pretraga', 'Odobrenje', 'Dokumenti', 'Dolazak'],
  },
  roles: [
    'Radnici na proizvodnim linijama, za pakiranje, sortiranje i pomoćne procese',
    'Skladišni timovi za komisioniranje, sortiranje, premještanje i logističke operacije',
    'Građevinski i montažni radnici za objekte s nedostatkom osoblja',
    'Radnici za hotele, kuhinju, čišćenje soba i uslužne djelatnosti',
  ],
  promise: {
    title: 'Jedan tim odgovoran je za cijeli put kandidata',
    text: 'Za tvrtku to znači manje kaosa između regrutacije, dokumenata, logistike i uvođenja ljudi u posao. Dobivate jedan razumljiv model interakcije umjesto mreže zasebnih izvođača.',
  },
  trust: [
    'Poslodavac vidi predvidljiv put do pokretanja tima',
    'Kandidat dobiva legalan i razumljiv put zapošljavanja',
    'Jedan tim koordinira regrutaciju, dokumente, logistiku i prilagodbu',
  ],
  form: {
    title: 'Zatražite plan zapošljavanja ili konzultacije o zapošljavanju',
    lead: 'Ispunite kratak obrazac. Za poslodavca ćemo pripremiti sljedeći korak za pokretanje zapošljavanja. Za kandidata ćemo objasniti rutu i zahtjeve za početak.',
    button: 'Zatražite konzultacije',
    note: 'Obično odgovaramo unutar radnog dana.',
  },
}

hrContent.cases = {
  title: 'Projekti međunarodnog zapošljavanja s mjerljivim operativnim rezultatom',
  lead:
    'Stvarni scenariji u kojima tvrtka rješava nedostatak osoblja, ubrzava pokretanje tima i dobiva predvidljiv raspored ulaska ljudi u posao.',
  description:
    'Studije slučaja međunarodnog zapošljavanja radnika: izazov, model implementacije, rokovi i rezultat za tvrtku.',
  eyebrow: 'Studije slučaja',
  intro:
    'Ova stranica nije tu samo za "priče o uspjehu", već kao dokaz da model funkcionira u stvarnim operativnim uvjetima: kada nedostaje ljudi, probijaju se rokovi ili dolazi sezonsko opterećenje.',
  stats: [
    { value: '3', label: 'detaljne studije slučaja' },
    { value: '4', label: 'ključna poslovna područja' },
    { value: '96', suffix: ' %', label: 'stopa ulaska u smjenu' },
  ],
  featured: [
    {
      title: 'Delta Pack',
      category: 'Proizvodnja',
      colSpan: 2,
      subtitle: 'Proizvodna tvrtka, Srednja Europa',
      problem:
        'Tvrtka dulje vrijeme nije mogla stabilno zatvoriti smjenu na liniji za pakiranje zbog dugotrajnog lokalnog zapošljavanja i stalne fluktuacije.',
      solution:
        'Model pokretanja objedinio je potragu za kandidatima, podršku za dokumente, logistiku i koordinaciju starta tima u jedan proces.',
      result:
        'Tvrtka je dobila jasan plan pokrivanja smjene, kraći ciklus odobravanja kandidata i veću kontrolu nad pokretanjem projekta.',
      timeline: 'Prvi kandidati u 7-14 dana',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Radnici na proizvodnoj liniji',
      metrics: [
        { label: 'Potreba', value: '32 radnika' },
        { label: 'Format', value: 'Linija za pakiranje' },
        { label: 'Fokus', value: 'Stabilan početak smjene' },
      ],
    },
    {
      title: 'Nord Cargo Hub',
      category: 'Logistika',
      colSpan: 1,
      subtitle: 'Skladišni kompleks i logistika',
      problem:
        'Skladište nije moglo pokriti vršna opterećenja bez rezerve ljudi i predvidljivog rasporeda dolaska radnika.',
      solution:
        'Fokus slučaja bio je na brzini formiranja užeg izbora (short-lista), kontroli dokumenata i pripremi ljudi za ulazak u smjenski rad.',
      result:
        'Operativni tim dobio je predvidljiviju vremensku liniju kako bi pripremio onboarding, nadzornike i pokrio vrhunac sezone bez kaosa.',
      timeline: 'Brzi start za sezonu',
      image: '/images/industry-logistics.jpg',
      alt: 'Radnici u skladištu i logistici',
      metrics: [
        { label: 'Potreba', value: 'Tim za sortiranje' },
        { label: 'Format', value: 'Skladišne operacije' },
        { label: 'Fokus', value: 'Spremnost za vrhunac' },
      ],
    },
    {
      title: 'Urban Build Group',
      category: 'Građevinarstvo',
      colSpan: 3,
      subtitle: 'Građevinski izvođač',
      problem:
        'Izvođač je trebao brzo pojačati aktivna gradilišta bez pomicanja rokova i bez zastoja u kompletiranju brigada.',
      solution:
        'Pretraga, dozvole, logistika i početak prilagodbe sinkronizirani su kao jedan tijek rada od odobrenja do izlaska na gradilište.',
      result:
        'Klijent je dobio model koji je smanjio jaz između odobravanja kandidata, pripreme dokumenata i stvarnog početka radova.',
      timeline: 'Ruta usklađena s rokovima na gradilištu',
      image: '/images/industry-construction.jpg',
      alt: 'Radnici na gradilištu',
      metrics: [
        { label: 'Potreba', value: 'Pojačanje gradilišta' },
        { label: 'Format', value: 'Građevinske uloge' },
        { label: 'Fokus', value: 'Zaštita rokova početka' },
      ],
    },
  ],
  convincingTitle: 'Od izazova do rezultata: zašto naše iskustvo pomaže tvrtkama da djeluju brže',
  frameworkTitle: 'Od izazova do rezultata: zašto naše iskustvo pomaže tvrtkama da djeluju brže',
  frameworkLead:
    'Snažna studija slučaja pokazuje ne samo rezultat, već i zašto je ruta pokretanja bila realna upravo za tu vrstu poslodavca.',
  routeLabel: 'Put',
  outcomeLabel: 'Rezultat',
  framework: [
    {
      title: 'Jasan početni izazov',
      text: 'Pokazujemo točno gdje je lokalno zapošljavanje, sezonalnost ili fluktuacija stvorila operativni rizik za tvrtku.',
    },
    {
      title: 'Transparentan model pokretanja',
      text: 'Objašnjavamo kako su odabir, dokumenti, logistika i dovođenje ljudi na posao povezani u jednom procesu.',
    },
    {
      title: 'Operativni rezultat',
      text: 'Prevodimo slučaj u razumljiv poslovni jezik: stabilnost smjene, brzina pokretanja i predvidljivost na objektu.',
    },
  ],
  checklistTitle: 'Što se treba nalaziti u svakoj sljedećoj studiji slučaja',
  checklist: [
    'Opis uloge i početnog kadrovskog izazova',
    'Logika zemlje zapošljavanja ili modela potrage',
    'Vremenska linija od upita do dolaska',
    'Ključne točke u vezi dokumenata i logistike',
    'Rezultat za tvrtku i jasan CTA',
  ],
  ctaTitle: 'Želite li pokrenuti sličan model zapošljavanja za svoj tim?',
  ctaLead:
    'Opišite svoj nedostatak osoblja, a mi ćemo pripremiti plan zapošljavanja, rokove pokretanja i sljedeći praktični korak za Vaše poslovanje.',
}

hrContent.industries = {
  title: 'Sektori u kojima međunarodno zapošljavanje daje najsnažniji operativni učinak',
  lead:
    'Usredotočeni smo na sektore u kojima nedostatak radnika na liniji i visoka fluktuacija najviše koče razvoj poslovanja.',
  description:
    'Međunarodno zapošljavanje radnika za proizvodnju, građevinarstvo, skladišta, logistiku, hotele i servisne timove.',
  eyebrow: 'Sektori',
  intro: '',
  sectorsTitle: 'Ključna područja u kojima model daje najbrže rezultate',
  sectorsLead: '',
  stats: [
    { value: '3', label: 'ključna sektora s najvećim utjecajem' },
    { value: '1+', label: 'godina ugovora za većinu timova' },
    { value: '54 %', label: 'potencijal smanjenja troškova osoblja' },
  ],
  sectors: [
    {
      title: 'Proizvodnja',
      colSpan: 2,
      text: 'Stabilni timovi za proizvodne trake, pogone za pakiranje i sortirne centre.',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Radnici u proizvodnji',
      tags: ['Proizvodne linije', 'Pakiranje', 'Sortiranje'],
      problem:
        'Stalne "rupe" u smjenama zbog izostanaka lokalnih radnika i godišnja fluktuacija od 30 - 50 %.',
      solution:
        'Formiramo grupe radnika koji dolaze s ugovorom na 1 godinu i više. To jamči disciplinu i nema potrebe za ponovnim obučavanjem novih ljudi svaki tjedan.',
      roles: ['Operateri na liniji', 'Radnici za pakiranje', 'Radnici za sortiranje', 'Pomoćni radnici'],
      points: [
        'Stabiliziramo izlazak u smjenu bez stalnog dodatnog zapošljavanja',
        'Ublažavamo pritisak na voditelje smjena i HR tim',
        'Pružamo predvidljiv ritam dovođenja ljudi na rad',
      ],
      cta: 'Zatražite procjenu za proizvodnju',
    },
    {
      title: 'Građevinarstvo',
      colSpan: 1,
      text: 'Skaliranje gradilišta bez ovisnosti o nedostatku osoblja na lokalnom tržištu.',
      image: '/images/industry-construction.jpg',
      alt: 'Radnici na gradilištu',
      tags: ['Montaža', 'Pomoćni radovi', 'Timovi na gradilištima'],
      problem:
        'Probijanje rokova završetka objekata zbog nemogućnosti brzog pronalaska 20 - 50 pomoćnih radnika ili montera u vrhuncu sezone.',
      solution:
        'Organiziramo brzi dolazak formiranih brigada. Preuzimamo cijelu legalizaciju kako bi se Vaši voditelji gradilišta bavili gradnjom, a ne papirologijom.',
      roles: ['Pomoćni radnici', 'Monteri', 'Armirači', 'Betonirci'],
      points: [
        'Jačamo aktivna gradilišta bez pomicanja rokova',
        'Rasterećujemo voditelje gradilišta od administrativnog tereta',
        'Radimo s fokusom na sezonske vrhunce i širenje brigada',
      ],
      cta: 'Zatražite procjenu za građevinarstvo',
    },
    {
      title: 'Skladišta i logistika',
      colSpan: 1,
      text: 'Fleksibilnost i snaga za 3PL operatere i E-trgovinu.',
      image: '/images/industry-logistics.jpg',
      alt: 'Radnici u skladištu i logistici',
      tags: ['Komisioniranje', 'Sortiranje', 'Premještanje robe'],
      problem:
        'Nepredvidljivost tijekom sezonskih vrhunaca i visoki troškovi "noćnih" smjena lokalnog osoblja.',
      solution:
        'Dobivate tim koji je spreman za intenzivan rad u smjenama. Troškovi osoblja postaju predvidljivi i fiksni.',
      roles: ['Komisionari (Pickeri)', 'Pakeri', 'Utovarivači', 'Operateri na viličarima'],
      points: [
        'Radimo s obzirom na sezonske valove i visok tempo smjena',
        'Pružamo veću predvidljivost troškova osoblja',
        'Pomažemo u planiranju pokretanja timova bez panike',
      ],
      cta: 'Zatražite procjenu za skladišta i logistiku',
    },
    {
      title: 'Hoteli i usluge',
      colSpan: 2,
      text: 'Stabilni timovi za čišćenje soba, pomoć u kuhinji i svakodnevne uslužne operacije.',
      image: '/images/industry-hospitality.jpg',
      alt: 'Osoblje u hotelijerstvu i uslugama',
      tags: ['Čišćenje soba', 'Pomoć u kuhinji', 'Uslužne operacije'],
      problem:
        'Teško je održati stabilan uslužni tim tijekom razdoblja najvećeg opterećenja kada lokalno osoblje brzo mijenja poslodavca ili se ne pojavi u smjeni.',
      solution:
        'Odabiremo radnike za dugoročniju perspektivu i gradimo legalan put njihovog dolaska na objekt, tako da operativni tim ne mora funkcionirati u modusu neprestanog izvanrednog zapošljavanja.',
      roles: ['Sobarice', 'Radnici u kuhinji', 'Uslužno osoblje', 'Univerzalni pomoćnici'],
      points: [
        'Smanjujemo kaos u svakodnevnom planiranju smjena',
        'Pomažemo hotelima i uslužnim objektima tijekom sezonskih vrhunaca',
        'Pružamo jasan i potpuno legalan put do zaposlenja',
      ],
      cta: 'Zatražite procjenu za hotele i usluge',
    },
  ],
  frameworkTitle: 'Zašto tvrtke biraju radnike iz Azije i Afrike?',
  frameworkLead:
    'Nije pitanje "jeftinije zamjene", već stabilnosti tima, motivacije i predvidivog dugog ciklusa na objektu.',
  framework: [
    {
      title: 'Visoka motivacija',
      text: 'Kandidatima iz ovih regija rad u Europi je prilika za bolju budućnost, stoga više cijene radno mjesto i rijetko mijenjaju tvrtku nakon mjesec dana.',
    },
    {
      title: 'Disciplina',
      text: 'U mnogim azijskim zemljama radna kultura izgrađena je na poštovanju hijerarhije, jasnim uputama i stabilnom izvršavanju zadataka koji se ponavljaju.',
    },
    {
      title: 'Dugoročnost',
      text: 'Radnici dolaze s namjenskim vizama na dug period, što rješava problem sezonskog gubitka osoblja i preopterećenosti zbog stalnog ponovnog zapošljavanja.',
    },
  ],
  fitTitle: 'Kada Vam je međunarodno zapošljavanje zasigurno potrebno?',
  fitLead:
    'Ako prepoznajete svoju situaciju u ovim signalima, lokalno zapošljavanje vjerojatno više ne rješava problem na sustavan način.',
  fitSignals: [
    'Fluktuacija premašuje 20 %: trošite više vremena na intervjue nego na upravljanje proizvodnjom.',
    'Pregrijano lokalno tržište: očekivanja plaća lokalnih kandidata rastu, ali ne i produktivnost.',
    'Planiranje novih objekata ili linija: bojite se pokrenuti nove kapacitete jer nema tko raditi.',
    'Cijena zapošljavanja raste: lokalne agencije uzimaju visoke provizije, a ljudi daju otkaz nakon tjedan dana.',
  ],
  ctaTitle: 'Trebate plan implementacije za specifičan sektor?',
  ctaLead:
    'Napišite nam koja je Vaša niša, veličina tima i rokovi početka, a mi ćemo predložiti najbolji model zapošljavanja upravo za Vašu operaciju.',
  seoTitle: 'Međunarodno zapošljavanje osoblja za proizvodnju, skladišta i građevinarstvo',
  seoText:
    'VW Recruit specijaliziran je za sveobuhvatno rješavanje problema nedostatka osoblja za europske tvrtke. Osiguravamo odabir linijskog osoblja za skladišta, tvornice i gradilišta, koristeći resurse zemalja s viškom potencijala radne snage, posebno Filipina, Indije, Vijetnama i afričkih zemalja. Naš model ne uključuje samo regrutaciju, već i potpunu dokumentarnu podršku, logistiku i prilagodbu radnika na objektu, što klijentima omogućuje smanjenje operativnih troškova osoblja do 54 %.',
}

hrContent.report = {
  title: 'Tržište rada 2026: Kada lokalno zapošljavanje prestaje funkcionirati',
  lead:
    'Analitičko izvješće za poslodavce koji žele razumjeti stvarne troškove, rokove i pravne nijanse međunarodnog zapošljavanja.',
  description:
    'Preuzmite izvješće o međunarodnom zapošljavanju radnika, troškovima osoblja, pravnim rizicima i pokretanju tima.',
  eyebrow: 'Izvješće',
  intro:
    'Ovo nije još jedan PDF formatiran "reda radi", već sadržaj koji pretvara interes u ozbiljan razgovor o troškovima, rokovima pokretanja, legalnosti i spremnosti tvrtke za zapošljavanje stranaca.',
  stats: [
    { value: '1', label: 'praktično analitičko izvješće' },
    { value: '5', label: 'ključnih uvida unutra' },
    { value: '1', label: 'jasna akcija konverzije' },
  ],
  pointsTitle: 'Što se nalazi u izvješću',
  points: [
    'Logika usporedbe troškova: lokalno zapošljavanje u odnosu na strane radnike',
    'Najčešće pravne pogreške pri zapošljavanju stranaca',
    'Kako pripremiti operativu za onboarding i prilagodbu',
    'Što zapravo utječe na rokove pokretanja od briefa do prve smjene',
    'Kako smanjiti pritisak na osoblje u radničkim i operativnim ulogama',
  ],
  benefitsTitle: 'Zašto tvrtke traže ovo izvješće',
  benefitsLead:
    'Izvješće je posebno korisno kada tvrtka već osjeća nedostatak kadra i umjesto apstraktnih informacija treba jasan model rješenja.',
  benefits: [
    {
      title: 'Brži interni dogovor',
      text: 'Pomaže vlasniku, operativnom odjelu i HR-u da govore istim jezikom o stvarnom putu pokretanja zapošljavanja.',
    },
    {
      title: 'Jasna slika troškova',
      text: 'Omogućuje trezveniju usporedbu pritiska plaća, rokova pokretanja i rizika od prekida kontinuiteta tima.',
    },
    {
      title: 'Bolji prijelaz na sljedeći korak',
      text: 'Prenosi interes s razine "samo gledam" na ozbiljne konzultacije s konkretnim ograničenjima i rokovima.',
    },
  ],
  trustTitle: 'Što ovo izvješće čini doista korisnim',
  trustLead:
    'Snažan analitički materijal ne bi trebao biti tek općenit HR sadržaj. Mora izravno odgovarati na poslovni problem zbog kojeg osoba ispunjava obrazac.',
  trustPoints: [
    'Izgrađeno oko pritiska na kadrove u operativnom poslovanju, a ne na općim teorijama',
    'Pripremljeno kao temelj za prve konzultacije ili prodajni (sales) sastanak',
    'Korisno za poslodavce koji procjenjuju odgovara li model njihovom objektu i rokovima',
  ],
  faqTitle: 'Pitanja prije preuzimanja',
  faq: [
    {
      q: 'Za koga je ovo izvješće?',
      a: 'Za poslodavce u proizvodnji, logistici, građevinarstvu, hotelijerstvu i drugim operativnim djelatnostima gdje postoji nedostatak radnika ili pritisak na rast plaća.',
    },
    {
      q: 'Je li to samo još jedan općenit PDF?',
      a: 'Ne. Izvješće bi trebalo pomoći u donošenju stvarne odluke o zapošljavanju te pripremiti sadržajan razgovor o modelu implementacije, rokovima i ograničenjima.',
    },
    {
      q: 'Što se događa nakon slanja obrasca?',
      a: 'Osoba dobiva put za preuzimanje PDF-a i ujedno postaje kvalificirani lead za daljnje konzultacije o potrebi zapošljavanja.',
    },
  ],
  ctaTitle: 'Zatražite izvješće i shvatite svoj sljedeći korak sa zaposlenicima',
  ctaLead:
    'Ostavite svoje kontakte i poslat ćemo Vam PDF te Vam pomoći procijeniti odgovara li model međunarodnog zapošljavanja Vašem trenutačnom nedostatku osoblja.',
  formTitle: 'Zatražite izvješće',
  formLead:
    'Ispunite kratki obrazac kako biste dobili PDF i prešli na ozbiljniji razgovor o troškovima osoblja, rokovima pokretanja i pravnoj pripremi.',
  formNote: 'Najkorisnije za poslodavce koji planiraju zapošljavanje, zamjenu ili širenje tima.',
}
