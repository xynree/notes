# Two-Dimensional and Multidimensional Arrays

- To create a multidimensional array, try extending js array object:

```js
Array.matrix = function(numrows, numcols, initial) {
  let arr = []
  for (let i=0; i < numrows; ++i){
    let columns = [];
    for (let j=0; j<numcols; ++j){
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}

let nums = Array.matrix(5,5,0);
```

__Processing Two-Dimensional Array Elements__

- 2 patterns for processing elements of 2D array: column & row

- Column: Outer loop moves through rows, inner loop processes columns

```js:Find_2D_Avg
let grades = [[89,33,29], [2345,465,32], [21,34,64]];
let total = 0
let avg = 0
for (let row =0; row < grades.length; ++row){
  for (let col = 0; col < grades[row].length; ++col){
    total += grades[row][col];
  }
  average = total / grades[row].length
}
```

- For row-wise, same but outer row manages columns and inner loop controls rows.

__Jagged Arrays__

- Rows in the array may have a different num of elements.
- Because of js's `length` operater, the function will work the same way successfully.

