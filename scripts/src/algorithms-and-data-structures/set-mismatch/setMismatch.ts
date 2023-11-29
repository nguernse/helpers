/**
 * You have a set of integers s, which originally contains all the numbers from 1 to n.
 * Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set,
 * which results in repetition of one number and loss of another number.
 *
 * You are given an integer array nums representing the data status of this set after the error.
 * Find the number that occurs twice and the number that is missing and return them in the form of an array.
 *
 * @see https://leetcode.com/problems/set-mismatch/
 *
 * O(n) time complexity
 */
export default function setMismatch(nums: number[]): number[] {
  let missing: number = 0;
  let duplicate: number = 0;
  // use a hash map to track numbers and duplicates
  let map: { [key: number]: number } = {};

  // iterate over nums and populate map
  // if a number is already in the map, it is a duplicate
  nums.forEach((num) => {
    if (map[num] === undefined) {
      map[num] = 1;
    } else {
      map[num] += 1;
      duplicate = num;
    }
  });

  // iterate the range of 1 to n (nums.length)
  // Find missing number by checking if the number is in the map
  for (let i = 1; i <= nums.length; i += 1) {
    if (map[i] === undefined) {
      missing = i;
      break;
    }
  }

  return [duplicate, missing];
}
