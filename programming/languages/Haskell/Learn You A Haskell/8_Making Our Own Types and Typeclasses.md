# 8 - Making Our Own Types and Typeclasses

- We can use the `data` keyword to define a type: `data Bool = False | True`
- part before = : denotes the type
- parts after = : value constructors: specify different values the type can have
- `data Shape = Circle Float Float Float | Rectangle Float Float Float Float`
  - Circle constructor has 3 fields which take floats, Rectangle has 4 floats
  - When defining a constructor, we can optionally add types after it to define what values it will contain
  - Constructors are actually functions that return a value of a data type

```haskell
surface :: Shape -> Float  
surface (Circle _ _ r) = pi * r ^ 2  
surface (Rectangle x1 y1 x2 y2) = (abs $ x2 - x1) * (abs $ y2 - y1)  
```

- Function takes a shape and returns a float
- We can pattern match against constructors to execute different functions depending on type member

- `data Shape = Circle Float Float Float | Rectangle Float Float Float Float deriving (Show)`
- We can add `deriving (Show)` to enable printing
- We can map using value constructors and partially apply arguments with them

- Let's make an intermediate data type:
  
```haskell
data Point = Point Float Float deriving (Show)  
data Shape = Circle Point Float | Rectangle Point Point deriving (Show)  

surface :: Shape -> Float  
surface (Circle _ r) = pi * r ^ 2  
surface (Rectangle (Point x1 y1) (Point x2 y2)) = (abs $ x2 - x1) * (abs $ y2 - y1)  
```

- To export the functions and types defined:

```haskell
module Shapes  
( Point(..)  
, Shape(..)  
, surface  
, nudge  
, baseCircle  
, baseRect  
) where  
```

## Record Syntax

- Create a data type that describes a person: First name, last name, age hieght phone number, ice cream flavor
- `data Person = Person String String Int Float String String deriving (Show)`
- There's an alternate way to get named data types with record syntax:

```haskell
data Person = Person { firstName :: String  
                     , lastName :: String  
                     , age :: Int  
                     , height :: Float  
                     , phoneNumber :: String  
                     , flavor :: String  
                     } deriving (Show)  
```

- If we use record syntax, we don't have to specify fields in proper order
- Use record syntax when a constructor has several fields and it's not obvious which is which

## Type Parameters

- Value constructors can take some parameters and produce a new value
- `data Maybe a = Nothin | Just a`
- Maybe represents an option of either having nothing or having one of something
- Another parameterized type: `Map k v` will map from one type to another as long as the type is part of the Ord typeclass
- Haskell convention: Never add typeclass constraints in data declarations
  - You'll have to put them into function type declarations anyway

## Derived Instances

- Type can be made an instance of typeclass if it supports some behavior
- Typeclasses are less like classes and more like interfaces
- Haskell can use `deriving` kyeword to make a type an instance of any of these typeclasses: `Eq, Ord, Enum, Bounded, Show, Read`
- data Person = Person { firstName :: String, lastName :: String, age :: Int} deriving (Eq)
  - Eq derivation allows us to compare two instances of a Person type now
- Show/Read are for things that can be converted to or from strings
  - Show: Convert values of our type to a string
  - Read: Convert strings to values of our type

## Type Synonyms

- Type keyword uses type snonyms: `type String = [Char]`
- Aliases types to different types: `type Phonebook = [(String,String)]`
- Can also be parameterized

## Recursive Data Structures

- We can make types whose constructors have fields that are the same type
- `data List a = Empty | Cons a (List a)`

## Typeclasses 102

- Typeclasses are like interface
- Defines some behavior and then types that can behave that way are made instances of that typeclass
- Once we have a typeclass we can make type instances of the class to get functionality with pattern matching

### The Functor Typeclass

- For things that can be mapped over
implementation:

```hs
class Functor f where
  fmap :: (a -> b) -> f a -> f b
```

- Defines one function `fmap` that takes a function from one type to another and a functor applied with one type, returning a functor applied with another type
