# 2 - Programming a Guessing Game

- Implement a classic beginner programming problem: Program generates a random int between 1 and 100
- Prompts player to enter a guess. Program will indicate whether guess is too low or high, if correct game will congratulate and exit

- Create a new program with `cargo new guessing_game`
- Processing a guess: Allow user to input a guess

```rs
use std::io; // std::io library

fn main() {
    println!("Guess the number!");

    println!("Please input your guess.");

    let mut guess = String::new(); // Create a variable to store user input. Immutable by default so add `mut` in front of variable name to make it mutable. :: = function of the String type

    io::stdin() // calls stdin from io module
        .read_line(&mut guess) // calls read line method on stdio and passes it into &mut guess. & indicates the argument is a reference. Also immutable by default
        .expect("Failed to read line"); // readline returns a `Result` value which is an enum. It can be one of multiple possible variants. Result's variants: `Ok` and `Err`. If read_line returns `Err`, it will return message. If read_line returns `Ok`, it returns value to you.

    println!("You guessed: {guess}"); // curly are placeholders. When evaluating expression, use {} empty bracket followed by a comma with the expression
}
```

Generating a Secret number

- Rust provides a `rand` crate with random number functionality
- Add the rand crate to Cargo.toml file: `rand = "0.8.5"` under [dependencies]

Ensuring Reproduciable Builds with Cargo.lock

- When building project first time, cargo figures out all versions of dependencies and writes them to `Cargo.lock`. Important to reproduce vbuilds

Updating a Crate

- `cargo update` to ignore Cargo lock and update Version

Generating a Number

```rs
use rand::Rng;
use std::io;

fn main() {
    println!("Gues the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    println!("The secret number is: {secret_number}");
    println!("Please input your guess.");
    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {guess}");
}

```

- use `rand` to generate a number to guess
- call `rand::thread_rng` : local to current thread of executation and seeded by operating system. Then call `gen_range` method to generate a random number in the argument range.
  - Form: `start..=end`, inclusive on lower and upper bounds.
- `cargo doc --open` will open documentation provided by dependencies locally in browser.

Comparing a Guess to the Secret Number

```rs
use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    // --snip--

    println!("You guessed: {guess}");

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
}
```

- Add a type called `std::cmp::Ordering` : enum with variants `Less, Greater, Equal`
- `cmp` compares two values, taking a reference to what it is comparing to.
- `match` expressions are made up `arms` : pattern to match against and code that should be run if the value fits the arm's pattern (like a switch case that matches all variants)
- We still need to convert `guess` to a `number` type:
- `let guess:u32 = guess.trim().parse().expect("Please type a number!");`
- Rust allows shadowing the previous value with a new one. Often used when converting a value from one type to another

- `parse` method converts string to number. Use `:` after `guess` to annotate the type.
- `parse` returns a `Result` type

Allowing Multiple Guesses with Looping

```rs
    // --snip--

    println!("The secret number is: {secret_number}");

    loop {
        println!("Please input your guess.");

        // --snip--

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => println!("You win!"),
        }
    }
}
```

- Loop creates infinite loop
- In order to quit out of a loop, return `break` out of the `Equal` variant.

Handling Invalid Input

- Make game ignore non-numbers by handling the `parse()` value instead of running `expect`:

```rs
          // --snip--

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {guess}");

        // --snip--
 ```

- switch to a `match` expression to handle the error
- Now remove the print to the secret number and you are done!
