# 5 - Using Structs to Structure Related Data

- A struct is a custom data type that namespaces multiple related values making up a meaningful group

## 5.1 - Defining and Instantiating Structs

- Like tuples, hold multiple related values
- Pieces of struct can be different types
- Each piece of data is named

```rust
struct User {
  active: bool,
  username: String,
  email: String,
  sign_in_count: u64,
}
```

- To use a struct, create an instance by specifying concrete values for each field

```rust:instance-of-a-struct
let user1 = User {
  email: String::from ("..."),
  username: String::from("..."),
  active: true,
  sign_in_count: 1,
}
```

- Use dot notation to get a field from a struct
- if instance is mutable, can change the value
  - Entire instance must be mutable

Using the Field init Shorthand

```rust:init-shorthand
User {
  email,
  username,
  active: true,
  sign_in_count: 1,
}
```

Creating Instances From Other Instances With Struct Update Syntax

- Struct update syntax: Create new instance of struct that includes most values of another instance but changes some

```rust:no-update-syntax
fn main(){
  let user2 = User {
    active: user1.active,
    username: user1.username,
    email: String::from(".."),
    sign_in_count: user1.sign_in_coubnt
  }
}
```

Using Struct Update syntax:

```rust:struct-update-syntax
fn main() {
  // --
  let uer2 = User {
    email: String:: from(".."),
    ..user1
  }
}
```

- Similar to spread operator
- `...user` comes last
- Struct update syntax uses assignment - we can no longer user `user` after creating `user2`

Using Tuple Structs without Named Fields to Create Different Types

- Tuple structs: Structs that look similar to tuples
- Just have types of fields, no name
- Useful for giving the whole tuple a name

```rust:tuple-struct
struct Color(i32, i32, i32);
struct Point(i32,i32,i32);

fn main() {
  let black = Color(0,0,0);
  let origin = Point(0,0,0);
}
```

- Each struct that is defined is its own type, even if the types included are the same

Unit-Like Structs Without any Fields

- Behave similarly to `()` - Useful to implement a trait on some type but don't have data you want to stroe in the type itself

```rust:unit-like-struct
struct AlwaysEqual;
fn main() {
  let subject = AlwaysEqual;
}
```

- Use cases: Every instance of `AlwaysEqual` is always equal to every instance of any other type

Ownership of Struct Data

- For struct definitions, use owned type `String` rather than `&str` string slice type: Each instance of struct will own its own data
- IT's possible for structs to store references to data owned by something else, but requires use of `lifetimes`
  - Lifetimes ensure data referenced by struct will be valid as long as the struct is

## 5.2 - An Example Problem Using Structs

- Example: Program that calculates area of rectangle

```rust:main
fn main() {
    let width1 = 30;
    let height1 = 50;

    println!(
        "The area of the rectangle is {} square pixels.",
        area(width1, height1)
    );
}

fn area(width: u32, height: u32) -> u32 {
    width * height
}

```

- Code works, but no indication that the parrameters are related

Refactoring with Tuples

```rust
fn main() {
    let rect1 = (30, 50);

    println!(
        "The area of the rectangle is {} square pixels.",
        area(rect1)
    );
}

fn area(dimensions: (u32, u32)) -> u32 {
    dimensions.0 * dimensions.1
}
```

- This adds a bit of structure, but tuples are not named so we have to index into the pieces, making calc less obvious

Refactoring with Structs

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!(
        "The area of the rectangle is {} square pixels.",
        area(&rect1)
    );
}

fn area(rectangle: &Rectangle) -> u32 {
    rectangle.width * rectangle.height
}

```

- `rectangle` is an immutable borrow of struct `Rerctangle` instance - borrow struct instead of take ownership of it, so use `&`

Adding Useful Functionality with Derived Traits

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!("rect1 is {}", rect1);
}
```

- Print line won't work because `Rectangle` doesn't implement println!.
- Instead, we can use `Debug` mode, after adding `#[derive(Debug)]` over our struct to implement print.

```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!("rect1 is {:?}", rect1);
}

```

- we can also use `dbg!` macro which takes ownership rather than reference
- Prints to the `stderr` rather than `stdout`

```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let scale = 2;
    let rect1 = Rectangle {
        width: dbg!(30 * scale),
        height: 50,
    };

    dbg!(&rect1);
}
```

## 5.3 - Method Syntax

- Methods are defined within context of a struct

Defining Methods

```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!(
        "The area of the rectangle is {} square pixels.",
        rect1.area()
    );
}

```

- Start with a `impl` block for rectangle - this associates it with the `Rectangle` type
- Use `self` as the argument: like `this` in JS
  - shorthand for `self: &Self`
  - the type `Self` is an alias for the type that the `impl` block is for
  - Methods must have a pram named `&self` of type `Self` for their first param.
- Can reuse names from methods/properties

```rust:reused-name
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn width(&self) -> bool {
        self.width > 0
    }
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    if rect1.width() {
        println!("The rectangle has a nonzero width; it is {}", rect1.width);
    }
}

```

- We often use this trait to implement `getters` in order to make field private but the method public
- Rust automatically dereferences points and references to operators on methods

Methods with More parameters

```rust
fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };
    let rect2 = Rectangle {
        width: 10,
        height: 40,
    };
    let rect3 = Rectangle {
        width: 60,
        height: 45,
    };

    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));
}
```

Associated Functions

- All functions defined within an `impl` block = associated functions
- We can defined functions that don't have `self` as their first parameter because they don't need an instance of the type to work with
- Often used for Constructors and sometimes called `new`

```rust:associated-functions
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn square(size: u32) -> Self {
        Self {
            width: size,
            height: size,
        }
    }
}

fn main() {
    let sq = Rectangle::square(3);
}

```

Multiiple `impl` Blocks

- Allowed to have multiple `impl` blocks, but no reason to . May be useful for generic types and traits however.
