# 6 - Example Application

## Declarative Coding

- declaration: write expressions as opposed to step by step instrutions

```js
// imperative
const makes = [];
for (let i = 0; i < cars.length; i += 1) {
  makes.push(cars[i].make);
}

// declarative
const makes = cars.map(car => car.make);”
```

- imperative loop first instantiates array, then must interpret statement before moving on
- map version is one expression with no order of evaluation

```js:composition
“// imperative
const authenticate = (form) => {
  const user = toUser(form);
  return logIn(user);
};

// declarative
const authenticate = compose(logIn, toUser);”
```

- Authentication = composition of `toUser` and `login`
- No encoding of order of evaluation = parallel computing

## A Flickr of Functional Programming

## A principled Refactor

- Optimizaition: Map over each item to turn it into a media url, then map those into img tags

```js
“// map's composition law
compose(map(f), map(g)) === map(compose(f, g));”
```
