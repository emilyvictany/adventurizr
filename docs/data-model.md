# Data Models

<img src="https://miro.medium.com/v2/resize:fit:1400/1*ei_Ce5ZqUHkhF9N1oku3Hg.gif" width="400" height="300"/>

## Users

The `users` table represents account holders.

| Field       | Type       |
| ----------- | ----------- |
| id | primary key |
| first_name | varchar |
| last_name | varchar |
| username* | varchar |
| email | varchar |
| hashed_password | varchar |

(*username must be unique)


## Activities

The `activities` table represents the activities that
are being created, published and recommended for users.


| Field       | Type       |
| ----------- | ----------- |
| id | primary key |
| title | varchar |
| participants | varchar |
| environment | varchar |
| category | varchar |
| published** | boolean |
| user_id | integer |

(**published defaults as `false`)

## Favorites

The `favorites` table represents the instance of an
activity being favorited by a user.

| Field       | Type       |
| ----------- | ----------- |
| user_id | integer |
| activity_id | integer |
