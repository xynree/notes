# [Rust Programming Techniques](https://www.youtube.com/watch?v=vqavdUGKeb4)

## Programming In The Small

- What could go wrong with basic C code? (fn returns a pointer to a function)
  - Forgot null check
  - ptr could get mutated
  - ptd could be invalid
- References are pointers but can never be `null`
  - If they can be null, must be wrapped in `Option`
- Forced by type system to use match system in order to explicitly declare what happens for each option
  - `match` pattern matches all variants
  - match can also be an expression
- `Option` Type
  - Generic Type, `Some` or `None`
- `Result` Type
  - Generic Type, `Success` or `Err`

- `if let`
  - if let does something with variable that function gives, back, or does nothing
- match() also has a shortcut of `?`
  - let `i = h()?;` // do something with `i`
  - `let i = h()?.foo()?.bar;`

- Some methods on the `Option` and `Result` types
  - map: if something there, pass method with option type, otherwise pass `None`
    - `y.map(|x| x + 4)`
  - `and` | `and_then` : map but can also pass `None`
  - `or` | `or_else`
- Eager and Lazy versions: Eager takes value and lazy takes function to execute if needed
- `ok_or`
- `iter` - Gives back iterator of selection

## Iterators

- C example: `pingall` takes foo[] and len of arr. Index into array and call a ping() fn on every element
- What could go wrong?
  - c_foo might be incorrect
  - foo could be mutated
  - i could be mutated
  - logic errors
  - foo could be null or invalid
- in rust:

```rust
fn ping_all(Foos: &[Foo]){
for f in foos {
  f.ping()
}
}

fn ping_all(foos : &[Foo]) {
  foos.iter().for_each(|f| f.ping());
} 
```

- Methods on Iterator Types
- Iterator is a trait
  - Like an interface

```rust
vec.iter()
.map(|x| x+1)
.filter(|x| x > 1)
.for_each(|x| println!("{}", x))
```

- Chain, Enumerate
  - chain: Takes two iterators and chains them together
- Collect
  - Function changes depending on what types you are expecting to get back
- Iterators are lazy and only run when calling terminating function: collect()
- `into_iter()`: turns receiver into an iterator
- `Iterator` trait: has a `next()` function that returns an `Option<Item>`

- What should you do with `Err` case of `Result`?
  - Recover: Pick appropriate default value
  - Re-throw
  - Panic
    - expect() unwrap()
- Think of code as error modules: Modularity of error handling
- Context specific ways to deal with errors
- Internal/External way to show error module? Boundary of error modules
- If retry fails, then throw the error

- If you try to index out of bounds, normal [] iindexing will panic, otherwise using `get()` will return an `Option`

- What to use for `Error` Types?
- Don't use your own `Result` type
- Aliasing the `Result` type is a better idea
- One error type or many?
  - Use single error type or multiple error types for code?
  - Every type of error gets a different `Error` variant

```rust
pub struct ServerError {
  code: u8,
  address: String,
}
```

- `Failure` library for error handling
- Difficult to refactor into more robust error handling rather than other way around

## Traits

- trait Foo {...}
- imp Foo for Sometype {...}
- Traits are similar to classes, but only share methods, not data
- They enable user created data types to interact with default Rust functions
- Not hierarcharchal
- Essential to safety guarantees
- Use more traits
  - You can use methods (inherence impl) without naming a trait
  - Makes it more extensible
  - Cleaner design
- What makes a good trait?
  - Small
  - Independent
- Better Data
  - inherent impls
    - behavior specific to data (getter, setter)
  - traits
    - generic behavior
    - API
  - Examples
    - Servo
    - Chalk
    - Tokio
