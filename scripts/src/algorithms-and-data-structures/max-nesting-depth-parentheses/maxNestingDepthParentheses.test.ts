import maxNestingDepthParentheses from "./maxNestingDepthParentheses";

describe("Remove Outermost Parentheses", () => {
  it.each([
    { input: "", output: 0 },
    { input: "A", output: 0 },
    { input: "(1+(2*3)+((8)/4))+1", output: 3 },
    { input: "(1)+((2))+(((3)))", output: 3 },
  ])(
    "maxNestingDepthParentheses('$input') -> '$output'",
    ({ input, output }) => {
      const result = maxNestingDepthParentheses(input);

      expect(result).toEqual(output);
    }
  );
});
