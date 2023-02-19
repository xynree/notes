# 10 - Generic Types, Traits and Lifetimes

- generics: Abstract stand-ins for concreate types or other properties
- Functions can take parameters of a generic type
- We'll review how to extract functions and convert them to generic functions
- Then we'll learn to use traits to define behavior in a generic way
- Then we'll cover lifetimes: generics that give compiiler info about how references relate to each other

Removing Duplication By Extracting a Function

- Generics allw us to replace types w/ placeholder that can represent multiple types

## 10.1 Generic Data Types

In Function Deefinitions

- We place generics in fn signature where we would usually specify parameter data types and return value
- Rust type naming convention is CamelCase. For most type generics use `T`
- When using a param in body of function, declare in the signature. We have to declare type paramteter name before we use it:

`fn largest<T>(list: &[T]) -> &T`

- fn `largest` is generic over some type `T`, with one parameter named `list`, whic has a slice of values of type `T`.
- We can only use comparisons that will work for all possible types `T`. We can implement traits on new types to allow things like comparisons.

In Struct Definitions

```rust
struct Point<T> {
  x: T,
  y: T,
}
fn main(){
  let int = Point { x: 5, y: 10};
  let float = Point (x: 1.0, y: 4.0);
}
```

- T is one specific type - and both x and y are instances of T. Having two diff types won't work.
- If we want to declare multiple types, must add a new name:
  
```rust
struct Point<T, U> {
    x: T,
    y: U,
}

fn main() {
    let both_integer = Point { x: 5, y: 10 };
    let both_float = Point { x: 1.0, y: 4.0 };
    let integer_and_float = Point { x: 5, y: 4.0 };
}
```

In Enum Definitions

```rust
#![allow(unused)]
fn main() {
enum Result<T, E> {
    Ok(T),
    Err(E),
}
}
```

In Method Definitions

```rust
struct Point<T> {
    x: T,
    y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}

fn main() {
    let p = Point { x: 5, y: 10 };

    println!("p.x = {}", p.x());
}
```

Performance of Code Using Generics

- Rust turns generic code into specific code at compile time "monomorphization", making them efficient at runtime.

## 10.2 Traits: Defining Shared Behavior

- Trait defines functionality a particular type has and can share with other types

Defining a Trait

- Type's behavior consists of methods we can call on that type
- Traits group method signatures together to define a set of behaviors

```rust
pub trait Summary {
    fn summarize(&self) -> String;
}
```

- We declare using `trait` keyword and then trait name
- We declare method signatures that describe behaviors of types that implement the trait
- Each type implementing this trait must provide custom behavior for the body of the method

Implementing a Trait on a Type

```rust
pub trait Summary {
    fn summarize(&self) -> String;
}

pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{}, by {} ({})", self.headline, self.author, self.location)
    }
}

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
}

```

- Syntax: `impl ___ for ___`

Default Implemmentations

- We can specify default behavior for traaits:

```rust
pub trait Summary {
    fn summarize(&self) -> String {
        String::from("(Read more...)")
    }
}
```

Traits as Parameters

- We can pass in as parameter a type that implements a certain trait:

```rust
pub fn notify(item: &impl Summary) {
    println!("Breaking news! {}", item.summarize());
}
```

Trait Bound Syntax

- impl Trait syntax is syntatic sugar for this:

`pub fn notify<T: Summary>(item: &T) {
    println!("Breaking news! {}", item.summarize());
}`

- If we want to force both params to have different type, we must use trait bound syntax:
- `pub fn notify<T: Summary>(item1: &T, item2: &T) {`
- We can also have multiple types using `+`: `pub fn notify(item: &(impl Summary + Display)) {`
- Or using this `where` syntax:

```rust
fn some_function<T, U>(t: &T, u: &U) -> i32
where
    T: Display + Clone,
    U: Clone + Debug,
{
```

Returning Types that Implement Traits

- We can also use `impl Trai` syntax in the return to specify returning a value that implements a certain trait.

Using Trait Bounds to Conditionally Implement Methods

```rust
use std::fmt::Display;

struct Pair<T> {
    x: T,
    y: T,
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self { x, y }
    }
}

impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        } else {
            println!("The largest member is y = {}", self.y);
        }
    }
}

```

## 10.3 Validating References With Lifetimes

- Lifetimes ensure references are valid as long as we need them to be
- Every reference has a lifetime - scope for which reference is valid
- They are usually implicit and inferred
- Rust allows us to annotate lifetimes when there could be different scopes

The Borrow Checker

- The borrow checker compares scopes to determine whether borrows are valid
- Lifetimes are annotated as `'a` and `'b`

Generic Lifetimes in Functions

- Generic lifetime parameters helps borrow checker perform analysis by defining relationship between values

Lifetime Annotation Syntax

- Annotations describe relationships of lifetimes of multiple references to each other
- Functions can accept references with any lifetime by specifying a generic lifetime parameter
- Syntax: `'a` Must start with apostraphe and usually one char. Placed after the `&` of a reference

```rust
&i32        // a reference
&'a i32     // a reference with an explicit lifetime
&'a mut i32 // a mutable reference with an explicit lifetime
```

Lifetime Annotations in Function Signatures

- Like type annotations, we need to declare generic lifetime params inside angle brrackets.
- Returned reference is valid as long as both parameters are valid
- Below: Specifies that all refrences must have the same lifetime `'a`

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```

- The lifetime of the reference returned by `longest` is the same as the small of the liftimes of the values refrerred to by the arguments
- Generic lifetime will get the concrete lifetime equal to the smaller of the lifetimes of `x` and `y`

Thinking in Terms of Lifetimes

- Lifetime syntax isi about connecting lifetimes of parameters and return values of functions

Lifetime Annotations in Struct Definitions

```rust
struct ImportantExcerpt<'a> {
    part: &'a str,
}

fn main() {
    let novel = String::from("Call me Ishmael. Some years ago...");
    let first_sentence = novel.split('.').next().expect("Could not find a '.'");
    let i = ImportantExcerpt {
        part: first_sentence,
    };
}
```

- This annotation means an instance of ImportantExcerpt can’t outlive the reference it holds in its part field.

Lifetime Elision

- Patterns programmed into Rust's analysis of references
- Lifetimes on functions or methods: input lifetimes
- Lifetimes on return values: output lifetimes

Lifetimes on Methods

```rust
impl<'a> ImportantExcerpt<'a> {
    fn level(&self) -> i32 {
        3
    }
}
```

- Need to be declared after the `impl` keyword

The Static Lifetime

`'static` denotes that reference can live for entire duration of program
