---
paths:
  - "**/components/**"
  - "**/pages/**"
  - "**/routes/**"
  - "**/app/**"
  - "**/layouts/**"
  - "**/styles/**"
description: Zasady budowy komponentów — jednostki, layout model, kolejność (źródło danych: PNG + PROJECT_BRIEF.md, nie Figma)
---

# Budowa komponentów

Buduj desktop-first, ale z responsywnością od razu w każdym komponencie (nie odkładaj na później).

## Źródło prawdy

Wszystkie wartości (kolory, typografia, spacing, radius) pochodzą z `PROJECT_BRIEF.md`.
Layout, hierarchia wizualna i dokładny wygląd pochodzą z `visuals/{sekcja}.png` — porównuj przez `view`, tak jak wcześniej porównywałoby się ze zrzutem z Figmy.

**NIE WYMYŚLAJ**: animacji, hover-efektów, gradientów, cieni — chyba że widać je na PNG albo user o nie poprosi wprost. Proste, statyczne HTML/CSS zgodne z obrazem to poprawne domyślne rozwiązanie.

## Jednostki — system fluid scaling z em (KRYTYCZNE)

`<body>` font-size to `var(--size-font)`, skaluje się płynnie z viewportem. Konwertuj px z designu na em (1em = 16px przy idealnej szerokości projektu):

| px    | em      |
|-------|---------|
| 4px   | 0.25em  |
| 8px   | 0.5em   |
| 12px  | 0.75em  |
| 16px  | 1em     |
| 20px  | 1.25em  |
| 24px  | 1.5em   |
| 32px  | 2em     |
| 48px  | 3em     |
| 64px  | 4em     |
| 80px  | 5em     |

Dotyczy: font-size, padding, margin, gap, width, height, border-radius, max-width.

**letter-spacing**: zawsze w px, nigdy w em (em kompiluje się z font-size elementu i psuje odstępy w nagłówkach). Wyjątek: tekst dekoracyjny >10em font-size — wtedy em (podziel px przez font-size w px).

**line-height**: zawsze unitless ratio (line-height ÷ font-size), nigdy em ani px. Np. 56px/48px → `1.167`.

**Wyjątki na px**: 1px border, box-shadow, letter-spacing.

## Layout model (KRYTYCZNE) — dwuwarstwowy wzorzec

```
<section class="section-name">                                  ← pełna szerokość viewportu
  <!-- tło: kolor/obraz/gradient -->
  <div class="section-name__inner container container--padded"> ← fluid max-width, wyśrodkowany, padding
    <!-- treść -->
  </div>
</section>
```

- Outer wrapper: zawsze `width: 100%`, tło rozciąga się na pełną szerokość.
- Inner content: `max-width: var(--size-container)`, `margin-inline: auto`, `padding-inline: var(--container-padding)`.
- Karty w motywie inset-card: radius 28px, tło różniące się od sekcji nadrzędnej, zgodnie z `PROJECT_BRIEF.md`.
- Każda sekcja MUSI mieć padding — treść nigdy nie dotyka krawędzi kontenera.
- Brak podwójnego paddingu: jeśli kontener ma już `container--padded`, nie dodawaj paddingu na dzieciach.

## Kolejność budowy (bottom-up)

1. **Atoms** — przyciski, linki, ikony, badge'e, tagi
2. **Molecules** — karty, grupy formularzy, elementy nawigacji
3. **Organisms** — navbar, hero, sekcje, footer
4. **Pages** — złożenie organizmów w pełne strony

## Zasady komponentów

- Semantyczny HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Typowane propsy (TS interfaces / `defineProps<T>()` w zależności od frameworka)
- Jeden spójny sposób stylowania w całym projekcie (scoped style / CSS Modules / Tailwind — nie mieszaj)
- Obrazy: zawsze `alt`, `width`, `height`

## Spójność między sekcjami (KRYTYCZNE)

`global.css` ma już gotowe klasy motywu — **zawsze użyj ich zamiast pisać nowy layout od zera** dla każdej sekcji:

- `.section--light` / `.section--atmosphere` / `.section--dark` — wariant tła sekcji. Sprawdź w `PROJECT_BRIEF.md` tabelę sitemapy który wariant dotyczy budowanej sekcji.
- `.section-frame` — duży zaokrąglony kontener (28px radius) w tonie Atmosphere, jeśli sekcja ma "karty unoszące się" wewnątrz (jak Hero).
- `.card` — biała karta z cieniem i radius 28px. Baza dla KAŻDEJ karty w serwisie (produktowej, cennikowej, portfolio, FAQ-accordion).
- `.btn--primary` (limonkowa pigułka, czarny tekst) / `.btn--secondary` (ciemna pigułka, biały tekst) — nie twórz nowych stylów przycisków, rozszerzaj te klasy.

Jeśli sekcja wymaga wariantu, którego nie ma w `global.css` (np. nowy typ karty) — dodaj go tam jako nową klasę z tokenami (`var(--color-x)`), żeby kolejne sekcje mogły go reużyć, zamiast zamykać styl lokalnie w komponencie.

Patrz też **"Motywy kompozycyjne"** w `PROJECT_BRIEF.md` — opisuje wzorce (eyebrow-label nad kartą, karty jako podglądy produktu, pasek zaufania z logotypami) które powinny się powtarzać we wszystkich sekcjach, nie tylko w Hero.

## Typografia — wierność wagi fontu

Nie zakładaj domyślnie bold dla nagłówków — sprawdź PNG i wpis w `PROJECT_BRIEF.md`. Ustawiaj `font-weight` explicit, nigdy nie polegaj na domyślnym stylu przeglądarki.
