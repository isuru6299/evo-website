from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_env: str = "development"
    app_name: str = "EVO Digital Platform"
    api_host: str = "0.0.0.0"
    api_port: int = 8000
    secret_key: str = "change-me"
    database_url: str = "postgresql+psycopg://evo:change-me@db:5432/evo"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


@lru_cache
def get_settings() -> Settings:
    return Settings()
