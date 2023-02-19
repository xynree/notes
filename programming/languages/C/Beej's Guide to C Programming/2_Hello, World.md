# 2 - Hello, World

## 2.1. What to Expect from C

- C is a low level language
- Why would you use it?
  - Learning tool
  - Used for certain applications - building OS's or in embedded systems (though Rust is catching up)
- C inspired a lot of languages
- One thing that hangs people up: Pointers
  - C forces you to be explicit about it

## 2.2 Hello World

- basic code:

```c
#include <stdio.h>

int main(void)
{
  printf("Hello, world!\n")
}
```

- includes tells C Preprocessor to pull contents of another file and insert it here
- 2 stages to compilation: preprocessor, compiler
- `#` sign is something preprocessor operates on before compiler gets started. `octothorpe`
  - #include
  - #define
- Compiler takes preprocessed code and produces assembly code
- `<stdio.h>` - Header file (.h)
- `main()` - everything in braces is part of fn definition
- `main` fn called automatically when program starts executing
- `\n`: newline character
- call `gcc -o hello hello.c` to compile to an executable called `hello`

## 2.3 Compilation Details

- Compilation - process of taking C source code and turning it into a program your OS can execute
- When compiling, machine code generated
- `gcc` installed on unix operating systems

## 2.4 Building with `gcc`

- `gcc -o hello hello.c`
- `-o` means output to this file
- if source has multiple files, can compile them all together and they get built into a big executable

## 2.5 Building with `clang`

- stock compiler is `clang`, not `gcc`

## 2.6 Building from IDE's

- In Visual studio, `ctrl-F7` build, `ctrl-f5` runs
- with VSCode - hit `F5` to ruun debugger

## 2.7 C verstions

- Many different named version numbers
- most famous: C89, C99, C11, C2x
- Can force `gcc`to use one of the standards with `-std=` cli argument
