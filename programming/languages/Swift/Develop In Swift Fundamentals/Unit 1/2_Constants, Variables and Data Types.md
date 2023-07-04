# 1.2 - Constants, Variables, and Data Types

## Constants & Variables

- Constants are defined using `let`: `let x = 10`
- Variables are defined using `var`: `var x = 10`

- Use constants rather than variables in the correct places so that Swift can optimize compiling your code

## Naming Constants and Variables

- Names can't contain spaces, math symbols, or begin with a number
- Best practices: descriptive, camelCased variables

## Comments

- Comments can be added with `//` or `/* ... */`

## Types

- Common Types: Int, Double, Bool String
- Collection Types: Array, Dictionary, Struct

- Create own types with struct type definitions:

```swift
struct Person {
  let firstName: String
  let lastName: String

  func sayHello() {
    print("hello, my name is \(firstName) \(lastName)")
  }
}
```

## Type Safety & Type Inference

- Swift type checks all constants and variables and flags mismatched types
- Swift will infer types of values when being declared
- Type annotation: `let pi: Double = 3.14159`
- Commonly used when constants and variables could be inferred as more than one type or when making struct

## Required Values

- Must specify a type to a declared const/var or assign to a value that the compiler can infer in order for the variable to be used
