/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * s and t consist of lowercase English letters.
 *
 * @see https://leetcode.com/problems/valid-anagram/description/
 */
export default function validAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charMap: Record<string, number> = {};

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];

    if (charMap[char] === undefined) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }

  for (let i = 0; i < t.length; i += 1) {
    const char = t[i];

    if (charMap[char] === undefined) {
      return false;
    }

    charMap[char] -= 1;

    if (charMap[char] < 0) return false;
  }

  return true;
}
