/**
 * Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1,
 * find all possible paths from node 0 to node n - 1 and return them in any order.
 *
 * The graph is given as follows: graph[i] is a list of all nodes
 * you can visit from node i (i.e., there is a directed edge from
 * node i to node graph[i][j]).
 *
 * @see https://leetcode.com/problems/all-paths-from-source-to-target/description/
 */
export default function dagGraphAllPaths(graph: number[][]): number[][] {
  // want to do a Depth First Traversal - this gets you from O to end node
  // need to track the traversal for each edge
  // return the tracked traversals
  const target = graph.length - 1;
  const start = 0;
  const vertices = new Map<number, number[]>();
  const paths: number[][] = [];

  for (let i = 0; i < graph.length; i += 1) {
    vertices.set(i, graph[i]);
  }

  // dfs of graph for starting node 0;
  const stack: [number, number[]][] = [[start, []]];

  while (stack.length > 0) {
    const [vertex, path] = stack.pop()!;
    const edges = vertices.get(vertex)!;

    // You've hit the end node when edges length is zero, and target === vertex
    // so add the path to final paths array
    if (target === vertex) {
      paths.push([...path, vertex]);
      // else continue doing a DFS for each possible path
    } else if (edges.length > 0) {
      edges.forEach((edge) => stack.push([edge, [...path, vertex]]));
    }
  }

  return paths;
}
