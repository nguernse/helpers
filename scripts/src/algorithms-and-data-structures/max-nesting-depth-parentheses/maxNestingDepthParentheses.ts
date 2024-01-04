/**
 * A string is a valid parentheses string (denoted VPS) if it meets one of the following:
 * It is an empty string "", or a single character not equal to "(" or ")"
 * It can be written as AB (A concatenated with B), where A and B are VPS's, or
 * It can be written as (A), where A is a VPS.
 *
 * We can similarly define the nesting depth depth(S) of any VPS S as follows:
 *  depth("") = 0
 *  depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
 *  depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
 *  depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
 *
 * For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.
 * Given a VPS represented as string s, return the nesting depth of s.
 * @see https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
 */
export default function maxNestingDepthParentheses(text: string): number {
  if (text.length === 0) return 0;

  const stack: string[] = [];

  // keep track of max depth
  let depth: number = 0;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];

    if (char === "(") {
      stack.push(char);

      // if current stack length greater than current max
      // we found a larger nested depth
      // because with more '(' in the stack, it signals the depth
      depth = Math.max(depth, stack.length);
    }

    if (char === ")") stack.pop();
  }

  return depth;
}
