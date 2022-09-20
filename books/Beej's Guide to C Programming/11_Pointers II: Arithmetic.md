# 11 - Pointers II: Arithmetic

## 11.1 Pointer Arithmetic

- You can do math on pointers:
  - If you have a pointer to a type, adding one to the pointer moves the next item of that type directly after it in memory
  
### 11.1.1 Adding to Pointers

```c
int a[5] = {11, 22, 33, 44, 55};

int *p = &a[0];  // Or "int *p = a;" works just as well, pointer to first elem in array

printf("&d\n, *p) // Prints 11
printf("%d\n", *(p + 1));  // Prints 22!!
```

- We can iterate over elements of an array instead of using the array notation
-

```c
int a[5] = {11, 22, 33, 44, 55};

int *p = &a[0];  // Or "int *p = a;" works just as well

for (int i = 0; i < 5; i++) {
    printf("%d\n", *(p + i));  // Same as p[i]!
}
```

### 11.1.2 Changing Pointers

- You can add or subtract int values directly to or from any pointer

```c
int a[] = {11, 22, 33, 44, 55, 999};  // Add 999 here as a sentinel

int *p = &a[0];  // p points to the 11
while (*p != 999) {       // While the thing p points to isn't 999
    printf("%d\n", *p);   // Print it
    p++;                  // Move p to point to the next int!
}
```

### 11.1.3 Subtracting Pointers

- We can subtract the same way
- We can also subtract between pointers to calculate how many ints are between two int*s. But only works within a single array.

```c
#include <stdio.h>

int my_strlen(char *s)
{
    // Start scanning from the beginning of the string
    char *p = s;

    // Scan until we find the NUL character
    while (*p != '\0')
        p++;

    // Return the difference in pointers
    return p - s;
}

int main(void)
{
    printf("%d\n", my_strlen("Hello, world!"));  // Prints "13"
}
```

## 11.2 Array/Pointer Equivalence

`a[b] == *(a+b)`

- Can be used interchangeably.
- If you have an array variable, you can use either to access elements.
- You can modify a pointer to point to a diffferent address, but not an array variable.

## 11.2.1 Array/Pointer Equivalence in Function Calls

- If a function takes a pointer arg, you can pass either an array or pointer to the function and have it work.

```c
char s[] = "Antelopes";
char *t = "Wombats";

printf("%d\n", my_strlen(s));  // Works!
printf("%d\n", my_strlen(t));  // Works, too!
```

```c
int my_strlen(char *s)    // Works!
int my_strlen(char s[])   // Works, too!
```

## 11.3 `void` Pointers

- Pointer to a thing you don't know the type of
- ex: `memcpy()`
- ex: calling a function passed to it that has an unknown type

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    int a[] = {11, 22, 33};
    int b[3];

    memcpy(b, a, 3 * sizeof(int));  // Copy 3 ints of data

    printf("%d\n", b[1]);  // 22
}
```

- Copied data and used `sizeof` to tell how many bytes to copy
- No pointer arithmetic on `void*`
- Cannot dereference a `void*`
- No arrow operator on `void*`
- No array notation on `void*`'

- You convert `void*` to another type before using
- Just assign into a variable of the desired type

```c
char a = 'X';  // A single char

void *p = &a;  // p points to the 'X'
char *q = p;   // q also points to the 'X'

printf("%c\n", *p);  // ERROR--cannot dereference void*!
printf("%c\n", *q);  // Prints "X"
```
