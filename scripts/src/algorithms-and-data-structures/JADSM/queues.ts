// // array implementation
// const queue = [];
// queue.push("FIRST");
// queue.push("SECOND");
// queue.push("THIRD");

// console.log(queue);

// // FIFO
// queue.shift();

// console.log(queue);

// class implementation
class QueueNode {
  value: any;
  next: QueueNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  last: QueueNode | null;
  first: QueueNode | null;
  size: number;

  constructor() {
    this.last = null;
    this.first = null;
    this.size = 0;
  }

  // remove from beginning of queue (FIFO)
  dequeue() {
    if (!this.first) return null;

    const node = this.first;

    // edge case if there is only one node in queue
    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size -= 1;

    return node.value;
  }

  // add to the end of queue (FIFO)
  enqueue(value: any) {
    const node = new QueueNode(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last!.next = node;
      this.last = node;
    }

    return ++this.size;
  }
}

const q = new Queue();
q.enqueue("FIRST");
q.enqueue("SECOND");
q.enqueue("THIRD");

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q);
