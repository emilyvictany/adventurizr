<!-- In the journals, every day that you work on the project, you must make an entry in your journal after you've finished that day. At a minimum, you'll need to include the following information in each entry:

The date of the entry

A list of features/issues that you worked on and who you worked with, if applicable

A reflection on any design conversations that you had

At least one ah-ha! moment that you had during your coding, however small

Keep your journal in reverse chronological order. Always put new entries at the top. -->
## October 26, 2023

Today I worked on:

* Today I cleaned up my gitlab and continued applying css styling to the landing page, user profile, and edit user profile page.

## October 25, 2023

Today I worked on:

* Emily and I collaborated on the read me and docs. I helped Erin add a button to remove a recommended activity from our our filter suggestions component. I started styling the user profile components.

## October 24, 2023

Today I worked on:

* debugging the login form, user profile, and helping Emily work on backend endpoints for one of her frontend features. I installed Tailwind and Daisy UI.

I continued to try and protect our user homepage by debugging the login form by applying the custom hook that Emily created. I made a couple of changes to the Activity repo in the `filtered` query. I added the published field and set it to query search for `true`.

## October 23, 2023

Today I worked on:

* completing the create an activity form and the delete functionality to my user profile.

I created a frontend component that allows the user to create an activity recommendation that populates the application database. I created a delete user account frontend feature that allows users to delete their account.

## October 20 - 22, 2023

Today I worked on:

* Lots of debugging. I tried to debug my login component and my edit user profile component. I also started the create an activity component.

## October 19, 2023

Today I worked on:

* Worked on Unit Testing. Got my components for user profile working. I debugged backend endpoints with my teammates.

Today I completed my unit test for the get_one endpoint for users. I had to install pytest and run the `python -m pytest` command in the fast-api docker container in my terminal.

## October 18, 2023

Today I worked on:

* Spent a lot of time debugging my component and getting familiar with the jwt frontend auth package. Started the DELETE a user component.

I ran into a few problems trying to manipulate the user data. I found it difficult to work with the auth frontend auth package provided. I am having difficulties figuring out how to refetch updated data that has been edited in the user profile.

## October 17, 2023
Today I worked on:

* Starting the frontend component for visiting and editing a User's profile

I created a frontend component for the edit user information feature. This allows the user the ability to change their account information if needed.
I created a new component at ghi/src/users/EditUserProfile.jsx.

## October 16, 2023

Today I worked on:

* Frontend Authorization for the Login component.

I installed JWTdown for React to implement authentication on the frontend this works with JWTdown for FastAPI from the backend as JWTdown for React needs a service to retrieve a token from.I installed with `npm install @galvanize-inc/jwtdown-for-react`. I also added <AuthProvider> to App.js. I created a frontend component that allows the returning user to log their account information to get granted authorization to access all of the applications features. I created a form in ghi/src/users/LoginForm.jsx, I used the custom hook login included in the JWTdown packagE and I rendered a login form using react jsx.


## October 13, 2023

Today I worked on:

* Addressing some edge cases that we want to potentially solve before deployment. Developed a plan of action to implement a solution for one particular edge case. I created new issues on the issue board relating to our frontend development. And lastly I started the frontend component for our login page.

## October 12, 2023

Today I worked on:

* Creating a DELETE endpoint for removing an activity from the activities data table and a GET endpoint for getting a list of all favorites.

Today I created a backend DELETE activity endpoint that allows the user to delete an activity in their activity draft logs that they no longer wish to publish. I added a function called delete to queries that is responsible for sending a query to the database to remove a specific activity from the table, effectively deleting it. I added a function called delete_activity to routers
This function handles the DELETE request, allowing users to remove the activity from the data table. I created an endpoint in api/routers/favorites.py titled get_all and created a query in api/queries/favorites.py titled get_all_favorites. This backend endpoint that grabs all favorited instances created in the db table. This allows us to make sure that a "favorite" instance is being creating properly a allows to manipulate the favorites data in the frontend.

## October 11, 2023

Today I worked on:

* Creating a GET endpoint for getting filtered activities from a survey input

Today I worked on creating an endpoint that allows a user to fill out a survey that acts as a filter to grab a list of recommended activities.

While developing the GET endpoint for activity filtering, I realized that by using well-designed and efficient filtering logic, we could greatly enhance the user experience. This highlighted the importance of optimizing the query and data retrieval process, ensuring that our users receive timely and relevant recommendations.

## October 10, 2023

Today I worked on:

* Creating a POST endpoint for creating an activity

Today, I took on the task of creating the POST endpoint for adding activities to our database. This endpoint will allow both administrators and regular users to populate our activities database. I defined two Pydantic models, one for ActivityOut and another for ActivityIn, to handle input and output data for the endpoint. I then implemented the ActivityRepository containing query functions for creating activities. I set up the API call in the routers, enabling users to send a POST request to create an activity in the data table.

During this process, I realized the importance of structuring the code for input and output data using Pydantic models. It makes the code more organized and helps prevent data-related errors, improving the overall quality of our project

## October 9, 2023

Today I worked on:

* Setting up the activities SQL data table

Today I took on setting up the activities SQL data table. I did not run into any bugs. I created a new migrations file titled 003_activities_table.py. As a group we briefly discussed possibly hardcoding our data into the table but opted out and decided to populate our data table using an api POST request after deployment.

While working on this task, I realized that using an API POST request to populate the data after deployment would allow us to make dynamic updates to our activities database, providing us with greater flexibility and adaptability in the long run. Overall this shift from hardcoding to using an API POST request will save us a lot of time as a team.

## September 28, 2023

Today, I worked on:

* Implementing the backend Authorization for the login, logout, sign-up endpoints using the JWTdown API library.

Emily and mob programmed the backend authorization. We decided to each tackle the auth on separate branches following Curtis' video on authorization and authentication using the JWTdown API library provided to us. During implementation, we encountered some challenges when applying hashed passwords, which led to some debugging and troubleshooting.

During the implementation of the authentication process, I realized the critical importance of securely handling user passwords. This experience reinforced the significance of data security in our project and the need for careful consideration of user data protection.

## September 27, 2023

Today, I worked on:

* Creating issue tickets on the issues board and approving merge requests

Today our team focused on project management and code collaboration. I created issue tickets on our project's issues board, detailing specific tasks that need to be addressed. We also reviewed and approved several merge requests from team members. This collaborative effort ensures that code changes are thoroughly checked before being merged into the main branch, maintaining the code quality and consistency in our project.

During the merge request reviews, I realized the importance of communication and coordination among team members to ensure the smooth development of the project. Clear documentation in issue tickets and code comments makes the collaboration process much more efficient.

## October 11, 2023

Today I worked on:

* Creating a GET endpoint for getting filtered activities from a survey input

Today I worked on creating an endpoint that allows a user to fill out a survey that acts as a filter to grab a list of recommended activities.

While developing the GET endpoint for activity filtering, I realized that by using well-designed and efficient filtering logic, we could greatly enhance the user experience. This highlighted the importance of optimizing the query and data retrieval process, ensuring that our users receive timely and relevant recommendations.

## October 10, 2023

Today I worked on:

* Creating a POST endpoint for creating an activity

Today, I took on the task of creating the POST endpoint for adding activities to our database. This endpoint will allow both administrators and regular users to populate our activities database. I defined two Pydantic models, one for ActivityOut and another for ActivityIn, to handle input and output data for the endpoint. I then implemented the ActivityRepository containing query functions for creating activities. I set up the API call in the routers, enabling users to send a POST request to create an activity in the data table.

During this process, I realized the importance of structuring the code for input and output data using Pydantic models. It makes the code more organized and helps prevent data-related errors, improving the overall quality of our project

## October 9, 2023

Today I worked on:

* Setting up the activities SQL data table

Today I took on setting up the activities SQL data table. I did not run into any bugs. I created a new migrations file titled 003_activities_table.py. As a group we briefly discussed possibly hardcoding our data into the table but opted out and decided to populate our data table using an api POST request after deployment.

While working on this task, I realized that using an API POST request to populate the data after deployment would allow us to make dynamic updates to our activities database, providing us with greater flexibility and adaptability in the long run. Overall this shift from hardcoding to using an API POST request will save us a lot of time as a team.

## September 28, 2023

Today, I worked on:

* Implementing the backend Authorization for the login, logout, sign-up endpoints using the JWTdown API library.

Emily and mob programmed the backend authorization. We decided to each tackle the auth on separate branches following Curtis' video on authorization and authentication using the JWTdown API library provided to us. During implementation, we encountered some challenges when applying hashed passwords, which led to some debugging and troubleshooting.

During the implementation of the authentication process, I realized the critical importance of securely handling user passwords. This experience reinforced the significance of data security in our project and the need for careful consideration of user data protection.

## September 27, 2023

Today, I worked on:

* Creating issue tickets on the issues board and approving merge requests

Today our team focused on project management and code collaboration. I created issue tickets on our project's issues board, detailing specific tasks that need to be addressed. We also reviewed and approved several merge requests from team members. This collaborative effort ensures that code changes are thoroughly checked before being merged into the main branch, maintaining the code quality and consistency in our project.

During the merge request reviews, I realized the importance of communication and coordination among team members to ensure the smooth development of the project. Clear documentation in issue tickets and code comments makes the collaboration process much more efficient.

## September 26, 2023

Today, I worked on:

* Setting up the Adventurizr PostgreSQL Database with Emily.

Emily and I set up our project database following the instructions on learn. We added a volume for the PostgreSQL RDMS, psycopg to ./api/requirements.txt, PostgreSQL to the services section, a DATABASE_URL to the fastapi service to our docker-compose.yaml file. We ran the command docker volume create adventurizr to create our projects volume and then ran docker-compose up to create our updated containers.

Setting up our PostgreSQL helped me understand configuration a bit more in specific how the FastAPI service connects to the PostgreSQL database.
