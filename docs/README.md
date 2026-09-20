# EVO Digital Platform Documentation

This folder is the canonical project memory for the EVO Digital Platform.

## Read this first
Future ChatGPT/Codex/AI sessions should read these files before making architectural or structural changes:

1. `AI_CONTEXT.md` — enduring vision, business intent, non-negotiables, working style.
2. `ARCHITECTURE.md` — target technical architecture and module boundaries.
3. `DECISIONS.md` — architectural decisions already agreed; do not silently reverse them.
4. `ROADMAP.md` — phased delivery plan and current stage.
5. `CHECKPOINT.md` — exact current working checkpoint and what is/not yet verified.
6. `CODEX_HANDOFF.md` — current implementation state, how to continue, what not to change.
7. `PROJECT_ARCHIVE.md` — canonical workflow for capturing past/future real projects from chat, photos and field notes.

## Rule
Do not treat chat history as the only source of truth. Important decisions must be written into this folder.

When a decision changes, update the relevant document and add an entry to `DECISIONS.md`.

When a milestone is completed, update `ROADMAP.md`, `CHECKPOINT.md` and `CODEX_HANDOFF.md`.

Real project facts should not live only in chat. Store each real project as one canonical record in `data/projects/` and follow `PROJECT_ARCHIVE.md`.

## Project identity
- Repository: `isuru6299/evo-website`
- Project: EVO Digital Platform
- Primary public brand/domain: `evo.lk`
- The original static prototype is preserved on the `legacy-static-test` branch.
- `main` now contains the modular platform foundation.
