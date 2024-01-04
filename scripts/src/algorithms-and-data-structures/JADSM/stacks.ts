// const stack = [];

// // history stack
// stack.push("google.com");
// stack.push("wikipedia.com");
// stack.push("youtube.com");

// // get last visited page
// let lastPage = stack.pop();

// console.log(lastPage); // youtube.com

// linked list stack
class StackNode {
  value: any;
  next: StackNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  first: StackNode | null;
  size: number;

  constructor() {
    this.first = null;
    this.size = 0;
  }

  push(value: any): number {
    const node = new StackNode(value);

    if (!this.first) {
      this.first = node;
    } else {
      node.next = this.first;
      this.first = node;
    }

    return ++this.size;
  }

  pop(): StackNode | null {
    if (!this.first) return null;
    const node = this.first;

    this.first = this.first.next;
    this.size -= 1;

    return node.value;
  }
}

const stack = new Stack();
stack.push("1");
stack.push("2");
stack.push("3");
console.log(stack);
stack.pop();
stack.push("4");
console.log(stack);
