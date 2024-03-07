# Basic Sorting Algos

## Bubble Sort

```js
function bubbleSort() {
  let numElems = this.dataStore.length;
  let temp;
  for (let outer = numElements; outer>=2; outer--){
    for(let inner = 0; inner < outer; inner++) {
      if (this.dataStore[inner] > this.dataStore[inner+1]) {
        swap(this.dataStore, inner, inner+1);
      }
    }
    print(this.toString())
  }
}
```

- Formula checks all values in inner list, setting one as sorted each round. 
- Formula reruns from outer list with one place removed from back, as it has been "set" already.
- Bubble sort gets set from the largest to the smallest: right side of array is set once each round.

# Selection Sort

- compare first elem with remaining elems.
- Smallest element is placed first, then algo moves to second position.
- outer loop moves from first element in arry to next to last,
- inner loop moves from second array to last, looking ofr values that are smaller than selected element.
- smallest value assigned to place.


```js
function selectionSort() {
   var min
   for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
      min = outer;
      for (var inner = outer + 1;
           inner <= this.dataStore.length-1; ++inner) {
         if (this.dataStore[inner] < this.dataStore[min]) {
            min = inner;
         }
      }
      swap(this.dataStore, outer, min);
   }
}
```

# Insertion Sort