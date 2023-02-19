# 6 - Arrays

- Arrays are just syntactic sugar - all pointers actually

## 6.1 Easy Example

```c
#include <stdio.h>

int main(void)
{
    int i;
    float f[4];  // Declare an array of 4 floats

    f[0] = 3.14159;  // Indexing starts at 0, of course.
    f[1] = 1.41421;
    f[2] = 1.61803;
    f[3] = 2.71828;

    // Print them all out:

    for (i = 0; i < 4; i++) {
        printf("%f\n", f[i]);
    }
}
```

- Must give it a fixed size

## 6.2 Getting the Length of an Array

- Manage it separately in another variable
- Take `sizeof` array and then divide by size of element to get the length

```c
int x[12];  // 12 ints

printf("%zu\n", sizeof x);     // 48 total bytes
printf("%zu\n", sizeof(int));  // 4 bytes per int

printf("%zu\n", sizeof x / sizeof(int));  // 48/4 = 12 ints!
```

- Only works in the scope in which array was defined
- When you pass array to functions, only passing pointer to first element
  - this is when you would use `sizeof`
  - You can use `sizeof` to get size of an array of fixed num of elements without declaring it: `sizeof(double [48])`

## 6.3 Array Initializers

- Can initialize an array with constants ahead of time
- Can't put variables in there
- Never have more items in intializer than there is room for
- You can have fewer - other elements will be initialized to 0
  - Everything not explicitly set to a value is set to 0
- Set specific array elements by specifying index for value

```c
int a[10] = {0, 11, 22, [5]=55, 66, 77};
```

- Can put constant expressions inside the bracket too
- Can have C compute size of array from initializer by leaving size out:

```c
int a[3] = {22, 37, 3490};

// is the same as:

int a[] = {22, 37, 3490};  // Left the size off!
```

## 6.4 Out of Bounds

- C doesn't stop you from accessing arrays out of bounds
- If out of bounds you get `undefined behavior` - anything can happen..

## 6.5 Multidimensional Array

- As many dimensions as you want, in row-major order

```c
int a[10];
int b[2][7];
int c[4][5][6];

int a[2][5] = {      // Initialize a 2D array
        {0, 1, 2, 3, 4},
        {5, 6, 7, 8, 9}
    };
```

## 6.6 Arrays and Pointers

### 6.6.1 Getting a Pointer to an Array

- Pointer to an array = pointer to first elem of the array

```c
#include <stdio.h>

int main(void)
{
    int a[5] = {11, 22, 33, 44, 55};
    int *p;

    p = &a[0];  // p points to the array
                // Well, to the first element, actually

    printf("%d\n", *p);  // Prints "11"
}
```

- Shorthand:

```c
p = &a[0];  // p points to the array

// is the same as:

p = a;      // p points to the array, but much nicer-looking!
```

- just referring to array name in isolation = getting pointer to first element of an array

### 6.6.2 Passing single Dimensional Arrays to Functions

- All identical ways of listing array as a param to function:

```c
p = &a[0];  // p points to the array

// is the same as:

p = a;      // p points to the array, but much nicer-looking!
```

### 6.6.3 Changing Arrays in Functions

- We are able to access array parameters using array notation `a[i]`
- Functions can make changes to arrays that are visible out in the caller

### 6.6.4 Passing Multidimen Arrays to Function

- C needs to know all the dimensions except for first so it has enough info to know where in memory to look to find a value

```c
void print_2D_array(int a[2][3])
{...}
```

```c:equivalent
void print_2D_array(int a[2][3])
void print_2D_array(int a[][3])
```
