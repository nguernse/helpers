# Stacks and Queues

Collection of data that is stored as two ways:

- **Stacks** follow the Last-In-First-Out (LIFO) principle. Last value added is the first value removed.
- **Queues** follow the First-In-First-Out (FIFO) principle. First value added is the first value removed.

# Where are Stacks Used

- Managing function invocations
- Undo / Redo
- Routing (history object)
- Call stack
- Algorithms (trees, graphs - DFS, queues)

# Where are Queues Used

- Video Games wait list
- Background Tasks
- Uploading resources
- Printing jobs
- Task processing

# Efficiencies

If you approach stacks using `.shift()` and `.unshift()` it'll be inefficient versus the `.push()` and `.pop()` approach since it doesn't re-index the array.

While arrays are convenient with JavaScript, if you are looking for more optimal implementations of a Stack, a linked list is preferred because we do not care about indexes and only about when something was inserted.

Similarly, with **queues**, using an array will introduce an inefficiency with having to re-index the array when removing the first item with `.shift()`. If performance is necessary, using a Queue class is better.

# Time Complexity - Big O

- Stacks:
  - Insertion O(1)
  - Removal O(1)
  - Searching O(N)
  - Access O(N)
- Queues:
  - Insertion O(1)
  - Removal O(1)
  - Searching O(N)
  - Access O(N)

# Problems Around Stacks

- Stacks:

  - https://leetcode.com/tag/stack/
  - https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=stacks

- Queues:

  - https://leetcode.com/tag/queue/
  - https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=queues
