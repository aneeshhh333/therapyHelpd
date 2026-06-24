from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import json
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime, timezone
import uuid


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# JSON-file-based storage for contact submissions (no DB)
SUBMISSIONS_DIR = ROOT_DIR / 'submissions'
SUBMISSIONS_DIR.mkdir(exist_ok=True)
SUBMISSIONS_FILE = SUBMISSIONS_DIR / 'contact.jsonl'

app = FastAPI()
api_router = APIRouter(prefix="/api")


class ContactSubmission(BaseModel):
    firstName: str = Field(min_length=1, max_length=100)
    lastName: str = Field(min_length=1, max_length=100)
    city: str = Field(min_length=1, max_length=100)
    state: str = Field(min_length=1, max_length=100)
    email: EmailStr
    message: Optional[str] = Field(default=None, max_length=2000)


@api_router.get("/")
async def root():
    return {"message": "Therapyhelp API", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy", "service": "therapyhelp-api"}


@api_router.post("/contact")
async def create_contact(payload: ContactSubmission):
    record = {
        "id": str(uuid.uuid4()),
        "submitted_at": datetime.now(timezone.utc).isoformat(),
        **payload.model_dump(),
    }
    try:
        with SUBMISSIONS_FILE.open("a", encoding="utf-8") as f:
            f.write(json.dumps(record) + "\n")
    except OSError as e:
        raise HTTPException(status_code=500, detail=f"Could not save submission: {e}")
    logging.info("New contact submission: %s %s <%s>",
                 record['firstName'], record['lastName'], record['email'])
    return {"success": True, "id": record["id"], "message": "Thank you. We'll be in touch shortly."}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
