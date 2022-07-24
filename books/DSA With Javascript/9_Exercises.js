const Set = require('./9_SetDef');

// 1. Modify the Set class so that the class stores its elements in sorted order.

class SortedSet extends Set {
  constructor() {
    super();
    this.add = (...val) => {
      val.forEach((value) => {
        if (this.contains(value)) {
          return false;
        } else {
         this.data.push(value);
          this.data = this.data.sort((prev,curr)=> prev<curr? -1:1);
        }
      })
    }
  }
}

const testSortedSet = () => {
  let myUnsortedSet = new Set();
  myUnsortedSet.add(2,1,25,23,6,0,1,14,444,2,1);
  const actualUnsorted = myUnsortedSet.show();

  let mySet = new SortedSet();
  mySet.add(2,1,25,23,6,0,1,14,444,2,1);
  const actual = mySet.show();

  const expected = [0,1,2,6,14,23,25,444]

  console.log('\n#1: Modify the Set class so that the class stores its elements in sorted order.','\n\nSorted Set:', '\nActual:', ...actual, 'Expected:', ...expected, '\nUnsorted:', ...actualUnsorted)
}
testSortedSet();



// 2. Modify the Set class so that it uses a linked list to store elements rather than an array.
console.log('\n#2: Modify the Set class so that it uses a linked list to store elements rather than an array.\n')

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

class LLSet extends Set {
  constructor(){
    super();
    this.data = null;
  }

  show = () => this.data;

  toArray = () => {
    let arr = []
    for (let i=this.data; i; i=i.next){
      arr.push(i.value);
    }
    return arr
  }

  contains(val){ 
    let node = this.data;

    while (node) {
      if (node.value === val) return true;
      node = node.next;
    }
    return false;
  }


  add(...val){
    val.forEach((value) => {
      if (this.contains(value)) {
        return false;
      } else {

        if (!this.data) {
          this.data = new Node(value);
        } else {
          this.data = new Node(value, this.data)
        }
      }
    })

  }

  remove(val){
    let node = this.data;
    let prev = null;

    while (node) {
      if (node.value === val) {
        if (prev === null) {
          this.data = node.next;
        } else {
          prev.next = node.next;
        }
        return;
      }
      prev = node;
      node = node.next;
    }
  }

  union(set){
    let temp = new LLSet();
    for (let i=this.data; i; i = i.next) {
      temp.add(i.value)
    }
    for (let i=set.data; i; i = i.next){
      if (!temp.contains
      (i.value)){
        temp.add(i.value)
      }
    }
    return temp.toArray()
  }

  intersect(set){
    let temp = new LLSet();
    for (let i=this.data;i; i= i.next){
      if (set.contains(i.value)) {
        temp.add(i.value)
      }
    }
    return temp.toArray();
  }

  get length(){
    let count = 0;
    for (let i = this.data; i; i= i.next) {
        count++;
    }
    return count;
  }

  isSubset(set){
    if (this.length > set.length ) return false;

    for (let i=this.data; i; i=i.next) {
      if (!set.contains(i.value)) return false;
    }

    return true;
  }

  diff(set){
    let temp = new LLSet();
    
    for (let i=this.data;i;i=i.next) {
      if (!set.contains(i.value)) temp.add(i.value);
    }
    return temp.toArray();
  }
}

const testLLSet = () => {

  // add

  const LLS = new LLSet();

  LLS.add(0,1,5,3,4,7,8);
  console.log('\n Add Elements: ', LLS.toArray())

  // remove

  LLS.remove(8);
  LLS.remove(7);
  LLS.remove(3);
  console.log('\n Remove Elements 8,7,3: ',LLS.toArray())

  // union

  let testSet = new LLSet();
  testSet.add(8,1,2,12,6);

  console.log(`\n${LLS.toArray()} Union with ${testSet.toArray()} : `,LLS.union(testSet))

  // intersection

  console.log(`\n${LLS.toArray()} Intersections with ${testSet.toArray()} : `,LLS.intersect(testSet))

  // subsect
  const testSet2 = new LLSet();
  testSet2.add(1,4);

  console.log(`\n${testSet.toArray()} Subset of ${LLS.toArray()}? : `,testSet.isSubset(LLS))
  console.log(`${testSet2.toArray()} Subset of ${LLS.toArray()}? : `,testSet2.isSubset(LLS))

  // difference

  console.log(`\n${testSet.toArray()}  Difference between  ${LLS.toArray()} ? : `,LLS.diff(testSet))
  console.log(`${testSet2.toArray()}  Difference between  ${LLS.toArray()} ? : `,LLS.diff(testSet2))


}

testLLSet();

// 3. Add the function higher(element) to the Set class. This function returns the least elem in the set greater than the given element.

console.log('\n3. Add the function higher(element) to the Set class. This function returns the least elem in the set greater than the given element.\n')

function higher (val) {
  let store = this.data.sort((prev,curr) => prev<curr? -1:1);

  for (let i=0; i<store.length; i++){
    if (store[i] > val) return store[i]
  }
  return null;
}

const mySet = new Set();
mySet.add(1,2,3,5,7,8,9,10)
console.log('Higher Function (3):', higher.call(mySet,3))
console.log('Higher Function (9):', higher.call(mySet,9))
console.log('Higher Function (1):', higher.call(mySet,1))


// 4. Add the function lower(element) to the Set class. This function returns the geratest element less than the given element.

console.log('\n4. Add the function lower(element) to the Set class. This function returns the greatest element less than the given element.')

function lower(val) {
  let store = this.data.sort((prev,curr) => prev<curr? 1:1);
  let curr = null;
  for (let i=0; i<store.length; i++){
    if (store[i] < val) curr = store[i];
    if (store[i] >= val) return curr;
  }
  return null;
}

console.log('\nLower Function (3):', lower.call(mySet,3));
console.log('Lower Function (9):', lower.call(mySet,9));
console.log('Lower Function (1):', lower.call(mySet,1));
console.log('Lower Function (2):', lower.call(mySet,2));


