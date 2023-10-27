<!-- In the journals, every day that you work on the project, you must make an entry in your journal after you've finished that day. At a minimum, you'll need to include the following information in each entry:


The date of the entry


A list of features/issues that you worked on and who you worked with, if applicable


A reflection on any design conversations that you had


At least one ah-ha! moment that you had during your coding, however small


Keep your journal in reverse chronological order. Always put new entries at the top. -->




## Oct/26


Today I worked on:


*Updating some journal entries
*Updating merge and issue requests in gitlab
*some styling




Today was just getting stuff ready for presenting tomorrow. Finished editing my journal for the most part and doing some last minute styling but nothing crazy. I also spent a while going through gitlab and updating my merge requests and issues descriptions. However, when deploying we realized we have an issue with signing up on the deployed site most likely because we used our user hook, when jordan explained that i think it was my little aha moment. We added an if(user) statement in the sign up with some error handling and signing in works now however it must be clicked twice before a user is navigated to the home page and sees their name. I think we'll have to fix this for next week however now we believe it will be ok.






## Oct/25


Today I worked on:


*Lots of styling on the transfer branch and merging it
*created personal styling branch


A lot of styling and it looks somewhat like the wireframes so we as a team are feeling pretty alright about it. I also merged the transfer branch into main so it took some time to make sure nothing was getting overwritten but it worked out well. We then all made personalized styling branches and I helped paula and emily get the tailwind and daisyui configured because I had spearheaded the styling. My aha moment came when I figured out how to get the cards in favorites to look akin to what they do in our wireframes with this partial offset colored border. Lots of formatting.




## Oct/24


Today I worked on:


*aligning content in filter component with create activity component
*merging groupmates branches
*working on styling
*created a transfer styling branch


Was having some issues with the frontend filter component as sometimes it wouldn't work or seemingly didn't work but we realized (this was my aha moment) that it was because a hard coded value in the select tag was lower case while in the create activity form which was populating the database this select was uppercase so when filtering it wasn't getting it. This was changed and now it works. I continued to work on styling which is going well and created a transfer branch to move styling into branch current with main and updating styles within.




## Oct/23


Today I worked on:


*worked on frontend activity survey component
*worked on styling in the testing branch
*merging others branches to main


While I have the filter function working I'm still cleaning it up and figuring out how to display it on the actual screen. Currently it shows up in a table by mapping through the filtered activities list but I want to change this to be individual cards. My aha moment was when I got it to do this later in the day by using a daisyui component. I also was just styling our app in the styling branch a lot and figuring out how to use tailwind better.


## Oct/22


Today I worked on:


*merged branches for teammates
*worked on frontend activity survey component


Some clean up work and figuring out plans this last week before the projects due friday. I was struggling with the activity component and was close for a while but was doing something wrong and kept on getting an unprocessable entity. The aha moment came when I did some more research and tried to instead of doing the filter function all in one I made one for filtering and one for handling the filter when clicked. This set the parameters for the filter and got the data and then when the filter button was clicked it set the data.


## Oct/21


Today I worked on:


*finished unit testing for activites
*worked on tailwind/daisyui styling branch


Not as much work today but I got the activity unit test to pass, which I consider my aha moment because it was the first time I had to make a unit test myself. I also spent some time figuring out how to set up tailwing and daisy ui which was a little weird but I got it working.


## Oct/20


Today I worked on:


*merged groupmates branches into git
*started unit testing for activities
*fixed backend endpoints for users and filtered activities
*created tailwind testing branch


Filtered activities broke and I was assigned to fix it, we fixed it at the end with jordans help. I was being a little dumb and had tried a lot of different things but I don't think I took enough time to like look at it and actually try and reason what the core error was. I had changed the right thing at one point but also changed something I didn't at the same time so it didn't work. The aha moment and issue was that the filtered activities endpoint and the activities draft endpoint essentially had the same router, activities/filtered and activities/drafts were wrong because filtered and drafts are doing anything so they were perceived the same way by the computer so only drafts were working and not filtered. In the end we had to add user_id to the drafts router and that fixed it. As for the update user, it wasn't too hard because I also wrote that endpoint so I got it better, I just had to add username to the query and stuff because we had to change our tables because of front end auths requirements. I also created a branch to try out and test styling components.


## Oct/19


Today I worked on:


*finished up single user favorites
*started activity survey component


Got the delete button working on single user favorites, so now a user can see a list of their favorites and delete them as well. I might modify the favorites later or refactor if we implement a different way to get the user id because I'm using multiple .this statements which I think people don't like too much but at least it works because we've been having so many issues with getting the id. I also started the survey component, this one might be tricky because I didn't write the backend function for it this time so I feel as if my understanding of how it works in general just isn't as good. As for the aha moment I think it would be the delete button, implementing that was pretty easy and I felt as if I'm getting a better understanding overall. We also as a group had to change our tables for the code and add username into our user endpoints so that frontend auth worked.


## Oct/18


Today I worked on:


*more work on the view user favorites
*merging requests to main


Just continuing work on the favorites, was having some issues with the token thing but I think I have a work around. It looks a little weird but I had to combine the getting token function and the getting user favorites function into one. Aha would be figuring out getting the user id and getting the user favorites to appear.




## Oct/17


Today I worked on:


*finishing up sign up frontend component
*started frontend component for view user favorites


A lot of work on frontend components today, basically done with the sign up page just haven't merged yet, so that's looking good. I think the aha today for me is just understanding react better and how to get a page to display how I want in the html. A lot of practice in jsx. Starting user favorites is going alright, I'm just having to figure out how to get access to the user id so I can access the user favorites but the group is having issues with the user id, token and authentication.








## Oct/16


Today I worked on:


*continued work on the sign up page


Not a whole bunch happened today just deciding on how to proceed and plan for the project with the group. Made some decisions on categories for the survey form. For an aha moment I think it's just working with a group and keeping each other updated frequently makes it a lot easier to make decisions and not run into miscommunications.


## Oct/14


Today I worked on:


*Started working on the frontend
*Sign up page


Starting on frontend has been alright, it is a learning curve but I'm reviewing previous front end components I had worked on for past assignments and doing some research. I've been making changes and committing throughout the day. The aha moment is probably just figuring out how to call the backend code and how to structure react better.






## Oct/13


Today I worked on:


*merged delete user favorites for emily


Just merging today and cleaning up code. Not too much work, I feel like we're in a good place and everythings going smoothly so far. I'm sure as we get further along and to the front-end components that things will start to pick up but I'm feeling positive. For the aha I think it's just feeling more confident in our project and I think we work well as a team.






## Oct/12


Today I worked on:


* started working on the add an activity to user favorites
* started the endpoint for getting the favorite details for a single user


Mostly just working on endpoints but it's going well. Posting to favorites is a bit confusing but I think that's just a learning curve considering I haven't worked with associative tables before. I watched some videos on it and got more now so I'm not too worried they make a lot of sense logically, just translating that to code is a little different. My aha moment was probably after consulting my group mates and doing some more solo research on associative tables and how to relate the user id to the activity id. The post favorites endpoint makes more sense now.


In terms of getting a single user favorites endpoint that's a lot easier now that I got the post favorites endpoint to work. I just had to create a select query and was testing this out in beekeeper which was very helpful.






## Oct/11


Today I worked on:


*updated merge issue descriptions in gitlab
*worked on edit and get single user profiles


Got update merged with main and continued to work and finish up the get single user endpoint as well. Endpoints are making more sense to me now and I think we're in a good place with the project so far. Getting the update to work was a bit of an aha moment in terms of understanding how to further create endpoints and implement them although maybe that was more yesterday's aha but I feel as if it's clicked more today.








## Oct/10


Today I worked on:


*finished get one user endpoint and finished update user endpoint


Some issues getting update user to work, there were conflicts with hashed_password and authorization, but I think the code works effectively now. Getting one user endpoint works. Committed changes to the branches so ready to merge for tomorrow. Little aha is getting the update to work, very happy about that.






## Oct/9


Today I worked on:


* created branches for the update and get one user endpoints


Transferred over code written before break to new branches and began modifying to work along with already finished endpoint code. Discussed activity categories and came to final table decisions. Aha moment when starting to merge work with others, the merges are making more sense on git lab.




## Sep/29


Today I worked on:


* finished delete endpoint and merged with main


Delete endpoint wasn't too hard especially after having finished the other user endpoints. In terms of an aha moment I think the delete endpoint makes a lot of sense and understanding the structure will probably help when writing other endpoints that do a single function, like delete endpoints for favorites and activities.




## Sep/28




Today, I worked on:


* writing code for user endpoints, solving bug with migrations


Wrote out all needed endpoints for users but in the process of implementing authentication. Some errors and things I need to figure out but it should be ok. Also wrote code for queries, routers and in authorizor.py in a separate branch erin-authorization-test which is also my aha moment because fastapi makes more sense now. Plan on fixing it during break.




## Sep/27


*getting project set up
*creating a users table


Helped create users table which I also consider my aha moment because I had to do it through migrations which was interesting. Just in general figuring out our plans and scheduling for the project and how to split up work.


## Sep/26


*doing some research for the users table


No code yet but just doing some research for when we have to create tables with menaz. In terms of an aha it would probably be just doing this initial general research and starting to have a greater understanding of how we are going to build the project as a whole.
