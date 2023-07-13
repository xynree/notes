# 2.6 - Loops

## For Loops

```swift
for index in 1..5 {
  print("\(index)")
}
```

- `...`: Closed range operator. Runs from x up to y and includes BOTH x AND y
- `..<`: Half-open range operator: Runs from x up to y but doesn't include y
- If you don't need to use the index, substitue for _
- You can enumerate over STring types as well
- If you need the index AND its value, use `enumerated()` method of the array or string to get back a tuple of `(index, value)`
- Or you could key into the array with the index to do the same

## While Loops

```swift
while numberOfLives > 0 {
  ()
  ()
}
```

## Repeat-while loop

- Syntax executes the block once before checking the condition

```swift
repeat {
  ...
} while steps < 10
```

## Control Transfer Statements

- `break` will break code execution within the loop and move to execute code defined after the loop
