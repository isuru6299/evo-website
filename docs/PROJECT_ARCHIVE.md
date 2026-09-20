# EVO Project Archive — Intake & Canonical Record Workflow

This document defines how past and future EVO projects are captured from chat, photos, notes and field memory without depending on one long conversation.

## Purpose
The project archive is the long-term source of truth for real completed work. A future ChatGPT/Codex/AI session should be able to receive a short project description plus photos, analyze them, and create or update one canonical project record for later website use.

## Core rule
One real project = one canonical JSON record in `data/projects/`.

Do not create duplicate records for the same project. Before adding a new project, check `data/projects/index.json` and existing project files for a likely match.

If a future chat contains extra photos or new facts for an existing project, update that project instead of creating another project.

## User intake can be simple
The owner does not need to fill a long form. A message like this is enough to start:

> 2014 project. Client ABC Factory. Old control system was replaced. PLC, sensors and panel work were done. Photos attached.

The AI should then:
1. inspect the uploaded photos,
2. preserve facts stated by the owner,
3. infer only visual facts that are reasonably visible in the photos,
4. never invent client names, model numbers, project results or dates,
5. ask only for important missing facts that materially affect the record,
6. create/update the canonical project JSON,
7. update `data/projects/index.json`,
8. prepare website-ready copy and media roles without publishing anything automatically.

## Canonical data location
- Project records: `data/projects/<year>-<project-slug>.json`
- Project index: `data/projects/index.json`
- Field/template reference: `data/projects/_template.json`
- Public web media later: `apps/web/public/projects/<project-slug>/`

## Record principles
Each project record should separate confirmed facts from items needing confirmation.

Recommended information:
- project title
- year / approximate date
- client and whether the client name may be published
- location and whether it may be published
- industry
- categories / disciplines
- project summary
- original problem or requirement
- EVO scope of work
- systems, technologies and equipment used
- result/outcome, only when known
- team / partner information when relevant
- website short copy
- case-study copy
- tags
- media list and photo roles
- confirmation notes

## Photo workflow
Uploaded photos are evidence first, website assets second.

For each useful photo, assign a role such as:
- `cover`
- `before`
- `after`
- `machine`
- `panel`
- `installation`
- `detail`
- `process`
- `team`
- `result`

The AI may describe visible hardware or conditions, but must not guess exact brands/models unless they are readable or confirmed by the owner.

Original images should not be overwritten. When a project is later prepared for the public website, create web-optimized copies under `apps/web/public/projects/<project-slug>/` and record their paths in the project JSON.

## Publishing safety
A project being archived does not mean it is approved for public display.

Default values should be conservative:
- `website.publish = false`
- client publishing permission = `unknown`
- location publishing permission = `unknown`

Only publish client/location details when the owner explicitly approves them or they are already clearly public and the owner confirms use.

## Future-chat startup instruction
When starting a new chat for project intake, the owner can paste:

> EVO Project Archive. I will send past and future projects one by one with rough details and photos. For every project, analyze the material, create or update the canonical record in the EVO GitHub repo, keep confirmed facts separate from assumptions, ask only for important missing information, and prepare it for future website use. Read `docs/PROJECT_ARCHIVE.md` and `data/projects/index.json` before processing each project.

## Website integration direction
The current website project cards are temporary/first-pass content. Later, the public Projects section and detail pages should read from this archive or from the future database/admin layer, so real projects can replace placeholders without rebuilding the whole website.

## Status
Project Archive structure established on 2026-09-21. Real project ingestion can now happen from any future chat that has access to this repository.
