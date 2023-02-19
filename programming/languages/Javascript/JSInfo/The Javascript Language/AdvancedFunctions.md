# JSInfo: Advanced Working With Functions

## Recursion and Stack
- Recursion: simplify task by calling self. Ends on base case
- Identify by looking for data structures that replicate in parts
- Linked List
    - linked list elem is an object with 
        - `value`
        - `next` property referencing next linked list or `null` if end.
        - list.next [N times] to get to Nth elem
        - `prev` can be added to go back

Problem Tasks: 

#1
// for loop 
```js
function sumTo(n){
let sum=0;
    for (let i=1; i<=n; i++){
    sum+= i;
    }
return sum;
}
```
// recurse
```js
const sumTo = (n)=>{
    if (n === 1) return 1;
    return n + sumTo(n-1);
}
```
// formula
```js
const sumTo(n) {
    return n*(n+1)/2
}
```

#2
```js
const fact(n) => {
    if (n===1) return n;
    return n * fact(n-1);
}
```


## Rest Parameters and Spread

- function sumAll(...args){} will put all arguments into the args array
- rest parameters must be at the end
- arguments variable contains all arguments by index
    - arguments[0], arguments[1]
    - not an array, but iterable
    - Arrow functions do not have arguments

Spread Syntax
- Math.max(...arr)-> when ...arr is used in a function call, expands iterable object into a list of arguments
- Math.max(...arr) where arr = [1,2,3,4]
- can be combined with normal variables and used to merge arrays
- ...str spreads strings into each character
- For turning something into an array, Array.from is more universal - works on both array-likes and iterables

Copy an array/object

objCopy = { ...obj }
- Can use this instead of Object.assign();

## Variable scope, closure

Code blocks

- if variable is declared inside a code block {} they will only be visible inside that block

Nested Function
- functions inside functions
- functions have access to variables above it in nest, can be returned and used somewhere else with same outer variables.

Lexical Environment
- Variables
    - Everycode block has an associated object "Lexical Environment"
        - Environment Record: object that stores local variables as its properties
        - Reference to outer lexical environment (outer code)
    - Variable is a property on Environment Record object

    - When script starts, Lexical Environment is populated with all declared variables (first uninitialized)
    - let phrase -> undefined
    - phrase -> assigned a value
    - phrase -> value changed

- Functional Declarations
    - Function Declaration is instantly fully initialized, ready to use when Lexical Enviornment is created
    - (Hoisting)

- Inner and Outer Lexical Environment

    - all inner lexical environments have reference to the outer one.
    - inner environment is searched first, then searches outward

- Variables are updated in the lexical environments where they live.
- Calling counter(); multiple times will increment counter inside the variable.

Closure

- A function that remembers its outer variables and can access them
- Functions remember where they were cfreated useing a hidden [[ Environment]] property
- All functions in JS are closures and can access outer varialbes due to the [[Environment]] property.

Garbage Collection

- If there are nested functions still reachable after end of function, function stays un-garbaged.

# 4 - Var

- var is not block scoped and makes global variables unless it is defined in a code block inside a function.
- var tolerates redeclerations
- can be declared below their use (hoisted)
- cannot be assigned below their use.

IIFE's 

- emulates block level visibility
- makes an anonymous function with private variables
- declares a function expression and runs it immediately.

# 5 - Global Object

- Provides variables and functions available anywhere. Built into language or environment.
- In browser: window, in node: global. globalThis - standardized name for a global object
- in browser, global functions/variables declared with var become property of the global object.

- do not use this way , place directrly on global object id needed
- Used for polyfills
    - Used to test support of specific language feaatures to know when to add polyfill


# 6 - Function Object, NFE

- Functions are objects -- action objects

Name property:
- function name accessible through function.name property

Length property:
- returns number of parameters
- polymorphism - treating arguments differently depending on their type or length

Custom Properties:
- can add our own props
- properties are not variables.
- moving object value to a property makes it able to be reached from outside so external code can access.

Named Function Expression (NFE)

let sayHi = function func(){
}
- still a function expression
- what does adding a name do?
    - allows function to reference itself internally
        func("Calls itself again)
    - Not visible outside of function 
        func(Called outside function doesn't work)
- outer name sayHi has reference from outer environment so when it is renamed it doesn't work anymore.
- can use inner name to call because it is a local env instead.
- "Internal Function Name"
- Doesn't work for function declaration.


# 7 - "new Function" syntax

let func = new Function([args], functionBody);

- allows to turn any string into a function

let str = ...
let func = newFunction(str)
func(); -> returns str

- used for fetching code from servers, dynamically compiling functions, etc.

Closure

- new Function 's environment is set to the global environment variables and can't reference any outer local oneso- helps prevent errors - pass varialbes ad parameters to help us with our code..


# Scheduling: setTimeout & setInterval

- scheduling a call:
    - setTimeout allows to run a function once after an interval of time
    - setInterval runs function repeatedly at an interval

- supported in browsers and Node.js

- let timerId = setTimeout (function, interval, arguments)

Cancelling with clearTImeout

clearTimeout(timerId); will cancel execution.

setInterval: to cancel calls call clearInterval(timerId)

- can use them together to cancel calls after a certain amount of time

let timerId = setInterval(()=> alert('tick'), 1000);

setTimeout(()=> clearInterval(timerId), 5000


- can use nestedSetimeout to schedule calls differently
    - for ex: set a delay amount for interval and increment if a certian condition is met.
- - sets delay more precisely
- Garbage collection
    - prevents function from being garbage collected w/ an internal reference
    - stays in memory until clearInteral is called

- zero delay setTimeout
    - setTimeout(func)
- will run after the currently executing script is done.

# Decorators and Forwarding, Call/Apply

## Transparent caching

- decorator: special function that takes another function and alters its behavior
- if we call cachingDecorator for any function it will return the caching wrapper. Multiple functions can use the feature and we just need to apply cachingDecorator to them.
- caching decorator is reusable
- caching logic is separate
- combine multiple decorators if needed

## Func.Call for the contxt

- func.call(context, ...args) - calls function explicitly setting 'this'

- use ...arguments to pass down functions with call: func.call(this, ...arguments)

## Func.apply

- func.apply(context,args) - runs the func setting this = context and using array-like object args as list of arguments
- call takes a list of arguments, apply takes an array-like object
- apply is faster - internally optimized
- Call forwarding:
    - let wrapper = function() {
    return func.apply(this, arguments);}

## Borrowing a Method

- [].join.call(arguments)
    - method borrowing:
    - uses Array.prototype.join.call()

## Decorators and Function Properties

- if original function has properties like func.calledCount - decorated function will not provide them.
- special Proxy object needs to be called to keep access to function properties.

## Bind

- If function changes somewhere down the line, the (this) will also change.

- Solution: bind
- creates a fixed 'this' context that will not change.

- let say = user.say.bind(context)

## Partial Functions

- function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10

- partial functions fix an argument.
- used to not need to provide first argument every time or to make a function more specific.

## Going partial without context

- IF you want to fix the arguments but not the context
- function partial

function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

- a wrapper that calls func with same this as original, then gets arguments from partial call, then gives arguments to urrent wrapper.
- it already exists in _.partial


# Arrow Functions Revisited

- Arrow functions have no 'this'
- Arrow functions have no 'arguments' vairable
- Cannot be called as 'new'
- No 'super'
