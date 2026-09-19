# EVO Digital Platform — Decision Log

This file records architectural decisions so future sessions do not accidentally reverse them.

## D-001 — Treat project as EVO Digital Platform
**Decision:** The project is not only a brochure website. It is the foundation for EVO's public website, internal management, future portals, services and integrations.

**Reason:** EVO may expand into many engineering, technology and software directions.

## D-002 — Continue current repository
**Decision:** Continue using `isuru6299/evo-website` rather than starting a disconnected repository.

**Reason:** Preserve existing work, history and GitHub Pages workflow.

## D-003 — Local development first, VPS later
**Decision:** Develop the full future stack on the owner's PC. Keep backend private/local for now. Deploy to a VPS later without redesigning the architecture.

## D-004 — Public frontend: Astro
**Decision:** Migrate the public site toward Astro.

**Reason:** Component structure, static-first performance, strong SEO, minimal client-side JavaScript by default, good GitHub Pages compatibility and easy future VPS deployment.

## D-005 — Admin: React + Vite
**Decision:** Use React/Vite for the future admin application.

**Reason:** Admin UI will be interaction-heavy and benefits from a dedicated client application.

## D-006 — Backend: FastAPI
**Decision:** Use Python FastAPI for the central backend/API.

**Reason:** Python familiarity, clear modular routing, OpenAPI, future AI/tool integration and good API-first design.

## D-007 — Database: PostgreSQL
**Decision:** Use PostgreSQL from local development onward rather than planning a later SQLite-to-PostgreSQL migration.

**Reason:** Avoid database-engine migration and support future structured/JSON content, organization-aware data and advanced access control.

## D-008 — Local orchestration: Docker Compose
**Decision:** Use Docker Compose for the local stack.

**Reason:** Repeatable development environment and easier migration to future VPS deployment.

## D-009 — Central architecture: Modular Monolith
**Decision:** Build the central EVO platform as a modular monolith first, not many microservices.

**Reason:** Lower operational complexity while preserving domain boundaries for future separation.

## D-010 — Services are data by default
**Decision:** Normal new EVO services should be created through the service/catalog system, not by adding new code modules.

**Exception:** A service that contains real application behaviour (e.g. VMS/DDNS) may require a module/integration.

## D-011 — Specialized products remain specialized
**Decision:** EVO VMS and future products such as DDNS should not be copied into the public website backend. They should integrate through APIs/adapters.

## D-012 — Organization-aware foundation
**Decision:** Core schemas should support EVO (Pvt) Ltd and future subsidiaries/business units without forcing full multi-tenant complexity immediately.

## D-013 — Schema-driven content, not Elementor clone
**Decision:** Build a controlled block/component content system rather than a completely free-form page builder.

**Reason:** Preserve design consistency, maintainability and AI/code readability.

## D-014 — Central design system
**Decision:** Shared visual tokens/components should be centralized and reused across public site, admin, portal and future products where appropriate.

## D-015 — AI through controlled tools/APIs
**Decision:** Future AI agents should use documented tools/APIs with permissions and auditability. Avoid unrestricted direct database access.

## D-016 — Documentation is canonical memory
**Decision:** Important project concepts and decisions must live in `docs/`. Chat history is not the canonical source of truth.

**Rule:** Future AI sessions must read `docs/README.md` and referenced files before architectural work.

## D-017 — Do not break current public site during migration
**Decision:** Migrate in checkpoints and preserve a working public version while the new architecture is developed.
