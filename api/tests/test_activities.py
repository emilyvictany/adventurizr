from fastapi.testclient import TestClient
from main import app
from queries.activities import ActivityRepository, ActivityOut
from authenticator import authenticator


client = TestClient(app)


class MockActivityRepository:
    def get_user_drafts(self, user_id: int):
        return [
            ActivityOut(
                id=1,
                title="do a dance",
                participants="any",
                environment="indoors",
                category="random",
                published=False,
                user_id=2,
            )
        ]


def fake_account_data():
    return {
        "id": 2,
        "first_name": "Kitty",
        "last_name": "Cat",
        "username": "im_a_cat",
        "email": "imacat@email.com",
        "hashed_password": "hashed_password_here",
    }


def test_get_user_drafts():
    app.dependency_overrides[ActivityRepository] = MockActivityRepository
    app.dependency_overrides[authenticator.get_current_account_data] = fake_account_data
    response = client.get("/api/activities/2/drafts")
    assert response.status_code == 200
    assert response.json() == [
        {
            "id": 1,
            "title": "do a dance",
            "participants": "any",
            "environment": "indoors",
            "category": "random",
            "published": False,
            "user_id": 2,
        }
    ]
