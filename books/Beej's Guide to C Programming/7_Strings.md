# 7 - Strings

- Strings are not strings but pointers

## 7.1 String Literals

- Sequences of characters in double quotes `"` (Single quotes enclose characters)

```c
"Hello, world!\n"
"This is a test."
"When asked if this string had quotes in it, she replied, \"It does.\""
```

## 7.2 String Variables

`char *s = "Hello, world!";`

- Type is pointer to a `char`: String variable is a actually a pointer to the first character in that string

## 7.3 String Variables as Arrays

```c
char s[14] = "Hello, world!";

// or, if we were properly lazy and have the compiler
// figure the length for us:

char s[] = "Hello, world!";
```

- You can use array notation to access characters in a string

## 7.4 String Initializers

```c
char *s = "Hello, world!";
char t[] = "Hello, again!";
```

- These two are subtly different
  - First is pointer to a string literal (first character in a string)
- If you try to mutate it with

```c
char *s = "Hello, world!";

s[0] = 'z';  // BAD NEWS: tried to mutate a string literal!
```

Will be undefined.

```c
char t[] = "Hello, again!";  // t is an array copy of the string 
t[0] = 'z'; //  No problem

printf("%s\n", t);  // "zello, again!"
```

- This one is a mutable copy of the string that can be changed at will.

## 7.5 String Length

- There's a function in `<string.h>` called `strlen()` that can compute length of string in bytes
- Returns type `size_t` as an int

## 7.6 String Termination

- Strings have pointer to first character in string
- Strings have a 0 valued byte (NUL character) in memory after the pointer that indicates end of string `\0`
- To find strlen, you can search for the `NUL` character

## 7.7 Copying a String

- Can't copy a string through assignment operator `=` - just makes a copy of pointer to first character
- Can copy a byte at a time or with `strcpy()`
  - Destination pointer is first arg, source pointer is the second.
