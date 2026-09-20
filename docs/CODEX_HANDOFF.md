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

`main` contains the first verified platform scaffold:
- `apps/web` — Astro public frontend scaffold
- `apps/admin` — React + Vite admin scaffold
- `apps/api` — FastAPI backend scaffold
- PostgreSQL 17 wired through Docker Compose
- SQLAlchemy connection foundation
- `/health` and `/health/db` API checks
- root `docker-compose.yml`
- canonical `docs/` memory and checkpoint files

Local verification was completed on Isuru's Windows development PC on 2026-09-20:
- repository location: `C:\EVO\Development\evo-website`
- WSL2 installed and working
- Docker Desktop installed and working
- `docker compose up --build` completed successfully
- `docker compose ps` showed web, admin, api and db running
- PostgreSQL reported healthy
- Astro web verified at `http://localhost:4321`
- React admin verified at `http://localhost:5173`
- FastAPI root verified at `http://localhost:8000`
- OpenAPI docs verified at `http://localhost:8000/docs`
- PostgreSQL health verified at `http://localhost:8000/health/db`

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
- Do not change `evo.lk` DNS/mail records as part of code work.
- Do not assume chat memory is authoritative if repository docs state otherwise.
- Do not describe the local scaffold as production-ready; it is a verified development foundation only.

## Next recommended technical milestone
**Core Platform Foundation v1**

Proceed in this order:
1. create production design-system tokens/shared styling conventions
2. configure Alembic migrations
3. create the first real core database models:
   - organizations
   - service/product catalog registry
4. expose minimal API endpoints for those models
5. keep the admin and public UI modular and avoid premature feature expansion
6. update checkpoint docs after the new foundation is locally verified

## How to run locally
From `C:\EVO\Development\evo-website`:

```powershell
Copy-Item .env.example .env   # only if .env does not already exist
docker compose up --build
```

Verify:
- `http://localhost:4321`
- `http://localhost:5173`
- `http://localhost:8000`
- `http://localhost:8000/health/db`
- `http://localhost:8000/docs`

## How to update this handoff
Whenever a major milestone is completed, replace the "Current implementation state" and "Next recommended technical milestone" sections so a new AI session can continue without reconstructing history from chat.
