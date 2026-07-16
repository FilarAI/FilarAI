# PROJECT_BRIEF.md — FilarAI Website

> Źródło prawdy dla wszystkich sekcji. Przeczytaj to PRZED każdą komendą `/build-section`.
> Wszystkie wartości poniżej żyją też jako zmienne CSS w `global.css` — nigdy nie hardkoduj hex/px w komponencie, zawsze `var(--nazwa)`.

## Sitemap (cel każdej strony)

| Strona | Cel |
|---|---|
| Główna | Przedstawienie się, pokazanie co robimy (4 ścieżki), dla kogo |
| Oferta | Dokładne wytłumaczenie 4 ścieżek: co robimy, jak, dla kogo, jak pomaga |
| Portfolio | Pokazanie wykonanych i działających realizacji/systemów |
| Kontakt | Wszystkie informacje i kanały potrzebne do kontaktu |

## Struktura strony głównej (10 sekcji, stopka wliczona jako część sekcji 10)

Nazwy plików w `visuals/` powinny odpowiadać numeracji poniżej (np. `1-hero.png`, `2-pasek-liczb.png`...).

| # | Sekcja | Tło | Opis |
|---|---|---|---|
| 1 | Hero | Jasne | Mocny nagłówek + krótki opis kim jesteś i co robisz. Hak, nie wykład. |
| 2 | Pasek liczb | **Ciemne** | 7 dni do działającej strony / <24h czas odpowiedzi / X wdrożonych systemów / (opcjonalnie 4. liczba) |
| 3 | Podział na 4 ścieżki | Jasne | Strony WWW / Systemy AI i konsultacje / SEO&GEO / Meta Ads (zapowiedź) — krótki opis + CTA do Oferty na każdą |
| 4 | Demo animacja systemu | **Ciemne** | Pokazanie systemu AI w akcji |
| 5 | Jak wygląda współpraca | Jasne | Proces w 3-4 krokach: Rozmowa → Wycena/plan → Realizacja → Wdrożenie i wsparcie |
| 6 | Cennik | Jasne | Skrócona wersja / orientacyjne widełki + link do pełnego cennika na Ofercie |
| 7 | Portfolio (skrócone) | Jasne | 3-4 przykłady + link "zobacz więcej realizacji" → /portfolio |
| 8 | O Tobie / o FilarAI | Jasne | 2-3 akapity — kim jesteś, czemu warto z Tobą pracować |
| 9 | FAQ | Jasne | Realne obiekcje z rozmów (cena, czas realizacji, branża, co po umowie) |
| 10 | Finalne CTA + Stopka | **Ciemne** | Telefon / WhatsApp / mail, bez formularza |

**Zasada jasne/ciemne**: sekcja jasna = `.section--light` lub `.section--atmosphere` (tło `--color-canvas` / `--color-atmosphere`, tekst `--color-contrast` / `--color-text-secondary`). Sekcja ciemna = `.section--dark` (tło `--color-atmosphere-dark`, tekst `--color-text-on-dark`). Klasy gotowe w `global.css`.

## System kolorów (4 role — źródło: ustalenia FilarAI)

| Rola | Zmienna CSS | Wartość | Użycie |
|---|---|---|---|
| 1. Canvas | `--color-canvas` | `#FFFFFF` | Neutralna biała baza — hero, karty, tekst. "Room to breathe", nie przyciąga uwagi. |
| 2. Atmosphere | `--color-atmosphere` | `#F1F1EF` | Ciepławy jasny szary — oddziela sekcje/karty od bieli, daje głębię bez drugiej barwy. |
| 2b. Atmosphere-dark | `--color-atmosphere-dark` | `#0A0A0A` (alt `#1A1A18`) | Świadomy kontrast-blok dla wybranych sekcji (Pasek liczb, Demo, Stopka) — punktowy wyjątek, nie zmienia głównego systemu. |
| 3. Accent | `--color-accent` | `#D6FD70` | Przyciski, ikony, highlighty — JEDEN mały element w rzędzie kart. Używany oszczędnie, nigdy jako tło całej sekcji. |
| 3b. Accent-text | `--color-accent-text` | `#65A30D` | Wariant do tekstu/linków na jasnym tle (czyste `#D6FD70` jako tekst ginie na bieli). |
| 4. Contrast | `--color-contrast` | `#0A0A0A` | Nagłówki, kluczowy tekst, secondary buttony na jasnym tle. Kontrast = czytelność/hierarchia, nie dekoracja. |

**Do potwierdzenia** (zmierzone przybliżenie z `visuals/1-hero.png`, nie z oficjalnej specyfikacji):
- Przycisk "Umów rozmowę" w zrzucie mierzy się jako bardziej nasycona limonka (~`#A9E405`), nie czyste `#D6FD70`. Zdecyduj czy to świadomy osobny token (`--color-accent-button`) czy `#D6FD70` ma zostać jako jedyny odcień accent.
- Tekst pomocniczy (opis pod H1, pasek logotypów) w zrzucie wygląda na ciemny szaro-granat, nie czysty szary — w `global.css` wpisane jako przybliżenie `--color-text-secondary: #3D3D46` i `--color-text-muted: #6B6E76`. Podmień jeśli masz dokładne wartości z pliku źródłowego.

## Typografia

- Nagłówki (H1–H3): **Geist**, waga 500–600, sentence case (nie ALL CAPS domyślnie — caps tylko do akcentów/labelek/tagów)
- Body / opisy / FAQ: **Inter** 400
- Przyciski, bullet, małe labelki: **Inter** 500
- Maksymalnie te dwa fonty w całym serwisie — żadnych dodatkowych krojów

Import (już w `global.css`, dodaj też w root layout):
```css
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
```

## Border radius — inset-card motif

- **28px** (`--radius-lg`) — główny motyw kart FilarAI (widoczny w Hero: karty "Strony WWW", "Systemy AI", "SEO & GEO", "Meta Ads", oraz cały duży kontener Hero)
- 16px (`--radius-md`) — mniejsze elementy wewnątrz kart
- 8px (`--radius-sm`) — badge, małe tagi (np. "wkrótce", "↑87%")
- Pigułka (`--radius-pill`) — wszystkie przyciski CTA

## Motywy kompozycyjne (jak w Hero — powtarzaj we WSZYSTKICH sekcjach)

To jest to, co faktycznie spina sekcje wizualnie w jedną całość — nie tylko kolory:

1. **Duży zaokrąglony kontener sekcji** (`.section-frame` w global.css) w tonie Atmosphere, wewnątrz którego "unoszą się" mniejsze białe karty (`.card`) — widoczne w Hero jako 4 karty w rogach wokół centralnej treści.
2. **Karta z eyebrow-labelem nad nią** — mały, zwykły (nie caps) label tekstowy nad kartą (np. "Strony WWW", "Systemy AI"), nie wewnątrz karty.
3. **Karty jako "podglądy produktu"** — mockup przeglądarki, dymek czatu WhatsApp, wykres, badge kampanii — każda karta pokazuje realny fragment usługi, nie abstrakcyjną ikonę.
4. **Przycisk primary = pigułka limonkowa z czarnym tekstem**, zawsze z strzałką `→` jeśli to CTA prowadzące dalej.
5. **Pasek zaufania** (logotypy klientów) — szare, zdesaturowane logo w rzędzie, poprzedzone małym labelem "Zaufali mi:".
6. **Sekcje ciemne** (2, 4, 10) odwracają hierarchię: tło Contrast, tekst Canvas — używaj tych samych komponentów (karty, przyciski) ale w wariancie `.section--dark`.
7. **Zero ozdobników bez funkcji** — brak gradientów, brak dekoracyjnych kształtów które nie niosą informacji. Design jest techniczny/monochromatyczny, zgodny z czarno-białym logo.

## Grupa docelowa i ton (KRYTYCZNE dla copy i doboru wizualnych akcentów)

**Kim jest**: właściciel małej/średniej firmy usługowej lub produkcyjnej (30–55 lat), prowadzi realny biznes, niekoniecznie techniczny. NIE jest founderem startupu ani twórcą budującym markę osobistą.

**Czego szuka**: praktycznego rozwiązania konkretnego problemu (więcej leadów, mniej ręcznej roboty, lepsza strona) — nie "transformacji" ani "inspiracji". Chce wiedzieć: czy zadziała, ile kosztuje, ile czasu zaoszczędzi, czy może zaufać.

**Co przekonuje**: dowody (case studies, liczby, konkretne przykłady), jasność procesu, brak żargonu, poczucie kompetencji i solidności.

**Co odstrasza**: hype, żargon typu "unlock your potential", estetyka twórcy/influencera, poczucie że sprzedaje mu się styl życia zamiast usługi.

**Pozycjonowanie — brak marki osobistej (ważne, do nadrobienia inaczej niż konkurencja typu "Merydian")**: Ty nie budujesz marki osobistej (twarz, "watch the breakdown", storytelling founder-influencera). Pozycjonujesz się jako **zaufany wykonawca dla firmy**, nie jako guru/mentor. W praktyce oznacza to:
- Copy mówi o kliencie i efekcie, nie o "swojej podróży" czy "misji"
- Dowody = case studies/logotypy/liczby (sekcje 2, 6, 7), NIE osobista narracja
- Sekcja "O Tobie" (#8) — 2-3 rzeczowe akapity o kompetencji i sposobie pracy, bez tonu autobiograficznego/inspiracyjnego
- Wizualnie: brak zdjęć "lifestyle", brak cytatów motywacyjnych — priorytet dla realnych zrzutów produktu (jak w Hero: mockup strony, czat, wykres)

## Breakpointy

- Desktop: 992px+
- Tablet: 768–991px
- Mobile landscape: 480–767px
- Mobile portrait: 320–479px
