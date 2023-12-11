# Recursion

A function that calls itself.

# Why Use Recursion?

It can be an efficient way to parse or traverse complex, nested data.

For example, methods like `JSON.parse` & `JSON.stringify` utilize recursion.

Can be used to traverse trees and objects, such as the `DOM`.

# Two Essential Parts

- Base Case - What will exit out the recursion to prevent infinite loops
- Different input - Taking the original input and "slicing" or taking a variation to feed back into the recursive function. If using the same input, it'll lead to an infinite loop.

# Helper Method Recursion

A pattern that is a function inside a function that handles the recursion.

```typescript
function collectOddValues(arr: number[]): number[] {
  let result: number[] = [];

  function helper(helperInput: number[]) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
```

# Big O

It depends on the function being called. Recursion can be: O(n), O(n^2), O(2^n), O(log n), etc.

Using the Fibonacci method:

```typescript
function fib(n: number): number {
  if (n <= 1) return 1;

  return fib(n - 1) + fib(n - 2);
}
```

The Big O will be a form where you calculate the number of calls in the recursion call tree.

Often the number of calls is O(b^d), where `b` is the branching factor and `d` is the depth of the tree (the longest path from the top of the tree to a base case).

For example, with Fibonacci the Big O is O(2^n)

# Resources

- https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1176/handouts/midterm/5-BigO.pdf
