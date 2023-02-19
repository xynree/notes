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

- Slice literal is like array literal without length
  - array literal: `[3]bool{true,true,false}`
  - slice literal: `[]bool{true,true,false}`

- Slice defaults: You may omit high or low bounds to use defaults: zero is default for low bound and length of slice for high bound
`var a [10]int`: Equivalient slice operations:
- `a[0:10]`
- a[:10]
- a[0:]
- a[:]

- Slices have both a `length` and a `capacity`
- Length = # of elements it contains `len(s)`
- Capacity of a slice = number of elements in underlying array `cap(s)`

- Zero vlue of a slice is `nil`
- Nil slice has a length and capacity of 0 and has no underlying array

- Slices can be created with `make` funtion - this is how to create dynamically sliced arrays
- `make` allocates a zeroed array and returns a slice referring to the array

`a := make([]int, 5) // len(a) = 5`

```go
b := make([]int, 0,5) // len(b) = 0, cap(b)=5 to specify a capacity
b = b[:cap(b)] // len(b) = 5, cap(b) = 5
b = b[1:] // len(b) = 4, cap(b) = 4
```

- Slices can contain any type, including other slices
- `append` function to append to a slice
- Resulting value of `append` is a slice contining all elems of original slice plus provided values

## Range

- The `range` form of a `for` loop iterates over a slice or a map
- two values returned, first is index and second is elemnt at that index. Can skip by assigning to _ or omitting second ariable

## Maps

- maps keys to vallues
- zero value of a map is `nil`
- `nil` map has no keys, and no keys can be added
- use `make` to return a map of the given type
- map literals are like struct literals, but keys are required
- If top-level type is just a type name, can be omitted from elems of literal

### Mutating Maps

- Insert or update an element in map m: m[key] = elem
- Retrieve an element: elem = m[key]
- Delete an element: `delete(m,key)`
- Test that key is present with 2 value assignment: `elem, ok = m[key]` (if key is in m, ok is true, otherwise ok is false)
- short declaration: `elem, ok := m[key]`

## Function values

- can be passed around like other values
- May be used as function args and return values
- Go functions may be closures - reference variables from outside its body
