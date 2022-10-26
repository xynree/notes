# More Types: Structs, Slices, and Maps

## Pointers

- Pointers hold the memory address of a value
- Type `*T` is a pointer to `T` value. Zero value is `nil`

`var p * int`

- `&` operator generates a pointer to its operand

```go
  i :- 42
  p = &i
```

- `*` denotes pointer's underlying value (dereferencing)

```go
  *p = 42
```

## Structs

- A `struct` is a collection of fields. They are accessed using a dot.
- Struct fields can be accessed through a struct pointer
- Struct literal denotes a newly allocated struct value

## Arrays

- Type [n]T is an array of `n` values of type `T`
`var a [10]int` = array `a` of 10 integers
- Arrays cannot be resized

## Slices

- An slice is a dynamically-sized, flexible view into elements of an array
- type `[]T` is a slice with alements of type `T`
- Specify two indices, low and high bound, to get elements of an array
- `a[low:high]` includes the first element, but excludes the last one
- `a[1:4]`: creates a slice including elements 1 through 3 of a
- slices do not store data, just describes a section of an array
- Changes elements of a slice modifies the attached array
