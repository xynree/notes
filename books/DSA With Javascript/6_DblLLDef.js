class Node {
  constructor(value, next=null, prev=null){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DblLinkedList {
  constructor(){
    this.head = null;
    this.find = (value) => {
      let node = this.head
      let prev = null;

      while(node) {
        if (node.value === value) return [prev,node];
        prev = node;
        node = node.next;
      }
    }

    this.insert = (value, item=null) => {
      if (!item) {
        this.head = new Node(value, this.head);
        return;
      }

      let found = this.find(item)[1];
      if (found) {
        let newNode = new Node(value,found.next);
        found.next = newNode;
      }

    }
    this.remove = (val)=> {

      let [prev, curr] = this.find(val);
      if (prev.next !== null) {
        prev.next = curr.next;
      }

    }
    this.display = () =>{
      let node = this.head;
      let log = []
      while (node) {
        log.push(node.value)
        node = node.next;
      }
      console.log(...log);
    }

  }

}