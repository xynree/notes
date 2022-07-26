# Review Explanations


## Objects: Basics Review

- Objects have key/value pairs where keys must be [string] or [symbol] type, and value can be any type
- 'delete' keyword will delete a property
- Square brackets  will enable use of computed properties as key names for an object. 
- Property shorthand :: 
    - makeUser(name,age) {
    return {
    name,
    age
    } --> same as name:name, age:age

- 'in' operator to check if exists. Undefined is returned if it does not exist.
- for...in loop loops over all keys of an object
    - for... in loop to declare looping variable inside the loop
- Integer properties are ordered while others are in creation order
- Objects by reference, copy/comparing don't work. Instead make a clone with Object.assign. For nested cloning, look up Clone Deep method.

- Arrow functions don't have their own "this". It's taken from outer function

- 'new' operator - new empty object created and assigned to 'this'. Function body executes. Returns 'this'.

- Optional chaining operator ? to run things only  if they exist, return undefined instead of code-breaking error
    - user?.address

- Symbol type for hidden properties
    - don't get called by for...in loop
    - can call symbols in a global registry
    - for unique identifiers, can name several properties the same symbol on the same object

- When objects get converted to primitives, JS engine sends "hints" - string, number, other  - that determine whether object calls toString() or valueOf() first.
    - first Symbol.toPrimitive is called - this can be used to specify this behavior
    - toString() and valueOf() can also be adjusted to set default primitive conversion behavior.
    - toString() -> [OBject object]
    - valueOf() -> returns this aka does nothing

# Data Types Review

- Prmitive Methods: A temp primitive object is called and methods are done on this object,then result is given back to you but temporary object is removed.

- Very large numbers - use e
- Very small nums - use -e
- Many methods to call hex, base, octal, binary, etc.
- Imprecise calculations because of the problem of converting fractions to binary, so when doing calculations call toFixed() to truncate length of variable.
- NaN and Infinity are numeric values - type number. Special functions to check for them exist.

- Strings are immutable
- Substring methods: indeXof searchs for string starting from pos and returns position matched or -1 if nothing found
- If you use indexOf and want result to be a boolean type value, can use the bitwise NOT trick.  ~n = -(n+1). This converts -1 return to 0 which becomes FALSE on comparison.
~str.indexOf("..")
- Other method - includes, startsWith, endsWith, slice, splice, etc.

- Arrays: push/pop from end are much faster than shift/unshift from beginning
- Array loop: for...of . Use this instead of object for...in loop
- length computes greatest numeric index + 1
- toString and binary + converstion - goes to string
- == doesn't work to compare arrays. use item by item loop.

Other array methods: forEach, indexOf,lastIndexOf, isArray, thisArg

Iterables: [Symbol.iterator] to make an object iterable and perform a function you want.
- Symbol.iterator has particular syntax, running next() function each turn until an object with {done:true} is returned.
- Allowss to run for...of loop.
- OBJECTS: FOR/IN  ARRAYS/OTHER ITERATORS: FOR/OF
- String is iterable with for...of
- Array-likes are objects that have indexes and length but they don't usually have array methods. They can often convert to arrays with ARray.from

Map: Collection of keyed data where keys can be any type
- use different functions: new Map(), map.set, map.has, map.delete, map.clear, etc.
- To iterate: map.keys(), map.values() and map.entries(). use for...of.
- For Each is faster than For...Of but slower than a regular for loop.
- Can be initialize using a passed in object, and you can get a computed object frmo a map with Object.fromEntries.
- Set: similar idea for arrays
- Sets also can use for...of OR forEach loop.

- WeakMap & WeakSet: Good for temporary secondary data storage. WeakMap and WeakSet values are removed when references to their properties are removed, making it good for caching and periodic removal of data. No looping functions possible but not usually used for that purpose.

- all data structures such as array, map, set, object have methods: .keys, .values, .entries
- Objects lack some of the methods available for arrays but you can convert your object into an array using OBject.entries(obj) to perform operations.
