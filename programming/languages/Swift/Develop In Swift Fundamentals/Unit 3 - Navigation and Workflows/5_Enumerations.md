# 3.5 Enumerations

- An `enum` is a type that allows you to represent a named set of options
- Define a common type for a group of related values
- Capitalize name of enum, lowercase the `case` options

```swift
enum CompassPoint{
  case north
  case east
  case south
  case west
}

enum CompassPoint {
  north, east, south, west
}

var compassHeading = CompassPoint.west
var compassHeading: CompassPoint = .west // abbreviation
```

## Control Flow

- You can use `if` and `switch` statements with enum cases

```swift
switch compassHeading {
  case .north:
    print(”I am heading north”)
  case .east:
    print(”I am heading east”)
  case .south:
    print(”I am heading south”)
  case .west:
    print(”I am heading west”)
}
```

## Type Safety

- Allow you to represent info in a type-safe way

```swift
enum Genre {
  case animated, action, romance, documentary, biography, 
  thriller
}
 
struct Movie {
  var name: String
  var releaseYear: Int?
  var genre: Genre
}
 
let movie = Movie(name: “Finding Dory”, releaseYear: 2016, 
genre: .animated)
```
