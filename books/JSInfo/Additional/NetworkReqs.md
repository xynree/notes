# Fetch
- AJAX: Asynch Javascript and XML
- `fetch()` : `let promise = fetch(url, [options])`
- returns a `promise`, resolving to an object of the built-in class `Response`.
- rejects if `fetch` unable to mak request
- HTTP response props: `status`, `ok`
- for response body, needs an additional method call:
  - ` await response.text()` -> as text
  - `await response.json()` -> as json
  - `await response.formData()` -> as `FormData`
  - `await response.blob()` -> as `Blob`
  - `await response.arrayBuffer()` -> as `arrayBuffer`
- only one body-reading method works
- `response.headers` is a Map-like object

- Post Requests: fetch with a request body, usuallly JSON-encoded string

- Sending image - use `Blob or Buffersource`

# FormData

- object to represent HTML form data
- `fetch` can accept `FormData` object as a body
- can modify fields with methods:
  - .append(name, value), .delete(name), .get(name), has(name)
- .set removes al fields with given name, then appends a new field. Otherwise form can have many fields with same name
- can be iterated with for ... of loop
- files can also be sent with FormData natively
- images can be appended to the FormData with form.Data.append('image', imageBlob', 'url')

# Fetch: Download Progress

- only for download not upload
- `response.body` provides `ReadableStream` that provides body chunk by chunk (Streams API)

```js:Reader
// instead of response.json() and other methods
const reader = response.body.getReader();

// infinite loop while the body is downloading
while(true) {
  // done is true for the last chunk
  // value is Uint8Array of the chunk bytes
  const {done, value} = await reader.read();

  if (done) {
    break;
  }

  console.log(`Received ${value.length} bytes`)
}
```
- `await reader.read()` returns object with 2 props: 
  -`done` when reading is complete, otherwise `false`
  - `value`: typed array of bits
-  We receive response chunks in the loop, until the loading finishes, that is: until done becomes true.

- To log the progress, we just need for every received fragment value to add its length to the counter.

# Fetch: Abort

- `AbortController` cancels an ongoing `fetch`

`let controller = new AbortController();`
- method abort()
- single property `signal` that allows to set event listeners on it

- when abort() called -> controller.signal emits `abort` event, controller,signal.aborted = true
- can be used natively with fetch
```js
let controller = new AbortController();
fetch(url, {
  signal: controller.signal
});
```
- Scalable, will cancel all fetches at once

# Fetch: Cross-Origin Requests

- CORS is allowed only with explicit permission by server
- 2 types of requests:
  - Safe: GET, POST, HEAD, Headers: Accept, Accept-Language, Content-Language, Content-Type
  - Unsafe (server sends preflight)
- if CORS, browser adds `Origin` header
- Unsafe requests use preflight with `Options` method
- Server must respond with 200 and specific headers (Access-Control-Allow-Origin, etc) to OK request.

# Fetch API

- Other methods
- `Referrer`, referrerPolicy: Change how fetch sets HTTP Referrer header
- `mode`: prevents CORS, safeguard
- `credentials`: should fetch send cookies and HTTP Auth headders with requests?
- `cache`- edit HTTP cache usage options
- `redirect`: allows to change redirect options
- `integrity`: checks if response matches a known checksum algorithm
- `keepalive`: req may "outlive" web that initiated it

# URL Objects
- interface for creating/parsing URL's
- syntax: `new URL(url, [base])`
  - url: full url or path, base: optional base url
  - `let url2 = new URL('/profile/admin', 'https://javascript.info')`
- Allows to directly access different components in url:
  - href, protocol, search, has, user/password
- Can be passed to `fetch` or `XMLHttpRequest` instead of a string

__SearchParams"?..."__
- url.searchParams provides methods for search params: append, delete, get, getAll, has, set, sort, and has iteration

__Encoding__
- passing parameters to `URL` unencoded will give back encoded URL as result
- Endoing strings
  - encodeURL & encodeURIComponent / decodeURI, decodeURIComponent
  - These can be used to encode strings for compatibility with URL

# XMLHttpRequest

- browser object that allows HTTP requests in JS
- operates on any data, mostly replaced by `fetch`

__Basic Requests__
- 2 modes: synch/asynch
- Asynch:

```js
let xhr = new XMLHttpRequest();
xhr.open(method, URL, [async, user, password]) // sets up basic params of request (http method, url to request, async/sync, user/pass)
xhr.send([body])
```
- Listen to xhr events for response
  - load: when request is complete
  - error
  - progress: triggers while response is being downloaded
- Result is received in:
  - status: status code
  - statusText: status message
  - response: response body
- `xhr.timeout= 1000 // in ms` Timeout can be specified for requestg as well

- Response Type : `xhr.responseType` sets response format
  - `xhr.responseType = 'json';`

- Ready States; `xhr.readyState` holds state from 0 - 4 (4 being done)
  - can track with `xhr.onreadystatechange`

- Aborting Requests: Can be terminated with `xhr.abort()`

- Synchronous Requests: if `open` method is `false`, req made synchronously. Rarely used.

- HTTP-headers: Allows to send/read cusom headers
  - setRequestHeader(name, value)
    - `xhr.setRequestHeader('Content-Type', 'application/json');`
  - getResponseHeader(name) - gets headers except cookies
    - `xhr.getResponseHeader('Content-Type')`

- XHR can send FormData objects

- Upload Progress
  - `progress` event triggers on downloading stage
  - upload events are triggered on `xhr.upload`
    - loadstart, progress, abort, error, load, timeout, loadend

- uses same CORS policy as `fetch`
`xhr.withCredentials = true;`

# Resumeable File Upload

- can be implemented with `XMLHttpRequest`
- `xhr.upload.onprogress` tracks upload progress
- Basic usage: sends request to server asking how many bites it already has. Then use `Blob.slice` to send the file from a specific `startByte`.

# Long Polling

- simple way to have persistant server connnection

- Regular pollihng sends a request to the server once every x seconds
  - Can have a delay of up to x secs between requests
  - Even if no messages, server is continously managing requests

- Long polling
  - Requests sent
  - Server doesn't close connection until it has a message to send
  - When a message appears, server responds
  - Browser makes request immediately
  - This gets handled and called again
  - good for situations where messages are rare

# WebSocket

- way to exchange data between browser/server with a persistent connection
- data passed in both dirrections as packets
- good for continous data: online games, real time trading systems

`let socket = new WebSocket("wss://javascript.info");`
- make sure to use wss:// instead of ws://
- Then listen to events:
  - open (connection est)
  - message (data received)
  - error
  - close (connnection closed)
  - socket.send(data) sends connections

## Opening a Websocket

- when new Websocket is created, it starts connecting immediately
- if server agrees to switch, sends -> 101 Switching Protocols response
- Additional headers for subprotocols: `Sec-WebSocket-Extensions` `Sec-WebSocket-Protocol`
- WS Commmunication is in frames: text, binary data, ping/pong, connection close
- .send() sends either text or binary data in Blob or ArrayBuffer
## Rate Limiting
- data is buffered in memory and sent out only as fast as network speed allows - socket.bufferedAmount stores how many bytes are buffered

-`socekt.close([code], [reason])` to close a connection

# Server-Sent Events

- Uses built in class `EventSource` which keeps connection with server and receives events
- One directional, only text and uses regular HTTP. Persistant data
- Simpler than `WebSocket`
- Auto reconnect with `retry` timeout
- Message ids to resume events
- current state in `readState`