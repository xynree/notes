# 9 - Error Handling

- Rust groups errors into two categories: `recoverable` and `unrecoverable`
  - Recoverable: report problem and try again
  - Unrecoverrable: bug, stop program
- Rust uses type `Result` for recoverable errors and `panic!` that stops execution when hitting an unrecoverable error

## 9.1 - Unrecoverable Errors with `panic!`

- 2 ways to cause a `panic` in practice: taking an action that causes code to panic or by explicitly calling `panic!`

Unwinding the Stack or Aborting in Response to a Panic

- When a panic occurs, program starts unwinding (Rust walks back the stack)
- Rust allows you to choose to `abort` instead, but memory that was being used will then need to be cleaned up by the OS.

Using a `panic!` Backtrace

- Rust will stop execution if tryiing to do something like index out of bounds
- We can set `RUST=BACKTRACE` to get a backgtrace of what happened

`RUST_BACKTRACE=1 cargo run` will show detailed backtrace for `RUST_BACKTRACE=1`

## Recoverable Errors with `Result`

- Sometimes failing functions can be easily interpreted and responded to

```rust
enum Result<T,E> {
  Ok(T),
  Err(E),
}
```

- We can use match arms to properly debug Result types

```rust
use std:;fs::File;

fn main() {
  let greeting = File::open("hello.txt");
  let file = match greeting {
    Ok(file) => file
    Err(eror) => panic("Problem: {:?}", error)
  }
}
```

- Can match on different errors by nesting `match` arms to `error.kind()`

```rust

use std::fs::File;
use std::io::ErrorKind;

fn main() {
    let greeting_file_result = File::open("hello.txt");

    let greeting_file = match greeting_file_result {
        Ok(file) => file,
        Err(error) => match error.kind() {
            ErrorKind::NotFound => match File::create("hello.txt") {
                Ok(fc) => fc,
                Err(e) => panic!("Problem creating the file: {:?}", e),
            },
            other_error => {
                panic!("Problem opening the file: {:?}", other_error);
            }
        },
    };
}
```

- Alternative to using `match`: We can use `.unwrap_or_else`

Shortcuts for Panic on Error: `unwrap` and `expect`

- unwrap will call `panic` if Err is returned, with no message
- expect will call `panic!` macro with the provided message for us if Err is returned.

Propogating Errors

- Instead of handling error inside function itself, can return error to give code to decide what to do
- Rust has a shortcut `?` for this
- `?` Can only be used in functions whose return type is compatible with the value `?` is used on
  
- `Box<dyn Error>` ->any type of Error

## 9.3 To `panic!` or Not to `panic!`

- When code panics, there's no way to recover
- When you choose to return a `Result`, you give calling code options
  - Returning `Result` is a good default choice when designing a function that might fail

Examples, Protoype Code, and Tests

- `unwrap` and `expect` are very handy for prototyping. they are also how Rust manages tests failing

Cases in Which You have more Info Than the Compiler

- If there's some logic ensuring Result will have an Ok value but compiler won't understand, you can wrap in `unwrap` or `xpect`

Guidelines for Error Handling

- Have your code panic when it's possible code could end in a bad state
  - Invalid or missing values
  - Bad State is something that is unexpected, as oposed to something that will likely happen occassionaly
  - Code after relys on not being in this bad state
- When failure is expected, more appropriate to return a `Result` than to make a `panic!` call
- Rust handles types to try and reduce necessity for error handling: Any type other thatn `Option` will not compile if it has nothing

Creating Custom Types for Validation

- We can add error handling to the type and create a type with this functionalioty by adding function to the `new` call:

```rust
#![allow(unused)]
fn main() {
pub struct Guess {
    value: i32,
}

impl Guess {
    pub fn new(value: i32) -> Guess {
        if value < 1 || value > 100 {
            panic!("Guess value must be between 1 and 100, got {}.", value);
        }

        Guess { value }
    }

    pub fn value(&self) -> i32 {
        self.value
    }
}
}
```
