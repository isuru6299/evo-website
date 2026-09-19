from fastapi import FastAPI
from sqlalchemy import text

from app.core.config import get_settings
from app.database.session import engine

settings = get_settings()
app = FastAPI(title=settings.app_name, version="0.1.0")


@app.get("/")
def root():
    return {"name": settings.app_name, "status": "running", "version": "0.1.0"}


@app.get("/health")
def health():
    return {"status": "ok", "service": "api"}


@app.get("/health/db")
def health_db():
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))
    return {"status": "ok", "service": "postgresql"}
