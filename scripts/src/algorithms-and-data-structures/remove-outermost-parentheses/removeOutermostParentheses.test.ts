import removeOutermostParentheses from "./removeOutermostParentheses";

describe("Remove Outermost Parentheses", () => {
  it.each([
    { input: "", output: "" },
    { input: "()", output: "" },
    { input: "(())", output: "()" },
    { input: "()()", output: "" },
    { input: "(())", output: "()" },
    { input: "(()())", output: "()()" },
    { input: "(())()", output: "()" },
    { input: "(()())(())", output: "()()()" },
    { input: "(()())(())(()(()))", output: "()()()()(())" },
  ])(
    "removeOutermostParentheses('$input') -> '$output'",
    ({ input, output }) => {
      const result = removeOutermostParentheses(input);

      expect(result).toEqual(output);
    }
  );
});
