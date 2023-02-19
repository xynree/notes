# 4 - Functions

- Accept args and returns values
- Arguments and return types are predeclared

```c

#include <stdio.h>

int plus_one(int n) // definition , int before plus_one indicates return type
{
  return n+1;
}
```

- Arguments are copied into parameter
- `void` is used to indicate function accepts no args
- can also be used to indicate no return value

```c
void hello(void)
{
  printf("Hello,world!\n");
}
```

## Passing by value

- if argument is a varaible, copy of value of that variable gets made and stored in the parameter
- Functions always operate on local copies

## Function prototypes

```c

int foo(void);

int main(void)
{
  int i;

  // can call foo() because prototype was already declared
}

int foo(void)
{
  return 333
}
```

## Empty Parameter Lists

- With prototypes, definitely use `void` when there is empty parameter list
- Leaving `void` out of prototype indicates to compiler that there is no additional info about parameters to the function
