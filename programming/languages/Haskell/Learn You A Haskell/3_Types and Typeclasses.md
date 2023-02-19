# 3 - Types and typeclasses

## Believe the Type

- Haskell catches type errors before compiling
- using `:t` before an expression will give you the expression's type
- Functions also have types
- Some common types:
  - Int (whole numbers, bounded)
  - Integer (whole numbers, not bounded)
  - Float
  - Double
  - Bool
  - Char

## Type Variables

- type variables are equivalent to type generics
- functions that use type variables: polymorphic functions

## Typeclasses 101

- Typeclass is an interface that defines some behavior
- Examples: Eq, Ord - provides interfaces to test equality and to order members
- Some basic typeclasses:
  - Show
  - Ord
  - Eq
  - Read
  - Enum
  - Bounded
  - Num
  - Integral
  - Floating
- When trying to get back a specific member of typeclass, we can annotate types with type annotations using `::`
  - read "[1,2,3,4]" :: [Int]
- fromIntegral: useful funciton for numbers. Teakes an integral number and turns into a more general number
