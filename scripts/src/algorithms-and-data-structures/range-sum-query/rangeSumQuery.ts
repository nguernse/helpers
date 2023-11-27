/**
 * Given an integer array nums, handle multiple queries of the following type:
 *  - Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
 *
 * Implement the NumArray class:
 *  - NumArray(int[] nums) Initializes the object with the integer array nums.
 *  - int sumRange(int left, int right) Returns the sum of the elements of nums between
 *    indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 *
 * @see https://leetcode.com/problems/range-sum-query-immutable/
 */
export class NumArray {
  nums: number[];
  sumCache: number[];

  constructor(nums: number[]) {
    this.nums = nums;

    // Cache sums of nums array such that searching for a summation of a range is O(1)
    this.sumCache = new Array(nums.length + 1).fill(0);

    for (let i = 0; i < nums.length; i += 1) {
      this.sumCache[i + 1] = this.sumCache[i] + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    return this.sumCache[right + 1] - this.sumCache[left];
  }
}
