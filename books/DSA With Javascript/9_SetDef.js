class Set{
  constructor(){
    this.data = [];
  }
  
  show(){
    return this.data
  };

  add(...val){
    val.forEach((value) => {
      if (this.contains(value)) {
        return false;
      } else {
       this.data.push(value);
      }
    })

  }

  remove(val){
    const index = this.data.indexOf(val)
    if (~index){
      this.data.splice(index,1);
      return true;
    } else return false;
  }

  contains(val){ 
    return ~this.data.indexOf(val)
  }

  union(set){
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

  intersect(set){
    let temp = new Set();
    for (let i=0;i<this.data.length; i++){
      if (set.contains(this.data[i])) {
        temp.add(this.data[i])
      }
    }
    return temp;
  }

  isSubset (set){
    if (this.data.length > set.data.length ) return false;
    this.data.forEach((val) => {
      if (!set.data.includes(val)) return false;
    })
    return true;
  }

  diff(set){
    let temp = new Set();
    this.data.forEach((val) => {
      if (!set.data.includes(val)) temp.push(val);
    })
    return temp;
  }
}

module.exports = Set;