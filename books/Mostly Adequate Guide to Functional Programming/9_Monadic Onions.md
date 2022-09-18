# 9 - Monadic Onions

- `of` : Not simply there to avoid `new` but instead to place values in a `default minimal context`
- Part of an important interface called __`Pointed`__ : a Functor with an `of` method
- Basic idea: Ability to drop any value in our type and start mapping.

```js
IO.of('tetris').map(concat('master'));
// IO('tetris master')

Maybe.of(1336).map(add(1));
// Maybe(1337)

Task.of([{id: 2}, {id, 3}].map(map.(prop('id'))));
// Task([2,3])

Either.of('skldfjsdfl').map(concat('it was tense.'));
// Right('lasdfkjaldkfj... it was tense.");

```

- `IO` and `Task` expect function as argument, but `Maybe` and Either do not
- Common, consistent way to place a value into functor without specifics of constructors
- We want to lift any value in our type and `map` away as usual.

- `pure`, `point`, `unit`, `return` : Other ways to use `of` method.
- Can use functor instances from `ramda` using `of` method and constructors that don't rely on `new`
  - Ramda: `construct`

```js:R.construct
class Animal {
  ...
}
// Notice we no longer need the 'new' keyword:
const AnimalConstructor = R.construct(Animal)
AnimalConstructor('pig')
// Construct multiple animals
const sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
```

```js:R.constructN
// Wraps constructor inside a curried function thatcan be called with same args and returns same type

class Salad {
  constructor(ingredients){
    const instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, ingredients);
    return R.join('\n', instructions)
  }
}

const ThreeLayerSalad = R.constructN(3, Salad)
const salads = ThreeLayerSalad('Mayo')('Potato')('Ketchup')
salad.recipe()
// Add a dollop of Mayonnaise
// Add a dollop of Potato Chips
// Add a dollop of Ketchup
```

## Mixing Metaphors

- Monads are like onions

```js
const fs = require('fs');

// readFile :: String -> IO String
const readFile = filename => new IO(() => fs.readFileSync(filename, 'utf-8'));

// print :: String -> IO String
const print = x => new IO(() => {
  console.log(x);
  return x;
});

// cat :: String -> IO (IO String)
const cat = compose(map(print), readFile);

cat('.git/config');
// IO(IO('[core]\nrepositoryformatversion = 0\n'))”
```

- This is an `IO` inside another `IO` because `print` introduced a second `IO` during our `map`
- To continue with string, map(map(f))

```js
// cat :: String -> IO (IO String)
const cat = compose(map(print), readFile);

// catFirstChar :: String -> IO (IO String)
const catFirstChar = compose(map(map(head)), cat);

catFirstChar('.git/config');
// IO(IO('['))”

```

- Nested functors - callers have to map many times
- Try `join` instead

```js
const mmo = Maybe.of(Maybe.of('nunchucks'));
// Maybe(Maybe('nunchucks'))

mmo.join();
// Maybe('nunchucks')

const ioio = IO.of(IO.of('pizza'));
// IO(IO('pizza'))

ioio.join();
// IO('pizza')

const ttt = Task.of(Task.of(Task.of('sewers')));
// Task(Task(Task('sewers')));

ttt.join();
// Task(Task('sewers'))”

```

- Now if we have 2 layers of the same type, we can smash them together with `join`
- __Monads are pointed functors than can flatten__
- Any functor which defines a `join` method, has an `of`, and objeys some laws is a monad.

```js
Maybe.prototype.join = function join(){
  return this.isNothing()? Maybe.of(null) : this.$value
}
```

- Now if we have a `Maybe(Maybe(x)) then $value will remove extra layer. Otherwise just one`Maybe`

```js:with_monad
// join :: Monad m => m (m a) -> m a
const join = mma => mma.join();

// firstAddressStreet :: User -> Maybe Street
const firstAddressStreet = compose(
  join,
  map(safeProp('street')),
  join,
  map(safeHead), safeProp('addresses'),
);

firstAddressStreet({
  addresses: [{ street: { name: 'Mulburry', number: 8402 }, postcode: 'WC2N' }],
});
// Maybe({name: 'Mulburry', number: 8402})”
```

- Added `join` wherever we encountered a nested `Maybe`

`IO.prototype.join = () => this.unsafePerformIO();`

- getItem returns `Io String` so we `map` to parse it, then `log` and setStyle return IO's so we use `join` to keep nesting under control

## My Chain Hits My Chest

- A pattern: We often call `join` right after a map`
- We can abstract this into a function called `chain`

```js:chain
const chain - curry((f,m) => m.map(f).join())
// or
const chain = f => compose(join, map(f))
```

- `chain` is also called `>>=` (bind) or `flatMap` which are aliases for the same concept

- Refactoring with `chain`:

```js:refactor_chain

// map/join

const fistAddressStreet = compose(
  join,
  map(safeProp('street')),
  join,
  map(safeHead),
  safeProp('address'),
)

// chain

const firstAddressStreet = compose(
  chain(safeProp('street')),
  chain(safeHead),
  safeProp('addresses')
)
```

- We can also capture sequence and variable assignments in a functional way with `chain`
- `map` when returning a "normal" value and `chian` when returning another functor.

## Power Trip

- Can be hard to understand how many containers deep a value is or if we need `map` or `chain`
- What is the value? Example: Read a file and then upload it directly afterwards

```js
const upload = compose(map(chain(httpPost('uploads'))), readFile);
```

- `readFile` uses `Either` to validate input
- httpPost` might Error
- Casually pulled off two nested, asynchronous actions in one linear left to right flow!

vs:

```js
// upload :: Filename -> (String -> a) -> Void
const upload = (filename, callback) => {
  if (!filename) {
    throw new Error('You need a filename!');
  } else {
    readFile(filename, (errF, contents) => {
      if (errF) throw errF;
      httpPost('/uploads', contents, (errH, json) => {
        if (errH) throw errH;
        callback(json);
      });
    });
  }
};
```

## Monad Theory

- Associativity

`compose(join, map(join)) === compose(join, join);`

- We end up with the same `M a` regardless whether we join innor our outter `M's` first.
- `map(join) != join`
- Second Law:
`compose(join, of) === compose(join, map(of)) === id`
- For any monad `M`, `M.of` and `join` amounts to `id`.  
  ![picture 1](https://s2.loli.net/2022/09/19/VfvjaEZgduNyPxh.png)  

- These are also laws for a category. But that means we need a composition function to complete definition...

```js
const mcompose = (f,g) => compose(chain(f), g)

mcompose(M,f) === f
mcompose(f,M) === f

mcompose(mcompose(f,g), h) === mcompose(f,mcompose(g,h));
```

- Monads form a category called "Kleisli category" where all objects are monads and morphisms are chained functions

## Summary

- Monads let us drill downwards into nested computations
- Monads lend us unboxed values
- Next: Applicative Functors
