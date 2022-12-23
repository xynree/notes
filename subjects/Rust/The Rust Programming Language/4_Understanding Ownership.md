# 4 - Understanding Ownership

## 4.1 What is Ownership?

- rules that govern how Rust manages memory
- Memory managemd through a system of ownership w/ a set of rules that compiler checks

Ownership Rules

- Each value has an owner
- There can only be 1 owner at a time
- When owner goes out of scope, value dropped

Variable Scope

- scope: range within program for which it is valid
- When a value is in a block, it is in scope until the end of the code block { }

The `String` Type

- String literals aren't suitable for every situation using text
  - Immutable
  - Not all strings are known when code is written
- Uses a second string type: `String`
  - manages data allocated on heap
- `let mut s = String::from("hello");`
- `String` can be mutable but literals cannot

Memory and Allocation

- String literals are fast and efficient bc of immutability
- `String` allocates memory on the heap
  - requested at runtime (by calling String::from)
  - Need a way to free memory when we're done
- Memory is automatically returned once variable that owns it goes out of scope

```rs

{
  let s = String::from("hello") // s is valid from this point forward

  // do stuff

}

// scope is over, s is no longer valid

```

Variables and Data Interacting with Move

- What happens when we make a variable that copies another variable?
- `String` type is made of three parts:
  - pointer to memory
  - length - how much memory in bytes the contents are currently using
  - capacity - total memory `String` has received from allocator
- When assigning s1 to s2, it copies by reference, not by value
- However, when s2 and s1 go out of scope, they both try to free the same memory
  - "double free error"
- When a copy of s1 is made, Rust considers s1 as no longer valid.
- So Rust cannot make a shallow copy, but only a `move`.
- Rust never makes `deep` copies of data

Variables and Data Interacting with Clone

- If we want to deeply copy the heap data, we use a method called `clone`

```rs
let s1 = String::from("hello");
let s2 = s1.clone();
```

Stack-Only Data: Copy

- integers that hae a known size are stored on the stack
- Special annotation called `Copy` that makes the original still valid after assignment (negates above effects)
- Scalar types implement `Copy`, and anything else that doesn't require allocation

Ownership and Functions

- Passing a variable to a fn will move or copy

```rs
fn main() {
    let s = String::from("hello");  // s comes into scope

    takes_ownership(s);             // s's value moves into the function...
                                    // ... and so is no longer valid here

    let x = 5;                      // x comes into scope

    makes_copy(x);                  // x would move into the function,
                                    // but i32 is Copy, so it's okay to still
                                    // use x afterward

} // Here, x goes out of scope, then s. But because s's value was moved, nothing
  // special happens.

fn takes_ownership(some_string: String) { // some_string comes into scope
    println!("{}", some_string);
} // Here, some_string goes out of scope and `drop` is called. The backing
  // memory is freed.

fn makes_copy(some_integer: i32) { // some_integer comes into scope
    println!("{}", some_integer);
} // Here, some_integer goes out of scope. Nothing special happens.
```

Return Values and Scope

- Returning values can also transfer ownership
- Returned value is moved out to the calling function
- Rust lets us return multiple values using a tuple - but instead we can use `references`

## 4.2 References and Borrowing

- `Reference` is like a pointer in that it's an address we can follow to access data, but dsata is owned by other variable

```rs
fn main() {
  let s1 = String;:from("hello");
  let len = calculate_length(&s1);
  println!("{}, {}", s1, len);
}

fn calculate_length(s:&String) -> usize {
  s.len()
}
```

- We pass `s&1` into `caluclate_length`, taking `&String` instead of `String`
- `*` is used to dereference.
- `&` creates a reference that refers to value of `s1` but does not own it. So the value will not be dropped when the reference stops being used
- "borrowing"
- What happens when we modify something we're borrowing?
  - It doesn't work! References are immutable

Mutable References

- We can use `&mut` on a `mut variable` to make a mutable reference
- If there is a mutable reference, there can be no other references to the value.
- We can use brackets to create a new scope, enforcing multiple `mut &`, just not simultaneously.

```rs
    let mut s = String::from("hello");

    {
        let r1 = &mut s;
    } // r1 goes out of scope here, so we can make a new reference with no problems.

    let r2 = &mut s;
```

Dangling References

- A reference cannot be returned while the original value goes out of scope. It will be deallocated. Solution is to return the variable directly

## 4.3 - The Slice Type

- References a contiguous sequence of elements in a collection
- Does not have ownership

```rs

fn first_word(s:&String) -> usize {
  let bytes = s.as_bytes(); // convert string to array of bytes

  for (i.&item) in bytes.iter().enumerate() { // iterator, enumerate returns a tuple
    if item == b' ' { // byte literal syntax
      return i
    }
  }
  s.len()
}
```

String Slices

- a reference to part of a string

`let hello = &s[0..5];`

- reference to a portion of string, ending non inclusive
- if 0, can drop the 0 value

```rs
// . adjusted to return a slice
fn first_word(s: &String) -> &str {
  let bytes = s.as_bytes();

  for (i, &item) in bytes.iter().enumerate() {
    if item == b' ' {
      return &s[0..i];
    }
  }
  &s[.. ]
}
```

String Literals as Slices

- A string literal is a slice pointing to specific point in the binary

String Slices as Parameters

   We can pass around string slics

Other Slices

- Reference part of an array - works same as slices
