/**
 *
 * @see https://leetcode.com/problems/shuffle-string/description/
 */
export default function shuffleString(s: string, indices: number[]): string {
  let result: string[] = Array.from({ length: s.length }, () => "");

  for (let i = 0; i < indices.length; i += 1) {
    result[indices[i]] = s[i];
  }

  return result.join("");
}
