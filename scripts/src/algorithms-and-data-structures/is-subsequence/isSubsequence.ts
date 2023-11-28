/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by
 * deleting some (can be none) of the characters without disturbing the relative positions
 * of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * @see https://leetcode.com/problems/is-subsequence/
 */
export default function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) return false;

  let sIndex = 0;

  for (let i = 0; i < t.length; i += 1) {
    if (s[sIndex] === t[i]) {
      sIndex += 1;
    }

    // Exit early is sequence is met
    if (sIndex === s.length) return true;
  }

  return sIndex === s.length;
}
