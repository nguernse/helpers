/**
 * You are given a string s consisting only of uppercase English letters.
 *
 * You can apply some operations to this string where,
 * in one operation, you can remove any occurrence of one of the substrings
 * "AB" or "CD" from s.
 *
 * Return the minimum possible length of the resulting string that you can obtain.
 *
 * Note that the string concatenates after removing the
 * substring and could produce new "AB" or "CD" substrings.
 *
 * @see https://leetcode.com/problems/minimum-string-length-after-removing-substrings/
 */
export default function minStringAfterSubstring(s: string): number {
  if (s.length <= 1) return s.length;

  const stack: string[] = [s[0]];

  for (let i = 1; i < s.length; i += 1) {
    const currentChar = s[i];
    const prevChar = stack[stack.length - 1];
    const combo = prevChar + currentChar;

    if (combo === "AB" || combo === "CD") {
      stack.pop();
    } else {
      stack.push(currentChar);
    }
  }

  return stack.length;
}
