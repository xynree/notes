# 3 - Variables and Statements

## Variables

- Human readable name referring to data in memory
- Memory = big array of bytes
- Data is stored in this
- Each byte of memory can be referred to by its index
- Index in memory called `address`,`location`, `pointer`
- Variable is a name for some data that is stored in memory at some address

### Variable Names

- any characters in range 0-9, A-Z, a-z, underscore for variable names
  - no starting with 0-9
  - no starting with 2 underscores
  - no starting with underscore and capital A-Z

### Variable Types

- int, float, char, sar*
- Before using variables, need to declare and tell C what type the variable holds
  - int i= 2;
  - float f = 3.14;

### Boolean types

- in C, `0` = false, `non-zero` = true
- declare bools as `int s`
- `#include <stdbool.h>` will give you `true` and `flase` values

## Operators and Expressions

- Arithmetic - addition and assignment, subtraction, multiplication, division, modulo
- No exponentation, use `pow` from `math.h`
  
- Ternary Operators: `y += x > 0? 7:37`
  
- Pre and post increment and decrement:
  - i++, i--
  - ++i, --i
- Pre increment/decrement: value is changed BEFORE expression is evaluated
- Post increment/decrement: value is computed as is, then incremented/decremented after value has been determined
- Gives way to use value in a variable and also increment or decrement that value before or after it is used

-compute 5+i, then increment i

```c
i = 0
j = 5 + ++i;
```

- prints j = 5

- increment i, then compute 5 + i

```c
i = 0
j= 5 + ++i;
```

- prints j = 6

- Comma Operator

  ```c
  x=10,y=20
  ```

- With comma operator, value of comma expression is the value of the rightmost expression
- Used in `for` loops to do multiple things in each section of the statment

- Conditional Operators
- `a==b, a!=b, a<b, a>b, a<=b, a>=b`

- Boolean Operators
- Can chain or alter conditionals with booleans
- same as JS

- `sizeof` operator
- Tells you the size in bytes a particular variable or type uses in memory
- Type returned from `sizeof`: `size_t` : unsigned int type that holds size in bytes of anything u can give to `sizeof`

## Flow Control

- `if`, `for`, `while`, `do-while`

```c

if () {
  ...
}

if ()
  ...
else {
  ...
}

while () {
  ...
}

do {
  ...
} while ...
```
