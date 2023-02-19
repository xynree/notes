# Web Requests Study


Questions:

1. Journey as a developer: I originally trained as a designer but took an interest in coding and am working through Thinkful as such. I have an interest in building programs and solving problems as well as learning new technologies, which is why I love the web as it is a field that is ever expanding.
2. Understanding of API's : API's allow two apps to talk to each other: Application Programming Interface. API's allow users to get data using various types of endpoints and requests.

Code Review:
Explain how promises work and when each thing is called...


Live Coding -
Make exercises similar to the ones in modules.






# Explain the client & server relationship on the web.
An example of a client is a user's computer or web browser. When someone goes to a web page, they as the client make a request to a server to return some data. The server hosts data and manages calls coming in from the client.

# What is Test Driven Development?
TDD is a style of coding in which tests are written first in order to betterunderstand all the functions of code that need to be fulfilled for your project. Tests are written before or concurrently with the actual code, and doing this helps get a broader understanding of what needs your code will fulfill.

# What is a user story and what is the format of it?
A user story is an explanation of a certain software feature or functionality from the perspective of a particular user. The format of it is: Description, Functionality, and Benefit. (DFB - duh fuk bro..why doesn't this work!)

# What is the purpose of GIT and a few common commands?
Git is a version control system, it makes it possible to save different versions of your project and collaborate on it with others. In order to add to your project, you initialize a git repo, add all files you wish to track, then commit it with a message and finally, push to your repository somewhere like GitHUb.

# What is the difference between asynch/synch code?
Code is normally Synchronous, single threaded and runs from top to bottom. Asynchronous code makes it so that certain calls can run outside of that ordered context, such as requests to a server for data. 

# What are some different ways to write asynchronous code?
Promise Chaining, Async/Await

# What is the package.json file?
Package.json gets created when you initialize a Node project. It holds data relevant to it, such as all the dependencies used for building the project, as well as scripts you can call to start, build, etc.

# What is a promise? How do they work?
A promise is an object representing the eventual result of an asynchronous operation. It has 3 states: pending, resolved, rejected. When creating a promise, it evaluates some data and then depending on how it resolves, returns a resolve or reject message sometime in the future for the user to  handle.

# What is promise.resolve vs promise.reject?
Promise.resolve is what is returned successfully from a promise and is managed in the .then function. Promise.reject is used for errors and is returned in the .catch function.


# Explain promise chaining with then/catch.
Normally in order to handle data back to back from a promise, one must call a .then inside another .then in order to get the order of operations right. However, if the user returns inside a .then, the result of that will be passed to the next .then value, working down the chain synchronously.


# What do promise.all and promise.allSettled do and how do they work?
Promise.all and Promise.allSettled take an array of promises and return back an array of result data. The difference is that Promise.all will reject if one promise in the array fails, while Promise.allSettled returns back an array with all the statuses of each Promise attached

# What does the async keyword do?
Async keyword marks a function as asynchronous. This means you can write code in a cleaner way without using then/catch. 

# What does the await keyword do?
Await pauses execution until the returned promise is executed.


