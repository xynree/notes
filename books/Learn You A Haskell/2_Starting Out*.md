# 2 - Starting Out

## Ready, set, go[^1]

- Basic arithmetic: When negating numbers, surround with parantheses
- Boolean algebra: && `and`, || `or`. gives `True` or `False`
- Haskell will not run `5 + "llama"`: ghci will tell us those types don't match
- All basic operatioins are functions: `*` is a function that multiplies two numbers
- We can call with infix notation.
- Most functions use prefix notation
  - function name, a space, and then parameters separated by spaces
  - `succ 8` : takes something that has a successor and returns the successor
  - Multiple args: `min 9 10` returns min of arguments. `max 9 10` returns max of arguments
- Function application has the highest precedence
- Functions with two parameters can also be called with infix notation by surrounding with backticks
  - `div 92 10` is equivalent to 92 `div` 10

## Baby's First Functions[^2]

- Functions are defined in a similar way to how they're called, but when defining there's a `=` and function body
- `doubleMe x = x + x`
- `doubleUs x y = doubleMe x + doubleMe y`
- Common Haskell pattern: Making basic functions and combining them into more complex functions
- Functions don't have to be in any particular order, so it doesn't matter what is defined first

```haskell
doubleSmNum x = if x > 100
                  then x
                  else x*2
```

- Haskell's if statement: else is mandatory. Every expression and function must return something
- If statement is an expression, will always return something

- We can use `'` in function names in haskell
- Functions can't begin with uppercase letters
- When a function doesn't take any parameters, it's a `definition`, or a `name`
- Definitions/names are immutable.

## An Intro to Lists

## Review

[^1]: Create a function that takes two arguments. Call it both with infix and prefix notation.
[^2]: Define a function that uses an if expression. What is one limitation of the function naming syntax?
