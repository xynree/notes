# 9 - File Input/Output

- `scanf` `printf` - examples of i/o

## 9.1 `FILE*` Data Type

- Every kind of I/O is in the form of a `FILE*` type
- Holds all info needed to communicate with I/O subsystem
- `streams` - stream of data from a file or any source
  - `file` -> child of `stream`
- 3 streams already open:
  - FILE* name
  - `stdin` : standard input
  - `stdout`: standard outputo
  - `stderr`: standard error
- These are same:

```c
printf("Hello, world!\n");
fprintf(stdout, "Hello, world!\n");  // printf to a file
```

- both stdout and sterr go to screen
- serious error messages to `stderr` instead of `stdout`

## 9.2 Reading Text Files

- 2 different ways of categorizing streams: `text` `binary`
- Text files allowed to translate data
  - Newlines = different representation
- Text files = sequence of lines separated by newlines
- If you're able to edit file in a regular text editor = text file
  - otherwise: binary

```c
#include <stdio.h>

int main(void)
{
    FILE *fp;                      // Variable to represent open file

    fp = fopen("hello.txt", "r");  // Open file for reading

    int c = fgetc(fp);             // Read a single character
    printf("%c\n", c);             // Print char to stdout

    fclose(fp);                    // Close the file when done
}
```

- 'r' passed in means open text stream for reading
  - Various strings ot pass to `fopen` with different meanings
  - Use `fgetc` to get character from the stream
  - `fclose` to close stream
  - `FILE*` keeps track of position in file, so subsequent calls gets next char in file until endjjjjjj

## 9.3 End of File - `EOF`

- `fgetc()` returns `EOF` when end of file has been reached
- EOF isn't technically a character so `fgetc` needs to be able to return both char and EOF-- therefore stored in an `int`

```c:read_file
#include <stdio.h>

int main(void)
{
    FILE *fp;
    int c;

    fp = fopen("hello.txt", "r");

    while ((c = fgetc(fp)) != EOF)
        printf("%c", c);

    fclose(fp);
}
```

## 9.3.1 Reading a Line at a time

-`fgets() to read a line at a time

- Takes a pointer to `char` to hold bytes, max # to read and `FILE*` to read from
- Returns `NULL~ on end of file or err

```c
#include <stdio.h>

int main(void)
{
    FILE *fp;
    char s[1024];  // Big enough for any line this program will encounter
    int linecount = 0;

    fp = fopen("quote.txt", "r");

    while (fgets(s, sizeof s, fp) != NULL) 
        printf("%d: %s", ++linecount, s);

    fclose(fp);
}
```

## 9.4 Formatted INput

- `fscanf()` skips leading whitespace when reading, and returns EOF on end of file or error

```c
#include <stdio.h>

int main(void)
{
    FILE *fp;
    char name[1024];  // Big enough for any line this program will encounter
    float length;
    int mass;

    fp = fopen("whales.txt", "r");

    while (fscanf(fp, "%s %f %d", name, &length, &mass) != EOF)
        printf("%s whale, %d tonnes, %.1f meters\n", name, mass, length);

    fclose(fp);
}
```

## 9.5 Writing Text Files

- `fputc()` `fputs()` `fprintf` to write text streams
- Use `fopen` in write mode by passing `w` for write mode

```c
#include <stdio.h>

int main(void)
{
    FILE *fp;
    int x = 32;

    fp = fopen("output.txt", "w");

    fputc('B', fp);
    fputc('\n', fp);   // newline
    fprintf(fp, "x = %d\n", x);
    fputs("Hello, world!\n", fp);

    fclose(fp);
}
```

- Outputs to `output.txt` as:

```c
B
x = 32
Hello, world!
```

## 9.6 Binary File I/O

- Binary strreams vs text stream - binary no translations
- Add `b` to mode, open in `rb` mode, write = `wb` mode
- Streams of bytes can contain NUL characters, so people usually don't use `fprint` and stuch to operate on binary
- Most commonly used: `fread()`, `fwrite()`, read and writing # of bytes to the streamjj

- To write to `stdout` instead of a file: `fp = stdout`
- Writing a sequence of bytes to disk:

```c
#include <stdio.h>

int main(void)
{
    FILE *fp;
    unsigned char bytes[6] = {5, 37, 0, 88, 255, 12};

    fp = fopen("output.bin", "wb");  // wb mode for "write binary"!

    // In the call to fwrite, the arguments are:
    //
    // * Pointer to data to write
    // * Size of each "piece" of data
    // * Count of each "piece" of data
    // * FILE*

    fwrite(bytes, sizeof(char), 6, fp);

    fclose(fp);
}
```

- fread() returns # of bytes read or 0 on EOF, so can be used to loop

```c
#include <stdio.h>

int main(void)
{
    FILE *fp;
    unsigned char c;

    fp = fopen("output.bin", "rb"); // rb for "read binary"!

    while (fread(&c, sizeof(char), 1, fp) > 0)
        printf("%d\n", c);
}

```

## 9.6.` Struct and Number Caveats

- Not portable to `fwrite` structs out to files
- Serialize it
