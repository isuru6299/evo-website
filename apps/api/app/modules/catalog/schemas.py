import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict

from app.modules.catalog.models import ServiceStatus, ServiceType


class ServiceRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    organization_id: uuid.UUID
    name: str
    slug: str
    service_type: ServiceType
    status: ServiceStatus
    summary: str | None
    website_visible: bool
    inquiry_enabled: bool
    customer_portal_enabled: bool
    module_key: str | None
    metadata_json: dict
    created_at: datetime
    updated_at: datetime
