# Sets

- Set is a collection of unique, unordered elements.

### Set Definitions

- Set with no members: empty set
- Universe: set of all possible members
- Set is equal if they contain exactly the same members
- Set is a `subset` of another set if all members of first set are contained in second set.

### Set Operations

- Union: New set obtained by combining members of two sets
- Intersection: All members of one set that also exist in second set
- Difference: All members of one set except those that also exist in a second set.

## Set Class Implementation

```js:Set_Class
class Set{
  constructor(){
    this.data = [];
  }

  function show(){
  return this.data;
}

  const add = (val) => {
    if (this.contains(val)) {
      return false;
    } else {
      this.data.push(val);
    }
  }

  const remove = (val) => {
    const index = this.data.indexOf(val)
    if (~index){
      this.data.splice(index,1);
      return true;
    } else return false;
  }

  const contains = (val) => ~this.data.indexOf(data)

  const size = () => {

  }

  const union = (set) => {
    let temp = new Set();
    for (let i=0; i<data.length; i++) {
      temp.add(this.data[i])
    }
    for (let i=0; i<set.data.length; i++){
      if (!temp.contains
      (set.data[i])){
        temp.data.push(set.data[i])
      }
    }
    return temp;
  }

  const intersect = (set) => {
    let temp = new Set();
    for (let i=0;i<this.data.length; i++){
      if (set.contains(this.data[i])) {
        temp.add(this.data[i])
      }
    }
    return temp;
  }

  const isSubset = (set) => {
    if (this.data.length > set.data.length ) return false;
    this.data.forEach((val) => {
      if (!set.data.includes(val)) return false;
    })
    return true;
  }

  const diff = (set) => {
    let temp = new Set();
    this.data.forEach((val) => {
      if (!set.data.includes(val)) temp.push(val);
    })
    return temp;

  }

}
```