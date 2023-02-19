# 10 `typedef` - Making New Types

## 10.1 `typedef` in Theory

- Take an existing type and make an alias for it with `typedef`
  
```c
typedef int antelope;  // Make "antelope" an alias for "int"

antelope x = 10;       // Type "antelope" is the same as type "int"
```

### 10.1.1 Scoping

- Commonly placed at file scope so all functions can use new types.

## 10.2 `typedef` in Practice

### 10.2.1 `typedef` and `structs`

- Sometimes `struct` is `typedef`ed to a new name to remove `struct` from the call.

```c
struct animal {
    char *name;
    int leg_count, speed;
};

//  original name      new name
//            |         |
//            v         v
//      |-----------| |----|
typedef struct animal animal;

struct animal y;  // This works
animal z;         // This also works because "animal" is an alias
```

- Another way:

```c
//  original name
//            |
//            v
//      |-----------|
typedef struct animal {
    char *name;
    int leg_count, speed;
} animal;                         // <-- new name

struct animal y;  // This works
animal z;         // This also works because "animal" is an alias
```

- Anonymous structures - Don't need to name structure in a variety of places..

```c
typedef struct {
  char *name;
  int leg_count,speed;
} animal;
```

### 10.2.2 `typedef` and other types

- Makes it easier to change types in multiple places

### 10.2.3 `typedef` and Pointers

```c
typedef int *intptr;

int a = 10;
intptr x = &a;  // "intptr" is type "int*"
```

- Hides that `x` is a pointer type though.

### 10.2.4 `typedef` and Capitalization

- Stick with your style guide on this

## 10.3. Arrays and `typedef`

```c
// Make type five_ints an array of 5 ints
typedef int five_ints[5];

five_ints x = {11, 22, 33, 44, 55};
```
