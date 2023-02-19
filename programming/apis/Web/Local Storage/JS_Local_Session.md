# Cookies

## JS Cookies vs Local Storage vs Session[^1]
[^1]: https://www.youtube.com/watch?v=GihQAC1I39Q

- **Similarities**: 
  - Stored in browser, browser independent
  - Users do not share local cookies
- **Differences**
  - Local Storage/Session Storage More similar
  - *Storage*:
    - Cookies: 4kb
    - Local: 10mb
    - Sesson: 5mb
  - Cookies supported in older browsers (HTML4
  - Session storage is only available on same tab (one tab as a time)
  - *Expiry*:
    - Cookies: Manually set expiration
    - Local: Never
    - Session: On Tab Close
  - *Location*:
    - Cookies: Browser & Cookie
    - Local: Brower only
    - Sesson: Brower only
  - Use Local & Session Storage for MOST things, use Cookies when you need communication with server
- Where to find your storage: Dev Tools > Storage
- **How To Set Each Storage Type**

    ```js:local
     localStorage.setItem('name', 'xyn')
     localStorage.getItem('name')
     localStorage.removeItem('name')
     ```

    ```js:session
    sessionStorage.setItem('name', 'xyn')
    sessionStorage.getItem('name')
    sessionStorage.removeItem('name')
    ```

    ```js:cookie
    document.cookie = 'name='xyn'; expires=' + new Date(2020, 0, 1).toUTCString()

    console.log(document.cookie)
    ```

  - cookies are a bit hard to use so use a small library instead

----------

