# EVO Digital Platform

This repository is the long-term digital platform for EVO (Pvt) Ltd.

## Architecture
- `apps/web` — public EVO website (Astro)
- `apps/admin` — internal management UI (React + Vite)
- `apps/api` — backend API (Python FastAPI)
- `packages` — shared design system, types and configuration
- `content` — structured content/data sources used by the platform
- `infrastructure` — Docker/Nginx/deployment configuration
- `docs` — canonical project memory, architecture, decisions and AI/Codex handoff
- `scripts` — development/maintenance scripts
- `tests` — integration and system tests

## Current state
The previous static test website has been retired. Development now continues on the modular EVO Digital Platform architecture.

Before making architectural changes, read `docs/README.md` and the linked canonical documents.
