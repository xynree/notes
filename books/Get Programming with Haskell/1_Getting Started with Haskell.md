# 1 - Getting Started with Haskell

## 1.2

- `ghc filename.hs` to un compile a file, this will make three files:
  - `hello`, `hello.hi`, `hello.o`
  - run `./hello` to run the executable
- default behavior of compiled program is to execute logic in `main`
- by default, all Haskell programs will have a `main` function

- flag `-o` to rename your executable into a different file

## 1.3

- `ghci` interactive interface for GHC
- you can write code on the fly into GHCi
- you can also load an existing file into ghci by passing `ghci filename.hs` or `:l filename.hs`
- Then you can call it within ghci: `main`
- Loading a file into ghci will overwrite all existing function definitions and variables

## 1.4

- Write code in bits and play with code interactively as its written

## Summary

- We got `ghc` and `ghci` and covered the basics of writing, refactoring, interacting with and compiling Haskell programs.

# Unit 1. Foundations of Functional Programming

- Functional programming attempts to liberate programming from directive, insructional style
- Foundations of functional programming are mathematical notions of computation
- This leads to a method of programming that solves programs by describing them
