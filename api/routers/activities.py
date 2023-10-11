from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from typing import Union
from queries.activities import (
    ActivityIn, ActivityRepository,
    ActivityOut, Error
)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator


router = APIRouter()


@router.post("/api/activities", response_model=Union[ActivityOut, Error])
def create_activity(
    activity: ActivityIn,
    response: Response,
    repo: ActivityRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    user_id = account_data["id"]
    try:
        return repo.create_activity(activity, user_id)
    except Exception as e:
        error_detail = str(e)
        raise HTTPException(status_code=response, detail=error_detail)
