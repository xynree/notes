# 2.4 - Classes, Inheritance

- Classes are similar to structures. Both can define props to store values, define methods for functionality, and define initializers to set up intial state. Syntax fro doing these things is almost always identical.

```swift
class Person {
  let name: String
  init(name: String) {
    self.name = name
  }
}
```

- How are classes different from structures?

## Inheritance

- Classes can have hierarchical relationships
- Any class can have parent and child classes
- Parent class: superclass, Child class: subclass

### Defining a Base Class

- Base classes don't inherit from a superclass

```swift
class Vehicle {
  var speed = 0.0
  var description: String {
    "lksfdjlk"
  }
  func makeNoise() {
    //
  }
}
let someVehicle = Vehicle()
```

### Create a Subclass

- Syntax: `class SomeSubclass: SomeSuperClass { //}`

```swift
class Bicycle: Vehicle {
  var hasBasket = false
}
```

- Subclasses automatically interit all props and methods of their parents

### Override Methods and Properties

- Each subclass can provide its own implementation of a prop or method using the `override` keyword

```swift
class Train: Vehicle {
  override func makeNoise() {
    //
  }
}
```

- To access the superclass you must use the `super.___` syntax

### Override Initializer

- You can override the parent properties within the initializer

```swift
class Student: Person {
  var favoriteSubject: String

  init(name: String, favoriteSubject: String) {
    self.favrotieSubject = favoriteSubject
    super.init(name: name)
  }
}
```

## References

- Classes can reference values assigned to a constant or variable
- When classes are assigned to multiple variables, they will be pointed to the same address in memory

```swift
var jack = Person(name: "Jack", age: 24)
var friend = jack

jack.age +=1

jack.age == myFriend.age
```

- This is different than a structure -- structures are copied by value, not by reference

## Memberwise Initializers

- Swift does not create memberwise initalizers for classes

## Class or Structure?

- Start new types as structrues until you need one of the features that classes provide
- Start with a class when you're working with a framework that uses classes or you want to refer to the same instance in multiiple places

### Working with Frameworks that use Classes

- You'll often pass around class instances when working with frameworks
- In these cases, always choose a class over a structure
