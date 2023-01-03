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
