# 10 - Applicative Functors

## Applying Applicatives

- Situation: We have 2 functors of the same time and would like to call a function with both values as arguments..

```js
// We can't do this because the numbers are bottled up.
add(Container.of(2), Container.of(3));
// NaN

// Let's use our trusty map
const containerOfAdd2 = map(add, Container.of(2));
// Container(add(2))”

```

- we could chain and map but in monads, nothing is evaluated until previous monad is finished
- If we could apply one functor's contents to another value ?

## Ships in Bottles

- `ap`: function that can apply function contents of one functor o the value contents of another

```js
Container.of(add(2)).ap(Container.of(3)); // Container(5)

Container.of(2).mad(add).ap(Container.of(3)); // Container(5)
```

- Will only work when add is curried and partially applied
- `ap`:

```js
Container.protoype.ap = function(otherContainer) {
  return otherContainer.map(this.$value);
}
```

- An applicative functor is a pointed functor with an `ap` method

- Property: mapping `f` is equivalent to `ap`ing a functor of `f`. We can place x into container and map(f") OR we can lift both f and x into container and ap them.

```js
Maybe.of(add).ap(Maybe.of(2)).ap(Maybe.of(3));
// Maybe(5)

Task.of(add).ap(Task.of(2)).ap(Task.of(3));
// Task(5)”
```

- Using `of`, each value gets placed in a container where each application can be async/null/etc and `ap` will apply functions.

- Pointfree way to write applicative calls:

```js

const liftA2 = curry(g,f1,f2) => f1.map(g).ap(f2)
```

- liftA# is a generic form of applicative functor that specifies a certain # of arguments

## Operators

- Haskell, Scala, etc with infix operators:

`add <$> Right 1 <*> Right 3` is equivalent to `map(add, Right(2)).ap(Right(3))`

- <$> is `map` and `<*>` is `ap`

## Laws

- Useful properties: ap's are "closed under composition" - will never change container types
