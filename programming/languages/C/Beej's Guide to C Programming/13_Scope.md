# 13 - Scope

## 13.1 - Block Scope

- The scope of most variables. Includes block scope
- If you've declared a variable in a block delimited by `{ }`, scope of that variable isi n the block

```c
#include <stdio.h>

int main(void)
{
    int a = 12;         // Local to outer block, but visible in inner block

    if  (a == 12) {
        int b = 99;     // Local to inner block, not visible in outer block

        printf("%d %d\n", a, b);  // OK: "12 99"
    }

    printf("%d\n", a);  // OK, we're still in a's scope

    printf("%d\n", b);  // ILLEGAL, out of b's scope
}
```

### 13.1.1 Where to Define Variables

- Can define variables anywhere in the block,  but canniot be used before they are defined

```c
#include <stdio.h>

int main(void)
{
    int i = 0;

    printf("%d\n", i);     // OK: "0"

    //printf("%d\n", j);   // ILLEGAL--can't use j before it's defined

    int j = 5;

    printf("%d %d\n", i, j);   // OK: "0 5"
}
```

### 13.1.2 Variable Hiding

- If there is a variable name d te same thing at an inner scope as one at outer scope, the one in inner scope takes precedence

```c
#include <stdio.h>

int main(void)
{
    int i = 10;

    {
        int i = 20;

        printf("%d\n", i);  // Inner scope i, 20 (outer i is hidden)
    }

    printf("%d\n", i);  // Outer scope i, 10
}
```

## 13.2 File Scope

- If a variable is defined outside of a block - `file scope` - visible in all functions that come after it in the file
- Considered "global scope"

## 13.3 For-loop scope

- When variable is declared in first line of for loop, `i` begins the moment it is defined and continues for duration fo loop.

## 13.4 Note on Function Scope

- Function scope is used exclusively with `labels`.
