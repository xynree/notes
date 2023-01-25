# 19 - Advanced Features

- Unsafe Rust: How to opt out of Rust's guarantees
- Advanced traits: Associated types, default type params, supertraits, and newtype pattern
- Advanced types: Newtype pattern, type aliases, never type, dynamically sized types
- Advanced functions and closures: Function pointers and returning closures
- Macros: Ways to define code that expands at compile time

## 19.1 - Unsafe Rust

- Works just like regular rust, but has extra capabilities
- Unsafe code tells compiler "Trust me, I know what I"m doing"
- Using unsafe code incorrectly can create problems due to memory unsafety

Unsafe Superpowers

- Use the `unsafe` keyword and start a new block holding the unsafe code
- Superpowers:
  - Dereference a raw pointer
  - Call an unsafe func or method
  - Access of modify a mutable static variable
  - Implement an unsafe trait
  - Access fields of `union`s
- Does not turn off borrow checker - just gives access to these five features
- `unsafe` does not mean code inside block is dangerous or will have memory safety problems - ensures errors with memory safety must be within the `unsafe` block
- Best to enclose unsafe code within a safe abstraction and provide a safe API

Dereferencing a Raw Pointer

- Raw pointers: Similar to references. Written `*const T` or `*mut T`
- Immutable raw pointers means that the pointer can't be directly assigned to after being derefences
- Features of raw pointers
  - Allowed to ignore the borrowing rules by having both immutable and mutable pointers or mulitple mutable pointers to the same location
  - Aren't guaranteed to point to valid memory
  - Are allowed to be null
  - Don't implement automatic cleanup

```rust

let mut num = 5;

let r1 = &num as *const i32;
let r2 = &mut num as *mut i32;
```

- We don't include `unsafe` keyword: we can create raw pointers in safe code, just can't dereference raw pointers outside an unsafe block
- Dereferencing a raw pointer requires an `unsafe` block:

```rust
let mut num = 5;
let r1 = &num as *const i32;
let r2 = &mut num as *mut i32;

unsafe {
  println!(r1 is: {*r1}");
}
```

- Note that we create a `*const i32` and `*mut i32` to the same `num` location - would have thrown an error normally

Calling an Unsafe Function or Method

- Look just like regular functions but have an extra `unsafe` before the rest of definition
- Call to the function must also be wrapped in an `unsafe` block

Creating a Safe Abstraction Over Unsafe Code

- Wrapping unsafe code in a safe function is a common abstraction
- To use an `unsafe` block, a raw pointer, and calls to unsafe functions:

```rust
use std::slice;

fn split_at_mut(values: &mut [i32], mid: usize) -> (&mut [i32], &mut [i32]) {
    let len = values.len();
    let ptr = values.as_mut_ptr();

    assert!(mid <= len);

    unsafe {
        (
            slice::from_raw_parts_mut(ptr, mid),
            slice::from_raw_parts_mut(ptr.add(mid), len - mid),
        )
    }
}

fn main() {
    let mut vector = vec![1, 2, 3, 4, 5, 6];
    let (left, right) = split_at_mut(&mut vector, 3);
}

```

- We can therefore slice from the same value twice

Using `extern` Functions to Call External Code

- `extern` is for interacting with code written in another language

```rust
extern "C" {
    fn abs(input: i32) -> i32;
}

fn main() {
    unsafe {
        println!("Absolute value of -3 according to C: {}", abs(-3));
    }
}

```

- List names of functions from another language to call
- The `"C"` part defines which application binary iterface will be used: `"C"` follows the C programming language's ABI

- We can also use `extern` to allow other languages to call Rust functions

```rust
#![allow(unused)]
fn main() {
#[no_mangle]
pub extern "C" fn call_from_c() {
    println!("Just called a Rust function from C!");
}
}
```

Accessing or Modifying a Mutable Static Variable

- Global variables in Rust are called `static` variables

`static HELLO_WORLD: &str = "Hello, world!"`

- Similar to constants
- Convention is to use `SCREAMING_SNAKE_CASE`
- Static variables have a fixed address in memory, not allowed to duplicate data
- Static variables can be mutable
- Accessing and modifying mutable static variables is unsafe

```rust
static mut COUNTER: u32 = 0;

fn add_to_count(inc: u32) {
    unsafe {
        COUNTER += inc;
    }
}

fn main() {
    add_to_count(3);

    unsafe {
        println!("COUNTER: {}", COUNTER);
    }
}
```

Implementing an Unsafe Trait

- A trait is unsafe when at least one of its methods has a variant that compiler can't identify
- By using `unsafe impl`, we promise that we'll uphold invariants that aren't verified

```rust
unsafe trait Foo {
    // methods go here
}

unsafe impl Foo for i32 {
    // method implementations go here
}

fn main() {}
```

Accessing Fields of a Union

- A union is similar to a struct, but only one field is used in a particular instance at one tiem
- Used to interface with unions in C code
- Unsafe because Rust can't guarantee type of the data stored in the union instance

## 19.2 Advanced Traits
