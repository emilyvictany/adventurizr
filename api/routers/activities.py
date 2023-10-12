from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from typing import Union, List
from queries.activities import (
    ActivityIn, ActivityRepository,
    ActivityOut, Error
)
from jwtdown_fastapi.authentication import Token, Optional
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


@router.get("/activities", response_model=Union[Error, List[ActivityOut]])
def get_all(
    repo: ActivityRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    try:
        return repo.get_all()
    except Exception as e:
        print(e)
        raise {"message": "Could not get all activities"}


@router.get("/activities/{activity_id}", response_model=Optional[ActivityOut])
def get_one(
    activity_id: int,
    repo: ActivityRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> ActivityOut:
    try:
        record = repo.get_one(activity_id)
        return record
    except Exception as e:
        print(e)
        raise {"message": "Could not get that activity"}
