function MyList () {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // initializes an empty array to store list elements

  this.clear = () =>{
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }
  
  this.find = (element) => {
    for (var i = 0; i < this.dataStore.length; ++i) {
       if (this.dataStore[i] == element) {
          return i;
       }
    }
    return -1;
  }

  this.remove = (element)=> {
    var foundAt = this.find(element);
    if (foundAt > -1) {
       this.dataStore.splice(foundAt,1);
       --this.listSize;
       return true;
    }
    return false;
  }
  
  this.toString =() =>{
    return this.dataStore;
 }
  this.insert = (element, after)=> {
    var insertPos = this.find(after);
    if (insertPos > -1) {
       this.dataStore.splice(insertPos+1, 0, element);
       ++this.listSize;
       return true;
    }
    return false;
  }
  
  this.append  = (...args) =>{
    for (let i=0; i<args.length;i++) {
      this.dataStore[this.listSize++] = args[i];
    }
  }

  this.front = function(){
    this.pos = 0;
  }

  this.end = () => this.pos = this.listSize-1;

  this.prev = function prev() {
    if (this.pos > 0) {
       --this.pos;
    }
  }

  this.next = () => (this.pos < this.listSize-1) && this.pos++ 
  
  this.length = () => this.listSize;

  this.currPos =() => this.pos;


  this.moveTo = function moveTo(position) {
    this.pos = position;
  }

  this.getElement = function getElement() {
    return this.dataStore[this.pos];
  }

  this.contains = function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
     if (this.dataStore[i] == element) {
        return true;
     }
  }
  return false;
}
  }




module.exports = MyList;