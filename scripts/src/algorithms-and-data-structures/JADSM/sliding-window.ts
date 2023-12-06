/**
 * Sliding Window Pattern
 *
 * Find the maximum sum of n consecutive elements in an array.
 *
 * Big O(n) - only iterates through the array once
 */
function maxSubarraySum(arr: number[], n: number): number | null {
  if (arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i += 1) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = n; i < arr.length; i += 1) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// console.log('maxSubarraySum', maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log('maxSubarraySum', maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log('maxSubarraySum', maxSubarraySum([4, 2, 1, 6], 1)); // 6
// console.log('maxSubarraySum', maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
// console.log('maxSubarraySum', maxSubarraySum([], 4)); // null

// Big O(n)
function longestCharacterSequence(str: string): number {
  if (str.length === 0) return 0;
  if (str.length === 1) return 1;

  let window = new Set<string>();
  let windowStart = 0;
  let max = 0;

  for (let i = 0; i < str.length; i += 1) {
    while (window.has(str[i])) {
      window.delete(str[windowStart]);
      windowStart += 1;
    }

    window.add(str[i]);

    max = Math.max(max, window.size);
  }

  return max;
}

// console.log("longestCharacterSequence", longestCharacterSequence("")); // 0
// console.log("longestCharacterSequence", longestCharacterSequence("abcabcbb")); // 3
// console.log("longestCharacterSequence", longestCharacterSequence("bbb")); // 1
// console.log("longestCharacterSequence", longestCharacterSequence("pwwkew")); // 3

/**
 * Challenge: minSubArrayLen
 *
 * Write a function which takes two parameters: an array of positive integers and a positive integer.
 * This should return the minimal length of a continguous subarray of which the sum is greater than or equal to the integer passed to the function.
 *
 * If there isn't one, return 0 instead.
 */
function minSubArray(nums: number[], target: number): number {
  if (nums.length === 0) return 0;

  let windowStart = 0;
  let windowEnd = 0;
  let sum = 0;
  let minLength = Infinity;

  // [2, 3, 1, 2, 4, 3], 7 -> 2
  while (windowEnd < nums.length) {
    sum += nums[windowEnd];

    // if sum is less than target, expand window to the right
    if (sum < target) {
      windowEnd += 1;
      // if sum is greater than or equal to target, shrink window from the left
    } else {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);

      // make sure to substract windowStart, since shrinking from left
      // but also subtract windowEnd, since we re-add it at the beginning
      sum = sum - nums[windowStart++] - nums[windowEnd];
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(
  "minSubArray([2, 3, 1, 2, 4, 3], 7) => 2",
  minSubArray([2, 3, 1, 2, 4, 3], 7)
); // 2
console.log(
  "minSubArray([2, 1, 6, 5, 4], 9) => 2",
  minSubArray([2, 1, 6, 5, 4], 9)
); // 2
console.log(
  "minSubArray([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) => 1",
  minSubArray([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)
); // 1
console.log(
  "minSubArray([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) => 3",
  minSubArray([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)
); // 3
console.log(
  "minSubArray([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) => 5",
  minSubArray([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)
); // 5
console.log(
  "minSubArray([4, 3, 3, 8, 1, 2, 3], 11) => 2",
  minSubArray([4, 3, 3, 8, 1, 2, 3], 11)
); // 2
console.log("minSubArray([1], 11) => 0", minSubArray([1], 11)); // 0
console.log("minSubArray([1], 1) => 1", minSubArray([1], 1)); // 1
console.log(
  "minSubArray([1, 1, 1, 1, 1], 1) => 1",
  minSubArray([1, 1, 1, 1, 1], 1)
); // 1
