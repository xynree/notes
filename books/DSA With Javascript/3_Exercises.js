const MyList = require('./3_ListDef')

// 1 - “Write a function that inserts an element into a list only if the element to be inserted is larger than any of the elements currently in the list. Larger can mean either greater than when working with numeric values, or further down in the alphabet, when working with textual values.”

let myList = new MyList();
myList.append(1,62,3,85,26,6,7,84,4,78,91);

myList.insertLargest = function(elem, after){
   for(this.front(); this.currPos() < this.length() -1; this.next()){
      // console.log(this.getElement())
      if (elem <= this.getElement()) return 'Element is not largest';
   }
   this.insert(elem, after)
   return this.dataStore
}

console.log('\n Exercise 1:')
console.log('data store:', myList.dataStore)
console.log('Inserted 100:', myList.insertLargest(100,3))
console.log('Inserted 2:', myList.insertLargest(2,3))




// 2 - “Write a function that inserts an element into a list only if the element to be inserted is smaller than any of the elements currently in the list.


// 3 - Create a Person class that stores a person’s name and their gender. Create a list of at least 10 Person objects. Write a function that displays all the people in the list of the same gender.

// 4 -Modify the video-rental kiosk program so that when a movie is checked out it is added to a list of rented movies. Display this list whenever a customer checks out a movie.

// 5 - Create a check-in function for the video-rental kiosk program so that a returned movies is deleted from the rented movies list and is added back to the available movies list.”
