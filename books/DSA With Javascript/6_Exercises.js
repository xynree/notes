const { LinkedList, Node } = require('./6_LLDef')

const print = (text) => {
  console.log(`\n${text}\n`)
}

print('#1. Implement the advance(n) function so that when executed, the current node is moved n nodes forward in the list.')

function advance(n){
  let node = this.head;
  this.head = this.head.next;
  let insertNode = this.head;
  while (n>1) {
    insertNode = insertNode.next;
    n--;
  }
  this.insert(node.value,insertNode.value);
}

const testAdvance = ()=>{
  let test = new LinkedList();
  [1,3,6,2,3,5,23,2,7,89,9].forEach((num) => test.insert(num));

  test.display();
  advance.call(test, 4);
  test.display();

}
testAdvance();

print('#2. Implement the back(n) function so that when executed, the current node is moved n nodes backward in the double linked list.')

print('#3. Implement the show() function, which displays data associated with current node.')

function show(){
  return this.head.value
}

const testShow = () => {
  let test = new LinkedList();
  [1,3,6,2,3,5,23,2,7,89,9].forEach((num) => {
    test.insert(num)
    console.log(show.call(test))

  });
}
testShow();

print('#4. Write a program that uses a singly linked list to keep track of a set of test grades entered interactively into the program.')



print('#5. Rewrite your solution to Ex 6-4 Using a doubly linked list. ')

print('#6. Write a program that allows you to place n people in a circle and specify that every mth person will be killed. The program should determine the number of the last two people left in the circle. Use a circularly linked list to solve the problem.')

class Circle{
  constructor(){
    
  }
}