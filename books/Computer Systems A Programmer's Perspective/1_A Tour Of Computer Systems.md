# Contents 

[1.1 Information is Bits + Context](#11-information-is-bits--context)  
[1.2 Programs Are Translated..](#12-programs-are-translated-by-other-programs-into-different-forms)  
[1.3 Why Learn How Compilation Systems Work?](#13-why-learn-how-compilation-systems-work)  
[1.4 Processors Read and Interpret Instructions Stored In Memory](#14-processors-read-and-interpret-instructions-stored-in-memory)  
[1.5 Caches Matter](#15-caches-matter)  
[1.6 Storage Devices Form a Hierarchy](#16-storage-devices-form-a-hierarchy)  


------------

# 1.1 Information is Bits + Context

- source program: sequence of bits (`0` & `1`) organized into 8-bit chunks (`bytes`)
- byte = some text character in the program
- All information is represented as bits
> ## Origins of the C Programming Language
>  - Developed 1969 - 1973 by _Dennis Ritchie_ (Bell Labs)
>  - Closely tied to `Unix` - System programming language for Unix. Most of Unix Kernal written in C
>    - K&R (Kernighan and Ritchie) book describes language and standard library
  
# 1.2 Programs Are Translated by Other Programs into Different Forms
- C lang -> machine lang -> packaged into executable objects -> stored as a binary file
- Object programs are also referred as executable object files
- Translation from source file to object file performed by the `compiler driver`
- Source program -> `Preprocesser` -> Modified Source Program -> `Compiler` -> Assembly Program (text) -> `Assembler` -> Relocatable object programs (binary) -> `Linker` -> Executable object program (binary)

![image.png](https://s2.loli.net/2022/08/13/palsIL9wfP6kNhV.png)

- Compilation system: 4 phases
  - Preprocessing (cpp) : Modifies original C program according to # derivatives (ex: import files like `# include <stdio.h>`) ---> Another C program, with `.i` suffix typically
  - Compilation (cc1) : Translates text file `hello.i` into text file `hello.s` which has assembly language
  - Assembly (as) : Translates `hello.s` into machine -language , packages into a relocatable oject program, stores result in `hello.o
  - Linking (ld) : Functions that use the standard C library are precompiled in a different object file which must be linked. linker handles the merging.
  - Result: `hello` file : executable redady to be loaded and used by the system.

> ## GNU Project  
> A Tax-Exempt Charity started by Richard Stallman.  
> Open source Unix-like system  
> All components developed except for kernel: Linux  
> GNU Environment:  `EMACS` Editor, `GCC` Compiler, `GDB` Debugger, Assembler, Linker, Utitilies for binaries, etc.   


# 1.3 Why Learn How Compilation Systems Work?
- Optimizing performance - learn which statements are more efficient than others
- Understand link-time errors: "cannot resolve reference", "static variable / global variable", 'static vs dynamic library', why some errors do not appear until run time?
- Avoid security holes: understand consequences of the way data and control info is stored on the program stack

# 1.4 Processors Read and Interpret Instructions Stored In Memory
- `shell` : command line interpreter that prints prompt, waits for command, then performs command
- We can use to run our `hello` program!

## 1.4.1 Hardware Organization of a System
![image.png](https://s2.loli.net/2022/08/13/RsMnewB4PDUoHKT.png)

__Buses__
- Electrical conduits carry bytes of info back and forth between components
- Transfer fixed-size chunks of bytes "words"
  - Word size: 4 bytes (32 bits) or 8 bytes (64 bits)

__I/O Devices__
- How system connects to external world
- Example: Keyboard/Mouse, Display, Disk Drive
- Each I/O Device connects to I/O bus with a controller or adapeter.

__Main Memory__
- Temp storage device that holds both program and data it manipulates while processor is executing program
- Collection of DRAM (dynamic random access memory) chips
- Linear array of bytes, starting at 0
- Size of data items vary according to type
  - On x86-64 running Linux, `short` =  2 bytes, `int` `float` = 4 bytes, `long` `double` 8 bytes

__Processor__
- CPU (processor) executes instructions from main memory and updates program counter to point to next instruction.
- PC = Program Counter: points at machine language instructions in memory
- Only a few simple operations revolving around main memory, `register file`, and `arithmetic/logic unit` (ALU)
  - Register file: Storage that has word-size registers with their own unique names
  - ALU computes new data and address values
- Simple operations CPU might carry out as result of an instruction:
  - Load byte from main memory -> register
  - Store byte from register -> main memory
  - Operate : Copy contents of two registers to ALU , do math, then store result -> register
  - Jump: Extract word from instruction, copy into program counter (PC)

## 1.4.2 Running the `hello` Program
![image.png](https://s2.loli.net/2022/08/13/gknYUlXmHihxosC.png)
- How does it work?
  - Shell reads characters and stores them into memory
  - Hitting `enter` loads `hello` by executing instructions that copies the code and data in `hello` from `disk` to `main memory`
  - Data travels directly from disk to main memory without passing processor
  - Once code and data in `hello` are loaded to memory, processor executes machine-language instructions
    - These instructions copy the bytes in `hello world` string from memory to register file, and then to a display device.

![image.png](https://s2.loli.net/2022/08/13/SatywUrFTRX9iQe.png)

# 1.5 Caches Matter
- System spends a lot of time moving information from one page to the other
- Processor-Memory gap: Processor can read data from register file almost 100x faster than from memory
- Cache memories or `caches` serve as temp staging areas for info likely to be used soon
  - Can be accessed as fast as register file

![image.png](https://s2.loli.net/2022/08/13/xTd2nsFm8yBUfVG.png)
- Caches are implemented with SRAM (static random access memory)
  - Many levels of cache before reaching main memory
- App programmers aware of caches can exploit them to improve performance of programs

# 1.6 Storage Devices Form a Hierarchy
![image.png](https://s2.loli.net/2022/08/13/DJUa7Xd3Yf21uN4.png)
- Moving from the top to bottom of hierarchy, devices become slower, larger, and cheaper
- Register -> Caches (SRAM) -> Main Memory (DRAM) -> Storage
- Storage at one level serves as cache for storage at next level