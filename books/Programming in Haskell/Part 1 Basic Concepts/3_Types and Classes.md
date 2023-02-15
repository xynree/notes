# 3 - Types and Classes

## 3.1 Basic Concepts

- A type is a collection of related values
- Ex: Bool (False, True)
- The notation v::T means that v is a value in the type T, and v has type T
  - ex: False :: Bool
  - True :: Bool
- Every expression has a type, which is calculated prior to evaluation by a process called `type inference`
- Haskell programs are type safe
- use `:type` before a statement to get the type of the statement

## 3.2 Basic Types

- Bool: logical values
- Char: siingle characters
- String
- Int: fixed-precision ints
- Integer: arbitrary precision integers
- Float: single-precision floating point nums

## 3.3 List Types

- A sequence of elements of the same type

## 3.4 Tuple types

- Finite sequence of components of possibly different types
- Number of components in a tuple is called its arity
- Type of a tuple conveys its arity

## 3.5 Function types

- A mapping from arguments of one type to results of another type
- To write the type notation, we write T1->T2 for fns that map args of T1 to results of T2
  - not :: Bool -> Bool

## 3.6 Curried Functions

- Functions are free to return functions as results
- Functions that take multiple arguemnts one at aa time are curried functions
- More flexible than functions on tuples as they can take advantage of partial application
- Most std library functions in Haskell are defined in curry form

## 3.7 Polymorphic Types

- functions that can take arguments of many different types

## 3.8 Overloaded Types

- When a function employs 1+ class constraints

## 3.9 Basic Classes

- Classes support methods
- Ex: Eq: equality types support `==` and `/=`
- Ord: Ordered Types can be compared with < =  > >= min max
- Show: Showable types contain types whose values can be converted into strings of characters
- Read: Readable types contain types whose values can be converted from strings of characters
- Num
- Integral
- Fractional
