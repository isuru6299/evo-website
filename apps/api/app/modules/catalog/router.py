from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.modules.catalog.models import Service
from app.modules.catalog.schemas import ServiceRead

router = APIRouter(prefix="/services", tags=["services"])
DbSession = Annotated[Session, Depends(get_db)]


@router.get("", response_model=list[ServiceRead])
def list_services(db: DbSession):
    statement = select(Service).order_by(Service.name)
    return list(db.scalars(statement).all())


@router.get("/{slug}", response_model=ServiceRead)
def get_service(slug: str, db: DbSession):
    service = db.scalar(select(Service).where(Service.slug == slug))
    if service is None:
        raise HTTPException(status_code=404, detail="Service not found")
    return service
