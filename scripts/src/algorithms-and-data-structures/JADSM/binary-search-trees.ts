class BNode<T> {
  value: T;
  left: BNode<T> | null;
  right: BNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST<T> {
  root: BNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new BNode(value);

    if (this.root == null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        break;
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      }
    }

    return this;
  }

  find(value: T): BNode<T> | undefined {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return undefined;
  }

  contains(value: T): boolean {
    return this.find(value) === undefined;
  }

  /**
   * TREE TRAVERSAL STRATEGIES
   *
   * Strategies:
   *  - Breadth-first search, search across the tree each level at a time
   *  - Depth-first search, go down the tree
   *    - In-order visit the nodes in order
   *    - Pre-order visit the node first, then look at the left and then right
   *    - Post-order visit the node after looking at the left and then right. Visit all children.
   *
   * Breadth vs Depth
   * - Time complexity is the same O(log n)
   * - If lots of nodes and tree is well-balanced, with many levels
   *  - DFS is better for space complexity, since BFS would have to manage a large queue
   * - Wider trees DFS is better for space complexity
   * - Deep, long tree BFS is better for space complexity
   */
  bfs(): T[] {
    if (!this.root) return [];

    // first-in-first-out
    const queue: (BNode<T> | null)[] = [this.root];
    const visited: T[] = [];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (!currentNode) continue;

      visited.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return visited;
  }

  bfsRecursive(): T[] {
    if (!this.root) return [];

    function bfsr(queue: (BNode<T> | null)[] = [], visited: T[] = []): T[] {
      const currentNode = queue.shift();

      if (!currentNode) return visited;

      visited.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

      return bfsr(queue, visited);
    }

    return bfsr([this.root], []);
  }

  dfsPreOrder(): T[] {
    if (!this.root) return [];

    const visited: T[] = [];

    function traverse(node: BNode<T>): void {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }

  dfsPostOrder(): T[] {
    if (!this.root) return [];

    const visited: T[] = [];

    function traverse(node: BNode<T>): void {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(this.root);

    return visited;
  }

  dfsInOrder(): T[] {
    if (!this.root) return [];

    const visited: T[] = [];

    function traverse(node: BNode<T>): void {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }
}

const tree = new BST<number>();
tree.insert(10);
tree.insert(7);
tree.insert(12);
tree.insert(6);
tree.insert(8);
tree.insert(13);
tree.insert(11);

console.log(tree);
console.log(tree.contains(10));
console.log(tree.contains(1));
console.log(tree.contains(2));
console.log(tree.contains(50));
console.log("bfs:", tree.bfs());
console.log("bfs recursive:", tree.bfsRecursive());
console.log("dfs in-order:", tree.dfsInOrder());
console.log("dfs post-order:", tree.dfsPostOrder());
console.log("dfs pre-order:", tree.dfsPreOrder());
