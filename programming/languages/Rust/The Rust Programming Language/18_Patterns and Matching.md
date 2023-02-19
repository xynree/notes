# 18 - Patterns and Matching

- Patterns are special syntax for matching against the structure of types
- Use patterns in conjunction with `match` and other constructs to give more control over control flow
- Describe the shape of data, then program matches values against patterns to determine whether it has the correct shape
- To use a pattern, compare it to some value

## 18.1 - All the Places Patterns Can Be Used

### `match` Arms

- `match` expressions are defined as the keyword `match`, a vlaue to match on, and one or match arms consisting of a pattern and expression to run if matches
- `match` expressions need to be exhaustive

### Conditional `if let` Epressions

- Gives more flexibility than a `match` expression
- Doesn't check for exhaustiveness

### `while let` Conditional Loops

- Allow a `while` loop to run for as long as pattern continues to match

### `for` Loops

- Value that directly follows the `for` is the pattern

### `let` Statements

- variable name is in the PATTERN slot: `let PATTERN = EXPRESSION`

### Function Parameters

- `fn foo(x:i32)` -> `x` is part of the pattern

## 18.2 - Whether a Pattern Might Fail to Match

- Patterns have 2 forms: Refutable & Irrefutable
- Irrefutable: Patterns that will match for any possible value
  - `let x = 5 (x)`
- Refutable: Patterns that can fail to match for some possible value
  - `Some(x)` in `if let Some(x) = value`:  Could be `None`
- Function parameters, `let` and `for` only accepts irefutable patterns
- `if let` and `shile let` expressions accept both
- If we have a refutable pattern where irrefutable is needed: Fix by changing the code that uses the pattern
  - Inside of `let` we can use `if let`

## 18.3 - Pattern Syntax

### Matching Literals

```rust
fn main() {
    let x = 1;

    match x {
        1 => println!("one"),
        2 => println!("two"),
        3 => println!("three"),
        _ => println!("anything"),
    }
}

```

- Useful when you want code to take action if it gets a particular concrete value

### Matching Named Variables

- Complications with `match` expressions and named variables: `match` starts new scope, so variables declared in a pattern inside `match` will shadow those with same name outside the `match`

### Multiple Patterns

- You can match multiple patterns using `|` which is the pattern `or` operator

### Matching Ranges with `..=`

- `..=` matches an inclusive range of values. `1 ..=5` means `1|2|3|4|5`

### Destructuring to Break Apart Values

- Syntactic sugar

```rust
    let p = Point { x: 0, y: 7 };

    let Point { x: a, y: b } = p;
```

- Also works within match arms and Enums
  
```rust
  struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let p = Point { x: 0, y: 7 };

    match p {
        Point { x, y: 0 } => println!("On the x axis at {x}"),
        Point { x: 0, y } => println!("On the y axis at {y}"),
        Point { x, y } => {
            println!("On neither axis: ({x}, {y})");
        }
    }
}

enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

fn main() {
    let msg = Message::ChangeColor(0, 160, 255);

    match msg {
        Message::Quit => {
            println!("The Quit variant has no data to destructure.");
        }
        Message::Move { x, y } => {
            println!(
                "Move in the x direction {x} and in the y direction {y}"
            );
        }
        Message::Write(text) => {
            println!("Text message: {text}");
        }
        Message::ChangeColor(r, g, b) => println!(
            "Change the color to red {r}, green {g}, and blue {b}",
        ),
    }
}

```

- Destructuring also works in nested values

### Ignoring Values in a Pattern

- using `_` within another pattern, using a name that starts with `_` or using `..` will ignore remaining parts of values

Ignoring an Entire Value with `_`

- Underscore will match any value without binding

Ignoring Parts of Value with a Nested _

- You can use _ inside another pattern to ignore just part of the value

```rust
fn main() {
    let numbers = (2, 4, 8, 16, 32);

    match numbers {
        (first, _, third, _, fifth) => {
            println!("Some numbers: {first}, {third}, {fifth}")
        }
    }
}
```

Ignoring an Unused Variable by Starting its Name with `_`

- Useful for creating a varialbe you won't use yet, like for prototyping
- `_x` will still bind value to the variable, while `_` doesn't bind at all

Ignoring Remaining Parts of Values with `..`

- With values that have many parts, use the `..` syntax to specify ignoring any parts that haven't explicitly matched in ther est ofthe pattern
- Good way to specify "rest", rather than declaring _ for each unused value

### Extra Conditionals with Match Guards

- Additional `if` condition specified after the pattern in a match arm that must also match for that arm to be chosen
- `Some(x) if x % 2 == 0 => println!("The number {} is even", x),`

### @ Bindings

- @ operator `@` lets us create a variable that holds a value at the same time we're testing the value for a pattern match
- Lets us test a value and save it into a varialbe within one pattern

```rust
fn main() {
    enum Message {
        Hello { id: i32 },
    }

    let msg = Message::Hello { id: 5 };

    match msg {
        Message::Hello {
            id: id_variable @ 3..=7,
        } => println!("Found an id in range: {}", id_variable),
        Message::Hello { id: 10..=12 } => {
            println!("Found an id in another range")
        }
        Message::Hello { id } => println!("Found some other id: {}", id),
    }
}
```
