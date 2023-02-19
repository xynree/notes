# 7 - Hindley-Milner and Me

## What's your Type?

- types = meta language that enables people to communicate effectively
- Can derive "free theorems" from type signatures

## Tales from the cryptic

```js
// capitalize :: String -> String
const capitalize = s => toUpperCase(head(s)) + toLowerCase(tail(s));

capitalize('smurf'); // 'Smurf”
```

- Here, `capitalize` takes a String and returns a `String`
- HM: functions written as `a -> b` where a and b are variables for a type

## Narrowing the Possibility`

- `Parametricity`: function will act on all types in a uniform matter

` head :: [a] -> a `

- Takes [a] to a -> a says it can't be a specific type, which means it can be every type. Function works uniformly for any type

`reserve :: [a] -> [a]`

- Cannot change `a` to a different type or we'd introduce a `b`

## Free as In Theorems

- 2 example theorems that HM types reveal:

```c
// head :: [a] -> a
compose(f, head) === compose(head, map(f));

// filter :: (a -> Bool) -> [a] -> [a]
compose(map(f), filter(compose(p, f))) === compose(filter(p), map(f));”

```

- If we get `head` of array and run `f` on it, that is equivalent to map (f) over every element and take head of result
- Filter: if we compose `f` and `p` to check which should be filtered, then apply `f` with `map`, equivalent to mapping `f` and then filtering result

## Constraints

```js
// sort :: Ord a -> [a] -> [a]
```

- `a` must be a `Ord`
- Type constraints

## Summary

- Simple to read and write but takes time to mater HM type signatures
