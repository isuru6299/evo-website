# EVO Project Data

This folder stores the canonical structured record for real EVO projects.

Rules:
- one real project = one JSON file,
- filename format: `<year>-<project-slug>.json`,
- check `index.json` before creating a new record,
- update an existing project when new facts/photos arrive,
- do not publish archived projects automatically,
- keep uncertain facts in `verification.needs_confirmation`,
- use `_template.json` as the field reference.

Project media prepared for the public website should later live under:
`apps/web/public/projects/<project-slug>/`

See `docs/PROJECT_ARCHIVE.md` for the full intake workflow.
