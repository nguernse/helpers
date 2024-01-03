# Chapter 1

## Modeling

> Modeling is the art of formulating your application in terms of precisely described, well-understood problems.

This is the first important step to designing a solution to your problem.

Types of models:

- **Permutations**: arrangements or orderings of items. These are common for problems seeking an _arrangement_, _tour_, _ordering_, or _sequence_.

- **Subsets**: represents selections from a set of items. These are common for problems seeking a _cluster_, _collection_, _committee_, _group_, _packaging_, or _selection_.

- **Trees**: represent hierarchical relationships between items. These are common for problems seeking a _hierarchy_, _dominance relationship_, _ancestor relationship_, or _taxonomy_.

- **Graphs**: represents relationships between arbitrary pairs of objects. These are common for problems seeking a _network_, _circuit_, _web_, or _relationship_.

- **Polygons**: defines regions in some geometric space. These are common for problems dealing with _shapes_, _regions_, _configurations_, or _boundaries_.

- **Points**: define locations in geometric space. These are common for problems dealing with _sites_, _positions_, _data records_, _locations_.

- **Strings**: a sequences of pattern or characters. These are common for problems dealing with _text_, _characters_, _patterns_, or _labels_.

## Exercises

Chapter 1 Exercises from [The Algorithm Design Manual by Steven Skiena](https://www.algorist.com/).

### Finding Counterexamples

1.1 Show that `a + b` can be less than `min(a, b)`

Adding negative numbers. So -3 + -5 = -8. -8 < min(-3, -5) = -5

1.2 Show that `a * b` can be less than `min(a, b)`

Multiplying a negative number. So 10 \* -1 = -10. -10 < min(10, -1) = -1

1.3 Design/draw a road network with two points a and b such that the fastest route between a and b is not the shortest route.

You could have the fastest route that is longer in distance but has no stop signs/lights (think the highway) and thenthe shortest route which has multiple stop signs/lights that make you wait.

1.5 The knapsack problem is as follows: given a set of integers S = {s1, s2, . . . , sn}, and a target number T, find a subset of S that adds up exactly to T. For example, there exists a subset within S = {1, 2, 5, 9, 10} that adds up to T = 22 but not T = 23.

Find counterexamples to each of the following algorithms for the knapsack prob- lem. That is, give an S and T where the algorithm does not find a solution that leaves the knapsack completely full, even though a full-knapsack solution exists.

(a) Put the elements of S in the knapsack in left to right order if they fit, that is, the first-fit algorithm.

(b) Put the elements of S in the knapsack from smallest to largest, that is, the best-fit algorithm.

(c) Put the elements of S in the knapsack from largest to smallest.

1.7 The maximum clique problem in a graph G = (V , E ) asks for the largest subset C of vertices V such that there is an edge in E between every pair of vertices in C. Find a counterexample for the following algorithm: Sort the vertices of G from highest to lowest degree. Considering the vertices in order of degree, for each vertex add it to the clique if it is a neighbor of all vertices currently in the clique. Repeat until all vertices have been considered.

### Proofs of Correctness

1.9

1.11

### Induction

1.13

1.15

1.17

1.19

### Estimation

1.21 Do all the books you own total at least one million pages? How many total pages are stored in your school library?

Say a book average 300 pages, and 1.5 inch thick. A shelf is 5 levels and 10 feet long and 1 foot wide. So one level on a shelf holds 80 books. So one shelf holds 400 books.

Say the library is a rectangle of 50 ft by 100 ft. You need space between shelves, about 3 feet. So (100 / 4) _ (50 / 13) _ 400 books \* 300 pages = 9M.

1.23 How many hours are one million seconds? How many days? Answer these
questions by doing all arithmetic in your head.

60 seconds in a minute
60 minutes in an hour
24 hours in a day

So 1M / 60 ~ 16,000 minutes
So 16K / 60 ~ 260 hours
So 260 / 24 ~ 10-11

1.25

1.27

1.29

### Implementation Projects

1.31 Describe how to test whether a given set of tickets establishes sufficient coverage in the Lotto problem of Section 1.8 (page 22) .Write a program to find good ticket sets.

### Interview Problems

1.33 There are twenty-five horses. At most, five horses can race together at a time. You must determine the fastest, second fastest, and third fastest horses. Find the minimum number of races in which this can be done.

1.35 How many gas stations are there in the United States?

There are 50 states. Find the average number of gas stations per state. Multiply 50 by the average.

1.37 How many miles of road are there in the United States?

Find the average area of a state. Substract the average area of non-developed land.

### LeetCode

1.1 https://leetcode.com/problems/daily-temperatures/
1.2 https://leetcode.com/problems/rotate-list/
1.3 https://leetcode.com/problems/wiggle-sort-ii/

### HackerRank

1.1 https://www.hackerrank.com/challenges/array-left-rotation/
1.2 https://www.hackerrank.com/challenges/kangaroo/
1.3 https://www.hackerrank.com/challenges/hackerland-radio-transmitters/
