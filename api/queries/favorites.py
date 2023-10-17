from typing import List, Union
from queries.pool import pool
from queries.activities import ActivityOut


class FavoriteRepository:
    def create_favorite(self, user_id: int, activity_id: int) -> bool:
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
        except Exception:
            return False

    def get_single_user_favorites(self, user_id: int) -> List[ActivityOut]:
        user_favorites = []
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
                    records = db.fetchall()
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
        except Exception:
            {"message": "no favorite activities!"}

    def delete(self, user_id: int, activity_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM favorites
                        WHERE user_id = %s
                            AND activity_id = %s
                        """,
                        [user_id, activity_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def get_all_favorites(self) -> Union[List[ActivityOut], None]:
        all_favorites = []
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                        SELECT
                            users.id AS user_id,
                            activities.id AS activity_id,
                            activities.title AS activity_title,
                            activities.participants AS activity_participants,
                            activities.environment AS activity_environment,
                            activities.category AS activity_category,
                            activities.published AS activity_published,
                            favorites.user_id AS liked_by_user_id
                        FROM favorites
                        JOIN users ON favorites.user_id = users.id
                        JOIN activities ON favorites.activity_id = activities.id;
                    """,
                )
                favorites = db.fetchall()

            for record in favorites:
                activity = ActivityOut(
                    id=record[1],
                    title=record[2],
                    participants=record[3],
                    environment=record[4],
                    category=record[5],
                    published=record[6],
                    user_id=record[7]
                )
                all_favorites.append(activity)

            return all_favorites
