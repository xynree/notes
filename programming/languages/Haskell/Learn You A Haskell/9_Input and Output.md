# 9 - Input and Output

- Functional programming is more about defining what stuff is
- Functions can't change state, only give back results
- Haskell separates functions that hasve side effects

## Hello, world

- `putStrLn` takes a string and returns an `IO action` with a result type of `()`
- When will IO Action be performed?
  - When we give the name and run program
- We can use `do` syntax to glue together several IO acitons into one

```hs
main = do
  putStrLn "Hello, what's your name?"
  name <- getLine
  putStrLn ("Hey " ++ name ++ ", you rock!")
```

- `main` always has a type signature of `main :: IO something` where something is a concrete type
- By convention we don't specify types for main
- `<-` construct is used to bridge pure and impure actions
- IO actions will only be performed when they are given a name or when they're inside a do block that eventually falls within main
- IO works directly in GHCI

```hs
main = do  
    line <- getLine  
    if null line  
        then return ()  
        else do  
            putStrLn $ reverseWords line  
            main  
  
reverseWords :: String -> String  
reverseWords = unwords . map reverse . words  
```

- `return` in Haskell is not like other languages
- In Haskell, makes an I/O action out of a pure action
- In the above case, `retun ()` wraps () in an IO in the case where user inputs nothing

## Useful I/O functions

- `putStr, put Char, print, getChar, when, sequence, mapM, mapM_, forever, forM`

## Files and streams

- `getContents`: I/O action that reads everything from std input until it encounters an end-of-file character
- its type is `getContents :: IO String`
  - lazy I/O: reads contents bit at a time
- Useful when piping output from one program into the input of our program

```hs
import Data.Char  
  
main = do  
    contents <- getContents  
    putStr (map toUpper contents)  
```

- run `getContents` to produce `contents`: then map `toUpper` over that and print to the terminal
- `interact`: takes a functino of type `String -> String` as a param and returns an I/O action that will take input, run function and then print out function's result
- can be used to make programs that are piped content and dump a result out
