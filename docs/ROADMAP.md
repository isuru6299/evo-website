# EVO Digital Platform — Roadmap

## Current state
- Existing repository contains a working static HTML/CSS/JavaScript company website.
- GitHub Pages is used for public preview/deployment.
- The hero and visual direction are still being refined.
- No full Astro/FastAPI/PostgreSQL/Docker migration has been started yet.
- `docs/` now holds canonical project memory.

## Phase 0 — Preserve and document
- [x] Keep current repo.
- [x] Add canonical project documentation.
- [ ] Create a clean checkpoint/tag for the current static working site.
- [ ] Remove/clean temporary experimental files only after confirming they are not needed.

## Phase 1 — Local development foundation
- [ ] Install/verify Docker Desktop, Git, Node.js, Python tooling as required.
- [ ] Add `docker-compose.yml`.
- [ ] Add local PostgreSQL service.
- [ ] Establish environment-variable pattern and `.env.example`.
- [ ] Define one-command local startup target.

## Phase 2 — Public website migration to Astro
- [ ] Create `apps/web` Astro project.
- [ ] Port global design tokens/styles.
- [ ] Port header/navigation.
- [ ] Port hero section.
- [ ] Port solutions/services sections.
- [ ] Port smart living section.
- [ ] Port industrial section.
- [ ] Port projects.
- [ ] Port company/about/contact/footer.
- [ ] Verify desktop/mobile parity.
- [ ] Replace old static GitHub Pages deployment with Astro build.

## Phase 3 — API foundation
- [ ] Create `apps/api` FastAPI project.
- [ ] Add config/security/logging foundation.
- [ ] Add `/health` endpoint.
- [ ] Add SQLAlchemy/Alembic.
- [ ] Connect PostgreSQL.
- [ ] Add OpenAPI organization/tags/versioning conventions.

## Phase 4 — Core business model
- [ ] Organizations.
- [ ] Users/roles/permissions.
- [ ] Service/product catalog.
- [ ] Industries/categories.
- [ ] Projects.
- [ ] Media metadata.
- [ ] Audit log.

## Phase 5 — Admin foundation
- [ ] Create `apps/admin` React/Vite project.
- [ ] Authentication.
- [ ] Dashboard shell/navigation.
- [ ] Service catalog management.
- [ ] Project management.
- [ ] Media management.

## Phase 6 — Inquiry/CRM
- [ ] Public project inquiry form.
- [ ] FastAPI inquiry endpoint.
- [ ] Store inquiries in PostgreSQL.
- [ ] Admin inquiry list/detail.
- [ ] Status workflow.
- [ ] Notes/assignment.
- [ ] Email/notification integration later.

## Phase 7 — Schema-driven website content
- [ ] Page model.
- [ ] Structured block model.
- [ ] Draft/review/publish states.
- [ ] Navigation/menu management.
- [ ] Content revision history.

## Phase 8 — Organization/subsidiary readiness
- [ ] Organization-scoped records where needed.
- [ ] Organization-specific settings/branding hooks.
- [ ] Role/access scope.
- [ ] Evaluate PostgreSQL RLS only when needed.

## Phase 9 — Product integrations
- [ ] EVO VMS integration boundary.
- [ ] Customer/account/product mapping.
- [ ] Status/subscription hooks.
- [ ] Future DDNS integration pattern.

## Phase 10 — AI/tool layer
- [ ] Document AI-safe operations.
- [ ] Add controlled read tools/APIs.
- [ ] Add draft-only content creation tools.
- [ ] Add permission checks and audit logging.
- [ ] Human review/publish flow for high-impact changes.

## Phase 11 — VPS production deployment
- [ ] Purchase/provision Ubuntu VPS.
- [ ] Nginx reverse proxy.
- [ ] Docker/Compose production configuration.
- [ ] PostgreSQL production database.
- [ ] HTTPS.
- [ ] Backups.
- [ ] Monitoring/logging.
- [ ] Move `evo.lk` web DNS to VPS while preserving mail records.
- [ ] Add subdomains only as services actually need them.

## Delivery rule
Work phase-by-phase and checkpoint working states. Do not attempt to build the entire future platform before the public website and core foundation are stable.
