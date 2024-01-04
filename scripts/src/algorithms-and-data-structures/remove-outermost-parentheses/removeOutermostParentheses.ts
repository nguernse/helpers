/**
 * A valid parentheses string is either empty "", "(" + A + ")", or A + B,
 * where A and B are valid parentheses strings, and + represents string concatenation.
 *
 * For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
 * A valid parentheses string s is primitive if it is nonempty,
 * and there does not exist a way to split it into s = A + B,
 * with A and B nonempty valid parentheses strings.
 *
 * Given a valid parentheses string s,
 * consider its primitive decomposition: s = P1 + P2 + ... + Pk,
 * where Pi are primitive valid parentheses strings.
 *
 * Return s after removing the outermost parentheses of every
 * primitive string in the primitive decomposition of s.
 *
 * @see https://leetcode.com/problems/remove-outermost-parentheses/
 */
export default function removeOutermostParentheses(text: string): string {
  if (text.length === 0) return text;
  let result: string = "";
  let stack: string[] = [];

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];

    if (char === ")") stack.pop();
    if (stack.length > 0) result += char;
    if (char === "(") stack.push(char);
  }

  return result;
}
