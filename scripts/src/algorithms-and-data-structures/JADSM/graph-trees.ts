type Edge = string;
type Edges = Edge[];

/**
 * This implements the Adjacency List method.
 *
 * This also implements an undirected graph, meaning each edge goes in both directions.
 */
class GraphTree {
  vertices: Map<string, Edges>;

  constructor() {
    this.vertices = new Map();
  }

  addVertex(name: string) {
    if (this.vertices.has(name)) return;

    this.vertices.set(name, []);
  }

  addEdge(vert1: string, vert2: string) {
    const vertex1 = this.vertices.get(vert1);

    if (vertex1 === undefined) {
      throw new Error(`${vert1} does not exist`);
    }

    const vertex2 = this.vertices.get(vert2);
    if (vertex2 === undefined) {
      throw new Error(`${vert2} does not exist`);
    }

    vertex1.push(vert2);
    vertex2.push(vert1);
  }

  getVertex(name: string): Edges | undefined {
    return this.vertices.get(name);
  }

  removeEdge(vert1: string, vert2: string) {
    const vertex1 = this.vertices.get(vert1);

    if (vertex1 === undefined) {
      throw new Error(`${vert1} does not exist`);
    }

    const vertex2 = this.vertices.get(vert2);
    if (vertex2 === undefined) {
      throw new Error(`${vert2} does not exist`);
    }

    this.vertices.set(
      vert1,
      vertex1.filter((vertex) => vertex !== vert2)
    );
    this.vertices.set(
      vert2,
      vertex2.filter((vertex) => vertex !== vert1)
    );
  }

  removeVertex(name: string) {
    const vertex = this.vertices.get(name);

    if (!vertex) return;

    for (let i = 0; i < vertex.length; i += 1) {
      this.removeEdge(name, vertex[i]);
    }

    this.vertices.delete(name);
  }

  /**
   * Depth First Search
   *
   * Explore down one path as far as possible before "backtracking"
   *
   * Prioritizing visiting children of a node before visiting siblings.
   */
  dfsTraversal(start: string): string[] {
    if (!this.vertices.has(start)) return [];

    // JavaScript manages order on insert for Sets
    const visited = new Set<string>();

    // Recursive implementation
    // const recursive = (vert: string) => {
    //   if (visited.has(vert)) return;

    //   visited.add(vert);

    //   const edges = this.getVertex(vert)!;

    //   for (let i = 0; i < edges.length; i += 1) {
    //     recursive(edges[i]);
    //   }
    // };

    // recursive(start);

    // Iterative implementation
    const iterative = (v: string) => {
      const stack: string[] = [v];

      while (stack.length > 0) {
        const vertex = stack.pop()!;

        if (!visited.has(vertex)) {
          const edges = this.getVertex(vertex)!;
          edges.forEach((v) => stack.push(v));
        }

        visited.add(vertex);
      }
    };

    iterative(start);

    return [...visited];
  }

  /**
   * Traversal all neighbors first
   */
  bfsTraversal(start: string): string[] {
    if (!this.vertices.has(start)) return [];

    const queue: string[] = [start]; // FIFO
    const visited = new Set<string>();

    while (queue.length > 0) {
      const vertex = queue.shift()!;

      if (visited.has(vertex)) continue;
      visited.add(vertex);
      const edges = this.getVertex(vertex)!;

      for (let i = 0; i < edges.length; i += 1) {
        queue.push(edges[i]);
      }
    }

    return [...visited];
  }
}

//        A
//      /   \
//     B     C
//     |     |
//     D --- E
//      \   /
//        F
const graph = new GraphTree();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph);
console.log(graph.dfsTraversal("A"));
console.log(graph.bfsTraversal("A"));
