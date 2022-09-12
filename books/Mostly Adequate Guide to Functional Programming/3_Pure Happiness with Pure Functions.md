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
