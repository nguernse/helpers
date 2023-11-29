/**
 * Given a string s, return the number of palindromic substrings in it.
 * A string is a palindrome when it reads the same backward as forward.
 * A substring is a contiguous sequence of characters within the string.
 *
 * @see https://leetcode.com/problems/palindromic-substrings/
 *
 * O(n^2)
 */
export default function palindromeSubstrings(s: string): number {
  // return palindromeDynamicProgramming(s);
  return palindromeInnerExpansion(s);
}

/**
 * This approach will use each character in the string as the center and expand outward,
 * determining if the substrings are palindromes.
 *
 *
 * @see https://www.youtube.com/watch?v=4RACzI5-du8
 *
 * O(n^2), O(1) space
 */
export function palindromeInnerExpansion(s: string): number {
  let count = 0;

  // Outer loop will iterate over each character in the string
  for (let sIdx = 0; sIdx < s.length; sIdx += 1) {
    // check odd length palindromes, this has a center for each character
    // if you have a string "racecar", it would check each odd character substring ("r", "a", "c", etc.), and expand to the odd length
    count += countPalindrome(s, sIdx, sIdx);

    // check even length palindromes, this has no center
    // if you have a string "racecar", it would check each two character substring ("ra", "ac", "ce", etc.), and expand to the even length
    count += countPalindrome(s, sIdx, sIdx + 1);
  }

  return count;
}

/**
 * This helper function will count the number of palindromes by expanding outward from the starting center.
 * If left and right start at the same index, then the substring is odd length.
 * If left and right start at adjacent indices, then the substring is even length.
 */
function countPalindrome(s: string, left: number, right: number): number {
  let count = 0;

  // Expand outward from the center while the characters are equal
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    count += 1;
    left -= 1;
    right += 1;
  }

  return count;
}

/**
 * This approach fills a 2D array with boolean values
 * using dynamic programming to determine if a substring is a palindrome.
 *
 * This helps to avoid the repeated work of checking if a substring is a palindrome,
 * because we can use the previous inner substrings to determine if the outer substring is a palindrome.
 *
 * O(n^2), O(n^2) space
 *
 * @see https://www.youtube.com/watch?v=biHfMygdoCE
 */
export function palindromeDynamicProgramming(s: string): number {
  // Generate a 2D array of n x n, where n is the length of the string.
  // Initialize to false, since we don't know if the substrings are palindromes yet.
  const dp = Array.from({ length: s.length }, () =>
    Array(s.length).fill(false)
  );

  let count = 0;

  // Outer loop will iterate over each character in the string
  for (let sIdx = 0; sIdx < s.length; sIdx += 1) {
    // Inner loop will iterate over each substring starting at the current character
    for (let row = 0, col = sIdx; col < s.length; row += 1, col += 1) {
      // This is the inner diagonal, which is always true, because it is a single character
      if (sIdx === 0) {
        dp[row][col] = true;
        // This is the second inner diagonal, which is two characters, so we can compare them
      } else if (sIdx === 1) {
        if (s[row] === s[col]) {
          dp[row][col] = true;
        } else {
          dp[row][col] = false; // don't need this since array is all false to start
        }
        // This is the remaining diagonals, which are three or more characters,
        // this is where we can begin to use the previous inner substrings to determine if the outer substring is a palindrome
      } else {
        // compare outermost characters, if true, check the previously computed inner substring
        // this is the reverse diagonal, so go back one column and forward one row
        if (s[row] === s[col]) {
          dp[row][col] = dp[row + 1][col - 1];
          // if outermost characters are not equal, then the substring is not a palindrome
        } else {
          dp[row][col] = false; // don't need this since array is all false to start
        }
      }

      // Once computing the dp coordinates, check if true and increment count
      if (dp[row][col]) {
        count += 1;
      }
    }
  }

  return count;
}
