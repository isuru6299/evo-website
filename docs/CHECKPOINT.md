# EVO Digital Platform — Current Checkpoint

Checkpoint: **Local Foundation Verified**

Verified on Isuru's Windows development PC on 2026-09-20.

## Completed
- Old static test website removed from `main`.
- Old prototype preserved on `legacy-static-test`.
- Canonical `docs/` project memory established.
- Root Node workspace added.
- Astro public web scaffold created in `apps/web`.
- React + Vite admin scaffold created in `apps/admin`.
- FastAPI backend scaffold created in `apps/api`.
- SQLAlchemy/PostgreSQL connection foundation added.
- `/health` and `/health/db` endpoints added.
- PostgreSQL, web, admin and API wired through `docker-compose.yml`.
- `.env.example` contains development configuration placeholders only; no real secrets are committed.
- Repository cloned to `C:\EVO\Development\evo-website`.
- WSL2 and Docker Desktop installed and working.
- Local `.env` created from `.env.example`.
- `docker compose up --build` completed successfully.
- `docker compose ps` verified all four services are running.
- PostgreSQL container verified healthy.

## Local verification results
- `http://localhost:4321` — Astro public app: verified.
- `http://localhost:5173` — React admin app: verified.
- `http://localhost:8000` — FastAPI root: verified, platform status running.
- `http://localhost:8000/health/db` — PostgreSQL connectivity: verified `status: ok`.
- `http://localhost:8000/docs` — OpenAPI documentation: verified.

## Current local stack
- Web: Astro
- Admin: React + Vite
- API: FastAPI
- Database: PostgreSQL 17
- Runtime/orchestration: Docker Desktop + Docker Compose on Windows/WSL2

## Next action
Proceed from infrastructure validation into the first real platform layer:
1. establish production design-system tokens and shared UI conventions,
2. configure Alembic migrations,
3. define the first core database models, beginning with organizations and the service/catalog registry,
4. keep public website work section-by-section and checkpoint approved states.

Do not treat this as production deployment; this checkpoint verifies the local development foundation only.
