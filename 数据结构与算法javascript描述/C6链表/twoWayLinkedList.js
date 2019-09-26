function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

class LList {
  constructor() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    // this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
    this.findLast = findLast;
  }
}

function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var curNode = this.find(item);
  newNode.next = curNode.next;
  newNode.previous = curNode;
  curNode.next = newNode;
}

function display() {
  var curNode = this.head;
  while (curNode.next != null) {
    console.log(curNode.next.element);
    curNode = curNode.next;
  }
}

// function findPrevious(item) {
//   var curNode = this.head;
//   while (!(curNode.next == null) && (curNode.next.element != item)) {
//     curNode = curNode.next;
//   }
//   return curNode;
// }
function remove(item) {
  var curNode = this.find(item);
  if (!(curNode.next == null)) {
    curNode.previous.next = curNode.next;
    curNode.next.previous = curNode.previous;
    curNode.next = null;
    curNode.previous = null;
  }
}

function findLast() {
  var curNode = this.head;
  while (!(curNode.next == null)) {
    curNode = curNode.next;
  }
  return curNode;
}


