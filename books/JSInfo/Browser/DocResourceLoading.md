# Document and Resource Loading

## Page: DOMContentLoaded, load, beforeunload, unload

- lifecycle of HTML page has 3 events:
  - `DOMContentLoaded`: browser fully loaded HTML and DOM tree is built. External resources not yet loaded. Handler can lookup DOM nodes, initalize interface.
  - `load`: all external resource is also loaded. Handler can apply styles, use image sizes, etc
  - `beforeunload/unload` - user is leaving page. Handler can send statistics

__DOMContentLoaded__
- Happens on document object.
- Use addEventListener to capture
```js
document.addEventListener("DOMContentLoaded", ready)
```
- DOMContentLoaded happens after all script tags are loaded, except async scripts and dynamic scripts.
- If script is placed after style tag, script waits until stylesheet loads.
- Default action by browser: Browser autofills forms

__window.onload /window.onunload/ window.onbeforeunload__
- load event triggers when whole page loaded including styles, images, other resources
- unload triggers when visitor leaves a page.
- for analytics: `navigator.sendBeacon(url, data)` sendBeacon runs as an HTTP request.
  - special tags: keepalive flag for after-page-left actions
- `beforeunload` handler asks for additional confirmation before user leaves the page.

__readyState__

- if DOMContentLoaded handler is set after doc is loaded, it doesn't ru.
  - to setup execute when DOM is loaded, use `document.readyState`
  - document.readyState == 'loading' (is loading), 'interactive' (DOM loaded), 'complete' (everything loaded)

## Scripts: async, defer

- Scripts are executed immediately in syntax
- Bulky scripts can block page
- `defer` tells browser to not wait for script, instead run when DOM is fully built.
  - will not block page, run when DOM is ready (but before `DOMContentLoaded`)
- `async` makes script nonblocking
  - other scripts don't wait for `async`
  - runs in 'loadfirst' order
  - good for third party/external scripts.

- Dynamic scripts
  - can create and append(script) dynamically with `document.createElement('script')`
  - 'async' by default, can be changed with `script.async=false`. 

## Resource Loading: Onload/OnError

- script .onload and .onerror tracks loading of external resources
- `script.onload = ()=> {..}`
- works for any resource with external src.
- can only be used with scripts loaded from our own domain.
- This is called cross-origin-policy (CORS)
  - to allow cross origin access - script must have crossorigin attribute, plus remote must have special headers
    - 3 levels of CORS access
      - 1. no crossorigin: access prohibited
      - 2. crossorigin='anonymous' : access allowed if server responds with header `Access-Control-Allow-Origin` with * or our origin. No auth info or cookies sent out.
      - 3. crossorigin-'use-credentials' : access allowed if server sends back `Access-Control-Allow-Origin` with our origin and `Access-Control-Allow-Credentials: true`. Browser sends auth info and cookies to server.
