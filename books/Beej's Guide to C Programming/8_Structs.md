# 8 - Structs

- User-definable type that holds multiple pieces of data
- Way to bind multiple variables into a single one
- `Struct` as a class with only data members, no methods

## 8.1 Declaring a Struct

```c
struct car {
    char *name;
    float price;
    int speed;
};
```

- Think of it as making a new type - `struct car`

```c
struct car saturn;  // Variable "saturn" of type "struct car"
```

- Use the dot operators to access and set individual fields

```c
saturn.name = "Saturn SL/2";
saturn.price = 15999.99;
saturn.speed = 175;
```

## 8.2 Struct Initializers

- If you put values in for fields in the order they appear in struct, can do when initializing

```c
truct car {
    char *name;
    float price;
    int speed;
};

// Now with an initializer! Same field order as in the struct declaration:
struct car saturn = {"Saturn SL/2", 16000.99, 175};
```

To make it independent of the order, use dot syntax:

```c
struct car saturn = {.speed=175, .name="Saturn SL/2"};
```

- Any missing fields are initialized to zero

## 8.3 Passing Structs to Functions

- Can either pass struct or pointer to the struct
- When would you want to pass pointer to struct?
  - Need function to be able to make changes to the struct passed in
  - Struct is large and expensive to pass
- Most common to pass pointer to struct.

```c
#include <stdio.h>

struct car {
    char *name;
    float price;
    int speed;
};

int main(void)
{
    struct car saturn = {.speed=175, .name="Saturn SL/2"};

    // Pass a pointer to this struct car, along with a new,
    // more realistic, price:
    set_price(&saturn, 799.99);

    printf("Price: %f\n", saturn.price);
}
```

- `saturn` is a `struct car`, `&saturn` is the pointer of the struct car (struct car*)

```c
void set_price(struct car *c, float new_price) {
    (*c).price = new_price;  // Works, but is ugly and non-idiomatic :(
}
```

## 8.4 Arrow Operator

- Arrow operator helps refer to fields in pointers

```c
void set_price(struct car *c, float new_price) {
    // (*c).price = new_price;  // Works, but non-idiomatic :(
    //
    // The line above is 100% equivalent to the one below:

    c->price = new_price;  // That's the one!
}
```

- If struct, use dot `.`
- If pointer to struct, use arrow `->`

## 8.5 Copying and Returning structs

- Assigning from one to other makes a shallow copy, returning a struct also makes a copy

## 8.6 Comparing `structs`

- Must compare each field one at a time
