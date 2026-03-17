export const projects = [
  {
    slug: 'system-faktur-ai',
    title: 'System faktur AI',
    highlightWord: 'faktur',
    industry: 'Biuro rachunkowe',
    category: 'Oszczędność czasu',
    image: 'portfolio/faktury.jpg',
    intro: 'Biuro rachunkowe przepisywało faktury ręcznie ze skanów e-mail. Brak porządku, brak szybkiego dostępu i ryzyko zgubienia dokumentów.',
    result: { number: '−3h', label: 'DZIENNIE', descriptor: 'zaoszczędzonego czasu' },
    problem: {
      lead: 'Ręczne zarządzanie fakturami pochłaniało kilka godzin dziennie i generowało ryzyko błędów.',
      bullets: [
        'Faktury przychodziły jako skany e-mailem i były przepisywane ręcznie do systemu',
        'Brak centralnej bazy dokumentów — faktury gubione lub trudne do odnalezienia',
        'Zero automatycznych potwierdzeń — klient nie wiedział czy faktura dotarła'
      ]
    },
    solution: {
      description: 'System OCR + AI który wyciąga dane z faktury po zrobieniu zdjęcia, zapisuje do bazy i wysyła potwierdzenia automatycznie.',
      hasFlowDiagram: true,
      flowSteps: [
        'Zdjęcie faktury',
        'OCR — wyciąganie danych',
        'AI — weryfikacja i kategoryzacja',
        'Zapis do bazy danych',
        'Potwierdzenie e-mail'
      ]
    },
    results: [
      { number: '−3h', label: 'DZIENNIE', description: 'czasu odzyskanego przez zespół' },
      { number: '0', label: 'BŁĘDÓW', description: 'przy przepisywaniu danych' },
      { number: '<5s', label: 'CZAS ZAPISU', description: 'od zdjęcia do bazy danych' },
      { number: '100%', label: 'DOKUMENTÓW', description: 'dostępnych w bazie natychmiast' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · Biuro rachunkowe' },
    techStack: ['n8n', 'Claude (Anthropic)', 'OCR API', 'Google Sheets', 'Gmail API']
  },
  {
    slug: 'dashboard-zapasow',
    title: 'Dashboard zarządzania zapasami',
    highlightWord: 'zapasami',
    industry: 'Biuro / Handel',
    category: 'Narzędzia dla zespołu',
    image: 'portfolio/dashboard.jpg',
    intro: 'Biuro zarządzało zapasami w arkuszach Excel — nieefektywne, podatne na błędy, bez dostępu mobilnego dla zespołu.',
    result: { number: '−50%', label: 'CZAS OBSŁUGI', descriptor: 'zamówień biurowych' },
    problem: {
      lead: 'Excel jako system zarządzania zapasami generował błędy i blokował mobilność zespołu.',
      bullets: [
        'Arkusze Excel podatne na błędy przy każdej aktualizacji stanów',
        'Brak dostępu z telefonu — pracownicy przykuci do biurka',
        'Zero integracji z fakturomatem — każde zamówienie wymagało ręcznej obsługi'
      ]
    },
    solution: {
      description: 'Dedykowana aplikacja webowa dostępna z każdego urządzenia z logowaniem, zarządzaniem koszykiem i bezpośrednim dostępem do fakturomatu.',
      hasFlowDiagram: true,
      flowSteps: [
        'Logowanie do aplikacji',
        'Przegląd aktualnych zapasów',
        'Tworzenie koszyka zamówienia',
        'Zatwierdzenie zamówienia',
        'Automatyczne fakturowanie'
      ]
    },
    results: [
      { number: '−50%', label: 'CZAS OBSŁUGI', description: 'zamówień biurowych' },
      { number: '100%', label: 'MOBILNOŚĆ', description: 'dostęp z każdego urządzenia' },
      { number: '0', label: 'BŁĘDÓW', description: 'przy aktualizacji stanów magazynowych' },
      { number: '1 system', label: 'ZAMIAST', description: 'dziesiątek arkuszy Excel' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · Biuro / Handel' },
    techStack: ['React', 'Supabase', 'Next.js', 'Vercel']
  },
  {
    slug: 'rag-agent-firmowy',
    title: 'RAG Agent firmowy',
    highlightWord: 'Agent',
    industry: 'HR / Onboarding',
    category: 'Narzędzia dla zespołu',
    image: 'portfolio/rag-agent.jpg',
    intro: 'Nowi pracownicy gubili się w dokumentach i procedurach. Pytania do managera zaburzały jego pracę kilkanaście razy dziennie.',
    result: { number: '+4h', label: 'TYGODNIOWO', descriptor: 'odzyskane przez managera' },
    problem: {
      lead: 'Wiedza firmy była rozproszona — nowi pracownicy nie wiedzieli gdzie szukać odpowiedzi.',
      bullets: [
        'Manager przerywany kilkanaście razy dziennie przez pytania o procedury i dane',
        'Dokumenty rozproszone po folderach, mailach i głowach pracowników',
        'Onboarding nowych osób trwał tygodniami bo nikt nie wiedział co przekazać i kiedy'
      ]
    },
    solution: {
      description: 'Agent AI z dostępem do bazy wiedzy firmy — pracownicy pytają agenta zamiast managera.',
      hasFlowDiagram: true,
      flowSteps: [
        'Pytanie pracownika',
        'Agent przeszukuje bazę wiedzy',
        'RAG — dopasowanie kontekstu',
        'Generowanie odpowiedzi',
        'Odpowiedź + źródło dokumentu'
      ]
    },
    results: [
      { number: '+4h', label: 'TYGODNIOWO', description: 'odzyskane przez managera' },
      { number: '−80%', label: 'PYTAŃ', description: 'kierowanych bezpośrednio do managera' },
      { number: '<10s', label: 'ODPOWIEDŹ', description: 'na każde pytanie pracownika' },
      { number: '1 baza', label: 'WIEDZY', description: 'zamiast dziesiątek rozproszonych plików' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · HR / Onboarding' },
    techStack: ['Claude (Anthropic)', 'n8n', 'Supabase', 'RAG Pipeline', 'Google Drive API']
  },
  {
    slug: 'system-fast-lead',
    title: 'System Fast Lead',
    highlightWord: 'Fast',
    industry: 'Sprzedaż / Agencje',
    category: 'Oszczędność czasu',
    image: 'portfolio/fast-lead.jpg',
    intro: 'Firma traciła czas na rozmowy z klientami którzy nie pasowali do oferty — zły budżet, nieodpowiednia branża, brak gotowości do zakupu.',
    result: { number: '−100%', label: 'ZŁYCH LEADÓW', descriptor: 'wyeliminowanych automatycznie' },
    problem: {
      lead: 'Każda rozmowa sprzedażowa zaczynała się od zera — bez wiedzy czy klient w ogóle pasuje do oferty.',
      bullets: [
        'Czas tracony na rozmowy z klientami o złym budżecie lub nieodpowiedniej branży',
        'Brak wstępnej kwalifikacji — każdy lead traktowany tak samo',
        'Oferty przygotowywane ręcznie dla każdego zainteresowanego — nawet niedopasowanego'
      ]
    },
    solution: {
      description: 'Formularz kwalifikacyjny połączony z AI — klient uzupełnia dane, system ocenia dopasowanie i generuje spersonalizowaną ofertę oraz umawia rozmowę.',
      hasFlowDiagram: true,
      flowSteps: [
        'Formularz kwalifikacyjny',
        'AI ocenia dopasowanie',
        'Spersonalizowana oferta',
        'Zapis na spotkanie',
        'Brief dla właściciela przed rozmową'
      ]
    },
    results: [
      { number: '−100%', label: 'ZŁYCH LEADÓW', description: 'zero rozmów z niedopasowanymi klientami' },
      { number: '<5 min', label: 'OFERTA', description: 'generowana automatycznie' },
      { number: '100%', label: 'ROZMÓW', description: 'zaczyna się od gotowego briefu' },
      { number: '0', label: 'CZASU', description: 'straconego na wstępną kwalifikację' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · Sprzedaż / Agencje' },
    techStack: ['n8n', 'Claude (Anthropic)', 'Next.js', 'Google Sheets', 'Gmail API']
  },
  {
    slug: 'system-wyszukiwania-leadow',
    title: 'System wyszukiwania leadów AI',
    highlightWord: 'wyszukiwania',
    industry: 'Agencje / Sprzedaż B2B',
    category: 'Oszczędność czasu',
    image: 'portfolio/lead-search.jpg',
    intro: 'Szukanie odpowiednich klientów ręcznie to jedna z najbardziej czasochłonnych czynności w sprzedaży B2B — godziny analizy, zero gwarancji dopasowania.',
    result: { number: '10 leadów', label: 'W 60 SEKUND', descriptor: 'z pełną analizą i ofertą' },
    problem: {
      lead: 'Ręczne wyszukiwanie i analiza leadów pochłaniały godziny pracy bez gwarancji że lead jest w ogóle dopasowany.',
      bullets: [
        'Godziny spędzone na przeglądaniu Google Maps, LinkedIn czy Facebooka',
        'Ręczna analiza każdej firmy — strona, social media, oceny, branża',
        'Brak czasu na personalizację oferty bo samo znalezienie leada zajmuje za długo'
      ]
    },
    solution: {
      description: 'Aplikacja zbudowana w Claude Code która przyjmuje wytyczne i automatycznie wyszukuje, kwalifikuje i analizuje firmy — generując gotową spersonalizowaną ofertę dla każdego leada.',
      hasFlowDiagram: true,
      flowSteps: [
        'Wytyczne (branża, ocena, ilość)',
        'Wyszukiwanie firm',
        'Analiza strony i social mediów',
        'Kwalifikacja leada',
        'Generowanie spersonalizowanej oferty',
        'Gotowa lista z rekomendacjami'
      ]
    },
    results: [
      { number: '10 leadów', label: 'W 60 SEKUND', description: 'z pełną analizą i ofertą' },
      { number: '−95%', label: 'CZASU', description: 'potrzebnego na ręczne wyszukiwanie' },
      { number: '100%', label: 'LEADÓW', description: 'z gotową spersonalizowaną ofertą' },
      { number: '0', label: 'GODZIN', description: 'spędzonych na ręcznej analizie' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · Agencje / Sprzedaż B2B' },
    techStack: ['Claude Code', 'Claude API', 'Google Maps API', 'n8n', 'Firecrawl']
  },
  {
    slug: 'system-intencji-online',
    title: 'System intencji online',
    highlightWord: 'intencji',
    industry: 'Organizacje / Instytucje',
    category: 'Narzędzia dla zespołu',
    image: 'portfolio/intencje.jpg',
    intro: 'Parafia przyjmowała intencje mszalne wyłącznie stacjonarnie — długie kolejki, brak dostępności i trudności dla osób starszych lub mieszkających daleko.',
    result: { number: '24/7', label: 'OBSŁUGA', descriptor: 'przyjmowania intencji' },
    problem: {
      lead: 'Obsługa wyłącznie stacjonarna generowała kolejki i wykluczała osoby które nie mogły osobiście przyjść.',
      bullets: [
        'Długie kolejki w godzinach przyjęć — frustracja wiernych i pracowników kancelarii',
        'Brak dostępności dla osób starszych i mieszkających daleko',
        'Ręczne zapisywanie intencji — ryzyko błędów i zgubionych zgłoszeń'
      ]
    },
    solution: {
      description: 'Platforma online do składania intencji z dedykowanym panelem administracyjnym zaprojektowanym tak by mogły z niego korzystać osoby bez doświadczenia technicznego.',
      hasFlowDiagram: true,
      flowSteps: [
        'Zgłoszenie online',
        'Weryfikacja danych',
        'Zapis do systemu',
        'Powiadomienie kancelarii',
        'Potwierdzenie dla składającego',
        'Panel administracyjny'
      ]
    },
    results: [
      { number: '24/7', label: 'DOSTĘPNOŚĆ', description: 'przyjmowania intencji' },
      { number: '0', label: 'KOLEJEK', description: 'w godzinach przyjęć' },
      { number: '100%', label: 'ZGŁOSZEŃ', description: 'zapisanych bez błędów' },
      { number: '<2 min', label: 'CZAS', description: 'złożenia intencji online' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · Organizacje / Instytucje' },
    techStack: ['Next.js', 'React', 'Supabase', 'Vercel', 'Google Sheets']
  },
  {
    slug: 'chatbot-strona',
    title: 'Chatbot i strona firmowa',
    highlightWord: 'strona',
    industry: 'Usługi lokalne',
    category: 'Strony WWW',
    image: 'portfolio/chatbot.jpg',
    intro: 'Firma nie miała strony internetowej — brak widoczności, brak możliwości kontaktu i zapoznania się z ofertą poza godzinami pracy.',
    result: { number: '7dni', label: 'DO ZAPYTAŃ', descriptor: 'od uruchomienia strony' },
    problem: {
      lead: 'Brak obecności online oznaczał brak klientów poza bezpośrednim poleceniem.',
      bullets: [
        'Zero widoczności w Google — klienci nie mogli znaleźć firmy online',
        'Brak możliwości kontaktu poza godzinami pracy — zapytania traciły się w czasie',
        'Konkurencja z obecnością online wyglądała bardziej profesjonalnie i pozyskiwała więcej klientów'
      ]
    },
    solution: {
      description: 'Nowoczesna strona z animacjami + chatbot AI z bazą wiedzy o firmie, obsługą FAQ i możliwością umówienia spotkania przez klienta.',
      hasFlowDiagram: false,
      features: [
        'Strona firmowa z sekcjami oferty, portfolio i kontaktu',
        'Chatbot AI z bazą wiedzy odpowiadający na pytania 24/7',
        'Formularz zapisu na konsultację zintegrowany z kalendarzem',
        'Optymalizacja SEO i szybkość ładowania pod Google'
      ]
    },
    results: [
      { number: '7dni', label: 'DO ZAPYTAŃ', description: 'od uruchomienia strony' },
      { number: '24/7', label: 'DOSTĘPNOŚĆ', description: 'chatbot obsługuje klientów non-stop' },
      { number: '100%', label: 'PYTAŃ', description: 'obsłużonych bez angażowania właściciela' },
      { number: '0', label: 'STRACONYCH', description: 'zapytań poza godzinami pracy' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · Usługi lokalne' },
    techStack: ['React', 'Next.js', 'Claude (Anthropic)', 'Tailwind CSS', 'Vercel', 'Google Search Console']
  },
  {
    slug: 'audyt-ai-roadmapa',
    title: 'Audyt AI + Roadmapa',
    highlightWord: 'Audyt',
    industry: 'Usługi B2B',
    category: 'Audyty',
    image: 'portfolio/audyt.jpg',
    intro: 'Właściciel firmy słyszał o AI ale nie wiedział co wdrożyć, w jakiej kolejności i czy w ogóle się opłaca.',
    result: { number: '1 tydzień', label: 'DO PIERWSZYCH WYNIKÓW', descriptor: 'od wdrożenia' },
    problem: {
      lead: 'Firma nie wiedziała od czego zacząć z AI — czas i budżet przepalany na złe rzeczy',
      bullets: [
        'Brak wiedzy które procesy mają sens do automatyzacji a które nie',
        'Ryzyko przepalenia budżetu na narzędzia które nie pasują do firmy',
        'Chaos informacyjny — za dużo opcji, za mało konkretnych odpowiedzi'
      ]
    },
    solution: {
      description: 'Szczegółowy audyt procesów firmy + natychmiastowe wdrożenie pierwszych narzędzi które działają od zaraz.',
      hasFlowDiagram: true,
      flowSteps: [
        'Wywiad z właścicielem i zespołem',
        'Mapowanie procesów operacyjnych',
        'Identyfikacja quick wins',
        'Wdrożenie NotebookLM jako bazy wiedzy firmy',
        'Przygotowanie dokumentów dla klientów i nowych pracowników',
        'Roadmapa na 6 miesięcy z priorytetami i kosztami'
      ]
    },
    results: [
      { number: '1 tydzień', label: 'DO WDROŻENIA', description: 'pierwszych działających narzędzi' },
      { number: '3–5', label: 'QUICK WINS', description: 'zidentyfikowanych w każdej firmie' },
      { number: '100%', label: 'JASNOŚĆ', description: 'co wdrożyć, w jakiej kolejności i za ile' },
      { number: '0 zł', label: 'PRZEPALONYCH', description: 'na narzędzia które nie pasują' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · Usługi B2B' },
    techStack: ['NotebookLM', 'Claude (Anthropic)', 'Google Workspace', 'n8n']
  },
  {
    slug: 'filarai-strona-fast-lead',
    title: 'Strona FilarAI + System Fast Lead',
    highlightWord: 'Strona',
    industry: 'Agencja AI / Usługi B2B',
    category: 'Strony WWW',
    image: 'portfolio/filarai-web.jpg',
    intro: 'Firma potrzebowała strony która nie tylko wygląda profesjonalnie — ale aktywnie przedstawia ofertę, buduje zaufanie i filtruje klientów zanim właściciel podniesie słuchawkę.',
    result: { number: '24/7', label: 'DLA KLIENTÓW', descriptor: 'dostępność kwalifikacji' },
    problem: {
      lead: 'Bez strony firma była niewidoczna. Każde zapytanie wymagało pełnej rozmowy od zera — bez wiedzy czy klient pasuje do oferty.',
      bullets: [
        'Brak obecności online — potencjalni klienci nie mogli zweryfikować firmy przed kontaktem',
        'Każda rozmowa zaczynała się od podstaw — branża, budżet, problem',
        'Zero kwalifikacji przed spotkaniem — czas tracony na niedopasowanych klientów'
      ]
    },
    solution: {
      description: 'Nowoczesna strona w Next.js z wbudowanym formularzem Fast Lead — strona jest częścią funnela sprzedażowego, nie tylko wizytówką.',
      hasFlowDiagram: true,
      flowSteps: [
        'Klient trafia na stronę',
        'Przegląda ofertę i portfolio firmy',
        'Wypełnia formularz kwalifikacyjny',
        'AI ocenia dopasowanie klienta',
        'Właściciel dostaje gotowy brief przed rozmową',
        'Spotkanie zaczyna się od konkretu'
      ]
    },
    results: [
      { number: '24/7', label: 'DOSTĘPNOŚĆ', description: 'strona pracuje bez przerwy' },
      { number: '<2 min', label: 'KWALIFIKACJA', description: 'klienta przed rozmową' },
      { number: '100%', label: 'ROZMÓW', description: 'zaczyna się od gotowego briefu' },
      { number: '0', label: 'CZASU', description: 'straconego na niedopasowanych klientów' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · Agencja AI / Usługi B2B' },
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'n8n', 'Claude (Anthropic)', 'Vercel']
  },
  {
    slug: 'strona-firmowa-chatbot',
    title: 'Strona firmowa + Chatbot AI',
    highlightWord: 'Chatbot',
    industry: 'Usługi / Handel',
    category: 'Strony WWW',
    image: 'portfolio/handel-web.jpg',
    intro: 'Firma działała wyłącznie przez polecenia i telefon. Nikt nie mógł sprawdzić oferty online, zapytać o cenę ani umówić się poza godzinami pracy.',
    result: { number: '7 dni', label: 'URUCHOMIENIE', descriptor: 'do pierwszych zapytań' },
    problem: {
      lead: 'Brak strony oznaczał brak wiarygodności i brak dostępności — klienci odchodzili do konkurencji którą mogli sprawdzić online.',
      bullets: [
        'Firma niewidoczna w sieci — zero możliwości weryfikacji przed kontaktem',
        'Obsługa klienta tylko w godzinach pracy — zapytania poza nimi przepadały',
        'Brak miejsca gdzie klient może samodzielnie poznać ofertę i umówić spotkanie'
      ]
    },
    solution: {
      description: 'Nowoczesna strona firmowa z wbudowanym chatbotem AI który zna ofertę firmy i obsługuje klientów o każdej porze.',
      hasFlowDiagram: true,
      flowSteps: [
        'Klient trafia na stronę',
        'Przegląda ofertę i realizacje',
        'Zadaje pytanie chatbotowi',
        'Chatbot odpowiada z bazy wiedzy firmy',
        'Klient umawia spotkanie przez chat',
        'Właściciel dostaje powiadomienie z podsumowaniem'
      ]
    },
    results: [
      { number: '7 dni', label: 'DO ZAPYTAŃ', description: 'od uruchomienia strony' },
      { number: '24/7', label: 'DOSTĘPNOŚĆ', description: 'chatbot obsługuje klientów non-stop' },
      { number: '100%', label: 'PYTAŃ', description: 'obsłużonych bez angażowania właściciela' },
      { number: '0', label: 'PRZEPADŁYCH', description: 'zapytań poza godzinami pracy' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · Usługi / Handel' },
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Claude (Anthropic)', 'n8n', 'Vercel']
  }
];
