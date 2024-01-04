class LinkedNode<T = any> {
  value: T;
  next: LinkedNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

// let first = new LinkedNode<string>("Hi");
// first.next = new LinkedNode('there');

class SinglyLinkedList {
  head: LinkedNode | null;
  tail: LinkedNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: any) {
    const node = new LinkedNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    this.length += 1;

    return this;
  }

  // remove node at end of list
  pop() {
    if (!this.head) return undefined;

    let node = this.head;
    let newTail = node;

    while (node.next) {
      newTail = node;
      node = node.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return node;
  }

  // remove node from beginning of the list
  shift() {
    if (!this.head) return undefined;

    const node = this.head;
    this.head = node.next;
    this.length -= 1;

    if (this.length === 0) {
      this.tail = null;
    }

    return node;
  }

  // add new node to start of list
  unshift(value: any) {
    if (!this.head) return this.push(value);

    const node = new LinkedNode(value);
    const oldHead = this.head;

    node.next = oldHead;
    this.head = node;
    this.length += 1;

    return this;
  }

  // retrieve node by position
  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.tail;

    let count = 0;
    let node = this.head;

    while (count !== index) {
      count += 1;
      node = node!.next;
    }

    return node;
  }

  // update value at index
  set(index: number, value: any) {
    const node = this.get(index);

    if (node) {
      node.value = value;

      return true;
    }

    return false;
  }

  // insert new node at index
  insert(index: number, value: any): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const node = new LinkedNode(value);
    const prevNode = this.get(index - 1);

    if (prevNode) {
      node.next = prevNode.next;
      prevNode.next = node;
    }

    this.length += 1;

    return true;
  }

  // remove node at index
  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prevNode = this.get(index - 1);
    const node = prevNode?.next;
    prevNode!.next = node!.next;

    this.length -= 1;

    return node;
  }

  // reverse the list in place
  reverse() {
    if (!this.head) return this;

    let prevNode = null;
    let currentNode = this.head;

    // set new tail
    this.tail = currentNode;

    while (currentNode.next) {
      const nextNode = currentNode.next;

      // point current node backwards
      currentNode.next = prevNode;

      // iterate all variables one forward
      prevNode = currentNode;
      currentNode = nextNode;
    }

    // redirect last node
    currentNode.next = prevNode;
    this.head = currentNode;

    return this;
  }

  print() {
    let node = this.head;
    let result = "";

    while (node) {
      result += `${node.value} -> `;

      node = node.next;
    }

    result += "null";

    console.log(result);
  }
}

const list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");

list.print();
list.reverse();
list.print();

console.log(list);
