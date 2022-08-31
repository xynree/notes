# 6. Staying immutable in a mutable language

- Can immutability be applied everywhere?
  - Categorize an operatioin as either read or write

## 3 steps of copy-on-write discipline

1. Make a copy
2. Modify copy
3. Return copy

## What to do if an operation is a read and a write

- One example: `.shift()` method

- How to convert?
  - 1. Split function into read and wrtie
  - 2. Return two values from function

## Reads to immutable data structures are calculations

- Reads to mutable data are actions: If we read from a mutable value, we could get a different answer each time we read it, so reading mutable data is an action
- Writes make a piece of data mutable
  - Writes modify data
- If there are no writes to a piece of data, it is immutable
  - If we get rid of all writes by converting them to read, data is immutable
- Reads to immutable data structures are calculations
- Converting writes to reads makes more code calculations

## Applications have state that changes over time

- Swapping is used to keep track of changes over time

## Immutable data structures are fast enough

- Immutable data structures use more memory
- We can optimize later
- Garbage collectors are fast
- Functional programming langauges have fast implementations

## Copy-on-write operations on objects

- `Object.assign()` is used to make copies on objects
- Converting nested writes to reads
  - Mkae a copy, modify copy, return copy
  - Difference: We do another copy on write to modify the nested one
- Everything in entire data structure has to be unchanged for it to be immutable

## Summary

- We want to use immutable data
- Copy-on-write is a discipline for ensuring data is immutable
- Copy-on-write makes a shallow copy before modifying copy, then returning it
