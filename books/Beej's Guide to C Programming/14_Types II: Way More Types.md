# 14 - Types II: Way More Types

## 14.1 Signed and Unsigned Integers

- Unsigned integer types can hold only positive numbers. PRefaced with `unsigned`
- You can get larger nums in an unsigned variable than in a signed variable.

## 14.2 Character Types

- `char` is actually an `int` that uses just a single byte of space
- If you need signed or unsigned, be specfiific

![picture 1](https://s2.loli.net/2022/09/27/5b9hoCkfQ3IVzmJ.png)  

- We can do math on char since it's actually a number

```c
#include <stdio.h>

int main(void)
{
    char a = 10, b = 20;

    printf("%d\n", a + b);  // 30!
}
```

- Letters are converted to ASCII

## 14.3 - More Integer Types: `short`, `long`, `long long`

- header file `<limits.h>` defines min and max integer values, never hardcode or assume these values

```c
// These two lines are equivalent:
long long int x;
long long x;

// And so are these:
short int x;
short x;
```

- There is a hidden way to determine if system uses signed or unsigned `chars`: If `CHAR_MAX == UCHAR_MAX` , unsigned

## 14.4 More Float: `double` and `long double`

- Number is represented as the significand (the number part) and the exponent
- Only a certain num of significant decimal digits can be represented accurately
- Use larger data types to get more
- `florat` `double` `long double`

### 14.4.1 How Many Decimal Digits?

![picture 2](https://s2.loli.net/2022/09/27/TbFLxYzGvKoacj5.png)  

```c
0.12345
0.123456
0.1234567
0.12345678
0.123456791  <-- Things start going wrong
0.1234567910
```

```c
#include <stdio.h>
#include <float.h>

int main(void)
{
    // Both these numbers have 6 significant digits, so they can be
    // stored accurately in a float:

    float f = 3.14159f;
    float g = 0.00000265358f;

    printf("%.5f\n", f);   // 3.14159       -- correct!
    printf("%.11f\n", g);  // 0.00000265358 -- correct!

    // Now add them up
    f += g;                // 3.14159265358 is what f _should_ be

    printf("%.11f\n", f);  // 3.14159274101 -- wrong!
}
```

- FLT_DIG is the safe # of digits you can store in a float and retrieve correctly

### 14.4.2 Converting to Decimal and Back

- Floating point nums can encode nums that require more decimal places, but the value falls in the "gap" between two floating point numbers, which gets rounded.

- When converting from `float` to decimal representation and back, use `FLT_DECIMAL_DIG` so all bits are preserved.

## 14.5 Constant Numeric Types

### 14.5.1 Hexadecimal and Octal

- `Ox` leading nums are hex nums
- `0` leading nums are octal nums
- Extension in C to represent binary with `0b` exists as well

### 14.5.2 Integer Constants

- Force a constant int to be a different type by appending suffix tat indicates a type
- Can be uppercase or lowercase

```c
int           x = 1234;
long int      x = 1234L;
long long int x = 1234LL

unsigned int           x = 1234U;
unsigned long int      x = 1234UL;
unsigned long long int x = 1234ULL;
```

![picture 4](https://s2.loli.net/2022/09/27/kTCXoDyVcuqvjZ6.png)  

- C will choose the smallest type from `int` up that can hold a value, but depends on number's base
- Will use smallest type that can hold the number

### 14.5.3 Floating Point Constants

- unsuffixed floating point nums are type `double`. Can append an `f` to be float or longdouble by `L`

### 14.5.3.1 Scientific Notation

- C uses E notation, which is similar

![picture 5](https://s2.loli.net/2022/09/27/etMXw5G71sy3EDn.png)  

### 14.5.3.2 Hexadecimal Floating Point Constants

- Similar to floating point nums but begin with `0x` like integer numbers
- Must specify an exponent, then use `p` instead of `e` when writing num

```c
double x = 0xa.1p3;

printf("%a\n", x);  // 0x1.42p+6
printf("%f\n", x);  // 80.500000
```
