from fastapi import (Depends, HTTPException, status, Response, APIRouter, Request)
from jwtdown_fastapi.authentication import Token, Optional, Union
from authenticator import authenticator
from pydantic import BaseModel
from typing import List
from queries.users import (
    UserIn,
    UserOut,
    UserOutWithPassword,
    UserQueries,
    Error,
    DuplicateAccountError,
)


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: UserOut


class HttpError(BaseModel):
    detail: str


router = APIRouter()


@router.get("/api/protected", response_model=bool)
async def get_protected(
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return True


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: UserOut = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    print(f'/token account = {str(account)}')
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.post("/api/users", tags=["users"], response_model=AccountToken | HttpError)
async def create_user(
    user: UserIn,
    request: Request,
    response: Response,
    accounts: UserQueries = Depends(),
):
    hashed_password = authenticator.hash_password(user.password)
    try:
        new_user = accounts.create_user(user, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create a user account with those credentials",
        )
    form = AccountForm(username=user.username, password=user.password)
    print(form)
    print(request.json())
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=new_user, **token.dict())


@router.delete("/api/users/{user_id}", tags=["users"], response_model=bool)
def delete_user(
    user_id: int,
    repo: UserQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> bool:
    return repo.delete(user_id)


@router.get("/api/users/{user_id}", tags=["users"], response_model=Optional[UserOut])
def get_one(
    user_id: int,
    response: Response,
    account: UserQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> UserOut:
    user = account.get_one(user_id)
    if user is None:
        response.status_code = 404
    return user


@router.put("/api/users/{user_id}", tags=["users"], response_model=Union[UserOutWithPassword, Error])
def update_user(
    user_id: int,
    info: UserIn,
    response: Response,
    repo: UserQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> UserOutWithPassword:
    user_id = account_data["id"]
    response.status_code = 200
    hashed_password = authenticator.hash_password(info.password)
    return repo.update(user_id, info, hashed_password)


@router.get("/api/users", tags=["users"], response_model=Union[Error, List[UserOut]])
def get_all(
    account: UserQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    try:
        return account.get_all()
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Could not get all users"
        )
