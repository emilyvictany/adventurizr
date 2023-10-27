<!-- In the journals, every day that you work on the project, you must make an entry in your journal after you've finished that day.
Keep your journal in reverse chronological order. Always put new entries at the top.

TEMPLATE: (inspired by the awesome SEIR Jordan 😊)
### Date

#### Today I worked on:
- A list of features/issues that you worked on and who you worked with, if applicable
- A reflection on any design conversations that you had

**AH-HA!💡** –

**🎉 Celebrations 🎉**
(not required))

**Any Blockers:**
(not required))

#### Bugs encountered 🐛🐞🐜 :
(not required)
🪲 **Bug** –
🛠️ **Solution** – -->


### October 26, 2023 (W17D4) 🎃🍬

#### Today I worked on:
- Continuing to style frontend components: blank Favorites page, blank Drafts page, and Activity Drafts page. I wanted to work a bit more on the Homepage but ran out of time for today... may have to wait for our stretch goals week after we present to instructors tomorrow~
- Tested deployment with the team - we did find a bug... on `localhost:3000` when a user signs up for an account it works as expected but the outcome on the deployed site is different. It still technically works on the deployed site, but we need to work to optimize it to match expected outcome.
- Polish up this journal ✨ and tidy up some things on Gitlab!
- Entering activities into our database so that we can be ready to do our first presentation tomorrow (seeding).

**AH-HA!💡**
- Played with Tailwind and Daisy UI - the components are super helpful when styling!

**🎉 Celebrations 🎉**
- As a team, I think we got our MVP design pretty close to the wireframe, so that has been exciting!

---

### October 25, 2023 (W17D3) 🎃🍬

#### Today I worked on:
- Worked on protecting the navbar so that users see different content depending on whether they are authenticated/authorized or not
- Worked on our project documentation with Paola (I specifically worked on the API endpoints and then helped her clean up any typos on the other docs)
- Started styling! The navbar was SO much easier with Tailwind/Daisy UI. Erin is leading the styling and it's been really nice to collaborate with her. She set a great foundation for our styling process.

**AH-HA!💡**
- Used a ternary operator on the Navbar to control the authorization of site visitors vs users. I didn't realize it would be that simple!

**🎉 Celebrations 🎉**
- Frontend components are officially done! Now we're in the home stretch with a focus on styling and any last minute polishes.

---

### October 24, 2023 (W17D2) 🎃🍬

#### Today I worked on:
- Editing an activity works! Did I stay up until 3am... perhaps. User can now go to their Activity Drafts page to view their drafts, delete their drafts, and (finally) edit a draft! Next step will be to publish an activity to the database
- Realized we didn't account for a backend endpoint to allow us to publish an activity... so completed backend endpoint to publish an activity from a user's draft to the database. Next step will be to add a "publish" button on the frontend
- Deployment - site is finally deployed!! With help from a SEIR and instructor, I had a trailing slash `/` and an extra `<AuthProvider>` when it shouldn't have been when we were confused about authentication 😭 I think it happened when we were trying to follow a video... anyways, before, our site would render but wasn't functioning-- after today, it works!!

**AH-HA!💡**
- We realized we needed a new backend endpoint to publish an activity 😅 This is a super silly ah-ha, but when we thought more about how we want the user to be able to execute publishing an activity, it's like a lightbulb went off. I edited our pydantic model for activity as the way that I initially edited it to was wrong. I created a new backend endpoint to publish an activity, and Paola edited the backend endpoint for the user survey to only filter for activities with a `boolean` value of `true`.

**🎉 Celebrations 🎉**
- Site is finally deployed!!!

---

### October 23, 2023 (W17D1 - back to class) 🎃🍬

#### Today I worked on:
- Made more progress on editing an activity draft on the frontend... not quite working yet but getting closer!
- Worked on deployment - still not completely working though
- Installed Tailwind

**AH-HA!💡**
- Played around with Tailwind a bit and it seems like it'll be really helpful with our styling! I'm looking forward to working on the styling whenever we finish the frontend components. We're so close!

**Any Blockers:**
- Getting the frontend deployment to work properly 😔 The page renders so it's "okay" but not functioning... so I guess it's technically *deployed* but the site/application isn't functioning. Will post in class HMU tomorrow

---

### October 22, 2023 (W17D0? - weekend) 🎃🍬

#### Today I worked on:
- Worked with Erin to refactor frontend component that retrieves and deletes a user's favorited activities
   - I wanted to test if the custom hook for `useUser` would work on her component as well
- Continued to work on frontend component for User's Activity Drafts
   - Able to get user's drafts and deletes it
   - still working on allowing a user to edit a draft
- With the help of a wonderful classmate and a SEIR, I was finally able to get the production docs for backend deployment to work! 🎉 my `database_url` was not correct in my deployment command.

**AH-HA!💡**
- custom hook for `useUser` was able to work on another group member's component!
- when a user logs in or creates an account, the custom hook will time out for 2 seconds to give the function time to properly retrieve the token and render the user's data on the user home page! this was a HUGE blocker for me so I'm glad that it's finally sorted and I'm interested to see how this custom hook can be applied in the rest of the project.

**🎉 Celebrations 🎉**
- Backend deploy finally works!!

---

### October 21, 2023 (W16D6 - weekend) 👻

#### Today I worked on:
- User's home page
    - after inspecting the source code, I decided to experiment with a custom hook to store user's data from the token
    - finally was able to render the home page in the way I wanted to: log in/creating an account redirects to the user home page and will display the desired account data from their token! when I log in, it says "Welcome, Emily"

**AH-HA!💡** – Unfortunately, reading source code (in addition to the not extensive documentation) can actually keyboards. Upon further inspection, for `register` on line 157 in `index.tsx` I'm thinking that that code was causing our login to not get the token fast enough? I was prompted to inspect this after being very confused at why after my login redirected to my home page, it would not retrieve my user's info but after I refreshed the home page the user's info would appear. Perhaps because there's an `async` without an `await`?? Either way this was a blocker for me for DAYS (but I had other things to work on too) and I'm glad it's finally resolved.

---

### October 20, 2023 (W16D5 - no class) 👻

#### Today I worked on:
- Worked on the User Homepage - finally got the user's first name to show when they log in! But it only works when you log in and then refresh the page... need to work on a fix for that
- Created a unit test to get details for an activity that a user has favorited

**AH-HA!💡**
- Got my unit test to pass! Must test inside *Docker* API terminal (with `python -m pytest`)

**Any Blockers:**
- Still unsure why I can't get the user's info unless I refresh the page... will work on it more tomorrow 🔍

---

### October 19, 2023 (W16D4) 👻

#### Today I worked on:
- Started deployment and it's a doozy 😔
- Continued working on component for User's Activity Drafts (specifically editing an activity)
- Worked on User Homepage - still trying to get the "Welcome {user first name}" to work 🥲

**AH-HA!💡**
- I thought we would need to create a new merge request to clean up issues on our pipelines, but totally blanked and that is not needed. Whenever anyone makes a merge to main, and if that merge request passes it's pipelines then the most recent pipeline is passed. This is what the will build the image for deployment, so we're all good!

**Any Blockers:**
- Deployment 😭 I finally figured out how to get the CLI to work, but having issues getting the backend and frontend deployed 🥲

---

### October 18, 2023 (W16D3) 👻

#### Today I worked on:
- Adjusting backend endpoint for Creating an Activity after changing the pydantic model
- Activity drafts page - able to get user's drafts and to delete a draft! Still tinkering with the edit activity... moving towards editing an activity directly on the user's page instead of directing the user to another page

**AH-HA!💡**
- Didn't know we could have exceptions for the line length with Flake8 😅 so we increased a line's length to 110 with the simple code of `max-line-length = 110`! It has been a game changer because sometimes the code is just a bit too long and doesn't pass the rule of being ~80 characters or less, but the visibility would be better if it was just one line instead of making it cascade down.

---

### October 17, 2023 (W16D2) 👻

#### Today I worked on:
- Added logout feature to the Nav bar
- Starting working on frontend component for a user's activity drafts. The features related to activity drafts are viewing all drafts (for the authenticated user), editing a draft, deleting a draft, and publishing a draft
- For activity drafts, starting with viewing all drafts and deleting a draft
- Unsure if I want to list drafts and then when user clicks on a specific activity it edits it on a new page, or if I want it to be edited on the same page? Maybe with a modal? UX-wise, maybe it would be better to have it be edited on the same page
- Unsure of how to implement publish a draft... will circle back after finishing the other feature
- Circled back to user homepage - having difficultly getting the user's first name/account info from the token? I want the homepage to say "Welcome, {user's first name}"

**AH-HA!💡**
- It has been very satisfying to clean up errors to pass our pipelines! Hopefully this sets us up better when it comes time for deployment

---

### October 16, 2023 (W16D1) 👻

#### Today I worked on:
- Finished basic framework for `Landing Page` frontend component and `Nav`
- Starting frontend component for `User Homepage`
- Started frontend authorization with Paola and Erin
- Adjusted some formatting to make Flake8 happy! We definitely need some more work on this in order to pass our pipelines, but at least we have an idea of how we want to do it.

**AH-HA!💡**
- Learned that you can `revert` a merge request on Gitlab! It took a bit of clicking around as Gitlab's documentation regarding reverting seemed out of date...
    <details>
    <summary markdown="span">How we reverted a merge on Gitlab - (click to expand)</summary>

    ![Img](/journals/images/reverting_a_merge.png)
    </details>

---

### October 13, 2023 (W15D5) 🎃👻 - Friday the 13th! 👀

#### Today I worked on:
- Finishing backend endpoints with Paola and Erin!
- Testing code as a team and making sure our merge requests all merge to `main` appropriately
- Starting frontend!
   - I worked on displaying Adventurizr's landing page at `localhost:3000`
   - The page needs lots of work but at least it displays!

**AH-HA!💡**
- I had to install `react-router-dom` with `npm install react-router-dom@6.3` Not sure if this would count as a bug... but with helpful reminders, made sure to install it in `ghi` and rebuild containers in Docker for everything to work properly!

**🎉 Celebrations 🎉**
- As a group, we finished our backend endpoints (including authentication) and started frontend!

**Any Blockers:**
- A possible blocker that we have is that we may need to adjust our data tables...
    - Issue: We want to be able to store multiple options for the details of an activity
        - example: for an activity like *Have a picnic* it may satisfy different participants values like `Solo`, `Couple`, or `Group`. We want to be able to associate all of the participants values with the single row of *Have a picnic* in the `activities` table.
    - A possible solution for that would be to implement more junction SQL tables. As of right now, we have a `users` table, an `activities` table, and a `favorites` junction table with foreign keys to `users` and `activities`.
    - We're brainstorming with Rosheen and working on our next move!

---

### October 12, 2023 (W15D4) 🎃

#### Today I worked on:
- Finished backend endpoint to remove an activity from a user's favorites
- Fixed `get one user` and `update one user`

**AH-HA!💡**
- Be *very* careful with merge requests! Today was another reminder of it's okay to go slow and steady while we're learning because it'll save a lot of headache down the road 😅

#### Bugs encountered 🐛🐞🐜 :

- 🪲 **Bug** – When testing my endpoint of removing an activity from a user's favorites, I discovers `get one user` and `update one user` wasn't working
    - 🛠️ **Solution** – It fell off in a merge request 😔 I created another merge request to fix it and bring back our working code.

---

### October 11, 2023 (W15D3) 🎃

#### Today I worked on:
- Finished backend endpoint for `get all activities`
- Finished backend endpoint for `get one activity`
- With Paola and Erin, we tested each other's completed endpoints and carefully merged to main
- Paola was working on the user survey to `get filtered activities` and we tried to troubleshoot as a group

**AH-HA!💡**
- We were debating on whether we should continue to execute the filtered activities on the backend or on the frontend. With the help of Jordan and a couple of other classmates, Paola was able to get it working! It was a bit confusing to figure out but was a great learning experience.

---

### October 10, 2023 (W15D2) 🎃

#### Today I worked on:
- Finished `favorites` table, completing our 3 tables! (for now? 😅)
- Started endpoint for `get all activities`
- Discussed our approach regarding getting activities into the database with Paola and Erin
    - We want a base of activities in the database for a user to interact with– a "starter pack" if you will
    - We weren't sure how to approach it and thought they would need to be hardcoded
    - With help from classmates, we discussed using `INSERT INTO` statements but our approach will be to just add activities in once our project is deployed

**AH-HA!💡**
- Learned more about how to use Beekeeper and how to save a connection, making testing a lot easier when rebuilding the connection

---

### October 9, 2023 (W15D1) 🎃

#### Today I worked on:
- Solidified categories for our `Activities` table with Paola and Erin
- Researched associative/junction tables and started `Favorites` table
- Assigned the rest of our backend endpoints (and caught up on organizing the issues board on Gitlab), with a goal of completing the backend work by the end of the week!

**AH-HA!💡**
- Better understanding of how to start and complete merge requests (MR) and their relationship with issues. As we keep merging requests to main and learning how our code collaborates, it becomes easier to get the flow 🌊

---

### September 29, 2023 (W14D5 / break) 🍂

#### Today I worked on:
- Finished authentication endpoints and fully tested them with Erin and Paola
- Completing backend endpoint to `delete a user` using a user ID (led by Erin and Paola)

**AH-HA!💡**
- Learned about `docker compose build —-no-cache` and how helpful it is!

#### Bugs encountered 🐛🐞🐜 :

- 🪲 **Bug** – Issues with docker and migrations
    - 🛠️ **Solution** – Become very friendly with having to nuke and rebuild containers!! `docker system prune` and `docker compose build —-no-cache` are my friends.

- 🪲 **Bug** – Syntax errors with data table
    - 🛠️ **Solution** – Make sure to test code thoroughly before merging to main! Commas are very important... it's okay to go slow!

---

### September 28, 2023 (W14D4) 🍂

#### Today I worked on:
- Writing backend authentication endpoints for `user sign up`, `user log in`, and `user log out`
- Testing endpoints using FastAPI's GUI
- Created `SIGNING_KEY` with group

**AH-HA!💡**
- Had lots of practice with `passwords` vs `hashed_passwords` 😅

---

### September 27, 2023 (W14D3) 🍂

#### Today I worked on:
- Setting up Beekeeper Studio to help with querying and managing PostgreSQL (collaborated with Paola and Erin)
- Creating issue tickets in the Gitlab issue board and creating merge requests directly from the ticket with Paola and Erin
- Approving merge requests with Paola and Erin
- Pulling from main *every single time* someone makes a merge request
- Reviewing class explorations and lectures regarding authentication

**AH-HA!💡**
- After navigating Gitlab's features a bit more, it was satisfying for a branch to automatically be created when you create a merge request directly from an issue on the issue board. Also, when the merge is completed, I was able to see how satisfying it was for the branch to then be deleted as the code we worked on went into the Main branch.

---

### September 26, 2023 (W14D2) 🍂

#### Today I worked on:
- Finalizing our API Endpoints with group after feedback from presentation with Paul
- Setting up the Adventurizr PostgreSQL Database with Paola
    - We set up our project database following the instructions on Learn
    - We added a volume for the PostgreSQL RDBMS
    - We added `psycopg` to `requirements.txt`
    - We added PostgresQL service in `docker-compose.yaml`
    - We added a `DATABASE_URL` to the FastApi service in `docker-compose.yaml`
    - We ran the command `docker compose up` to create our updated containers

**AH-HA!💡**
- Setting up our PostgreSQL helped me understand the configuration a bit more, specifically how the FastAPI service connects to the PostgreSQL database.
