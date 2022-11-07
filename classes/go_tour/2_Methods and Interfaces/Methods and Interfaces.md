# Methods and Interfaces

## Methods

- Go does not have classes, but you can define methods on types
- Method is a func with a "receiver" argument
- Appears in arg list between `func` keyword and method name
- You could also just write the function regularly with no change in functionality
- Methods can be declared on non-struct types
  - Can only declare a method with a receiver whose type is defined in the same package

## Pointer Receivers

- Methods can be declared with pointer receivers
- Receiver type has syntax `*T` for some type `T` (T cannot also be a pointer)
- Methods with pointer receivers can modify value to which receiver points
- Pointer receivers are more common than value receivers
- With a normal value receiver, a method operates on a copy of the original value. The method must have a pointer to change the value.

### Methods and Pointer Indirection

- functions with a pointer argument must take a pointer, while methods with pointer receivers take either a value or a pointer as the receiver

```go
var v Vertex
v Scale(5) // ok
p := &v
p.Scale(10) // ok
```

- Even when v is a value and not a pointer, the method with pointer receiver is called automatically and interpreted.
- Also happens in reverse: methods with value receivers take either a value or a pointera s the receiver

```go
var v Vertex
fmt.Println(v.Abs()) // OK
p := &v
fmt.Println(p.Abs()) // OK
```

- `p.Abs()` interpreted as (*p).Abs()
- Choosing a value or a pointer receiver
  - Method can modify value that its receiver points to
  - Avoid copying value on each method call
  - All methods on a type should have either value or pointer receivers, but not a mixture of both

## Interfaces

- Interface type: Set of method signatures
- Can hold any value that implements those methods
- Implemented implicitly, decoupling definition of interface from implementation
- Interface values can be thought of as a tuple `{value, concrete-type}`
- Calling method on interface executes method of same name oon its underlying type
- Interface values with nil underlyiing types
  - If concrete values inside interfaces are nil, method called with nil receiver
- Nil interface holds neither value or concrete type
  - Calling a method on nil causes a runtime error
- Empty interface
  - emtpy interface `interface{}` specifies zero methods
  - May hold values of any type
  - Used by code that handles values of unknown type (like Typescript `T`)

## Type Assertions

- Provide access to an interface value's underlying concrete value

`t := i.(t)`

- interface value `i` holds concrete type `T` and assigns underlying `T`value to variabe `t`
- to test whether interface holds specific type, type assertion can return 2 values: underlying value and a bool that reports whether assertion succeeded
`t, ok := i.(T)`
- t = underlying value, `ok` = `true` . if `i` holds a `T`

## Type Switches

- Permits several type assertions in a series
- Like a regular switch statement but cases specify types
- Same syntax as type assertion but specific type `T` repalced with keyword `type`

## Stringers

```go
type Stringer interface {
  String() string
}
```

- A type that can describe itself as a string

## Errors

- Error states use `error` values
- Built in interface similar to `fmt.Stringer`

```go
type error interface {
  Error() string
}
```

- test whether `error` value equals `nil`

## Readers

- `io` package specifies `io.Reader` interface to read streams of data
- `Read` method populates given byte slice with data, returning number of bytes populated and an error value. Returns `io.EOF` when stream ends
