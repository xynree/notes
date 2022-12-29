# 2 - Primitives

- Wide variety of primitives, including:
  - Scalar Types
    - signed/unsigned ints
    - floating point
    - char
    - bool
    - unit type ()  -> empty tuple ()
  - Compound types
    - arrays [1,2,3]
    - tuples (1, true)
- Variables can be type annotated, numbers may be annotated via suffix or by default
  - Ints default to `i32`, floats `f64`

## 2.1 - Literals and Operators

- ints, floats, chars, strings, bools and unit type can be expressed with literals
- ints can also use hex, octal, binary
- underscores can be placed in literal to help readability

## 2.2 - Tuples

- Collection of values with different types
- Values can be extracted with tuple indexing

## 2.3 - Arrays and Slices

- A collection of objects of the same type `T`, stored contiguously
- Length is known at compile time
- Slices are similar but length not known at compile time
- Slices: 2 word obj: first is a pointer to data and second is length of a slice
- Can be used to borrow a section of an array
- Type signature: `&[T]`
- Use syntax `let xs: [5] = [1,2,3,4,5]` to set up a fixed size array. Can also declare a type with `let xs: [i32,5]`
- `let x :[500] = [0; 50];` will initialize all elements to the same value
- Zero indexed
- `len` - returns count of elements in an array
- Arrays are allocated on stack
- Can be automatically borrowed as slices using `&`
- Slices have format [starting index...ending index]
  - Ending index is non inclusive
- Access arrays safely with `.get`, which returns as `Option`
