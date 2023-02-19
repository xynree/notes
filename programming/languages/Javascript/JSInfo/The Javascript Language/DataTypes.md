# Js Info: Data Types

# Methods of Primitives

- Primitives: strings, number, bigint, bool, symbol, null, undef

Primitive as an Object

- Primitives should be simple and lightweight
- JS uses object wrappers that allows access to methods and properties on primitives.
- When a method of a primitive is needed, a special object is created and methods run on that object. Then the result is returned and temp object is destroyed.

# Numbers

- Two types of numbers:
    - Regular Numbers IEEE--754 "double pricison floating point numbers"
    - BigInt numbers for ints of arbitraty lenth

More Ways to Write a number
- Can use underscore as a separator : billiion = 1_000_000_000
- Can append with e' and specify zeroes count: billion = 1e9
    - e multiplies the number by 1 with given zero count
    - 1e3 === 1 * 1000
- Very small version with e
    - Can use: let mcs = 1e-6 <!-- six zeroes to the left from 1 -->
    - 1e-3 === 1 / 1000

Hex, Binary, and Octal Nums

- Hexadecimals for colors, encoding, etc.
    - Shorter syntax: 0x and number
        - 0xff // 255
- Binary and Octals supported with 0b and 0o
    - a = 0b11111111 // binary form of 255
    - b = 0o377 // octal form 255

toString(base) 
- returns a string rep of num in numeral wsystem with a given base
    - base vary from 2 to 36. Default 10
        - num = 255; alert(num.toString(16)) -> ff

Rounding
- Built in functions:
    - Math.floor rounds down
    - Math.ceil rounds up
    - Math.round rounds to nearest int
    - Math.trunc removes everything after decimal without rounding
- Rounding to n-th digit after decimal
    - Manually
    - toFixed(n) rounds to n digits after the point
        - num = 12.34 num.toFixed(1) -> 12.3

Imprecise Calculations
    - 64 bits to store a number: 52 bits used to store digits, 11 used to store position of decimal point, 1 bit for sign
    - If too big, will overflow storage and return Infinity.
    - 0.1 + 0.2 == 0.3 // FALSE
        - Number is stored in memory as binary - fractions are unending in their binary form
        - Instead, IEEE-754 rounds to the nearest possible number.
        - So be aware 0.1 + 0.2 is not exactly 0.3
    - How to solve?
        - use toFixed -> sum.toFixed(2)
        - Don't forget toFixed returns a string so use + to coerce to a number.'    - (+sum.toFixed(2))

Two Zeroes:
    - 0 and -0 : Sign represented by single bit, set or not set for any number including 0.

Tests: isFinite and isNan
    - Infinity and -Infinity - greater and less than anything
    - Nan - error
Special functions to check for them:
    - isNan(value) converts argument to num and tests it for being NaN
        - can't use argument === NaN as NaN does not equal anything.
    - is Finite(value) converts to  num and returns true if it's a regular number, not Nan/Infinity/-Infinity
Object.is - built in function to copare values. Works for NaN, 0 and -0 are different. In all other cases, Object.is(a,b) is the same as a ===b

parseInt and parseFloat
    - Conversion with + or Number() is strict and won't work for values like $100 or 100px
    -parseInt and parseFloat will "read" a number instead.
    - parseInt returns int, parseFloat returns float.
        - it will read number until it can't, then return you the answer
        - parseInt 100px -> 100
        - parseFloat 12.5em -> 12.5
        - parseFloat 12.3.4 -> 12.3
    - If no digits read, it will return NaN.

Other Math Functions
    - Math object has some math functions and constants
    - Math.random: Returns a random number from 0 to 1
    - Math.max & Math.min: Returns greatest/smallest from the argumentsen
    - Math.pow(n,power): Raises n to a given power


# Strings

Text data stored as UTF-16 Strings.

Quotes
- Single, Double, Backtick(embedding expressions, span multilines)
- Backtick Template Function: function`string`
    - func is called automatically, receives string and embedded expressions process them.

Special Characters
- multiline \n
- \', \" quotes
- \\ backslash, \t tab, \xXX unicode character with given hexadecimal:
    - \x7A -> z
    - \uXXXX unicode hexcode
    - u{X...XXX} - unicode UTF 32

- String.length : numberic property
- Accessing characters: [pos] or str.charAt(pos)
- Can iterate with for...of loop
- Immutable
- toUpperCase() toLowerCase()

Searching for substrings
- str.indexOf : finds index where match was found or -1 if not found
- can loop to find all occurences of something
- if using indexOf in an if statement, remember to set !== -1 instead of using it like a boolean.

Bitwise NOT
- ~ bitwise NOT
- converts num to 32 bit integer and reverses all bits. This gives -(n+1)
- so you can use (~str.indexOf(...)) for this instead of != -1.

Includes, starsWith, endsWith:
    - returns false if found
    - second argument is position to start searching from

Getting a substring
- substring, subst, slice
    - slice(start [,end]): returns part of string from start to but not including end. If no second argument, goes to end of string. Negative value is counted from end of string.
    - str.substring(start [,end]): Returns part of string between start and end. Neg arguments not supported.
    - str.substr(start [, length]): Returns part of string from tart with given length. Alows negative start

Comparing Strings
    - lowercase always greater than Outercase
    - Letters with weird marks are out of order

Correct Comparison
    - Browsers compare with ECMA-402
    - Uses str.localeCompare(str2) to compare strings in different languages.
        - returns -  if str is less than str2
        - returns + if str is greater than str2
        - returns 0 if equal

Weird characters
    - Emojis were added later and have a weird 2length composition. They only work with 2 variables together
    - Diacritical marks are made by appending special dot character after the affected letter.
    - str.normalize() to bring all strings to a "normal" form
        - More info in Unicode Standard.


# Array

Array Methods: pop/push, shift/unshift
- based on abstract data type called "stack"
    - LIFO
- push() adds elements to collection
- pop() removes most recently added element

Methods for ends of array
- pop: extracts and returns last elem of array
- push: append element to end of array
- shift: extracts and returns first elem of array
- unshift: adds element to beginning of array
- push and unshift can add multiple at once.

Internals
- What makes array different from other types of objects?
    - Elements are stored right after each other in memory area to make them faster
        - But this doesn't work if you:
            - add properties to arrays so they behave like objects
            - make holes
            - fill arrays in reverse order
Performance
    - push/pop run fast (end)
    - shift/unshift work slow (beginning)
        - because shift needs to remove 0 index, move everything over, then update length

Loops

- for...of loop
    - like a for each loop: for(let fruit of fruits) {}
- why not for... in loop?
    - for...in iterates over all properties, including proto
    - not optimized for arrs

Array length
- not the count of values, but instead the greatest index + 1.
- is also writeable
    - if decreased, array is truncated.
    - can clear array with arr.length = 0

new Array()
- rarely used - also if new Array(2) ----> arr.length 2

Multidimensial Arrays (Matrices)
- let matrix = [ [1,2,3], [4,5,6]]

Array.toString
- returns a comma-sparated list of elements
- Implement toString conversion for concatenation 

Don't Compare Arrays with ==
- == is never the same type as they are always different objects
- comparing [] with primitives  -> [] gets converted to empty string ''


# Array Methods

Add/Remove Items: .push, .pop, .shift, .unshift

splice: arr.splice(start[, deleteCount, eleme1, ..., elem N])
    - starts from index start, removes deleteCount and then inserts elem1...elemN at their place. Returns array of removed elements

slice: arr.slicce(start, end)

concat: arr.concat(arg1, arg2) - combines 2 arrays or elements

arr.forEach: run function ofn every elem of array

Searching In Array
- arr.indexOf, lastIndexOf, includes
    - indexOf(item, frmo) : looks for item starting from index from and returns the index, otherwise -1
    - arr.lastIndexOf(item, from) - same but from r -> l
    - arr.includes: looks fro item starting from from, returns truie if fouund          - correctly handles NaN
- find and findIdex
    - findIndex returns index where elemnt is found instead of elem itself. Returns -1 when nothing is found
- filter
-map
-sort (mutates)
    - sorted as strings by default
- reverse
    - reverses order of elements in array
- split and join
    - splits array by delimiter + limit on array length
    - arr.join creates a string of arr joined by delimitter
-reduce/reduceRight
    - reduceRight from right to left
- Array.isArray
- thisArg: for functions that require 'this'
    - arr.find(func, thisArg);
    - value of thisArg becomes the 'this' value for func.

# Iterables

- Iterable objects are a generalization of arrays
    - Anything that represents a collection of something - for...of is good syntax to make it loop

Symbol.iterator

```
let range = {
from: 1,
to: 5
};
```

- You can add a method to object named Symbol.iterator
- When for...of starts it calls Symbol.iterator once
    - Method must return an iterator - an object with the method 'next'
    - Then for...of works only with returned object
    - When for...of wants next value, it calls next() on object
    - Result of next() must have form {done: Bool, value: any} where done = true means iteration is finished. Otherwise value is next value

```
range[Symbol.iterator] = function() {

    return {
        current: this.from,
        last.this.to,

// next() is called on each iteration and returns {done, value} until done:true.
        next() {

            if (this.current <= this.last) {
            return {done: false, value: this.current++};
            else return {done: true};
            }}}}

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}

```

Why use iterables? Separation of concerns
    - Object itself does not have next() method
    - Instead, a different object is created by call to Symbol.iterator  and next() generates values
- Iterator object is separate from the object it iterates over.
- can use range itself as iterator to make code simple

```
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
```

## String is iterable
- For...of loops over string characters

## Calling an iterator erxplicity

- Can call str[Symbol.iterator](); directly for more control.

## Iterables and ARray-likes
- Iterables are objects that implement Symbol.iterator
- Array-likes are objects that have indexes and length, so they look like arrays

## Array.from

Array.from takes an iterable or array-like vaslue and makes a "real" Array from it.

arrayLike = {0:'', 1:'', length: 2}
let arr = Array.from(arrayLike)

Makes an arrays then can call array methods

# Map - Set

## Map

- Collection of keyed data items, but allows keys of any type
- Methods and Properties
    - new Map()
    - map.set(key, value)
    - map.get(key) : returns value by key
    - map.has(key) : bool if key exists
    - map.delete(key) : removes value by key
    - map.clear() : remove everything from map
    - map.size : current elem count
- keys are not converted to strings
    - map[key] not the right way to use Map
        - using it this way places limitations on Map letting it only use object methods
        - use map methods: set/get, etc.
- Can use objects as keys
- How Map compares keys
    - uses algorithm SameValueZero - same to strict equality === but NaN is equal to NaN.
- Chaining
    - map.set can be used like a promise chain because it returns the map itself
        - map.set('1', 'str1').set(1, 'num1').set(true, 'bool')

## Iteration Over Map
- 3 methods for looping over map:
    - map.keys() -> returns an iterable for keys
        - for (let vegetable of recipeMap.keys()) {
        vegetable // gives all keys}
    - map.values() -> iterable for values
        - for(let amount of recipeMap.values()) {
        amount --> gives all values }
    - map.entries() -> returns an iterable for entries: used by default in for...of
        - for (let entry of recipeMap;) {
        alert(entry) ---> key,value 
        }
- Map preserves insertion order
- Built in forEach method:
    - recipeMap.forEach((value, key, map) -=> {}

## Object.entries: Map from Object
- We can pass an array or other iterable with key/value pairs for initialization:

let map = new Map([
['1', 'str1'],
[1, 'num1'],
[true, 'bool1']
]);

creates a map with key value pairs set.

- Method Object.entries(obj) will return an array of key/value pairs for an object.

let obj = {
name="John",
age=30
};

let map = new Map(Object.entries(obj))
Object.entries returns array of key/value pairs : [ [name, john], [age, 30]]

# Object.fromEntries: Object from Map
- Given an array of [key,value] pairs, it creates an object from them.
- Get a plain object from Map


# Set

- special type collection: set of unique values
- Methods:
    - new Set(iterable): creates the set, if iterable object is provided copies values from it into a set
    - set.add(value): adds value, returns set itself
    - set.delete - removes value, returns true if value existed at moment of call, otherwise false
    - set.has(value)
    - set.clear()
    - set.size: elements count
- repeated calls of set.add(value) with same value don't do anything. 

## Iteration over Set
- loop over a set with for... of or use forEach
- callback function has 3 argumenets: (value, valueAgain, targetObject)
- same methods as Map are supported:
    - set.keys()
    - set.values()
    - set.entries()


# WeakMap and WeakSet

WeakMap doesn't prevent garbage collection of key objects

- WeakMap : keys must be object, not primitives
    - If there are no other references to the object key it will be removed from memory and map automatically

```
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null;

// john disappears, and weakmap has no keys
```

- WeakMap has no iteration or keys(), values(), entries() methods, only get, set, delete, has
- Use case?
    - Additional Data Storage
        - storingg data that should only exist while object is alive
        - third party code
        - when object is garbage collected, data will auto disappear as well
    - WeakMap auto cleans memory for us. After objects become unreachable, they are removed from memory
    - Caching
        - cache needs to be cleaned when objects are not needed any more - problem with map
        - WeakMap auto removes stuff from memory after object gets garbage collected.

WeakSet
- similar behavior: may only add objects to WeakSet, not primitives
- object exists in set while it is reachable from somewhere else
- supports add, has, delete but not size, keys() and no iterating

Basic function: WeakMap/WeakSet seres as aditional storage of data for objects that are managed at a different place.


# Destructuring

- Can put any iterable on right hand side, not only array
        - let [a,b,c] = 'abc' --> ['a', 'b', 'c']
- Assignables also work
        - let user = {}
            [user.name, user.surname] = "John Smith".split();
- Swap Variables
        - let guest = "JAne" let admin = "Pete";
            [guest, admin] = [admin, guest]
- Rest operator
        - let [name1, name2, ...rest ] = ['J', 'C', ....] 
            - rest gathers everything after the first two
- Default Values
        - absent values are considered undefined
        - If you want a default value to replace missing ones: 
            - let [name = "guest", surname= "suranme"] = []
Nested Destructuring
    - let { size: {width, height }, items: [item1, item2]} = options
Order of Arguments:
    - Can pass parameters as an object, then destructure them into variables in the function instead of multiple arguments

# Date and Time

- Built in Object: Date: stores date, time, provides methods
- new Date()
    - without arguments: creates a Date object for current date and time
- new Date(milliseconds) - Date object with time equal to milliseconds passed after unix time (timestamp)
- new Date(timestamp)
- new Date(datestring) -> parses date automatically
- new Date(year, month, date, hours, mins, secs, ms)
    - only first two are required, some parsing
- methods for date components:
    - getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds()
    - getDay() -> day of the week
- Date to number is converted to timestamp form.
- Don't need a Date object for measuring time. Date.now() returns current timestamp.
- Date.parse(str) -> reads date from string

# JSON methods, toJSON

- JSON.stringify() takes object and converts to string.
- JSON supports: objects, Arrays, strings, numbers, booleans,  null
- No circular references
- JSON stringify can also take a replacer that will be called for every key value pair.
- Third argument: number of spaces for pretty formatting
- Can make a custom toJSON() method to choose what to return as a string.
