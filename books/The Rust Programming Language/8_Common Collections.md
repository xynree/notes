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
