# 8 - Tupperware

## The Mighty Container

- How to deal with control flow, error handling, asynch actions, state, and effects?
- First create a container that holds any type of value

```js
“class Container {
  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Container(x);
  }
}”
```

- uses `of` to avoid `new` keyword
- `Container` is an object with one property called `$value`

- `$value` can be any type
- Once data goes into `Container` it stays there

## My First Functor

- Once our value is in container, need a way to run functions on it
  - add `map` to Container

```js
“Container.of(2).map(two => two + 2); 
// Container(4)

Container.of('flamethrowers').map(s => s.toUpperCase()); 
// Container('FLAMETHROWERS')

Container.of('bombs').map(append(' away')).map(prop('length')); 
// Container(10)”
```

- Can work with value without having the leave the `Container`, handed to other functions
- `Functor`: A Type that implements `map` and obeys some laws
  - Idea comes from category theory
- What do we gain by asking container to apply functions for us?
  - Abstraction of function application

## Schrodinger's Maybe

- `Container` is usually called `Identity` and a bit boring..
- Other functors (container -like types with map) can be provide useful behavior.

```js
“class Maybe {
  static of(x) {
    return new Maybe(x);
  }

  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  constructor(x) {
    this.$value = x;
  }

  map(fn) {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }

  inspect() {
    return this.isNothing ? 'Nothing' : `Just(${inspect(this.$value)})`;
  }

  Maybe.of('Malkovich Malkovich').map(match(/a/ig));
  // Just(True)

  Maybe.of(null).map(match(/a/ig));
  // Nothing

  Maybe.of({ name: 'Boris' }).map(prop('age')).map(add(10));
  // Nothing

  Maybe.of({ name: 'Dinah', age: 14 }).map(prop('age')).map(add(10));
  // Just(24)

```

- Now, `Maybe` is like `Container` but will first check to see if it has a value before calling the function
- `Maybe` adds error handling!
- Maintain point free

```js
// map :: Functor f => (a -> b) -> f a -> f b
const map = curry((f, anyFunctor) => anyFunctor.map(f));

```

- dot notation: instructive
- pointfree: when it's convenient

## Use Cases

- `Maybe` used in functions which might fail to return a result (added type safety)

## Releasing the Value

- Needs to be an "end fo the line" in function: Application should retrieve, transform and carry data along
- If we would return a custom value and contine on, try using a helper

```js
“// maybe :: b -> (a -> b) -> Maybe a -> b
const maybe = curry((v, f, m) => {
  if (m.isNothing) {
    return v;
  }

  return f(m.$value);
});

// getTwenty :: Account -> String
const getTwenty = compose(maybe('You\'re broke!', finishTransaction), withdraw(20));

getTwenty({ balance: 200.00 }); 
// 'Your balance is $180.00'

getTwenty({ balance: 10.00 }); 
// 'You\'re broke!”
```

- Uses an if/else `Maybe`
- Real implmeentation splits `Maybe` into two types: for something and for nothing
- Allows to obey parametricity so values like `null` and `undefined` can be mapped over and universtal qualification respected

## Pure Error Handling

- Throw/Catch not very pure
- Try `Either`

```js
class Either {
  static of(x) {
    return new Right(x);
  }

  constructor(x) {
    this.$value = x;
  }
}

class Left extends Either {
  map(f) {

   return this;
  }

  inspect() {
    return `Left(${inspect(this.$value)})`;
  }
}

class Right extends Either {
  map(f) {
    return Either.of(f(this.$value));
  }

  inspect() {
    return `Right(${inspect(this.$value)})`;
  }
}

const left = x => new Left(x);”

```

- Left/Right subclasses of `Either`
- We can use the `Either` to branch program, short-circuiting it
- Logically branches control flow but still reads as one linear motion from right to left
- `Either` good for feedback, it also captures logical disjunction (||) in a type

## Old McDonald Had Effects

- Pure functions: Original function had side effect, but wrapped its action in another function to remain pure

```js
// getFromStorage :: String -> (_ -> String)
const getFromStorage = key => () => localStorage[key];”
```

- How to reach "inside" container and get at contents? Use `IO`

```js
class IO {
  static of(x) {
    return new IO(() => x);
  }

  constructor(fn) {
    this.$value = fn;
  }

  map(fn) {
    return new IO(compose(fn, this.$value));
  }

  inspect() {
    return `IO(${inspect(this.$value)})`;
  }
}
```

- in `IO`, `$value` is always a function
- IO delays impure action by capturing it in a function wrapper
- When we map over IO, stick that function at the end of a composition. Get tacked on the end of a computation we're building up
- Tack responsiblity of side effects into calling code, not into functions

## Asynchronous Tasks

- Callbacks mess up  control flow

## Summary

- We've looked at a few different functors, but there4 are many more: data structures omittd here, event streams and observables
