# Searching Algorithms

# Strategies

- Linear Search
- Binary Search on sorted arrays
- Naive String search algorithm
- KMP string search algorithm

# Linear Search

Check elements one at a time to find the correct match.

Some common methods:

- `.indexOf()`
- `.includes()`
- `.find()`
- `.findIndex()`

The Big O is `O(n)` since it'll iterate through all `n` elements, as the worst case scenario.

# Binary Search

Can be much faster than linear search. Binary Search will eliminate half of the remaining elements at a time.

Binary search only works on **sorted** arrays.

Binary search employs the **divide and conquer** strategy. Each iteration will halve the previous array, rapidly reducing the time to search for an element.

The Big O is `O(log n)` since it'll halve the number of elements with each iterations.

# Naive String Search

Common search strategy for strings.

# KMP String Search (Knught-Morris-Pratt Algorithm)

The KMP algorithm is an efficient string matching algorithm. It is a linear time algorithm that exploits the observationt hat every time a match (or a mismatch) happens, the pattern itself contains enough information to dictate where the new examination sohuld begin from.

The Big O for KMP strategy is O(n)

# Resources

- Section 10 of [JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/share/101X5s3@RxdHq2h5AhdU64l0cR2nGm_Q_goZCjafLfclQvaVCUtE4vUXhBIKNiwhsUklk_Vw/)
- [KMP Algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm)
- [KMP Search Code](https://github.com/NKaty/Algorithms-and-Data-Structures/blob/master/src/searching-algorithms/knuth-morris-pratt-search.js)
