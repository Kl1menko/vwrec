import { createLocaleContent } from '../create-locale-content.js'

export const roContent = createLocaleContent({
  code: 'ro',
  name: 'Romanian',
  nativeName: 'Română',
  translated: true,
  homeLabel: 'Acasă',
  heroTitle: 'Recrutare internațională pentru companiile care au nevoie de personal operațional fără întârzieri.',
  heroLead:
    'Structura site-ului este deja pregătită pentru generarea de lead-uri, creștere SEO multilingvă, chestionare, studii de caz și CTA-uri consultative pentru clienții B2B.',
})

roContent.site.description =
  'Reduceți costurile cu personalul cu până la 54% datorită recrutării internaționale „la cheie” a muncitorilor din Asia și Africa.'

roContent.navigation.items = [
  { key: 'home', label: 'Acasă' },
  { key: 'services', label: 'Servicii' },
  { key: 'industries', label: 'Industrii' },
  { key: 'cases', label: 'Proiecte' },
  { key: 'report', label: 'Raport' },
  { key: 'contacts', label: 'Contacte' },
]

roContent.navigation.primaryCta = 'Calculați recrutarea'
roContent.navigation.secondaryCta = 'Rezervați un apel'

roContent.home = {
  meta: {
    title: 'Recrutare internațională de personal pentru companii',
    description:
      'Reduceți costurile cu personalul și acoperiți deficitul de forță de muncă prin recrutarea internațională „la cheie” din Asia și Africa.',
  },
  hero: {
    lines: ['REDUCEȚI COSTURILE', 'CU PERSONALUL'],
    highlight: 'CU PÂNĂ LA 54%',
    lead:
      'datorită recrutării internaționale „la cheie” a muncitorilor din <strong>Asia și Africa</strong>',
    stats: [
      { value: 10, suffix: ' ZILE', label: 'până la selecția primilor candidați' },
      { value: 7, suffix: ' ANI', label: 'experiență în recrutare internațională' },
      { value: 100, suffix: ' %', label: 'suport pentru documente și sosire' },
    ],
    video: {
      src: '/videos/international-recruitment-overview.mp4',
      poster: '/video-poster-home.svg',
      type: 'video/mp4',
    },
  },
  comparison: {
    eyebrow: 'Comparația modelelor de recrutare',
    title: 'Cât plătește în plus o companie la recrutarea locală',
    cards: [
      {
        title: 'Alții',
        brandNote: 'recrutare locală / alte agenții',
        amount: '$36 000',
        period: '/ lună',
        note: 'pentru o echipă de 30 de muncitori',
        variant: 'other',
        rows: [
          {
            title: 'Bază salarială mai mare',
            text: 'În medie 1000–1400 $ pe angajat la recrutarea locală.',
          },
          {
            title: 'Formarea echipei durează mai mult',
            text: 'Selecția primelor persoane durează 3–6 săptămâni sau mai mult.',
          },
          {
            title: 'Recrutare repetată constantă',
            text: 'Din cauza fluctuației și sezonalității, compania caută personal în mod constant.',
          },
        ],
      },
      {
        title: 'VW Recruit',
        brandNote: 'recrutare internațională „la cheie”',
        amount: '$18 000',
        period: '/ lună',
        note: 'pentru o echipă de 30 de muncitori',
        variant: 'brand',
        rows: [
          {
            title: 'Cost mediu mai mic',
            text: 'În medie 400–700 $ pe angajat, în funcție de rol și țară.',
          },
          {
            title: 'Primii candidați în 7–14 zile',
            text: 'Lansare rapidă datorită bazei de date internaționale și rețelei de parteneri.',
          },
          {
            title: 'Echipă mai stabilă',
            text: 'Mai puține cicluri de căutare și o predictibilitate mai bună pentru companie.',
          },
        ],
      },
    ],
    cta: 'Calculați recrutarea',
  },
  industries: {
    eyebrow: 'Pentru care industrii este potrivit acest model',
    title: 'Cel mai des acest model de recrutare este folosit pentru munci operaționale',
    lead:
      'Formăm echipe pentru producție, depozite, construcții și servicii, atunci când compania are nevoie de o lansare predictibilă și costuri reduse cu personalul.',
    items: [
      {
        title: 'Depozite și logistică',
        text: 'Formarea echipelor pentru comisionare, ambalare, manipularea mărfurilor și operațiuni de depozitare.',
      },
      {
        title: 'Construcții',
        text: 'Recrutarea muncitorilor pentru șantiere, lucrări de montaj, auxiliare și tehnice.',
      },
      {
        title: 'Hoteluri și servicii',
        text: 'Recrutarea personalului pentru curățenie, bucătărie, întreținere și operațiuni zilnice.',
      },
      {
        title: 'Producție',
        text: 'Recrutarea muncitorilor pentru linii de producție, ambalare, sortare și procese auxiliare.',
      },
    ],
  },
  calculator: {
    eyebrow: 'Calculator',
    title: 'Calculați recrutarea personalului pentru compania dvs.',
    lead:
      'Răspundeți la câteva întrebări scurte și primiți o estimare pentru recrutarea echipei afacerii dvs.',
  },
  casesSection: {
    eyebrow: 'Proiectele noastre',
    title: 'Proiectele noastre de recrutare a personalului',
    lead:
      'Arătăm cum decurge recrutarea în proiecte reale: de la producție și depozite până la servicii și echipe operaționale.',
    cta: 'Toate proiectele',
    items: [
      {
        title: 'Delta Pack',
        subtitle: 'Companie de producție, Europa Centrală',
        problem: 'Am rezolvat deficitul de 32 de muncitori pe linia de ambalare după o recrutare locală îndelungată și fluctuație mare.',
        image: '/images/industry-manufacturing.jpg',
        alt: 'Muncitori pe linia de producție',
      },
      {
        title: 'Nord Cargo Hub',
        subtitle: 'Complex de depozitare și logistică',
        problem: 'Am format o echipă de ture pentru comisionare și sortare când compania nu făcea față vârfurilor de activitate.',
        image: '/images/industry-logistics.jpg',
        alt: 'Muncitori în depozit și logistică',
      },
      {
        title: 'Urban Build Group',
        subtitle: 'Antreprenor în construcții',
        problem: 'Am consolidat șantierele cu montatori și muncitori auxiliari pentru a nu depăși termenele de lansare a noii etape de construcție.',
        image: '/images/industry-construction.jpg',
        alt: 'Muncitori pe șantier',
      },
    ],
  },
  process: {
    eyebrow: 'Ce se întâmplă după trimiterea cererii',
    title: 'Următorii pași după solicitarea dvs.',
    intro:
      'Clarificăm numărul de muncitori, cerințele pentru candidați și termenele de lansare a echipei. Apoi începe recrutarea prin baza noastră de date și agențiile partenere din țările de recrutare.',
    steps: [
      {
        title: 'Analiza posturilor și lansarea recrutării',
        text: 'Creăm profilul candidatului, convenim asupra termenelor și începem căutarea în sursele relevante.',
      },
      {
        title: 'Selecția și verificarea candidaților',
        text: 'Candidații trec printr-o preselecție, verificarea documentelor și un interviu de bază. Compania primește profilurile pentru aprobarea finală.',
      },
      {
        title: 'Procesarea documentelor',
        text: 'Organizăm pregătirea tuturor documentelor necesare pentru angajare și sosire și monitorizăm procesul până la finalizare.',
      },
      {
        title: 'Sosirea și începerea muncii',
        text: 'Coordonăm logistica și sosirea muncitorilor. După sosire, echipa începe lucrul în companie.',
      },
    ],
  },
  guarantees: {
    eyebrow: 'Garanții și securitate',
    title: 'Ce primește compania odată cu recrutarea',
    items: [
      {
        title: '100% legalitate',
        text: 'Ne asumăm responsabilitatea pentru cote, permise de muncă și procese de obținere a vizelor, astfel încât compania să fie protejată de controale.',
      },
      {
        title: 'Înlocuire gratuită',
        text: 'Oferim o perioadă de garanție pentru înlocuirea candidatului în cazul în care proiectul necesită stabilitate la start.',
      },
      {
        title: 'Suport complet „la cheie”',
        text: 'De la interviul în Asia până la preluarea de la aeroport și intrarea în tură, cu suport pentru adaptare și comunicare.',
      },
    ],
  },
  reportBlock: {
    eyebrow: 'Material analitic',
    title: 'De ce recrutarea locală își pierde din eficiență?',
    lead:
      'Obțineți raportul analitic exclusiv „Piața Muncii 2026: Integrarea personalului internațional”.',
    points: [
      'Tabel de comparație a costurilor: Piața locală vs. Expiați',
      '5 greșeli legale la angajarea străinilor',
      'Cum să depășiți bariera lingvistică în producție',
    ],
    cta: 'Descărcați raportul în PDF',
  },
  reviews: {
    eyebrow: 'Încredere',
    title: 'Liderii de piață au încredere în noi',
    items: [
      {
        name: 'Oleksandr Koval',
        company: 'Director de Operațiuni, Delta Pack',
        text: 'VW Recruit a rezolvat deficitul nostru de oameni pe linia de producție fără a ne supraîncărca departamentul HR intern. Cel mai valoros lucru a fost că echipa a preluat atât recrutarea, cât și asistența documentară.',
      },
      {
        name: 'Iryna Melnyk',
        company: 'HR Lead, Nord Cargo Hub',
        text: 'Am obținut nu doar candidați, ci un proces clar de lansare a echipei. Logistica, permisele și coordonarea au fost sub control, astfel încât depozitul a intrat în sezon fără întreruperi.',
      },
      {
        name: 'Taras Humeniuk',
        company: 'Manager de Proiect, Urban Build Group',
        text: 'A fost important pentru noi să consolidăm rapid șantierele cu oameni care chiar apar la muncă. VW Recruit a oferit predictibilitatea termenelor și un suport solid chiar și după sosirea candidaților.',
      },
      {
        name: 'Maryna Savchuk',
        company: 'People Partner, East Service Group',
        text: 'După începerea colaborării, am încetat să mai stingem „incendiile” de personal manual. Echipa VW Recruit a sincronizat rapid cerințele, țările de recrutare și termenele de intrare a oamenilor pe obiectiv.',
      },
      {
        name: 'Vitaliy Bondar',
        company: 'Manager de Operațiuni, Metal Works',
        text: 'Ne-a plăcut tocmai nivelul de predictibilitate. Afacerea știa când vor sosi candidații, ce documente erau deja gata și în ce etapă se afla fiecare muncitor.',
      },
      {
        name: 'Nataliya Chernenko',
        company: 'Director HR, West Line Logistics',
        text: 'Pentru logistică, viteza de lansare a turelor este critică. Cu VW Recruit am obținut nu doar recrutare, ci un suport operațional normal până la intrarea oamenilor la muncă.',
      },
    ],
    metrics: [
      {
        value: '7 ANI',
        label: 'Experiență în recrutare internațională',
      },
      {
        value: '100 %',
        label: 'Controlul documentelor și procesării legale',
      },
      {
        value: '10 ZILE',
        label: 'Până la primii candidați în proces',
      },
      {
        value: 'LA CHEIE',
        label: 'Suport de la selecție până la intrarea în tură',
      },
    ],
  },
  media: {
    eyebrow: 'Video și răspunsuri',
    title: 'Răspunsuri la principalele întrebări ale proprietarilor de afaceri',
    reels: [
      {
        title: 'Cât durează lansarea recrutării internaționale?',
        text: 'Explicăm când compania primește primii candidați, ce influențează termenele și în ce etapă intervine asistența documentară.',
        meta: 'Cronologia lansării',
        duration: '02:14',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Cum controlează compania legalitatea și documentele?',
        text: 'Detaliem ce cote, permise și procese de vize gestionăm astfel încât compania să nu suporte riscuri în fața controalelor.',
        meta: 'Documente și legalitate',
        duration: '03:02',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Ce se întâmplă după sosirea muncitorilor în proiect?',
        text: 'Arătăm cum decurge adaptarea, începerea turei, comunicarea cu coordonatorii și suportul echipei în prima etapă.',
        meta: 'Adaptare și suport',
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
    title: 'Întrebări frecvente',
    items: [
      {
        q: 'Cum este rezolvată bariera lingvistică?',
        a: 'Includem adaptarea, pregătirea de bază și comunicarea prin intermediul unui coordonator sau șef de echipă, astfel încât echipa să se integreze rapid în muncă.',
      },
      {
        q: 'Cine caută cazare pentru muncitori?',
        a: 'Modelul poate include coordonarea cazării, logisticii și sosirii, în funcție de formatul cooperării și de țara de destinație.',
      },
      {
        q: 'Ce se întâmplă dacă un muncitor se îmbolnăvește sau nu intră în tură?',
        a: 'La începutul proiectului se agreează o rezervă, condiții de garanție pentru înlocuire și o procedură de comunicare rapidă cu partea dvs.',
      },
    ],
  },
  finalCta: {
    title: 'Sunteți gata să rezolvați deficitul de personal și să vă extindeți afacerea?',
    lead: 'Rezervați o sesiune gratuită de 30 de minute pe Zoom cu Head of Recruitment al nostru.',
  },
}

roContent.forms.lead.title = 'Obțineți calculul'
roContent.forms.lead.success = 'Vă mulțumim. Cererea dvs. a fost salvată și vă vom contacta în legătură cu recrutarea.'
roContent.forms.callback.title = 'Rezervați un apel'
roContent.forms.callback.success = 'Vă mulțumim. Cererea dvs. de apel a fost salvată.'
roContent.forms.report.title = 'Obțineți raportul'
roContent.forms.report.success = 'Vă mulțumim. Am primit cererea și vă vom trimite în curând documentul PDF pe e-mail.'
roContent.forms.contact.title = 'Trimiteți cererea'
roContent.forms.contact.success = 'Vă mulțumim. Cererea dvs. a fost primită, iar echipa VW Recruit vă va contacta cu privire la următorul pas.'
roContent.brand.tagline = 'Partener internațional de recrutare'
roContent.brand.homeAriaLabel = 'VW Recruit Pagina principală'

roContent.about = {
  meta: {
    title: 'Despre VW Recruit',
    description:
      'Aflați mai multe despre VW Recruit, recrutarea internațională, traseul lansării echipei și abordarea colaborării cu companiile.',
  },
  title: 'Despre VW Recruit',
  lead:
    'Ajutăm afacerile să-și acopere deficitul de personal prin recrutarea internațională a muncitorilor din Asia și Africa, cu un traseu clar de la cerere până la intrarea oamenilor în tură.',
}

roContent.faqPage = {
  meta: {
    title: 'Întrebări frecvente pentru angajatori',
    description:
      'Răspunsuri la principalele întrebări ale angajatorilor despre recrutarea internațională: termene, documente, lansarea echipei, adaptare și formatul colaborării.',
  },
  title: 'Întrebări frecvente pentru angajatori',
  lead:
    'Am colectat principalele întrebări despre recrutarea internațională a personalului: de la termenele de lansare și documente până la cazare, adaptare și logica asistenței.',
}

roContent.privacy = {
  meta: {
    title: 'Politica de confidențialitate',
    description:
      'Citiți politica de confidențialitate a VW Recruit cu privire la colectarea, prelucrarea și protejarea datelor cu caracter personal pe site.',
  },
  title: 'Politica de confidențialitate',
  sections: [
    {
      title: '1. Dispoziții generale',
      paragraphs: [
        'Această Politică de confidențialitate stabilește procedura de colectare, utilizare, stocare și protejare a datelor cu caracter personal ale utilizatorilor site-ului VW Recruit (denumit în continuare "Site-ul"). Prin utilizarea Site-ului nostru, sunteți de acord cu termenii acestei Politici. Dacă nu sunteți de acord cu acești termeni, vă rugăm să încetați utilizarea Site-ului.',
      ],
    },
    {
      title: '2. Ce date colectăm',
      paragraphs: ['La utilizarea Site-ului, putem colecta următoarele date cu caracter personal:'],
      items: [
        'Informații de contact: nume, numele companiei, adresa de e-mail, numărul de telefon. Furnizați aceste date în mod voluntar la completarea formularelor (de ex. "Rezervați un apel", "Obțineți raportul", "Calculați recrutarea").',
        'Date tehnice: adresa IP, tipul browserului, tipul dispozitivului, date privind vizitarea paginilor (folosind cookie-uri și instrumente analitice).',
      ],
    },
    {
      title: '3. Scopul colectării și utilizării datelor',
      paragraphs: ['Datele cu caracter personal colectate sunt utilizate pentru:'],
      items: [
        'A vă contacta în scopul furnizării de consultanță privind serviciile de recrutare internațională.',
        'A trimite materialele solicitate (de ex., rapoarte PDF, calcule de costuri).',
        'A îmbunătăți funcționarea Site-ului și a analiza eficiența campaniilor noastre de marketing.',
        'A trimite notificări importante și oferte comerciale (cu consimțământul dvs.).',
      ],
    },
    {
      title: '4. Transferul datelor către terți',
      paragraphs: [
        'Nu vindem, nu schimbăm și nu transferăm datele dvs. cu caracter personal către terți fără consimțământul dvs., cu excepția cazurilor prevăzute de lege. Datele pot fi accesibile contractorilor noștri de încredere (de ex., furnizori de hosting, servicii de e-mail marketing) care sunt obligați să păstreze confidențialitatea acestora.',
      ],
    },
    {
      title: '5. Protecția și stocarea datelor',
      paragraphs: [
        'Luăm măsuri tehnice și organizatorice adecvate pentru a vă proteja datele de accesul neautorizat, modificarea, dezvăluirea sau distrugerea acestora. Datele sunt stocate doar pe perioada necesară îndeplinirii scopurilor prevăzute în această Politică sau conform cerințelor legale.',
      ],
    },
    {
      title: '6. Drepturile utilizatorilor',
      paragraphs: ['Aveți dreptul de a:'],
      items: [
        'Obține acces la datele dvs. cu caracter personal pe care le stocăm.',
        'Solicita corectarea inexactităților din datele dvs.',
        'Solicita ștergerea datelor dvs. ("dreptul de a fi uitat").',
        'Retrage oricând consimțământul pentru prelucrarea datelor.',
      ],
    },
    {
      title: '7. Utilizarea Cookie-urilor (Cookies)',
      paragraphs: [
        'Site-ul nostru folosește cookie-uri pentru a asigura funcționarea corectă a paginilor, analiza traficului și îmbunătățirea experienței utilizatorilor. Puteți configura sau dezactiva salvarea cookie-urilor în setările browserului dvs.',
      ],
    },
    {
      title: '8. Modificări ale Politicii de confidențialitate',
      paragraphs: [
        'Ne rezervăm dreptul de a actualiza această Politică. Modificările intră în vigoare din momentul publicării lor pe această pagină.',
      ],
    },
    {
      title: '9. Contact',
      paragraphs: [
        'Dacă aveți întrebări referitoare la această Politică de confidențialitate sau doriți să vă exercitați drepturile privind datele cu caracter personal, vă rugăm să ne contactați prin intermediul formularului de contact de pe Site sau prin e-mail: [E-mailul dvs., de ex.: hello@vwrecruit.com].',
      ],
    },
  ],
}

roContent.terms = {
  meta: {
    title: 'Termeni și condiții de utilizare',
    description:
      'Citiți termenii de utilizare a site-ului VW Recruit, regulile de interacțiune prin formulare și principiile de bază ale furnizării informațiilor pe site.',
  },
  title: 'Termeni și condiții de utilizare',
  sections: [
    {
      title: '1. Dispoziții generale',
      paragraphs: [
        'Acești Termeni și condiții de utilizare (denumiți în continuare "Termeni") reglementează accesul și utilizarea site-ului VW Recruit (denumit în continuare "Site-ul"). Accesând și navigând pe acest Site, sunteți de acord în totalitate cu acești Termeni.',
      ],
    },
    {
      title: '2. Serviciile companiei',
      paragraphs: [
        'Site-ul are exclusiv un caracter informativ și a fost creat pentru a familiariza utilizatorii cu serviciile de recrutare internațională a personalului și pentru a oferi posibilitatea de a lăsa o cerere de consultanță, calcule sau materiale analitice. Completarea unui formular pe site nu constituie încheierea unui contract de prestări servicii; relațiile contractuale sunt formalizate separat, în urma unui acord individual.',
      ],
    },
    {
      title: '3. Obligațiile utilizatorului',
      paragraphs: ['Utilizatorul se obligă:'],
      items: [
        'Să furnizeze informații veridice (nume, datele de contact ale companiei) la completarea formularelor de pe Site.',
        'Să nu utilizeze Site-ul pentru acțiuni ilegale, frauduloase sau pentru distribuirea de software malițios.',
        'Să nu încerce să obțină acces neautorizat la sistemele de administrare ale Site-ului.',
      ],
    },
    {
      title: '4. Proprietatea intelectuală',
      paragraphs: [
        'Toate materialele plasate pe Site, inclusiv textele (descrierile serviciilor, studiile de caz, rapoartele), imaginile, logo-urile ("VW Recruit"), elementele grafice și structura de design, sunt proprietatea companiei sau sunt utilizate sub licență. Orice copiere, distribuire sau utilizare a materialelor Site-ului în scopuri comerciale fără acordul scris prealabil al proprietarului drepturilor de autor este interzisă.',
      ],
    },
    {
      title: '5. Renunțarea la răspundere',
      paragraphs: [
        'Informațiile de pe Site sunt furnizate "ca atare". Ne străduim să menținem datele actualizate (de ex., informații despre termene, costuri sau garanții de înlocuire), însă condițiile exacte ale colaborării sunt fixate exclusiv într-un contract individual.',
        'Compania nu poartă răspunderea pentru posibile defecțiuni tehnice în funcționarea Site-ului sau incapacitatea temporară de a-l accesa.',
        'Site-ul poate conține link-uri către resurse ale unor terțe părți. Nu suntem responsabili pentru conținutul și politicile de confidențialitate ale respectivelor resurse externe.',
      ],
    },
    {
      title: '6. Modificări ale Termenilor de utilizare',
      paragraphs: [
        'Administrația Site-ului își rezervă dreptul de a face modificări la acești Termeni în orice moment, fără o notificare personală prealabilă a utilizatorilor. Versiunea actualizată a Termenilor intră în vigoare din momentul publicării sale pe această pagină. Vă recomandăm să verificați periodic această secțiune.',
      ],
    },
    {
      title: '7. Soluționarea litigiilor',
      paragraphs: [
        'Toate litigiile care decurg din utilizarea acestui Site vor fi soluționate prin negocieri. În cazul în care nu se ajunge la un acord, litigiul va fi supus examinării în conformitate cu legislația în vigoare din [specificați țara sau jurisdicția].',
      ],
    },
    {
      title: '8. Feedback',
      paragraphs: [
        'Pentru toate întrebările privind funcționarea Site-ului sau condițiile de colaborare, vă rugăm să ne contactați prin intermediul formularului de pe pagina "Contacte" sau la adresa: [E-mailul / Telefonul dvs.].',
      ],
    },
  ],
}

roContent.contacts = {
  meta: {
    title: 'Contacte VW Recruit',
    description:
      'Contactați VW Recruit pentru recrutarea internațională de personal, lansarea echipei, documente și formatul de colaborare.',
  },
  title: 'Contacte pentru companiile care trebuie să rezolve rapid deficitul de personal',
  summary: [
    {
      label: 'Răspuns',
      value: 'în timpul zilei lucrătoare',
    },
    {
      label: 'Format',
      value: 'apel, Zoom sau e-mail',
    },
    {
      label: 'Focus',
      value: 'angajatori și echipe operaționale',
    },
  ],
  channelsTitle: 'Cum este cel mai confortabil să începeți',
  channelsLead:
    'Alegeți formatul care vă convine cel mai mult acum. Dacă nu aveți încă un brief final, puteți începe cu o discuție scurtă și veți trece la detalii mai târziu.',
  channels: [
    {
      icon: 'brief',
      label: 'Cerere de recrutare',
      title: 'Lăsați o solicitare conform nevoilor dvs.',
      text: 'Cea mai convenabilă variantă, dacă cunoașteți deja rolurile, numărul aproximativ de muncitori sau termenul dorit de lansare a echipei.',
      actionLabel: 'Deschideți formularul',
      actionType: 'anchor',
      actionTarget: '#contact-form',
    },
    {
      icon: 'call',
      label: 'Sincronizare rapidă',
      title: 'Rezervați un apel scurt cu echipa',
      text: 'Potrivit dacă trebuie să înțelegeți rapid dacă recrutarea internațională se potrivește cazului dvs. și care vor fi pașii următori.',
      actionLabel: 'Rezervați un apel',
      actionType: 'modal',
      actionTarget: 'callback',
    },
    {
      icon: 'documents',
      label: 'Traseul de lansare',
      title: 'Clarificați documentele, termenele și logica',
      text: 'Vă explicăm procesul de la selecția și aprobarea candidaților până la documente, logistică, sosire și intrarea oamenilor în tură.',
    },
  ],
  checklistTitle: 'Ce este util să pregătiți înainte de a ne contacta',
  checklistLead:
    'Nu este necesar un brief perfect formulat. Chiar și informațiile de bază ne vor ajuta să trecem mai repede la o discuție la obiect.',
  checklist: [
    'Ce roluri sau departamente specifice trebuie consolidate',
    'Numărul aproximativ de lucrători și termenul de start dorit',
    'Țara și orașul unde va lucra echipa',
    'Dacă aveți nevoie doar de recrutare sau de suport complet până la lansare',
  ],
  supportTitle: 'Ce poate clarifica echipa chiar de la primul contact',
  supportLead:
    'Primul contact nu este pentru formalitate, ci pentru a elimina incertitudinea și a vă arăta cât de bine se potrivește modelul cererii dvs.',
  support: [
    'Cât de repede poate fi lansat fluxul de candidați',
    'Ce țări de recrutare se potrivesc cel mai bine anumitor roluri',
    'Cum sunt organizate documentele, permisele și coordonarea sosirii',
    'Cum va arăta formatul de comunicare și de lansare a echipei după aprobare',
  ],
  form: {
    title: 'Lăsați o cerere și vom reveni cu pasul următor',
    lead:
      'Lăsați-ne datele de contact, iar echipa VW Recruit vă va sugera cel mai practic format de start, specific situației dvs.',
    note: 'Cel mai potrivit pentru angajatorii care au nevoie de recrutare, înlocuire sau lansarea unei echipe.',
  },
}

roContent.thankYouReport = {
  meta: {
    title: 'Vă mulțumim pentru solicitarea raportului',
    description:
      'Cererea dvs. de raport a fost salvată. Echipa VW Recruit vă va contacta în scurt timp și vă va trimite materialul.',
  },
  title: 'Vă mulțumim. Solicitarea raportului a fost primită',
  lead:
    'Am salvat cererea și vă vom trimite materialul în scurt timp, de asemenea vă vom recomanda un pas practic următor privind situația dvs. de recrutare.',
  ctaLabel: 'Înapoi la pagina principală',
  secondaryCtaLabel: 'Deschideți contactele',
}

roContent.ui.modalClose = 'Închideți fereastra'
roContent.ui.leadCapture = 'Captare lead-uri'
roContent.ui.video = 'Video'
roContent.ui.videoPlay = 'Redați videoclipul'
roContent.ui.openMenu = 'Deschideți meniul'
roContent.ui.primaryNav = 'Navigare principală'
roContent.ui.languagePickerTitle = 'Selectați limba'
roContent.ui.fieldName = 'Nume'
roContent.ui.fieldCompany = 'Companie'
roContent.ui.fieldEmail = 'E-mail'
roContent.ui.fieldPhone = 'Telefon'
roContent.ui.sendRequest = 'Trimiteți cererea'
roContent.ui.requestCallback = 'Rezervați un apel'
roContent.ui.getReport = 'Obțineți raportul'
roContent.ui.bookCall = 'Rezervați un apel'
roContent.ui.quizEyebrow = 'Chestionar'
roContent.ui.quizContinue = 'Continuați'
roContent.ui.quizBack = 'Înapoi'
roContent.ui.quizSubmit = 'Trimiteți'
roContent.ui.quizReady = 'Gata'
roContent.ui.quizValidationError = 'Vă rugăm să completați pasul curent.'
roContent.ui.quizSubmitError = 'Trimiterea formularului a eșuat. Vă rugăm să încercați din nou.'
roContent.ui.processEyebrow = 'Proces'
roContent.ui.caseStudy = 'Studiu de caz'
roContent.ui.caseViewLabel = 'Vezi proiectul'
roContent.ui.leadCaptureEyebrow = 'Captare lead-uri'
roContent.ui.faqEyebrow = 'Întrebări frecvente'
roContent.ui.aboutEyebrow = 'Despre noi'
roContent.ui.contactsEyebrow = 'Contacte'
roContent.ui.reportEyebrow = 'Raport'
roContent.ui.privacyEyebrow = 'Politica de confidențialitate'
roContent.ui.termsEyebrow = 'Termeni de utilizare'
roContent.ui.thankYouEyebrow = 'Vă mulțumim'
roContent.ui.finalCtaEyebrow = 'CTA Final'
roContent.ui.downloadReport = 'Descărcați raportul'
roContent.ui.openContactsPage = 'Deschideți pagina de contacte'
roContent.ui.projectsExamples = 'Exemple de proiecte'
roContent.ui.reelPlaceholder = 'Loc pentru reel sau video în modalul pop-up după conectarea surselor.'
roContent.ui.industriesLead =
  'Cel mai des, companiile folosesc acest model pentru munci operaționale în producție, depozite, construcții și sectorul serviciilor.'
roContent.ui.legalPlaceholder = 'Aici va fi textul juridic. Înlocuiți-l cu versiunea finală aprobată înainte de lansare.'
roContent.ui.footerDescription =
  'Recrutare la cheie a muncitorilor din Asia și Africa: de la căutarea candidaților și a documentelor până la sosirea, adaptarea și intrarea echipei în tură.'
roContent.ui.footerCorePages = 'Pagini principale'
roContent.ui.footerLegal = 'Informații legale'
roContent.ui.privacyPolicy = 'Politica de confidențialitate'
roContent.ui.termsAndConditions = 'Termeni și condiții'
roContent.ui.formRequiredError = 'Vă rugăm să completați câmpurile obligatorii din formular.'
roContent.ui.formSubmittingButton = 'Se trimite...'
roContent.ui.formSubmittingStatus = 'Trimiterea formularului...'
roContent.ui.formSubmitError = 'Trimiterea formularului a eșuat. Vă rugăm să încercați din nou.'
roContent.ui.industryVisualLogisticsAlt = 'Muncitori în depozit și logistică'
roContent.ui.industryVisualConstructionAlt = 'Muncitori pe șantier'
roContent.ui.industryVisualHospitalityAlt = 'Personal în hoteluri și servicii'
roContent.ui.industryVisualManufacturingAlt = 'Muncitori în producție'
roContent.ui.industrySlidePlaceholder =
  'Un studiu de caz vizual separat pentru această verticală poate fi scalat pentru pagini SEO, chestionare și CTA-uri personalizate.'
roContent.ui.comparisonCardCta = 'Calculați recrutarea'
roContent.ui.comparisonOtherMark = 'ÎN'
roContent.ui.guaranteesLegalDelta = 'Cote, permise, vize'
roContent.ui.guaranteesReplacementMetric = '0 $'
roContent.ui.guaranteesReplacementDelta = 'Înlocuire rapidă sub garanție'
roContent.ui.guaranteesSupportMetric = 'La cheie'
roContent.ui.guaranteesSupportDelta = 'De la selecție până la tură'
roContent.ui.guaranteesFallbackDelta = 'Avantaj VW Recruit'
roContent.ui.guaranteesReplacementLabel = 'Garanție la lansare'
roContent.ui.guaranteesReplacementUnit = '$'
roContent.ui.guaranteesReplacementWarrantyDays = 30
roContent.ui.guaranteesReplacementWarrantyLabel = 'zile de garanție'
roContent.ui.guaranteesReplacementReplyHours = 48
roContent.ui.guaranteesReplacementReplyLabel = 'de ore pentru răspuns'
roContent.ui.guaranteesSupportBadge = 'O singură echipă pentru tot procesul'
roContent.ui.guaranteesCandidatesDays = 10
roContent.ui.guaranteesCandidatesDaysLabel = 'zile până la candidați'
roContent.ui.guaranteesSupportPercentLabel = '% suport'
roContent.ui.guaranteesOneTeamCount = 1
roContent.ui.guaranteesOneTeamLabel = 'echipă'
roContent.ui.guaranteeTimelineStepOne = 'Selecție'
roContent.ui.guaranteeTimelineStepTwo = 'Documente'
roContent.ui.guaranteeTimelineStepThree = 'Logistică'
roContent.ui.guaranteeTimelineStepFour = 'Sosire'
roContent.ui.guaranteeTimelineStepFive = 'Tură'
roContent.ui.guaranteeSupportStepOne = 'Selecție'
roContent.ui.guaranteeSupportStepTwo = 'Sosire'
roContent.ui.guaranteeSupportNote = 'Începutul turei'
roContent.ui.guaranteeChecklistQuota = 'Cote'
roContent.ui.guaranteeChecklistPermit = 'Permise'
roContent.ui.guaranteeChecklistVisa = 'Vize'
roContent.ui.reviewFallbackValue = '7 ANI'
roContent.ui.reviewLabelPrefix = '7 ani '
roContent.ui.servicesShortRequestEyebrow = 'Cerere scurtă'
roContent.ui.servicesHeroGhostCta = 'Vedeți termenii serviciului'
roContent.ui.servicesHeroPanelTitle =
  'Recrutare, documente, logistică și lansarea echipei într-un singur proces'
roContent.ui.servicesHeroPanelText =
  'Întregul parcurs este structurat astfel încât compania să vadă etape previzibile de lansare, iar candidatul să înțeleagă ce se întâmplă la fiecare pas.'
roContent.ui.servicesPillarsEyebrow = 'Ce acoperim'
roContent.ui.servicesPillarsTitle =
  'Serviciul nu este construit pe „căutare de CV-uri”, ci ca un traseu complet de integrare a oamenilor în muncă'
roContent.ui.servicesOfferEyebrow = 'Ce primesc ambele părți'
roContent.ui.servicesOfferTitle =
  'Un model în care compania primește un rezultat controlat, iar candidatul vede un proces transparent'
roContent.ui.servicesOfferVisualLabel = 'VW Recruit / traseu'
roContent.ui.servicesOfferVisualPrimary = 'Pentru afaceri'
roContent.ui.servicesOfferVisualSecondary = 'Pentru candidați'
roContent.ui.servicesBeamEyebrow = 'Harta procesului'
roContent.ui.servicesRouteEyebrow = 'Cum funcționează colaborarea'
roContent.ui.servicesRouteTitle = 'Un traseu transparent de la cerere până la intrarea muncitorilor în tură'
roContent.ui.servicesRouteLead =
  'Compania vede un traseu clar de lansare, cu etape previzibile de la solicitare până la intrarea oamenilor în tură.'
roContent.ui.servicesProofEyebrow = 'De ce funcționează'
roContent.ui.servicesProofTitle =
  'Nu doar recrutare, ci un serviciu gestionat cu un rezultat clar în fiecare etapă'
roContent.ui.servicesFitEyebrow = 'Unde funcționează cel mai bine'
roContent.ui.servicesFitTitle =
  'Roluri și nișe unde recrutarea internațională aduce un efect operațional maxim'
roContent.ui.servicesFitLead =
  'Fiecare card arată unde modelul oferă cel mai rapid rezultat operațional, cea mai curată lansare a echipei și cea mai înaltă stabilitate a procesului.'
roContent.ui.servicesFitScoreLabel = 'nivel de potrivire'
roContent.ui.servicesFitMetricOne = 'Viteza de lansare'
roContent.ui.servicesFitMetricTwo = 'Stabilitate'
roContent.ui.servicesFitMetricThree = 'Transparență'
roContent.ui.servicesFitCardTextOne =
  'Funcționează cel mai bine acolo unde turele repetitive, disciplina prezenței și extinderea rapidă fără eșecuri la lansare sunt importante.'
roContent.ui.servicesFitCardTextTwo =
  'Se potrivește bine pentru vârfuri sezoniere, creșterea volumelor și operațiuni unde compania are o nevoie critică de o aducere ritmică a oamenilor.'
roContent.ui.servicesFitCardTextThree =
  'Potrivit pentru proiecte cu termene stricte, unde este necesar să se combine recrutarea, documentele și sosirea fără haos.'
roContent.ui.servicesFitCardTextFour =
  'Prezintă un rezultat bun în echipele de servicii, unde un traseu clar, adaptarea rapidă și stabilitatea lansării sunt critice.'
roContent.ui.servicesLeadEyebrow = 'Începeți dialogul'
roContent.ui.servicesLeadText =
  'Pentru angajatori este o modalitate rapidă de a înțelege cum să lanseze recrutarea. Pentru candidați este o oportunitate de a primi o explicație sinceră despre traseul angajării și documente.'
roContent.ui.servicesSegmentBadgeBusiness = 'B2B'
roContent.ui.servicesSegmentBadgeCandidate = 'B2C'
roContent.ui.industriesSectionTitle = 'PENTRU CE INDUSTRII ESTE POTRIVIT ACEST MODEL'
roContent.ui.industrySliderPrev = 'Diapozitivul anterior'
roContent.ui.industrySliderNext = 'Diapozitivul următor'
roContent.ui.quizSectionLead =
  'Un scurt chestionar pas cu pas care ajută la colectarea rapidă a cererii și la transmiterea ei într-un format unificat.'
roContent.ui.casesSectionLead =
  'Prezentăm exemple de lansare a recrutării pentru producție, logistică, hoteluri și alte echipe operaționale.'
roContent.ui.caseSliderPrev = 'Proiectul anterior'
roContent.ui.caseSliderNext = 'Următorul proiect'
roContent.ui.casesTimelineSteps = ['Briefing', 'Căutare', 'Aprobare', 'Documente', 'Sosire']
roContent.ui.industriesFitSummary =
  'Semnale care înseamnă de obicei că recrutarea locală nu mai ține pasul cu operațiunile dvs. și este necesar un model mai sistematic de formare a echipei.'
roContent.ui.caseSubtitlePlaceholder = 'Scurtă descriere a proiectului'
roContent.ui.caseProblemPlaceholder =
  'O pagină SEO separată pentru studiu de caz cu rezultate, termene și acțiune vizată.'
roContent.ui.processStepLabel = 'Pasul'
roContent.ui.reportPanelTitle = 'Primiți materialul pe e-mail'
roContent.ui.reportPanelText =
  'Lăsați-vă datele de contact și vă vom trimite materiale utile pe tema recrutării internaționale și a optimizării costurilor cu personalul.'
roContent.ui.reportPanelKicker = 'VW Recruit / Analitice'
roContent.ui.reportPanelReportTitle = 'Piața Muncii 2026'
roContent.ui.reportPanelReportText =
  'Integrarea personalului internațional pentru companiile cu deficit de angajați'
roContent.ui.reportPanelGuide = 'PDF'
roContent.ui.videoInsightLabel = 'Video insight'
roContent.ui.mediaDefaultDuration = '02:00'
roContent.ui.reviewsPrev = 'Recenzia anterioară'
roContent.ui.reviewsNext = 'Următoarea recenzie'
roContent.ui.genericPageCardOne = 'Pagină de bază pregătită pentru conținut localizat'
roContent.ui.genericPageCardTwo = 'Metadatele și structura sunt gata pentru completare ulterioară'
roContent.ui.genericPageCardThree = 'Fiecare rută este generată separat pentru fiecare limbă'

roContent.quiz.title = 'Calculul recrutării'
roContent.quiz.progressLabel = 'Pasul'
roContent.quiz.completionTitle = 'Cererea dvs. este gata'
roContent.quiz.completionLead =
  'Am primit răspunsurile dvs. Următorul pas este să vă contactăm și să pregătim o consultație sau un calcul preliminar.'
roContent.quiz.steps = [
  {
    id: 'industry',
    label: 'Pentru ce domeniu aveți nevoie de muncitori?',
    type: 'options',
    options: ['Producție', 'Construcții', 'Depozite și logistică', 'Hoteluri și servicii', 'Altele'],
  },
  {
    id: 'teamSize',
    label: 'De câți muncitori aveți nevoie?',
    type: 'options',
    options: ['1–10', '11–30', '31–50', '50+'],
  },
  {
    id: 'timeline',
    label: 'Când ar trebui să înceapă lucrul echipa?',
    type: 'options',
    options: ['Urgent', 'În termen de 2–4 săptămâni', 'În termen de 1–2 luni', 'Deocamdată doar evaluez opțiunile'],
  },
  {
    id: 'location',
    label: 'Unde se află compania dvs.?',
    type: 'text',
    fields: [
      { name: 'country', label: 'Țara', required: true },
      { name: 'city', label: 'Oraș', required: false },
    ],
  },
  {
    id: 'problem',
    label: 'Care este în prezent cea mai mare problemă legată de recrutare?',
    type: 'options',
    options: ['Costuri salariale ridicate', 'Deficit de personal', 'Fluctuație', 'Vârfuri sezoniere', 'Scalarea producției', 'Altele'],
  },
  {
    id: 'contact',
    label: 'Unde ar trebui să trimitem calculul?',
    type: 'text',
    fields: [
      { name: 'name', label: 'Nume', required: true },
      { name: 'company', label: 'Compania', required: true },
      { name: 'phone', label: 'Telefon', required: true },
      { name: 'email', label: 'E-mail', required: true },
    ],
  },
]

roContent.services = {
  title: 'Servicii de recrutare internațională la cheie',
  lead:
    'Acoperim <strong>deficitul de personal operațional</strong> pentru companii și conducem candidații spre <strong>intrarea legală în muncă</strong>: de la căutare și selecție până la documente, sosire și începerea turei.',
  intro: '',
  cta: 'Discutați despre recrutare pentru companie',
  metrics: [
    { value: '10', suffix: ' zile', label: 'până la primii candidați din selecție' },
    { value: '100', suffix: ' %', label: 'suport pentru documente și legalitate' },
    { value: '4', suffix: ' etape', label: 'de la cerere la lansarea echipei' },
  ],
  heroBadges: [
    { value: '10', suffix: ' zile', label: 'până la primii candidați' },
    { value: '100', suffix: ' %', label: 'suport juridic' },
    { value: 'La cheie', suffix: '', label: 'de la căutare la începutul turei' },
    { value: '1 echipă', suffix: '', label: 'recrutare, documente, logistică' },
  ],
  segments: [
    {
      variant: 'business',
      label: 'Pentru companii',
      badge: 'B2B',
      title: 'Pentru companiile care au nevoie de o echipă stabilă fără goluri de personal',
      text: 'Potrivit pentru companiile care nu pot ocupa rolurile operaționale prin recrutare locală, se extind, au vârfuri sezoniere sau sunt obosite de fluctuația mare a personalului.',
      cta: 'Obțineți planul de recrutare',
    },
    {
      variant: 'candidate',
      label: 'Pentru candidați',
      badge: 'B2C',
      title: 'Pentru candidații care doresc să lucreze legal în străinătate',
      text: 'Explicăm etapele simplu: preselecție, documente, sosire, adaptare și începerea muncii. Fără condiții netransparente și promisiuni vagi.',
      cta: 'Depuneți cererea',
    },
  ],
  pillars: [
    {
      title: 'Căutarea și selecția candidaților',
      text: 'Creăm profilul rolului, lansăm căutarea prin baza de date și rețeaua de parteneri, filtrăm candidații slabi și oferim spre aprobare doar persoane relevante.',
    },
    {
      title: 'Documente, permise și legalitate',
      text: 'Gestionăm cotele, permisele, procesele de vize și migrație pentru ca angajatorul să nu se piardă în birocrație, iar candidatul să înțeleagă în ce etapă se află.',
    },
    {
      title: 'Sosire, adaptare și începerea turei',
      text: 'Coordonăm logistica, sosirea, începerea lucrului și prima etapă de adaptare, pentru ca muncitorii să intre efectiv la obiectiv la timpul stabilit.',
    },
  ],
  timeline: [
    {
      title: 'Briefing și calculul modelului',
      text: 'Clarificăm numărul de persoane, rolurile, programul, țara de lansare și constrângerile proiectului, apoi formulăm un scenariu realist de recrutare.',
    },
    {
      title: 'Selecția și aprobarea candidaților',
      text: 'Lansăm căutarea, efectuăm screening-ul, verificăm documentele și oferim echipei dvs. posibilitatea de a aproba final candidații.',
    },
    {
      title: 'Înregistrarea și organizarea sosirii',
      text: 'După aprobare, începem pregătirea documentelor, coordonarea permiselor, logistica și pregătirea persoanelor pentru plecare.',
    },
    {
      title: 'Intrarea la muncă și suportul',
      text: 'După sosire, coordonăm începutul turei, adaptarea și comunicarea între companie, muncitori și persoanele responsabile la obiectiv.',
    },
  ],
  deliverables: [
    'Profilul postului și strategia de căutare pentru un rol specific',
    'Un pachet de candidați selectați pregătiți pentru aprobare',
    'Controlul tuturor etapelor procesării documentelor',
    'Cronologia pentru sosirea muncitorilor și lansarea echipei',
    'Suport pentru echipă la începutul muncii și în prima perioadă de adaptare',
    'Condiții de garanție pentru înlocuire, în funcție de formatul proiectului',
  ],
  offerCards: [
    {
      title: 'Recrutare pentru angajatori',
      text: 'Lansare rapidă a recrutării pentru posturi vacante, vârfuri sezoniere sau scalarea producției.',
    },
    {
      title: 'Ruta legală pentru candidați',
      text: 'Proces de selecție transparent, pregătirea documentelor și suport până la intrarea efectivă în muncă.',
    },
    {
      title: 'Suport după lansare',
      text: 'Adaptare, comunicare, înlocuiri și coordonarea proceselor în prima etapă de muncă a echipei.',
    },
  ],
  beam: {
    title: 'Cum decurge procesul de recrutare de la solicitare la intrarea oamenilor în tură',
    lead:
      'Harta vizuală a procesului care arată cum briefingul, selecția, aprobarea, documentele și lansarea echipei sunt conectate într-un singur proces gestionat.',
    centerLabel: 'Procesare',
    outputLabel: 'Intrarea în tură',
    steps: ['Briefing', 'Căutare', 'Aprobare', 'Documente', 'Sosire'],
  },
  roles: [
    'Muncitori pentru linii de producție, ambalare, sortare și procese auxiliare',
    'Echipe de depozit pentru comisionare, sortare, mutare și operațiuni logistice',
    'Muncitori în construcții și montaj pentru obiective cu deficit de personal',
    'Personal pentru hoteluri, bucătării, curățenie în camere și servicii',
  ],
  promise: {
    title: 'O singură echipă este responsabilă pentru întregul traseu al candidatului',
    text: 'Pentru companie, acest lucru înseamnă mai puțin haos între recrutare, documente, logistică și integrarea oamenilor la locul de muncă. Obțineți un model clar de interacțiune, în loc de o rețea de contractori separați.',
  },
  trust: [
    'Angajatorul vede un traseu previzibil până la lansarea echipei',
    'Candidatul obține un traseu legal și inteligibil de angajare',
    'O singură echipă coordonează recrutarea, documentele, logistica și adaptarea',
  ],
  form: {
    title: 'Obțineți planul de recrutare sau o consultație privind angajarea',
    lead: 'Completați un formular scurt. Pentru angajator, vom pregăti următorul pas pentru lansarea recrutării. Pentru candidat, vom explica traseul și cerințele de pornire.',
    button: 'Obțineți consultanța',
    note: 'De obicei răspundem în timpul zilei lucrătoare.',
  },
}

roContent.cases = {
  title: 'Proiecte de recrutare internațională cu rezultat operațional măsurabil',
  lead:
    'Scenarii reale în care o companie acoperă deficitul de personal, accelerează lansarea echipei și primește un traseu predictibil pentru intrarea oamenilor în muncă.',
  description:
    'Studii de caz privind recrutarea internațională a muncitorilor: provocare, model de implementare, termene și rezultatul pentru companie.',
  eyebrow: 'Studii de caz',
  intro:
    'Această pagină nu este destinată doar „poveștilor de succes”, ci ca dovadă că modelul funcționează în condiții operaționale reale: atunci când lipsesc oamenii, se ratează termenele sau apare presiunea sezonieră.',
  stats: [
    { value: '3', label: 'studii detaliate de lansare' },
    { value: '4', label: 'domenii cheie de afaceri' },
    { value: '96', suffix: ' %', label: 'intrare în tură' },
  ],
  featured: [
    {
      title: 'Delta Pack',
      category: 'Producție',
      colSpan: 2,
      subtitle: 'Companie de producție, Europa Centrală',
      problem:
        'Compania nu a putut închide stabil tura pe linia de ambalare mult timp din cauza recrutării locale prelungite și a fluctuației constante.',
      solution:
        'Modelul de lansare a combinat căutarea candidaților, suportul pentru documente, logistica și coordonarea lansării echipei într-un singur proces.',
      result:
        'Compania a primit un plan clar de acoperire a turei, un ciclu mai scurt de aprobare a candidaților și un control mai mare asupra lansării proiectului.',
      timeline: 'Primii candidați în 7-14 zile',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Muncitori pe linia de producție',
      metrics: [
        { label: 'Nevoi', value: '32 de muncitori' },
        { label: 'Format', value: 'Linie de ambalare' },
        { label: 'Focus', value: 'Start stabil al turei' },
      ],
    },
    {
      title: 'Nord Cargo Hub',
      category: 'Logistică',
      colSpan: 1,
      subtitle: 'Complex de depozitare și logistică',
      problem:
        'Depozitul nu a putut acoperi sarcinile de vârf fără o rezervă de oameni și un program previzibil de sosire a muncitorilor.',
      solution:
        'Atenția cazului s-a concentrat pe viteza listei scurte, controlul documentelor și pregătirea oamenilor pentru intrarea într-un program cu ture.',
      result:
        'Echipa operațională a primit o cronologie mai previzibilă pentru a pregăti onboarding-ul, supraveghetorii și pentru a acoperi vârful de sarcină fără haos.',
      timeline: 'Start rapid pentru sezon',
      image: '/images/industry-logistics.jpg',
      alt: 'Muncitori în depozit și logistică',
      metrics: [
        { label: 'Nevoi', value: 'Echipă de sortare' },
        { label: 'Format', value: 'Operațiuni de depozitare' },
        { label: 'Focus', value: 'Pregătire pentru vârf' },
      ],
    },
    {
      title: 'Urban Build Group',
      category: 'Construcții',
      colSpan: 3,
      subtitle: 'Antreprenor în construcții',
      problem:
        'Contractorul trebuia să consolideze rapid șantierele active fără a amâna termenele limită și fără eșecuri în formarea echipelor.',
      solution:
        'Căutarea, permisele, logistica și începerea adaptării au fost sincronizate ca un singur flux de lucru de la aprobare până la ieșirea pe șantier.',
      result:
        'Clientul a primit un model care a redus decalajul dintre aprobarea candidaților, pregătirea documentelor și începerea efectivă a lucrărilor.',
      timeline: 'Rută ajustată la termenele șantierului',
      image: '/images/industry-construction.jpg',
      alt: 'Muncitori pe șantier',
      metrics: [
        { label: 'Nevoi', value: 'Consolidarea obiectivelor' },
        { label: 'Format', value: 'Roluri în construcții' },
        { label: 'Focus', value: 'Protejarea termenelor de start' },
      ],
    },
  ],
  convincingTitle: 'De la provocare la rezultat: de ce experiența noastră ajută companiile să acționeze mai rapid',
  frameworkTitle: 'De la provocare la rezultat: de ce experiența noastră ajută companiile să acționeze mai rapid',
  frameworkLead:
    'Un studiu de caz puternic nu arată doar rezultatul, ci și motivul pentru care traseul de lansare a fost realist tocmai pentru acest tip de angajator.',
  routeLabel: 'Traseu',
  outcomeLabel: 'Rezultat',
  framework: [
    {
      title: 'O provocare inițială clară',
      text: 'Arătăm exact unde recrutarea locală, sezonalitatea sau fluctuația au creat un risc operațional pentru companie.',
    },
    {
      title: 'Model de lansare transparent',
      text: 'Explicăm cum recrutarea, documentele, logistica și aducerea muncitorilor au fost conectate într-un singur proces.',
    },
    {
      title: 'Rezultat operațional',
      text: 'Traducem cazul într-un limbaj de afaceri clar: stabilitatea turei, viteza de lansare și predictibilitatea la obiectiv.',
    },
  ],
  checklistTitle: 'Ce ar trebui să fie în fiecare studiu de caz viitor',
  checklist: [
    'Descrierea rolului și a provocării inițiale de personal',
    'Logica țării de recrutare sau a modelului de căutare',
    'Cronologia de la briefing la sosire',
    'Puncte cheie privind documentele și logistica',
    'Rezultatul pentru companie și un CTA clar',
  ],
  ctaTitle: 'Aveți nevoie să lansați un model similar de recrutare pentru echipa dvs.?',
  ctaLead:
    'Descrieți-vă deficitul de personal și vom pregăti pentru compania dvs. un traseu de recrutare, termene de lansare și următorul pas practic.',
}

roContent.industries = {
  title: 'Industrii în care recrutarea internațională aduce cel mai puternic efect operațional',
  lead:
    'Ne concentrăm pe sectoarele în care lipsa de personal de execuție și fluctuația ridicată frânează cel mai mult dezvoltarea afacerii.',
  description:
    'Recrutarea internațională de personal pentru producție, construcții, depozite, logistică, hoteluri și echipe de servicii.',
  eyebrow: 'Industrii',
  intro: '',
  sectorsTitle: 'Domenii cheie unde modelul aduce cele mai rapide rezultate',
  sectorsLead: '',
  stats: [
    { value: '3', label: 'sectoare cheie cu cel mai mare impact' },
    { value: '1+', label: 'an de contract pentru majoritatea echipelor' },
    { value: '54 %', label: 'potențial de reducere a costurilor cu personalul' },
  ],
  sectors: [
    {
      title: 'Producție',
      colSpan: 2,
      text: 'Echipe stabile pentru linii de asamblare, ateliere de ambalare și centre de sortare.',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Muncitori în producție',
      tags: ['Linii de producție', 'Ambalare', 'Sortare'],
      problem:
        '„Găuri” constante în ture din cauza absenței muncitorilor locali și o fluctuație anuală de 30-50%.',
      solution:
        'Formăm grupuri de muncitori care sosesc cu contract de cel puțin 1 an. Acest lucru garantează disciplina și elimină nevoia de a reinstrui personal nou în fiecare săptămână.',
      roles: ['Operatori pe linie', 'Ambalatori', 'Sortatori', 'Muncitori auxiliari'],
      points: [
        'Stabilizăm ieșirile în tură fără angajări suplimentare constante',
        'Reducem presiunea asupra șefilor de tură și a echipei HR',
        'Oferim un ritm predictibil de aducere a oamenilor la muncă',
      ],
      cta: 'Obțineți calculul pentru producție',
    },
    {
      title: 'Construcții',
      colSpan: 1,
      text: 'Scalarea șantierelor fără a depinde de deficitul de personal de pe piața locală.',
      image: '/images/industry-construction.jpg',
      alt: 'Muncitori pe șantier',
      tags: ['Montaj', 'Munci auxiliare', 'Echipe de șantier'],
      problem:
        'Depășirea termenelor de predare a obiectivelor din cauza incapacității de a găsi rapid 20-50 de muncitori auxiliari sau montatori în plin sezon.',
      solution:
        'Organizăm sosirea promptă a brigăzilor formate. Prelucrăm toată legalizarea, astfel încât șefii dvs. de șantier să se ocupe de construcție, nu de hârtii.',
      roles: ['Muncitori auxiliari', 'Montatori', 'Fierari-betoniști', 'Betoniști'],
      points: [
        'Consolidăm șantierele active fără a decala termenele',
        'Eliberăm șefii de șantier de povara administrativă',
        'Lucrăm pentru vârfuri sezoniere și extinderea brigăzilor',
      ],
      cta: 'Obțineți calculul pentru construcții',
    },
    {
      title: 'Depozite și logistică',
      colSpan: 1,
      text: 'Flexibilitate și putere pentru operatorii 3PL și E-commerce.',
      image: '/images/industry-logistics.jpg',
      alt: 'Muncitori în depozit și logistică',
      tags: ['Comisionare', 'Sortare', 'Manipularea mărfurilor'],
      problem:
        'Impredictibilitate în timpul vârfurilor sezoniere și costuri ridicate ale turelor de "noapte" ale personalului local.',
      solution:
        'Obțineți o echipă pregătită pentru un program intens de ture. Costurile cu personalul devin previzibile și fixe.',
      roles: ['Comisionari (Pickers)', 'Ambalatori', 'Încărcători', 'Operatori de echipamente de depozit'],
      points: [
        'Lucrăm ținând cont de valurile sezoniere și ritmul alert al turelor',
        'Oferim o predictibilitate mai mare a costurilor cu personalul',
        'Ajutăm la planificarea lansării echipelor fără panică',
      ],
      cta: 'Obțineți calculul pentru depozite și logistică',
    },
    {
      title: 'Hoteluri și servicii',
      colSpan: 2,
      text: 'Echipe stabile pentru curățenia în camere, asistență în bucătărie și operațiuni zilnice de servicii.',
      image: '/images/industry-hospitality.jpg',
      alt: 'Personal în hoteluri și servicii',
      tags: ['Curățenie camere', 'Ajutor bucătărie', 'Operațiuni servicii'],
      problem:
        'Este dificil de menținut o echipă stabilă de servicii în perioadele de vârf, când personalul local își schimbă rapid angajatorul sau nu se prezintă la tură.',
      solution:
        'Selectăm muncitori pentru un orizont de muncă mai lung și construim o rută legală până la obiectiv, astfel încât echipa operațională să nu trăiască într-un regim constant de recrutare de urgență.',
      roles: ['Cameriste', 'Personal de bucătărie', 'Lucrători de servicii', 'Ajutoare universale'],
      points: [
        'Reducem haosul în planificarea zilnică a turelor',
        'Consolidăm hotelurile și facilitățile de servicii în timpul vârfurilor sezoniere',
        'Oferim o rută clară și legală spre angajare',
      ],
      cta: 'Obțineți calculul pentru hoteluri și servicii',
    },
  ],
  frameworkTitle: 'De ce companiile aleg muncitori din Asia și Africa?',
  frameworkLead:
    'Nu este o chestiune de "înlocuire mai ieftină", ci de stabilitate a echipei, motivație și un ciclu lung de muncă predictibil la obiectiv.',
  framework: [
    {
      title: 'Motivație ridicată',
      text: 'Pentru candidații din aceste regiuni, munca în Europa este o șansă pentru un viitor mai bun, motiv pentru care apreciază mai mult locul de muncă și rar își schimbă compania după o lună.',
    },
    {
      title: 'Disciplină',
      text: 'În multe țări asiatice, cultura muncii se bazează pe respectul față de ierarhie, instrucțiuni clare și execuția stabilă a operațiunilor repetitive.',
    },
    {
      title: 'Implicare pe termen lung',
      text: 'Muncitorii sosesc cu vize cu scop specific pentru o perioadă lungă, ceea ce elimină problema pierderii sezoniere de personal și supraîncărcarea provocată de repornirea constantă a recrutărilor.',
    },
  ],
  fitTitle: 'Când aveți cu siguranță nevoie de recrutare internațională?',
  fitLead:
    'Dacă vă recunoașteți situația în aceste semnale, recrutarea locală probabil nu mai rezolvă problema în mod sistematic.',
  fitSignals: [
    'Fluctuația depășește 20%: petreceți mai mult timp intervievând decât gestionând producția.',
    'Piață locală supraîncălzită: așteptările salariale ale candidaților locali cresc, dar productivitatea nu.',
    'Planificarea noilor unități sau linii: vă este teamă să lansați capacități noi pentru că nu are cine să lucreze.',
    'Costul recrutării crește: agențiile locale percep comisioane mari, iar oamenii demisionează după o săptămână.',
  ],
  ctaTitle: 'Aveți nevoie de un plan de lansare pentru o anumită industrie?',
  ctaLead:
    'Scrieți-ne care este nișa dvs., dimensiunea echipei și termenul de lansare, iar noi vă vom recomanda cel mai bun model de recrutare, conceput special pentru operațiunea dvs.',
  seoTitle: 'Recrutare internațională de personal pentru producție, depozite și construcții',
  seoText:
    'VW Recruit este specializată în soluționarea complexă a deficitului de personal pentru companiile europene. Asigurăm selecția personalului de linie pentru depozite, fabrici și șantiere de construcții, utilizând resursele țărilor cu potențial excedentar de forță de muncă, în special din Filipine, India, Vietnam și țările africane. Modelul nostru nu include doar recrutarea propriu-zisă, ci și suport documentar complet, logistică și adaptarea muncitorilor la obiectiv, ceea ce le permite clienților să reducă costurile operaționale cu personalul cu până la 54%.',
}

roContent.report = {
  title: 'Piața Muncii 2026: Când recrutarea locală nu mai face față',
  lead:
    'Un raport analitic pentru angajatorii care doresc să înțeleagă costurile reale, termenele și nuanțele legale ale recrutării internaționale.',
  description:
    'Descărcați raportul privind recrutarea internațională a muncitorilor, costurile cu personalul, riscurile legale și lansarea echipei.',
  eyebrow: 'Raport',
  intro:
    'Acesta nu este doar un PDF descărcat de formă, ci un conținut care transformă interesul într-o discuție la obiect despre costuri, termene de lansare, legalitate și pregătirea companiei pentru angajarea internațională.',
  stats: [
    { value: '1', label: 'raport analitic practic' },
    { value: '5', label: 'insight-uri cheie în interior' },
    { value: '1', label: 'acțiune clară de conversie' },
  ],
  pointsTitle: 'Ce conține raportul',
  points: [
    'Logica comparării costurilor: recrutare locală vs. recrutare internațională',
    'Cele mai frecvente greșeli legale la angajarea străinilor',
    'Cum să pregătiți operațiunea pentru onboarding și adaptare',
    'Ce influențează cu adevărat termenele de lansare de la briefing până la tură',
    'Cum să reduceți presiunea de personal în rolurile fizice și operaționale',
  ],
  benefitsTitle: 'De ce cer companiile acest raport',
  benefitsLead:
    'Raportul este deosebit de util atunci când compania simte deja presiunea lipsei de personal și are nevoie nu de informații abstracte, ci de un model clar de soluționare.',
  benefits: [
    {
      title: 'Acord intern mai rapid',
      text: 'Ajută proprietarul, echipa de operațiuni și departamentul HR să vorbească aceeași limbă despre traseul real de lansare a recrutării.',
    },
    {
      title: 'O vedere mai clară asupra costurilor',
      text: 'Permite o comparație mai sobră a presiunii salariale, termenelor de lansare și riscurilor de întrerupere a continuității echipei.',
    },
    {
      title: 'O tranziție mai bună la pasul următor',
      text: 'Transferă interesul de la nivelul „doar mă uit” la o consultanță serioasă cu constrângeri și termene specifice.',
    },
  ],
  trustTitle: 'Ce face ca acest raport să fie cu adevărat util',
  trustLead:
    'Un material analitic solid nu ar trebui să fie doar conținut HR general. Trebuie să răspundă direct problemei de afaceri pentru care persoana completează formularul.',
  trustPoints: [
    'Construit în jurul presiunii de personal în operațiuni, nu pe teorii generale',
    'Pregătit ca bază pentru prima consultanță sau întâlnire de vânzări (sales)',
    'Util angajatorilor care evaluează dacă modelul se potrivește obiectivului și termenelor lor',
  ],
  faqTitle: 'Întrebări înainte de descărcare',
  faq: [
    {
      q: 'Cui îi este destinat acest raport?',
      a: 'Angajatorilor din producție, logistică, construcții, hoteluri și alte industrii operaționale, unde există deficit de personal sau presiune pe salarii.',
    },
    {
      q: 'Acesta este doar un alt PDF general?',
      a: 'Nu. Raportul ar trebui să ajute la luarea unei decizii reale privind recrutarea și să pregătească o discuție serioasă despre modelul de implementare, termene și limitări.',
    },
    {
      q: 'Ce se întâmplă după trimiterea formularului?',
      a: 'Persoana primește instrucțiunile pentru descărcarea PDF-ului și devine totodată un lead calificat pentru o consultanță suplimentară privind necesarul de recrutare.',
    },
  ],
  ctaTitle: 'Obțineți raportul și înțelegeți următorul pas în recrutare',
  ctaLead:
    'Lăsați-ne datele dvs. de contact și vă vom trimite PDF-ul, ajutându-vă, de asemenea, să evaluați dacă modelul de recrutare internațională se potrivește deficitului actual de personal din compania dvs.',
  formTitle: 'Obțineți raportul',
  formLead:
    'Completați un formular scurt pentru a obține PDF-ul și pentru a trece la o discuție mai substanțială despre costurile cu personalul, termenele de lansare și pregătirea juridică.',
  formNote: 'Cel mai util pentru angajatorii care planifică recrutarea, înlocuirea sau extinderea echipei.',
}
