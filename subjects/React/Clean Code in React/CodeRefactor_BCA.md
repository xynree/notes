# Code Refactoring (Better Coding Academy) [^1]

[^1]: https://www.youtube.com/watch?v=DfUKm0Pty2M


- check out using Parcel instead of CRA
- service workers make info about your website available offline
  - Not necessary in most situations, consider the project
- **Use nested directory structure:**

  > - App  (App includes Container)
  >   - Container (includes Posts, News)
  >     - Posts 
  >       - index.js
  >       - all imported dependencies.js
  >     - News (js files here)
  >       - index.js
  >       - all imported dependencies.js

  tip:

  > if you rename a file **FolderName/FileName.js** it will stick itself into the corresponding folder location!

- **Aliases**
  - Using *Parcel*: define Aliases in the  *package.json* folder. 
    - NOTE: Next.js can do this natively as well
    - One use: Define import globally (such as a functions file) and relink to it:
  
      ```js:package.json
      "alias": {
        "#actions": "./src/actions",
        "#components" : "./src/components"
      }
      ```

- **Shared Components**
  - Put shared components into a different folder!
    - Stuff like "functions.js" should go into *"shared"* or *"Helpers"*
- To rename imports click "Rename Symbol"

--------

# To Do List Code Review [^2]
[^2]: https://youtu.be/ty1Ib3M6gtk

- Organize inputs alphabetically if possible
- React Router should wrap around whole project
- Functions that go into API/helpers should go into a separate folder from Components (Helpers/Api/Util)
- using Local Storage, make sure localStorage exists on browser first so app doesn't break

    ```js:
    window.localStorage && setAuthToken(window.localStorage.token)
    ```

- don't put Auth tokens into local Storage, place into Cookies (secure)
- only put 1 package.lock or yarn.lock don't have both

- uses Parcel to create and make aliases
- use Search bar on left to find different files across project
- split smart/dumb components. dumb components can be placed into "shared" folders

