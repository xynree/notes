# 10 - First Class Functions: Part 1

### Code Smell: Implicit Argument in Function Name

- Aspects of code that could be better expressedc as first class values
  - If ou are referring to a vlauei n the body of function, and that value is named in function name, smell applies
- Characteristics
  - There are very similar function implementations
  - Name of function indicates difference in implementation

### Refactoring: Express implicit argument'

- How to turn implicit argument in fn name into an actual argument?

1. Identify implicit argument
2. Add explicit argument
3. Use new argument in body in place of hard-coded value
4. Update calling code

### Refactoring: Replace body with callback

- Replace body of code with a callback, then pass in the behavior in a first class function
- Powerful way to create higher-order functions
  
1. Id the before, body, and after sections
2. Extract whole thing into function
3. Extract body section into a function and passed as arg to that function

## Example: Making Explicit Implicit

- 4 functions: `setPriceByName`, `setShippingByName`, `setQuantityBName`, `setTaxByName`
  - Very similar implementations
  - Name of fn indicates the difference in implementation
- Refactoring by Expressing Implicit Argument
  - `setFieldByName(cart, name, field, value)`
  - Pass in name to arg
- Made field name a first class value

## Recognize what is an what isn't first class

- Fn are first class, meaning you can pass to a fn, return from a function, store in a variable, then make it an item in an array or value in an object
- Things that are not first class in JS: operators like `+`
  
## First class functions can replace any syntax

- example, you can make the `+` operator first class by passing it to a function.

## Example: Replace Body with Callback

- To add logging to any function:

```
fn withLog(f) {
  try {
    f();
  } catch (err) {
    console.log(err)
  }
}

withLogging(saveUserData)
```

- Higher order functions let us set up contexts for code defined elsewhere. Context becomes reuseable.

## Summary

- First class values = anything that can be stored in a variable, passed as arg, and returned from a function
- Many parts of a lang are not first class, but we can wrapa those parts in fns that do the same thing to make them first class
- Some langs have first class fns that let you treat fns are first class values
- Higher order fns are fns that take other fns as args.
  - Let us abstract over varying behavior
- Implicit arguemnt in fn name = code smell where difference between fns is named in the fn name
  - Express Implicit Argument = makes arguments first class instead of an inacessible part of function mae
- We can replace body with callback to abstract over behavior.
