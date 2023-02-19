# 17 - OOP Programming Features of Rust

## 17.1 characteristics of Object-Oriented Languages

Objects Contain Data and Behavior

- Structs and enums have data, and `impl` blocks pfovide methods on structs and enums
- Provide functionality of an "object" even though they are not called "objects"

Encapsulation that Hides Implementation Details

- Encapsulation: Implementation details aren't accessible to code using that object
- Only way to interact with an object is through its public API
- We can control encapsulation with `pub` keyword
  - By default everything else is private

Inheritance as a Type System and as Code Sharing

- Inheritance: A way for objects to inherit elements from another object's definition
- There is no way to define a struct that inherits parent struct fields
- There are other solutions in rust:
  - Are you using for reuse of code?
    - Default trait implementations can be used and overriden when needed
  - Are you using to establish a type system: enable a child type?
    - Polymorphism: Code that can work ith data of multiple types
- Instead of using inheritance, Rust uses "trait objects"

## 17.2 Using Trait Objects That Allow for Values of Different Types

- We sometimes want our library user to extend the set of types that are valid in a particular system
- If we want a method to work on all class types that implement a method `draw`, we might use inheritance to pass down the `draw` behavior

Defining a Trait for Common Behavior

- We can define a trait named `Draw` that has the method `draw`
- Then we can define a vector that takes a trait object (An instance of a type implementing trait and a table used to look up trait methods of the type at runtime)
- Create a trait object by specifying a pointer (`&` or a `Box<T>` smart pointer), then `dyn`, then specifying relevant trait
- In rust, the struct fields and the behavior in `impl` blocks are separated.
- Trait objects are morel ike objects in that they combine data and behavior
  - However, we can't add data to a trait object

```rust
pub trait Draw {
  fn(draw&self);
}

pub struct Screen {
  pub components: Vec<Box<dyn Draw>>
}

impl Screen {
  pub fn run(&self) {
    for components in self.components.iter() {
      component.draw()
    }
  }
}
```

- `Box <dyn Draw>` is a trait object: a stand-in for any type inside a `Box` that implements the `Draw` trait
- Then we call `draw` for each component in `Screen`
- This is different from generic types: trait objects allow multiple concrete types to fill in for trait object at runtime
- This implements idea of "duck typing"

Trait Objects Perform Dynamic Dispatch

- Compiler doesn't know all the types that might be used with code using trait objects
- At runtime, Rust uses pointers inside trait object ot know what method to call

## 17.3 Implementing an OOP Design Pattern

- State pattern: Object-oriented design pattern
- We define a set of states a value can have internally
- States are represented by `state objects`
- Value's behavior changes base don state

Trade-offs of the Ssate pattern

- With `state` pattern, `Post` methoeds don't need `match` expressions
- Implementation using state pattern is easy to extend

Encoding States and Behaviors as Types

- Rather thatn ecapsulating state and transitions, we can encodes tates into different types
- We can make `DraftPost` and `Post` different types that do or don't implement certain methods
  - Will result in compiler errors if you try to call methods that don't exist on the type, saving a headache before production
- An object oriented pattern won't always be the best way to take adavntage of Rust's strengths
