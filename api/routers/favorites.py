from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from queries.favorites import FavoriteRepository
from queries.users import UserOut
from queries.activities import ActivityOut


from pydantic import BaseModel


router = APIRouter()



@router.post("/api/favorites/{user_id}/{activity_id}", response_model=bool)
def create_favorite(
    user_id:int,
    activity_id:int,
    repo: FavoriteRepository=Depends(),
    account_data: dict=Depends(authenticator.get_current_account_data),
):
    user_id=account_data["id"]

    return repo.create_favorite(user_id, activity_id)
