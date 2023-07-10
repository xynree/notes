# 2 - Functions

## Defining a Function

- Function syntax:

```swift
func functionName (value: Type) -> ReturnType {
  // body
}
```

## Parameters

- Calling a function with parameters:

`makeBreakfast(food: ["cereal", "toast"])`

## Argument Labels

- You can specify a separate argument label before the parameter name
- Used when you want the name of the parameter within the function to be different from the label used to call the function

```swift
func sayHello(to person: String, and anotherPerson: String) {
  ...
}

sayHello(to: "Miles", and: "Riley")
```

- To omit the argument label, you can use `_`
  
```swift
func add(_ firstNumber: Int, to secondNumber: Int) -> Int {
    return firstNumber + secondNumber
}

add(14, to: 6)
```

## Default Parameter Values

- use `=` to specify a default parameter value in the function

```swift
func display(teamNmae: String, score: Int = 0) {
  ...
}
```

- Be careful of definin functions with default parameter values without argument labels - need to validate that every varation of the function call can be inferred
- Best practice: Leave arguments with default values at the end of the function signature and always provide an argument label

## Return Values

- Use keyword `return` to specify the return value
- After Swift 5.1, return can be omitted for functions that have a single line implementation
