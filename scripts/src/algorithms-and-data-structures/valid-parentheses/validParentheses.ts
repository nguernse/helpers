/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *  1. Open brackets must be closed by the same type of brackets.
 *  2. Open brackets must be closed in the correct order.
 *  3. Every close bracket has a corresponding open bracket of the same type.
 *
 * @see https://leetcode.com/problems/valid-parentheses/
 */
const matchingParentheses: Record<string, string> = {
  ")": "(",
  "]": "[",
  "}": "{",
};

export default function validParentheses(text: string): boolean {
  // if the length isn't even or empty, then it cannot be valid by default
  if (text.length === 0 || text.length % 2 !== 0) return false;

  const stack: string[] = [];

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    const prevParenthesis = stack.pop();

    if (
      prevParenthesis === undefined ||
      prevParenthesis !== matchingParentheses[char]
    ) {
      return false;
    }
  }

  return stack.length === 0;
}
