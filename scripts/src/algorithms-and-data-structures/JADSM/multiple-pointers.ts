/**
 * Find the first pair where the sume is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 *
 * Assumptions: array is sorted
 *
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
function sumZero(arr: number[]): number[] | undefined {
  if (arr.length < 2) return undefined;

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const n1 = arr[start];
    const n2 = arr[end];
    const sum = n1 + n2;

    if (sum === 0) {
      return [n1, n2];
    } else if (sum > 0) {
      end -= 1;
    } else {
      start += 1;
    }
  }

  return undefined;
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
// console.log(sumZero([-2, 0, 1, 3])); // undefined
// console.log(sumZero([1, 2, 3])); // undefined
// console.log(sumZero([-1, 0, 1])); // [-1, 1]

/**
 * Count the unique values in a sorted array.
 * Assume array is sorted.
 *
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
function countUniqueValues(arr: number[]): number {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;

  let p1 = 0;
  let p2 = 1;

  while (p2 < arr.length) {
    let n1 = arr[p1];
    let n2 = arr[p2];

    if (n1 !== n2) {
      arr[++p1] = arr[p2];
    }

    p2 += 1;
  }

  return p1 + 1;
}

console.log(countUniqueValues([1, 2, 3, 4])); // 4
console.log(countUniqueValues([1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 4, 4, 7, 7])); // 5
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([1])); // 1
