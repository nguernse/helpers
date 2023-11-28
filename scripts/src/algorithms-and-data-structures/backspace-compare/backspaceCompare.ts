/**
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors.
 * '#' means a backspace character.
 * Note that after backspacing an empty text, the text will continue empty.
 *
 * @see https://leetcode.com/problems/backspace-string-compare/
 */
export default function backspaceCompare(s: string, t: string): boolean {
  return backspaceReduce(s) === backspaceReduce(t);
}

function backspaceReduce(str: string): string {
  let result = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === "#") {
      result.pop();
    } else {
      result.push(str[i]);
    }
  }

  return result.join("");
}
