/**
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * return an array of all the integers in the range [1, n] that do not appear in nums.
 *
 * @example
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 *
 * @example
 * Input: nums = [1,1]
 * Output: [2]
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 105
 * 1 <= nums[i] <= n
 *
 * @param nums number[] Array of numbers
 *
 * @return number[]
 *
 * @see https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */
export default function findDisappearedNumbers(nums: number[]): number[] {
  const numSet = new Set(nums);
  const result: number[] = [];

  for (let i = 1; i <= nums.length; i += 1) {
    if (!numSet.has(i)) result.push(i);
  }

  return result;
}
