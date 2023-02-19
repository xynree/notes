# 15 Types III: Conversions

## 15.1 String Conversions

- Must call functions to convert types

### 15.1.1 Numeric Value to String

- use either `sprintf()` or `snprintf()` - Work like `printf()` but output to a string instead

```c

#include <stdio.h>

int main(void)
{
  char s[10];
  float f = 3.14159;

  // Convert f to a string stored in 's', writing at most 10 chars including NUL

  snprintf(s, 10, "%f", f);

  printf("String value: %s\n", s)
}
```

### 15.1.2 String to Numeric

- "Families" of functions that do this... `atoi` (ascii to int) and `strtol` (str to long)

```c:string_to_float

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  char *pi = "3.14159";
  float f;

  f=atof(pi);

  printf("%f\n", f);
}
```

- we can also convert nums of different bases
- NUL helps with finding error in processing of string

`unsigned long int x = strtoul(s, &badchar, 10);` - &badchar points to NUL at end of string or the character that caused error

- strtol() gives error handling control

## 15.2 `char` Conversions

```c
char c = '6';

int x = c;  // x has value 54, the code point for '6'

int y = c - '0'; // y has value 6, just like we want
```

- We can subtract '0' from any digit character to get its numeric value

## 15.3 Numeric Conversions

- 0 converted to bool is 0, any other number is one
- If int is converted and doesn't fit, number wraps around
- If floating point converted to int, fractional part discarded
- If can't be represented = undefined behavior

## 15.4 Implicit Conversions

- Integer Promotions
  - if `int` can be used to rep a value from `char` or `short`, value is priomoted to `int`

```c
char x = 10, y = 20;
int i = x + y;
```

- Some automatic conversions: If one value in expression is a float, other thing becomes float
- If both types are int, perform int promotions, than make operand twice as big

- `void*` can be converted from or to any pointer type

```c
int x = 10;

void *p = &x;  // &x is type int*, but we store it in a void*

int *q = p;    // p is void*, but we store it in an int*
```

## 15.5 Explicit Conversions

- Can explicitly cast types:

```c
int x = 10;
long int y = (long int)x + 12;
```

- Used commonly to avoid warning when printing pointer values
`printf("%p\n", (void *)p);`

- Casting rarely needed in practice
