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

console.log("longestCharacterSequence", longestCharacterSequence("")); // 0
console.log("longestCharacterSequence", longestCharacterSequence("abcabcbb")); // 3
console.log("longestCharacterSequence", longestCharacterSequence("bbb")); // 1
console.log("longestCharacterSequence", longestCharacterSequence("pwwkew")); // 3
