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

- Lists are homogenous data structres: store several elements of a same type
- Syntax: square brackets with commas: [1,2,3,4,5]
- Concatting two lists: `++`
- For adding something on the left side of a list, use cons `:`
  - 0:[1,2,3,4,5] // [0,1,2,3,4,5]
- To get something out of a list use `!!` with the index
  - [1,2,3] !! 1  // 2
- Lists can be compared: they are compared in lexographical order
- Basic list functions:
  - head: takes list and returns head
  - tail: takes list and returns tail
  - last: returns last elem
  - init: returns everything except last
  - length
  - null: checks if empty
  - reverse
  - take: extract # of elements from list
  - drop: drops # elem from list
  - maximum: takes a list of stuff that can be put in order and returns biggest
  - minimum
  - sum
  - product
  - elem: takes something and tells us if that thing is elem of list
    - usually infix: 4 `elem` [3.4.5.6] // True

## Texas Ranges

- use syntax [1..20] to make ranges
- don't use with floating point numbers
- can make infinite lists by not specifying an upper limit
  - functions that produce infinite lists:
    - cycle (repeats list infinitely)
    - repeat (repeats one element into a list infinitely)

## I'm a List Comprehension

- set comprehension: used for building more specific sets out of general sets
- list comprehensions are similar to set comprehensions

```haskell
[x*2 | x <- [1..6], x*2 >= 12]
[12]
```

- We can add a predicate statement to add filtering after the passed list
- We can add several predicates and several lists to make looped comprehensions

## Tuples[^3]

- Tuples are like lists: ways to store several values into a single value
- In a list, must be paired with same types: [(A,B), (A,B), (A,B)]
- functions on tuples:
  - fst: takes a pair and returns first
  - snd: takes a pair and returns second
  - zip: takes two lists and zips them together into one list of tuples

## Review

[^1]: Create a function that takes two arguments. Call it both with infix and prefix notation.
[^2]: Define a function that uses an if expression. What is one limitation of the function naming syntax?
[^3]: Using tuples and list comprehensions, find all the right triangels that have integers for all sides equal to or smaller than ten that have a perimeter less than 24.
