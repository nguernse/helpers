class BNode {
  value: number;
  left: BNode | null;
  right: BNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: BNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new BNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode: BNode | null = this.root;

    while (true) {
      if (value === currentNode.value) {
        return;
      } else if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }

        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }

        currentNode = currentNode.right;
      }
    }
  }

  find(value: number): BNode | null {
    if (this.root === null) {
      return null;
    }

    let currentNode: BNode | null = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return null;
  }

  has(value: number): boolean {
    return this.find(value) !== null;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);

console.log(tree);

console.log("2 in tree ?", tree.find(2), tree.has(2));
console.log("13 in tree ?", tree.find(13), tree.has(13));
console.log("7 in tree ?", tree.find(7), tree.has(7));
