# 8. Stratified Design P1

## What is software design

- A good design should feel good - help all along the dev cycle

## Strafied design

- A technique for building software in layers
- Each layer defines new functions in terms of functions in layers below it
- Find arrangements of layers that make software flexible
- How to develop a sense of good design?

## Developing design sense

- Complex skill - the inputs to a stratified design sense as Clues
  - Some sources of clues to use: fn bodies, layer strucutre, fn signatures
- Outputs from a stratified design sense:
  - Organization, Implementation, Changes

## Patterns of stratified design

- P1: Straightforwrad implemenation
  - Should be solved at the right level of detail
- P2: Abstraction barrier
  - Layers provide interface that lets us hide an important implementation detail
- P3: Minimal interface
  - Interfaces to important business concepts converge in small, powerful set of operatures
- P4: Comfortable layers
  - Invest time in layers that help deliver softwrae faster

## P1: Straightforward implementations

- Come up with list of operations you would like to have
- Low level code is good for extraction
- Visualize with call graph: use graph to separate layers of abstraction
- Stratified design as a practice that people learn to use - find ways to improve reusability, testability, and maintainability of code
- All functions in a layer should serve same purpose - different lyaer of abstraction

## 3 different zoom levels

- 3 different problem areas;
  1. Interaction between layers
  2. Implementation of one lyaer
  3. Implementation of one function
- Global zoom level:
  - See entire call graph - eventyhing including interactions
- Layer zoom level
  - Start with level of interest and draw everything it points to below it
- Fn zoom level
  - Start with one fucntion of interest and draw everything it points to below it

- In straightforward implementations, all arrows same length
  - If fns are calling from different levels of abstraction - not straightfowrad
    - Use intermediatry functions to bridge the gap
- Possiblity of reuse happens when there is good layer structure

### P1 Review: Straightforward Design

- Code becomes hard to read because you have to understand it at different levels of detail
  - Straightforward implementations narrow the levels of detail you need to udnerstand in order to read code
- Stratified design helps target specific level of detail
  - Watch for levels of detail with clues in the code
  - Use call graph as necessary
- Extract out a more general function that takes care of details we don't want to deal with at that level
  - More general fn's = easier to test
- More general functions are more reusable
- We don't hide the complexity
  - Don't just "hide" unclear code in helper functions - find general functions at a lower leel that are themselves straightforward, out of which we can build from

## Conclusion

- We learned to visualize code as call graph and recognize layers of abstractive
- Find straightforward implementations (pattern 1): Layer structure helps organize our code and build simple functions out of other simpler functions

## Summary

- Each layer of abstraction helps us ignore different details
- Need to ID what details are important to solving problem
- Clues: name, body, call graph (intent, details, visual interpretation)
- Extract out general functions
- Pattern guides us to building layers such that fn's are implemented in a clear and elegant way.
