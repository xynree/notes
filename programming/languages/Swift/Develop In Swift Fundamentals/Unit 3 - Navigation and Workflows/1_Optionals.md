# 1 - Optionals

## Nil

- Optionals are useful in situations when a value may or may not be present
- Optionals solve the problem of not being able to pass `nil` to a typed value by providing a wrapper
- Every type has a matching optional type, which is declared with adding a `?` after the type name

```swift
struct Book {
  var name: String
  var publicationYear: Int?
}
```

## Specifying the Type of an Optional

- You can't create an optional without specifying the type

## Working with Optional Values

- IF the value is not `nil`, you can unwrap useing the `force-unwrap` operater: `!`
- `if publicationYear != nil { let actualYear = publicationYear!}`
- Skipping comparison of optional to `nil` will generate an error
- Optional binding: Unwraps optional and if contains a value, assigns the value to a constant

```swift
if let constantName = someOptional {
  constantName is safe to use within braces
}
```

## Functions and Optionals

- If you want to write a function that accepts an optional as an argument, update the type in the parameter list
  - `func printFullName(first: String, middle: String?)`
- For functions that return an optional: Update the return type
  - `func textFromURL(url: URL) -> String?`

## Failable Initializers

- Any initializer that might return `nil` is a failable initializer
- use `init?` to define a failable initializer. Tells Swift that the initializer may return nil and should return an instance of `Type?`

## Optional Chaining / Nested Optionals

```swift

struct Person {
  var age: Int
  var residence: Residence?
}

struct Residence {
  var address: Address?
}

struct Address {
  var building: String
  var street: String
  var apt: String?
}
```

- You can use optional chaining to nest together optionals:

```swift

if let aptNumber = person.residence?.address?.apartmentNumber {

}
```

## Implicitly Unwrapped Optionals

- Some values are `nil` just for a moment until the value is specified after initializion.
- Use `!` to specify this. These types of optionals unwrap automatically
- Should be used when you need to initialize an object without supplying a value but you know you'll be giving the object a value before other code tries to access it
