# Week3
Week 3 submission-cookies

Project Description
This project is a simple incremental “Cookie Clicker” style game built using HTML, CSS, and JavaScript. The user runs a bakery where cookies can be produced by clicking on a cookie and by purchasing upgrades that increase cookies per second (CPS). Upgrade data is fetched from an external API, and game progress is saved using local storage so users can continue where they left off.

Requirements Achieved
🎯 Fetch upgrade data from an API and apply upgrades to the game
🎯 Use functions to keep code organised and reusable
🎯 Implement event listeners for user interactions
🎯 Use local storage to save and restore game progress
🎯 Use setInterval to update the game state every second
🎯 Manipulate the DOM dynamically using JavaScript

What I Found Difficult
One of the main challenges was understanding how JavaScript executes from top to bottom and how this affected local storage. I initially struggled with CPS values being overwritten on page load because saved values from local storage were replacing my default variables. Debugging this helped me better understand execution order and persistent state.

Another challenge was dynamically creating upgrade elements and ensuring each Buy button worked independently without breaking the overall game logic.

I also found CSS layout and styling difficult at times, particularly when centring elements and working with flexbox. One specific issue I could not fully figure out was why the following CSS only worked when both rules were present:

.underCookie {
  text-align: center;
}

.underCookie {
  text-align: center;
  margin-bottom: 20px;
}
When either rule was used on its own, the centring did not always apply correctly. So i just left it as it is, since it worked. 

What Went Well

Fetching upgrade data from the API and displaying it dynamically
Implementing a working upgrade shop that affects CPS correctly
Improving user experience by disabling unaffordable Buy buttons
Adding sound effects for better interaction feedback
Styling the interface to feel more like a game rather than a basic page
Breaking the project into small steps made the task manageable

I found that focusing on building and testing a single upgrade card first was the most effective approach. By making sure every part of one upgrade worked correctly before adding more, I was able to understand the logic step by step without feeling overwhelmed. Once this was working, I extended the same structure to the remaining upgrades.

Introducing the forEach loop did cause some issues, as I needed to carefully think about what variables and references to replace, and I initially lost track of brackets and syntax such as (), {}, and ;. However, breaking the problem down in this way helped me visualise how the code was structured and made it much easier to understand how looping over the upgrades worked in practice.

I used a range of  resources while building this project, including YouTube tutorials, TikTok tutorials, MDN documentation, and examples from previous workshops. These resources supported a trial-and-error approach, allowing me to explore new features, debug issues, and reinforce my understanding of JavaScript logic, DOM manipulation, CSS layout techniques, the Fetch API, and local storage.What I Would Improve With More Time

With more time, I would:
Add a mute or volume control for sound effects
Improve accessibility further (ARIA labels, keyboard support)
Add clearer visual indicators for purchased upgrades

