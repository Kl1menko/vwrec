import { createLocaleContent } from '../create-locale-content.js'

export const plContent = createLocaleContent({
  code: 'pl',
  name: 'Polish',
  nativeName: 'Polski',
  translated: true,
  homeLabel: 'Strona główna',
  heroTitle: 'Międzynarodowa rekrutacja dla firm, które potrzebują pracowników na stanowiska operacyjne bez opóźnień.',
  heroLead:
    'Struktura strony jest już przygotowana pod generowanie leadów, wielojęzyczny rozwój SEO, quizy, case studies i konsultacyjne CTA dla klientów B2B.',
})

plContent.site.description =
  'Obniż koszty personelu nawet o 54% dzięki kompleksowej rekrutacji międzynarodowej pracowników z Azji i Afryki pod klucz.'

plContent.navigation.items = [
  { key: 'home', label: 'Strona główna' },
  { key: 'services', label: 'Usługi' },
  { key: 'industries', label: 'Branże' },
  { key: 'cases', label: 'Projekty' },
  { key: 'report', label: 'Raport' },
  { key: 'contacts', label: 'Kontakty' },
]

plContent.navigation.primaryCta = 'Wyceń rekrutację'
plContent.navigation.secondaryCta = 'Zarezerwuj rozmowę'

plContent.home = {
  meta: {
    title: 'Międzynarodowa rekrutacja pracowników dla biznesu',
    description:
      'Zmniejsz koszty personelu i zlikwiduj braki kadrowe dzięki międzynarodowej rekrutacji pracowników z Azji i Afryki pod klucz.',
  },
  hero: {
    lines: ['OBNIŻ KOSZTY', 'PERSONELU'],
    highlight: 'NAWET O 54%',
    lead:
      'dzięki międzynarodowej rekrutacji pracowników z <strong>Azji i Afryki</strong> pod klucz',
    stats: [
      { value: 10, suffix: ' DNI', label: 'na dobór pierwszych kandydatów' },
      { value: 7, suffix: ' LAT', label: 'doświadczenia w międzynarodowej rekrutacji' },
      { value: 100, suffix: '%', label: 'wsparcia dokumentacyjnego i relokacyjnego' },
    ],
    video: {
      src: '/videos/international-recruitment-overview.mp4',
      poster: '/video-poster-home.svg',
      type: 'video/mp4',
    },
  },
  comparison: {
    eyebrow: 'Porównanie modelu zatrudnienia',
    title: 'Jak firmy tracą przez niedobór kadr na lokalnym rynku',
    cards: [
      {
        title: 'Inne',
        brandNote: 'rekrutacja lokalna / inne agencje',
        amount: '$36 000',
        period: '/ miesiąc',
        note: 'dla zespołu 30 pracowników',
        variant: 'other',
        rows: [
          {
            title: 'Niedobór dobrych kandydatów',
            text: 'Dziesiątki firm jednocześnie rywalizują o tych samych dobrych pracowników.',
          },
          {
            title: 'Wakaty pozostają otwarte dłużej',
            text: 'Dopóki trwa poszukiwanie, zespół pracuje przeciążony.',
          },
          {
            title: 'Ciągła ponowna rekrutacja',
            text: 'Z powodu niedoboru kadr firma nieustannie wraca do poszukiwań.',
          },
        ],
      },
      {
        title: 'VW Recruit',
        brandNote: 'systemowe rozwiązanie niedoboru kadr',
        amount: '$18 000',
        period: '/ miesiąc',
        note: 'dla zespołu 30 pracowników',
        variant: 'brand',
        rows: [
          {
            title: 'Dostęp do szerszej bazy kandydatów',
            text: 'Działamy poza granicami lokalnego niedoboru na rynku pracy.',
          },
          {
            title: 'Szybki dostęp do kandydatów',
            text: 'Pierwsze odpowiednie osoby już w 7–14 dni.',
          },
          {
            title: 'Fokus na ciągłość biznesu',
            text: 'Obsadzasz stanowiska szybciej, podczas gdy konkurenci wciąż szukają.',
          },
        ],
      },
    ],
    cta: 'Zamknij niedobór kadr',
  },
  industries: {
    eyebrow: 'Dla jakich branż pasuje ten model',
    title: 'Najczęściej ten model rekrutacji jest stosowany do pracy operacyjnej',
    lead:
      'Tworzymy zespoły dla produkcji, magazynów, budownictwa i usług, gdy firma potrzebuje przewidywalnego wdrożenia i niższych kosztów personelu.',
    items: [
      {
        title: 'Magazyny i logistyka',
        text: 'Tworzenie zespołów do kompletacji, pakowania, relokacji towarów i operacji magazynowych.',
      },
      {
        title: 'Budownictwo',
        text: 'Rekrutacja pracowników na place budowy, do prac montażowych, pomocniczych i technicznych.',
      },
      {
        title: 'Hotele i usługi',
        text: 'Rekrutacja personelu do sprzątania, kuchni, obsługi technicznej i codziennej pracy operacyjnej.',
      },
      {
        title: 'Produkcja',
        text: 'Rekrutacja pracowników na linie produkcyjne, do pakowania, sortowania i procesów pomocniczych.',
      },
    ],
  },
  calculator: {
    eyebrow: 'Kalkulacja - Quiz',
    title: 'Oblicz koszty rekrutacji pracowników dla Twojej firmy',
    lead:
      'Odpowiedz na kilka krótkich pytań i otrzymaj kalkulację rekrutacji zespołu dla Twojego biznesu.',
  },
  casesSection: {
    eyebrow: 'Nasze projekty',
    title: 'Nasze projekty rekrutacyjne',
    lead:
      'Pokazujemy, jak wygląda rekrutacja w realnych projektach: od produkcji i magazynów po usługi i zespoły operacyjne.',
    cta: 'Wszystkie projekty',
    items: [
      {
        title: 'Delta Pack',
        subtitle: 'Przedsiębiorstwo produkcyjne, Europa Środkowa',
        problem: 'Zamknęliśmy deficyt 32 pracowników na linii pakowania po przedłużającej się lokalnej rekrutacji i wysokiej rotacji.',
        image: '/images/industry-manufacturing.jpg',
        alt: 'Pracownicy na linii produkcyjnej',
      },
      {
        title: 'Nord Cargo Hub',
        subtitle: 'Kompleks magazynowy i logistyka',
        problem: 'Stworzyliśmy zespół zmianowy do kompletacji i sortowania, gdy firma nie nadążała z pokryciem obciążeń szczytowych.',
        image: '/images/industry-logistics.jpg',
        alt: 'Pracownicy w magazynie i logistyce',
      },
      {
        title: 'Urban Build Group',
        subtitle: 'Wykonawca budowlany',
        problem: 'Wzmocniliśmy obiekty monterami i pracownikami pomocniczymi, aby nie zerwać terminów rozpoczęcia nowego etapu budowy.',
        image: '/images/industry-construction.jpg',
        alt: 'Pracownicy na placu budowy',
      },
    ],
  },
  process: {
    eyebrow: 'Co się dzieje po zapytaniu',
    title: 'Co następuje po Twoim zapytaniu',
    intro:
      'Doprecyzowujemy liczbę pracowników, wymagania wobec kandydatów i terminy wdrożenia zespołu. Następnie uruchamiamy rekrutację poprzez naszą bazę oraz partnerskie agencje w krajach rekrutacji.',
    steps: [
      {
        title: 'Analiza wakatów i start rekrutacji',
        text: 'Tworzymy profil kandydata, uzgadniamy terminy i rozpoczynamy poszukiwania w odpowiednich źródłach.',
      },
      {
        title: 'Wybór i weryfikacja kandydatów',
        text: 'Kandydaci przechodzą wstępną selekcję, weryfikację dokumentów i podstawową rozmowę kwalifikacyjną. Firma otrzymuje profile do ostatecznej akceptacji.',
      },
      {
        title: 'Kompletowanie dokumentów',
        text: 'Organizujemy przygotowanie wszystkich niezbędnych dokumentów do zatrudnienia i wjazdu, oraz kontrolujemy proces aż do uzyskania gotowości.',
      },
      {
        title: 'Przyjazd i rozpoczęcie pracy',
        text: 'Koordynujemy logistykę i przyjazd pracowników. Po przyjeździe zespół rozpoczyna pracę w przedsiębiorstwie.',
      },
    ],
  },
  guarantees: {
    eyebrow: 'Gwarancje i bezpieczeństwo',
    title: 'Co zyskuje biznes wraz z rekrutacją',
    items: [
      {
        title: '100% legalności',
        text: 'Przejmujemy odpowiedzialność za kwoty, zezwolenia na pracę i procesy wizowe, aby firma była chroniona przed kontrolami.',
      },
      {
        title: 'Bezpłatna wymiana',
        text: 'Zapewniamy okres gwarancyjny na wymianę kandydata, jeśli projekt wymaga stabilności na starcie.',
      },
      {
        title: 'Pełne wsparcie pod klucz',
        text: 'Od rozmowy w Azji, przez spotkanie na lotnisku, po rozpoczęcie zmiany ze wsparciem adaptacyjnym i komunikacyjnym.',
      },
    ],
  },
  reportBlock: {
    eyebrow: 'Materiał analityczny',
    title: 'Dlaczego lokalna rekrutacja traci na efektywności?',
    lead:
      'Odbierz zamknięty raport analityczny "Rynek Pracy 2026: Integracja międzynarodowego personelu".',
    points: [
      'Tabela porównawcza kosztów: Rekrutacja lokalna vs Ekspaci',
      '5 błędów prawnych przy zatrudnianiu obcokrajowców',
      'Jak pokonać barierę językową na produkcji',
    ],
    cta: 'Pobierz raport w PDF',
  },
  reviews: {
    eyebrow: 'Zaufanie',
    title: 'Ufają nam liderzy rynku',
    items: [
      {
        name: 'Oleksandr Koval',
        company: 'Dyrektor Operacyjny, Delta Pack',
        text: 'VW Recruit zlikwidowało nasze braki kadrowe na linii produkcyjnej bez przeciążania wewnętrznego działu HR. Najcenniejsze było to, że zespół wziął na siebie zarówno rekrutację, jak i wsparcie dokumentacyjne.',
      },
      {
        name: 'Iryna Melnyk',
        company: 'HR Lead, Nord Cargo Hub',
        text: 'Otrzymaliśmy nie tylko kandydatów, ale jasny proces wdrożenia zespołu. Logistyka, zezwolenia i koordynacja były pod kontrolą, dzięki czemu magazyn wszedł w sezon bez zakłóceń.',
      },
      {
        name: 'Taras Humeniuk',
        company: 'Kierownik Projektu, Urban Build Group',
        text: 'Ważne było dla nas szybkie wzmocnienie obiektów ludźmi, którzy realnie stawiają się na zmianie. VW Recruit dało przewidywalność terminów i silne wsparcie nawet po przyjeździe kandydatów.',
      },
      {
        name: 'Maryna Savchuk',
        company: 'People Partner, East Service Group',
        text: 'Po rozpoczęciu współpracy przestaliśmy gasić kadrowe pożary ręcznie. Zespół VW Recruit szybko zsynchronizował wymagania, kraje rekrutacji i terminy wejścia ludzi na obiekt.',
      },
      {
        name: 'Vitaliy Bondar',
        company: 'Dyrektor Operacyjny, Metal Works',
        text: 'Spodobał nam się właśnie poziom przewidywalności. Biznes rozumiał, kiedy przyjadą kandydaci, jakie dokumenty są już gotowe i na jakim etapie jest każdy pracownik.',
      },
      {
        name: 'Nataliya Chernenko',
        company: 'Dyrektor HR, West Line Logistics',
        text: 'Dla logistyki szybkość uruchomienia zmian jest kluczowa. Z VW Recruit otrzymaliśmy nie tylko rekrutację, ale normalne wsparcie operacyjne aż do wejścia ludzi do pracy.',
      },
    ],
    metrics: [
      {
        value: '7 LAT',
        label: 'Doświadczenia w międzynarodowej rekrutacji',
      },
      {
        value: '100%',
        label: 'Kontrola dokumentów i legalizacji pobytu',
      },
      {
        value: '10 DNI',
        label: 'Do pierwszych kandydatów w procesie',
      },
      {
        value: 'POD KLUCZ',
        label: 'Wsparcie od selekcji do rozpoczęcia zmiany',
      },
    ],
  },
  media: {
    eyebrow: 'Wideo i odpowiedzi',
    title: 'Odpowiedzi na główne pytania właścicieli firm',
    reels: [
      {
        title: 'Ile czasu zajmuje uruchomienie międzynarodowej rekrutacji?',
        text: 'Wyjaśniamy, kiedy firma otrzymuje pierwszych kandydatów, co wpływa na terminy i na którym etapie dołącza się wsparcie dokumentacyjne.',
        meta: 'Oś czasu uruchomienia',
        duration: '02:14',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Jak firma kontroluje legalność i dokumenty?',
        text: 'Omawiamy, jakie kwoty, zezwolenia i procesy wizowe bierzemy na siebie, aby firma nie ponosiła ryzyka przed kontrolami.',
        meta: 'Dokumenty i legalność',
        duration: '03:02',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Co się dzieje po przyjeździe pracowników na projekt?',
        text: 'Pokazujemy, jak wygląda adaptacja, start zmiany, komunikacja z koordynatorami i wsparcie zespołu na pierwszym etapie.',
        meta: 'Adaptacja i wsparcie',
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
    title: 'Często zadawane pytania',
    items: [
      {
        q: 'Jak rozwiązywana jest kwestia bariery językowej?',
        a: 'Uwzględniamy adaptację, podstawowe szkolenie i komunikację przez koordynatora lub brygadzistę, aby zespół szybko wdrożył się do pracy.',
      },
      {
        q: 'Kto zajmuje się poszukiwaniem mieszkań dla pracowników?',
        a: 'Model może obejmować koordynację zakwaterowania, logistyki i przyjazdu, w zależności od formatu współpracy i kraju docelowego.',
      },
      {
        q: 'Co zrobić, jeśli pracownik zachoruje lub nie stawi się na zmianę?',
        a: 'Na starcie projektu uzgadniana jest rezerwa, warunki gwarancyjne wymiany oraz procedura sprawnej komunikacji z Waszą stroną.',
      },
    ],
  },
  finalCta: {
    title: 'Gotowy, by rozwiązać problem braków kadrowych i skalować biznes?',
    lead: 'Zarezerwuj bezpłatną 30-minutową sesję Zoom z naszym Head of Recruitment.',
  },
}

plContent.forms.lead.title = 'Wyceń rekrutację'
plContent.forms.lead.success = 'Dziękujemy. Twoje zapytanie zostało zapisane i skontaktujemy się z Tobą w sprawie rekrutacji.'
plContent.forms.callback.title = 'Zarezerwuj rozmowę'
plContent.forms.callback.success = 'Dziękujemy. Twoja prośba o rozmowę została zapisana.'
plContent.forms.report.title = 'Odbierz raport'
plContent.forms.report.success = 'Dziękujemy. Otrzymaliśmy Twoje zapytanie i wkrótce wyślemy dokument PDF na Twój adres e-mail.'
plContent.forms.contact.title = 'Wyślij zapytanie'
plContent.forms.contact.success = 'Dziękujemy. Twoje zapytanie zostało odebrane, a zespół VW Recruit skontaktuje się z Tobą w celu ustalenia kolejnych kroków.'
plContent.brand.tagline = 'Międzynarodowy partner w rekrutacji'
plContent.brand.homeAriaLabel = 'VW Recruit strona główna'

plContent.about = {
  meta: {
    title: 'O VW Recruit',
    description:
      'Dowiedz się więcej o VW Recruit, międzynarodowej rekrutacji pracowników, ścieżce wdrażania zespołu i podejściu do współpracy z biznesem.',
  },
  title: 'O VW Recruit',
  lead:
    'Pomagamy firmom w uzupełnianiu braków kadrowych poprzez międzynarodową rekrutację pracowników z Azji i Afryki, z wyraźną ścieżką od zapytania do wejścia ludzi na zmianę.',
}

plContent.faqPage = {
  meta: {
    title: 'Często zadawane pytania przez pracodawców',
    description:
      'Odpowiedzi na kluczowe pytania pracodawców dotyczące międzynarodowej rekrutacji: terminy, dokumenty, uruchomienie zespołu, adaptacja i format współpracy.',
  },
  title: 'Często zadawane pytania przez pracodawców',
  lead:
    'Zebraliśmy kluczowe pytania dotyczące międzynarodowej rekrutacji pracowników: od terminów i dokumentów po zakwaterowanie, adaptację i logikę wsparcia.',
}

plContent.privacy = {
  meta: {
    title: 'Polityka prywatności',
    description:
      'Zapoznaj się z polityką prywatności VW Recruit dotyczącą gromadzenia, przetwarzania i ochrony danych osobowych na stronie internetowej.',
  },
  title: 'Polityka prywatności',
  sections: [
    {
      title: '1. Postanowienia ogólne',
      paragraphs: [
        'Niniejsza Polityka prywatności określa procedurę gromadzenia, wykorzystywania, przechowywania i ochrony danych osobowych użytkowników strony internetowej VW Recruit (dalej — "Strona"). Korzystając z naszej Strony, wyrażasz zgodę na warunki niniejszej Polityki. Jeśli nie zgadzasz się z tymi warunkami, prosimy o zaprzestanie korzystania ze Strony.',
      ],
    },
    {
      title: '2. Jakie dane gromadzimy',
      paragraphs: ['Podczas korzystania ze Strony możemy gromadzić następujące dane osobowe:'],
      items: [
        'Informacje kontaktowe: imię i nazwisko, nazwa firmy, adres e-mail, numer telefonu. Dane te przekazujesz dobrowolnie podczas wypełniania formularzy (np. "Zarezerwuj rozmowę", "Odbierz raport", "Wyceń rekrutację").',
        'Dane techniczne: adres IP, typ przeglądarki, typ urządzenia, dane o wizytach na stronach (za pomocą plików cookie i narzędzi analitycznych).',
      ],
    },
    {
      title: '3. Cel gromadzenia i wykorzystywania danych',
      paragraphs: ['Zgromadzone dane osobowe są wykorzystywane do:'],
      items: [
        'Kontaktowania się z Tobą w celu udzielenia konsultacji dotyczących usług rekrutacji międzynarodowej.',
        'Wysyłania żądanych materiałów (np. raportów PDF, kalkulacji kosztów).',
        'Poprawy funkcjonowania Strony i analizy skuteczności naszych kampanii marketingowych.',
        'Wysyłania ważnych powiadomień i ofert handlowych (za Twoją zgodą).',
      ],
    },
    {
      title: '4. Przekazywanie danych osobom trzecim',
      paragraphs: [
        'Nie sprzedajemy, nie wymieniamy ani nie przekazujemy Twoich danych osobowych osobom trzecim bez Twojej zgody, z wyjątkiem przypadków przewidzianych prawem. Dane mogą być udostępniane naszym zaufanym wykonawcom (np. dostawcom hostingu, usługom mailingowym), którzy są zobowiązani do zachowania ich poufności.',
      ],
    },
    {
      title: '5. Ochrona i przechowywanie danych',
      paragraphs: [
        'Podejmujemy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych przed nieautoryzowanym dostępem, zmianą, ujawnieniem lub zniszczeniem. Dane są przechowywane tylko przez czas niezbędny do osiągnięcia celów określonych w niniejszej Polityce lub zgodnie z wymogami prawa.',
      ],
    },
    {
      title: '6. Prawa użytkowników',
      paragraphs: ['Masz prawo do:'],
      items: [
        'Uzyskania dostępu do swoich danych osobowych, które przechowujemy.',
        'Żądania poprawienia nieścisłości w Twoich danych.',
        'Żądania usunięcia Twoich danych ("prawo do bycia zapomnianym").',
        'Wycofania zgody na przetwarzanie danych w dowolnym momencie.',
      ],
    },
    {
      title: '7. Wykorzystanie plików Cookie',
      paragraphs: [
        'Nasza Strona używa plików cookie do zapewnienia prawidłowego działania stron, analizy ruchu i poprawy doświadczeń użytkowników. Możesz skonfigurować lub wyłączyć zapisywanie plików cookie w ustawieniach swojej przeglądarki.',
      ],
    },
    {
      title: '8. Zmiany w Polityce prywatności',
      paragraphs: [
        'Zastrzegamy sobie prawo do aktualizacji niniejszej Polityki. Zmiany wchodzą w życie z chwilą ich opublikowania na tej stronie.',
      ],
    },
    {
      title: '9. Kontakty',
      paragraphs: [
        'Jeśli masz jakiekolwiek pytania dotyczące niniejszej Polityki prywatności lub chcesz zrealizować swoje prawa dotyczące danych osobowych, skontaktuj się z nami za pomocą formularza kontaktowego na Stronie lub pocztą elektroniczną: partners.vizarecruting.com@gmail.com.',
      ],
    },
  ],
}

plContent.terms = {
  meta: {
    title: 'Warunki użytkowania',
    description:
      'Zapoznaj się z warunkami użytkowania strony VW Recruit, zasadami interakcji przez formularze i podstawowymi zasadami udostępniania informacji na stronie.',
  },
  title: 'Warunki użytkowania',
  sections: [
    {
      title: '1. Postanowienia ogólne',
      paragraphs: [
        'Niniejsze Warunki użytkowania (dalej — "Warunki") regulują dostęp i korzystanie z witryny VW Recruit (dalej — "Strona"). Otwierając i przeglądając tę Stronę, w pełni akceptujesz niniejsze Warunki.',
      ],
    },
    {
      title: '2. Usługi firmy',
      paragraphs: [
        'Strona ma wyłącznie charakter informacyjny i została stworzona w celu zapoznania użytkowników z usługami międzynarodowej rekrutacji pracowników, a także umożliwienia pozostawienia zapytania o konsultacje, kalkulacje lub materiały analityczne. Wypełnienie formularza na stronie nie jest zawarciem umowy o świadczenie usług; stosunki umowne są formalizowane oddzielnie po indywidualnych ustaleniach.',
      ],
    },
    {
      title: '3. Obowiązki użytkownika',
      paragraphs: ['Użytkownik zobowiązuje się do:'],
      items: [
        'Podawania prawdziwych informacji (imię, nazwisko, dane kontaktowe firmy) podczas wypełniania formularzy na Stronie.',
        'Niekorzystania ze Strony w celu jakichkolwiek nielegalnych, oszukańczych działań lub rozpowszechniania złośliwego oprogramowania.',
        'Niepodejmowania prób uzyskania nieautoryzowanego dostępu do systemów administracyjnych Strony.',
      ],
    },
    {
      title: '4. Własność intelektualna',
      paragraphs: [
        'Wszystkie materiały zamieszczone na Stronie, w tym teksty (opisy usług, studia przypadków, raporty), obrazy, logotypy ("VW Recruit"), grafika i struktura projektu, są własnością firmy lub są używane na podstawie licencji. Jakiekolwiek kopiowanie, rozpowszechnianie lub wykorzystywanie materiałów Strony w celach komercyjnych bez uprzedniej pisemnej zgody właściciela praw autorskich jest zabronione.',
      ],
    },
    {
      title: '5. Zrzeczenie się odpowiedzialności',
      paragraphs: [
        'Informacje na Stronie są udostępniane w stanie "takim, jakim są". Staramy się utrzymywać dane aktualne (np. informacje o terminach, kosztach czy gwarancjach wymiany), jednak dokładne warunki współpracy są ustalane wyłącznie w indywidualnej umowie.',
        'Firma nie ponosi odpowiedzialności za ewentualne awarie techniczne w działaniu Strony lub tymczasową niemożność uzyskania do niej dostępu.',
        'Strona może zawierać linki do zasobów stron trzecich. Nie ponosimy odpowiedzialności za treść i politykę prywatności takich zewnętrznych zasobów.',
      ],
    },
    {
      title: '6. Zmiany w Warunkach użytkowania',
      paragraphs: [
        'Administracja Strony zastrzega sobie prawo do wprowadzania zmian w niniejszych Warunkach w dowolnym czasie bez uprzedniego osobistego powiadamiania użytkowników. Zaktualizowana wersja Warunków obowiązuje od momentu jej opublikowania na tej stronie. Zalecamy regularne sprawdzanie tej sekcji.',
      ],
    },
    {
      title: '7. Rozwiązywanie sporów',
      paragraphs: [
        'Wszelkie spory wynikające w związku z korzystaniem z tej Strony są rozwiązywane w drodze negocjacji. W przypadku braku porozumienia spór podlega rozpatrzeniu zgodnie z obowiązującym prawem [wskaż kraj lub jurysdykcję, np. Polska].',
      ],
    },
    {
      title: '8. Informacje zwrotne',
      paragraphs: [
        'We wszystkich sprawach dotyczących działania Strony lub warunków współpracy, prosimy o kontakt za pośrednictwem formularza na stronie "Kontakty" lub pod adresem: partners.vizarecruting.com@gmail.com.',
      ],
    },
  ],
}

plContent.contacts = {
  meta: {
    title: 'Kontakty VW Recruit',
    description:
      'Skontaktuj się z VW Recruit w sprawie międzynarodowej rekrutacji pracowników, uruchomienia zespołu, dokumentów i formatu współpracy.',
  },
  title: 'Kontakty dla firm, które potrzebują szybko uzupełnić braki kadrowe',
  summary: [
    {
      label: 'Odpowiedź',
      value: 'w ciągu dnia roboczego',
    },
    {
      label: 'Format',
      value: 'telefon, Zoom lub e-mail',
    },
    {
      label: 'Fokus',
      value: 'pracodawcy i zespoły operacyjne',
    },
  ],
  channelsTitle: 'Jak najwygodniej nawiązać kontakt',
  channelsLead:
    'Wybierz format, który aktualnie najbardziej Ci odpowiada. Jeśli nie masz jeszcze ostatecznego briefu, możesz zacząć od krótkiej rozmowy, a do szczegółów przejść później.',
  channels: [
    {
      icon: 'brief',
      label: 'Zapytanie rekrutacyjne',
      title: 'Zostaw zgłoszenie dotyczące Twoich potrzeb',
      text: 'Najwygodniejsza opcja, jeśli znasz już role, przybliżoną liczbę pracowników lub pożądany termin wdrożenia zespołu.',
      actionLabel: 'Otwórz formularz',
      actionType: 'anchor',
      actionTarget: '#contact-form',
    },
    {
      icon: 'call',
      label: 'Szybka synchronizacja',
      title: 'Zarezerwuj krótką rozmowę z zespołem',
      text: 'Odpowiednie, jeśli chcesz szybko dowiedzieć się, czy rekrutacja międzynarodowa pasuje do Twojej sytuacji i jakie będą kolejne kroki.',
      actionLabel: 'Zarezerwuj rozmowę',
      actionType: 'modal',
      actionTarget: 'callback',
    },
    {
      icon: 'documents',
      label: 'Ścieżka wdrożenia',
      title: 'Doprecyzuj dokumenty, terminy i logikę wdrożenia',
      text: 'Wyjaśniamy proces od selekcji i akceptacji kandydatów po dokumenty, logistykę, przyjazd i wejście ludzi na zmianę.',
    },
  ],
  checklistTitle: 'Co warto przygotować przed nawiązaniem kontaktu',
  checklistLead:
    'Nie jest wymagany idealnie sformułowany brief. Nawet podstawowe informacje pomogą szybciej przejść do konkretnej rozmowy.',
  checklist: [
    'Jakie dokładnie role lub działy trzeba wzmocnić',
    'Przybliżona liczba pracowników i pożądany termin rozpoczęcia pracy',
    'Kraj i miasto, w którym będzie pracował zespół',
    'Czy potrzebujesz tylko rekrutacji, czy pełnego wsparcia pod klucz',
  ],
  supportTitle: 'Co zespół może wyjaśnić już przy pierwszym kontakcie',
  supportLead:
    'Pierwszy kontakt nie jest dla formalności, ale po to, aby rozwiać wątpliwości i pokazać, w jakim stopniu nasz model rzeczywiście pasuje do Twojego zapytania.',
  support: [
    'Jak szybko można uruchomić strumień kandydatów',
    'Które kraje rekrutacji najlepiej odpowiadają danym stanowiskom',
    'Jak zorganizowane są dokumenty, zezwolenia i koordynacja przyjazdu',
    'Jaki będzie format komunikacji i uruchomienia zespołu po akceptacji',
  ],
  form: {
    title: 'Zostaw zapytanie, a wrócimy z kolejnym krokiem',
    lead:
      'Podaj swoje dane kontaktowe, a zespół VW Recruit podpowie najbardziej praktyczny format startu specjalnie dla Twojej sytuacji.',
    note: 'Najlepiej sprawdza się dla pracodawców, którzy potrzebują rekrutacji, zastępstwa lub uruchomienia zespołu.',
  },
}

plContent.thankYouReport = {
  meta: {
    title: 'Dziękujemy za prośbę o raport',
    description:
      'Twoja prośba o raport została zapisana. Zespół VW Recruit wkrótce skontaktuje się z Tobą i wyśle materiał.',
  },
  title: 'Dziękujemy. Otrzymaliśmy Twoje zapytanie o raport',
  lead:
    'Zapisaliśmy Twoje zgłoszenie, wkrótce wyślemy materiał i zaproponujemy praktyczny kolejny krok w zależności od Twojej sytuacji rekrutacyjnej.',
  ctaLabel: 'Wróć na stronę główną',
  secondaryCtaLabel: 'Otwórz kontakty',
}

plContent.ui.modalClose = 'Zamknij okno dialogowe'
plContent.ui.leadCapture = 'Zbieranie leadów'
plContent.ui.video = 'Wideo'
plContent.ui.videoPlay = 'Odtwórz wideo'
plContent.ui.openMenu = 'Otwórz menu'
plContent.ui.primaryNav = 'Nawigacja główna'
plContent.ui.languagePickerTitle = 'Wybierz język'
plContent.ui.fieldName = 'Imię'
plContent.ui.fieldCompany = 'Firma'
plContent.ui.fieldEmail = 'E-mail'
plContent.ui.fieldPhone = 'Telefon'
plContent.ui.fieldIsBusiness = 'Czy jesteś rzeczywistą agencją lub firmą?'
plContent.ui.fieldTargetCountries = 'Które kraje Cię interesują?'
plContent.ui.fieldWorkersCount = 'Dla ilu osób potrzebujesz rekrutacji?'
plContent.ui.fieldSelectOption = 'Wybierz opcję'
plContent.ui.optionYes = 'Tak'
plContent.ui.optionNo = 'Nie'
plContent.ui.sendRequest = 'Wyślij zapytanie'
plContent.ui.requestCallback = 'Zarezerwuj rozmowę'
plContent.ui.getReport = 'Odbierz raport'
plContent.ui.bookCall = 'Zarezerwuj rozmowę'
plContent.ui.quizEyebrow = 'Quiz'
plContent.ui.quizContinue = 'Kontynuuj'
plContent.ui.quizBack = 'Wstecz'
plContent.ui.quizSubmit = 'Wyślij'
plContent.ui.quizReady = 'Gotowe'
plContent.ui.quizValidationError = 'Proszę wypełnić obecny krok.'
plContent.ui.quizSubmitError = 'Nie udało się wysłać formularza. Spróbuj ponownie.'
plContent.ui.processEyebrow = 'Proces'
plContent.ui.caseStudy = 'Case Study'
plContent.ui.caseViewLabel = 'Zobacz projekt'
plContent.ui.leadCaptureEyebrow = 'Zbieranie leadów'
plContent.ui.faqEyebrow = 'FAQ'
plContent.ui.aboutEyebrow = 'O nas'
plContent.ui.contactsEyebrow = 'Kontakty'
plContent.ui.reportEyebrow = 'Raport'
plContent.ui.privacyEyebrow = 'Polityka prywatności'
plContent.ui.termsEyebrow = 'Warunki użytkowania'
plContent.ui.thankYouEyebrow = 'Dziękujemy'
plContent.ui.finalCtaEyebrow = 'Ostatnie CTA'
plContent.ui.downloadReport = 'Pobierz raport'
plContent.ui.openContactsPage = 'Otwórz stronę z kontaktami'
plContent.ui.projectsExamples = 'Przykłady projektów'
plContent.ui.reelPlaceholder = 'Miejsce na reel lub wideo w oknie po podłączeniu źródeł.'
plContent.ui.industriesLead =
  'Najczęściej firmy wykorzystują ten model do pracy operacyjnej w produkcji, magazynach, budownictwie oraz usługach.'
plContent.ui.legalPlaceholder = 'Tutaj będzie tekst prawny. Zastąp go zatwierdzoną ostateczną wersją przed uruchomieniem.'
plContent.ui.footerDescription =
  'Kompleksowa rekrutacja pracowników z Azji i Afryki: od poszukiwania kandydatów i dokumentów po przyjazd, adaptację i wejście zespołu na zmianę.'
plContent.ui.footerCorePages = 'Główne strony'
plContent.ui.footerLegal = 'Informacje prawne'
plContent.ui.privacyPolicy = 'Polityka prywatności'
plContent.ui.termsAndConditions = 'Warunki użytkowania'
plContent.ui.formRequiredError = 'Proszę wypełnić wymagane pola formularza.'
plContent.ui.formSubmittingButton = 'Wysyłanie...'
plContent.ui.formSubmittingStatus = 'Wysyłanie formularza...'
plContent.ui.formSubmitError = 'Nie udało się wysłać formularza. Spróbuj ponownie.'
plContent.ui.industryVisualLogisticsAlt = 'Pracownicy w magazynie i logistyce'
plContent.ui.industryVisualConstructionAlt = 'Pracownicy na placu budowy'
plContent.ui.industryVisualHospitalityAlt = 'Personel w branży HoReCa i usługach'
plContent.ui.industryVisualManufacturingAlt = 'Pracownicy na produkcji'
plContent.ui.industrySlidePlaceholder =
  'Odrębne wizualne case study dla tego sektora można skalować na strony SEO, quizy i personalizowane CTA.'
plContent.ui.comparisonCardCta = 'Wyceń rekrutację'
plContent.ui.comparisonOtherMark = 'IN'
plContent.ui.guaranteesLegalDelta = 'Kwoty, zezwolenia, wizy'
plContent.ui.guaranteesReplacementMetric = '0 PLN'
plContent.ui.guaranteesReplacementDelta = 'Szybka wymiana gwarancyjna'
plContent.ui.guaranteesSupportMetric = 'Pod klucz'
plContent.ui.guaranteesSupportDelta = 'Od rekrutacji do zmiany'
plContent.ui.guaranteesFallbackDelta = 'Przewaga VW Recruit'
plContent.ui.guaranteesReplacementLabel = 'Gwarancja na starcie'
plContent.ui.guaranteesReplacementUnit = 'PLN'
plContent.ui.guaranteesReplacementWarrantyDays = 30
plContent.ui.guaranteesReplacementWarrantyLabel = 'dni gwarancji'
plContent.ui.guaranteesReplacementReplyHours = 48
plContent.ui.guaranteesReplacementReplyLabel = 'godzin na odpowiedź'
plContent.ui.guaranteesSupportBadge = 'Jeden zespół do całego procesu'
plContent.ui.guaranteesCandidatesDays = 10
plContent.ui.guaranteesCandidatesDaysLabel = 'dni do kandydatów'
plContent.ui.guaranteesSupportPercentLabel = '% wsparcia'
plContent.ui.guaranteesOneTeamCount = 1
plContent.ui.guaranteesOneTeamLabel = 'zespół'
plContent.ui.guaranteeTimelineStepOne = 'Selekcja'
plContent.ui.guaranteeTimelineStepTwo = 'Dokumenty'
plContent.ui.guaranteeTimelineStepThree = 'Logistyka'
plContent.ui.guaranteeTimelineStepFour = 'Przyjazd'
plContent.ui.guaranteeTimelineStepFive = 'Zmiana'
plContent.ui.guaranteeSupportStepOne = 'Selekcja'
plContent.ui.guaranteeSupportStepTwo = 'Przyjazd'
plContent.ui.guaranteeSupportNote = 'Start zmiany'
plContent.ui.guaranteeChecklistQuota = 'Kwoty'
plContent.ui.guaranteeChecklistPermit = 'Zezwolenia'
plContent.ui.guaranteeChecklistVisa = 'Wizy'
plContent.ui.reviewFallbackValue = '7 LAT'
plContent.ui.reviewLabelPrefix = '7 lat '
plContent.ui.servicesShortRequestEyebrow = 'Krótkie zapytanie'
plContent.ui.servicesHeroGhostCta = 'Zobacz warunki usługi'
plContent.ui.servicesHeroPanelTitle =
  'Rekrutacja, dokumenty, logistyka i uruchomienie zespołu w jednym procesie'
plContent.ui.servicesHeroPanelText =
  'Cała ścieżka jest zbudowana tak, aby biznes widział przewidywalne etapy wdrożenia, a kandydat rozumiał, co się dzieje na każdym kroku.'
plContent.ui.servicesPillarsEyebrow = 'Co zapewniamy'
plContent.ui.servicesPillarsTitle =
  'Usługa nie polega na "szukaniu CV", ale na kompletnej ścieżce wprowadzania ludzi do pracy'
plContent.ui.servicesOfferEyebrow = 'Co zyskują obie strony'
plContent.ui.servicesOfferTitle =
  'Model, w którym firma otrzymuje kontrolowany rezultat, a kandydat widzi transparentny proces'
plContent.ui.servicesOfferVisualLabel = 'VW Recruit / ścieżka'
plContent.ui.servicesOfferVisualPrimary = 'Dla biznesu'
plContent.ui.servicesOfferVisualSecondary = 'Dla kandydatów'
plContent.ui.servicesBeamEyebrow = 'Mapa procesu'
plContent.ui.servicesRouteEyebrow = 'Jak wygląda współpraca'
plContent.ui.servicesRouteTitle = 'Przejrzysta ścieżka od zapytania do wyjścia pracowników na zmianę'
plContent.ui.servicesRouteLead =
  'Biznes widzi przejrzystą ścieżkę uruchomienia z przewidywalnymi etapami od zapytania do wejścia ludzi na zmianę.'
plContent.ui.servicesProofEyebrow = 'Dlaczego to działa'
plContent.ui.servicesProofTitle =
  'Nie tylko rekrutacja, ale kontrolowana usługa z jasnym wynikiem na każdym etapie'
plContent.ui.servicesFitEyebrow = 'Gdzie to działa najlepiej'
plContent.ui.servicesFitTitle =
  'Role i nisze, w których międzynarodowa rekrutacja daje maksymalny efekt operacyjny'
plContent.ui.servicesFitLead =
  'Każda karta pokazuje, gdzie model daje najszybszy rezultat operacyjny, najczystsze wdrożenie zespołu i najwyższą stabilność procesu.'
plContent.ui.servicesFitScoreLabel = 'poziom dopasowania'
plContent.ui.servicesFitMetricOne = 'Szybkość wdrożenia'
plContent.ui.servicesFitMetricTwo = 'Stabilność'
plContent.ui.servicesFitMetricThree = 'Transparentność'
plContent.ui.servicesFitCardTextOne =
  'Działa najsilniej tam, gdzie ważne są powtarzalne zmiany, dyscyplina obecności i szybkie skalowanie bez przerw.'
plContent.ui.servicesFitCardTextTwo =
  'Dobrze sprawdza się przy szczytach sezonowych, wzroście obciążeń i operacjach, w których firma pilnie potrzebuje rytmicznego wprowadzania ludzi.'
plContent.ui.servicesFitCardTextThree =
  'Pasuje do projektów o rygorystycznych terminach, w których trzeba połączyć rekrutację, dokumenty i przyjazdy bez chaosu.'
plContent.ui.servicesFitCardTextFour =
  'Daje dobre wyniki w zespołach serwisowych, w których krytyczna jest jasna ścieżka, szybka adaptacja i stabilność startu.'
plContent.ui.servicesLeadEyebrow = 'Rozpocznij dialog'
plContent.ui.servicesLeadText =
  'Dla pracodawców to szybki sposób na zrozumienie, jak uruchomić rekrutację. Dla kandydatów — szansa na uczciwe wyjaśnienie ścieżki zatrudnienia i dokumentów.'
plContent.ui.servicesSegmentBadgeBusiness = 'B2B'
plContent.ui.servicesSegmentBadgeCandidate = 'B2C'
plContent.ui.industriesSectionTitle = 'DLA JAKICH BRANŻ PASUJE TEN MODEL ZATRUDNIENIA'
plContent.ui.industrySliderPrev = 'Poprzedni slajd'
plContent.ui.industrySliderNext = 'Następny slajd'
plContent.ui.quizSectionLead =
  'Krótki quiz krok po kroku, który pomaga szybko zebrać zapytanie i przekazać je w jednolitym formacie.'
plContent.ui.casesSectionLead =
  'Pokazujemy przykłady uruchomienia rekrutacji dla produkcji, logistyki, hoteli i innych zespołów operacyjnych.'
plContent.ui.caseSliderPrev = 'Poprzedni projekt'
plContent.ui.caseSliderNext = 'Następny projekt'
plContent.ui.casesTimelineSteps = ['Brief', 'Poszukiwanie', 'Akceptacja', 'Dokumenty', 'Przyjazd']
plContent.ui.industriesFitSummary =
  'Sygnały, które zazwyczaj oznaczają, że rekrutacja lokalna nie nadąża już za tempem Twoich operacji i potrzebny jest bardziej systemowy model budowania zespołu.'
plContent.ui.caseSubtitlePlaceholder = 'Krótki opis projektu'
plContent.ui.caseProblemPlaceholder =
  'Osobna strona SEO dla projektu z wynikami, terminami i docelowym wezwaniem do działania (CTA).'
plContent.ui.processStepLabel = 'Krok'
plContent.ui.reportPanelTitle = 'Odbierz materiał na e-mail'
plContent.ui.reportPanelText =
  'Zostaw dane kontaktowe, a my wyślemy użyteczny materiał na temat rekrutacji międzynarodowej i optymalizacji kosztów personelu.'
plContent.ui.reportPanelKicker = 'VW Recruit / Analityka'
plContent.ui.reportPanelReportTitle = 'Rynek pracy 2026'
plContent.ui.reportPanelReportText =
  'Integracja międzynarodowego personelu dla firm z brakami kadrowymi'
plContent.ui.reportPanelGuide = 'PDF'
plContent.ui.videoInsightLabel = 'Wideo insight'
plContent.ui.mediaDefaultDuration = '02:00'
plContent.ui.reviewsPrev = 'Poprzednia opinia'
plContent.ui.reviewsNext = 'Następna opinia'
plContent.ui.genericPageCardOne = 'Podstawowa strona przygotowana dla zlokalizowanych treści'
plContent.ui.genericPageCardTwo = 'Metadane i struktura są już gotowe do dalszego wypełniania'
plContent.ui.genericPageCardThree = 'Każda ścieżka jest generowana oddzielnie dla każdej lokalizacji'

plContent.quiz.title = 'Kalkulacja rekrutacji'
plContent.quiz.progressLabel = 'Krok'
plContent.quiz.completionTitle = 'Twoje zapytanie jest gotowe'
plContent.quiz.completionLead =
  'Otrzymaliśmy Twoje odpowiedzi. Kolejnym krokiem jest kontakt z Tobą w celu przygotowania konsultacji lub wstępnej kalkulacji.'
plContent.quiz.steps = [
  {
    id: 'industry',
    label: 'Dla jakiej branży potrzebujesz pracowników?',
    type: 'options',
    options: ['Produkcja', 'Budownictwo', 'Magazyny i logistyka', 'Hotele i usługi', 'Inne'],
  },
  {
    id: 'teamSize',
    label: 'Ilu pracowników potrzebujesz?',
    type: 'options',
    options: ['1–10', '11–30', '31–50', '50+'],
  },
  {
    id: 'timeline',
    label: 'Kiedy zespół ma rozpocząć pracę?',
    type: 'options',
    options: ['Pilnie', 'W ciągu 2–4 tygodni', 'W ciągu 1–2 miesięcy', 'Na razie sprawdzam opcje'],
  },
  {
    id: 'location',
    label: 'Gdzie znajduje się Twoja firma?',
    type: 'text',
    fields: [
      { name: 'country', label: 'Kraj', required: true },
      { name: 'city', label: 'Miasto', required: false },
    ],
  },
  {
    id: 'problem',
    label: 'Jaki jest obecnie największy problem z zatrudnieniem?',
    type: 'options',
    options: ['Wysokie koszty płac', 'Brak personelu', 'Rotacja kadr', 'Szczyty sezonowe', 'Skalowanie produkcji', 'Inne'],
  },
  {
    id: 'contact',
    label: 'Gdzie wysłać kalkulację?',
    type: 'text',
    fields: [
      { name: 'name', label: 'Imię', required: true },
      { name: 'company', label: 'Firma', required: true },
      { name: 'phone', label: 'Telefon', required: true },
      { name: 'email', label: 'E-mail', required: true },
    ],
  },
]

plContent.services = {
  title: 'Usługi międzynarodowej rekrutacji pracowników pod klucz',
  lead:
    'Zamykamy <strong>braki personelu operacyjnego</strong> dla biznesu i prowadzimy kandydatów do <strong>legalnego podjęcia pracy</strong>: od poszukiwań i selekcji po dokumenty, przyjazd i rozpoczęcie zmiany.',
  intro: '',
  cta: 'Omów rekrutację dla firmy',
  metrics: [
    { value: '10', suffix: ' dni', label: 'do pierwszych kandydatów w procesie' },
    { value: '100', suffix: '%', label: 'wsparcia dokumentów i legalności' },
    { value: '4', suffix: ' etapy', label: 'od zapytania do startu zespołu' },
  ],
  heroBadges: [
    { value: '10', suffix: ' dni', label: 'do pierwszych kandydatów' },
    { value: '100', suffix: '%', label: 'legalne wsparcie' },
    { value: 'Pod klucz', suffix: '', label: 'od poszukiwań do rozpoczęcia zmiany' },
    { value: '1 zespół', suffix: '', label: 'rekrutacja, dokumenty, logistyka' },
  ],
  segments: [
    {
      variant: 'business',
      label: 'Dla biznesu',
      badge: 'B2B',
      title: 'Dla firm, które potrzebują stabilnego zespołu bez luk kadrowych',
      text: 'Odpowiednie dla firm, które nie mogą obsadzić ról operacyjnych lokalną rekrutacją, skalują działalność, mają sezony szczytowe lub są zmęczone wysoką rotacją kadr.',
      cta: 'Otrzymaj plan rekrutacji',
    },
    {
      variant: 'candidate',
      label: 'Dla kandydatów',
      badge: 'B2C',
      title: 'Dla kandydatów, którzy chcą legalnie wyjechać do pracy za granicę',
      text: 'W prosty sposób wyjaśniamy etapy: wstępna selekcja, dokumenty, przyjazd, adaptacja i rozpoczęcie pracy. Bez niejasnych warunków i obietnic bez pokrycia.',
      cta: 'Złóż aplikację',
    },
  ],
  pillars: [
    {
      title: 'Poszukiwanie i selekcja kandydatów',
      text: 'Tworzymy profil stanowiska, uruchamiamy poszukiwania przez bazę i sieć partnerską, odrzucamy słabych kandydatów i przekazujemy do akceptacji tylko odpowiednie osoby.',
    },
    {
      title: 'Dokumenty, zezwolenia i legalność',
      text: 'Obsługujemy kwoty, zezwolenia, procesy wizowe i migracyjne, by pracodawca nie utonął w biurokracji, a kandydat rozumiał, na jakim etapie się znajduje.',
    },
    {
      title: 'Przyjazd, adaptacja i start zmiany',
      text: 'Koordynujemy logistykę, przyjazdy, rozpoczęcie pracy i pierwszy etap adaptacji, aby pracownicy faktycznie dotarli na obiekt w uzgodnionym terminie.',
    },
  ],
  timeline: [
    {
      title: 'Brief i kalkulacja modelu',
      text: 'Doprecyzowujemy liczbę osób, stanowiska, harmonogram, kraj rozpoczęcia projektu oraz ograniczenia, po czym tworzymy realistyczny scenariusz rekrutacji.',
    },
    {
      title: 'Selekcja i zatwierdzanie kandydatów',
      text: 'Rozpoczynamy poszukiwania, prowadzimy wstępny screening, weryfikujemy dokumenty i dajemy Wam możliwość ostatecznej akceptacji kandydatów.',
    },
    {
      title: 'Dokumentacja i organizacja przyjazdu',
      text: 'Po akceptacji uruchamiamy proces przygotowania dokumentów, koordynacji zezwoleń, logistyki oraz gotowości osób do wyjazdu.',
    },
    {
      title: 'Wyjście do pracy i wsparcie',
      text: 'Po przyjeździe koordynujemy start zmiany, adaptację oraz komunikację między firmą, pracownikami a osobami odpowiedzialnymi na obiekcie.',
    },
  ],
  deliverables: [
    'Profil wakatów i strategia poszukiwań pod konkretną rolę',
    'Pakiet wyselekcjonowanych kandydatów gotowych do akceptacji',
    'Kontrola na wszystkich etapach formalności dokumentacyjnych',
    'Harmonogram przyjazdu pracowników i wdrożenia zespołu',
    'Wsparcie zespołu na starcie oraz w pierwszym okresie adaptacji',
    'Warunki gwarancyjne na wymianę zależnie od formatu projektu',
  ],
  offerCards: [
    {
      title: 'Rekrutacja dla pracodawców',
      text: 'Szybkie uruchomienie rekrutacji pod wakaty, sezony szczytowe lub skalowanie produkcji.',
    },
    {
      title: 'Legalna ścieżka dla kandydatów',
      text: 'Przejrzysty proces selekcji, przygotowanie dokumentów i wsparcie aż do faktycznego podjęcia pracy.',
    },
    {
      title: 'Wsparcie po starcie',
      text: 'Adaptacja, komunikacja, wymiana personelu oraz koordynacja procesów na początkowym etapie.',
    },
  ],
  beam: {
    title: 'Jak przebiega proces rekrutacji od zapytania do startu zmiany',
    lead:
      'Wizualna mapa procesu pokazująca, jak brief, selekcja, zatwierdzanie, dokumenty i wdrożenie zespołu łączą się w jeden kontrolowany proces.',
    centerLabel: 'Przetwarzanie',
    outputLabel: 'Start zmiany',
    steps: ['Brief', 'Poszukiwania', 'Akceptacja', 'Dokumenty', 'Przyjazd'],
  },
  roles: [
    'Pracownicy na linie produkcyjne, do pakowania, sortowania i procesów pomocniczych',
    'Zespoły magazynowe do kompletacji, sortowania, przenoszenia i operacji logistycznych',
    'Pracownicy budowlani i montażowi na obiekty z brakiem personelu',
    'Pracownicy dla hoteli, na kuchnię, do sprzątania pokoi i usług',
  ],
  promise: {
    title: 'Jeden zespół odpowiada za całą ścieżkę kandydata',
    text: 'Dla firmy oznacza to mniejszy chaos pomiędzy rekrutacją, dokumentami, logistyką i wdrożeniem ludzi do pracy. Zyskujesz jeden przejrzysty model współpracy zamiast szukania oddzielnych podwykonawców.',
  },
  trust: [
    'Pracodawca widzi przewidywalną ścieżkę uruchomienia zespołu',
    'Kandydat otrzymuje legalną i zrozumiałą ścieżkę zatrudnienia',
    'Jeden zespół koordynuje rekrutację, dokumenty, logistykę i adaptację',
  ],
  form: {
    title: 'Odbierz plan rekrutacji lub skonsultuj zatrudnienie',
    lead: 'Wypełnij krótki formularz. Dla pracodawcy przygotujemy kolejny krok dotyczący uruchomienia rekrutacji. Kandydatowi wyjaśnimy ścieżkę i wymogi do startu.',
    button: 'Skonsultuj się',
    note: 'Zazwyczaj odpowiadamy w ciągu jednego dnia roboczego.',
  },
}

plContent.cases = {
  title: 'Projekty międzynarodowej rekrutacji z mierzalnym efektem operacyjnym',
  lead:
    'Rzeczywiste scenariusze, w których firma likwiduje braki kadrowe, przyspiesza wdrożenie zespołu i zyskuje przewidywalny harmonogram wejścia ludzi do pracy.',
  description:
    'Case studies z międzynarodowej rekrutacji pracowników: wyzwanie, model wdrożenia, terminy i wynik dla firmy.',
  eyebrow: 'Case Studies',
  intro:
    'Ta strona nie jest po to, aby opowiadać tylko "historie sukcesu", ale by udowodnić, że model działa w rzeczywistych warunkach operacyjnych: gdy brakuje ludzi, pękają terminy lub rośnie sezonowe obciążenie.',
  stats: [
    { value: '3', label: 'szczegółowe opisy wdrożeń' },
    { value: '4', label: 'kluczowe obszary biznesu' },
    { value: '96', suffix: '%', label: 'wskaźnik wejść na zmianę' },
  ],
  featured: [
    {
      title: 'Delta Pack',
      category: 'Produkcja',
      colSpan: 2,
      subtitle: 'Przedsiębiorstwo produkcyjne, Europa Środkowa',
      problem:
        'Przez długi czas firma nie mogła stabilnie obsadzić zmian na linii pakowania z powodu powolnej rekrutacji lokalnej i stałej rotacji.',
      solution:
        'Model wdrożenia połączył wyszukiwanie kandydatów, obsługę dokumentów, logistykę i koordynację startu zespołu w jeden spójny proces.',
      result:
        'Firma otrzymała czytelny plan obsadzenia zmian, krótszy cykl akceptacji kandydatów i pełniejszą kontrolę nad startem projektu.',
      timeline: 'Pierwsi kandydaci w 7-14 dni',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Pracownicy na linii produkcyjnej',
      metrics: [
        { label: 'Potrzeba', value: '32 pracowników' },
        { label: 'Format', value: 'Linia pakująca' },
        { label: 'Fokus', value: 'Stabilne uruchomienie zmian' },
      ],
    },
    {
      title: 'Nord Cargo Hub',
      category: 'Logistyka',
      colSpan: 1,
      subtitle: 'Kompleks magazynowy i logistyka',
      problem:
        'Magazyn nie nadążał z pokryciem obciążeń szczytowych bez rezerwowego personelu i przewidywalnego harmonogramu przyjazdu pracowników.',
      solution:
        'Skupiliśmy się na szybkości short-list, kontroli dokumentów i przygotowaniu ludzi do wejścia w harmonogram zmianowy.',
      result:
        'Zespół operacyjny zyskał bardziej przewidywalną oś czasu na przygotowanie onboardingu, nadzorców oraz pokrycie szczytu sezonu bez chaosu.',
      timeline: 'Szybki start przed sezonem',
      image: '/images/industry-logistics.jpg',
      alt: 'Pracownicy w magazynie i logistyce',
      metrics: [
        { label: 'Potrzeba', value: 'Zespół sortujący' },
        { label: 'Format', value: 'Operacje magazynowe' },
        { label: 'Fokus', value: 'Gotowość na sezon szczytowy' },
      ],
    },
    {
      title: 'Urban Build Group',
      category: 'Budownictwo',
      colSpan: 3,
      subtitle: 'Wykonawca budowlany',
      problem:
        'Wykonawca potrzebował szybko wzmocnić aktywne obiekty bez odkładania terminów i bez problemów w kompletowaniu brygad.',
      solution:
        'Wyszukiwanie, zezwolenia, logistyka i start adaptacji zostały zsynchronizowane jako jeden przepływ pracy od akceptacji po wejście na budowę.',
      result:
        'Klient otrzymał model, który zmniejszył lukę między akceptacją kandydatów, przygotowaniem dokumentów a faktycznym rozpoczęciem prac.',
      timeline: 'Harmonogram dostosowany do terminów',
      image: '/images/industry-construction.jpg',
      alt: 'Pracownicy na placu budowy',
      metrics: [
        { label: 'Potrzeba', value: 'Wzmocnienie obiektów' },
        { label: 'Format', value: 'Role budowlane' },
        { label: 'Fokus', value: 'Ochrona terminów' },
      ],
    },
  ],
  convincingTitle: 'Od wyzwania do wyniku: dlaczego nasze doświadczenie pomaga firmom działać szybciej',
  frameworkTitle: 'Od wyzwania do wyniku: dlaczego nasze doświadczenie pomaga firmom działać szybciej',
  frameworkLead:
    'Dobre case study pokazuje nie tylko wynik, ale również to, dlaczego trasa wdrożenia była realistyczna właśnie dla tego pracodawcy.',
  routeLabel: 'Ścieżka',
  outcomeLabel: 'Wynik',
  framework: [
    {
      title: 'Wyraźne wyzwanie początkowe',
      text: 'Pokazujemy dokładnie, w jakim miejscu rekrutacja lokalna, sezonowość lub rotacja wywołały ryzyko operacyjne.',
    },
    {
      title: 'Transparentny model wdrożenia',
      text: 'Tłumaczymy, jak w jednym procesie połączono rekrutację, dokumenty, logistykę i wprowadzenie do pracy.',
    },
    {
      title: 'Wynik operacyjny',
      text: 'Przekładamy projekt na zrozumiały język biznesu: stabilność zmian, szybkość wdrożenia oraz przewidywalność na obiekcie.',
    },
  ],
  checklistTitle: 'Co musi zawierać każde kolejne case study',
  checklist: [
    'Opis roli i początkowego problemu kadrowego',
    'Logika kraju rekrutacji lub modelu poszukiwań',
    'Oś czasu od briefu do przyjazdu',
    'Kluczowe punkty dla dokumentów i logistyki',
    'Wynik dla biznesu i jasne wezwanie do działania (CTA)',
  ],
  ctaTitle: 'Chcesz uruchomić podobny model rekrutacji dla swojego zespołu?',
  ctaLead:
    'Opisz swoje braki kadrowe, a my przygotujemy plan rekrutacji, terminy uruchomienia i kolejne praktyczne kroki dla Twojego biznesu.',
}

plContent.industries = {
  title: 'Branże, w których międzynarodowa rekrutacja daje najsilniejszy efekt',
  lead:
    'Skupiamy się na sektorach, w których brak personelu liniowego i wysoka rotacja kadr najbardziej hamują rozwój biznesu.',
  description:
    'Międzynarodowa rekrutacja pracowników dla produkcji, budownictwa, magazynów, logistyki, hoteli i zespołów obsługi.',
  eyebrow: 'Branże',
  intro: '',
  sectorsTitle: 'Kluczowe obszary, w których model daje najszybsze efekty',
  sectorsLead: '',
  stats: [
    { value: '3', label: 'kluczowe sektory o najwyższym wpływie' },
    { value: '1+', label: 'rok kontraktu dla większości zespołów' },
    { value: '54%', label: 'potencjał redukcji kosztów personalnych' },
  ],
  sectors: [
    {
      title: 'Produkcja',
      colSpan: 2,
      text: 'Stabilne zespoły na linie montażowe, działy pakowania i centra sortowania.',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Pracownicy na produkcji',
      tags: ['Linie produkcyjne', 'Pakowanie', 'Sortowanie'],
      problem:
        'Ciągłe "dziury" w zmianach z powodu nieobecności pracowników lokalnych i rotacja na poziomie 30-50% rocznie.',
      solution:
        'Budujemy grupy pracowników przyjeżdżających na kontrakty od 1 roku. Gwarantuje to dyscyplinę pracy i brak konieczności cotygodniowego szkolenia nowych osób.',
      roles: ['Operatorzy linii', 'Pakowacze', 'Sortowacze', 'Pracownicy fizyczni'],
      points: [
        'Stabilizujemy frekwencję na zmianie bez ciągłego dorabiania rekrutacji',
        'Zdejmujemy presję z kierowników zmian i zespołu HR',
        'Zapewniamy przewidywalny rytm wprowadzania ludzi do pracy',
      ],
      cta: 'Otrzymaj wycenę dla produkcji',
    },
    {
      title: 'Budownictwo',
      colSpan: 1,
      text: 'Skalowanie obiektów bez obawy o brak rąk do pracy na rynku lokalnym.',
      image: '/images/industry-construction.jpg',
      alt: 'Pracownicy na placu budowy',
      tags: ['Montaż', 'Prace pomocnicze', 'Zespoły obiektowe'],
      problem:
        'Zrywanie terminów oddania obiektów z powodu niemożności szybkiego znalezienia 20-50 pomocników lub monterów w szczycie sezonu.',
      solution:
        'Organizujemy szybki przyjazd sformowanych brygad. Przejmujemy całą legalizację, by Wasi kierownicy budowy zajmowali się budową, a nie papierami.',
      roles: ['Pracownicy pomocniczy', 'Monterzy', 'Zbrojarze', 'Betoniarze'],
      points: [
        'Wzmacniamy aktywne obiekty bez zsuwania terminów',
        'Zdejmujemy ciężar administracyjny z kierowników budowy',
        'Działamy pod szczyty sezonowe i skalowanie brygad',
      ],
      cta: 'Otrzymaj wycenę dla budownictwa',
    },
    {
      title: 'Magazyny i logistyka',
      colSpan: 1,
      text: 'Elastyczność i wydajność dla operatorów 3PL oraz E-commerce.',
      image: '/images/industry-logistics.jpg',
      alt: 'Pracownicy w magazynie i logistyce',
      tags: ['Kompletacja', 'Sortowanie', 'Przemieszczanie towaru'],
      problem:
        'Brak przewidywalności podczas szczytów sezonowych oraz wysoki koszt "nocnych" zmian personelu lokalnego.',
      solution:
        'Otrzymujesz zespół przygotowany do intensywnej pracy zmianowej. Koszty personelu stają się przewidywalne i zryczałtowane.',
      roles: ['Pickerzy', 'Pakowacze', 'Tragarze', 'Operatorzy wózków widłowych'],
      points: [
        'Obsługujemy fale sezonowe i szybkie tempo zmian',
        'Gwarantujemy większą przewidywalność kosztów kadrowych',
        'Pomagamy planować starty zespołów bez chaosu',
      ],
      cta: 'Otrzymaj wycenę dla magazynu i logistyki',
    },
    {
      title: 'Hotele i usługi',
      colSpan: 2,
      text: 'Stabilne zespoły do sprzątania pokoi, pomocy kuchennej i codziennej obsługi hoteli.',
      image: '/images/industry-hospitality.jpg',
      alt: 'Personel w branży HoReCa i usługach',
      tags: ['Sprzątanie pokoi', 'Pomoc kuchenna', 'Operacje serwisowe'],
      problem:
        'Trudno utrzymać stabilny zespół obsługi w okresach szczytowego obciążenia, gdy lokalny personel szybko zmienia pracodawcę lub nie pojawia się na zmianach.',
      solution:
        'Wybieramy pracowników z perspektywą dłuższej pracy i budujemy legalną ścieżkę ich wejścia na obiekt, aby dział operacyjny nie funkcjonował w trybie nieustannego, awaryjnego rekrutowania.',
      roles: ['Pokojówki', 'Pracownicy kuchni', 'Personel obsługi', 'Uniwersalni asystenci'],
      points: [
        'Redukujemy chaos w codziennym planowaniu zmian',
        'Wzmacniamy hotele i obiekty usługowe podczas szczytów sezonu',
        'Zapewniamy przejrzystą i w pełni legalną ścieżkę zatrudnienia',
      ],
      cta: 'Otrzymaj wycenę dla hoteli i usług',
    },
  ],
  frameworkTitle: 'Dlaczego biznes wybiera pracowników z Azji i Afryki?',
  frameworkLead:
    'Nie jest to kwestia "tańszego zastępstwa", ale sprawa stabilności zespołu, motywacji i przewidywalnego długiego cyklu na obiekcie.',
  framework: [
    {
      title: 'Wysoka motywacja',
      text: 'Dla kandydatów z tych regionów praca w Europie to szansa na lepszą przyszłość, dlatego bardziej szanują swoje miejsce pracy i rzadko zmieniają firmę po jednym miesiącu.',
    },
    {
      title: 'Dyscyplina',
      text: 'W wielu krajach Azji kultura pracy opiera się na szacunku dla hierarchii, jasnych instrukcjach i stabilnym wykonywaniu powtarzalnych operacji.',
    },
    {
      title: 'Długofalowość',
      text: 'Pracownicy przyjeżdżają na wizy docelowe na długi czas, co rozwiązuje problem sezonowych zaginięć personelu i ciągłego restartowania rekrutacji.',
    },
  ],
  fitTitle: 'Kiedy z pewnością potrzebujesz międzynarodowej rekrutacji?',
  fitLead:
    'Jeśli rozpoznajesz swoją sytuację w tych sygnałach, rekrutacja lokalna z dużym prawdopodobieństwem przestała rozwiązywać problem systemowo.',
  fitSignals: [
    'Rotacja przekracza 20%: więcej czasu spędzasz na rozmowach kwalifikacyjnych niż na zarządzaniu produkcją.',
    'Przegrzany rynek lokalny: oczekiwania płacowe lokalnych kandydatów rosną, ale ich wydajność nie.',
    'Planowanie nowych obiektów lub linii: obawiasz się uruchomienia nowych mocy przerobowych, bo brakuje ludzi.',
    'Koszty rekrutacji rosną: lokalne agencje pobierają wysokie prowizje, a ludzie rezygnują po tygodniu.',
  ],
  ctaTitle: 'Potrzebujesz planu dla konkretnej branży?',
  ctaLead:
    'Napisz nam, jaka to branża, jaka wielkość zespołu i jakie są oczekiwane terminy, a my doradzimy, jaki model rekrutacji sprawdzi się najlepiej.',
  seoTitle: 'Międzynarodowa rekrutacja personelu dla produkcji, magazynów i budownictwa',
  seoText:
    'VW Recruit specjalizuje się w kompleksowym rozwiązywaniu problemów z brakami kadrowymi dla biznesu w Europie. Zapewniamy rekrutację personelu liniowego dla magazynów, fabryk i placów budowy, wykorzystując zasoby krajów z nadwyżką potencjału pracowniczego, w szczególności Filipin, Indii, Wietnamu oraz krajów afrykańskich. Nasz model obejmuje nie tylko samą rekrutację, ale także pełne wsparcie dokumentacyjne, logistykę i adaptację pracowników na obiekcie, co pozwala klientom zredukować operacyjne koszty personalne nawet o 54%.',
}

plContent.report = {
  title: 'Rynek Pracy 2026: Kiedy lokalna rekrutacja przestaje wyrabiać',
  lead:
    'Analityczny raport dla pracodawców, którzy chcą poznać realne koszty, terminy oraz niuanse prawne międzynarodowej rekrutacji.',
  description:
    'Pobierz raport dotyczący międzynarodowej rekrutacji pracowników, kosztów personelu, ryzyka prawnego i uruchomienia zespołu.',
  eyebrow: 'Raport',
  intro:
    'To nie jest kolejny PDF "dla zasady", ale treść, która zmienia zainteresowanie w rzeczową rozmowę o kosztach, terminach, legalności i gotowości firmy na rekrutację zagraniczną.',
  stats: [
    { value: '1', label: 'praktyczny raport analityczny' },
    { value: '5', label: 'kluczowych wniosków wewnątrz' },
    { value: '1', label: 'jasne wezwanie do działania' },
  ],
  pointsTitle: 'Co znajdziesz w raporcie',
  points: [
    'Logika porównywania kosztów: rekrutacja lokalna vs międzynarodowa',
    'Najczęstsze błędy prawne przy zatrudnianiu cudzoziemców',
    'Jak przygotować działanie operacyjne do onboardingu i adaptacji',
    'Co faktycznie wpływa na terminy – od briefu po pierwszą zmianę',
    'Jak odciążyć personel na stanowiskach operacyjnych i manualnych',
  ],
  benefitsTitle: 'Dlaczego biznes prosi o ten raport',
  benefitsLead:
    'Raport jest najbardziej przydatny wtedy, gdy firma odczuwa już znaczną presję kadrową i potrzebuje konkretnego modelu rozwiązania, a nie abstrakcyjnych informacji.',
  benefits: [
    {
      title: 'Szybsze wewnętrzne uzgodnienia',
      text: 'Pomaga właścicielom, działom operacyjnym i HR rozmawiać jednym językiem o faktycznym procesie rekrutacji.',
    },
    {
      title: 'Wyraźniejszy obraz kosztów',
      text: 'Pozwala na trzeźwą analizę rosnących wynagrodzeń, terminów uruchomień oraz ryzyka przerw ciągłości działania zespołu.',
    },
    {
      title: 'Lepsze przejście do kolejnego etapu',
      text: 'Zmienia status od "tylko sprawdzam" do rzeczowej konsultacji o konkretnych wymaganiach i ograniczeniach projektowych.',
    },
  ],
  trustTitle: 'Co sprawia, że ten raport jest naprawdę pomocny',
  trustLead:
    'Mocny materiał analityczny nie powinien być tylko ogólnym zbiorem tez HR. Musi stanowić bezpośrednią odpowiedź na problem biznesowy, który sprawia, że ktoś decyduje się wypełnić formularz.',
  trustPoints: [
    'Zbudowany wokół presji kadrowej w biznesie operacyjnym, a nie na teoretycznych rozważaniach',
    'Stworzony jako materiał bazowy do pierwszej konsultacji lub rozmowy sprzedażowej',
    'Praktyczny dla pracodawców sprawdzających, czy model pasuje do ich warunków, obiektu i grafiku',
  ],
  faqTitle: 'Pytania przed pobraniem',
  faq: [
    {
      q: 'Dla kogo jest ten raport?',
      a: 'Dla pracodawców z branży produkcyjnej, logistycznej, budowlanej, hotelarskiej i innych obszarów operacyjnych, gdzie odczuwalny jest brak rąk do pracy lub presja płacowa.',
    },
    {
      q: 'Czy to tylko kolejny ogólny plik PDF?',
      a: 'Nie. Ten raport ma pomóc podjąć realne decyzje kadrowe i stanowić fundament pod rzeczową dyskusję o modelu działania, terminach oraz ograniczeniach.',
    },
    {
      q: 'Co się dzieje po przesłaniu formularza?',
      a: 'Osoba zgłaszająca się otrzymuje link do PDF, a równocześnie staje się wykwalifikowanym leadem gotowym na dalsze konsultacje pod kątem potrzeb rekrutacyjnych.',
    },
  ],
  ctaTitle: 'Odbierz raport i zrozum swój kolejny krok kadrowy',
  ctaLead:
    'Zostaw nam swoje dane kontaktowe, a prześlemy PDF i pomożemy oszacować, czy model międzynarodowej rekrutacji pasuje do Twoich obecnych braków personelu.',
  formTitle: 'Odbierz raport',
  formLead:
    'Wypełnij krótki formularz, aby odebrać PDF i przejść do bardziej konkretnej rozmowy o kosztach kadrowych, terminach i przygotowaniu od strony prawnej.',
  formNote: 'Najbardziej przydatne dla pracodawców planujących rekrutację, uzupełnienie braków lub skalowanie zespołu.',
}
