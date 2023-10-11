from pydantic import BaseModel
from typing import Optional, List, Union
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

    def get_all(self) -> Union[Error, List[ActivityOut]]:
        # connect the database
        with pool.connection() as conn:
            # get a cursor (something to run SQL with)
            with conn.cursor() as db:
                # run our SELECT statement
                result = db.execute(
                    """
                    SELECT id, title, participants, environment, category, published, user_id
                    FROM activities
                    ORDER BY id;
                    """
                )
                result = []
                for record in db:
                    activity = ActivityOut(
                        id=record[0],
                        title=record[1],
                        participants=record[2],
                        environment=record[3],
                        category=record[4],
                        published=record[5],
                        user_id=record[6],
                    )
                    result.append(activity)
                    # print(record)
                return result
