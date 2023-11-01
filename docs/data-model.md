# Data Models

<img src="https://images.squarespace-cdn.com/content/v1/628c9b924f65903f0418db60/bd05f38d-27ab-4032-9a24-10e266026ed9/data-model.gif" width="300" height="250"/>

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
