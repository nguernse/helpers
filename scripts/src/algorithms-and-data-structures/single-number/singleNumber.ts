/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 *
 * @example
 * Input: nums = [2,2,1]
 * Output: 1
 *
 * @example
 *
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 *
 * @example
 *
 * Input: nums = [1]
 * Output: 1
 *
 * @see https://leetcode.com/problems/single-number/
 */
export default function singleNumber(nums: number[]): number {
  // hashmap solution
  // const map = new Map();

  // for (let i = 0; i < nums.length; i += 1) {
  //   if (map.has(nums[i])) {
  //     map.delete(nums[i]);
  //   } else {
  //     map.set(nums[i], nums[i]);
  //   }
  // }

  // return map.values().next().value;

  // bitwise solution
  return nums.reduce((acc, curr) => acc ^ curr, 0);
}
