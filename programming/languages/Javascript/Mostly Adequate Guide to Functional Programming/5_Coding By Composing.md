# 5 - Coding by Composing

## Functional Husbandry

- `f` and `g` are functions and `x` is the value being "piped" through them

```js:basic_compose
const compose2 = (f, g) => x => f(g(x));”
```

- Select two functions with traits you'd like to combine and mash them together to spawn a brand new one

```js:example
const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;
const shout = compose(exclaim, toUpperCase);

shout('send in the clowns'); // SEND IN THE CLOWNS!
```

- `g()` runs before `f()` ,creating  a R -> L flow of data

```js:associativity
// associativity
compose(f, compose(g, h)) === compose(compose(f, g), h);”
```

- Composition is associative: It doesn't matter how you group two of them

```js:same
“compose(toUpperCase, compose(head, reverse));
// or
compose(compose(toUpperCase, head), reverse);”
```

## Pointfree

- Functions that never mention the data upon which they operate

```js:pointfree
// not pointfree because we mention the data: word
const snakeCase = word => word.toLowerCase().replace(/\s+/ig, '_');

// pointfree
const snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);”
```

## Category Theory

- A collection with components:
  - Collection of objects
    - Data types
  - Collection of morphisms
    - Pure fufnctions
  - Notion of composition on the morphisms
    - `compose` function
  - A distinguished morphism called identity
    - `const id = x => x;`

## Summary

- Composition connects functions together like pipes
- Composition as a design principle
- Category Theory models side effects
