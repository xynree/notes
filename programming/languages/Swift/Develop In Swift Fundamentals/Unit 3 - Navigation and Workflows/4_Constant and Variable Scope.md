# 3.4 - Constant and Variable Scope

- Two levels of scope: global and local
- Any constant/variable defined in braces is defined in local scope, otherwise is in global scope

## Variable Shadowing

- Reinstating variables with the same name in a smaller scope
- Can be useful in some situations:

```swift
var name: String? = "Brady"
if let name = name {
  // name is a local String that shadows the global string of the same name
}
```

- Can also use it simplify naming unwrapped optionals from an `if let` or `guard` statement

## Shadowing and Initializers

```swift

init(name: String, age: Int {
  self.anme = name
  self.age = age
})

```
