from fastapi import APIRouter

from app.modules.catalog.router import router as catalog_router
from app.modules.organizations.router import router as organizations_router

api_v1_router = APIRouter(prefix="/api/v1")
api_v1_router.include_router(organizations_router)
api_v1_router.include_router(catalog_router)
