# 5 Pointers -- Cower in Fear

- References: Variable refers to an object of some type
- Same thing with C.. just we have to be more explicit.

## 5.1 Memory and Variables

- Each byte of memory is identified by an integer
- The number that represents each box (a byte of data) is called its `address`
- Amount of space depends on type: `int` = four bytes
  - `sizeof` operator to determine how many bytes of memory it uses
- Pointer = address of data
  - Pointer variables hold address of data
- Pointer is analogous to address of a house
- We can follow pointer to access data
- Operator used to find address of int: `address-of` operator: `&`

## 5.2 Pointer Types

- Identify pointer types with * before variable name and after its type:
- `int *p //pointer to an int`
  - Variable that is a pointer type and points to other `int` types

```c
int i;
int *p;  // p is a pointer, but is uninitialized and points to garbage

p = &i;  // p is assigned the address of i--p now "points to" i
```

## 5.3 Dereferencing

- Pointers are referring to another variable by pointing to them
- When you have a pointer, you can use variable by `dereferencing` the pointer
  - Like looking at an address and then going to the house
- Dereference operator - `Indirection operator` `*`
  - Not the same as pointer declaration

```c
#include <stdio.h>

int main(void)
{
    int i;
    int *p;  // this is NOT a dereference--this is a type "int*"

    p = &i;  // p now points to i, p holds address of i

    i = 10;  // i is now 10
    *p = 20; // the thing p points to (namely i!) is now 20!!

    printf("i is %d\n", i);   // prints "20"
    printf("i is %d\n", *p);  // "20"! dereference-p is the same as i!
}
```

- `*` operator tells computer to use the object the pointer points to instead of pointer itself

## 5.4 Passing Pointers as Arguments

- Copy of pointer gets passed in as parameter
- We can set pointer to point at a variable and then function can dereference it to get back to the original variable
- Dereferencing pointer and changing it allows you to modify variable ina different scope

## 5.5 The `NULL` Pointer

- Indicating pointer doesn't ponit to anything
- Dereferencing it is undefined
- Good general indicator that pointer wasn't initialized

```c
int *p = NULL;

*p = 12;  // CRASH or SOMETHING PROBABLY BAD. BEST AVOIDED.
```

## 5.6 a Note on Declaring Pointers

- How to declare multi variables including pointers in one line?

```c
int a, *p; // Works
int *p, q;  // p is a pointer to an int; q is just an int.
int* p, q;  // p is a pointer to an int; q is just an int.
```

## 5.7 `sizeof` and Pointers

- `sizeof` operates on type of the expression
  
```c
int *p;

sizeof(int); // Returns size of an `int`
sizeof p     // p is type int*, so returns size of `int*`
sizeof *p    // *p is type int, so returns size of `int`
```
