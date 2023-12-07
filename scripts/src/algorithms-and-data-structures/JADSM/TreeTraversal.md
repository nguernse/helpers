# Traversing a Tree

Two main approaches:

- Breadth First Search
- Depth First Search

# Breadth First Search

Working across the tree first, at each level.

# Depth First Tree

Work down the tree first, vertically.

- In order
- Pre-order
- Post-order

# When to use BFS vs DFS

Depends on how you want to traverse the tree and the structure of the tree.

If you have a wide tree, BFS will use more space and increase space complexity.
If you have a long, one-sided tree, BFS will use very little space.

# When to use DFS InOrder, PreOrder, or PostOrder

- If InOrder, you will get a sorted order.
- If PreOrder, can be used to copy and recreate the tree easily. The order will be able to reconstruct the tree.
