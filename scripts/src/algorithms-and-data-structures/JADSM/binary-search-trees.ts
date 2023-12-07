export class BSTNode<T> {
  value: T;
  left?: BSTNode<T>;
  right?: BSTNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}

export class BinarySearchTree<T> {
  root?: BSTNode<T>;

  constructor(values?: T[]) {
    if (values) {
      values.forEach((item) => this.insert(item));
    }
  }

  insert(value: T): BSTNode<T> | undefined {
    const newNode = new BSTNode(value);

    if (!this.root) {
      this.root = newNode;

      return this.root;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return current;
      } else if (value < current.value) {
        if (!current.left) {
          current.left = newNode;

          return current.left;
        }

        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;

          return current.right;
        }

        current = current.right;
      }
    }
  }

  find(value: T): BSTNode<T> | undefined {
    if (!this.root) return undefined;

    let current = this.root;

    while (current) {
      if (current.value === value) {
        return current;
      } else if (current.value < value) {
        if (!current.right) return undefined;

        current = current.right;
      } else {
        if (!current.left) return undefined;

        current = current.left;
      }
    }

    return current;
  }

  has(value: T): boolean {
    return this.find(value) !== undefined;
  }

  /**
   * Breadth First Search
   *
   * Create a queue (FIFO list) and a variable to store the values of nodes visited.
   */
  bfs(): T[] {
    if (!this.root) return [];

    const queue: BSTNode<T>[] = [];
    const data: T[] = [];

    queue.push(this.root);

    while (queue.length) {
      const node = queue.shift() as BSTNode<T>;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      data.push(node.value);
    }

    return data;
  }

  /**
   * Depth First Search Pre-Order
   *
   * Visit node first, then the left side, then the right side
   */
  dfsPreorder(): T[] {
    if (!this.root) return [];

    const data: T[] = [];
    this.traversePreorder(this.root, data);

    return data;
  }

  traversePreorder(node: BSTNode<T>, data: T[]): void {
    data.push(node.value);

    if (node.left) this.traversePreorder(node.left, data);
    if (node.right) this.traversePreorder(node.right, data);
  }

  /**
   * DFS Post-Order, traverse left-side bottom up, right-side bottom up
   */
  dfsPostOrder(): T[] {
    if (!this.root) return [];

    const data: T[] = [];
    this.traversePostOrder(this.root, data);

    return data;
  }

  traversePostOrder(node: BSTNode<T>, data: T[]): void {
    if (node.left) this.traversePostOrder(node.left, data);
    if (node.right) this.traversePostOrder(node.right, data);

    data.push(node.value);
  }

  /**
   * DFS InOrder, going in sorted order
   */
  dfsInOrder(): T[] {
    if (!this.root) return [];

    const data: T[] = [];
    this.traverseInOrder(this.root, data);

    return data;
  }

  traverseInOrder(node: BSTNode<T>, data: T[]): void {
    if (node.left) this.traverseInOrder(node.left, data);
    data.push(node.value);
    if (node.right) this.traverseInOrder(node.right, data);
  }
}
