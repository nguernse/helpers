/**
 * Given a string s. Return all the words vertically in the
 * same order in which they appear in s.
 *
 * Words are returned as a list of strings,
 * complete with spaces when is necessary.
 * (Trailing spaces are not allowed).
 *
 * Each word would be put on only one column
 * and that in one column there will be only one word.
 *
 * @see https://leetcode.com/problems/print-words-vertically/
 */
export default function printWordsVertically(s: string): string[] {
  const words: string[] = s.split(/\s+/);
  const result: string[] = [];
  const n: number = words.reduce((acc, word) => Math.max(acc, word.length), 0);

  for (let i = 0; i < n; i += 1) {
    let tempWord = "";

    for (let j = 0; j < words.length; j += 1) {
      const char: string | undefined = words[j][i];

      tempWord += char === undefined ? " " : char;
    }

    result.push(tempWord.trimEnd());
  }

  return result;
}
