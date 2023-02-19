# 16 - Sharing Resources between timelines

## Principles of working with timelines

- Fewer timelines are easier
- Shorter timelines are easier
- Sharing fewer resources is easier
- Coordinate when resources are shared
- Manipulate time as a first class concept

## Ex: Shopping cart still has bug

- Shared DOM resources: when timelines share DOM, potential problem

## We need to guarantee the otder of the DOM updates

- How to coordinate usage of DOM so updates always happen in the same order?
- Use a queue
  - Data structure where items are removed in the same order they are addec

## Queues in JS

- Use setTimeout to put everything in an explicit queue
  - Pull item off array
  - setTimeout to add job to event loop
  - start running worker after adding item
- Prevent a second timeline from running at the ssame time
  - Keep track of whether we are working
  - Prevent two from running at the same time
- Create a queue loop that will go through all items in the list

## Principle: Use real-world sharing as inspiration

- Making the queue reuseable
- Add callbacks that continue work of queue timeline
- Moving all DOM updates to a single timeline using a queue guarantees they cannot happen ouut of order

## Summary

- Timing issues are hard to reproduce. Use timeline diagrams to analyze and diagnose
- Look to real world for inspiration on sharing resources
- Build reuseable tools that help you share resources: Concurrency Primitives
- These usually take the form of higher-order functions or actioins
