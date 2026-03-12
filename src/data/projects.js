export const projects = [
  {
    slug: 'faktury-ai',
    title: 'System faktur AI',
    highlightWord: 'faktur',
    industry: 'Biuro rachunkowe',
    category: 'Automatyzacje',
    image: 'portfolio/faktury.jpg',
    intro: 'Klient zapisywał faktury ręcznie wysyłając skany e-mailem. Brak porządku, brak szybkiego dostępu, ryzyko zgubienia dokumentów.',
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
      description: 'System OCR + AI który wyciąga dane z faktury po zrobieniu zdjęcia, zapisuje je do bazy danych, wysyła potwierdzenia i umożliwia szybkie tworzenie nowych faktur.',
      hasFlowDiagram: true,
      flowSteps: ['Zdjęcie faktury', 'OCR — wyciąganie danych', 'AI — weryfikacja i kategoryzacja', 'Zapis do bazy danych', 'Potwierdzenie e-mail']
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
    title: 'Dashboard zapasów',
    highlightWord: 'zapasów',
    industry: 'Zarządzanie',
    category: 'Aplikacje AI',
    image: 'portfolio/dashboard.jpg',
    intro: 'Biuro zarządzało zapasami w arkuszu Excel — nieefektywne, podatne na błędy, brak dostępu mobilnego.',
    result: { number: '−50%', label: 'CZAS OBSŁUGI', descriptor: 'zamówień biurowych' },
    problem: {
      lead: 'Excel jako system zarządzania zapasami generował błędy i uniemożliwiał pracę zdalną.',
      bullets: [
        'Arkusz Excel edytowany przez wiele osób jednocześnie — konflikty i błędy danych',
        'Brak dostępu mobilnego — zamówienia możliwe tylko przy komputerze',
        'Ręczne tworzenie zamówień i faktur zajmowało nieproporcjonalnie dużo czasu'
      ]
    },
    solution: {
      description: 'Dedykowana aplikacja webowa z logowaniem i autoryzacją. Umożliwia przeglądanie zapasów, szybkie tworzenie koszyków i zamówień oraz bezpośredni dostęp do fakturomatu.',
      hasFlowDiagram: false,
      features: [
        'Panel zarządzania z logowaniem i rolami użytkowników',
        'Podgląd zapasów w czasie rzeczywistym z dowolnego urządzenia',
        'Koszyk zamówień i automatyczne generowanie faktur',
        'Historia zamówień i eksport danych'
      ]
    },
    results: [
      { number: '−50%', label: 'CZAS OBSŁUGI', description: 'zamówień biurowych' },
      { number: '100%', label: 'DOSTĘPNOŚĆ', description: 'z dowolnego urządzenia' },
      { number: '0', label: 'KONFLIKTÓW', description: 'w danych między użytkownikami' },
      { number: '<1min', label: 'ZAMÓWIENIE', description: 'od wyboru do faktury' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · Zarządzanie' },
    techStack: ['React', 'Next.js', 'Supabase', 'Tailwind CSS', 'Vercel']
  },
  {
    slug: 'rag-agent',
    title: 'RAG Agent firmowy',
    highlightWord: 'Agent',
    industry: 'HR / Onboarding',
    category: 'Aplikacje AI',
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
      description: 'Agent AI z dostępem do bazy wiedzy firmy — procedury, FAQ, cenniki, dane klientów. Pracownicy pytają agenta zamiast managera.',
      hasFlowDiagram: true,
      flowSteps: ['Pytanie pracownika', 'Agent przeszukuje bazę wiedzy', 'RAG — dopasowanie kontekstu', 'Generowanie odpowiedzi', 'Odpowiedź + źródło dokumentu']
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
    slug: 'fast-lead',
    title: 'System Fast Lead',
    highlightWord: 'Fast',
    industry: 'Sprzedaż B2B',
    category: 'Automatyzacje',
    image: 'portfolio/fast-lead.jpg',
    intro: 'Firma traciła czas na rozmowy z klientami którzy nie pasowali do oferty — zły budżet, nieodpowiednia branża.',
    result: { number: '−100%', label: 'ZŁYCH LEADÓW', descriptor: 'wyeliminowanych automatycznie' },
    problem: {
      lead: 'Zespół sprzedaży spędzał godziny na rozmowach z klientami którzy nigdy nie mieli kupić.',
      bullets: [
        'Brak kwalifikacji leadów — każde zapytanie trafiało od razu do sprzedawcy',
        'Rozmowy z klientami bez budżetu lub spoza grupy docelowej zajmowały większość dnia',
        'Oferty tworzone ręcznie dla każdego klienta — nawet tych którzy nie pasowali'
      ]
    },
    solution: {
      description: 'Formularz kwalifikacyjny połączony z AI: klient uzupełnia dane → system ocenia dopasowanie → jeśli pasuje generuje spersonalizowaną ofertę i umawia rozmowę.',
      hasFlowDiagram: true,
      flowSteps: ['Formularz klienta', 'AI — ocena dopasowania', 'Decyzja: pasuje / nie pasuje', 'Generowanie spersonalizowanej oferty', 'Automatyczne umówienie spotkania']
    },
    results: [
      { number: '−100%', label: 'ZŁYCH LEADÓW', description: 'wyeliminowanych przed rozmową' },
      { number: '<5min', label: 'OFERTA', description: 'generowana automatycznie' },
      { number: '+60%', label: 'KONWERSJA', description: 'rozmów w zamknięte projekty' },
      { number: '24/7', label: 'KWALIFIKACJA', description: 'działa bez udziału człowieka' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · Sprzedaż B2B' },
    techStack: ['n8n', 'Claude (Anthropic)', 'GPT-4', 'Gmail API', 'Google Calendar API']
  },
  {
    slug: 'intencje-online',
    title: 'System intencji online',
    highlightWord: 'intencji',
    industry: 'Sektor publiczny',
    category: 'Aplikacje AI',
    image: 'portfolio/intencje.jpg',
    intro: 'Parafia przyjmowała intencje mszalne wyłącznie stacjonarnie — długie kolejki, brak dostępności, trudności dla osób starszych.',
    result: { number: '24/7', label: 'DOSTĘPNOŚĆ', descriptor: 'bez potrzeby obecności' },
    problem: {
      lead: 'Obsługa intencji wymagała fizycznej obecności w kancelarii w określonych godzinach.',
      bullets: [
        'Kolejki w kancelarii szczególnie przed świętami — frustracja wiernych',
        'Osoby starsze i niepełnosprawne miały trudności z dotarciem w godzinach otwarcia',
        'Ręczne zapisywanie intencji w zeszytach — ryzyko błędów i brak szybkiego dostępu'
      ]
    },
    solution: {
      description: 'Platforma online do składania intencji z dedykowanym panelem administracyjnym dla kancelarii — zaprojektowanym tak by mogły z niego korzystać osoby bez doświadczenia technicznego.',
      hasFlowDiagram: false,
      features: [
        'Formularz online dostępny 24/7 z dowolnego urządzenia',
        'Panel kancelarii z przejrzystym kalendarzem intencji',
        'Automatyczne potwierdzenia e-mail dla składających intencje',
        'Prosty interfejs zaprojektowany dla osób bez doświadczenia technicznego'
      ]
    },
    results: [
      { number: '24/7', label: 'DOSTĘPNOŚĆ', description: 'bez potrzeby obecności w biurze' },
      { number: '−90%', label: 'KOLEJKI', description: 'w kancelarii przy składaniu intencji' },
      { number: '0', label: 'BŁĘDÓW', description: 'w zapisach dzięki walidacji formularza' },
      { number: '100%', label: 'POTWIERDZEŃ', description: 'automatycznych dla każdej intencji' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · Sektor publiczny' },
    techStack: ['React', 'Next.js', 'Supabase', 'Gmail API', 'Vercel']
  },
  {
    slug: 'chatbot-strona',
    title: 'Chatbot i strona firmowa',
    highlightWord: 'strona',
    industry: 'Usługi lokalne',
    category: 'Strony internetowe',
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
      { number: '7dni', label: 'DO ZAPYTAŃ', description: 'pierwsze kontakty od klientów' },
      { number: '24/7', label: 'CHATBOT', description: 'obsługuje klientów bez przerwy' },
      { number: '+100%', label: 'WIDOCZNOŚĆ', description: 'w Google w ciągu miesiąca' },
      { number: '0zł', label: 'REKLAMY', description: 'pierwsze zapytania organicznie' }
    ],
    testimonial: { quote: '[Placeholder — opinia klienta]', author: 'Klient · Usługi lokalne' },
    techStack: ['React', 'Next.js', 'Claude (Anthropic)', 'Tailwind CSS', 'Vercel', 'Google Search Console']
  }
];
