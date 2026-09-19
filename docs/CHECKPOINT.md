# EVO Digital Platform — Current Checkpoint

Checkpoint: **Platform Scaffold Created**

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

## Not yet verified
The stack has **not yet been run on Isuru's local Windows development PC**. Do not call this checkpoint production-ready or fully tested until local verification is completed.

## Next action
Clone `isuru6299/evo-website` to the development PC, copy `.env.example` to `.env`, then run:

```bash
docker compose up --build
```

Verify:
- `http://localhost:4321` — Astro public app
- `http://localhost:5173` — React admin app
- `http://localhost:8000/health` — FastAPI health
- `http://localhost:8000/health/db` — PostgreSQL connectivity
- `http://localhost:8000/docs` — OpenAPI docs

Only after all checks pass should the checkpoint be renamed **Local Foundation Verified** and development continue into database models, design system and final public website work.
