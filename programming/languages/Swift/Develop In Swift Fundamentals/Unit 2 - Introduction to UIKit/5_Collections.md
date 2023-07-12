# 2.5 - Collections

- 2 Collection Types: Arrays & Dictionaries

## Arrays

- Arrays store an ordered list of same-typed values
- You can either declare or infer the type
- Declaring a typed array: `var names: [String] = ["Anne", "Gary", "Keith"]`
- Type inferred: `var names = ["Anne, Gary, Keith"]`

## Array Types

- You can declare the type of an array using type annotation, collection type annotation, or an array initializer
- Traditional type annotation: `var myArray: [Int] = []`
- Collection type annotation: `var myArray: Array<Int> = []`
- You can also use () to initialize an empty array of typed objects: `var myArray = [Int]()`

## Working with Arrays

- Repeating array initializer: `var myArray = [Int](repeating: 0, count: 100)`
- To check length of array: `myArray.count`
- To check if empty: `myArray.isEmpty`
- You can append with `+=`
- Insert nuumbers at a specific index with `insert(_:, at:)`: `names.insert("Bob", at:0)`
- Remove methods: `remove`, `removeLast`, `removeAll`
- You can also add two arrays together with `+`

## Dictionaries

- Dictionaries are a list of keys with an associated valu (JS object)
- Type is represented as: `[A:B]` or `Dictionary<A, B>`
- To create an empty dictionary:

```swift
var myDictionary = [String:Int]()
var myDictionary = Dictionary<String, Int>()
var myDictionary: [String: Int] = [:]
```

## Add/Remove/Modify A Dictionary

- You can use `updateValue(_: forKey:)` to update the dictionary. The method will return the old value. If there is none `oldValue` will be `nil`
- `If let` syntax: Run code block *only if* a value is returned from the method

`if let oldValue = scores.updateValue(100, forKey:...){...}`

- To remove an item from dictionary, you can use subscript to set value to `nil`
- There is also a `removeValue(forKey:)` method to get the old value

## Accessing A dictionary

- Methods: `.keys, .values` returns a list of all keys and values. Must be converted to Arrays to be used.
- `let players = Array(scores.keys)`
- To look up a particular value within a dictionary, use if-let syntax
- If key is in the dict, the result will be the value

```swift
if let lukesScore = scores["luke"]{
  print(lukesScore)
}
```
