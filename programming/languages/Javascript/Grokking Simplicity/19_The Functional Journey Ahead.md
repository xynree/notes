# 19 - The functional journey adhead

## A plan for the chapter
  
- Review the skills you have learned
- Form a model of the journey toward mastery
- Sandbox
- Production
- Continue functional programming

## We have learned the skills

- P1: Actions, Calculations and Data
  - Identify problematic parts of code by distinguishing actions, calculations and data
  - Make code reusable and testable - extract cal from actions
  - Improve design of actions - replace implicit inputs and ouptuts by explicit ones
  - Implement immutatbility to make data = calculation
  - Organize & improve code with stratified design

## First class abstractions

- Make syntactic operations first class
- Functional iteration/func tools
- Chain func tools into data transformation pipelines
- Understanding dist and concurrent systems with timeline diagrams
- Maniputate timelines to eliminate bugs
- Mutate state safely with higher order functions
- Use reactive architecture to reduce coupling
- Applying onion architecture - design services that interact with the world

## Big Takeaways

- There are often calculations hidden in actions
  - You can organize actions, calculations and data according to rate of change into distince layers
- Higher-order functions can reach new heights of abstractions
  - They let ou write simple statements the least amount of times
- Control temporal semantics
  - Bugs can be due to code executing in undesirable order
  - Timeline diagrams help visualize execution of code over time

## Ups and downs of skill acquisition

![picture 1](https://s2.loli.net/2022/09/12/wrITqbcuHmi7k63.png)  

## Parallel tracks to mastery

- Enthusiasm grows faster than our mastery
- 2 track system:
  - 1: experiment and practice skills (Sandbox)
    - Practice exercises
    - Side projects
    - Throwaway branch of production code
  - 2: seriously apply skills to real-world code (Production)
    - Refactor existing code
    - New features in existing product
    - Teaching others

## Sandbox

- Keep side project small at first
  - (what is the equivalent of hello world for web apps?
  - What is the equivalent of hello world for a twitter bot? etc
- Make side project silly
  - Allows for free exploration and pivoting if you find fun stuff to work on
- Use familiar skills + one new skill
- Expand the project as you will
  - What can be a stable foundation on which to explore?
  - What basic features can I expand on later?

## Production: Eliminate a bug today

- Reduce the number of global mutable variables by one
- Reduce the number of bad timelines by 1

## Production: Incrementally improve the design

- Extract one calculation from an action
- Convert one implicit input or output
- Replace one for loop

## Functional Languages with the most jobs

- Elixier, Kotlin, Swift, Scala, Rust

## Functional Languages by Platform

- Browser (Javascript)
- Elm, Clojure, Reason, Scala.js, Purescript

## Book recommendations

- Functional List Javascript
- Domain Modeling Made Functional
- Grokking Functional Programming
