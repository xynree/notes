# Packages, Variables, and Functions

## Packages

- Programs start running in package `main`
- Package name = last elem of import path

## Exported Names

- Name is exported if it begins with a capital letter
  
```go
math.pi // not exported
math.Pi // exported! ready 2 use
```

## Functions

- type comes after variable name in function
- syntax:

```go
func add(x int, y int) int {
  return x + y
}
```

- When 2+ consecutive args with same type, can omit all types except last

- x int, y int ---> x,y int

## Multiple Results

- Function can return any number of results
- shown in return typing

```go
func swap(x,y string)  (string,string) {
  return y,x
}
```

## Named Return values

- return values may be named to document meaning of return values
- `return` statements without arguments returns named return values ("naked" return)
  - should only be used in short functions

## Variables

- `var` statement declares a list of variables (type is last)
- can include initializers (one per variable)
- if initializer, type can be omitted

## Short Variable Declarations

- `:=` short assignment used in place of `var` with implicit type
- Can only be used inside functions

## Basic types

- Go's basic types:

```
bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // alias for uint8

rune // alias for int32
     // represents a Unicode code point

float32 float64

complex64 complex128
```

## Zero values

- Variables w/o explicit value are given 0 value

```md
The zero value is:

0 for numeric types,
false for the boolean type, and
"" (the empty string) for strings.
```

## Typecasting

- T(v) converts value `v` to type `T`

```go
i := 42
f := float64(i)
u := uint(f)
```

- Assignment between types requires explicit conversion

## Type inference

- When declaring variable, type infeerred from right hand side
- When right hand side is untyped numeric, infers type depending on precision of constant

## Constants

- constants declared with `const`
- Cannot be declared with `:=`
- Numeric constants take on type of fn they are passed into
