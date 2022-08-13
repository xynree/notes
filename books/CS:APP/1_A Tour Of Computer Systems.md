
# Chapter 1: A Tour of Computer Systems

------

## Contents

[1.1 Information is Bits + Context](#11-information-is-bits--context)  
[1.2 Programs Are Translated..](#12-programs-are-translated-by-other-programs-into-different-forms)  
[1.3 Why Learn How Compilation Systems Work?](#13-why-learn-how-compilation-systems-work)  
[1.4 Processors Read and Interpret Instructions Stored In Memory](#14-processors-read-and-interpret-instructions-stored-in-memory)  
[1.5 Caches Matter](#15-caches-matter)  
[1.6 Storage Devices Form a Hierarchy](#16-storage-devices-form-a-hierarchy)  
[1.7 The Operating System Manages the Hardware](#17-the-operating-system-manages-the-hardware)
[1.8 Systems Commicate with Systems Using Networks](#18-systems-commicate-with-systems-using-networks)
[1.9 Important Themes](#19-important-themes)
[1.10 Summary](#110-summary)

------

## 1.1 Information is Bits + Context

- source program: sequence of bits (`0` & `1`) organized into 8-bit chunks (`bytes`)
- byte = some text character in the program
- All information is represented as bits

> ### Origins of the C Programming Language
>
> - Developed 1969 - 1973 by _Dennis Ritchie_ (Bell Labs)
> - Closely tied to `Unix` - System programming language for Unix. Most of Unix Kernal written in C
>   - K&R (Kernighan and Ritchie) book describes language and standard library
  
## 1.2 Programs Are Translated by Other Programs into Different Forms

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

> ### GNU Project  

> A Tax-Exempt Charity started by Richard Stallman.  
> Open source Unix-like system  
> All components developed except for kernel: Linux  
> GNU Environment:  `EMACS` Editor, `GCC` Compiler, `GDB` Debugger, Assembler, Linker, Utitilies for binaries, etc.

## 1.3 Why Learn How Compilation Systems Work?

- Optimizing performance - learn which statements are more efficient than others
- Understand link-time errors: "cannot resolve reference", "static variable / global variable", 'static vs dynamic library', why some errors do not appear until run time?
- Avoid security holes: understand consequences of the way data and control info is stored on the program stack

## 1.4 Processors Read and Interpret Instructions Stored In Memory

- `shell` : command line interpreter that prints prompt, waits for command, then performs command
- We can use to run our `hello` program!

### 1.4.1 Hardware Organization of a System

![image.png](https://s2.loli.net/2022/08/13/RsMnewB4PDUoHKT.png)

#### __Buses__

- Electrical conduits carry bytes of info back and forth between components
- Transfer fixed-size chunks of bytes "words"
  - Word size: 4 bytes (32 bits) or 8 bytes (64 bits)

#### __I/O Devices__

- How system connects to external world
- Example: Keyboard/Mouse, Display, Disk Drive
- Each I/O Device connects to I/O bus with a controller or adapeter.

#### __Main Memory__

- Temp storage device that holds both program and data it manipulates while processor is executing program
- Collection of DRAM (dynamic random access memory) chips
- Linear array of bytes, starting at 0
- Size of data items vary according to type
  - On x86-64 running Linux, `short` =  2 bytes, `int` `float` = 4 bytes, `long` `double` 8 bytes

#### __Processor__

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

### 1.4.2 Running the `hello` Program

![image.png](https://s2.loli.net/2022/08/13/gknYUlXmHihxosC.png)

- How does it work?
  - Shell reads characters and stores them into memory
  - Hitting `enter` loads `hello` by executing instructions that copies the code and data in `hello` from `disk` to `main memory`
  - Data travels directly from disk to main memory without passing processor
  - Once code and data in `hello` are loaded to memory, processor executes machine-language instructions
    - These instructions copy the bytes in `hello world` string from memory to register file, and then to a display device.

![image.png](https://s2.loli.net/2022/08/13/SatywUrFTRX9iQe.png)

## 1.5 Caches Matter

- System spends a lot of time moving information from one page to the other
- Processor-Memory gap: Processor can read data from register file almost 100x faster than from memory
- Cache memories or `caches` serve as temp staging areas for info likely to be used soon
  - Can be accessed as fast as register file

![image.png](https://s2.loli.net/2022/08/13/xTd2nsFm8yBUfVG.png)

- Caches are implemented with SRAM (static random access memory)
  - Many levels of cache before reaching main memory
- App programmers aware of caches can exploit them to improve performance of programs

## 1.6 Storage Devices Form a Hierarchy

![image.png](https://s2.loli.net/2022/08/13/DJUa7Xd3Yf21uN4.png)

- Moving from the top to bottom of hierarchy, devices become slower, larger, and cheaper
- Register -> Caches (SRAM) -> Main Memory (DRAM) -> Storage
- Storage at one level serves as cache for storage at next level

## 1.7 The Operating System Manages the Hardware

- Programs do not access the components directly, they rely on services provided by the OS
  - Layer of software between app and hardware
- Protects hardware from misuse by runaway apps
- Provides apps simple mechanisms for manipulating low level hardware
- Fundamental abstractions: processes, virtual memory, files
  
![image.png](https://s2.loli.net/2022/08/14/2evhF4DGcdBWmRC.png)

- Files are abstractions for I/O
- Virtual memory = main memory and disk I/O
- Processes = Processor, Main Memory, I/O Devices

### 1.7.1 Processes

- Provides illusion that program is the only one on the system - "process"
- Abstraction for a running program
- Multiple processes can run concurrently, each appearing to have exclusive usek

> #### Unix, Posix and the Standard Unix Spec  
>
> - Multics: Started by Honeywell, originally partnered with Bell Labs but dropped out because of complexity
> - Group of Bell Labs researchers - Ken Thompson, Dennis Ritchie, Doug McIlroy, Joe Ossanna - worked on simpler OS using ideas from Multics
> - Kernel rewritten in C in 1973 and dubbed `Unix`
> - In mid 1980's IEEE sponsored effort to standardize unix -> 'Posix' : Posix standards
> - A separate standardization effort : Standard Unix Spec + Posix has created single unified standard for Posix systems

- Traditional systems: single threaded vs multi-core processors (concurrency)
- Processor switches among processes using `context switching`
- OS keeps track of all state information process needs in order to run
  - "Context" - current values of PC, register file, and contents of main memory
  - uniprocessor system can only execute code for a single process at any one point in time
  - When OS transfers control to a new process, it performs a `context switch`
    - Saves context of current process
    - Restore context of new process
    - Pass control to the new process

![image.png](https://s2.loli.net/2022/08/14/CVEGcnDZY8LWiyP.png)

- Transition managed by the OS kernel
- Kernel is portion of OS code that is always resident in memory
- When app requires action by OS, executes a sys call instruction, transferring control to kernel

### 1.7.2 Threads

- Process can consist of multiple execution units "threads"
  - Run context of process and share same code and global data
- Easier to share data between multiple threads than between multiple processes
- Threads = more efficient than processes

### 1.7.3 Virtual Memory

- Each process has same uniform view of memory (Virtual address space).
- From lowest addresses to highest:
  - Program code/ User Code
  - Heap: Expands and contracts dynamically as result of malloc/free
  - Shared Libraries (C standard, math, etc)
  - Stack (Compiler uses to implement function calls)
  - Kernel virtual memory

### 1.7.4 Files

- Sequence of bytes
- All I/O devices modeled as a file using system calls known as `Unix I/O`
- Uniform view of all the I/O devices in a system

## 1.8 Systems Commicate with Systems Using Networks

- Network can be viewed as another I/O device
- Exchanges between client/servers typical of all network applications

## 1.9 Important Themes

- System = collection of intertwined hardware & systems software

### 1.9.1 Amdahl's Law

- When we speed up one part of a system, effect on overall system performs depends on how significant this part was and how much it sped up
  - To significantly speed up entire system, must improve the speed of a large fraction of overall system

### 1.9.2 Concurrency and Parallelism

- Concurrency: System with multiple simultaneou sactivities
- Parallelism: Use of concurrency to make a system run faster
  - Can be exploited at multiple levels of abstraction in a computer system

#### Thread-Level Concurrency

- Multiple control flows in a single process
- Usually simulated by having a computer rapidly switch among executing processes
- Allows multiple users to interact with a system at the same time
- Single user can engage in multiple tasks concurrently

![image.png](https://s2.loli.net/2022/08/14/zmxLargwkcJBeQt.png)

- Multiple processors under control of a single system kernel = multiprocessor system (multi-core processors / hyperthreading)
- Multi-core processors - several CPU's integrated into a single chip

![image.png](https://s2.loli.net/2022/08/14/3MhsELU9BQnS75X.png)

- Each chip has 4 CPU cores each with L1/L2 caches
- Hyperthreading; Single CPU execute multiple flows of control
  - Multiple copies of CPU hardware like PC/register files
- Decides which of its threads to execute dynamically
  - ex: I7 Core processor can have each core executing 2 threads: 4 cores = 8 threads in parallel
- Reduces need to simulate concurrency

#### Instruction-Level Parallelism

- Modern processors can execute multiple instructions at one time
- Recent processors = 2-4 instructions per clock cycle
- Processors that can execute faster than 1 instruction per cycle = "superscalar" processors

#### Single-Instruction Multiple Data (SIMD) Parallelism

- At lowest level: Single instruction can cause multiple operations to be performed in parallel
- SIMD instructions used to speed up apps that process image, sound, and video data
- Can be implemented with special `vector` data types supported in compilers like GCC

### 1.9.3 The Importance of Abstarctions in Coputer Systems

- For processors:
  - instruction set architecture = abstraction of actual processor hardware
- OS system side:
  - Files = I/O devices
  - Virtual Memory = Program Memory
  - Processes = Running Program
  - Virtual Machine: Abstraction of entire computer

## 1.10 Summary

- Computer system = hardware + systems software cooperating to run applications
- Info in computer = groups of bits
- Programs are translated into different forms
- Processors Read & Interpret binary instructions stored in main memory
- I/O devices, Register and Storage devices arranged in hierarchy: Registers on top followed by multi levels of cache, DRAM, disk storage
- OS Kernel = intermediary between app and hardware
  - 1: Files as abstractions for I/O
  - 2: Virtual Memory: Abstraction for main memory and disks
  - 3: Processes: Abstractions for processor, main memory, and I/O devices
- Networks = provide ways for computer systems to communicate with one another
