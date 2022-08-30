# 2. Functional Thinking In Action

## Part 1 : Distinguishing actions, calculations, and data

### Organizing code by "rate of change"

- Organize code based on what changes the least to most. Each layer is built on layers beneath it.
- "stratified design" - creates layers
  - Business Rules
  - Domain Rules
  - Tech Stack
  
## Part 2: First-class Abstractions

- Timeline diagram to show when actions are being run. Actions depend on order, so important to get order right.

### Timelines visualize distributed systems

- Multiple steps happening parallel instead of one linear thread = distributed system
- Multiple timelines can execute different orderings

- Timelines are uncoordinated by default
- You cannot rely on duration of actions
- Bad timings can happen in production
- Timeline diagram reveals problems in system
- Cutting the timeline = way to coordinate multiple timelines working in parallel (higher order operation)
  - EAch timelines do work independently, then wait for each other to finish when they are done
  - Makes it easier to reason about pieces in isolation - Separate pieces from each other
  - Working with timeline diagrams helps you understand how systems work through time
  - Timeline diagrams are flexible

## Summary

- Functional programmers apply stratified design to make it more maintainable. Layers help organize code by rate of change
- Timeline diagrams can be used to visualize how actions run over time
- Cutting timelines can help coordinate their actions, guaranteeing they perform in the proper order.
