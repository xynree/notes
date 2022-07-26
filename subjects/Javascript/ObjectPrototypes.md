# Object Prototypes

src: https://www.javascripttutorial.net/javascript-prototype/

- Object() is a function
    - it has an anonymous object referenced via prototype property
- Object.prototype has methods and properties like toString() and valueOf()
    - also has constrctor that references Object() function
    - console.log(Object.prototype.constructor === Object); // true
- every constructor function has a prototype under the hood.
    - function Person(name) {
        this.name = name;
    }
    - Person has a prototype with a constructor referencing Person().

- ** prototype linkage **


- ALL items in Javascript are of type Object().
- Primitive Types have a corresponding constructor function (new Number()). 


- new operator:
    - Creates a new empty object and assigns it to this

- why would you use prototype instead of constructor function?

    - method on prototypes are shared by all instances

- getting linkage:

    - Object.getPrototypeOf() or __proto__ or p1.constructor.prototype

- Shadowing

    - naming something the same name as another method further up the prototype chain
        - Object  has prototype join, but p1 which is an instance of Object defines a different method also called join. Join on the p1 gets run instead of the Object join method.


prior to es6:

function Person(name) { this.name = name}
Person.prototype.getName = function() { return this.name}
console.log(john.getName()) to access prototype.

now with class methods:
class Person{
constructor(name){
this.name=name;}
getName() {return this.name;}

- class declaration not hoisted
- code inside classes executes in strict mode


# Function() objects:

- All JS Functions are Function objects.
    - function(){}.construcotr === Function // true
- Function constructor vs function declarration
    - new Function() will always declare in the global scope

# Standard Objects:

- Object, Function, Boolean, Symbol
- Object
    - if Object.create(null) - can make object with no protototypes- Boolean
    - When would you use a Boolean object?
        - Can be used for typecasting : Boolean(bar) -> !!bar
        - new Boolean will allow you to assign arbitray values to a boolean - 
- primitives can't hold properties BUT if you define them with an object wrapper such as new Number() they can.
- to use primitive methods, Javascript will take the primitive and then convert it to an object in order to access prototype values. Then it returns the result.
    - let string = 'hello'
        - string.toUpperCase() -> JS creates a string Object and then gets the prototype method toUpperCase. then it returns back the result and removes the temp object.
