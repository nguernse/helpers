# Binary Search Trees

Trees are used for many applications:

- HTML DOM - Elements are nested elements infinitely. Each element is a node with children, e.g. `document.body.children`
- Network Routing - [See wiki](https://en.wikipedia.org/wiki/Routing)
- Abstract Syntax Trees - Describes the syntax of the programming language. To verify valid syntax of a programming languge AST's can be used.
- A.I. - Decision trees, e.g. building an algorithm to select the optimal move in a tic-tac-toe game
- Folders in Operating Systems - the file directory is a tree structure.
- Computer file systems
- JSON response can be tree-like structure, e.g. `{"data": { "key": {...}}}`

Common trees for this lesson:

- Trees
- Binary Trees
- Binary Search Trees
  - Every parent node has two children at most
  - Every node to the left of a parent node is always less than the parent
  - Every node to the right of the parent is greater than to parent

# Big O of BST

Insertion is O(log n)
Searching is O(log n)

This is because each iteration you are halving the tree, which is quicker than the linear O(n).

# Example of Tree

```
    8
   / \
  3   10
 / \    \
1   6    14
   / \   /
  4   7 13
```

In this binary tree:

8 is the root node.
3 and 10 are the children of 8.
1, 6, and 14 are the children of 3 and 10.
4, 7, and 13 are the children of 6 and 14.

# Why use a Binary Search Tree?

Makes it easy to look information up, especially if it is sorted.

# Resource

- https://visualgo.net/en/bst
