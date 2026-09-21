# EVO Digital Platform — Current Checkpoint

Checkpoint: **Real Project Website System v1 — Full P01–P15 Archive Visible**

Verified architecture and local platform foundation through 2026-09-22. The public website foundation is complete, 15 real projects are archived, and the Projects website layer now exposes all 15 records through a category-filtered portfolio while keeping homepage projects selective.

## Completed foundation
- Repository / architecture established.
- Astro public web, React/Vite admin and FastAPI backend scaffolds established.
- PostgreSQL 17 + SQLAlchemy + Alembic + Docker Compose foundation verified locally.
- `/health`, `/health/db`, `/api/v1/organizations` and `/api/v1/services` foundation exists.
- Multi-page public website, navigation and SEO foundation built.
- Homepage Hero and Solutions remain the approved/locked visual baseline.

## Real Project Archive
Canonical project workflow:
- `docs/PROJECT_ARCHIVE.md`
- `data/projects/index.json`
- `data/projects/<project>.json`
- `data/projects/_template.json`

Current archive status:
- 15 projects archived (P01–P15).
- P13 remains ongoing.
- P15 remains ongoing.
- Archive records remain conservative and evidence-based.
- Canonical project facts remain separate from website presentation data.

## Real Project Website System v1 — expanded 2026-09-22
The old fake/placeholder project list has been replaced by a real-project website layer based on archive-supported facts.

Shared files:
- `apps/web/src/data/projectPortfolio.ts`
- `apps/web/src/components/ProjectPlaceholder.astro`
- `apps/web/src/styles/project-portfolio.css`
- `apps/web/src/pages/projects/[slug].astro`

Current behaviour:
- Homepage keeps a small featured-project selection only.
- `/projects` now contains all P01–P15 projects.
- Every project has a generated detail route.
- Projects can be filtered by:
  - All
  - Automation & Custom Machinery
  - CNC / Machinery
  - Network & Building Systems
  - Smart Living
  - Ongoing
- P13 and P15 are visibly marked as ongoing.
- Project cards and detail pages retain photo-ready placeholder spaces until approved real media is prepared.

## Project grouping
### Network & Building Systems
- P01 — Network & CCTV Infrastructure
- P02 — IBS Works – Major Building & High-Rise Projects
- P03 — Fire & Security System Installation
- P14 — Server Room Rack & Cable Management

### Automation & Custom Machinery
- P04 — Cardinal Mixing Machine Automation
- P05 — Automatic Tin Capping Machines ×2
- P06 — Twin Screw Conveyor System
- P07 — PVC Pipe Automatic Sealing Machine
- P08 — Jam Bottle Automatic Capping Machine
- P09 — Shampoo Bottle Automatic Sticker Labeling Machine
- P10 — Wet Glue Labeling Machine

### CNC / Machinery
- P11 — Flood-Damaged Industrial Machinery Recovery
- P12 — Three-Spindle CNC Router Modernization
- P13 — CNCBUILD 1530 CNC Fault Diagnosis & Repair — ongoing

### Smart Living
- P15 — Legacy MyHOME Smart Home Recovery & Modernization — ongoing

## Public-safety / archive rules preserved
- Client names and exact sensitive locations are intentionally omitted from website presentation where publication permission is unresolved.
- Pre-EVO work is marked as prior professional experience rather than represented as work contracted by EVO (Pvt) Ltd.
- Website copy uses archive-supported technical scope and avoids invented performance claims.
- Ongoing projects do not claim final outcomes before completion.
- Internal network addresses, security information, credentials and sensitive control topology remain excluded from public copy.

## Photo-ready media strategy
Real photographs are not required to complete layout work.

The project UI reserves reusable media slots for:
- cover / primary photo
- process / technical detail
- result / after photo
- current-progress photo for ongoing work

Until approved real media is prepared, category-specific engineering icons and clean placeholders are used. Later real photos can replace these spaces without redesigning the page structure.

## Current local stack
- Web: Astro
- Admin: React + Vite
- API: FastAPI
- ORM: SQLAlchemy
- Migrations: Alembic
- Database: PostgreSQL 17
- Runtime/orchestration: Docker Desktop + Docker Compose on Windows/WSL2

## Immediate next step
**Local visual/build review of the full P01–P15 Projects system.**

1. Pull latest `main`.
2. Start Docker Desktop if it is not already running.
3. Run `docker compose up -d`.
4. Review `/projects` with each category filter.
5. Open several project detail pages, including P13 and P15 ongoing pages.
6. Fix any layout/responsive issues found during local review.
7. Then gradually replace placeholders with approved real project photos.

Inquiry/CRM, admin real functions, auth/permissions and production deployment remain deferred until the owner chooses to resume them.

Do not deploy or change `evo.lk` DNS yet. Keep mail DNS records untouched until production hosting is explicitly planned.
