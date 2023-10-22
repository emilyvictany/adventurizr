from fastapi.testclient import TestClient
from main import app
from queries.activities import ActivityRepository, ActivityOut
from queries.favorites import FavoriteRepository
from authenticator import authenticator
client = TestClient(app)


class MockActivityRepository:
    def get_one(self, user_id: int):
        return [
            ActivityOut(
                id=1,
                title="Go on a group picnic in a park",
                participants="group",
                environment="outdoor adventure",
                category="nature",
                published=False,
                user_id=3,
            )
        ]


class MockFavoriteRepository:
    def get_single_user_favorites(self, user_id: int):
        return [
            ActivityOut(
                id=1,
                title="Go on a group picnic in a park",
                participants="group",
                environment="outdoor adventure",
                category="nature",
                published=False,
                user_id=2,
            )
        ]


def fake_account_data():
    return {
        "id": 2,
        "first_name": "Sam",
        "last_name": "Smith",
        "username": "samsmith",
        "email": "sam@email.com",
        "hashed_password": "hashed_password_here",
    }


def test_get_user_favorites():
    app.dependency_overrides[ActivityRepository] = MockActivityRepository
    app.dependency_overrides[FavoriteRepository] = MockFavoriteRepository
    app.dependency_overrides[authenticator.get_current_account_data] = fake_account_data
    response = client.get("/api/favorites/2")
    assert response.status_code == 200
    assert response.json() == [
        {
            "id": 1,
            "title": "Go on a group picnic in a park",
            "participants": "group",
            "environment": "outdoor adventure",
            "category": "nature",
            "published": False,
            "user_id": 2,
        }
    ]
