import validParentheses from "./validParentheses";

describe("Valid parentheses", () => {
  it.each([
    { input: "", output: false },
    { input: "(", output: false },
    { input: "([)]", output: false },
    { input: "(]", output: false },
    { input: "()", output: true },
    { input: "()[]{}", output: true },
    { input: "(())", output: true },
    { input: "[({})]", output: true },
  ])('validParentheses("$input") -> $output', ({ input, output }) => {
    const result = validParentheses(input);

    expect(result).toBe(output);
  });
});
