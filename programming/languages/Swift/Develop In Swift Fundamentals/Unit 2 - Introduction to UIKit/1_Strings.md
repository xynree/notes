# 2.1 - Strings

- mutable declaration: `var`
- immutable declaration: `let`
- multi-line string literals: surround with three double quotation marks: `"""`
  - can have double quotes
- Can use property `isEmpty` check if a Swift `String` is empty
- Individual characters are type `Character` but will be inferred as string unless directly specified with a type annotation

## Concatenation and Interpolation

- Concatenation: Use `+` for concatenation or `+=` to modify the string
- Interpolation: You can use variables in strings by wrapping them in `\(var)`

## String Equality and Comparison

- Strings are case sensitive. You can check for equality with `==`
- String functions:
  - lowercased()
  - uppercased()
  - hasPrefix()
  - hasSuffix()
  - contains()
  - count()
- Switch statements can also be used to pattern match multiple values of characters

## Unicode

- Unicode encompasses > 100k different characters
- Characters that take up multiple bytes such as emojis are still treated as single charact4ers with a length of 1
