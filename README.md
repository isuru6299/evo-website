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
The previous static test website has been retired from `main` and preserved on the `legacy-static-test` branch. The new platform foundation now includes Astro, React/Vite, FastAPI, PostgreSQL and Docker Compose scaffolding.

## Local target
1. Clone the repository.
2. Copy `.env.example` to `.env`.
3. Run:

```bash
docker compose up --build
```

Expected local services:
- Public web: `http://localhost:4321`
- Admin: `http://localhost:5173`
- API: `http://localhost:8000`
- API docs: `http://localhost:8000/docs`
- Database: PostgreSQL on `localhost:5432`

Before making architectural changes, read `docs/README.md` and the linked canonical documents.
