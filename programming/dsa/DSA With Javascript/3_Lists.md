# A List ADT

- ADT: List abstract data type
- Ordered sequence of data
- List definition: 
  - ordered sequence of data, each item called elemnt
  - any data type
  - no elements = empty. num elements = length
  - listSize holds number of elements
  - can be appended to end or inserted  after an element or at beginning of list
  - can be deleted with remove
  - clear can remove all elements
  - elements displayed using a toString() that displays all elems or wth a `getElement()` which displayes value of current element
  - properties to describe location: `front`,`end`, `next()` used to move from one element to next, `prev()` to move backwards.
  - `moveTo(n)` to jump to specified position, `currPos` indicates current index of list

# A List Class Implementation

```js:List_Class

this.listSize = 0;
   this.pos = 0;
   this.dataStore = []; // initializes an empty array to store list elements
   this.clear = clear;
   this.find = find;
   this.toString = toString;
   this.insert = insert;
   this.append = append;
   this.remove = remove;
   this.front = front;
   this.end = end;
   this.prev = prev;
   this.next = next;
   this.length = length;
   this.currPos = currPos;
   this.moveTo = moveTo;
   this.getElement = getElement;
   this.length = length;
   this.contains = contains;”
```

__Adding__
```js:append
function append(element) {
  this.data[this.listSize++] = element;
}
```
- After appending, listSize is also incremented by 1 and set to element.

__Removing__
  - Needs to first find element and then remove it and adjust array to fill hole
    - can be simplified with `splice`

```js:find
function find(element) {
  for(let i=0; i<this.data.length; ++i){
    if (this.data[i] == element) return i;
  }
  return -1
}
```
```js:remove
function remove(element){
  let foundAt = this.find(element)
  if (~ foundAt) {
    this.data.splice(foundAt, 1);
    listSize--;
    return true;
  }
  return false;
}
```
- Uses `this.find()` to get index of object to remove.
- Then splices `data` at that place.
- After mutation, `listSize` is decremented by 1
- Returns true if removed and false if otherwise

__Length__
- Returns number of elements in a list

__toString__
- Reads from data

__Inserting Into List__

```js:Insert
function insert(elem, after) {
  let insertPos = this.find(after);
  if(~insertPos){
    this.data.splice(insertPos+1,0,element);
    this.listSize++;
    return true;
  }
  return false;
}
```
- Uses `find` to get index by finding element specified in `after`. Then `splice` inserts new element and `listSize` gets incremented.

__Clear: Removing All Elements From List__

```js
function clear() {
  delete this.data;
  this.data = [];
  this.listSize = this.pos = 0
}
```
- uses `delete` to remove data arra, and then recreates an empty array
- sets `listSize` and `pos` to 0

__Contains: Determine if Value is in List__
- returns bool if element is found in list

__Traversing a List__
```js:Traversing

function front(){
  this.pos = 0;
}

function end() {
  this.pos = this.listSize -1;
}

function prev(){
  if (this.pos>0){
    --this.pos;
  }
}

function next(){
  if (this.pos < this.listSize-1){
    this.pos++
}

function currPos(){
  return this.pos
}

function moveTo(pos){
  this.pos = pos
}
function getElement(){
  return this.data[this.pos]
}
```

__Iterating Through a List__
- Concept of `Iterator`: Allows  to traverse list without referencing storage of `list` class

```js:Iterator
for(names.front(); names.currPos() < names.length(); names.next()){
  print(names.getElement());
}
```
- for loop sets current position to front of list
- loop continues while `currPos` is less than length of list
- Each time through loop current position is moved oneelemnt forward using the `next()` function
- Only used for moving through a list and should not be combined with functions for adding or removing items from a list.