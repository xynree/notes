# 8 - Common Collections

- Collections can contain multiple values
- Stored on the heap, size is not known at compile time

Types:

- Vector: Allows to store variable # of values next to each other
- String: A Collection of characters
- Hash Map: Associate a value with a particular key
  - Implementation of the more general data structure: "map"

## 8.1 Storing Lists of Values with Vectors

- `Vec<T>`: vector
  - Allows to store more than 1 val in a single data structure

Creating a New Vector

- Create with `Vec::new` function
  
`let v: Vec<i32> = Vec::new();`

- `vec!` macro creates a new vector that holds values you give it

`let v = vec![1,2,3];`

Updating a Vector

- to add elements to a vector, can use the `push` method
- To change its value, make the vector mutable

Reading Elements of Vector

- Indexing or use `get` method to reference a vector value

```rust
    let v = vec![1, 2, 3, 4, 5];

    let third: &i32 = &v[2];
    println!("The third element is {third}");

    let third: Option<&i32> = v.get(2);
    match third {
        Some(third) => println!("The third element is {third}"),
        None => println!("There is no third element."),
    }
```

- Use `& and []` to give a reference to the elemnt at the index value
- When we use `get` method, get an `Option<&T> back`

Iterating over a Vector

```rust
    let v = vec![100, 32, 57];
    for i in &v {
        println!("{i}");
    }
```

- We can also use `&mut v` in the iterator to change the elements
- We have to use `*` dereference to get the value

Using an Enum to Store Multiple Types

- Workaround for stipulation that Vector holds only one type: Create an enum that accepts multiple types, then make a Vector of that enum type

Dropping a Vector Drops its Elements

- All of the vector contents are dropped when it goes out of scope

## 8,2 Storing UTF-8 Encoded Text with Strings

- People get stuck on strings sometimes bc:
  - Rust can expose possible errors
  - Strings are a more complicated data structure than they may seem
  - UTF-8

What is a String?

- `str` is the only string type in the core language, usually seen in the "string slice". Usually borrowed as `&str`.
- `String` type is provided by Rust's standard library
  - Growable, mutable, owned UTF-8 string type
  - String in rust might refer to either `String` or string slice `&str`

Creating a New String

- Many of same operations available with Vecs are also available with String because `String1 is actually a wrapper around a vector of bytes, with some extra features.

`let mut s = String::new();`

- Creates a new empty string called `s` that wae can load data into
- If converting some data to a string, use `to_string()` method:

`let s = "initial contents".to_string();`

- We can also use `String::from` to create a `String` from a string literal

`let s = String::from("initial contents");`

- Many different generic API's for strings
- We can use any properly encoded data in strings

Updating a String

Appending to a String with `push_str` and `push`

- We can grow a String using the `push_str` method to append a string slice.
- `push_str` takes a string slice because we don't want to take ownership of the parameter
- `push` takes a single character as a param and adds it to `String`

Concatenation with the `+` Operator or the `format!` Macro

- You can concat two strings with the + operator

```rust
    let s1 = String::from("Hello, ");
    let s2 = String::from("world!");
    let s3 = s1 + &s2; // Compiler coerces &String to &str
```

- For >1 string combination, use `format` macro:

```rust
fn main() {
    let s1 = String::from("tic");
    let s2 = String::from("tac");
    let s3 = String::from("toe");

    let s = format!("{s1}-{s2}-{s3}");
}
```

Indexing Into Strings

- Rust will throw an error when trying to index into a String

Internal Representation

- `String` is a wrapper around `Vec<u8>`
- Some characters will take 2 bytes of storage instead of 1, so can't guarantee consistent indexing

Bytes and Scalar Values and Grapheme Clusters

- There's many different ways to look at string slicing, so Rust does not allow it
- Also, Rust cannot guarantee O(1) constant time with this

Slicing Strings

- Rather than indexing with a single number, use `[]` with a range to get string slice of particular bytes

Methods for Iterating Over Strings

- be explicit about whether you want `chars()` or `bytes()`

## 8.3 Storing Keys with Associated Values in Hash Maps

- Type: `HashMap<K,V>` stores a maping of keys of type `K` to type `V` using a hashing function
- Key can be of any type

Creating a New Hash Map

`let mut scores = HashMap::new()`

- must `use` the HashMap from standard library
- Store data on the heap

Accessing Values in a Hash Map

- We can get values by providing a key to the `get` method

```rust
fn main() {
    use std::collections::HashMap;

    let mut scores = HashMap::new();

    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);

    let team_name = String::from("Blue");
    let score = scores.get(&team_name).copied().unwrap_or(0);
}
```

- Get method returns an `Option`
- We can iterate over key/value pairs using a for loop

```rust
    for (key, value) in &scores {
        println!("{key}: {value}");
    }
```

Hash Maps and Ownership

- For types with `Copy` trait (i32), values are copied into hash map.
- For owned variables, values are moved and hash map new owner.

Updating a Hash Map

- Number of key/value pairs is growable, but each unique key can have only 1 value associated at a time8

Overwriting a Value

- If we insert a kye/value into a hashmap, value associated with key will be replacd

```rust
fn main() {
    use std::collections::HashMap;

    let mut scores = HashMap::new();

    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Blue"), 25);

    println!("{:?}", scores);
}
```

Adding a Key Only if A Key isn't Present

- Special API: `entry`: takes key you want to check, then returns enum `Entry` representing a value that may or may not exist
- `or_insert` method on Entry will return a ref to the value if it exists, and if not inserts a new value

Updating a Value based on the Old Value

```rust
fn main() {
    use std::collections::HashMap;

    let text = "hello world wonderful world";

    let mut map = HashMap::new();

    for word in text.split_whitespace() {
        let count = map.entry(word).or_insert(0);
        *count += 1;
    }

    println!("{:?}", map);
}
```
