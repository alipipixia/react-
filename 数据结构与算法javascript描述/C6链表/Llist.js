function Node(element) {
  this.element = element;
  this.next = null;
}

class LList {
  constructor() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
  }
}

function find (item) {
  var currNode = this.head;
  while(currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var curNode = this.find(item);
  newNode.next = curNode.next;
  curNode.next = newNode; 
}

function display() {
  var curNode = this.head;
  while(curNode.next != null) {
   console.log(curNode.next.element);
   curNode = curNode.next; 
  }
}

function findPrevious(item) {
  var curNode = this.head;
  while (!(curNode.next == null) && (curNode.next.element != item)) {
    curNode = curNode.next;
  }
  return curNode;
}
function remove(item) {
  var preNode = this.findPrevious(item);
  if (!(preNode.next == null)) {
    preNode.next = preNode.next.next;
  }
}
