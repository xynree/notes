# 5 - Recursion

## Hello Recursion

- Recursion is a way of defining functions in which the function is applied inside its own definition
- Edge Condition: having an element or two in a recursion defined non-recursively (like F(0) and F(1))
- Unlike imperative languages, you make computations by declaring WHAT something is instead of HOW to get it

## Maximum Awesome

- the `maximum` function takes things that can be ordered and returns biggist
- How would we define this recursively?

```haskell
max' :: (Ord a) => [a] -> a
max' [] = error "maximum of empty list"
max' [x] = x
max' (x:xs)
  | x > max' xs = x
  | otherwise = max' xs
```

## A Few More Recursive Functions

- `replicate`: Takes an `Int` and some element and returns a list with several repitions of the same element
  - ex: `replicate 3 5` = `[5,5,5]`

```haskell
rep' :: (Num i, Ord i) => i -> a -> [a]
rep' n x
  | n <= 0 = []
  | otherwise = x:rep' (n-1) x
```

- If n is <- 0, return empty list, otherwise return a list with x as first element and x replicated n-1 times as the tail

## Thinking Recursively

- Usually, define an edge case and then define a function that does something between some elemeent and the function applied to the rest
- head and tail
- Edge case: some scenari owhere recursive application doesn't make sense
- When thinking of a recursive solution, think of when the solution doesn't apply for the edge case.
- Then think about identities and whether you'll break apart parameters into a function with head vs tail
- Then figure out where to use the recursive call.
