/**
 * There is a bi-directional graph with n vertices, where each vertex
 * is labeled from 0 to n - 1 (inclusive).
 * The edges in the graph are represented as a 2D integer array edges,
 * where each edges[i] = [ui, vi] denotes a bi-directional edge between
 * vertex ui and vertex vi.
 * Every vertex pair is connected by at most one edge,
 * and no vertex has an edge to itself.
 *
 * You want to determine if there is a valid path that exists
 * from vertex source to vertex destination.
 *
 * Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.
 * @see https://leetcode.com/problems/find-if-path-exists-in-graph/description/
 */
export default function validGraphPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const vertices: Map<number, number[]> = new Map();

  // Map vertices to their edges
  for (let i = 0; i < edges.length; i += 1) {
    const [ui, vi] = edges[i];
    const uVertex = vertices.get(ui) || [];
    uVertex.push(vi);
    vertices.set(ui, uVertex);

    const vVertex = vertices.get(vi) || [];
    vVertex.push(ui);
    vertices.set(vi, vVertex);
  }

  // check if source exists
  if (!vertices.has(source)) return false;

  // Iterate through vertices to see if source reaches destination
  const visited = new Set<number>();
  const stack: number[] = [source];

  while (stack.length > 0) {
    const vertex = stack.pop()!;

    // break out early
    if (vertex === destination) return true;

    if (!visited.has(vertex)) {
      const vEdges = vertices.get(vertex)!;

      vEdges.forEach((e) => stack.push(e));
    }

    visited.add(vertex);
  }

  return false;
}
