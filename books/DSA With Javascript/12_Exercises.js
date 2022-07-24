function CArray(numElements) {
   this.dataStore = [];
   this.pos = 0;

   this.numElements = numElements;
   this.insert = insert;
   this.toString = toString;
   this.clear = clear;
   this.setData = setData;
   this.swap = swap;
   this.bubbleSort = bubbleSort;
   this.selSort = selSort;

   for (var i = 0; i < numElements; ++i) {
      this.dataStore[i] = i;
   }
}

/* generates random nums to store in array */
function setData() {
   for (var i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() *
                          (this.numElements*10));
   }
}

function clear() {
   for (var i = 0; i < this.dataStore.length; ++i) {
      this.dataStore[i] = 0;
   }
}

function insert(element) {
   this.dataStore[this.pos++] = element;
}

function toString() {
   var retstr = "";
   for (var i = 0; i < this.dataStore.length; ++i) {
      retstr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {
         retstr += "\n";
      }
   }
   return retstr;
   }

function swap(arr, index1, index2) {
   var temp = arr[index1];
   arr[index1] = arr[index2];
   arr[index2] = temp;
}


let numElems = 11;
let myNums = new CArray(numElems);
myNums.setData();

// Bubble Sort: O(n^2)
function bubbleSort() {
   let numElems = this.dataStore.length;
   for (let outer = numElems; outer>=2; outer--){ // sorts through list, omitting the last index each time around, until list has 2 elems left.
      console.log(this.toString())

     for(let inner = 0; inner < outer; inner++) { //sorts through the list once from 0 -> length.
       if (this.dataStore[inner] > this.dataStore[inner+1]) {
         swap(this.dataStore, inner, inner+1);
       }
     }
   }
}


// Selection Sort
function selSort(){
   let min;
   for (let outer = 0; outer < this.dataStore.length-1; outer++) { // loops through array except for last num which will already be set.
      min = outer; // setup original minimum index
      for (let inner = outer + 1; inner < this.dataStore.length; inner++) { // loops starting from element to the right of outer ring loop, checks for smallest num from rest of array and sets to min.
         if (this.dataStore[inner] < this.dataStore[min]){
            min = inner;
         }
      }
      swap(this.dataStore, outer, min) // swaps places of outer num + minimumn index.
      console.log(this.toString())
   }
}

myNums.selSort()