# 11 - Transform Again, Naturally

- Nesting: Having 2+ different types huddled around a value..

```js
“Right(Maybe('b'));

IO(Task(IO(1000)));

[Identity('bee thousand')];”
```

- Natural Transformation: Fn that operates on the containers themselves
- Cannot peek at functor

- ![picture 1](https://s2.loli.net/2022/09/25/4qEcdK8RTHwApXU.png)  

- We run natural transformation and then map, or vice versa, and get the same result
- Map carries through transformations
- Transforming Effects - `ioToTask` converts synchronous to asynchronous or one type to another

## Feature Envy

- If you want features on a different type, you can use natural transformations to convert to other type, knowing that `map` will still exist

## Isomorphic JS

- The ability to go back and forth without losing information - holding the same data

## A Broader Definition

```js
reverse :: [a] -> [a]

join :: (Monad m) => m (m a) -> m a

head :: [a] -> a

of :: a -> f a”

```

## Summary

- Natural transformations are functions on functors
- Can achieve different effects by converting types with the guarantee that composition willhold
- Can help with nested types & homogenizing functors to the lowest common denominator
