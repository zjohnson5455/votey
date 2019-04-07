# Votey
Authors: Zack Johnson, Brian Tomasco, Max Farrens

Submitted for Hack Dartmouth V on 4/7/2019

## Summary

Votey is an app that encourages people to get out the vote using social incentives. Votey is centered around "voter groups", collections of individuals that pledge to hold each other accountable for voting during election season. 

Individuals are incentivized in two main ways:

1. **Group Statistics**: whenever a member of a group votes, the entire group is automatically notified. This notification informs the group of which member voted, the members left that still need to vote, and the days remaining in which to vote. This serves to both encourage and pressure remaining members into getting to the polls. 
2. **Completion Prizes**: if every member in a group manages to vote before the deadline, the entire group will receive a prize (with value determined in relation to the size of the voter group; larger group success deserves greater incentive than small group success). These prizes will include coupons, perks and free items/services at local businesses, in addition to the ability to donate earned rewards to non-profits or political campaigns, further increasing the strength of the vote movement. 

## Submission
Included below (in the next section) are all the design features we intended to incorporate into Votey. However, we ran into many challenges along the way and ended up with a more barebones app than originally planned: we are proud of our submission nonetheless! As it currently stands, our app has complete account creation and login functionality, implemented with FirebaseAuth, as well as the ability to form voting groups out of users (this feature has not been fully implemented on the frontend, but we have the necessary structures already set up behind the scenes). 

After creating an account or logging in, we have some basic app functionality that we created using React Native. We have a functional homescreen that includes voting information (e.g. polling location) and all group memberships. Clicking any of these groups results in a new screen that includes data about that group, including vote completion (both as a numeric statistic, and as a color-code on individual users: members that have yet to vote are colored red, while those that have voted are green). These data allow members to track each other and offer encouragement, and also provides a clear and visual form of peer pressure, incentivizing timely voting. Red users will only turn green by voting, and so they are encouraged to vote as soon as possible. 

In order to validate voting, we had intended to use location services coupled with Google Civic API to check for attendance at identified polling locations. However, despite being a relatively straightforward API, we ran out of time to get it up and running. We ended up spending most of our time building our app up from scratch and attempting to get basic back-end functionality running. In retrospect, we should've used a pre-built framework, or written an extension for an existing app to save time. For example, I (Max Farrens) had never written in JavaScript or CSS, let alone React Native before, and so half of the day had passed before I had some basic familiarity with the syntax and constructs; half of the day had passed before I wrote a single substantive line. That's okay though... I got a crash course in React and JavaScript! We were also unable to get the messaging component up and running, but this could be implemented in the future. 

We are still very excited about our idea, and think it warrants further development in the future. Next time we will come in with a little more direction, and a lot more technical knowledge. This should allow us to hit the ground running and cruise through the finish line instead of cramping up at mile 10 and continuing to run on pure adrenaline, pride and Red Bull.

As it stands, we are proud to submit an app that we really did build from scratch. It has limited functionality and retro WordArt graphics, but it captures the essence of our plan, and stores information about users in a database. If we continue with it (and possibly hire a graphic designer...) we think it has real potential to get out the vote and make a real difference. Please keep reading if you are interested in more detailed design plans.  



## Account Creation
Users will first need to create an account. This account will be used to create new groups or join existing groups and invite others to do the same. Account information includes (required fields have an asterisk):

- username*
- password*
- registration location*
- age
- gender

Registration location will be used in conjunction with Google Civic API to determine specific voting location for the user. This information will be auto-populated to save users the hassle of determining the proper location on their own. This location is also used to validate vote completion: voting is "complete" after a user spends a specific amount of time within the polling location, as determined by location services. 


## Screens
#### Initial Screen

1. **Login**: input credentials (username and password). After validation, port to main app, which consists of multiple options that are selected via Instagram-esque bottom tabs.

#### Tab Screens:

1. **Homescreen**: this screen navigates all current groups. It shows the name of each group as well as basic summarizing information for quick reference. These groups are listed in a GroupMe-esque fashion: each group is a button that is labeled with the group name (and possibly profile picture) and can be pressed in order to port to a screen for that individual group (explained below). If a user belongs to more groups than fit simultaneously on the screen, scrolling will be employed. This screen also contains a button for search (to join a group) and a button to create a new group.
2. **News**: this screen contains a political news-feed based on location (implemented using a News API or other app). While not meant to be a replacement for a dedicated news app, this allows users to receive quick updates and share within their groups without ever leaving the app. 
3. **Prizes**: this screen contains a listing of possible prizes for different voting group sizes. Users can learn about the prize, the sponsor and the completion requirements (e.g. do all voters need to local? How big does the group have to be? Is there a special incentive for early submission?)
4. **Profile**: this screen contains stats/data about the individual user, as well as a button for user settings (e.g. profile picture, information, password, etc.) and for group settings (e.g. leave a current group)

#### Group Screens:
1. **Messaging**: this screen allows a user to message out to an entire group (i.e. send a reminder, encouragment, etc.) in a groupchat style. Like in Instagram, this messaging screen will NOT have the bottom tabs, but instead will incorporate a back arrow in the upper left corner to return to the main screens. 
2. **Data**: this screen allows a user to keep tabs on the group. It shows all group members as tiles that are color-coded based on their vote completion (i.e. red for incomplete, green for complete). It also includes the overall percent complete, the prize that the group is aiming for, and the registration locations of everyone in the group. 

Thanks for checking out our submission!
