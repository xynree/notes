# 1 - Introduction

## 1.1 - Functions

- A Function is a mapping that takes 1+ arguments and produces a single result, and is defined using an equation giving a name for the function, a name for arguments, and a body that specifies how the result is to be calculated
- When function is applied, result will often be an expression containing other function applications

## 1.2 - Functional Programming

- A style of programming in which basic method of computation is application of functions to argument
- In a for loop, basic method of computation: changing stored values. This as the basic method of computation is the norm for imperative languages.[^1]
  - Imperative instructions specify precisely how computation should proceed
- In function languages, the basic method of computation is applying functions to arguments
- Many imperative languages suppoort programmiing with functions but do not encourage programming in the functional style

## 1.3 - Features of Haskell [^2]

- Concise Programs: Haskell is a high-level language designed with a conscise syntax
- Powerful Type system: Requires little type information from the programmer, but allows type errors to be automatically detected using type inferance
  - Also supports polymorphism and overloading
- List Comprehension: LC notation allows many common functions on lists to be defined in a clear manner
- Recursive functions: Many computations have natural definitions in terms of recursive functions, especially using pattern matching and guards to separate cases
- Higher-order Functions: First class functions allows common programming patterns. Can be used to define domain-specific languages
- Effectful Functions: Functions are pure. Using monads and applicatives, haskell provides a uniform way to program with side effects
- Generic Functions: Haskell type system supports functions that are generic over rich kinds of structures
- Lazy evaluation: No computation performed until its result is actually required. Ensures programs terminate whenever possible
- Equational Reasoning: Simple equational reasoning can be used to execute and reason about programs

## 1.4 - Historical Background [^3]

- 1936: Alonzo Church develops lambda calculus. Modern Times by Charlie Chaplin is released. Jesse Owens upsets Hitler at the Berlin Olympics.
- 1956 - 1959: John McCarthy develops Lisp ("first funcctional programming language"). IBM develops first hard drive.  NASA established. Alaska and Hawaii become US States
- 1966: ISWIM ("first PURE functional programming language"). Anti Vietnam protests in US. Miranda Rights established. Star Trek debuts.
- 1973: ML by Robin Milner (inroduced polymorphic types and type inference). US pulls out of Vietnam war. Roe V Wade establishes abortion rights.
- 1977: FP by John Backus (emphasized the idea of higher order functions and reasoning about programs). Star Wars opens in theaters. First Apple II computers go on sale. Roman Polanski arrested and charged.
- 1985: Miranda by David Turner. Coke introduces "New Coke". Calvin and Hobbes debuts. Nintendo releases the NES.
- 1987: Haskell development begins. The Simpsons first shown. First Final Fantasy released.
- 1990's: Philip Wadler adds type classes and monads to Haskell. Waddle waddle
- 2003: Haskell committee publishes the Haskell Report
- 2010: Revised updated Haskell report published.

## 1.5 - A Taste of Haskell

- `sum` in Haskell can be defined in two equations:

```haskell
sum [] = 0
sum (n:ns) = n + sum ns
```

- Function is defined in terms of itself and is hence recursive
- Every function has a type that specifies the nature of argument and results
- This is automically inferred from the definition of the function. Above sum is defined: `Num a => [a] -> a` (sum is a function that maps a list of numbers to a single number)
  - This allows errors in programs to be automatically detected. For each function application occurance, a check is made that the type of the arguments is compatible with the type of the function itself[^4]
- IO types: Makes explicit that function involves side effects

## Review

[^1]: What is the basic method of computation for imperative languages? How is this different for functional languages?
[^2]: Name three of the unique features of Haskell and explain their benefits.
[^3]: Name three major early functional programming laguages and one other event that occured at the same time in history.
[^4]: How does Haskell detect errors when you pass in the wrong type of an argument?
