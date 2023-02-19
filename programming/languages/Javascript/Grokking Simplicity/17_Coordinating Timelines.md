# 17 - Coordinating Timelines

- Timeline differences between waiting for responses in sequence vs. responses in parallel

## Waiting for both parallel callbacks

- Want fetches to come back in parallel, but want to wait for both before writing to the DOM

- Concurrency primitive for cutting diagrams
- Every timeline will call this function when it's done
- When last function calls it, calls a callback

```js
function Cut(num, callback){
  let finished = 0
  return () => {
    finished++
    if (finished === num)
    callback()
  }
}
```

## Using `Cut` in our code

1. What scope to store `Cut`
   - Need to call `done` at the end of each callback

## A primitive to call something just once

```js
const justOnce = () => {
  let alreadyCalled = false
  return ()=> {
    if (alreadyCalled) return;
    alreadyCalled = true;
    return action(a)
  }
}
```

- Singleton or monad principle

- Shares a variable between timelines

## Implicit bs explicit model of time

in JS:

- Sequential statements execute in sequential order
- Steps in 2 different timelines can occur in either order
- Asynchronous events are called in new timelines
- An action is executed as many times as you call it

## Summary

- Functional programmers build a new model of time to help solve problems they are working on
- Explicit models are built with first class values
- Build concurrency primitives to coordinate timelines
- Cutting is one way to coordinate between timelines
  