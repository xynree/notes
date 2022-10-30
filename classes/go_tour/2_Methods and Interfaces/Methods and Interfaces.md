# Methods and Interfaces

## Methods

- Go does not have classes, but you can define methods on types
- Method is a func with a "receiver" argument
- Appears in arg list between `func` keyword and method name
- You could also just write the function regularly with no change in functionality
- Methods can be declared on non-struct types
  - Can only declare a method with a receiver whose type is defined in the same package
