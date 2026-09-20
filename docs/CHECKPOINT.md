# EVO Digital Platform — Current Checkpoint

Checkpoint: **Public Website v1 — Multi-Page Foundation + Technical Site Shell Built**

Verified architecture and earlier local foundation through 2026-09-21. The current multi-page public website and latest site-shell/SEO changes are committed and ready for local review.

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
- The corrected 02/03 top-edge image seam treatment is part of the locked implementation.
- Hero and Solutions should not be visually reworked unless explicitly requested.

## Homepage sections implemented
1. Hero — approved and locked
2. Solutions — approved and locked
3. Smart Living detail
4. Industrial Automation detail
5. Selected Projects
6. Company / About EVO
7. Contact CTA
8. Footer

## Public multi-page website implemented
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

## Public site technical foundation now added
- Shared canonical/SEO metadata component: `apps/web/src/components/SeoHead.astro`.
- Open Graph and Twitter card metadata.
- EVO Organization JSON-LD structured data.
- `robots.txt` and current-route `sitemap.xml`.
- Active navigation state using `aria-current`.
- Mobile menu and active mobile navigation state.
- Keyboard focus-visible treatment.
- Fixed-header scroll-margin behaviour for anchored sections.

## Current local stack
- Web: Astro
- Admin: React + Vite
- API: FastAPI
- ORM: SQLAlchemy
- Migrations: Alembic
- Database: PostgreSQL 17
- Runtime/orchestration: Docker Desktop + Docker Compose on Windows/WSL2

## Next milestone
**Inquiry Flow v1 — Public Contact → FastAPI → PostgreSQL → Admin**

Planned order:
1. Create inquiry database model + migration.
2. Add public inquiry POST API.
3. Add real contact form on the public website.
4. Store submissions in PostgreSQL.
5. Add admin inquiry list/detail view.
6. Add basic inquiry status workflow.
7. Verify locally end-to-end.

After Inquiry Flow v1, continue full responsive/visual refinement and replace temporary project visuals/copy where required.

Do not deploy or change `evo.lk` DNS yet. Keep mail DNS records untouched until the production VPS/hosting move is explicitly planned.
