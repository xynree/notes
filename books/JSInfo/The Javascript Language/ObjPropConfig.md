# Property Flags and Descriptors

# Property Flag

- Object props have 3 attributes (flags) besides a value. Default is TRUE for all.
    - writable (T - changeable, F - read-only)
    - enumerable (Listed in loops?)
    - configurable (T - deleteable, modifiable, F- not)

- Object.getOwnPropertyDescriptor(obj, propertyName) gets full info about a property descripter.

- Object.defineProperty(obj, propName, descriptor)
used to change the flags. 

```js:adjust_prop_flags
Object.getOwnPropertyDescriptor(myObj, 'name')
Object.defineProperty(myObj, 'name', {
  writable: false
})

```
- if exists, updates, otherwise creates a property with the given flags.
- non configurable -> cannot be changed back.
    - configurable: false prevents changes of prop flags and deletion, but can change its value.

- Object.defineProperties(obj, {
name { value: "John", writable: false },
surname:  {value: "Smith", writable: false }})
  - to set many properties at once.

- Object.getOwn PropertyDescriptors(obj) to get all descriptors at once.

- Property descriptors are for properties but there are also methods for the whole object:
    - Object.preventExtensions, OPbject.seal, Object.freeze
     
## Summary:

- Descriptors/Property flags are "invisible" keys on all object properties.
- `writeable`: writeable/nonwriteable data
  `enumerable`: adjusts ability to loop through data
  `configurable`: and adjusts ability to configure.
- Normally these are all set `true`
- Methods like this also exist for whole object, not just properties.
- Use `getOwnPropertyDescriptor` and `defineProperty` to adjust/view Descriptors.



# Property Getters and Setters

2 kinds of properties:
- Data : all properties used up to this point
- Accessor : functions that execute on getting and setting a value (but look like reg properties) . (get/set)

```js:get_set
let obj = {
get propName() {
// getter, called on getting obj.propName
}

set propName(value) {
// setter, code executed on setting obj.propName = value}
}
```

- getter works with propName is read, setter when assigned

- Must add a setter accessor to run:

```js:set
set fullName(value) {
[this.name, this.surname] = value.split(" ");
}
```

```js
let obj = {
  _name : 'DefaultName'
  set name(val)  {
    this._name_ = val.split(' ')
  }
  get name(val){
    return this._name;
  }
}

obj.name = 'Jenna'
console.log(obj.name)

```

* get/set are properties set ON this object literal.
* getter/setter works differently for class objects etc.

## Accessor Descriptors

- Descriptors for accessor properties
- no 'value' or 'writable' but there are get and set functions
    - get: works when prop is read
    - set: called when prop is set.
    - enumerable, configurable

## Smarter getters / setters

- Can be used as wrappers over properties to gain more control over operations.
- .set can be used to adjust value of an object property before saving it into accessor.

## Using for compatibility

- allow to 'take over' a regular data property and replace with a getter/setter to tweak its behavior

```js:replace_reg_data_property
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday is available
alert( john.age );      // ...as well as the age
```

## Summary:

- Getters and setters are special types of accessor properties for objects
- Getters and setters can be placed on objects to affect behavior when a property is set or retrieved.
- This is usually used to extend functionality, add validation, or separate public and private properties.
- Descriptor flags work differently for get/set