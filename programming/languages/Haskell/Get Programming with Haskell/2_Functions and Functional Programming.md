# 2 - Functions and Functional Programming

- This chapter will go over how to
  - Understand functional programming ideas and benefits
  - Define simple functions in haskell
  - Define variables in haskell

## 2.1 Functions

- In haskell functions work exactly as they do in mathematics

![picture 1](https://s2.loli.net/2023/02/12/ksWMKwLY1ORfvin.png)  

- `simple` takes a single argument x and then returns x untouched
- all Haskell functions must return a value, so this does not need to be explicit

- All functions in Haskell follow 3 rules that force them to behave like math functions
  - All functions must take an argument
  - All functions must return a value
  - A function will always return the same value if called with the same argument (referential transparency)

## 2.2 Functional Programming

- Alonzo Church `lambda calculus`: everything is represented as functions
- Allows for an universal model of computation, equivalent to a turing machine
- Nonmathematical nature of most programming languages means abstractions are limited by the language
- Functional programming aims to combine the power of programming and math in a useable way

## 2.3 The Value of Functional Programming in Practice

- Haskell is a safe programming language: forces programs to behave as expected
- Hidden state: functions that access outside variables or don't return a value
  - Creates side effects in code
- Safe functions leads to code that's easier to predict

- haskell `where`: prevent rerunning code again

```hs
calcChange owed given = if change > 0 
                        then change
                        else 0
  where change = given - owed
```

- In ghci you're allowed to reassign vareiables (but not in ghc)

## Summary

- Functional programming puts restrictions on function behavior
  - All functions must taken an argument and must always return a value
  - Calling the same function with the same function must always return the same result
- The benefit of this is that programs are easier to reason about
