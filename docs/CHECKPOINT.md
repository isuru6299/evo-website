# EVO Digital Platform — Current Checkpoint

Checkpoint: **Public Website v1 — Full Multi-Page First Pass Built**

Verified architecture and earlier local foundation through 2026-09-21. The new multi-page public website build has been committed and is awaiting the next local visual/build review.

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
- Seed is designed to be repeatable without creating duplicates.
- `/api/v1/organizations` verified locally.
- `/api/v1/services` verified locally.
- PostgreSQL query confirmed all four service records and visibility/status values.

## Homepage visual foundation
- EVO light premium spatial design direction locked.
- Bright cool-white website canvas locked to `#f5f8fa`.
- Final homepage hero approved and locked on 2026-09-21.
- Hero headline locked: `Smarter Systems for a Brighter Tomorrow`.
- Hero smart-home + industrial artwork, copy/image balance and synchronized four-edge fade treatment approved.
- Solutions section approved and locked on 2026-09-21.
- Solutions section uses four compact visual cards with final generated assets:
  - Industrial Automation
  - Smart Living
  - Custom Engineering
  - Integrations & EVO VMS
- Solutions compact proportions, image crops/positions, card copy, CTA styling, and bottom highlight strip are approved.
- The corrected 02/03 top-edge image seam treatment is part of the locked implementation.
- Hero and Solutions should not be visually reworked unless explicitly requested.

## Homepage sections implemented
1. Hero — approved and locked
2. Solutions — approved and locked
3. Smart Living detail — first implementation
4. Industrial Automation detail — first implementation
5. Selected Projects — first implementation with engineering illustrations
6. Company / About EVO — first implementation in the light EVO theme
7. Contact CTA — first implementation
8. Footer — first implementation

## Public multi-page website now implemented
Core routes:
- `/`
- `/solutions`
- `/industries`
- `/projects`
- `/company`
- `/contact`
- `/404`

Solution detail routes:
- `/solutions/industrial-automation`
- `/solutions/smart-living`
- `/solutions/custom-engineering`
- `/solutions/systems-integrations`

Shared inner-page foundation:
- `apps/web/src/layouts/InnerLayout.astro`
- `apps/web/src/styles/inner-pages.css`
- `apps/web/src/styles/site-shell.css`

Navigation now points to real public routes, and a first-pass mobile navigation menu has been added. Homepage Hero and Solutions visuals were preserved while their CTA targets were connected to the new routes.

See `docs/PUBLIC_SITE_MAP.md` for the route map and review plan.

## Current local stack
- Web: Astro
- Admin: React + Vite
- API: FastAPI
- ORM: SQLAlchemy
- Migrations: Alembic
- Database: PostgreSQL 17
- Runtime/orchestration: Docker Desktop + Docker Compose on Windows/WSL2

## Next milestone
**Public Website v1 — Full Route Build Review + Refinement**

Next review order:
1. Pull latest `main` locally.
2. Run Astro/Docker build and check all public routes.
3. Fix any build, asset or responsive issues.
4. Review inner-page visual consistency.
5. Refine copy and project facts.
6. Add/replace project imagery where needed.
7. Connect contact inquiry flow to FastAPI/PostgreSQL.
8. Final responsive QA.
9. Production SEO and deployment configuration.

Do not deploy or change `evo.lk` DNS yet. First locally review and approve the complete public website.
