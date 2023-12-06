/**
 * Find the index of a number in a sorted array.
 *
 * O(log n)
 */
function findNumberPosition(arr: number[], target: number): number {
  if (arr.length === 0) return -1;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    let num = arr[middle];

    if (num < target) {
      start = middle + 1;
    } else if (num > target) {
      end = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(
  "findNumberPosition([1, 2, 3, 4, 5], 3) => 2",
  findNumberPosition([1, 2, 3, 4, 5], 3)
); // 2
console.log(
  "findNumberPosition([1, 2, 3, 4, 5], 6) => -1",
  findNumberPosition([1, 2, 3, 4, 5], 6)
); // -1
console.log(
  "findNumberPosition([1, 2, 3, 4], 4) => 3",
  findNumberPosition([1, 2, 3, 4], 4)
); // 3
console.log("findNumberPosition([], 4) => -1", findNumberPosition([], 4)); // -1
console.log("findNumberPosition([1], 4) => -1", findNumberPosition([1], 4)); // -1
