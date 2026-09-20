# EVO Digital Platform — Current Checkpoint

Checkpoint: **Public Website v1 — Hero + Solutions Locked**

Verified on Isuru's Windows development PC through 2026-09-21.

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

## Public Website v1 visual foundation
- EVO light premium spatial design direction locked.
- Bright cool-white website canvas locked to `#f5f8fa`.
- Header/navigation established.
- Final homepage hero approved and locked on 2026-09-21.
- Hero headline locked: `Smarter Systems for a Brighter Tomorrow`.
- Hero smart-home + industrial artwork, copy/image balance and synchronized four-edge fade treatment approved.
- Hero should not be reworked unless explicitly requested.
- Solutions section approved and locked on 2026-09-21.
- Solutions section uses four compact visual cards with final generated assets:
  - Industrial Automation
  - Smart Living
  - Custom Engineering
  - Integrations & EVO VMS
- Solutions compact proportions, image crops/positions, card copy, CTA styling, and bottom highlight strip are approved.
- The corrected 02/03 top-edge image seam treatment is part of the locked implementation.
- Hero and Solutions should not be reworked unless explicitly requested.

## Current local stack
- Web: Astro
- Admin: React + Vite
- API: FastAPI
- ORM: SQLAlchemy
- Migrations: Alembic
- Database: PostgreSQL 17
- Runtime/orchestration: Docker Desktop + Docker Compose on Windows/WSL2

## Next milestone
**Public Website v1 — Smart Living Detail Section**

Current order:
1. hero — approved and locked,
2. solutions — approved and locked,
3. smart living detail — next,
4. industrial detail,
5. projects,
6. company,
7. contact,
8. responsive/mobile polish and final homepage QA.

Do not deploy or change `evo.lk` DNS yet. First complete and locally approve the public website visual foundation.
