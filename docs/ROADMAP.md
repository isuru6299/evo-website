# EVO Digital Platform — Roadmap

## Current state
- The old static test website has been retired from `main` and preserved on the `legacy-static-test` branch.
- `main` holds the EVO Digital Platform structure.
- Astro public web scaffold exists in `apps/web`.
- React/Vite admin scaffold exists in `apps/admin`.
- FastAPI backend exists in `apps/api`.
- PostgreSQL 17 and all applications are wired through `docker-compose.yml`.
- Canonical project memory lives in `docs/`.
- The full local development stack has been verified on Isuru's Windows PC with WSL2 + Docker Desktop.
- Alembic migrations, organizations, service registry and initial read APIs are locally verified.

## Phase 0 — Preserve and document
- [x] Keep the existing repository.
- [x] Add canonical project documentation.
- [x] Preserve the old static prototype on `legacy-static-test`.
- [x] Remove the old test site from `main` and establish the new platform structure.

## Phase 1 — Local development foundation
- [x] Install/verify Docker Desktop and Git on the local PC.
- [x] Add `docker-compose.yml`.
- [x] Add local PostgreSQL service.
- [x] Establish environment-variable pattern and `.env.example`.
- [x] Define one-command local startup target: `docker compose up --build`.
- [x] Clone to the local PC and verify all four services actually start.
- [x] Verify Astro web, React admin, FastAPI root/docs, and PostgreSQL health locally.

## Phase 2 — Public website / Astro
- [x] Create `apps/web` Astro project scaffold.
- [ ] Create production design-system tokens.
- [ ] Build header/navigation.
- [ ] Build final hero.
- [ ] Build solutions/services.
- [ ] Build smart living section.
- [ ] Build industrial section.
- [ ] Build projects.
- [ ] Build company/about/contact/footer.
- [ ] Verify desktop/mobile behaviour.
- [ ] Add production GitHub Pages/hosting build when needed.

## Phase 3 — API foundation
- [x] Create `apps/api` FastAPI project scaffold.
- [x] Add configuration foundation.
- [x] Add `/health` endpoint.
- [x] Add SQLAlchemy and PostgreSQL connection foundation.
- [x] Add database health endpoint.
- [x] Configure Alembic migrations.
- [ ] Add security/logging conventions.
- [x] Add `/api/v1` routing structure.

## Phase 4 — Core business model
- [x] Organizations foundation.
- [ ] Users/roles/permissions.
- [x] Service/product/platform catalog foundation.
- [ ] Industries/categories.
- [ ] Projects.
- [ ] Media metadata.
- [ ] Audit log.
- [x] Seed primary EVO organization and initial service registry.
- [x] Verify organization/service read APIs locally.

## Phase 5 — Admin foundation
- [x] Create `apps/admin` React/Vite project scaffold.
- [x] Create initial dashboard shell/navigation placeholder.
- [ ] Authentication.
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
- [x] Organization-scoped service records established.
- [ ] Organization-specific settings/branding hooks.
- [ ] Role/access scope.
- [ ] Evaluate PostgreSQL RLS only when needed.

## Phase 9 — Product integrations
- [x] Catalog can identify software platforms separately from normal services.
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
- [ ] Provision Ubuntu VPS.
- [ ] Nginx reverse proxy.
- [ ] Docker/Compose production configuration.
- [ ] PostgreSQL production database.
- [ ] HTTPS.
- [ ] Backups.
- [ ] Monitoring/logging.
- [ ] Move `evo.lk` web DNS to production hosting while preserving mail records.
- [ ] Add subdomains only as services actually need them.

## Delivery rule
Work phase-by-phase and checkpoint working states. Do not mix unrelated backend, admin, website and product-integration work in one uncontrolled batch.

The immediate next milestone is **Public Website v1 — Visual Foundation**:
1. create production design-system tokens,
2. build and locally review header/navigation,
3. build and locally review the hero section,
4. continue the public site section-by-section only after approval.
