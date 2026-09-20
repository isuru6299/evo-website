# EVO Public Website v1 — Route Map

Status: first full multi-page build assembled on 2026-09-21. Visual/content refinement is still expected.

## Core routes
- `/` — Homepage
- `/solutions` — Solutions overview
- `/industries` — Industries overview
- `/projects` — Project portfolio overview
- `/company` — Company / About EVO
- `/contact` — Contact / project inquiry
- `/404` — Not-found page

## Solution detail routes
- `/solutions/industrial-automation`
- `/solutions/smart-living`
- `/solutions/custom-engineering`
- `/solutions/systems-integrations`

## Shared public UI
- `apps/web/src/components/SiteHeader.astro`
- `apps/web/src/components/Footer.astro`
- `apps/web/src/layouts/InnerLayout.astro`
- `apps/web/src/styles/site-shell.css`
- `apps/web/src/styles/inner-pages.css`

## Homepage locked areas
The approved homepage Hero and Solutions visual direction remain locked unless explicitly requested. Navigation targets were changed from section anchors to the new public routes without intentionally changing the approved visual treatment.

## Current implementation notes
- All new inner pages share the EVO bright spatial visual language.
- Desktop and responsive layouts are included as a first pass.
- A compact mobile navigation menu is available below the desktop breakpoint.
- Contact form is intentionally a first-pass `mailto:` workflow until the backend inquiry module is connected.
- Project detail pages are not yet individual routes; `/projects` is the portfolio overview for v1.

## Next review pass
1. Run the full Astro site locally.
2. Check every route for layout/asset issues.
3. Refine copy and project facts.
4. Review tablet/mobile breakpoints.
5. Replace placeholder/first-pass visuals where needed.
6. Connect inquiry data to the FastAPI/PostgreSQL backend.
7. Add production SEO/deployment configuration after visual approval.
