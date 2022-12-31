[10 Key Learnings In Rust](https://jondot.medium.com/my-key-learnings-after-30-000-loc-in-rust-a553e6403c19)

## 1. Be Ready To Commit

- Borrow Checker is a common annoyance + Static Typing
- You will spend time thinking and designing around managing memory and types "slow, safe thinking"
- "survive the beginning"

## 2. Rust is Wholesome

- Coming from Dynamic Languages: meaningful change in designing and building software
- Design needs to be firmly in place
  - Negotiate around redesigns by cloning, copying, and boxing
- By actually going through redesign, you will be forced to look at object dependencies
- Coming From Static Languages that are Garbage Collected
  - Rust might feel like boilerplatey
- Coming From Static Languages with Manual Memory Management
  - Rust feels like a new pair of shoes

## 3. Sweet Spot for Building Tools

- Rust has great libraries for building with
- Standard library is also very rich
- Performant and Save by default

## 4. Great for Interop and Replacing Existing Infrastructure

## 5. Consistent and Stable

- Crate and module breakage is rare

## 6. Slicing and Dicing Software

- Features: mix and match software in compile time

## 7. Good Performance

## 8. Use Go for when Ecosystem isn't there

- Go has a richer ecosystem
- Go is easy to pick up in a day, easy in easy out
- Some performace traits in common with Rust

## 9 Slow Compilation Speeds

- Linking crates adds significant compilation time
- Crate Shattering
  - You can shatter crates into smaller libraries and compile each separately
  - Makes it easier to identify optional features
  - Easier to flag sub crates as features
  - Easier to isolate and performance test smaller crates
- To break down into crate, identify:
  - Core: data, types, abstractions
  - Logic: algorithms
  - Peripherals: networking, HTTP, reporting
  - App: entry point

## 10 Services are still in progress

## Bonus: Good documentation
