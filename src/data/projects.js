export const projectsData = [
    {
        id: "crm-ai",
        title: "System CRM z AI",
        category: "Agentic Workflow",
        imgPlaceholder: "CRM",
        shortDesc: "Inteligentny system zarządzania relacjami z klientami wspierany przez agentów AI, eliminujący rutynę u handlowców.",
        details: {
            problem: "Zespół handlowy spędzał 15 godzin tygodniowo na przepisywaniu notatek ze spotkań do systemu CRM i ręcznym śledzeniu follow-upów. Dane były często niekompletne, co utrudniało precyzyjne prognozowanie sprzedaży.",
            solution: "Wdrożyliśmy asystenta opartego na Agentic Workflow (Make.com + OpenAI), który automatycznie transkrybuje spotkania przesyłane na zintegrowany serwer, ekstrahuje kluczowe dane (budżet, decydenci) i sam uzupełnia rekordy w CRM. Dodatkowo system proponuje treść maili po spotkaniu.",
            effects: "Zaoszczędzono 12 godzin pracy każdego handlowca w miesiącu. Kompletność danych w CRM wzrosła o 80%, a czas reakcji na zapytania ofertowe spadł z 2 dni do 4 godzin."
        }
    },
    {
        id: "auto-cal",
        title: "Automatyczny Kalendarz",
        category: "Automatyzacja",
        imgPlaceholder: "KAL",
        shortDesc: "Zrobotyzowany asystent planowania zmniejszający odsetek zapomnianych spotkań o 40%.",
        details: {
            problem: "Aż 30% umówionych spotkań B2B kończyło się 'no-show', co generowało ogromne straty czasu dla zespołu sprzedaży i konsultantów.",
            solution: "Zintegrowaliśmy Calendly, system e-mail i bramkę SMS. Wykorzystując automatyzację, stworzyliśmy system, który wysyła spersonalizowane przypomnienia z 24-godzinnym wyprzedzeniem (mailem i SMS-em) oraz automatycznie zarządza ewentualnym przełożeniem terminu na żądanie strony klienta bez ingerencji handlowca.",
            effects: "Wskaźnik no-show spadł z 30% do zaledwie 5%. Efektywność kalendarza spotkań osiągnęła historyczne maksimum, przekładając się na 15% wzrost domykalności leadów."
        }
    },
    {
        id: "med-app",
        title: "Aplikacja dla Gabinetu",
        category: "Web Apps",
        imgPlaceholder: "APP",
        shortDesc: "Dedykowana platforma do rejestracji pacjentów online 24/7 połączona z obiegiem dokumentacji elektronicznej.",
        details: {
            problem: "Placówka medyczna tonęła w papierowej dokumentacji, a po godzinach pracy gabinetu pacjenci nie mieli możliwości rezerwacji wizyt, co skutkowało odejściem potencjalnych klientów do konkurencji.",
            solution: "Zbudowaliśmy customową aplikację (React + Next.js), która pełni rolę portalu pacjenta. Oferuje wirtualny kalendarz integracyjny z systemem HIS gabinetu, zdalne wypełnianie ankiet medycznych oraz zintegrowane płatności online przed samą wizytą.",
            effects: "Gabinet zyskał pełną rezerwację online 24/7. Obciążenie recepcji rozmowami telefonicznymi spadło o 45%, a przychody w ciągu 3 miesięcy wzrosły dzięki lepszemu wykorzystaniu luk czasowych doradców."
        }
    },
    {
        id: "premium-site",
        title: "Wizytówka Premium",
        category: "Strony",
        imgPlaceholder: "WWW",
        shortDesc: "Wysokiej klasy strona wizerunkowa dla marki B2B stworzona pod kątem maksymalnej konwersji i zaufania.",
        details: {
            problem: "Istniejąca strona internetowa klienta nie budziła zaufania – była przestarzała technologicznie, wolno się ładowała i nie przekształcała ruchu w zapytania biznesowe (współczynnik odrzuceń na poziomie 78%).",
            solution: "Zaprojektowaliśmy zupełnie nowy system wizualny oparty o architekturę zorientowaną na lejek (Sales Funnel). Wykorzystaliśmy bezgłowy CMS i Next.js do wykreowania strony, która ładuje się błyskawicznie i na każdym kroku zachęca użytkownika przemyślanym Copywritingiem i dedykowaną podążającą nawigacją CTA.",
            effects: "Współczynnik odrzuceń (Bounce Rate) spadł z 78% do 31%. Konwersja na formularzu zapytań o ofertę B2B wzrosła trzykrotnie, dostarczając klientowi stabilne źródło leadów."
        }
    },
    {
        id: "b2b-panel",
        title: "Panel Klienta",
        category: "Web Apps",
        imgPlaceholder: "B2B",
        shortDesc: "Portal dla stałych partnerów agencji, agregujący faktury, pule godzin i raporty wyników w jednym pulpicie.",
        details: {
            problem: "Agencja spędzała miesięcznie kilkadziesiąt godzin na ręcznym wysyłaniu raportów wyników oraz aktualizowaniu swoich klientów w obszarze wypracowanych zysków i spędzonych godzin.",
            solution: "Zbudowaliśmy centralny Panel B2B (WebApp), do którego każdy stały klient agencji ma bezpieczny dostęp za pomocą swojego konta. System automatycznie zaciąga dane o czasie (Toggl), wynikach (Google Analytics/Meta) i fakturach, serwując te informacje na eleganckich, odświeżanych w czasie rzeczywistym dashboardach.",
            effects: "Klient poczuł transparentność i wgląd, którego zawsze brakowało (wzrost zaufania LTV o 25%). Praca wewnętrznych Account Managerów skupiła się na strategii, zamiast na formatowaniu tabel i wykresów w PDFach."
        }
    },
    {
        id: "voice-bot",
        title: "Bot Odpowiadający",
        category: "Agentic Workflow",
        imgPlaceholder: "BOT",
        shortDesc: "Inteligentny chatbot LLM, który przejmuje 80% pytań supportowych na chatach i zapytaniach mailowych.",
        details: {
            problem: "Dział wsparcia nie nadążał z powtarzającymi się pytaniami od użytkowników. Średni czas odpowiedzi na prostego maila wynosił 16 godzin, obniżając Net Promoter Score (NPS) usługodawcy.",
            solution: "Wytrenowaliśmy agenta AI (LLM) z wykorzystaniem bazy wiedzy firmy klienta (technologia RAG). Został osadzony na stronie oraz połączony poprzez API jako filtr pierwszego rzędu dla zapytań e-mail i komunikatów tekstowych.",
            effects: "Bot przejął poprawne obsłużenie 82% zapytań z dokładnością na poziomie najlepszego operatora, obcinając średni czas odpowiedzi do **4 sekund**. Satysfakcja obsługi klienta natychmiastowo poszybowała do wskaźnika 95+."
        }
    }
];
