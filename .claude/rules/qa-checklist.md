---
paths:
  - "**/components/**"
  - "**/pages/**"
  - "**/routes/**"
  - "**/app/**"
  - "**/layouts/**"
description: QA checklist po zbudowaniu sekcji — źródło prawdy to visuals/*.png, nie Figma
---

# QA sekcji

Po zbudowaniu sekcji uruchom ten checklist. Napraw błędy od razu, nie przechodź dalej z niezaliczonym punktem.

## 1. Struktura layoutu (sprawdź najpierw)

- Tło rozciąga się na pełną szerokość viewportu
- Treść ograniczona do `var(--size-container)`, wyśrodkowana
- Elementy dekoracyjne (linie, dividery) też ograniczone do kontenera, nie do viewportu
- Zachowany dwuwarstwowy wzorzec (outer full-width + inner container)

## 2. Zgodność wizualna z PNG (KRYTYCZNE — zamiennik Figma screenshot)

Otwórz `visuals/{sekcja}.png` przez `view` i porównaj ze zbudowaną sekcją:

- Liczba kolumn, kierunek flex, alignment — zgodne z obrazem
- Spacing (marginesy, padding, gap) — proporcjonalnie zgodny
- Typografia: rozmiar, waga, line-height, kolor — zgodne z `PROJECT_BRIEF.md` i tym co widać na PNG
- Kolory — zgodne z tokenami z brief'u
- Border-radius i inset-card motif (28px) tam gdzie widoczny na PNG
- Kolejność elementów i pozycjonowanie — zgodne z obrazem
- Brak wymyślonych elementów (cieni, gradientów, overlayów) których nie ma na PNG

## 3. Obrazy

- Plik istnieje w folderze assetów, rozszerzenie zgodne z rzeczywistym typem (`file <ścieżka>`)
- `src`, `alt`, `width`, `height` ustawione
- Jeśli brakuje docelowego obrazu — placeholder + komentarz `<!-- TODO: podmienić obraz -->`, zgłoś userowi

## 4. Jakość kodu

- Sizing w `em` (poza 1px border, box-shadow, letter-spacing)
- `letter-spacing` w px, `line-height` unitless — flaguj jeśli inaczej
- Brak nieużywanego CSS
- Brak zbędnych wrapper-divów
- Propsy typowane

## 5. Responsywność

- `@media (max-width: 991px)` i `(max-width: 767px)` obecne
- Brak poziomego scrolla przy 320px
- Siatki redukują kolumny na mniejszych ekranach
- Touch targets min 44px na mobile

## Pętla poprawek

1. Znajdź rozbieżność względem PNG lub checklisty
2. Popraw kod
3. Powtórz check dla tej sekcji
4. Powtarzaj aż wszystko przejdzie — dopiero wtedy sekcja jest gotowa
