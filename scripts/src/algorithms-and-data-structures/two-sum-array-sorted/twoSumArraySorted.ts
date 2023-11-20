/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target number.
 * Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
 *
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 * Your solution must use only constant extra space.
 *
 * @see https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * O(n) solution using two pointers
 */
export default function twoSumArraySorted(
  nums: number[],
  target: number
): number[] {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    const left = nums[leftPointer];
    const right = nums[rightPointer];
    const sum = left + right;

    if (sum === target) {
      return [leftPointer, rightPointer];
      // If sum is greater than target, so decrease the sum by moving the right pointer to a lower value
    } else if (sum > target) {
      rightPointer -= 1;
      // Else sum is not great enough, so increase the sum by moving the left pointer to a higher value
    } else {
      leftPointer += 1;
    }
  }

  return [];
}
