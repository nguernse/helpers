/**
 * There is an undirected star graph consisting of n nodes labeled
 * from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect
 * the center node with every other node.
 *
 * You are given a 2D integer array edges where each edges[i] = [ui, vi]
 * indicates that there is an edge between the nodes ui and vi.
 * Return the center of the given star graph.
 *
 * @see https://leetcode.com/problems/find-center-of-star-graph/description/
 */
export default function centerStarGraph(edges: number[][]): number {
  // O(n) for space and time
  // edges.length === n - 1
  // 3 <= n <= 10^5
  // const n = edges.length + 1;
  // const outgoing = Array.from({ length: n }, () => 0);

  // for (let edge of edges) {
  //   const [v1, v2] = edge;

  //   outgoing[v1 - 1] += 1;
  //   outgoing[v2 - 1] += 1;
  // }

  // for (let i = 0; i < outgoing.length; i += 1) {
  //   if (outgoing[i] === n - 1) return i + 1;
  // }

  // return -1;

  // O(1) for space and time
  return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]
    ? edges[0][0]
    : edges[0][1];
}
