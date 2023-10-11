<!-- In the journals, every day that you work on the project, you must make an entry in your journal after you've finished that day. At a minimum, you'll need to include the following information in each entry:

The date of the entry

A list of features/issues that you worked on and who you worked with, if applicable

A reflection on any design conversations that you had

At least one ah-ha! moment that you had during your coding, however small

Keep your journal in reverse chronological order. Always put new entries at the top. -->

## September 26, 2023

Today, I worked on:

* Setting up the Adventurizr PostgreSQL Database with Emily.

Emily and I set up our project database following the instructions on learn. We added a volume for the PostgreSQL RDMS, psycopg to ./api/requirements.txt, PostgreSQL to the services section, a DATABASE_URL to the fastapi service to our docker-compose.yaml file. We ran the command docker volume create adventurizr to create our projects volume and then ran docker-compose up to create our updated containers.

Setting up our PostgreSQL helped me understand configuration a bit more in specific how the FastAPI service connects to the PostgreSQL database.

## September 27, 2023

Today, I worked on:

* Creating issue tickets on the issues board and approving merge requests

## September 28, 2023

Today, I worked on:

* Implementing the backend Authorization for the login, logout, sign-up endpoints using the JWTdown API library.

## October 9, 2023

Today I worked on:

* Setting up the activities SQL data table

## October 10, 2023

Today I worked on:

* 
