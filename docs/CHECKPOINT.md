# EVO Digital Platform — Current Checkpoint

Checkpoint: **Real Project Website System v1 Built — Awaiting Local Review + Real Media**

Verified architecture and local platform foundation through 2026-09-22. The public website foundation is complete, 15 real projects are archived, and the first real-project website layer has now been built using photo-ready placeholders.

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
- All archive records still retain `website.publish = false`; no archive publication flags were changed by the website build.

## Real Project Website System v1 — built 2026-09-22
The old placeholder project portfolio has been replaced in the local website code by a real-project draft layer based on archive-supported facts.

New shared files:
- `apps/web/src/data/projectPortfolio.ts`
- `apps/web/src/components/ProjectPlaceholder.astro`
- `apps/web/src/styles/project-portfolio.css`
- `apps/web/src/pages/projects/[slug].astro`

Updated:
- homepage Projects section
- `/projects` portfolio page
- shared homepage/inner-page stylesheet loading

Initial selected portfolio set:
1. Three-Spindle CNC Router Modernization (archive source P12)
2. Flood-Damaged Industrial Machinery Recovery (P11)
3. Network & CCTV Infrastructure (P01)
4. Server Room Rack & Cable Management (P14)
5. Cardinal Mixing Machine Automation (P04)

Homepage currently uses the first four as featured projects. `/projects` uses all five.

## Public-safety / archive rules preserved
- Client names and exact sensitive locations are intentionally omitted from the draft portfolio display while publish permissions remain unresolved.
- P01 and P04 are visibly marked as pre-EVO professional experience.
- The website copy uses archive-supported technical scope and avoids invented performance claims.
- Project JSON records were not changed by this website build.
- P13 and P15 are not included in the initial public portfolio draft because they remain ongoing.

## Photo-ready media strategy
Real photographs are not required to complete layout work.

The project UI now reserves reusable media slots for:
- cover / primary photo
- process / technical detail
- result / after photo

Until approved real media is prepared, each slot uses a clean category-specific engineering icon/placeholder. Later real photos can replace these spaces without redesigning the page structure.

## Current public-site project routes
- `/projects`
- `/projects/three-spindle-cnc-router-modernization`
- `/projects/flood-damaged-industrial-machinery-recovery`
- `/projects/network-cctv-infrastructure`
- `/projects/server-room-rack-cable-management`
- `/projects/cardinal-mixing-machine-automation`

## Current local stack
- Web: Astro
- Admin: React + Vite
- API: FastAPI
- ORM: SQLAlchemy
- Migrations: Alembic
- Database: PostgreSQL 17
- Runtime/orchestration: Docker Desktop + Docker Compose on Windows/WSL2

## Immediate next step
**Local visual/build review of Project Website System v1.**

1. Pull latest `main`.
2. Restart/rebuild the web service if needed.
3. Review homepage Projects section, `/projects`, and one or two detail pages.
4. Fix layout/responsive issues if any.
5. Then gradually replace placeholders with approved real photos from the Project Archive workflow.

Inquiry/CRM, admin real functions, auth/permissions and production deployment remain deferred until the owner chooses to resume them.

Do not deploy or change `evo.lk` DNS yet. Keep mail DNS records untouched until production hosting is explicitly planned.
