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

Specifying Placeholder Types in Trait Definitions with Associated Types

- Associated types connect a type placeholder with a trait so that trait defs can use the placeholder type in their signature
- Example: Iterator has associated type `Item`

```rust
pub trait Iterator {
    type Item;

    fn next(&mut self) -> Option<Self::Item>;
}
```

- Diffrerence from generics: no need to annotate types in each implementation
- Become part of the trait's contract: implementaors of trait provide a type to stand in for the placeholder

Default Generic Type Parameters and Operator Overloading

- We can specify a default type for the generic type when using the generic type parameter
- Syntax: `<T=ConcreteType>`
- Operator Overloading: customizing the behavior of an operator (+ = %) in certain situations
- We can overload the operations by implementing the traits associated withj the operator

```rust
use std::ops::Add;

#[derive(Debug, Copy, Clone, PartialEq)]
struct Point {
    x: i32,
    y: i32,
}

impl Add for Point {
    type Output = Point;

    fn add(self, other: Point) -> Point {
        Point {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}

fn main() {
    assert_eq!(
        Point { x: 1, y: 0 } + Point { x: 2, y: 3 },
        Point { x: 3, y: 3 }
    );
}
```

Fully Qualified Syntax for Disambiguation: Calling Methods with The Same Name

- Nothing in Rust prevents a trait from having a method with the same name as another trait's method
- When calling methods with the same name, need to tell Rust which one to use

```rust
fn main() {
    println!("A baby dog is called a {}", <Dog as Animal>::baby_name());
}
```

- Type annotation to make clear that we want this trait with same name
- Only need to use this erbose syntax where there are multiple implentations that use the same name

Using Supertraits to Require One Trait's Functionality Within Another Trait

- Sometime s atrait might depend on another trait, this is called a supertrait of your trait

```rust
use std::fmt;

trait OutlinePrint: fmt::Display {
    fn outline_print(&self) {
        let output = self.to_string();
        let len = output.len();
        println!("{}", "*".repeat(len + 4));
        println!("*{}*", " ".repeat(len + 2));
        println!("* {} *", output);
        println!("*{}*", " ".repeat(len + 2));
        println!("{}", "*".repeat(len + 4));
    }
}

fn main() {}
```

- We specify that `OutlinePrint` requires `Display` trait

Using the Newtype Pattern to Implement External Traits on External Types

- We are only allowed to implement a trait on a type if either the trait or type are local to our crate
- You can get around this using newtype pattern - creating a new type in a tuple struct

```rust
use std::fmt;

struct Wrapper(Vec<String>);

impl fmt::Display for Wrapper {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "[{}]", self.0.join(", "))
    }
}

fn main() {
    let w = Wrapper(vec![String::from("hello"), String::from("world")]);
    println!("w = {}", w);
}
```

- We make a tuple of a `Vec<T>` through a Wrapper in order to implement Display on `Vec<T>`

## 19.3 Advanced Types

Using the Newtype Pattern for Type Safety and Abstraction

- newtype pattern is useful for other tasks: statically enforcing that values are neer confused and indicating units of a value
- We can use newtype to abstract implementation details of a type, exposing a pub API different from the API of the priate inner type
- Lightweight way to acheive encapsulation

Creating Type Synonyms with Type Aliases

- We can declare a type alias to give an existing type another name using the `type` keyword
- `type Kilometers = i32;` (aliases i32)
- Main use case for type synonyms: reduce repitition
- Commonly used for `Result<T,E>` type

The Never Type that Never Returns

- `!` type: Emppty type or never type
- Stands in place of the return type when a function will never return
- Expressions of type `!` can be coerced into any other type
- We can replace a match arm with `continue` because `continue` implements `!` type
- `loop` also is a `!` type

Dynamically Sized Traits and the `Sized` Traits

- DST's or Unsized types: Let us write code using values whose size we only know at runtime
- example: `str` is a dynamically sized type but `&str` is a reference to the address so it has a fixed size
- All dynamically sized types must be placed behind a pointer of some time
- Rust provides `Sized` trait to determine whether or not a type's size is known at compile time
- Automatically implemented for everything with a known size at compile time. Automatically added to generic types as well
- `?Sized`: T may or may not be `Sized`

```rust
fn generic<T: ?Sized>(t: &T) {
    // --snip--
}
```

## 19.4 Advanced Functions and Closures

Function Pointers

- You can pass regular functions to functions
- Functions coerce to the type `fn` (function pointer)
- Allow ou to use functions as arguments to other functions
- `fn` is a type, not a trait
- Function pointers implement all three closure traits: `Fn` `FnMut` `FnOnce`
  - You can always pass a function pointer as an arg for a function that expects a closure
- Best to write functiooons using a generic type and a closure trait so funcitons can accept either functions of closures
- When would you want to only accept `fn`? Interfacing with external code

Returning Closures

- You can't return closures directly
- We can use a trait object to get around it:

```rust
fn returns_closure() -> Box<dyn Fn(i32) -> i32> {
    Box::new(|x| x + 1)
}
```

## 19.5 - Macros

- Family of features: `declarative` macros and three kinds of procedural macros:
  - Custom `#[derive]` macros
  - Attribute-like macros to define custom attributes useable on any item
  - Function-like macros that look like function calls but operate on the tokens used as their argument

The Difference Between Macros and Functions

- A way of writing code that writes other code (metaprogramming)
- Macros expand to produce more code than the code you've written manually
- Useful for reducing the amount of code needed to write and maintain
- Macros can take a variable number of parameters
- Macros are expanded before the compiler interprets it, so a macro can implement a trait on a type
- Macro defs are more complex than function defs and are harder to read
- Must define or bring macros into scope before calling them

Declarative Macros with `macro_rules!` for General Metaprogramming

- Declarative Macro or "macros by example" "macro_rules! macros"
  - Allow you to write something similar to a `match`
  - Compares value passed to source code structure and replaces code passed to the macro

```rust
#[macro_export] // used to make macro public
macro_rules! vec {
    // pattern to match (only 1 arm)
    ( $( $x:expr ),* ) => {
        {
            let mut temp_vec = Vec::new();
            $(
                temp_vec.push($x);
            )*
            temp_vec
        }
    };
}
```

- Valid pattern syntax in macro defs differs than normal pattern syntax because macro patterns are matched against Rust code structure, not values
- A form of regex: * specifies pattern matches zero+ of whatever precedes

Procedural Macros for Generating Code from Attributes

- Procedural macros acts more like a function
- Accept some code as input, operate on code and produce some code as output
- Defs are in their own crate with a special crate type

How to Write a Custom `derive` Macro

- Rather than making users implement the trait, provide a procedural macro so type can be annotated to get a default implementation of the macro function
- Need to add the derive macro to the Cargo.toml lib

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn;

#[proc_macro_derive(HelloMacro)]
pub fn hello_macro_derive(input: TokenStream) -> TokenStream {
    // Construct a representation of Rust code as a syntax tree
    // that we can manipulate
    let ast = syn::parse(input).unwrap();

    // Build the trait implementation
    impl_hello_macro(&ast)
}
```

Attribute-Like Macros

- Similar to cstom derive macros, but allow you to create new attributes
- More flexible, can be applied to functions as well as structs and enums

Function-Like macros

- Define macros that look like function calls

```#[proc_macro]
pub fn sql(input: TokenStream) -> TokenStream {
```
