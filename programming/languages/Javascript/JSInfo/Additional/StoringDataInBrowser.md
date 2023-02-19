# Storing Data in The Browser

# Cookies, document.cookie

- set by web server using response `set-cookie` HTTP header
- browser auto adds them to every request to same domain using `Cookie` HTTP-header
- used widely for authentication
- also can use `document.cookie`

- `document.cookie` is a getter/setter. Only updates cookies mentioned in it.
`document.cookie = "user=John"`
- `encodeURIComponent(name)` for formatting
`document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);`
- path=/mypath - must be absolute
- domain: defines where a cookie is acccessible. By default not shared to subdomains
- expires/max-age: without options, will disappear when browser closed (Session cookies)
- set `expires` or `max-age` option of cookie
```js
// +1 day from now
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "user=John; expires=" + date;
```
negative or zero date gets deleted.
- secure: Transfered only at HTTPS
- samesite=strict. Never send cookie if user comes from outside same site
- samesite=lax (adds exceptions to browser sending cookies from outside site)
- getCookie(name)
- setCookie(name, val, options)
deleteCookie(name)
- cookies from EU citizens - GDPR requires to ask for permission.

# LocalStorage, sessionStorage

- Storage for key-value pairs in browser
  - can store more than cookies
  - Storage objects use set/get properties, like a Map collection with an index key
- localStorage
  - shared between all tabs from windows of same origin
  - data does not expire
  - object-like access (though not recommended)
  - can be looped with a for-loop for for...in
  - Strings only
- sessionStorage
  - only exists in cucrrent browser tab
  - another tab will have different storage
  - survives page refresh but not tab open/close

- On updating localStorage, `storage` event triggers on all window objects where storage is accessibale.

# IndexedDB
- database built into browser, more powerful than localStorage
  - stores many values of keys, multiple key types
  - ky range queries, indexes
  - stores big volumes of data.

- intended for offline apps. Event based
- usually stored in visitor's home directories
- has versioning - open with specfic version number

- Object store
  - like tables. Unique key for every value in the store
  - key must be: number, date,string, binary, array. Unique identifier

- Transactions: CRUD like actions
- cursors: special object that traverses object sotrage, returns one key/value at a time

- Basic Usage:
1. get promise wrapper
2. open database
  - create object storages and version update if needed.
3. On requests:
  - Create transaction, get object store
4. To search key, call methods on store directly
  - To search, create index
5. If data does not fit in memory, use a cursor