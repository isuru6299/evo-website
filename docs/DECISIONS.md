# EVO Digital Platform — Decision Log

This file records architectural decisions so future sessions do not accidentally reverse them.

## D-001 — Treat project as EVO Digital Platform
**Decision:** The project is not only a brochure website. It is the foundation for EVO's public website, internal management, future portals, services and integrations.

**Reason:** EVO may expand into many engineering, technology and software directions.

## D-002 — Continue current repository
**Decision:** Continue using `isuru6299/evo-website` rather than starting a disconnected repository.

**Reason:** Preserve existing work and repository history.

## D-003 — Local development first, VPS later
**Decision:** Develop the full future stack on the owner's PC. Keep backend private/local for now. Deploy to a VPS later without redesigning the architecture.

## D-004 — Public frontend: Astro
**Decision:** Use Astro for the public site.

**Reason:** Component structure, static-first performance, strong SEO, minimal client-side JavaScript by default, good static deployment compatibility and easy future VPS deployment.

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

## D-017 — Preserve a recoverable prototype during migration
**Original decision:** Do not lose the previous test website while restructuring.

## D-018 — Retire the static prototype from `main`
**Decision:** The owner confirmed the existing static website was only a test and did not need to remain live. It was removed from `main` so the repository can move directly to the EVO Digital Platform structure.

**Safety:** The previous static prototype is preserved on the `legacy-static-test` branch. This decision supersedes D-017's requirement to keep the old prototype on `main`, while retaining recoverability.

## D-019 — Public visual direction: light premium spatial system
**Decision:** The default public EVO website direction is a light/white premium interface rather than a full dark theme.

**Visual language:**
- White and very light warm/neutral backgrounds with generous negative space.
- Strong near-black typography with EVO orange used selectively for emphasis, CTAs and technical accents.
- Rounded cards/panels with soft borders and soft realistic shadows; avoid heavy outlines and dark glass everywhere.
- Prefer asymmetrical, staggered and layered compositions over repetitive equal-size card grids.
- Cards may vary in height/width and visually overlap or step forward/back to create depth.
- Use product/engineering visuals, devices, control interfaces, machinery details or refined 3D/photoreal objects as focal elements inside cards.
- Allow objects/visuals to sit low in the card, crop naturally, or visually break the expected grid so the composition feels designed rather than templated.
- Use subtle translucency/blur only where it adds depth; do not make glassmorphism the dominant style.
- Keep UI clean and modern, but avoid generic SaaS-dashboard aesthetics.
- The approved hero may keep its realistic smart-living + industrial image with a light fade/overlay because it communicates EVO immediately.
- Dark backgrounds may still be used selectively for contrast-heavy media, industrial detail, footer, or special feature blocks, but not as the default whole-site theme.

**Reference preference:** Of the reviewed inspiration images, the strongest reference is the fourth image: tall staggered white cards with different heights, minimal text, strong object imagery near the bottom, and a deliberately uneven spatial rhythm. The first three references reinforce the preference for clean white UI, floating/layered modules, soft depth and restrained accent color.

**Reason:** This direction feels more distinctive, premium and approachable for a company spanning smart living, industrial automation and custom engineering, while giving EVO room to showcase real projects and products without making the whole site feel like a dark technology template.

## D-020 — Final public visual reference locked
**Decision:** Lock the second approved generated concept as the primary visual reference for EVO's public website direction.

**Primary composition:**
- Light/white premium canvas.
- Large bold black headline with selective EVO orange emphasis.
- Hero built around a sculptural smart-home model and industrial robot, not a full-bleed photographic background.
- Floating rounded information cards arranged spatially around the main 3D objects.
- Clean white platform/pedestal forms with soft shadows and subtle depth.
- Solutions below the hero use object-led cards with restrained copy and generous negative space.
- Orange remains the main action/engineering accent.

**Brand color extension:**
- The two green tones from the EVO leaf/logo are part of the approved theme and may be used selectively as a secondary accent family.
- Green should support ideas such as smart living, sustainability, environment, energy efficiency, connected spaces and positive system status.
- Green must not compete with orange as the primary accent; it should appear as a restrained complementary signal in icons, micro-lines, status indicators, leaves, small highlights or selected cards.
- Avoid turning the interface into an orange-and-green multicolor theme. The base remains white + near-black + EVO orange, with the logo greens used intentionally.

**Style rule:** Future public-site sections should feel like one visual system derived from this reference: premium, bright, spatial, minimal, object-led, slightly futuristic, and distinctive rather than generic corporate/SaaS.

**Implementation note:** The generated reference is a design target, not a single flattened website image. Build the real page with HTML/CSS/components and separate visual assets so it remains responsive, editable, accessible and maintainable.

## D-021 — Hero headline locked
**Decision:** Use `Smarter Systems for a Brighter Tomorrow` as the primary public hero headline.

**Emphasis rule:** Keep `Smarter Systems for a` in near-black and use EVO orange for `Brighter Tomorrow`.

**Reason:** The phrase is broader than the earlier smart-living/industrial-only wording and better supports EVO's long-term positioning across automation, smart living, custom engineering, software platforms and future subsidiaries while still fitting the approved visual direction.

## D-022 — Hero implementation must not drift from the approved reference
**Decision:** Preserve the approved simple hero composition and do not add extra cards, decorations, copy blocks or visual concepts unless explicitly approved.

**Implementation rules:**
- The smart-home + industrial robot visual must render fully without intentional cropping on normal desktop widths.
- Use `object-fit: contain` style behaviour for the hero artwork and avoid negative margins or overscaling that cut off the artwork.
- Keep the left headline visually strong but not oversized enough to overpower or push the artwork out of balance.
- Preserve the white/light canvas, black typography, orange primary accent and restrained EVO-green secondary accents.
- The hero artwork and HTML content must remain separate so text stays editable and responsive.
- Prefer proportion, spacing and clarity over adding more visual elements.

**Reason:** The approved reference was chosen specifically because it is simple, brilliant and balanced. Implementation should reproduce that character rather than reinterpret it.

## D-023 — Bright clean website background locked
**Decision:** Lock the public website base background to the bright, clean cool-white studio tone used around the approved hero artwork. The design token is `#f5f8fa`.

**Rules:**
- Do not move the public site back toward dark, warm-grey or visibly tinted page backgrounds unless explicitly approved.
- Hero artwork edges should visually dissolve into the page background rather than appear as a rectangular image/card.
- Preserve the full hero artwork; use CSS edge feathering/blending instead of cropping the artwork to hide its background.
- White elevated cards may remain brighter than the base canvas to preserve depth.
- EVO orange stays the primary accent; logo greens remain restrained secondary accents.

**Reason:** The owner specifically prefers the bright clean studio background visible inside the approved hero artwork and wants the surrounding website to feel like the same continuous canvas.

## D-024 — Final hero implementation locked
**Decision:** The locally reviewed hero version approved on 2026-09-21 is the final baseline for the public homepage hero.

**Locked details:**
- Headline: `Smarter Systems for a Brighter Tomorrow` with orange emphasis on `Brighter Tomorrow`.
- Bright studio canvas using the locked `#f5f8fa` website background.
- EVO logo/header/navigation treatment as currently implemented.
- Smart-home + industrial robot artwork remains the hero focal visual.
- Artwork uses one shared artwork frame so zoom, slight leveling rotation and all four edge fades stay synchronized.
- Four-edge fade must follow the artwork frame and dissolve into the page canvas without visibly cutting into the subject.
- Current desktop visual balance between copy and artwork is approved.
- Do not rework the hero unless a future explicit request asks for a change.

**Next public design task:** Continue with the Solutions section while preserving the same bright spatial design language.
