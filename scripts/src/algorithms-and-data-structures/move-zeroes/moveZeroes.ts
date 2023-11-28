/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * @see https://leetcode.com/problems/move-zeroes/
 *
 * O(n) because you iterate through the array once.
 */
export default function moveZeroes(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  let nonZeroIdx = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== 0) {
      [arr[nonZeroIdx], arr[i]] = [arr[i], arr[nonZeroIdx]];
      nonZeroIdx += 1;
    }
  }

  return arr;
}
