<img src="https://writebooksright.files.wordpress.com/2013/01/thinking.gif" width="150" height="200"/>

## Users

| Action | Method | Path
| ----------- | ----------- | -----------
| Create user | POST | `api/users`
| Get user | GET | `api/users/{user_id}`
| Update user | PUT | `api/users/{user_id}`
| Delete user | DELETE | `api/users/{user_id}`

#### Creating a user

<details>
<summary markdown="span">Input example</summary>

```
    {
        "first_name": "Emily",
        "last_name": "Yim",
        "username": "emilyyim",
        "password": "secret",
        "email": "emily@email.com"
    }
```
</details>

<details>
<summary markdown="span">Response example</summary>

```
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 eyJqdGkiOiIzNWFiZWM3OC1hYmZiLTQ5M2UtODk3ZS0zYmZlOTBhM2RmNTIiLCJleHAiOjE2OTgyNzk4NzksInN1YiI6InBhdWxhQG tYWlsLmNvbSIsImFjY291bnQiOnsiaWQiOjQsImZpcnN0X25hbWUiOiJQYXVsYSIsImxhc3RfbmFtZSI6IkFsY2FsYSIsInVzZXJuYW1lIjoicGF1bGFhbGNhbGEiLCJlbWFpbCI6InBhdWxhQGVtYWlsLmNvbSJ9fQ.1l-N3zLwj6n6NFGhhSb29h-FE-NQs8VVWhOnlEepI9o",
        "token_type": "Bearer",
        "account": {
            "id": 1,
            "first_name": "Emily",
            "last_name": "Yim",
            "username": "emilyyim",
            "email": "emily@email.com"
        }
    }
```
</details>

#### Getting a user

<details>
    <summary markdown="span">Input example</summary>

Parameters: `user_id: 2`
</details>

<details>
    <summary markdown="span">Response example</summary>

```
    {
        "first_name": "Paola",
        "last_name": "Alcala",
        "username": "paolaalcala",
        "email": "paola@email.com"
    }
```
</details>


#### Updating a user

<details>
    <summary markdown="span">Input example</summary>

Parameters: `user_id: 1`
Request Body:
```
    {
        "first_name": "Erin",
        "last_name": "Gerber",
        "username": "eringerber",
        "password": "newpassword",
        "email": "erin@newemail.com"
    }
```
</details>

<details>
    <summary markdown="span">Response example</summary>

```
    {
        "id": 1,
        "first_name": "Erin",
        "last_name": "Gerber",
        "username": "eringerber",
        "email": "erin@newemail.com",
        "hashed_password": "$2b$12$Go..rHPpCiOBfQgdIgQuqurgel32KqQQcosSUQLOR1PqUxvkf9mMW"
    }
```
</details>

#### Delete user

<details>
    <summary markdown="span">Input example</summary>

Parameters: `user_id: 4`
</details>

<details>
    <summary markdown="span">Response example</summary>

```
    {
        true
    }
```
</details>


<img src="https://media.tenor.com/2Q3b80oIodoAAAAj/cat-yarn.gif"/>

## Activities

| Action | Method | Path
| ----------- | ----------- | -----------
| Create an activity | POST | `api/activities/{user_id}`
| Get all activities | GET | `api/activities`
| Get one activity | GET | `api/activities/{activity_id}`
| Get filtered activities | GET | `api/activities/filtered`
| Get a user's drafts| GET | `api/activities/{user_id}/drafts`
| Update an activity | PUT | `api/activities/{activity_id}`
| Publish an activity | PUT | `api/activities/{activity_id}/publish`
| Delete an activity | DELETE | `api/activities/{activity_id}`

#### Create an activity

<details>
    <summary markdown="span">Input example</summary>

```
    {
        "title": "Have a group picnic in a park",
        "participants": "Group",
        "environment": "Outdoor Adventure",
        "category": "Culinary Experiences",
    }
```
</details>

<details>
    <summary markdown="span">Response example</summary>

```
    {
        "id": 1,
        "title": "Have a group picnic in a park",
        "participants": "Group",
        "environment": "Outdoor Adventure",
        "category": "Culinary Experiences",
        "published": false
    }
```
</details>

#### Get all activities

<details>
    <summary markdown="span">Response example</summary>

```
[
    {
        "id": 1,
        "title": "Have a group picnic in a park",
        "participants": "Group",
        "environment": "Outdoor Adventure",
        "category": "Culinary Experiences",
        "published": false
        "user_id": 1
    },
    {
        "id": 6,
        "title": "Take a yoga class",
        "participants": "Just Me",
        "environment": "Indoor Adventure",
        "category": "Personal Wellness",
        "published": true,
        "user_id": 2
    },
    {
        "id": 8,
        "title": "Coffee date at a new cafe",
        "participants": "Duo",
        "environment": "Indoor Adventure",
        "category": "Date Ideas",
        "published": true,
        "user_id": 3
    }
]
```
</details>

#### Get one activity

<details>
    <summary markdown="span">Input example</summary>

Parameters: `activity_id: 8`
</details>

<details>
    <summary markdown="span">Response example</summary>

```
    {
        "id": 8,
        "title": "Coffee date at a new cafe",
        "participants": "Duo",
        "environment": "Indoor Adventure",
        "category": "Date Ideas",
        "published": true,
        "user_id": 3
    }
```
</details>

#### Get filtered activities

<details>
    <summary markdown="span">Input example</summary>

Parameters:
`Participants: Duo`
`Environment: Indoor Adventure`
`Category: Date Ideas`
</details>

<details>
    <summary markdown="span">Response example</summary>

```
[
    {
        "id": 5,
        "title": "Paint night"
    },
    {
        "id": 8,
        "title": "Watch a spooky movie"
    },
    {
        "id": 12,
        "title": "Try a new recipe together"
    },
    {
        "id": 15,
        "title": "Build a pillow fort"
    }
]
```
</details>

#### Get a user's drafts

<details>
    <summary markdown="span">Input example</summary>

Parameters: `user_id: 1`
</details>

<details>
    <summary markdown="span">Response example</summary>

```
[
    {
        "id": 18,
        "title": "Visit a winery",
        "participants": "Duo",
        "environment": "Outdoor Adventure,
        "category": "Culinary Experiences",
        "published": false,
        "user_id": 1
    },
    {
        "id": 22,
        "title": "Play doubles tennis",
        "participants": "Group",
        "environment": "Outdoor Adventure",
        "category": "Sports and Recreation",
        "published": false,
        "user_id": 1
    }
]
```
</details>

#### Update an activity

<details>
    <summary markdown="span">Input example</summary>

Parameters: `activity_id: 14`
Request Body:
```
    {
        "title": "string",
        "participants": "string",
        "environment": "string",
        "category": "string"
    }
```
</details>

<details>
    <summary markdown="span">Response example</summary>

```
    {
        "id": 14,
        "title": "Girls paint night",
        "participants": "Group",
        "environment": "Indoor Adventure",
        "category": "Art and Music",
        "published": false
    }
```
</details>

#### Publish an activity

<details>
    <summary markdown="span">Input example</summary>

Parameters: `activity_id: 14`
</details>

<details>
    <summary markdown="span">Response example</summary>

```
    {
        "id": 14,
        "title": "Girls paint night",
        "participants": "Group",
        "environment": "Indoor Adventure",
        "category": "Art and Music",
        "published": true
    }
```
</details>

#### Delete an activity

<details>
    <summary markdown="span">Input example</summary>

Parameters: `activity_id: 12`
</details>

<details>
    <summary markdown="span">Response example</summary>

```
    {
        true
    }
```
</details>


<img src="https://media.istockphoto.com/id/1169742944/vector/simple-paper-plane-and-heart-shaped-flight-path.jpg?s=612x612&w=0&k=20&c=oGjp7x8hFQo_maaFXMUPvAvQu3iwJxwJSLtqk6gVPUs=" width="306" height="140"/>

## Favorites

| Action | Method | Path
| ----------- | ----------- | -----------
| Create a favorite | POST | `api/favorites/{user_id}/{activity_id}`
| Get a user's favorites | GET | `api/favorites/{user_id}`
| Get all favorites | GET | `api/favorites`
| Delete a favorite | DELETE | `api/favorites/{user_id}/{activity_id}`

#### Create a favorite

<details>
    <summary markdown="span">Input example</summary>

Parameters:
`user_id: 3`
`activity_id: 14`
</details>

<details>
    <summary markdown="span">Response example</summary>

```
    {
        true
    }
```
</details>

#### Get a user's favorite

<details>
    <summary markdown="span">Input example</summary>

Parameters:
`user_id: 2`
</details>

<details>
    <summary markdown="span">Response example</summary>

```
[
    {
        "id": 5,
        "title": "Take a cozy nap",
        "participants": "Just Me",
        "environment": "Indoor Adventure",
        "category": "Personal Wellness",
        "published": true,
        "user_id": 1
    },
    {
        "id": 14,
        "title": "Girls paint night",
        "participants": "Group",
        "environment": "Indoor Adventure",
        "category": "Art and Music",
        "published": true,
        "user_id": 3
    }
]
```
</details>

#### Get all favorites

<details>
    <summary markdown="span">Response example</summary>

```
[
    {
        "id": 14,
        "title": "Girls paint night",
        "participants": "Group",
        "environment": "Indoor Adventure",
        "category": "Art and Music",
        "published": true,
        "user_id": 3
    },
    {
        "id": 4,
        "title": "Play doubles tennis",
        "participants": "Group",
        "environment": "Outdoor Adventure",
        "category": "Sports and Recreation",
        "published": true,
        "user_id": 3
    },
    {
        "id": 5,
        "title": "Take a cozy nap",
        "participants": "Just Me",
        "environment": "Indoor Adventure",
        "category": "Personal Wellness",
        "published": true,
        "user_id": 1
    }
]
```
</details>

#### Delete a favorite

<details>
    <summary markdown="span">Input example</summary>

Parameters:
`user_id: 2`
`activity_id: 16`
</details>

<details>
    <summary markdown="span">Response example</summary>

```
    {
        true
    }
```
