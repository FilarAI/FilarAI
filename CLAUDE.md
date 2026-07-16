# CLAUDE.md — FilarAI Website Build

Buduję stronę FilarAI z gotowych wizualizacji (PNG) + częściowo gotowego kodu bazowego komponentów.
**Nie mam Figmy podłączonej. Nigdy nie próbuj wołać narzędzi Figma MCP (get_metadata, get_design_context, get_screenshot) — nie istnieją w tym projekcie.**

## Źródło prawdy (source of truth)

1. `PROJECT_BRIEF.md` — design tokens (kolory, typografia, spacing, radius). Zawsze czytaj przed budową jakiejkolwiek sekcji.
2. `visuals/{numer}-{nazwa}.png` — wizualny referencyjny obraz sekcji. To jest odpowiednik "screenshotu z Figmy" w tym projekcie — porównuj zbudowany kod z tym obrazem przez `view`.
3. `components-base/` (jeśli istnieje) — gotowy kod bazowy dla danej sekcji, który trzeba dostosować pod design z PNG, a NIE pisać od zera.

## Workflow budowy strony

Patrz `.claude/commands/build-section.md` — to jedyna komenda potrzebna do budowy pojedynczej sekcji.

Reguły techniczne (ładują się automatycznie kiedy dotykasz plików komponentów):
- `.claude/rules/component-build.md` — system jednostek em, layout model, kolejność budowy
- `.claude/rules/qa-checklist.md` — checklist QA porównujący z PNG
- `.claude/rules/responsive.md` — reguły responsywności (tablet/mobile)

## Zasady oszczędzania kontekstu i kredytów

- Buduj **jedną sekcję na raz**. Nie próbuj budować całej strony w jednym przebiegu.
- Po zbudowaniu i zaakceptowaniu sekcji: zrób commit, potem `/compact` albo nową sesję na kolejną sekcję.
- Do mechanicznych zadań (konwersja px→em, dostosowanie kodu bazowego pod tokeny) subagent może użyć modelu `haiku`. Do oceny wizualnej zgodności z PNG i decyzji projektowych zostaw `sonnet`/`opus`.
- Nie odpalaj audytu SEO/AEO dopóki wszystkie sekcje danej strony nie przejdą QA — to osobna, późniejsza faza.

## Framework

Astro (TypeScript strict). Global CSS: `src/styles/global.css`, importowany w `src/layouts/Layout.astro`. Sekcje jako `.astro` komponenty pod `src/components/`.

## Struktura stron

Strona główna (9 sekcji, patrz `visuals/`) + 3 podstrony: Oferta, Portfolio, Kontakt.
