/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @see https://leetcode.com/problems/two-sum/
 */
export default function twoSumArray(nums: number[], target: number): number[] {
  // O(n) solution using hash maps
  const remainderHash: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    const remainder = target - num;

    if (remainder in remainderHash) {
      return [remainderHash[remainder], i];
    }

    remainderHash[num] = i;
  }

  // // O(n^2) solution
  // for (let i = 0; i < nums.length; i += 1) {
  //   const a = nums[i];
  //   const remainder = target - a;

  //   for (let j = i + 1; j < nums.length; j += 1) {
  //     const b = nums[j];

  //     if (b === remainder) {
  //       return [i, j];
  //     }
  //   }
  // }

  return [];
}
