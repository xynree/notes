# Ch 2 - First Class Functions

- 1st class: treat functions like any other data type
- Example:

```js
const hi = name => `Hi ${name}`
const greeting = name =? hi(name);
```

- `greeting` is completely redundant here because functions are callable

```js
hi; // name => `Hi ${name}`
hi("jonas"); // "Hi jonas"
```

Other examples:

```js
// ignorant
const getServerStuff = callback => ajaxCall(json => callback(json));

// enlightened
const getServerStuff = ajaxCall;
```

## Why Favor First Class?

- Easy to add layers of indirection
- If fn's get changed, wrappers have to get changed too
- Name and reference args
- Generic code - favor reusable code

```js
// specific to our current blog
const validArticles = articles =>
  articles.filter(article => article !== null && article !== undefined),

// vastly more relevant for future projects
const compact = xs => xs.filter(x => x !== null && x !== undefined);
```
