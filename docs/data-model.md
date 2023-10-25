# Data Models

## Users

The `users` table represents account holders.

| Field       | Type       |
| ----------- | ----------- |
| id | primary key |
| first_name | varchar |
| last_name | varchar |
| username | varchar |
| email | varchar |
| hashed_password | varchar |


## Activities

The `activities` table represents the activities that
are being created, published and recommended.


| Field       | Type       |
| ----------- | ----------- |
| id | primary key |
| title | varchar |
| participants | varchar |
| environment | varchar |
| category | varchar |
| published | boolean |
| user_id | integer |


## Favorites

The `favorites` table represents the instance of an
activity being favorited by a user.

| Field       | Type       |
| ----------- | ----------- |
| user_id | integer |
| activity_id | integer |
