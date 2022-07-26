# Arrays

- Arrays are made with contiguous memory, broken down into equal size elems, indexed by contiguous integers
- Arrays are an O(1) operation when adding or removing elems from the end. They are O(n) to insert to beginning or elsewhere in the array.

<!--CS 61B Lecture 5: Iteration and Arrays I -->

- Java syntax int[][] for multidimensional arrays

- Pascal's Triangle + Formula (Implement this)

<!-- Dynamic Arrays-->

- Dynamic Array (resizable array)
- Store:
  - arr: array
  - capacity: size or array
  - size: number of elements currently in array
- Store pointer to new dynamically resized array, copy elements into new array and change pointer to new array
- Store resizing function in push() function - if capacity = size , then create a new array with new capacity, then copy array into it and set array to new one.
  - vector, ArrayList, list, array
- Runtime: O(1), O(1), O(n)

<!-- Jagged Array -->

- In Java - each row set to new int[number] to set up rows that have different lengths
