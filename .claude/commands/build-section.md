---
description: Buduje jedną sekcję strony na podstawie PNG w visuals/, orkiestrując 3 subagentów (build → świeży QA → responsywność)
argument-hint: [numer-nazwa np. 1-hero]
---

# Build Section (orkiestracja subagentów)

Argument: `$ARGUMENTS` — np. `1-hero` odpowiada `visuals/1-hero.png`.

## Krok 0 — Kontekst startowy (raz na projekt, pomiń jeśli już zrobione)

Sprawdź `PROJECT_BRIEF.md` — jeśli ma nieuzupełnione `[UZUPEŁNIJ]`, zatrzymaj się i zapytaj usera. Sprawdź czy `global.css` ma wypełnione tokeny (nie placeholder-czarny).

## Krok 1 — Build

Wywołaj subagenta:
```
Agent(subagent_type="section-builder", description="Build $ARGUMENTS", prompt="Zbuduj sekcję $ARGUMENTS na podstawie visuals/$ARGUMENTS.png, PROJECT_BRIEF.md i components-base/ jeśli istnieje.")
```

## Krok 2 — Świeży QA (osobny agent, nie ten sam kontekst co build)

Wywołaj subagenta:
```
Agent(subagent_type="section-qa", description="QA $ARGUMENTS", prompt="Sprawdź sekcję $ARGUMENTS względem visuals/$ARGUMENTS.png i PROJECT_BRIEF.md. Popraw znalezione problemy.")
```

Jeśli QA zgłasza problemy wymagające decyzji usera (np. brak odpowiednika koloru w tokenach) — zatrzymaj się i zapytaj, zamiast zgadywać.

## Krok 3 — Responsywność

Wywołaj subagenta:
```
Agent(subagent_type="responsive-migrator", description="Responsive $ARGUMENTS", prompt="Dodaj responsywność (tablet/mobile/mobile portrait) dla sekcji $ARGUMENTS zgodnie z .claude/rules/responsive.md.")
```

## Krok 4 — Stop

Podsumuj co zostało zbudowane, co poprawił QA, i co warto sprawdzić ręcznie w przeglądarce. **Nie przechodź automatycznie do kolejnej sekcji** — to celowo osobne wywołanie komendy, żeby główny kontekst nie puchł i żeby każda sekcja miała świeży, niezmęczony QA.

## Dlaczego przez subagentów, a nie wszystko w jednym wątku

- `section-qa` nie widział procesu budowy — nie ma tendencji do "potwierdzania" własnej pracy, więc realniej łapie błędy.
- Każdy subagent ma własny, mały kontekst — główna rozmowa (i Twój budżet kontekstu) zostaje czysta na kolejne sekcje.
- Model do budowy i QA ustawiony na `sonnet` w definicjach agentów (`.claude/agents/*/AGENT.md`) — jeśli jakaś sekcja jest wyjątkowo skomplikowana wizualnie, podbij tam `model: opus` tylko dla tego wywołania.
