/**
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * @param nums number[] An array of integers
 * @return boolean
 *
 * @see https://leetcode.com/problems/contains-duplicate/
 */
export default function containsDuplicates(nums: number[]): boolean {
  const matches = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    if (matches.has(nums[i])) return true;

    matches.add(nums[i]);
  }

  return false;
}
