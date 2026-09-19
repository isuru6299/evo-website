# EVO Digital Platform — Codex / AI Handoff

## Read order before coding
1. `docs/README.md`
2. `docs/AI_CONTEXT.md`
3. `docs/ARCHITECTURE.md`
4. `docs/DECISIONS.md`
5. `docs/ROADMAP.md`
6. this file

## Project
Repository: `isuru6299/evo-website`

Internal project name: **EVO Digital Platform**

## Current implementation state
The repository currently contains a working static company website built with HTML, CSS and JavaScript and deployed/previewed through GitHub Pages.

The current static site is a prototype and visual/content baseline. It must not be casually destroyed during architectural migration.

The long-term target is documented in `ARCHITECTURE.md`, but the Astro/FastAPI/PostgreSQL/React/Docker structure is not yet fully implemented.

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
- Do not break the existing public site simply to create a cleaner folder structure.
- Do not assume chat memory is authoritative if repository docs state otherwise.

## Next recommended technical milestone
Before major feature development:
1. create/tag a clean checkpoint of the current static site
2. establish local Docker/PostgreSQL development foundation
3. create `apps/web` Astro project
4. port the existing site section-by-section while keeping GitHub Pages working

## How to update this handoff
Whenever a major milestone is completed, replace the "Current implementation state" and "Next recommended technical milestone" sections so a new AI session can continue without reconstructing history from chat.
