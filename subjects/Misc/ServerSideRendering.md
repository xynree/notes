
What is server side rendering?

    - Taking client side website and rendeering static HTML/CSS on server
    - makes website render faster

    - Critical path: 
        - most important pieces delivered to browser
        - how fast browser renders : depends on how its built
        
    - HTML w/ references
    - CSS must parse first
    - HTML+CSS renders page
    - JS: render/parse time takes a long time
    - if render dependent on JS
    - frameworks can "tie up" code in javascript
    - SSR: generates html on server
        - HTML parts load immediately before JS comes up
    - Cost of SSR:
        - time on server side 
            - Firebase Hosting
                - dynamically generate: cloud functions
                - generates from a CDN cache
                    - local CDN edge
                - JS is heavy on browser's main thread
                    - interactivity depends on when JS finishes loading
                        - TTI : Time to Interactive

Summary:
    - Server Side Rendering takes the HTML/CSS parts of the application and moves it to be delivered by the server before being sent to the browser.
    - Frameworks that are client-side can be slow because they are waiting for the JS to load before displaying whole page. SSR fixes this by sending the HTML/CSS first, loading essential content on the page first before the JS so the whole site doesn't hang.
    - There are ways to speed up the JS load, including hosting from CDN cache's and pulling from this CDN edge.*


nextjs:
CSR: client-side rendering
SSR: server side rendering
SSG: static site generation
ISR: incremental static regeneration

- Plain React app:
    - No prerendering:
        - Initial Load: app is not rendered
        - Hydration: react components initialized, app becomes interactive

- Using Next.js
    - Initial load: pre-rendered HTML displayed
    - Hydration: react components initialized
        
- Static Generation
    - HTML generated at build-time, reused for each request
        - hosted at the edge by Vercel
    - Static Gen without Data
        - pages generated w/o fetching external data at build
    - Static Gen with Data
        - next build -> fetch external data -> HTML generated
            - getStaticProps

- Incremental Static Regeneration
    - add 'revalidate: 60 //seconds' to check fetched information
        - updates cache with new data every time it revalidates

- getStaticPaths
    -page urls depend on outside information
        - next build -> fetches info -> generates paths based on data
            - pages/posts/[id].js
            - fallback*

- Server-Side Rendering
    - HTML is generated on each request
    - getServerSideProps
        - fetch products, return as props to react component

- Static Generation w/o Data - Fetch Data on Client-Side
    - Pre-rendering on Server (load state)
        - When JS loads, request is made to server.
    - useSWR: react hook lib for data fetching

Summary:


    - NextJS has many ways of fetching and loading data from server for both client and server side rendered pages.
    - normal React must wait for JS to load before the full page loads
    - NextJS components render HTML first before loading js (static gen)

    - getStaticProps prerenders the page at build time using props returnedby function (server side). You can use server functions such as data queries. Cached by CDN


    - getStaticPaths fetches URL's based on fetched data, rendered statically at build time. cached by CDN


    - getServerSideProps: prerenders page on request usin data returned by getServerSideProps. Computes result on every request rather than on build. 
        - only exported from a page

