# 6 - Higher Order Functions

- Functions can take functions as params and return functions as return values - "higher order function"

## Curried functions

- All builtin functions that accept several parameters are curried
- If we call a fn with too few params, we will get back a partially applied function
- Infix functions can also be partially applied by using sections
- To section an infix function, surround with parantheses and only supply a parameter on one side

`divideByTen = (/10)`

- Functions aren't instances of the `Show` typeclass so we can't get a string representation

## Some higher-orderism is in order

- Type declaration: `(a -> a) -> a -> a`
- Paranethese indicates that first parameter is a function that takes a type and returns a value of the same type

## Lambdas

- Anonymous functions
- Use syntax `\` to write the lamba, with -> and then the function body
`\xs -> length xs > 15`

## Only folds and horses

- A fold takes a binary function, a starting value (accumulator) and a list
- Binary function takes two parameters: accumulator and the first or last element and produces a new accumulator
- `foldl` : Folds the list up from the lft side
  - Binary fn applied between starting value and the head of the list
- `foldr` : Similar but accumulates from the right to left
- `foldl1` `foldr1`: don't need to be provided an explicit starting value, assume that first or last eleme of list will be the starting value
- `scanl` `canr` are like fold but report the intermediate states in a list
  - Used to mintor the progressin of a function that can be implemented as a fold

## Function application with $

- $ function has lowest precedence so elements will evaluate functions last
- helps get rid of parantheses
- Can also map function application across a list of functions

## Function Composition

- Calling one function and then calling the other with the result of the first
- Use `.` to compose functions
- right associative
- The expression f (g (z x)) is equivalent to (f . g . z) x.
- Usefull for defining functions in a pointfree style
