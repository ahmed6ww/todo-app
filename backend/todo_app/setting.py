from starlette.config import Config
from starlette.datastructures import Secret

# Load configuration from .env file
config = Config(".env")

# Retrieve DATABASE_URL from environment variables
DATABASE_URL = config("DATABASE_URL", cast=Secret)
