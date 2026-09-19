# EVO Digital Platform — AI Context

Status: Canonical project context

## 1. Purpose
EVO must not be designed as a fixed brochure website for today's service list. It is intended to become a long-lived digital platform for EVO (Pvt) Ltd and future EVO businesses, products, services, software platforms and subsidiaries.

The system must be easy to understand, easy to modify and easy for future AI coding agents to continue without relying on old chat history.

## 2. Business direction
EVO may expand into many different areas over time. Current/known directions include engineering, industrial automation, smart living/building automation, networking/building systems, custom machinery and software/platform products such as VMS. Future services may include DDNS or other services not yet known.

Therefore:
- Do not hard-code the platform around only today's services.
- New normal services should be addable through data/content management without requiring a new software module.
- New software products/services may have their own application modules while remaining connected to the central EVO platform.
- The architecture should be organization-aware so future EVO subsidiaries can be represented cleanly.

## 3. Core product idea
Think of this project as **EVO Digital Platform**, not only `evo.lk`.

Long-term ecosystem:
- Public corporate/engineering website
- Internal admin and content management
- Customer/inquiry management
- Project and service management
- Customer portal
- Product/platform integrations such as EVO VMS
- Future modules such as DDNS or other software services
- AI-assisted management through controlled APIs/tools

## 4. User priorities
The owner wants:
- Premium visual quality; better freedom than a typical WordPress/Elementor setup.
- Full ownership and control of the code and data.
- Minimal mandatory recurring software-license costs.
- A structure where any feature, service, page or module can be found quickly.
- Clean module boundaries so a small change does not require touching unrelated code.
- Local development on the owner's PC now; VPS deployment later.
- GitHub used for source control, checkpoints, documentation and Codex/AI collaboration.
- Public website may continue on GitHub Pages while backend remains local during development.
- The current repo should continue rather than starting an unrelated new repository.
- The workflow should resemble the successful EVO VMS workflow: concept -> structured files -> local working version -> tests -> Git checkpoint -> documentation -> Codex handoff.

## 5. Development philosophy
### Data drives the platform
Business content such as services, products, projects and organizations should be structured data where possible.

### Modules add behaviour
A normal new service should usually be a new service record/content entry, not a new Python module. A real software product (for example VMS or DDNS) may require a dedicated module/integration.

### Components control design
Public UI must use reusable components and a central design system rather than duplicated page-specific markup.

### APIs connect systems
Specialized products should integrate with the central platform via explicit APIs/adapters rather than being copied into the website backend.

### Permissions control access
Admin, organization and future customer data must be permission-aware.

### AI uses controlled tools
Future AI agents should use documented APIs/tools and permissions. AI should not receive unrestricted database access. High-impact changes should support draft/review/publish workflows.

## 6. Product separation
Keep the following concepts separate:

### Public website
Marketing, company, solutions, industries, projects, products/platforms, resources and contact/inquiry.

### Central EVO platform
Identity, organizations, service catalog, content, projects, CRM, inquiries, media, settings, integrations and audit history.

### Specialized products
Examples: EVO VMS, future EVO DDNS. These may have their own runtime/application logic and connect to the central EVO platform for accounts, customers, subscriptions, status, billing or management.

Do not merge specialized product engines into the website just because they belong to EVO.

## 7. Public information architecture direction
Preferred top-level model:
- Solutions
- Industries
- Products & Platforms
- Projects
- Resources
- Company
- Contact

This allows the same EVO capability to be discovered by solution, industry, product or project rather than forcing one rigid services list.

## 8. Content management direction
Do not build an unrestricted Elementor clone.

Use a schema-driven content/block system with approved section types such as:
- Hero
- Text + Image
- Service Grid
- Project Grid
- Stats
- Gallery
- Video
- Timeline
- FAQ
- CTA
- Testimonials
- Technical Specs
- Downloads

The goal is editing flexibility without losing design consistency or maintainability.

## 9. Current deployment context
- Repository: `isuru6299/evo-website`
- `evo.lk` is the primary domain.
- The current site started as static HTML/CSS/JavaScript and GitHub Pages is used for public preview/deployment.
- Backend does not need to be public yet.
- Local PC can run the full development stack.
- A VPS will be purchased later and should become the production host without requiring a rewrite.
- Mail DNS records for `evo.lk` must be preserved when future DNS changes are made.

## 10. Cost philosophy
Prefer open-source/self-hosted components where practical.
Target core stack has no Elementor-style mandatory page-builder license:
- Astro
- React/Vite for admin
- Python/FastAPI
- PostgreSQL
- SQLAlchemy/Alembic
- Docker Compose
- Nginx
- Git/GitHub

External costs may still exist for VPS, domain, backups, mail/SMS/WhatsApp APIs, payment gateways, cloud storage or AI API usage.

## 11. AI/Codex working rule
Before changing architecture, a future AI agent should read all files in `docs/` starting with `docs/README.md`.

Do not silently replace an agreed architecture because another framework is fashionable. If a change is justified, explain it and record the new decision in `DECISIONS.md`.
