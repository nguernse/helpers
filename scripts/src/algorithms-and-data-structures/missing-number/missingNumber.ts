/**
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * @param nums
 */
export default function missingNumber(nums: number[]): number {
  const n = nums.length; // max of the array
  const sum = nums.reduce((acc, curr) => acc + curr, 0);

  // formula for sum of range is ((max + min)*(max - min + 1)) / 2
  // since min is always 0, it can reduce to (max * (max + 1)) / 2
  const rangeSum = (n * (n + 1)) / 2;

  return rangeSum - sum;
}
