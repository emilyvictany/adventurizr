# authenticator.py
import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.users import UserQueries, UserOut, UserOutWithPassword


class UserAuthenticator(Authenticator):
    async def get_account_data(
        self,
        email: str,
        accounts: UserQueries,
    ):
        return accounts.get_user(email)

    def get_account_getter(
        self,
        accounts: UserQueries = Depends(),
    ):
        return accounts

    def get_hashed_password(self, account: UserOutWithPassword):
        return account.hashed_password

    def get_user_account_for_cookie(self, account: UserOut):
        return account.email, UserOut(**account.dict())


authenticator = UserAuthenticator(os.environ["SIGNING_KEY"])
