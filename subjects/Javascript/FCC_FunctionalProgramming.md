# No mutations in function

    - do not create functions that mutate global properties or variables

# Pass Arguments to Avoid External Dependence

    - declare dependencies explicitly, always pass variable or object directly into function a san argument
        - easier to test
        - know input 
        - doesn't depend on anything else in your program
    - Function will always produce same output for same set of inputs, no matter what part of code executes it.

# Refactor Global Variables Out of Functions

- Don't alter a variable or object - create new variables & objects and return them if needed from a function

- Declare function parameters
