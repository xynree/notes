# Welcome to Grokking Simplicity

## What is functional programming?

- 1. A programming paradigm characterized by the use of mathematical functions and avoidance of side effects
- 2. Programming style that uses only pure functions without side effects

- __Side effects__: anything a function does other than returning a value
  - Can be problematic bc side effect happens every time your function is called
  - If return value is needed and not side effects, things happen unintentionally
- __Pure functions__: Functions that depend only on their arguments and don't have any side effects "Mathematical functions". Easier to understand and control

## The problems with the definition for practical use

1. FP Needs side effects
2. FP is good at side effects
3. FP is practical

## Functional programming distinctions

- Actions depend on when they are called or how many times they are called, calculations/data do not.
- Calculations/Data do not depend on how many times that they are used
- Calculations can be executed, data cannot. Data is inert

## Functional programmers see actions, calculations, and data

- How does a functional programmer see what's going on? Example:
  
1. User makrs a task as completed: triggers UI event (Action)
2. Client sends a message to the server: Sending message (Action), Message(Data)
3. Server Receives message (Action)
4. Server makes a change to database (Action)
5. Server makes decision of who o notify (Calculation, same inputs = same decision)
6. Server sends an email notification (Action)

## 3 Categorizations of Code in FP

1. Actions

- Anything that depends on when it is run, or how many times it is run.
- FP Tools: Ways to safely change sate over time, ways to guarantee ordering, tools to ensure actions happen exactly one

2. Calculations

- Computations from input to output. Always give same output when you give same input
- Call them anytime, anywhere, and won't affect anything outside of them. Easy to test
- FP Tools: Static analysis, Math tools, Testing strategies

3. Data

- Recorded facts about events, well understood properties
- FP Tools: Ways to organize data for efficient access, disciplines to keep records long term, principles for capturing what is important with data

## How does distinguishing categories help us?

- FP has been gainint popularity because we need a way of looking at software that takes into account multiple pieces of software communicating over networks
- Problem is in actions, moving code out of actions into calculations makes you able to give more attentions to actions that need it the most

## Why is this book different from other FP books?

- Practical
- Real world scenarios
- Software Design
- Language Agnostic

## What is functional thinking?

- Set of skills and ideas that functional programmers use
- Book guides you through 2 ideas that are very important:
  - Distinguishing actions, calculations, and data
    - Learn to identify the category of any piece of code, refactor actions into calculations, make actions easier to work with
    - Identifying layers in our code can help make it maintainable, testable, and reusable
  - Using first class abstractions
    - Functional programmers find procedueres and reuse them by passing in callbacks
    - Reactive architecture, onion architecture

## Conclusion

- Functional programming is a large, rich field of techniques and principles
- Starts with distinction between actions, calculations, and data
- Book teaches the practical, language agnostic side of FP
