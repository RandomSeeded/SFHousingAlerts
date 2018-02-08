OK so the general plan is:

Create the ultimate guide to people finding housing in SF

Once you have a lot of people regularly checking out your ultimate guide to finding housing in SF

Then we start making tools to help them find the housing and we charge em for it

We also have the possibility of charging landlords who stumble across this ultimate guide to housing in SF money to get put on the guide.

If we did that latter one we would need to make sure they get vetted as non-shitty first. Unclear how you would do that.

----------------

For the guide - needs really good content, visibility, and needs to be a living, breathing, document
I think it would be helpful to post on Medium (good visibility)
Also it would be good to have its own dedicated subreddit

We need to make sure we don't have too much overlap if we're going to want to be this ultimate destination.

Resources that exist:

- SFBayHousing (this is mostly a craigslist alternative: it's people trying to find renters / apts)
- SFHousingAdvice (dead subreddit)
- Padmapper (no longer uses craigslist data, kinda useless. Does use airbnb)
- Hotpads - which actually has a good feature for alerts of 'instant' vs 'daily' but doesn't scrape craigslist
- Facebook Groups

---------------

Functionality for my tool:
- alerts via email & possibly eventually text
- maximum commute distance

-------------------

Would it actually be good to just have a separate site for a living SF housing guide? Is there a need for that?

Yes, this is a good idea. Have a site just for SF Housing guide. Have a subreddit for the guide, and be really responsive as far as answering questions on that subreddit.

Sections you need in any housing guide:

1. Guide to the neighborhoods
- IMO this would have some sort of sliding scale of things such as: price, amount of shit to do (what's proxy for this? you can just make up a #), safety, quality of schools
- You can just make up numbers for the different neighborhoods and adjust them to be more perfect later
- I'm not sure how best to display this stuff - ask for advice from one of your frontend-capable friends. General idea would be that you'd have a simplified map of SF neighborhoods, and then you pick which attributes are most important to you and it changes colors on the map accordingly
- That seems like a fucking complicated component. Maybe not impossible though.
- When you click on one of the neighborhoods it gives a little blurb and shows the scores for that neighborhood

2. Finding apartments to look at
- MVP: content (text) + suggest other tooling. E.g. you can use padmapper but don't bother b/c it sucks. Set up IFTTT. Plug the fact that you'll have a tool coming down the pipeline
- This is where we eventually put tooling around alerts (what do we do if we get a C&D?)

3. Going through the process
- Probably just content, a la:
  - "This is how you reach out to landlords"
  - "This is what you bring with you"
  - anything else? What else do you need to know? Well ask people ask more questions you can expand

4. ??

--------------------

Layout:

??

Splash page: it's fucking important
Menu bar down the lefthand side? On the top? What will it look like on mobile? It's really important this be a clean UI on mobile.
I think I want to do a top-fixed navbar. It only has a few sections, at least for now. We can always change this later.

Interesting thought: this is actually the rare thing that might make sense to have as an app. Huh.

