# Code Quality

# Debugging In the Browser

- Sources Panel
    - File Navigator: HTML, JS, CSS
    - Code Editor: shows source code
    - JS Debugging
- Breakpoints
    - Click digit on code to set breakpoint
    - Breakpoint panel on the right
        - Conditional Breakpoint: only triggers when given expression is truthy
    - debugger; command also will pause code

- Pause
    - After pausing at breakpoint:
        - Watch: shows current values
        - Call Stack : nested call chain
        - Scope: current variables
            - Local, global, this
- Tracing Execution
    - Resume continues execution
        - Step: run next command
        - Step over: run next command but don't go into a function
        - Step Into: goes into code
        - Step out: continues execution until end of functtion
        - enable/disable breakpoints
        - enable automatic puause
            - Right click: continue to here: lazy breakpoint

# Coding Style

- Syntax
    - space between parameters
    - { ons ame line after a space
    - space around operators
    - manditory semicolon
    - empty line between logical blocks
    - short lines
    - }else{ without a line break
    - spaces around nested calls

- Curly Braces:
    - if (condition) {
    }
    - if (n<0) alert() // Acceptable if short

- Line Length
    - in strings use backticks to split code
    - for if statements:
        - if (
        id===2
        moon-3
        dkd==2
        ){
        sdflkjsf();
        };

- Indents
    - 2 or 4 spaces for indents
    - vertical indents: newline for splitting code into logical block

- Semicolons
    - Should always be there unles syou want to use a style like "standardJs"

- Nesting Levels
    - Avoid nesting code too many levels deep
        - for for loops try using continue to avoid extra nesting 

- Function Placement
    - declare function before code which uses them.

- Style Guides:
    - Google JS Style Guide
    - Airbnb JS Style Guide
    - Idiomatic.JS
    - StandardJS

- Automatic Linters - ESLint

# Comments

- Bad Comments  use comments to explain what is going on
- function can be used to explain a comment (self-descriptive)
- Refactor your code into functions to explain what is going on.
- Good Comments:
    - Describe Architecture
        - UML Diagrams
        - Document Function parameters and usage. JSDoc syntax
        - Important Solutions

# Automated Testing  WIth Mocha

- BDD: Behavior Driven Development
    - tests+ docs+examples
        - describe, it, assert
    - instead of writing it blocks manually, generate them in a for loop to do many tests
    - nested describe
        - nesting a describe group defines a subgroup of tests
    - use before/after functions to show info b/after tests

# Polyfills and Transpilers

- Transpilers and Polyfills get modern code to work on older engines

Transpiler
    - parses modern code and rewrites it with older syntax
    - ex: ?? didn't exist before 2020
    - Babel
    - webpack runs transpiler on every code change.

- Polyfills
    - script that updates/adds new function is called polyfill. Adds missing implementations
    - polyfill libraries:
        - core js
        - polyfill.io

- check for support https://kangax.github.io/compat-table/es6/
+ caniuse
