# Adventurizr

## Team

* Emily Yim
* Erin Gerber
* Paola Alcala

Adventurizr - Anything Can Be an Adventure!

Activity recommendation application for the bored individual.

## Design

* API documentation
* [Data Model](docs/data-model.md)
* [Webpage Interface/GHI](docs/ghi.md)

## Intended Market

Adventurizr is designed for individuals of all ages
that are in search of recommendations for leisure activities.
Whether you are looking for a fun weekend activity, seeking
a break from the daily routine, or you are wanting to explore
new hobbies "Adventurizr" is your source for leisure activity
recommendations.

## Functionality

### Visitor:

* has access to the landing page
* is able to sign up

### Logged in users:

* has access to the user homepage
* is able to receive recommendations based off of filter options selected
* can favorite certain recommendations
* can view all favorited recommendations
* can removed an activity from their favorites
* are able to create their own recommended activities
* can publish an activity in their drafts to be viewed by all users
* can edit an activity in their drafts before publishing
* can delete an activity in their drafts
* have access to a user profile and can update certain account information


## Project Initialization

In order to view this application on your local machine, please follow the following steps:


1. Clone the repository down to your local machine

2. CD into the new project directory

3. Run docker volume create `adventurizr`

4. Run `docker-compose build`

5. Run `docker-compose up``

6. Run `localhost:3000` on the browser url field

Now you can enjoy Adventurizr on your local machine!
