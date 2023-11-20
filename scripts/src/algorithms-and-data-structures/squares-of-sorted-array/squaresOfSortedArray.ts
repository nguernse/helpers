/**
 * Given an integer array "nums" sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order.
 *
 * @see https://leetcode.com/problems/squares-of-a-sorted-array/
 *
 * Both solutions are O(n)
 */
export default function squaresOfSortedArray(nums: number[]): number[] {
  // Using built-in JavaScript methods
  // const result: number[] = nums.map((num) => Math.pow(num, 2));

  // return result.sort((a, b) => a - b);

  // Using two-pointer technique
  const result: number[] = new Array(nums.length);

  // the left and right pointer will be at each end of the nums array
  // this will help traverse the array once, of O(n)
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  // the insertIndex will keep track of where to insert the next square keeping sort order
  let insertIndex = rightPointer;

  while (leftPointer <= rightPointer) {
    const a = Math.abs(nums[leftPointer]);
    const b = Math.abs(nums[rightPointer]);

    if (a >= b) {
      result[insertIndex--] = Math.pow(a, 2);
      leftPointer += 1;
    } else {
      result[insertIndex--] = Math.pow(b, 2);
      rightPointer -= 1;
    }
  }

  return result;
}
