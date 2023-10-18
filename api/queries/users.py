import os
from psycopg_pool import ConnectionPool
from pydantic import BaseModel
from typing import Union, Optional

pool = ConnectionPool(conninfo=os.environ.get("DATABASE_URL"))


class DuplicateAccountError(ValueError):
    pass


class Error(BaseModel):
    message: str


class UserIn(BaseModel):
    first_name: str
    last_name: str
    username: str
    password: str


class UserOut(BaseModel):
    id: int
    email: str
    first_name: str
    last_name: str


class UserOutWithPassword(UserOut):
    hashed_password: str


class UserQueries:
    def get_user(self, email: str) -> UserOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT *
                    FROM users
                    WHERE email = %s
                    """,
                    [email],
                )
                account = result.fetchone()
                print(f'fetched account for email {email} = {str(account)}')
                if account is None:
                    return None
                return UserOutWithPassword(
                    id=account[0],
                    first_name=account[1],
                    last_name=account[2],
                    email=account[3],
                    hashed_password=account[4],
                )

    def create_user(
            self,
            info: UserIn,
            hashed_password: str
    ) -> UserOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                        INSERT INTO users
                            (
                                first_name,
                                last_name,
                                email,
                                hashed_password
                            )
                        VALUES
                            (%s, %s, %s, %s)
                        RETURNING *;
                    """,
                    [
                        info.first_name,
                        info.last_name,
                        info.username,
                        hashed_password,
                    ],
                )
                account = result.fetchone()
                print(account[4])
                return UserOutWithPassword(
                    id=account[0],
                    first_name=account[1],
                    last_name=account[2],
                    email=account[3],
                    hashed_password=account[4],
                )

    def delete(self, user_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM users
                        WHERE id=%s
                        """,
                        [user_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def get_one(self, user_id: int) -> Optional[UserOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id,
                            email,
                            first_name,
                            last_name
                        FROM users
                        WHERE id=%s
                        """,
                        [user_id]
                    )
                    record = result.fetchone()
                    return self.record_to_user_out(record)
        except Exception:
            return {"message": "could not get user"}

    def record_to_user_out(self, record):
        return UserOut(
            id=record[0],
            email=record[1],
            first_name=record[2],
            last_name=record[3],
        )

    def update(self,
               user_id: int,
               info: UserIn,
               hashed_password: str) -> Union[UserOutWithPassword, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE users
                        SET first_name=%s,
                            last_name=%s,
                            email=%s,
                            hashed_password=%s
                        WHERE id= %s
                        """,
                        [
                            info.first_name,
                            info.last_name,
                            info.email,
                            hashed_password,
                            user_id
                        ]
                    )
                    return self.user_in_to_out(user_id, info, hashed_password)
        except Exception as e:
            return {"message": f'could not update {e}'}

    def user_in_to_out(self, id: int, info: UserIn, hashed_password: str):
        old_data = info.dict()
        return UserOutWithPassword(id=id,
                                   **old_data,
                                   hashed_password=hashed_password)
