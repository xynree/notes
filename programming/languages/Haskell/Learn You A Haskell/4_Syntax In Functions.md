# 4 - Syntax in Functions

## Pattern Matching

- Specifying patterns to which some data should conform and then chhecking to see if it does and deconstructing data accordding to patterns
- Define separate function bodies for different patterns
- Can pattern match on any data type

```haskell


lucky :: (integral a) => a -> String

lucky 7 = "luck number seven!"
lucky x = "sorry you're out of luck"
```

- Patterns checked from top to bottom and when it conforms to a pattern, orresponding body is used
- Second pattern matches anything and binds to X
- We can use pattern matching to bind recursive functions

```haskell
factorial :: (Integral a) => a -> a  
factorial 0 = 1  
factorial n = n * factorial (n - 1)  
```

- Pattern matching can fail: we must make sure to include a catch-all pattern for any unexpected input
- You can also pattern match in list comprehensions

```haskell
ghci> let xs = [(1,3), (4,3), (2,4), (5,3), (5,6), (3,1)]  
ghci> [a+b | (a,b) <- xs]  
[4,7,6,8,11,4]   
```

- Lists can be used in pattern matching - can match with empty list or any pattern involving `:` and empty list
- Patterns: Way to break something up according to a pattern. Renames a pattern matching string

```haskell
capital :: String -> String  
capital "" = "Empty string, whoops!"  
capital all@(x:xs) = "The first letter of " ++ all ++ " is " ++ [x]  
```

## Guards, guards

- Guards are a way of dtesting whether some property of a value are true or false
- Indicated by pipes following a function's name and parameters
- Boolean epression - if evaluates to True, function body is use
- If false, checking moves to next guard
- Last guard is often `otherwise`, which is defined as `otherwise=True`

```haskell
densityTell :: (RealFloat a) => a -> a -> String  
densityTell mass volume  
    | mass / volume < 1.2 = "Wow! You're going for a ride in the sky!"  
    | mass / volume <= 1000.0 = "Have fun swimming, but watch out for sharks!"  
    | otherwise   = "If it's sink or swim, you're going to sink."  
```

- Note, there's no `=` after function and parameters with guards

## Where?

- We can put keyword `where` after guards to define several names or functions
- Variables defined by "where" are only visible to that function. These names should all be aligned to the same column

```haskell
initials :: String -> String -> String  
initials firstname lastname = [f] ++ ". " ++ [l] ++ "."  
    where (f:_) = firstname  
          (l:_) = lastname  
```

## Let it Be

- Let bindings let you bind to variables anywhere and are expressions themselves
- Don't span across guards, unlike `where` bindings
- Syntax is `let <binding> in <expression`

```haskell
cylinder :: (RealFloat a) => a -> a -> a  
cylinder r h = 
    let sideArea = 2 * pi * r * h  
        topArea = pi * r ^2  
    in  sideArea + 2 * topArea  
```

- let bindings are expressions in themselves
- can be used to introduce functions in a local scope
- Can also be used inside list comprehensions

```haskell
ghci> (let (a,b,c) = (1,2,3) in a+b+c) * 100  
600  
```

## Case expressions

- Case expressions are expressions, like if else expressions and let bindings
- We can also do partttern matching

```haskell
case expression of pattern -> result  
                   pattern -> result  
                   pattern -> result  
                   ...  
```

- Case expressions can be used anywhere, not only when defining functions
- Can be useful to pattern match in the middle of an expression

```haskell
describeList :: [a] -> String  
describeList xs = "The list is " ++ case xs of [] -> "empty."  
                                               [x] -> "a singleton list."  
                                               xs -> "a longer list." 
```
