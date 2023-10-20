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
    user_id: Optional[int]


class ActivityOut(BaseModel):
    id: int
    title: str
    participants: str
    environment: str
    category: str
    published: bool = False
    user_id: Optional[int]


class FilterIn(BaseModel):
    participants: str
    environment: str
    category: str


class FilterOut(BaseModel):
    id: int
    title: str


class ActivityRepository:
    def create_activity(self, activity: ActivityIn, user_id: int) -> ActivityOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO activities
                        (title,
                        participants,
                        environment,
                        category,
                        user_id)
                    VALUES
                        (%s, %s, %s, %s, %s)
                    RETURNING id
                    """,
                    [
                        activity.title,
                        activity.participants,
                        activity.environment,
                        activity.category,
                        user_id
                    ]
                )
                id = result.fetchone()[0]
                old_data = activity.dict()
                return ActivityOut(id=id, **old_data)

    def get_all(self) -> Union[Error, List[ActivityOut]]:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT id,
                            title,
                            participants,
                            environment,
                            category,
                            published,
                            user_id
                    FROM activities
                    ORDER BY id;
                    """
                )
                return [
                    self.record_to_activity_out(record)
                    for record in result
                ]

    def get_user_drafts(self, user_id: int) -> List[ActivityOut]:
        user_drafts = []
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT
                            id,
                            title,
                            participants,
                            environment,
                            category,
                            published,
                            user_id
                        FROM activities
                        WHERE (user_id=%s
                            AND published = false)
                        ORDER BY id;
                        """,
                        [user_id]
                    )
                    records = db.fetchall()
                    for record in records:
                        user_drafts.append(
                            ActivityOut(
                                id=record[0],
                                title=record[1],
                                participants=record[2],
                                environment=record[3],
                                category=record[4],
                                published=record[5],
                                user_id=record[6]
                            )
                        )
            return user_drafts
        except Exception:
            {"message": "no user drafts"}

    def filtered(self, participants: str, environment: str, category: str) -> Union[
            Error,
            List[FilterOut]
            ]:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT id, title
                    FROM activities
                    WHERE (participants = %s)
                        AND (environment = %s)
                            AND (category = %s)
                    """,
                    [
                        participants,
                        environment,
                        category
                    ]
                )
                activities = result.fetchall()
                filtered_activities = []

                for record in activities:
                    activity = FilterOut(
                        id=record[0],
                        title=record[1],
                    )
                    filtered_activities.append(activity)
                return filtered_activities

    def get_one(self, activity_id: int) -> Optional[ActivityOut]:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT id,
                            title,
                            participants,
                            environment,
                            category,
                            published,
                            user_id
                    FROM activities
                    WHERE id=%s
                    """,
                    [activity_id]
                )
                record = result.fetchone()
                if record is None:
                    return None
                return self.record_to_activity_out(record)

    def record_to_activity_out(self, record):
        return ActivityOut(
            id=record[0],
            title=record[1],
            participants=record[2],
            environment=record[3],
            category=record[4],
            published=record[5],
            user_id=record[6],
        )

    def delete(self, activity_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM activities
                        WHERE id = %s
                        """,
                        [activity_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def update(
        self,
        activity_id: int,
        info: ActivityIn,
    ) -> Union[ActivityOut, Error]:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    UPDATE activities
                    SET title=%s,
                        participants=%s,
                        environment=%s,
                        category=%s
                    WHERE id = %s
                    """,
                    [
                        info.title,
                        info.participants,
                        info.environment,
                        info.category,
                        activity_id
                    ]
                )

                updated_activity = self.get_one(activity_id)
                if updated_activity:
                    return self.activity_in_to_out(activity_id, info)
                else:
                    return {"message": "Activity not found after update"}

    def activity_in_to_out(self, id: int, info: ActivityIn):
        old_data = info.dict()
        old_data['id'] = id
        return ActivityOut(**old_data)
