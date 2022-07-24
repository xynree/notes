# Objects: The Basics

#  Objects

- 8 data types in JS: 7 are primitive and last is object
- {} + key value pair
- user.isAdmin = true ;  <!-- adds property -->
- delete user.age; <!-- deletes property -->
- last property can end with a 'trailing' comma - makes it easier to adjust properties

Square Brackets - work with variables or quoted strings. can be calculated at runtime or depend on input

Computed Properties
- let bag = {
 [fruit]: 5,
 };
 - [fruit] means property name should be taken from the variable fruit.
 - can use expressions inside sq brackets
    - let bag = { [fruit + 'Computers']: 5 }

- reserved words can be used as property names
- __proto__ must be set to an objects

Property Existence
- you can access any property, ones that don't exist return undefined.
- operator "in"
    - "key" in object
    - "age" in user <!-- returns boolean -->
- when would you use "in"? when you are storing undefined rather than auto assigning undefined.

For...In Loop
- for (key in object) {}
- Object ordering:
    - Integer properties are sorted, non0integers  are in creation order

# Object References And Copying

-  Objects -by reference while primitives- by value.
- Variables assigned to an object stores its address in memory , not object itself
- when object variables are copied ,reference copied but object is not duplicated

Cloning & Merging

- can loop over object to copy into a new object
- or use method Object.assign(target, [source,objects])
    - copies properties of all source objects into target dest.
- spread syntax will also clone

Nested Cloning
- deep cloning: use recursion or .cloneDeep(obj) from library Lodash

# Garbage Collection

Reachability/ Reachable: accessible or usable
- Inherently Reachable/cannot be deleted : "Roots"
    - currently executing function
    - other functions on current chain, variables, and param
    - global variables
    - internal
- Other values are reachable if it's reachable from a root by rreference or by a chain of references.
- Background process: Garbage Collector - monitors objects and removes those thatbecome unreacheable
- Only incoming references make object reachable
    - object can reference reachable object but if a reachable object does not reference it, it will be deleted

Internal Algorithms: 'mark-and-sweep'
    - GC takes roots and marks them
    - GC visits and marks all references from them
    - GC visits marks and marks their references, excluding visited objects
    - Until all references are visited.
    - All objects except marked are removed. 

JS engine Optimization
    - Generational collection: split between old and new objects. Ones that are old are examined less often
    - Splits garbage collection into pieces
    - Runs only while CPU is idle

# Object Methods: "this"

- function that is a property of object called 'method'
- OOP books: “Design Patterns: Elements of Reusable Object-Oriented Software” by E. Gamma, R. Helm, R. Johnson, J. Vissides or “Object-Oriented Analysis and Design with Applications” by G. Booch
- Method shorthand:
    - user = { sayHi() {}} rather than user = { sayHi : function() {}}
- "this" in methods
    - "this" represents the object used to call the method
- Without an object:
    - strict mode: "this" is undefined, else it is global object
- Arrow functions have no "This". this uses outer context.

# Constructor, Operator "New"

Conventions:
    - executed with 'new'
    - named with capital letter first
- What happens when executed with new?
    - New empty object created and assigned to 'this'.
    - Function body executes
    - Value of 'this' is returned.

- Constructor mode test: new.target
    - New.target will return the function if called with new, otherise is undefined.

Return from constructors

    - Rules: if return is called with an object, the object is returned instead of this.
    - if return is called with a primitive, it's ignored
    - return with an object returns that object, or it returns 'This'
    - Usually constructors don't have a return statement

# Optional Chaining '?.'

Non-existing Property Problem
- Was added to the language to prevent property names being duplicated in code in instances where user wants to check if a property exists before performing actions.

__Optional Chaining__
- ?. stops evaluation if the value before ?. is undefined or null and returns undefined.
    - value?. prop: works as value.prop if value exists, otherwise it returns undefined.
- only use where it's ok that something doesn't exist.
    - user?.address?.street
- the variable before ?. must be declared - let/const/var user

__Short-circuiting__
- ?. immediatley stops evaluation if left part doesn't exist. if further function calls after it, they don't occur.

__?.(), ?.[]__
- Also works with functions and square brackets.
    - ?.() is used to call a function that may not exist.
        - userAdmin.admin?.();
    - ?.[] is for declaring object values with square brackets.
- Can be used with delete
    - delete user?.name // delete user.name if user exists.
- Use for reading and deleting but not wriing.
    - user?.name = "john" // error, doesn't work.

# Symbol Type

- Object property keys are either of string type or symbol type

Symbol = Unique Identifier
- let id = Symbol('symbolnamehere');
- Symbols are guaranteed to be unique even if they have the same description.
- Symbols do not autoconvert to string.
    - Call toString() to get the string or symbol.description to show description.

Hiden Properties

- Allow creation of hidden properties that no other part of code acan access/oberwrite.
- Ex: Using third party code, you could add properties using symbols instead of id so that other people adding "id" value won't conflict with yours.

Symbols in an Object Literal:

let id = Symbol('id');

let user = {
name: "John"
[id]: 123
}

- Use square brackets to take value from variable id.

Symbols are skipped by a For-In Loop
- Object.keys also ignores them
- Object assign copies both strings and symbols.

Global Symbols Registry
- To use a global symbol: Symbol.for(key)
- Application wide symbol to be used everywhere

Symbol.keyFor
- Returns a name by a global symbol
    - Symbol.keyFor(sym) // name
- Only works for global symbols
    - localSymbol.description will work though if you need

System Symbols
- Well-known symbols table:
- Symbol.toPrimitive, Symbol.iterator... etc

- Symbols are a primitive type for unique id's
- Symbols always have different values even if they have the same name
- Used for hiding object properties
- System symbols are accessed with Symbol.* to alter built in behaviors.

# Object to Primitive Conversion

- When objects are compared or added/subtracted/etc, objects are converted to primitives.

Conversion Rules

- all objects are true
- Numeric conversion - when math functions happen
- String conversion - when objects are outputted - alert(obj)
- 3 types of conversion "Hints"
    - string: alert(), object as property key
    - number: Number(obj), +obj (unary plus), user1 > user2
    - default: operator not sure. default converts the same as "number"
- How does it convert?
    1. Call obj[Symbol.toPrimitive]
    2. Otherwise if hint is "string"
        - try obj.toString and obj.valueOf()
    3. Otherwise "number" or "default
        - obj. valueOf() and obj.toString()

Symbol.toPrimitive

    - if obj[Symbol.toPrimitive] is set up  it will return this function
        - function(hint) {
        return primitive value}

If no Symbol.toPrimitive JS find methods toString() and valueOf()
    - toString() priority for string conversions
    - valueOf() priority for number/default conversions

default toString & valueOf methods
- toString returns "[object Object]"
- valueOf returns the object itself / ignored
- if you set toString() to a function it will handle all primitive converstions including valueOf();

A Conversion can return any primitive type
- returned type doesn't always equal the hint type
- if toString or valueOf returns an object, value is ignored. Symbol.toPrimitive must return a primitive.

Furthur Conversions
    - object first converted to primitive
    - if primitive isn't of right type, converted again.
