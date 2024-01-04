/**
 * The next greater element of some element x in an array is the
 * first greater element that is to the right of x in the same array.
 *
 * You are given two distinct 0-indexed integer arrays nums1 and nums2,
 * where nums1 is a subset of nums2.
 *
 * For each 0 <= i < nums1.length,
 * find the index j such that nums1[i] == nums2[j]
 * and determine the next greater element of nums2[j] in nums2.
 * If there is no next greater element, then the answer for this query is -1.
 *
 * Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
 *
 * @see https://leetcode.com/problems/next-greater-element-i/
 */
export default function nextGreaterElement(
  nums1: number[],
  nums2: number[]
): number[] {
  const answer: number[] = new Array(nums1.length).fill(-1);
  const stack: number[] = [];
  const greaterValuesMap: Record<number, number> = {};

  // Go through nums2 and find the next greatest value per item
  // place those in the greaterValuesMap if one exists
  for (let i = 0; i < nums2.length; i += 1) {
    const num = nums2[i];

    while (stack.length > 0 && num > stack[stack.length - 1]) {
      greaterValuesMap[stack[stack.length - 1]] = num;
      stack.pop();
    }

    stack.push(num);
  }

  // Now iterate through the nums1 array and find any matches in greaterValuesMap
  // If none, keep the -1 value in the already populated answer array
  for (let i = 0; i < nums1.length; i += 1) {
    // lookup the nums1[i] value in the map, which will point to the next greatest value in nums2 array
    const num = greaterValuesMap[nums1[i]];

    // an item will not be undefined if it is in the map
    if (num !== undefined) {
      answer[i] = num;
    }
  }

  return answer;
}
