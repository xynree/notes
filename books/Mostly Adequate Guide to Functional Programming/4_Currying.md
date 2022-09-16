# Currying

## Can't Live if Livin' is Without You

- The concept: Call a function with fewer arguments than it expects. Returns a function that takes the remaining arguments

```js:examples
const match = curry((what, s) => s.match(what));
const replace = curry((what, replacement, s) => s.replace(what, replacement));
const filter = curry((f, xs) => xs.filter(f));
const map = curry((f, xs) => xs.map(f));”
```

note: Data we're operating on is positioned as the last argument

- Demonstrated ability to "pre-load" functions with arguments in order to receive a new function that remembers those arguments

## Special Sauce

- We can make new functions just by giving our base functions some arguments
- Transform any function that works on single elems into a function that works on arrays by wrapping it with `map`
- `Partial Application`: giving a function fewer arguments than it expects
- Don't define functions that work on arrays because we can just call `map` inline. Same with `sort`, `filter`, etc
- Even if output is another function it is considered pure

## Summary

- Currying is handy and makes programming less verbose
- Make new useful functions by passing in a few args and then it retains mathematical function definition despite having multiple arguments
