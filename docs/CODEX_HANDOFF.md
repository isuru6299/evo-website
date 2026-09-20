# EVO Digital Platform — Codex / AI Handoff

## Read order before coding
1. `docs/README.md`
2. `docs/AI_CONTEXT.md`
3. `docs/ARCHITECTURE.md`
4. `docs/DECISIONS.md`
5. `docs/ROADMAP.md`
6. `docs/CHECKPOINT.md`
7. this file

## Project
Repository: `isuru6299/evo-website`

Internal project name: **EVO Digital Platform**

## Current implementation state
The old static HTML/CSS/JavaScript prototype has been retired from `main` and preserved on the `legacy-static-test` branch.

`main` now contains a locally verified platform foundation:
- `apps/web` — Astro public frontend scaffold
- `apps/admin` — React + Vite admin scaffold
- `apps/api` — FastAPI backend
- PostgreSQL 17 wired through Docker Compose
- SQLAlchemy ORM foundation
- Alembic migration system configured and initial migration applied
- organizations table/model
- service/product/platform registry table/model
- `/api/v1/organizations` read API
- `/api/v1/services` read API
- repeatable core seed script
- canonical `docs/` memory and checkpoint files

Local verification was completed on Isuru's Windows development PC on 2026-09-20:
- repository location: `C:\EVO\Development\evo-website`
- WSL2 + Docker Desktop working
- web, admin, api and db containers running
- PostgreSQL healthy
- public web verified at `http://localhost:4321`
- admin verified at `http://localhost:5173`
- FastAPI/OpenAPI verified at `http://localhost:8000` and `/docs`
- PostgreSQL health verified at `/health/db`
- Alembic migration applied successfully
- tables verified: `alembic_version`, `organizations`, `services`
- primary organization seeded: `EVO (Pvt) Ltd`
- seeded service registry:
  - Industrial Automation — active / website visible
  - Smart Living — active / website visible
  - Custom Engineering — active / website visible
  - EVO VMS — beta / website hidden
- organization and service APIs verified locally

## Current direction
- Public frontend -> Astro
- Admin -> React + Vite
- Backend -> FastAPI
- ORM -> SQLAlchemy
- Migrations -> Alembic
- Database -> PostgreSQL
- Local stack -> Docker Compose
- Future production -> Ubuntu VPS + Nginx + Docker/Compose
- Central architecture -> modular monolith
- Specialized products (VMS/DDNS) -> integrations/separate focused runtimes

## Non-negotiable product goals
- Future EVO services must be easy to add/manage.
- Do not hard-code the platform around the current service list.
- Normal services are catalog/content data by default.
- Software products may add behaviour through modules/integrations.
- Preserve clear organization/subsidiary readiness.
- Keep design premium and fully custom rather than constrained by WordPress/Elementor patterns.
- Keep code easy for a future engineer or AI agent to navigate.
- Record important architectural decisions in `docs/DECISIONS.md`.

## Working style
Use small, approved increments.

Preferred sequence for meaningful work:
1. inspect relevant existing files
2. explain proposed change when architectural
3. modify only the scoped area
4. run/test locally where possible
5. verify no unrelated regression
6. commit with a clear message
7. update docs/checkpoint when the milestone changes project state

For visual website work, the owner prefers section-by-section approval rather than redesigning the entire website at once.

## Do not do
- Do not silently replace the agreed stack.
- Do not start a microservice architecture without a demonstrated need.
- Do not merge VMS streaming/recording engines into the website backend.
- Do not commit secrets or passwords.
- Do not change `evo.lk` DNS/mail records as part of ordinary code work.
- Do not assume chat memory is authoritative if repository docs state otherwise.
- Do not describe the local scaffold as production-ready; it is a verified development foundation only.
- Do not expand backend/admin scope while the current milestone is public website visual work unless required to unblock it.

## Next recommended technical milestone
**Public Website v1 — Visual Foundation**

Proceed in this order:
1. create production design-system tokens/shared styling conventions
2. replace the temporary Astro foundation screen with the real public shell
3. build header/navigation
4. build the hero section and review locally
5. after owner approval, continue section-by-section into services/solutions, smart living, industrial, projects, company and contact/footer
6. verify responsive/mobile behaviour before any public deployment

Preferred existing hero direction from prior review:
- headline: `Where Smart Living Meets Industrial Automation`
- supporting idea: EVO combines industrial-grade engineering, intelligent control and elegant smart living experiences
- primary CTAs: `Explore Our Work` and `Talk to EVO`
- visual direction: premium, modern, technical, not a generic WordPress/Elementor look

## How to run locally
From `C:\EVO\Development\evo-website`:

```powershell
docker compose up
```

Key local URLs:
- `http://localhost:4321`
- `http://localhost:5173`
- `http://localhost:8000`
- `http://localhost:8000/health/db`
- `http://localhost:8000/docs`

Core seed, when needed:

```powershell
docker compose exec api python -m scripts.seed_core
```

## How to update this handoff
Whenever a major milestone is completed, replace the "Current implementation state" and "Next recommended technical milestone" sections so a new AI session can continue without reconstructing history from chat.
