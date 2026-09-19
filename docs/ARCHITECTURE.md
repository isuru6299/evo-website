# EVO Digital Platform — Architecture v1

Status: Agreed target architecture; implementation will be phased.

## 1. Architectural style
Use a **modular monolith** for the central platform first.

Do not start with many microservices. Keep clear module boundaries so individual domains can be separated later if scale or operational needs justify it.

## 2. Target technology stack

### Public website
- Astro
- HTML/CSS
- JavaScript/TypeScript where needed
- Component-driven UI
- Static-first deployment

### Admin application
- React + Vite
- Uses central API

### Backend
- Python FastAPI
- SQLAlchemy ORM
- Alembic migrations
- OpenAPI contract

### Database
- PostgreSQL from local development onward

### Local environment
- Docker Compose

### Production later
- Ubuntu VPS
- Nginx reverse proxy
- Docker/Compose deployment
- PostgreSQL
- HTTPS

### Source control / automation
- GitHub
- GitHub Actions

## 3. Target repository structure

```text
evo-website/
├── apps/
│   ├── web/                 # Astro public website
│   ├── admin/               # React/Vite management UI
│   └── api/                 # FastAPI backend
│       └── app/
├── packages/
│   ├── design-system/
│   ├── api-client/
│   ├── shared-types/
│   └── config/
├── content/
│   ├── services/
│   ├── projects/
│   ├── industries/
│   └── company/
├── infrastructure/
│   ├── docker/
│   ├── nginx/
│   └── compose/
├── docs/
├── scripts/
├── tests/
├── .env.example
├── docker-compose.yml
└── README.md
```

This is a target structure. Do not restructure the live project blindly; migrate in controlled checkpoints.

## 4. Central backend domains

```text
apps/api/app/
├── main.py
├── core/
│   ├── config.py
│   ├── security.py
│   ├── permissions.py
│   └── logging.py
├── modules/
│   ├── identity/
│   ├── organizations/
│   ├── catalog/
│   ├── content/
│   ├── projects/
│   ├── crm/
│   ├── inquiries/
│   ├── media/
│   ├── integrations/
│   └── audit/
├── database/
├── schemas/
└── api/
```

## 5. Domain responsibilities

### identity
Users, authentication, roles, permissions, sessions.

### organizations
EVO (Pvt) Ltd, subsidiaries, future business units, organization ownership and access scope.

### catalog
Services, products/platforms, categories, industries, status, visibility and metadata.

### content
Pages, menus, structured blocks/sections, publishing state and content revisions.

### projects
Engineering projects, customer stories, technologies, industries, results, media and public/private visibility.

### crm
Customers, companies, contacts and relationships.

### inquiries
Website leads, project requests, assignment, status, notes and future conversion to customer/project/quotation.

### media
Images, videos, documents, metadata and storage references.

### integrations
Adapters for VMS, future DDNS, email, notifications and other external/internal systems.

### audit
Who changed what, when and where; especially important for admin and AI operations.

## 6. Service Registry principle
A new normal EVO service should usually be created as data, not code.

Suggested service fields:
- id
- organization_id
- name
- slug
- category
- type
- status
- short_description
- full_description/content reference
- website_visibility
- inquiry_enabled
- customer_portal_enabled
- billing_type
- module_key (nullable)
- sort_order
- metadata

`module_key` is only needed when the service maps to actual application behaviour/integration.

Examples:
- Industrial Automation: catalog service; no dedicated software module required.
- Smart Home: catalog service; no dedicated software module required.
- EVO VMS: catalog product + integration/application behaviour.
- EVO DDNS: catalog product + future integration/application behaviour.

## 7. Organization-aware design
Core business records should be designed with future organization scope in mind.

Potential organization-aware entities:
- services
- products
- projects
- customers
- inquiries
- media
- users/roles
- settings

Do not implement complex multi-tenant SaaS behaviour until needed, but avoid schemas that make organization separation impossible later.

## 8. Public website information architecture
Preferred top-level navigation:
- Solutions
- Industries
- Products & Platforms
- Projects
- Resources
- Company
- Contact

The public site should allow users to discover EVO by solution, industry, product/platform or proven work.

## 9. Schema-driven CMS
Avoid a fully unrestricted page builder.

Use approved block types and variants. Example:

```json
{
  "type": "hero",
  "variant": "engineering-dark",
  "title": "...",
  "subtitle": "...",
  "media": "...",
  "actions": []
}
```

Potential block types:
- hero
- text_image
- service_grid
- project_grid
- stats
- gallery
- video
- timeline
- faq
- cta
- testimonials
- technical_specs
- downloads

Structured content may use PostgreSQL JSONB where appropriate, but critical queryable business data should remain normalized.

## 10. Design system
Create a central design system rather than duplicating style rules.

Core tokens:
- brand colors
- typography
- spacing
- radii
- shadows
- layout widths
- buttons
- cards
- forms
- navigation
- motion
- icon conventions

The same system should be reusable by public site, admin, portal and future EVO web products where suitable.

## 11. Specialized products and integrations
Do not copy specialized application engines into the central website backend.

### EVO VMS example
Central EVO platform may manage:
- customer/account relationship
- subscription/license metadata
- product status
- service plan
- billing hooks later

VMS product remains responsible for:
- cameras
- streams
- recording
- FFmpeg/MediaMTX/WebRTC or equivalent runtime logic

Connect via explicit integration/API boundaries.

### Future DDNS example
Central platform manages product/customer/subscription context; DDNS runtime remains a focused service/module that can later run separately.

## 12. AI-ready architecture
AI agents should operate through documented tools/APIs with permissions.

Preferred pattern:

```text
AI/Codex
  -> approved tool/API
  -> permission check
  -> domain service
  -> database/integration
  -> audit log
```

For high-impact content changes use:
- draft
- review
- publish

Avoid direct unrestricted AI database access.

## 13. Local development
Target local endpoints:
- Public site: `http://localhost:4321`
- Admin: `http://localhost:5173`
- API: `http://localhost:8000`
- API docs: `http://localhost:8000/docs`
- PostgreSQL: `localhost:5432`

Target command:

```bash
docker compose up
```

## 14. Production direction
Future VPS structure:

```text
Internet
  -> Nginx
      -> public web
      -> admin
      -> FastAPI
           -> PostgreSQL
           -> integrations
```

Potential future subdomains:
- `evo.lk`
- `www.evo.lk`
- `admin.evo.lk`
- `portal.evo.lk`
- `api.evo.lk`
- `vms.evo.lk`
- `ddns.evo.lk`
- `status.evo.lk`

These are directional, not all required immediately.

## 15. Secrets and configuration
Never commit real credentials.

Use:
- `.env` locally/production (ignored by Git)
- `.env.example` in repository

Examples:
- DATABASE_URL
- SECRET_KEY
- SMTP settings
- integration URLs/keys

## 16. Migration rule
The current static site is a working prototype and visual reference.

Migration must be staged:
1. checkpoint current working site
2. introduce project structure/docs
3. establish local environment
4. create Astro app
5. port current site section by section
6. verify visual/functional parity
7. switch GitHub Pages build/deployment
8. add API/database/admin in later phases

Do not destroy the current public site in order to create the future architecture.
