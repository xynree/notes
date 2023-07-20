# 3.2 - Type Casting and Inspection

## Type Casting

- To access a subclass you can use a downcast operater: `as?`
- "Conditional cast": CCasts the instance to a specified type if it is possible
- `if let dog = pet as? Dog {..}`
- There's a forced form of the type cast operator: `as!`. But if forced to an incorrect type it will crash.
  - Use when you know a type: `let alansDog = fetchPet() as! Dog`

## Any

- `Any` is an instance of any type, `AnyObject`: Instance of any class but not a struct
