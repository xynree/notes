# Mutation Observer

-  `MutationObserver` observes DOM elem and fires callback on detecting a change.

- syntax:
```js
let observer = new MutationObserver(callback);
observer.observe(node, config)
```

- config object sets which changes to react upon
  - childList (direct children)
  - subtree (descendants)
  - attributes (attributes of node)
  - attributeFilter (arr of att names)
  - characterData (node.data)

- after any changes, `callback` is executed. changes passed in first arg as list of `MutationRecord`
- `callback` used to act on any changes within subtree/attribute list of node

- Can be used for third party software that needs some editing
- `observer.disconnect()` to stop watching
- `observer.takeRecords()` get unprocessed muatation records

- Note: garbage collection still happens even if nodes are being observed.


# Selection and Range

- Range as a pair of 'boundary points'

```js:Range
let range = new Range(); // new Range object
range.setStart(node, offset)
range.setEnd(node,offset) // selection boundaries
```

- `node` is either text or elem node
- if `node` is text node, `offset` is the position in its text
- if `node` is elem node, `offset` is child number

- Various range selection methods exist to manipulate ranges - can clone, extract, insertNode, etc.

# Event Loop: Microtasks and Macrotasks

- Endless loop where JS engine waits for tasks, executes them, and then sleeps.
  - tasks: handlers, mosemouve, external script loads...
  - if task comes when engine is busy, thrown on queue: "Macrotask Queue"
    - Handled in FIFO 
    - Rendering does not happen while engine execute
    - If task takes too long, will kill whole page.

- Usecase 1: Splitting CPU heavy taskss:
  - text-highlighting: can split into batches - highlight first 100 lines, then setTimeout, then do next, etc.
  -  make sure to set nested setTimeout's first when running your code or it will take longer

- Usecase 2: progress indication
  - Same setTimeout as above can be set up with a progress bar

- Usecase 3: Do something after event
- By wrapping event handler code in zero delay setTimeout, it will dispatch event asynchronously.

- Microtasks:
  - usually created by promises
  - Microtask Queue runs immediately after every macrotask and before running next macrotask.
  - `queueMicrotask` can be used to put something on this queue.
  - run immediately one after another.