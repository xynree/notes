# Ch1: Clean Code

    - What is clean code?
        - efficient, pleasing to read
        - attention to detail (error handling)
        - focused
        - reads like well written prose
        - meaningful names
        - one way rather than many ways for doing a thing
        - minimal dependancies explicitly defined
        - easy for other people to enhance it
        - test driven
        - code has been taken care of : simple and orderly, attention to details
        - when programs are similar elements: wrap implementation in an abstract method or class
        - reduced duplication, high expressiveness, early building of simple abstractions
    - Reading old code is part of writing new code
    - Making it easy to read makes it easier to write

# Ch2: Meaningful Names

    - Use Intention Revealing names
        - specifices what is being measured and unit of measurement
    - Avoid disinformation (don't name things 'list' if they're not a list)
    - Noise words: indistinct words (Info, Data, table, variable)
    - Names should be distinguished in such a way that the reader knows what the differences offer
    - use pronounceable names
    - use Searchable names
    - Length of a name should correspond to the size of its scope. Multiple places in code? Search friendly name
    - Class Names: noun or noun phrases like Customer, Account, AddressParser. Do not use a verb. Avoid Manager, Processor, Data or Info as name of class
    - Method Names: verb or verb phrase names: postPayment, deletePage, save
    - One word per concept
    - use technical names when appropriate
    - add meaningful concept to the name. Enclose in well named classes, functions, etc.o

# Ch3: Functions

- Functions should be small
    - < 20 lines long

- Blocks and Indenting
    - blocks within if, else, and while statements should only be one line long
    - probably a function call
    - Functions should not be large enough to hold nested structures
    - Indent level no greater than one or two

- Do One Thing
    - TO [name], do [x]. 
        - If a function does only steps one level below stated name of function, then function is doing one thing.
        - Functions should be decomposing larger concepts.
        - a function is doing more than one thing if you can extract another function from it with a name that is not merely a restatement of the implementation.
    - Sections within Functions
        - Functions that only do one thing cannot be divided into sections.

- One Level of Abstraction per Function
    - all statements within functions should be at the same level of abstraction
    - The Stepdown Rule
        - code should read like a top-down narrative
            - should be like a set of TO paragraphs, each describing current levels of abstraction and referencing subsequent TO paragraphs at next level.
    - Switch statements/ if/Else chains
        - should be buried in a low level class and not repeated. (polymorphisms)

- Arguments
    - Ideal amount of arguments is zero. 3 should be avoided where possible and more than that requires extra justification and shouldn't be used.
    - Flag Arguments
        - try to avoid flag arguments: render(boolean) - just split into renderTrue and renderFalse.
    - Argument Objects
        - Try simplifying arguments into classes
- Verbs and Keywords
    - try to make a verb/noun pair for functions and arguments. Or encode names of arguments into the function name

- Side Effects
    - Make side effects clear and explicit

- Output Arguments
     - avoid output arguments

- Command Query Separation
    - functions should either do something or answer something, but not both.
    - Either change state or return information.

- Try/Catch should be separate function
- Error Handling should be separate function

- Don't Repeat Yourelf (DRY)

- Structured Proframming
    - Every function should have one entry and one exit. Only one return, no break/continue


# Ch4: Comments

- not pure good, they are a necessary evil
- compensate for failure to express yourself in code
- Hard to maintain
- Inaccurate comments are much worse than no comments

- Comments do not make up for bad code
- Try: creating a function that says the same thing as the comment you want to write

- Good comments:
    - Legal: copyright/authorship
    - Informative: provides basic info, but better to use name of function
    - Explanation of Intent
    - Clarification
    - Warning of Consequences
    - Todo Comments
    - Amplify importance
    - Documentation in public API's

- Bad Comments:
    - Mumbling
    - Redundant
    - Misleading
    - Mandated
    - Journal
    - Useless noise
    - Scary noise
    - Don't use a comment when you can use a function/variable
    - Position Markers
    - Closing Brace Comments
    - Attribution
    - Commented out Code
    - HTML comments
    - Nonlocal 
    - Too much info
    - Function headers
    - docs in Nonpublic code


# Ch5: Formatting
