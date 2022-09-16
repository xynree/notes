# 3 - Pure Happiness with Pure Functions

## Oh to be pure again

- Fn programming avoid functions that mutate data, because we're looking for functions that return the same result every time
- Depending on system state /global variables = impure
  - Increases cognitive load by introducing external environment

```js
// impure
let minimum = 21;
const checkAge = age => age >= minimum;

// pure
const checkAge = (age) => {
  const minimum = 21;
  return age >= minimum;
};
```

## Side Effects May Include

- Effect = anything that occurs in computation other than calculation of a result
- Effects are okay. Side effects are bad
- Side Effects may include..
  - Changing file system
  - Inserting record into database
  - Making HTTP call
  - Mutations
  - Logging
  - Obtaining user input
  - Querying DOM
  - accessing system state
- We want to contain side effects and run in a controlled way.
- Pure functions always return the same output give the same input.
- No need for implementation details if input dictates output
- Pure functions are math functions

## The Case for Purity

### Cacheable

- Pure functions can always be cached by input and memoized:

```js:memo_example
const memoize = (f) => {
  const cache = {};

  return (...args) => {
    const argStr = JSON.stringify(args);
    cache[argStr] = cache[argStr] || f(...args);
    return cache[argStr];
  };
}
```

- You can transform impure to pure functions by delaying evaluation

```js
const pureHttpCall = memoize((url, params) => () => $.getJSON(url, params));
```

- This function returns a function that will make the HTTP call when the outer function is called

### Portable / Self-documenting

- Self-contained, explicit dependencies
- Pure forms are more informative than informal

"“The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana... and the entire jungle”

### Testable

- Pure functions make testing easier

## Reasonable

- Code is referentially transparent when it can be substituted for its evaluated value without changing behavior of program
- Pure functions can only influence behavior through outputs

## Parallel Code

- Can run pure functions in parallel since they do not need access to shared memory
- Cannot have a race condition

## Summary

- We strive to write all functions in a pure way - first try to separate impure functions from the rest of the pure code
- Must pass arguments around, forbidden to use state, and no effcts
- Next: Currying
