from pydantic import BaseModel
from typing import Optional
from queries.pool import pool


class Error(BaseModel):
    message: str


class ActivityIn(BaseModel):
    title: str
    participants: str
    environment: str
    category: str
    published: bool
    user_id: Optional[int]


class ActivityOut(BaseModel):
    id: int
    title: str
    participants: str
    environment: str
    category: str
    published: bool
    user_id: Optional[int]


class ActivityRepository:
    def create_activity(self, activity: ActivityIn, user_id: int) -> ActivityOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO activities
                        (title, participants, environment,
                        category, published, user_id)
                    VALUES
                        (%s, %s, %s, %s, %s, %s)
                    RETURNING id
                    """,
                    [
                        activity.title, activity.participants,
                        activity.category, activity.environment,
                        activity.published, user_id
                    ]
                )
                id = result.fetchone()[0]
                old_data = activity.dict()
                return ActivityOut(id=id, **old_data)
