# Graphs

A **graph data structure** consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an unidirected graph or a set of ordered pairs for a directed graph.

# Terminology

- Vertex - a node
- Edge - connection between nodes
- Weighted/Unweighted - values assigned to distances between vertices
- Directed/Undirected - directions assigned to distanced between vertices

# Two Implementions

- Adjacency List
  - Can take up less space (in sparse graphs)
  - Faster to iterate over all edges
  - Can be slower to lookup a specific edge
- Adjacency Matrix
  - Takes up more space (in sparse graphs)
  - Slower to iterate over all edges
  - Faster to lookup a specific edge

Real world data tends to be sparse which lends typically to using Adjancency lists.

# Graph Traversal Uses

- Peer to peer networking
- Web crawlers
- Finding "clostest" matches/recommendations
- Shortest path problems
  - GPS Navigation
  - Solving mazes
  - AI (shortest path to win the game)

# Uses For Graphs

- Social Networks
- Recommendation engines
- Location / Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- And More

# Resources

- [Udemy Lesson](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344866#overview)
- [Visualgo Graphs](https://visualgo.net/en/graphds)
  - [Visualgo Graph Traversal](https://visualgo.net/en/dfsbfs)
- [Leetcode Problems](https://leetcode.com/tag/graph/)
