# 12 - An I/O Project: Building a Command Line Program

- We will make our own version of `grep`

## 12.1 Accepting Command Line Arguments

Reading the Argument Values

- use `std::env::args` to get the value of command line arguments
  - Returns an iterator of the CLI arguments

```rust
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect(); // get args, then use collect to turn iterator into a vector
    dbg!(args);
}
```

Saving the Argument into Variables

```rust
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    // program name takes up the first value in the vector at args[0]
    let query = &args[1];
    let file_path = &args[2];

    println!("Searching for {}", query);
    println!("In file {}", file_path);
}
```

## 12.2 Reading a File

- Adding functionality to read a file: use `fs` package

## 12.3 Refactoring to Improve Modularity and Error Handling

- Logic should be kept in `lib.rs` because `main.rs` can't be tested
- query and file_path should have their own struct called "Config"
- This can be created by setting up a constructor `new` function
- Improving the error message: add a check to display a better error message if there are not enough arguments
- Returning a `Result` instead of calling `panic!`:
- Using `unwrap_or_else` defines custom, non-panic error handling
- `process::exit` function stops program immediately and returns number that was passed as exit status.
- Extracting logic: we can move the reading file logic to a function called `run`
- `run` takes `Config` and returns a `Result` with any error.
- Use `if let Err(e)` to handle the situation if `run(config)` causes an error.
- Move the code into `library` crate: `run` function, `Config::new`, etc.

## 12.4 Developing the Library's Functionality with TDD

- We add searching logic using TDD process:
  1. Write a failing test
  2. Write or modify just enough code to make new test pass
  3. Refactor code to make sure tests continue to pass
  4. Repeat

```rust
pub fn search<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    vec![]
}
```

- We define explicit lifetime `'a` to use with `contents` argument and the return value:
  - Specifies which argument lifetime is connected to the lifetime of the return value.
  - String slices will reference slices of the argument `contents` rather than `query`

## 12.5 Working with Environment Variables

- Let's add another feature: an option for case-insensitive search that can be turned on with an env variable.
- Add an env variable using `std::env` library
`let ignore_case = env::var("IGNORE_CASE").is_ok();`

## 12.6 Writing Error Messages to Standard Error instead of Standard Output

- `println!` is only capable of printing to standard output
- `eprintlin!` macro prints to the standard error stream
