# 16 - Types IV: Qualifiers and Specifiers

## 16.1 Type Qualifiers

- Allow you to declare const values and give compiler optimization hints

### 16.1.1 `const`

- variable will not change

```c
const int x = 2;

x = 4;  // COMPILER PUKING SOUNDS, can't assign to a constant
```

#### 16.1.1 `const` and Pointers

- putting `const` up front with type name makes it so you can't change the thing the pointer pointers to
`const int *p = x //p can be modified but *p cannot`
- also equivalient:
`const int *p // int const *p;`

- Can make both things const:
- `const int *const p;  // Can't modify p or *p!`

### 16.1.2 `restrict`

- `restrict` hints to compiler that a piece of memory will only be accessed by one pointer and never another

### 16.1.3 `volatile`

- tells compiler that value might change behinds its back and should be looked up every time

## 16.2 Storage-Class Specificers

- `auto`: default for block scope vars, automatic storage duration
- `static`
  - in block scoope: single instance of variable to exist
  - in file scope: isn't visible outside of particular source file
- `extern`: gives way to refer to objects in other source files

```c
// bar.c

int a = 37;

// foo.c

extern int a;

int main(void)
{
    printf("%d\n", a);  // 37, from bar.c!

    a = 99;

    printf("%d\n", a);  // Same "a" from bar.c, but it's now 99
}
```

- `register`: hint to compiler that variable is frequently used and should be optimized
  - Can't take address of a register
- `_Thread_local` : Way to make sure each thread gets its own copy of a variable
