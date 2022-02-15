![WuwWug Trading App](public\assets\images\logoSlogan.png)
# WuwWug

WuwWug is an app to streamline the trading process of in game items for Diablo 2 players. Diablo 2 is a popular action RPG released in 2001 and "resurrected" in 2021 with a large and dedicated fan base. WuwWug means "What U want? What u got?" which has been common shorthand trade dialog since 2001. The game is centered around a carefully balanced economy of rare items, which players trade between each other. A player may play for dozens or even hundreds of hours to find just ONE of these sought after items. To trade these items players typically make in-game trade lobbys or form groups on social media sites and post items, negotiate through comments, and then arrange a trade. WuwWug was created to greatly streamline this process. Instead of trudging through "homepages", "profiles" and "latest news" just to use the site for trading, Wuwwug allows users to quickly do exactly what they want- buy and sell in-game items. No need for usernames, avatars, quotes, discussions etc.. Just What U Want and What U Got!!! 

Application is deployed using Firebase at [https://wuwwug-b2656.web.app/](https://wuwwug-b2656.web.app/)

## USER STORY:
As a Diablo 2 player since 2001,  
I want to post the items I have found to be sold to the highest bidder   
I want to find items other players have found and make my best offer
I do not need any more information than is essential to these trades   
  
When I search for an item 
Then all items matching that item name will be displayed on the screen
All information necessary to accurately value the item will be visible

When I enter an offer for the item  
Then if the offer is the highest bid, I will get a notification that my bid is accepted
if it is NOT the highest bid, I will be notified that I need to bid higher.

When I add an item to my Stash,  
Then the item is stored in the database and will be visible to users who search for that item.


## INFOMATION: 
This application will utilize: React, React Router, Firebase (authentication, storage, hosting), Sass, JavaScript, Bootstrap(minimal).



## Future Additions 


-Search results ordering - example: .orderBy("value", "desc")
- Search results filtering - example: .where("value", "<", 1000)
- Allow bids of items and runes, instead of just FG. (Items and runes still integer values) 
- Items post in auction format with an end timer to listing
- Have special groupings of items, and special auctions for them (gg items, noob items,staple items etc.)


