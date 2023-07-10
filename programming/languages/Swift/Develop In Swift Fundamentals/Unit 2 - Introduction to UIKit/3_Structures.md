# 3 - Structures

- A structure combines 1+ variables into a single type
- Properties = information about an instance of the structure
- Syntax:

```swift
struct Person {
  var name: String
  func sayHello() {
    ...
  }
}

let person = Person(name: "Jasmine")
person.sayHello()
```

- You can access data in a struct's props with dot syntax
- Add functionality to a struct by adding a method
- You can call the instance using dot syntax

## Instances

- To use a new struct, you must initialize an instance of it
- Each instance inherits all the props and features of the structure

## Initializers

- Instances created from the default initializer have a default value
  - String default: `""`
  - Int default: `0`
  - Bool default: `false`
- A constructor. Default initializer is `init()` but shorthand: `Bool()`.
- Swift requres to set values for all instance properties in initialization.
- You can provide a default property in the type definition. All new instances will be created with the default value

```swift
struct O {
  var count: Int = 0
}
let o = O()
```

### Memberwise Initializers

- `let o= O(count: 222)`
- Use this when there are not defaults

### Custom Initializers

- If you define the `init` function on the struct, you can make a custom constructor

```swift
struct Temp {
  let c = Double
  init(c: Double) {
    self.c = c
  }
  init(f: Double){
    celsius = fahrenheit - 32 / 1.8
  }
}
```

- You can add multiple custom initializers that take different arguments

## Mutating Methods

- If you are updating property values in a struct within an instance, use the keyword `mutating`

```swift
struct O {
  var count: Int = 0

  mutating func increment() {
    count += 1
  }

  mutating func increment(by amount: Int {
    count += amount
  })
}
```

## Computed Properties

- You can create properties that can compute their value based on other instance properties or logic
- Declare the property as a variable (because its value can change), then use braces to define the logic that calculates the value to return

```swift
struct Temp {
  var celsius: Double

  var fahrenheit: Double {
    celsius * 1.8 + 32
  }
  
  var kelvin: Double {
    celsius + 273.15
  }
}
```

## Property Observers

- Swift allows you to observe any property and respond to changes in the prop values
- These observers are called each time a property's value is set
- Any given property can set two observers: `willSet` and `didSet`
- You can access `newValue` and `oldValue` in these observers

```swift

struct StepCounter {
  var totalSteps: Int = 0 {
    willSet {
      print("About to set totalSteps to \(newValue)")
    }
    didSet {
      if totalSteps > oldValue {
        ...
      }
    }
  }
```

## Type Properties and Methods

- You can add `static` properties that can be called on the type itself
- Useful when the property is related to the type but not a characteristic of an instance itself

```swift
struct Temperature {
  static var boilingPoint = 100
}
```

## Copying

- If structures are assigned into a variable or passed intoa function, the values are copied and considered separate instances

## Self

- the same as `this`: Current instance of the type
- Swift compiler can recognize this and so `self` is optional
- Using `self` is required for initializers that have parameter names that match prop names (shadowing)

```swift
struct Temperature {
  var celsius: Double
 
  init(celsius: Double) {
    self.celsius = celsius //Needs .self or it doesn't know which "celsius" you're talking about
  }
}

```

## Variable Properties

- Provide a convenient way to create new dat afrom old data
- When an instance of a truct is assigned to a new variable, the values are copied
- If you want to prevent the properties from ever changing, you can declare the instance using `let`
- Use `let` whenever popssible to define an instance of a structre, using `var` if the isntance needs to be mutated, and use `var` for props on the structure
