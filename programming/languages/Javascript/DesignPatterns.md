# Javascript: Patterns[^1]

Callbacks
    - a function that takes another function as an argument


## Creational Patterns

- Patterns used to create your code.

### Prototype/Class Pattern 

- Defines a blueprint for a type of object

    ```js
        class Car {
        constructor(doors, engine, color) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            }
        }

        const civic = new Car(4, 'V4', 'silver');
    ```

### Constructor Pattern

- Extends classes to add extra elements to specific class objects
- Good for making multiple subcategories of a class

```js
    class SUV extends Car {
      constructor(doors,engine,color){
       super(doors, engine, color);
        this.wheels = 4;
    }}

    const cx5 = new SUC(4, 'V8', 'red');
```

### Singleton

- Makes it only possible to create 1 instance of the class created. Uses a simple if/else to return just the same instance if attempted initialization >1 time.

    ```js
    let instance = null;

    class Car {
        constructor(doors, engine, color) {
          if (!instance) {
                this.doors = doors;
                this.engine = engine;
                this.color - color;
                instance = this;}
                else {
                return instance;}}}

    const civic = new Car (4, 'V6', 'grey');
    const honda = new Car (2, 'V8', 'red');

    console.log(civic, honda)

    // Will return only the civic instance twice - only makes one class at a time.
    ```

### Factory

- Makes it possible to easily create specific types of class objects
- Good for quickly creating objects in large applications 

```js
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }}

class carFactory {
    createCar(type) {
        switch(type) {
            case 'civic':
                return new Car(4, 'v6', 'grey')
            case 'honda':
                return new Car(2, 'v8', 'blue')

            }}}

const factory = new carFactory();
const myHonda = factory.createCar('honda');
```


### Abstract Factory

- 'Company' overseeing multiple Factories, makes it possible to create different types of objects with one factory.

```js

class carFactory {
    createCar(type) {
        switch(type) {
            case 'civic':
                return new Car(4, 'v6', 'grey')
            case 'honda':
                return new Car(2, 'v8', 'blue')
            }}}

class suvFactory {
    createCar(type) {
        switch(type) {
            case 'crx':
                return new Car(4, 'v6', 'grey')
            }}}



const carFactory = new carFactory();
const suvFactory = new suvFactory();

const autoManufacturer = (type, model) => {
    
    switch(type) {
        case 'car':
            return carFactory.createCar(model);
        case 'SUV':
            return suvFactory.createCar(model);
            }}

const cx5 = autoMatufacturer('suv', 'crx')
```



## Structural Patterns

- Focused on properly organizing code, organizing structure of larger application

### Module

- Encapsulating code, using import/export to bring in
- Organize code in pure functions (easier to debug)

```js
const calc = () => {
    return 4*3
    }

export default calc;

///

import calc from './calc';

const num = calc();
```


### Mixins

- 'Mix' functions and instances of classes after they have been created.
- Object.assign adds mixin to the class prototype.

```js
let carMixin = {
    revEngine() {
    console.log(`The ${this.engine} is vromm`)}}

Object.assign(Car.prototype, carMixin);

const myhonda = autoManufacturer('car', 'honda');

myhonda.revEngine();
```


### Facade

- Hide complexity away into smaller modules

### Flyweight

- Minimize recreating items twice (like Singleton)
- prevent making more items into memory

### Decorator

- "Decorate" code with classes /like a Mixin
- Extends classes to other classes

```js
function f() {
}

function () {
}

class C {
@f()
@g()
method()}

\\ in a class constructor:

class SUV{
constructor() {}
@carMixin
}
```


### Model/View/Controller (MVC)

- Organize modules in 3 categories:
    - Model = Data
    - View = Visuals
    - Controller = Logic
- All can access each other

### Model/View/Presenter (MVP)

- View doesn't access model - gets from Presenter
- Presenter = Logic
- Presenter pulls from model 
- Model <-> Presenter <-> View
- Popular in Android development

### Model View View-Model (MVVM/MVVC)

- Model(backend) <-> View Model(stateful) <-> View (stateless)
- React/Angular uses this approach
- Architecture held in stateless components (view) & stateful components (logic) - connected to Model to get backend logic



## Behavioral Patterns

- Focused on improving communication between objects

### Observer Pattern

- Maintain a list of objects based on events
- Publishes info about the object/get access to information based on observer

### State Pattern

- Hold state with all data/properties and changes update rendering
- Used strongly in React


### Chain of Responsibility

- Abstract Handler => Login()/Check()/Tax()/Ship/Payment
- Handler calls the process of functions + provides error messages etc.

### Iterator Pattern

- Loop through arrays with for loop/for each

### Strategy Pattern

- reuse code  to encapsulate by creating reusable classes, objects etc.

### Momento Pattern

- Provides temporary state to convert an object into a different form

### Mediator Pattern

- Pattern used to mediate relationships between objects:
    - Tower has function to request airplane positions
    - Airplane has a function to set traffic tower,
    - Can get positions of both airplane/tower with one request/position function

### Command Pattern

- Abstract/Encapsulate  functions within functions
- Each function is abstracted with each other but still used within code
- Good example is Redux





[^1]: https://www.linkedin.com/learning/javascript-patterns-2/what-are-creational-patterns?u=57685729


