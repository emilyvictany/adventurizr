from fastapi import (
    Depends,
    HTTPException,
    APIRouter,
)
from typing import List, Union
from authenticator import authenticator
from queries.favorites import FavoriteRepository
from queries.activities import ActivityOut


router = APIRouter()


@router.post(
        "/api/favorites/{user_id}/{activity_id}",
        tags=["favorites"],
        response_model=bool
        )
def create_favorite(
    user_id: int,
    activity_id: int,
    repo: FavoriteRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    user_id = account_data["id"]

    return repo.create_favorite(user_id, activity_id)


@router.get(
        "/api/favorites/{user_id}",
        tags=["favorites"],
        response_model=List[ActivityOut]
        )
def get_user_favorites(
    user_id: int,
    repo: FavoriteRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    user_id = account_data["id"]

    return repo.get_single_user_favorites(user_id)


@router.delete(
        "/api/favorites/{activity_id}",
        tags=["favorites"],
        response_model=bool
        )
def delete_favorite(
    user_id: int,
    activity_id: int,
    repo: FavoriteRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> bool:
    return repo.delete(user_id, activity_id)


@router.get(
        "/api/favorites/",
        tags=["favorites"],
        response_model=List[ActivityOut]
        )
def get_all(
    repo: FavoriteRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    try:
        return repo.get_all_favorites()
    except Exception as e:
        print(e)
        raise HTTPException(status_code=404, detail="No favorites found")
