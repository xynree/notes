# Smart Pointers

- Smart pointers act like pointers but also have additional metadata and capabilities
- Smart pointers in Rust sometimes own the data they point to
  - `String` and `Vec<T>` are examples of smart pointers
- Usually implemented using structs
- Also implement the `Deref` and `Drop` traits
  - `Deref`: Allows instance of the struct to behave like a reference
  - `Drop`: allows to customize the code that's run when an instance of the smart pointer goes out of scope
- Common smart pointers:
  - `Box<T>` : allocate values on the heap
  - `Rc<T>` : reference counting type that enables multiple ownership
  - `Ref<T>` and `RefMut<T>`:  enforce borrowing rules at runtime instead of compile time

## 15.1 Using `Box<T>` to Point to Data on the Heap

- Boxes allow to store data on heap rather than stack
- What remains on the stack instead: Pointer to the heap data
- Boxes don't have performance overhead
- Use when:
  - You have a type whose size can't be known at compile time and want to use a value of that type in a context requiring an exact size
  - When you have a large amount of data that needs to transfer ownership, but not copy data when you do so
  - When you want to own a value but care that it's a type that implements a particular trait rather than being a specfiic type

### Using a `Box<T>` to Store Data on the Heap

```rust
fn main() {
  let b = Box::new(5);
  println!("b = {}", b);
}
```

- `b` is a variable that is allocated on the heap

### Enabling Recursive Types with Boxes

- Value of a recursive type can have another value of the same type as part of itself
- Because boxes hav ea known type, we can insert a box in the recursive type definition

Cons list

- A Cons list is a data structure made up of nested pairs (Lisp version of a linked list)
- Storing a cons list struct will give error because it is a recursive type

Using `Box<T>` to get a Recursive Type with a Known size

- Rust will say to store the value indirectly by storing a pointer to the value instead
- `Box<T>` is a pointer, so rust always knows how much space a `Box<T>` needs

```rust
enum List {
    Cons(i32, Box<List>),
    Nil,
}

use crate::List::{Cons, Nil};

fn main() {
    let list = Cons(1, Box::new(Cons(2, Box::new(Cons(3, Box::new(Nil))))));
}

```

- Boxes can be useful when indirection is the only feature we need
- By implementing `Deref` Box values can be treated like references

## 15.2 Treating Smart Pointers Like Reg References with the `Deref` trait

- `Deref` allows to customize behavior of the dereference operator `*`

Using `Box<<T>` Like a Reference

```rust
fn main() {
    let x = 5;
    let y = &x;

    assert_eq!(5, x);
    assert_eq!(5, *y);
}


fn main() {
    let x = 5;
    let y = Box::new(x);

    assert_eq!(5, x);
    assert_eq!(5, *y);
}
```

- Box::new(x) makes a copied value of `x` rather than reference pointing to the value of x

Implicit Deref Coercions

- Converts a reference to a type that implements `Deref` into a reference to another type
- Deref Coercion allows Rust to handle conversions for us automatically

## 15.3 Running Code on Cleanup with the `Drop` Trait

- `Drop` allows you to customize what happens when a value is about to go out of scope
- Functionality of `Drop` is almost always used when implementing a smart pointer
  - When `Box<T>` is dropped, deallocates space on heap that the box points to
- By implmenting `Drop` with a method named `drop` taking mutable reference to `self`, you specify code to run when value goes out of scope
- Variables are dropped in the reverse order of their creation

### Dropping a Value Early with `std::mem::drop`

- Not easy to disable automatic `drop` functionality
- Occassionally you might want to clean up a value early
- Rust doesn't allow you to call `Drop` manually, instead you have to call the `std::mem::drop` function provided by the standard library
  - Not allowed to explicitly call `drop`  as a destructor, or else Rust would double free
- To force a vallue to be cleaned up early, use the `std::mem::drop` function
- Called by passing as an argument the value we want to force drop

```rust
fn main() {
    let c = CustomSmartPointer {
        data: String::from("some data"),
    };
    println!("CustomSmartPointer created.");
    drop(c);
    println!("CustomSmartPointer dropped before the end of main.");
}
```

## 15.4 `RC<T>`, the Reference Counted Smart Pointer

- There are cases when a single value might have multiple owners
  - Ex: graph data structures
- Nod eshouldn't be cleaned up unless it doesn't have any edges pointing to it and has no owners
- Enable multiple ownership by using Rust type `Rc<T>` (reference counting)
  - `Rc<T>` keeps track of the number of references to a value to determine whether or not value is still in use
  - If zero references to a value, value can be cleaned up without references becoming invalid
- Use `Rc<T>` when we want to allocate some data on heap for multiple parts of program to read and can't determine @ compile time which part will finish using the data last
  - If we could know which part finishes last, we could just make that part the data's owner
- `Rc<T>` is only for use in single-threaded scenarios

### Using `Rc<T>` to Share Data

- Create two cons lists that both share ownership of a third list
- Won't work normally as the `Cons` variants own the data they hold
- If we change definition of `List` to use `Rc<T>` in place of `Box<T>`, each variant will now hold a value and a `Rc<T>` pointing to a `List`

```rust
enum List {
    Cons(i32, Rc<List>),
    Nil,
}

use crate::List::{Cons, Nil};
use std::rc::Rc;

fn main() {
    let a = Rc::new(Cons(5, Rc::new(Cons(10, Rc::new(Nil)))));
    let b = Cons(3, Rc::clone(&a));
    let c = Cons(4, Rc::clone(&a));
}
```

- `Rc::clone` doesn't make a deep copy: just increments the reference count

### Cloning an `Rc<T>` Increases the Reference Count

- Each time we call `clone`, count goes up by `
- When `c` goes out of scope, count goes down by 1
- `Rc<T>` allows to share data between multiple parts of program for readin g only
- However, it is immutable

## 15.5 `RefCell<T>` and the Interior Mutability Pattern

- Interior mutability: allows you to mutate data even when there are immutable references to the data
  - Usually this is disallowed by borrowing rules
  - To mutate, pattern uses `unsafe` code inside data structure to indicate that we're checking the rules manually

### Enforcing Borrowing Rules at Runtime with `RefCell<T>`

- `RefCell<T>` type represents single ownership over the data it holds
- With `RefCell<T>`, borrowing rules are enforced at runtime
  - If these rules are broken, program with panic and exit
- Normally, checking at compile time will catch errors soon in the dev process
  - This is the best choice in majority of cases
- Advantage of checking at runtime: Certain mem-safe scenarios are allowed that would've been disallowed
- `RefCell<T>` type is useful when you're sure code follows borrowing rules but compiler is unable to guarantee that
- `RefCell<T>` for use only in single-threaded scenarios
- Reasons to choose various smart pointers:
  - `Rc<T>` enables multiple owners of the same data
  - `Box<T>` allows immutable or mutable borrows checked at compile time (`Rc<T>` allows only immutable borrows at compile time, `RefCell<T>` allows immutable or mutable borrows checked at runtime)
  - Because`RefCell<T>`allows mutable borrows at runtime, you can mutate valeu inside the`RefCell`even when the`RefCell` is immutable

### Interior Mutability: A Mutable Borrow to an Immutable Value

- Normal borrow rules: When you have an immutable value, you can't borrow it mutably
- `RefCell` is one way to get the ability to have interior mutability, but borrow checker is checked at runtime instead

### Having Multiple Owners of Mutable Data by Combining `RC<T>` and `RefCell<T>`

- You can use them in combination
- If you have a `Rc<T>` that holds a `RefCell<T>`, you can have multiple owners and can be mutated
- By using `RefCell<T>`, outwardly immutable value, but we  can use methods on `RefCell<T>` to provide access to interior mutability

## 15.6 Reference Cycles can Leak Memory

- Rust memory safety guarantees make it hard to create a memory leak, but not impossible
- It's possible to create references hwere items refer to each other in a cycle, creating memory leaks because reference counts never reach 0
- If you have nested combinations of types with interior mutability and reference counting, must enusre that you don't create cycles
- A solution: Reorganize data structures so that some refs express ownership and some don't

### Preventing Ref Cycles: Turning a `Rc<T>` into a `Weak<T>`

- Weak references don't express ownership relationship, and count doesn't affect when the instance is cleaned up
- Rather than using a list whos items know about the next item, we create a tree whose items know about their children and thier parents
- Weak counts don't have bearing on whether or not the instanc e gets dropped
