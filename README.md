# Adventurizr
Check out our deployed site here: https://boredom-busters.gitlab.io/adventurizr/

## Team

- Emily Yim
- Erin Gerber
- Paola Alcala

Adventurizr - Anything Can Be an Adventure!

Activity recommendation application for those looking to alleviate boredom.

## Design

- [API Documentation](docs/API.md)
- [Data Model](docs/data-model.md)
- [GHI](docs/ghi.md)

## Intended Market

We designed Adventurizr for individuals of all ages that are looking for leisure activity recommendations. Whether an individual is looking for a fun weekend activity, wanting to explore new hobbies, or just seeking a break from their daily routine, Adventurizr is your source for leisure activity recommendations.

## Functionality

### Visitors:

- have access to the landing page
- are able to sign up

### Logged in users:

- have access to the user homepage
- are able to receive recommendations based off of selecting filter options (number of participants, environment type, and category)
- can favorite recommendations, saving them to a private "liked" list
- can view all favorited recommendations
- can remove an activity from their favorites
- are able to create their own recommended activities which are then saved in their private drafts
- can edit an activity in their drafts before publishing
- can delete an activity in their drafts
- can publish activity ideas from their private drafts to be able to be recommended to any users
- have access to their user profile and can update certain account information

## Project Initialization

In order to view this application on your local machine, please follow the following steps:

1. Clone the repository down to your local machine

2. Navigate into the new project directory

3. In Docker:
    - run `docker volume create adventurizr`
    - run `docker-compose build` to build the Docker containers
    - run `docker-compose up` to start the application

6. In your browser, navigate to [localhost:3000](http://localhost:3000/) to access the application

Now you can enjoy Adventurizr on your local machine!

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW0xYXFlM3d4N3J5NnhwaWY1Y2Rmd3N6ZHR3a2hvMTJsdnkzYW9pMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5WfZuc1xpMfEdbmfqx/giphy.gif" width="380" height="270"/>
