# 3.3 Guard

- Use a `gaurd` statement to clear communicate condiitons must be met before proceeding
- A guard's `else` block is executed only if the expression evaluates to false
  - Opposite of an `if` statement

`guard condition else {...}`

- Used to write a function that returns early if it can't complete its task
- Can move all the conditional checks to the top of the function

## Guard with Optionals

- Can use `guard let` to bind the value within an optional to a constant that is accessible outside the braces

```swift
guard let eggs = goose.eggs else { return }
// eggs is accessible after this
print("This goose has \(eggs.count) eggs")
```

- Unwrapping optionals in one statement allows values to be available everywhere rather than only within the control flow
