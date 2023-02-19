# 6. While You Are Coding

- Coding is not mechanical
- Developers who don't actively think about thei code are programming by coincidence
- You'll someday have to test the code
- Be careful of tools that write code on your behalf unless you understand what they're doing

## __31.Programming By Coincidence__

- Avoid programming by coincidence
- If you don't know why code worked in the first place, you can't know why it's failing
- Accidents of Implementation
  - Things that happen because that's how the code is written. 
  - Undocumented errors on boundary conditions
  - Related to calling things in the wrong order or in the wrong context
- Basic principles = good modularization, hiding implementation behind small, well-documented interfaces
- Accidents of Context: What are you relying on that isn't guaranteed?
- Implicit Assumptions: Assumptions should be based on well-established facts
- How to Program Deliberately
  - Be aware of what you are doing
  - Don't code blindfolded
  - Proceed from a plan
  - Don't depend on accidents or assumptions
  - Document your assumptions
  - Test both code and assumptions as well
  - Prioritize your effort
  - Don't be a slave to history

## __32. Algorithm Speed__

- O Notation
- Common Sense Estimation:
  - Simple loops : 1 -> n, algoirhm likely to be O(n)
  - Nested loops: O( * n)
  - Binary chop O(log n)
  - Divide and conquer (O n log n)
  - Permutations: O (n^2)
- Practical consideration, choose appropriate algos
  - Fastest is not always best for the job
- Be wary of premature optiimization

## __33. Refactoring__

- Software is more like gardening than construction
- When should you refactor?
  - Duplication
  - Non-orthogonal design
  - Outdated knowledge
  - Performance
- REal-World complications
  - If you can't do it immediately, make sure it gets placed on the schedule
- Refactoring = redesign
  - Don't try to add functionality at the same time
  - Make sure you have good tests before you start
  - Fix both code that isn't right and everything that depends on it

## __Code That's Easy To Test__

- Build testability into software from the beginning and test each piece thoroughly efore trying to wire them together
- Unit test: code that exercises a module
- Testing against Contract: ensure given unit honors its contract
- Avoids downstream disasters
- Writing Unit Tests: Should be conveniently located
- Using Test Harnesses: Handles common operations such as logging status, output, running tests.
  - Standardized setup, cleanup
  - Method for selecting individual tests or all tests
  - Means of analyzing output for expected results
  - Standardized failure reporting
- Build a Test Window: Log files with trace messages