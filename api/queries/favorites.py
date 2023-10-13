import os
from typing import List, Union
from fastapi import HTTPException
from queries.pool import pool
from queries.activities import ActivityOut





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


    def get_single_user_favorites(self, user_id:int)-> List[ActivityOut]:
        user_favorites=[]
        try:
            with pool.connection() as conn:
                    with conn.cursor() as db:
                        db.execute(
                            """
                            SELECT
                                activities.id,
                                activities.title,
                                activities.participants,
                                activities.environment,
                                activities.category,
                                activities.published,
                                activities.user_id
                            FROM activities, favorites
                            WHERE (favorites.user_id=%s
                                AND favorites.activity_id = activities.id)

                            """,
                            [user_id]

                        )
                        records=db.fetchall()

                        for record in records:
                            user_favorites.append(
                                ActivityOut(
                                    id=record[0],
                                    title=record[1],
                                    participants=record[2],
                                    environment=record[3],
                                    category=record[4],
                                    published=record[5],
                                    user_id=record[6],

                                )
                            )
                        return user_favorites
        except Exception as e:
            {"message": "no favorited activities!"}
