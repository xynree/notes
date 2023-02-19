# Frames and Windows

## Popups and Window Methods

`window.open(url, name(window.name), params(configstring)j)`
- most browsers block if called outside of handlers like onclick
- .open returns a reference to new window
- must wait for onload to modify the new window
- popup can access opener window with `window.opener`
- `win.close()` - close popupnot closed
- `win.closed` - check if closed
- window.close ignored by most browsers if window not created with window.open()
- Methods for moving/resizing windwo: moveBy, moveTo, resizeBy, resizeTo
- Scrolling, Focusing moethods

## Cross-window Communication (CORS)

- 'Same Origin' policy limits access of windows/frames to each other
- Two URLS have 'same origin' if same protocol, domain, port
Same origin:
(http://site.com) -> (http://site.com/my/page) 
Not Same origin:
(http://www.xinrui.work) !-> (http://xinrui.work)

- Policy: If we have reference to another window: (pop or iframe) and window comes from same origin, we get full access
  - Otherwise: If info comes from another origin, no access to outside content (except `location` : but still can't be read, only used to redirect user)

- `iframe` hosts separate embedded window
  - access with `iframe.contentWindow`, `iframe.contentDocument`

- subdomains
  - usually `xinrui.work` != `blog.xinrui.work`
  - wiindow can run CORS authentication if
  `document.domain = 'xinrui.work'` is run on each.

- When an iframe is loaded, it creates a new window. use setTimeout to 'catch' new window
  - or use window.framesj
  - `sandbox` iframe excludes actions by forcing 'different origin' policy for iframe.

- Cross-window messaging
  - `postMessage`
    - if both windows agree and call corresponding JS functions, they can get around CORS policy
      - sending window calls `postMessage` of receiving window win.postMessage(data,targetOrigin)
        - data - any data to send
        - targetOrigin: specifies origin for target window
          - can be set to * to skip this check.
      - onmessage
        - to receive message, target has handler on message event. wtriggers when `postMessage` called

# Clickjacking Attack
- allows page to click on a site on behalf of visitor
  - half-transparent iframe put over a link sends details out from site