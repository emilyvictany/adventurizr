import os
from pydantic import BaseModel
from typing import List, Union
from fastapi import HTTPException
from queries.pool import pool
from queries.users import UserQueries








class FavoriteRepository:

    def create_favorite(self, user_id:int, activity_id:int)-> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        INSERT INTO favorites (user_id, activity_id)
                        VALUES (%s, %s)
                        RETURNING user_id, activity_id
                        """,
                        [user_id, activity_id]
                    )
                    conn.commit()
            return True

        except Exception as e:
            return False
