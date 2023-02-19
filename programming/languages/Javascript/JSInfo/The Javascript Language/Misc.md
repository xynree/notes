# Miscellaneous Javascript

## Proxy and Reflect

- Proxy object wraps other objects and intercepts operations.

Syntax:

let proxy = new Proxy(target, handler)

target: object to wrap (anything including functions)
handler: proxy config using "traps" (methods to intercept operations)

```
let target = {};
let proxy = new Proxy(target, {}); // empty handler

proxy.test = 5; // writing to proxy (1)
alert(target.test); // 5, the property appeared in target!

alert(proxy.test); // 5, we can read it from proxy too (2)

for(let key in proxy) alert(key); // test, iteration works (3)
```

No traps: all operations on proxy forwarded to target.
    - proxy.test= sets value on target
    - poxy.test returns value from target
    - Iteration over proxy returns values from target
Proxy: wrapper around target
- Doesn't have its own properties. With empty handler it forwards operations to target.

- Proxies intercept interal method invocations
    - get,set,has,deleteProperty,apply,construct,defineProperty, etc

## Default value with "get" trap

- Most common traps: reading/writing properties
- handler should have a method get(target,property,receiver)
    - target: target object
    - property: prop name
    - receiver: if property is getter, receiver is the object used as this. Proxy object itself usually.

EX: wrap a regular array in proxy that traps reading and returns 0 instead of underfined:
```
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // default value
    }
  }
});

alert( numbers[1] ); // 1
alert( numbers[123] ); // 0 (no such item)
```

- After getting proxied, proxy should replace target object verywhere.

### Validation with "set" trap
- set trap triggers when a property is written.
set(target,property, value, receiver)
- returns true if setting successful and false otherwise.

EX: validated that new numbers added are numbers:
```
let numbers = [];

numbers = new Proxy(numbers, { // (*)
  set(target, prop, val) { // to intercept property writing
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers.push(1); // added successfully
numbers.push(2); // added successfully
alert("Length is: " + numbers.length); // 2

numbers.push("test"); // TypeError ('set' on proxy returned false)

alert("This line is never reached (error in the line above)");
```
- must return true to be successful or typeError.

### Iteration with "own Keys" and "getOwnProperyDescriptor"

```let user = { };

user = new Proxy(user, {
  ownKeys(target) { // called once to get a list of properties
    return ['a', 'b', 'c'];
  },

  getOwnPropertyDescriptor(target, prop) { // called for every property
    return {
      enumerable: true,
      configurable: true
      /* ...other flags, probable "value:..." */
    };
  }

});

alert( Object.keys(user) ); // a, b, c
```

- Proxies can be set to prevent any access to properties starting with _

get to throw an error when reading such property,
set to throw an error when writing,
deleteProperty to throw an error when deleting,
ownKeys to exclude properties starting with _ from for..in and methods like Object.keys.

- can also be used to wrap functions.
    - wrapper functions works but doesn't propery floward read/write etc
    - proxy is more powerful as it forwards everything to target object.

# Reflect
- built in object that simplifies creation fo Proxy.
- reflect methods are wrappers around internal methods
- allows to call operators as functions
    - every method trappable by Proxy has a method in reflect with same name and arguments
    - Reflect forwards operation to original object
- Proxy != target
- revocable proxy: proxy that can be disabled

# Eval: Run a Code String

- Allows execute a string of code
let result = eval(code)
let value = eval('1+1') // 2
let value = eval('let i=0; ++i') // 1

- Almost never used now
- change to either window.eval() or new Function()

# Currying

- Currying transforms function structure from: f(a,b,c) to f(a)(b)(c)
- Benefits
    - can generate parial functions, structure is still callable normally
    - keeps function callable normmally and also returns partial is args count is not enough.

# Reference Type
- how does user.hi() keep ('this')? -> '.' dot returns a value of special "Reference type:
    - base
    - name
    - strict (true if useSTrict)
    - when parantheses are called on reference type, receives full info about object and method
- Reference type is a special internal type - purpose to pass info from dot to parantheses
- so: this is only passed correctly if called with obj.method() or obj['method'](). func.bind() etc will fix this.

# BigInt
- special numeric type for integers of any length
- created by appending n to end of object literal or calling a BigInt(num)
- can be used like reg num but cannot be mixed with reg number
- must conver to Number() to use.
- num and BigInt comparisons work and they behave like numbers.
- no good polyfill
