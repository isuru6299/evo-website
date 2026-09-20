import uuid
from datetime import datetime
from enum import Enum

from sqlalchemy import Boolean, DateTime, Enum as SqlEnum, ForeignKey, String, Text, func
from sqlalchemy.dialects.postgresql import JSONB, UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base


class ServiceType(str, Enum):
    SERVICE = "service"
    PRODUCT = "product"
    PLATFORM = "platform"


class ServiceStatus(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"
    INACTIVE = "inactive"
    BETA = "beta"


class Service(Base):
    __tablename__ = "services"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    organization_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("organizations.id", ondelete="CASCADE"), nullable=False, index=True
    )
    name: Mapped[str] = mapped_column(String(160), nullable=False)
    slug: Mapped[str] = mapped_column(String(120), nullable=False, unique=True, index=True)
    service_type: Mapped[ServiceType] = mapped_column(SqlEnum(ServiceType, name="service_type"), nullable=False)
    status: Mapped[ServiceStatus] = mapped_column(
        SqlEnum(ServiceStatus, name="service_status"), nullable=False, default=ServiceStatus.DRAFT
    )
    summary: Mapped[str | None] = mapped_column(Text, nullable=True)
    website_visible: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)
    inquiry_enabled: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    customer_portal_enabled: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)
    module_key: Mapped[str | None] = mapped_column(String(120), nullable=True)
    metadata_json: Mapped[dict] = mapped_column(JSONB, nullable=False, default=dict)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now())

    organization = relationship("Organization")
