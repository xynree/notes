# 13 - Functional Language Features: Iterators and Closures

- Closures: function-like construct that can be stored in a variable
- Iterators: way of processing a series of elements
- How to use closers and iterators
- Performance

## 13.1 - Closures: Anonymous Functions that Capture Their Environment

- Closures: Anonymous functions that can be saved in a variable or passed as arguments to other functions
- Create the closure in one place and then call closure elsewhere to evaluate it in a different context
- Closures can capture values from scope in which they were defined

- `unwrap_or_else` takes a closure that returns a value `T`. If `T` is the `Some` variant, returns the value from within the `Some`. If `None`, `unwrap_or_else` calls closure and returns value from the closure
- closure operation: `|| self.most_stocked()`
  - closure captures a reference to the instance and passes it to the parent method

Closure Type Inference and Annotation

- Closures don't require you to annotate types of parameters or return values
- Typically short and relevant only within a narrow context
- Can add types if we want to increase explicitness

```rust
fn  add_one_v1   (x: u32) -> u32 { x + 1 }
let add_one_v2 = |x: u32| -> u32 { x + 1 };
let add_one_v3 = |x|             { x + 1 };
let add_one_v4 = |x|               x + 1  ;
```

- compiler infers a concrete type for each of parameters and return
- Types are then locked into the closure and cannot be changed

Capturing References or Moving Ownership

- Closures can reference a value from the environment
- It can also mutate values from its environment if it is a mutable closure
- To force closure to take ownership of the values it uses, use `move` keyword before the parameter list

Moving Captured Values out of Closures and the `Fn` traits

- Closure body can:
  - move value out of a closure
  - mutate captured value
  - neither move or mutate
  - capture nothing
- Closures automatically implement one, two or all three of these fn traits:
  - `FnOnce`: closures that can be called once
  - `FnMut`: closures that don't move captured values out of their body, but might mutate values
  - `Fn`: closures that don't move captured values and don't mutate those values, + closures that capture nothing. may be called more than once

## 13.2 Processing a Series of Items with Iterators

- Iterator allows performing task on sequence of items in turn
- Lazy: no effect until methods are called that consume iterator to use it

The Iterator Trait and the next Method

- Iterators implement a trait named`Iterator`that defines a type`Item`and implements the function`next`
- `Item` type is used in the return type of the `next` method: will be the type returned from the iterator
- `next` method returns one item of the iterator at a time wrapped in `Some`, or `None` if it is over

```rust
#![allow(unused)]
fn main() {
pub trait Iterator {
    type Item;

    fn next(&mut self) -> Option<Self::Item>;

    // methods with default implementations elided
}
}
```

Methods that Consume the Iterator

- Iterator has methods, some of which implement `next`
  - These methods are called `consuming adaptors`
    - Ex: sum: iterates through items by calling `next`, consuming the iterator

Methods that Produce Other Iterators

- Iterator Adaptors: methods on `Iterator` that don't consume  the iteratror
  - Example: `map`: takes aclosure to call on each iterm, returns new iterator that procues the modified items
- They won't do anything unless they are consumed: consume with `collect`

Using Closures that Capture Their Environment

```rust
#[derive(PartialEq, Debug)]
struct Shoe {
    size: u32,
    style: String,
}

fn shoes_in_size(shoes: Vec<Shoe>, shoe_size: u32) -> Vec<Shoe> {
    shoes.into_iter().filter(|s| s.size == shoe_size).collect()
}

```

## 13.3 Improving Our I/O Project
