# 12 - Manual Memory Allocation

- Automatic variables - Variables automatically allocated and deallocated when they come into and leave scope. Block scope "local" variables
- What if you want something to persist longer than perticular block? Manual memory management
  - Tell C to explicitly allocate certain # of bytes
  - They will remain allocated unti, explicitly freed
- Use `sizeof` to help learn how many bytes to allocate

- Autaomtic local variables stored -> `Stack`
- Manually allocated memory -> `Heap`

## 12.1 - Allocating and Deallocating, `malloc()` and `free()`

- `malloc`: accepts a # of bytes to allocate and returns `void pointer` to that block of newly-allocated memory
- `void*` can be assigned into whatever pointer type you want
- USe `sizeof` to figure out how many bytes to allocate and pass to `malloc`
- After done with memory, call `free` to indicate we're done with that memory.
  - Pass pointer you got from `malloc()` or a copy to it.
    - Undefined to use a memory region after `free`

```c
// Allocate space for a single int (sizeof(int) bytes-worth):

int *p = malloc(sizeof(int));

*p = 12;  // Store something there

printf("%d\n", *p);  // Print it: 12

free(p);  // All done with that memory

//*p = 3490;  // ERROR: undefined behavior! Use after free()!
```

- Use `sizeof` to get size of any constant expression

`int *p = malloc(sizeof *p);  // *p is an int, so same as sizeof(int)`

## 12.2 Error Checking

- All allocation functions return a pointer to the newly allocated stretch of memory or `NULL`
- Always code with protections in mind

```c
int *x;

x = malloc(sizeof(int) * 10);

if (x == NULL) {
    printf("Error allocating 10 ints\n");
    // do something here to handle it
}

```

Assignment and condition on the same line:

```c
int *x;

if ((x = malloc(sizeof(int) * 10)) == NULL)
    printf("Error allocating 10 ints\n");
    // do something here to handle it
}
```

## 12 .3 Allocating Space for an Array

- char *p = malloc(3490) = Array of 3490 `char` (each char is one byte)
- Clear memory with memset() if wanted r calloc

```c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    // Allocate space for 10 ints
    int *p = malloc(sizeof(int) * 10);

    // Assign them values 0-45:
    for (int i = 0; i < 10; i++)
        p[i] = i * 5;

    // Print all values 0, 5, 10, 15, ..., 40, 45
    for (int i = 0; i < 10; i++)
        printf("%d\n", p[i]);

    // Free the space
    free(p);
}

```

- Just pass to `sizeof` and multiply by length of array

## 12.4 An Alternative: `calloc()`

- similar to `malloc` but 2 key differences
  - Pass size of one lement and the # of elements wished to allocate
  - Clears memory to zero
- Still use `free` to deallocate memory

```c
// Allocate space for 10 ints with calloc(), initialized to 0:
int *p = calloc(sizeof(int), 10);

// Allocate space for 10 ints with malloc(), initialized to 0:
int *q = malloc(sizeof(int) * 10);
memset(q, 0, sizeof(int) * 10);   // set to 0
```

## 12.5 Changing Allocated Size with `realloc()`

- If you already allocated 10 but decide you want 20 what to do?
  - Allocate new space then `memcpy` over
  - Or: `realloc`
    - Takes pointer to previously allocated memory
    - Takes new size for memory region to be
    - Grows or shrinks memory and then returns a pointer to it

```c:pass_num_of_bytes
num_floats *= 2;

np = realloc(p, num_floats);  // WRONG: need bytes, not number of elements!

np = realloc(p, num_floats * sizeof(float));  // Better!
```

### 12.5.1 Reading in Lines of Arbitray Length

- Use realloc to grow and shrink a buffer as we read in data and then when we complete the read.
- Common practice to double the space needed each step to minimize the number of `reallocs` needed

## 12.5.2 `realloc` with `NULL`

```c
char *p = malloc(3490); // equivalent to:
char *p = realloc(NULL, 3490);
```

- This helps when setting up allocation loops.

```c
int *p = NULL;
int length = 0;

while (!done) {
    // Allocate 10 more ints:
    length += 10;
    p = realloc(p, sizeof *p * length);

    // Do amazing things
    // ...
}
```

## 12.6 Aligned Allocations

- Memory alignment: Memroy address being a multiple of certian numnber
- Some systems require that 16 bit values begin on memoruy addresses that are multiples of 2 , etc
- You can specify alignemnt with `aligned_alloc`
- Alignment is an integer power of 2, so `2,4,8,16`
- Number of bytes allocated needs to be a multiple of the alignment
- `aligned_realloc` always copies data, while `realloc` avoids it, so avoid reallocating custom-aligned data.
