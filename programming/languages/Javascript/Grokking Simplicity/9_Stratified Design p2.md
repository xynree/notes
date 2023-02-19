# 9 - Stratified Design: Part 2

## Pattern 2: Abstraction Barrier

- Abstraction barriers clearly delegate responsibilities between teams
- Layer of functions that hide the implementation so well you can completely forget how it is implemented even while using functions
- Fn programmers strategically employ abstraction barriers in order to think about problems at a high level
- Allows teams to work independently
- Abstraction barrier lets us ignore details, makes it easy to change code
- Why? All functions in a lyaer let us ignore the same thing when woring above that layer - don't need to know what lower level data structures are
- When to use and not use abstraction barriers
  - To facilitate changes of implementation
    - Be careful to not write extra code just in case something changes in the future
  - To make code easier to write and read
    - Allows us to ignore details: Did we initialize loop variables correctly? One-off errors? Etc
  - Reduce coordination between teams
  - Mentally Focus on problem on hand
- Pattern 2 Review: Abstraction Barrier
  - Solutions are expressed at the correct level of generality and detail

## Pattern 3: Minimal Interface

- Consider where the code for new features belongs
- Avoid bloating lower layers with unecessary features
- Prefer to write new features at higher levels rather than adding to or modifying lower levels
- Focus on a sense of clean,simple, reliable interface and use it as a proxy for unseen consequences in the rest of the code
- Review: Minimal Interface
  - Keep abstraction barrier minimal:
    - Adding more code to barrier = more to change when we change implementation
    - Code in barrier is lower level
    - Low level code is harder to understand
    - More functions in an abstraction barrier = more coordination between teams
    - Larger Interface is harder to remember
- Sharpen sense of how well the functions in the layer serve their purpose

## Pattern 4: Confortable Layers

- Consider the practical size
- Ask: Are we comfortable? Comfort working in code = relax on design
- If uncomfortable with details we have to keep in heads or unclean code feels, start applying patterns again

## Patterns of Stratified Design: Summary

1 - Straightforward Implementation

- Helps us build straightforward implementations
- Problem the function signature presents should be solved at the right level of detail in the body
- Too much detail = code smell!

2 - Abstraction barrier

- Layers provide an interfact to help hide implementation details
- Help us think at a higher level

3 - Minimal Interface

- Interfaces should converge into a small, powerful set of operations
- All other operations should be defined in terms of those

4 - Comfortable Layers

- Invest time in layers that help deliver software faster and with higher quality

## what does the graph show us about our code?
  
- Function requirements: Things softwrae has to do to work correctly
- Nonfunctional Requirements: How testable, maintainable, reuseable

- Code on the top of graph is easier to change
- Code on bottom should implement timeless functions
- Testing code at the bottom is more important
- Code at the bottom is more reuseable
