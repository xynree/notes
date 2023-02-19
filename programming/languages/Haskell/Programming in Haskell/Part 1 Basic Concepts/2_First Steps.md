# 2 - First Steps

- Haskell exponents are higher prority than addition and subtraction
- Standard library is called prelude
- Commonly used:
  - head (select first element of non-empty list)
  - tail (remove first element from a non-empty list)
  - !! num (select num elem of a list)
  - take n (select first n of a list)
  - drop n (remove first n elements of a list)
  - length, sum, produce, ++, reverse
- Function application has higher priority than all other operators
- Functions are required to begin with a lower case letter, but can then be followed by zero or more letters, digits, underscores, and even single quote '
- The layout rule: In a function, every definition at the same level must begin in the same column

a = b + c
    where
      b = 1
      c = 2
d = a * 2

- grouping can be explicit by enclosing in curly brackets {} and semicolon; but generally default to using the default rule
- Avoid using tabs when indenting definitions
- Comments:
  - Ordinary comments: ---
  - Nested comments {-    -}
