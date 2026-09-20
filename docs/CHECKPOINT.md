# EVO Digital Platform — Current Checkpoint

Checkpoint: **Public Website v1 Frozen / Real Project Archive Ready**

Verified architecture and local platform foundation through 2026-09-21. The current multi-page public website is good enough for now and should be treated as visually frozen until real project photos/content are brought in.

## Completed foundation
- Old static test website removed from `main` and preserved on `legacy-static-test`.
- Canonical `docs/` project memory established.
- Astro public web scaffold created in `apps/web`.
- React + Vite admin scaffold created in `apps/admin`.
- FastAPI backend scaffold created in `apps/api`.
- PostgreSQL 17 wired through Docker Compose.
- Local WSL2 + Docker Desktop development stack verified.
- `/health`, `/health/db`, OpenAPI docs, web and admin verified locally.

## Core database foundation verified
- SQLAlchemy declarative base established.
- Alembic configured and initial migration generated/applied.
- PostgreSQL tables verified locally:
  - `alembic_version`
  - `organizations`
  - `services`
- Initial migration committed to the repository.

## Core Data + API v1 verified
- `EVO (Pvt) Ltd` seeded as the primary organization.
- Service registry seeded with:
  - Industrial Automation — active, website visible
  - Smart Living — active, website visible
  - Custom Engineering — active, website visible
  - EVO VMS — beta, website hidden
- `/api/v1/organizations` and `/api/v1/services` verified locally.

## Public website state
The current multi-page public website first pass is complete enough to pause further visual work.

Current routes include:
- `/`
- `/solutions`
- `/industries`
- `/projects`
- `/company`
- `/contact`
- `/solutions/industrial-automation`
- `/solutions/smart-living`
- `/solutions/custom-engineering`
- `/solutions/systems-integrations`
- `/404`

The homepage Hero and Solutions remain the approved visual baseline. Other sections/pages are first-pass implementations and can be refined later after real project content is available.

Do not spend time on additional random website polishing now. Real project evidence should drive the next major public-site refinement.

## Real Project Archive foundation — added 2026-09-21
A chat-independent project intake system is now established for the owner's large history of work across different fields.

Canonical locations:
- workflow: `docs/PROJECT_ARCHIVE.md`
- records: `data/projects/<year>-<project-slug>.json`
- index: `data/projects/index.json`
- template: `data/projects/_template.json`
- future web-ready media: `apps/web/public/projects/<project-slug>/`

Rules:
- one real project = one canonical record,
- future chats must check the index before creating a project,
- new photos/facts update the existing project,
- owner-confirmed facts, photo observations and unconfirmed details stay separate,
- archived projects are not automatically public,
- client/location publishing permission defaults to unknown,
- website publishing defaults to false.

This allows the owner to start a separate chat and submit projects one by one with rough notes and photos, without needing to keep one giant conversation alive.

## Current local stack
- Web: Astro
- Admin: React + Vite
- API: FastAPI
- ORM: SQLAlchemy
- Migrations: Alembic
- Database: PostgreSQL 17
- Runtime/orchestration: Docker Desktop + Docker Compose on Windows/WSL2

## Next milestone
**Real Project Ingestion — build the archive from actual completed work**

Recommended workflow:
1. Start a dedicated `EVO Project Archive` chat.
2. Read `docs/PROJECT_ARCHIVE.md` and `data/projects/index.json`.
3. Owner sends one project at a time with any remembered facts and available photos.
4. Analyze photos and distinguish visible evidence from assumptions.
5. Create/update the canonical project record.
6. Update the project index.
7. Later select strong projects/photos for the public website.
8. Only after the real archive grows, rebuild/refine the Projects section and case-study pages around actual work.

Inquiry/CRM, admin and further backend work are intentionally deferred until the owner chooses to resume them.

Do not deploy or change `evo.lk` DNS yet. Keep mail DNS records untouched until the production hosting move is explicitly planned.
