# 5 - List Comprehensions

## 5.1 Basic Concepts

- Mathematics: comprehension notation
  - Used to make new sets from existing sets
- Similar concept in haskell
- Syntax:

```haskell
[x^2 | x <- [1..5]]
-- [1,4,9,16,25]
```

- | = "such that", <-  = "is drawn from"
- x <- [1..5] : generator

- List comprehensions can have 1+ generators, separated by commas
- Later generators can also depend on variables from the previous generators

```haskell
> [(x,y) | x <- [1,2,3], y <- [4,5]]
[(1,4),(1,5),(2,4),(2,5),(3,4),(3,5)]
```

- Like a nested loop in which the first generator is the outer and the rest are the inner loops
- Wldcard pattern _ is sometimes useful to descard elements from a list

```haskell
length :: [a] -> Int
length xs = sum [1 | _ <- xs]
```

## 5.2 Guards

- List comprehensions can use gaurds to filter values
- If guard is true, current values are retained, otherwise they are discarded

```haskell
factors n = [x | x <- [1..n], n ‘mod‘ x == 0]
```

## 5.3 zip function

- zip can be useful when programming with list convensions

```haskell
pairs xs = zip xs (tail xs)
sorted xs = and [x <= y | (x,y) <- pairs xs]
```

- Using zip to define a fn that returns list of all indexes at which a value occurs:

```haskell
positions :: Eq a => a -> [a] -> [Int]
positions x xs = [i | (x’,i) <- zip xs [0..], x == x’]
```

## 5.4 String comprehensions

- strings are defined as lists of Char, so list comprehensions can be used the same way on strings

## 5.5 Caesar
