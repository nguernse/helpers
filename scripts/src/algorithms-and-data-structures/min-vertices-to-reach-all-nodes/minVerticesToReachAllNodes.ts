/**
 * Given a directed acyclic graph, with n vertices numbered from 0 to n-1,
 * and an array edges where edges[i] = [fromi, toi]
 * represents a directed edge from node fromi to node toi.
 *
 * Find the smallest set of vertices from which all nodes in the
 * graph are reachable. It's guaranteed that a unique solution exists.
 *
 * Notice that you can return the vertices in any order.
 *
 * @see https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
 */
export default function minVerticesToReachAllNodes(
  n: number,
  edges: number[][]
): number[] {
  const incoming = Array.from({ length: n }, () => 0);

  for (let i = 0; i < edges.length; i += 1) {
    incoming[edges[i][1]] += 1;
  }

  const result: number[] = [];

  for (let i = 0; i < incoming.length; i += 1) {
    if (incoming[i] === 0) result.push(i);
  }

  return result;
}
