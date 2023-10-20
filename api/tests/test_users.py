from fastapi.testclient import TestClient
from main import app
from queries.users import UserQueries, UserOut
from authenticator import authenticator

client = TestClient(app)


class MockUserQueries:
    def get_one(self, user_id: int):
        return UserOut(
            id=1,
            first_name="Paris",
            last_name="Hilton",
            username="simple-life-paris",
            email="parishilton@example.com",
        )


def fake_account_data():
    return {
        "id": 1,
        "first_name": "Paris",
        "last_name": "Hilton",
        "username": "simple-life-paris",
        "email": "parishilton@example.com",
        "hashed_password": "hashed_password_here",
    }


def test_get_one():
    app.dependency_overrides[UserQueries] = MockUserQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_account_data

    response = client.get("/api/users/1")

    assert response.status_code == 200
    assert response.json() == {
        "id": 1,
        "first_name": "Paris",
        "last_name": "Hilton",
        "username": "simple-life-paris",
        "email": "parishilton@example.com",
    }
