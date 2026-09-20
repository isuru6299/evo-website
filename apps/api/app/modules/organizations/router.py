from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.modules.organizations.models import Organization
from app.modules.organizations.schemas import OrganizationRead

router = APIRouter(prefix="/organizations", tags=["organizations"])
DbSession = Annotated[Session, Depends(get_db)]


@router.get("", response_model=list[OrganizationRead])
def list_organizations(db: DbSession):
    statement = select(Organization).order_by(Organization.name)
    return list(db.scalars(statement).all())


@router.get("/{slug}", response_model=OrganizationRead)
def get_organization(slug: str, db: DbSession):
    organization = db.scalar(select(Organization).where(Organization.slug == slug))
    if organization is None:
        raise HTTPException(status_code=404, detail="Organization not found")
    return organization
