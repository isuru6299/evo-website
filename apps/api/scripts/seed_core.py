from sqlalchemy import select

from app.database.session import SessionLocal
from app.modules.catalog.models import Service, ServiceStatus, ServiceType
from app.modules.organizations.models import Organization

ORGANIZATION = {
    "name": "EVO",
    "slug": "evo",
    "legal_name": "EVO (Pvt) Ltd",
    "is_active": True,
}

SERVICES = [
    {
        "name": "Industrial Automation",
        "slug": "industrial-automation",
        "service_type": ServiceType.SERVICE,
        "status": ServiceStatus.ACTIVE,
        "summary": "PLC, HMI, SCADA, control panels and industrial automation integration.",
        "website_visible": True,
        "inquiry_enabled": True,
        "customer_portal_enabled": False,
        "module_key": None,
    },
    {
        "name": "Smart Living",
        "slug": "smart-living",
        "service_type": ServiceType.SERVICE,
        "status": ServiceStatus.ACTIVE,
        "summary": "Smart home and building automation for lighting, climate, access, scenes and connected living.",
        "website_visible": True,
        "inquiry_enabled": True,
        "customer_portal_enabled": False,
        "module_key": None,
    },
    {
        "name": "Custom Engineering",
        "slug": "custom-engineering",
        "service_type": ServiceType.SERVICE,
        "status": ServiceStatus.ACTIVE,
        "summary": "Custom machinery, engineering modifications, controls and practical technical solutions.",
        "website_visible": True,
        "inquiry_enabled": True,
        "customer_portal_enabled": False,
        "module_key": None,
    },
    {
        "name": "EVO VMS",
        "slug": "evo-vms",
        "service_type": ServiceType.PLATFORM,
        "status": ServiceStatus.BETA,
        "summary": "EVO video management platform for centralized monitoring and future managed video services.",
        "website_visible": False,
        "inquiry_enabled": False,
        "customer_portal_enabled": False,
        "module_key": "vms",
    },
]


def seed() -> None:
    with SessionLocal() as db:
        organization = db.scalar(select(Organization).where(Organization.slug == ORGANIZATION["slug"]))
        if organization is None:
            organization = Organization(**ORGANIZATION)
            db.add(organization)
            db.flush()
        else:
            for key, value in ORGANIZATION.items():
                setattr(organization, key, value)

        for item in SERVICES:
            service = db.scalar(select(Service).where(Service.slug == item["slug"]))
            values = {**item, "organization_id": organization.id}
            if service is None:
                db.add(Service(**values))
            else:
                for key, value in values.items():
                    setattr(service, key, value)

        db.commit()

    print(f"Seed complete: {ORGANIZATION['legal_name']} + {len(SERVICES)} catalog items")


if __name__ == "__main__":
    seed()
