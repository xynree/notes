# 12 - Travesing the Stone

- Traversable interface has two functions: `sequence` and `traverse`
- `sequence`:

```js
sequence(List.of, Maybe.of(['the facts])); //[Just('the facts')]
sequence(Task.of, new Map({a: Task.of(1), b: Task.of(2)})) //Task(Map({a:1, b:2}))
sequence(Task.of, left('wing)) //Task(Left('wing'))
```

- Nested types get turned inside out: Inner functor shifted to outside and vice versa

`const sequence = curry((of,x) => x.sequence(of))`

- Must be a Traversable holding an Applicative
- `Sequence` used to shift types around
  
## Effect Assortment

- Different orders have different oucomes
- 2 different functions based on whether `map` or `traverse`

```js
traverse(of, fn) {
  return this.$value.reduce(
    (f, a) => fn(a).map(b => bs => bs.concat(b)).ap(f),
      of(new List([])),
  )
}
```
