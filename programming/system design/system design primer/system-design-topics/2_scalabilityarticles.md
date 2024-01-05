# Scability Article Series (Le Cloud Blog)
[Link Here](https://web.archive.org/web/20221030091841/http://www.lecloud.net/tagged/scalability/chrono)

## 1 - Clones
- Servers in a scaled web service are hidden behind a load balancer
- The load balancer evenly distributes load such as user requests onto your cluster of app servers
- The user should always get the same results of request back no matter what server he's hitting
- Each server contains THE SAME codebase and DOESN'T store user related data (sessions, profile pics, etc) on memory
- User data should instead be stored in a centralized store
  - External database or external cache (like Redis)
- You create an image file from one of these servers as the "master" that all other instances are based on.
  - AWS version: AMI "Amazon Machine Image"

## 2 - Database

- You may find your app has gotten slower and slower even though it's horizontally scaled
- The problem: Database using MySQL
- You can offset some of the MySQL problems with sharding, denormalization, SQL tuning, etc. 
- Butit's probably better to denormalize right from the beginning:
  - REMOVE ALL JOINS - do them in application code instead
  - Try to use your database like a NoSQL database or switch to a better scaling NoSQL option like MongoDB

## 3 - Cache

- Your users might still have slow page requests when a lot of data is fetched from db
- Solution: Implement a Cache
- Use an in-memory cache like Memecache or Redis
  - Simple key-value store
  - Buffers your app and data storage
  - Caches are extremely fast
- 2 patterns of caches:
  - Cached Database queries
    - Store result datasets in a cache
    - Issue: Hard to delete a cached result and hard to track down which cache results to change
  - Cached Object
    - Let your class assemble a dataset and store the instance of the dataset in the cache

## 4 - Asynchronism

- 2 paradigms of asynchronism in web services
  - Async 1: Prerendered and locally stored pages as static HTML files (Craigslist) stored to a CDN
    - These tasks are done on a regular basis
  - Async 2: Special requests: Handle tasks asynchronously
    - Use a queue with workers: Job queue checked by workers and then sends signals when work is done. The frontend plls for changes and informs user about it.
- If something is time-consuming, try to always do it asynchronously.
  