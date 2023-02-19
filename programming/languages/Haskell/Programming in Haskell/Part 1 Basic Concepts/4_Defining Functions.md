# 4 - Defining Functions

## 4.1 New from old

- A straighfoward way to define new functions is by combining one or more existing functions

## 4.2 Conditional Expressions

- Use a logical expression (if then else)
- May be nested (can contain other conditional expressions)
- Conditional expressions must always have an `else` branch

## 4.3 Guarded Equations

- Functions can also be defined using guarded equations in which a sequence of guards is used to choose between a sequence of results of the same type
- Similar to match arms in Rust
- | is read as `such that` and the guard `otherwise` is defined by `otherwise = Tru`

```haskell
abs n | n>=0       =n
      | otherwise  = -n
```

## 4.4 Pattern Matching

- sequence of syntactic expressions called `patterns` used to choose between a sequence of results of the same type
- If the first pattern is matched, chosen, otherwise if second, second is chosen, etc.
- Like a switch case in JS
- Haskell doesn't permit the sasme name to be used for more than one qrgument in a single equation

### Tuple Patterns

- Tuple of patterns is in itself a pattern which matches any tuple of the same arity who components match the patterns in order

```haskell
fst :: (a,b) -> a
fst (x,_) = x

```

### List Patterns

- A list of patterns is in itself a pattern that matches a list of the same length whose elements match the corresponding patterns in order
- Lists can be compared

```haskell
test :: [Char] -> Bool
test ['a', _,_] = True
test _ = False

head :: [a] -> a
head (x:_) = x  // select the first element of a non-empty list
```

- cons (:) operator can also be used to construct patterns, which match any non-empty list whose first and remaining elements match the corresponding patterns in order
- const must be in parantheses because function application has higher priority

## 4.5 Lambda expressions

- syntax: `\x -> x+x`
- \ represents greek letter lambda

```haskell
odds :: Int -> [Int]
odds n = map (\x -> x*2 + 1) [0..n-1]
```

## 4.6 Operator Expressions

- Functions that are written between their two arguments are called operators (+, -, %)
- Any other types of functions can be converted into an operator by enclosing the name in back quotes (7 `div` 1)
- Sections: expressions of the form (#), (x #), (# y) for arguments x and y
