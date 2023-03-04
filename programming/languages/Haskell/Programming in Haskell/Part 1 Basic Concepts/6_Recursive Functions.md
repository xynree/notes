# 6 - Recursive Functions

## 6.1 Basic Concepts

- Many fns can naturally be defined in terms of themselves
- Base case / Recursive case

## 6.2 Recursion on Lists

```haskell
product:: Num a => [a] -> a
product [] = 1
product (n:ns) = n * product ns
```

## 6.3 Multiple Arguments

- Functions with multiple args can also be defined using recursion on 1+ argument at the same time

## 6.4 Multiple Recursion

- Function is applied more than once in its own definition

```haskell
fib :: Int -> Int
fib 0 = 0
fib 1 = 1
fib n = fib (n-2) + fib (n-1)”
```

- double recursion used to calculate the nth fibonacci number for any integer n

## 6.5 Mutual Recursion

- 2+ functions are defined recursively in terms of each other

```haskell
even:: Int -> Bool
even 0 = True
even n = odd (n-1)
odd :: Int -> Bool
odd 0 = False
odd n = even (n-1)”
```

## 6.6 Advice on Recursion

- Step 1: Define the type
- Step 2: Enumerate the cases
- Step 3: Define the simple cases
- Step 4: Define the other cases
- STep 5: Generatize and simplify
