# 15 - Isolating Timelines

- using timeline diagrams to represent sequences of actions over time
- Timeline diagram shows what happens over time
  - Actions can interact and interfere with each other
- Fundamentals of timeline diagrams
  - If actions occur in order, in same timeline
  - If 2 actions happen at same time or out of order, they belong in separate timelines
- Actions run either sequentially or in parallel
- Sequential actions go in one timeline
- Parallel actions go in multiple timelines side-by-side

## Asynchronous calls require new timelines

- Different languages have different threading models
  - Javacript has one threat. Asynchronous call creates a new timeline
  - Java, python, ruby, C allow multi-threading. Every new thread creates a new timeline
  - Erlang/Elixier allows many different processes to run simultaneously. Each process separate timeline but communicates with messages. Don't share memory with each other

## Timeline diagrams capture 2 kinds of code

- Code that can be interleaved - any amount of time can pass between 2 actions
- Cannot be interleaved - two actions run after the other, and something is making it so nothing can be run inbetween

## Timeline diagrams capture unceratin ordering of parallel code

- MAny possible orderings of parallel code

## Principles of Timelines

- Fewer timelines are easier
- Shorter timelines are easier
- Sharing fewer resources is easier
- Coordinate when resources are shared
- Manipulate time as a first-class concept

## Timeline diagrams side-by-side can reveal problems

- Two timelines, one for each click, can interleave with each other
- Two slow clicks = correct
- Two fast clicks = wrong

## Shared resources are a source of bugs

- By id'ing and removing resources, code can work better
- Timelines that don't share resources can be understood and executed in isolutation
