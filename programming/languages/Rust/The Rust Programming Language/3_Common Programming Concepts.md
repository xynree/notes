# 3 - Common Programming Concepts

## 3.1 Variables and Mutability

- By default, values are immutable
- When immutable, can't change value once it is bound
- To change bound value, use `mut`

Constants

- Constants are bound to a name and not allowed to change, but there are some differences:
- Not allowed to use `mut` with constants
- Alwayus immutable
- Declare with `const` instead of `let`, and type must be annotated
- Can be declared in any scope
- May be set only to a constant e3xpression, not any value that would be computed at runtime

Shadowing

- You can declare a new variable with same name
  - First variable is `shadowed` by the second - second variable overshadows the first
- If shadowing is done within an inner scope, once that scope is over the variable returns to previous value
- We can perform transformations on a value but still have the variable be immutable after transformations have completed
- This is useful for changing type of a value but reusing the name

## 3.2 Data Types

- Rust is a statically typed lang = must know types of all variables at compile time
- Compiler can usually infer what type needed, but sometimes needs type annotations

Scalar Types

- Represents single value. 4 primary scalar types : ints, floats, numbers, booleans, characters
- Integer Type: number without fraction
  - Signed/Unsigned and has explicit size
    - Unsigned =  will only ever be positive
  - int types default to `i32`
- Floating Point: `f32` and `f64`
- MNmeric Operations: Supports basic operations. Remainder is `%`
- Boolean types: true/false
- `Char` type: Specified with single quotes, while string literals use double quotes

Compound Types

- Group multiple values into one type
- Two compound types: Tuples and Array
- Tuple: Groups a number of values with variety of sizes
  - Fixed length
  - To declare: `let tup: (i32,f64, u8) = (500,6.4,1);`
  - `tup` binds to the entire tuple.
  - Rust also can destructure tuples
  - Access tuples with period: `t.0`, `t.1`, `t.2`
  - Tuples without any value is called a `unit`: `()` -> represents an empty value

Array Type

- Fixed length
- Every element of array must have te same type
- declaring an array: `let a: [i32; 5] = [1,2,3,4,5]`
- data allocated on the stack rather than a heap
- Arrays are accessed with brackets: `a[0]` and will throw errors if you try to index out of bounds.

## 3.3 Functions

- Rust code uses snake_case as convention for function and variable names

Parameters

- In function signatures, must declare the type of parameter
- type signature is after variable name

Statements and Expressions

- Statements: instructions that performm some action and do not return value
- Expressions: evaluate to a value
- A new scope block with { } is an expression
- Adding a semicolon will turn it into a statment and then it will not return a value

Functions With Return Values

- declare type of return value after the argument parans with an arrow (->)
- return value == value of the final expression in the block of the fn body

```rust
fn five() -> i32 {
  5
}
```

## 3.4 Comments

- `// hello, world`
- Normal commments

## 3.5 Control Flow

`if` Expressions

- syntax:

```rust
if number < 5 {
  println!("true"); 
} else {
  println("");
}
```

- condition in the if statement must be a `bool`

Using `if` in a `let` Statement

- `let number = if condition {5} else {6}`

Repetition with Loops

- `loop`
- executes block over and over forever until explicitly told to stop
  - `break` within loop quits the loop
  - `continue` skips over rest of loop and goes to next iteration
- Returning /Values from loops

```rust
let result = loop {
  ...
}
`
- `while`
```rs
while number != 0 {
  ...
}
```

Looping Through a collection with `for`

```rust
for element in a {
  ...
}
```

- Can use a range for the for loop:

```rust
for num in (1...4) {
  ...
}
```
