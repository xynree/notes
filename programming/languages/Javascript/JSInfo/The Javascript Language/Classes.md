# JS Info - Classes

## Class Basic Syntax


```js:basic_syntax
    class MyClass {
    constructor(){...}
    method1() {...}
    method2() {...}
```
- new MyClass() creates a new object with listed methods.
- new automatically calls constructor()

- when newUser("John") called:
    - new obj created
    - constructor runs with given argument and assigns it
    - then can call object methods

__What is a class?__

- a kind of function
    - creates a function named User that becomes the result of the class declaration
    - function code is taken from constructor mtethod
    - stores class methods in prototype

- Syntactic sugar or not?

```js:Class-User
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// class is a function
alert(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
```

```js:PureFunctions-User
// 1. Create constructor function
function User(name) {
  this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function() {
  alert(this.name);
};

// Usage:
let user = new User("John");
user.sayHi();
```

- Differences in the two:
    1. Labeled [[IsClassConstructor]]:true internally. Checks for that in a number of places:
        - Must be called with 'new'
        - starts with 'class'
    2. Class methods arenon-enumerable
    3. Classes always use strict

__Class Expression__

- Classes can be defined insie another expression:

```js:Class_Expression
let User = class{
    sayHi(){
        alert('Hello')
    }
}
```
- May have a name visible inside a class only
```js:Named_Class_Expression
let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass name is visible only inside the class
  }
};

new User().sayHi(); // works, shows MyClass definition

alert(MyClass); // error, MyClass name isn't visible outside of the class
```
- Classes may be made dynamically:
```js:returns_a_class
function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

// Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello
```

__Getters/Setters__

- may include getters/setters, computed props, etc.
```js:Class_getter/setter
class User {

  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let user = new User("John");
alert(user.name); // John

user = new User(""); // Name is too short.
```
- Works by creating getters and setters in User.prototype

__Class Fields__

- Classes used to only have methods, Class fields allows to add any properties.

```js:Class_properties
class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!
```
- These are set on the objects, not on prototype.

Bound Methods With Class Fields
```js:bound_w_arrow_func
class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // hello
```
___
## Class Inheritance

A way for one class to extend another class.
Creates new functionality on top of existing ones.

__The 'extends' keyword__

```js:extends
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
```
- Object of `Rabbit` class has access to both `Rabbit` methods as well as `Animal` methods 
- Internally: sets `Rabbit.prototype.[[Prototype]]` to `Animal.prototype`

- Overriding a method
```js:override
class Rabbit extends Animal {
  stop() {
    // ...now this will be used for rabbit.stop()
    // instead of stop() from class Animal
  }
}
```
- to just build on top of a parent method or tweak functionality, use `super` keywords:
```js:super
  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
```
- Arrow functions have no `super`.If called, it is taken from the outer function.

- Constructors in inheriting classes must call super() and do it before using `this`
    - Why?
        - derived constructors have a special internal label 'derived'
            - changes behavior with `new`
                - when reg function executed, it creates an empty object and assigns it to `this`
                - for derived constructor, it expects parent constructßr to do this job.
            - call `super` in order to execute its base constructor, otherwise, the object for `this` will not get created.

```js:setup_derived_constructor

class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
```
__`Super` Details__

 
- You may think that you could do the same as 'super' with a method such as `longEar.__proto__eat.call(this)`, but if the chain is longer than 1 parent long, it will loop endlessly as the vßalue of `this` will not be correct.
 
- Instead JS creates a `[[HomeObject]]` that allows methods to remember objects
- This means methods are not 'free' - if super is copied it will take method from original `[[HomeObject]]`

- `[[HomeObject]]` Will only be created for methods, not function properties:
```js:super_error
let animal = {
  eat: function() { // intentionally writing like this instead of eat() {...
    // ...
  }
};

let rabbit = {
  __proto__: animal,
  eat: function() {
    super.eat();
  }
};

rabbit.eat();  // Error calling super (because there's no [[HomeObject]])
```
___

## Static Properites and Methods

- Methods assigned as a property directly are called static.
- can be called directly or assigned with `static`

```js:static_method
class User {
  static staticMethod() {
    alert(this === User);
  }
}
```
- Used to implement functions that belong to the class but not a particular object of it

- Static properties are also possible, prepended by static. Same as direect assignment to the class
- Are inherited
___

## Private and protected properties and methods
Boundaries should be created between internal interface and external one.

__Internal and External Interface__

Props and methods are split into two groups:
- Internal interface: Methods/Props accessible from other methods of class but not from the outside
- External interface: Methods/Props, accessible from outside the class.

2 types of object fields: public/private
- Public: accessible from anywhere
- Private: accessible only from inside the class

Other languages also have 'protected' fields: accessible from inside a class and those extending it

__Example: Coffee Machine Class__

### Protected Props
- Protected props usually prefixed with __.
```js:protected_waterAmount
class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10
```
- Now water amount has a control - anything under 0 is impossible

### Read-Only Props
- property set at creation time and then never modified
- There is a getter but no setter.
```js:read_only
class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

coffeeMachine.power = 25; // Error (no setter)
```

__Note__: Use `get...set...` functions to accept multiple arguments
```js:get/set
class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) value = 0;
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

new CoffeeMachine().setWaterAmount(100);
```
__Note__: Protected fields are inherited, unlike private ones.

### Private #waterLimit

- This is a recent JS addition and requires polyfilling

Privates should start with #. Only accessible from inside the class.
```js:private#
class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }

}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
coffeeMachine.#fixWaterAmount(123); // Error
coffeeMachine.#waterLimit = 1000; // Error
```

They do not conflict with public fields. Can have both `#waterAmount` and `waterAmount` at the same time.
Common pattern: make a protected field an accessor for a private field.

---

## Extending Built-In Classes

Classes like Array, Map and others are extendable.
- build in methods like filter, map, etc. will used inherited type PowerArray (extended from arr).
- Under the hood this uses a build in method `[Symbol.species]` that you can adjust to return `Array` or `PowerArray` if you'd like.
### No static inheritance in built-in objs
- Buit in classes do not inherit statics from each other.
- Only prototypes inherite from each other, not static methods, unlike extends.

---

## Class checking: 'instanceof'
- instanceof operators allows to check whether an object belongs to a certain class
- can be used for polymorphic function (treats arguments differently depending on type)

### instanceof operator
    obj instanceof Class
returns `true` if `obj` belongs to the `Class` or a class inheriting from it. 
```js
class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
alert( rabbit instanceof Rabbit ); // true
```

- Custom logic can be set in the static method [Symbol.hasInstance]
    - if there's a method in Symbol.hasInstance, then call it. Should return `bool`.
    - Otherwise, standard logic: instanceOf checks whether Class.prototype is equal to one of the prototypes in the obj prototype chain
- This checks the prototype chain, so if prottype is adjusted instanceOf will not work properly.
__Bonus: toString__
- Object.prototype.toString makes [object Object] when plain objects are converted to string.
- toString object can be extracted and executed in any other value
```js:toString_arr
// copy toString method into a variable for convenience
let objectToString = Object.prototype.toString;

// what type is this?
let arr = [];

alert( objectToString.call(arr) ); // [object Array]
```
- this can be used as an extended 'typeof' that works for primitives and also builtin objects.
    - {}.toString.call instead of instanceof will give you back a string of the type instead of just checking.

---

## Mixins
Class containing methods than can be use dby other classes without a need to inherit
- use Object.assign to set mixins

```js:object_assign
// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
```

### EventMixin

- Mixin that will easily add event-related functions to any class/object
    - will provide .trigger method to generate an event
    - .on will add handler function. called when event triggers and get arguments from .trigger call
    - .off will remove handler listener

- After adding mixin, an object will be able to generate a custom event when something happens.

```js:Mixin_Code
let eventMixin = {
  /**
   * Subscribe to event, usage:
   *  menu.on('select', function(item) { ... }
  */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * Cancel the subscription, usage:
   *  menu.off('select', handler)
   */
  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * Generate an event with the given name and data
   *  this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) {
      return; // no handlers for that event name
    }

    // call the handlers
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};
```

```js:Usage
// Make a class
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
// Add the mixin with event-related methods
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// add a handler, to be called on selection:
menu.on("select", value => alert(`Value selected: ${value}`));

// triggers the event => the handler above runs and shows:
// Value selected: 123
menu.choose("123");
```

now we can listen for a selection with menu.on(..)
- makes it easy to add behavior to as many classes as we'd like.