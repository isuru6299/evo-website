import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict


class OrganizationRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    name: str
    slug: str
    legal_name: str | None
    is_active: bool
    created_at: datetime
    updated_at: datetime
