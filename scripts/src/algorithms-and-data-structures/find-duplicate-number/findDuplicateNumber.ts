/**
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * There is only one repeated number in nums, return this repeated number.
 * You must solve the problem without modifying the array nums and uses only constant extra space.
 *
 * @see https://leetcode.com/problems/find-the-duplicate-number/
 */
export default function findDuplicateNumber(nums: number[]): number {
  const arr = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    if (arr[num] === 0) {
      arr[num] = 1;
    } else {
      return num;
    }
  }

  return -1;
}
