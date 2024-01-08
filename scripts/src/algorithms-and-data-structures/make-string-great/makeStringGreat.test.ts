import makeStringGreat from "./makeStringGreat";

describe("Make The String Great", () => {
  it.each([
    { input: "", output: "" },
    { input: "A", output: "A" },
    { input: "AB", output: "AB" },
    { input: "Aa", output: "" },
    { input: "aA", output: "" },
    { input: "leEeetcode", output: "leetcode" },
    { input: "abBAcC", output: "" },
  ])('makeStringGreats("$input") => $output', ({ input, output }) => {
    const result = makeStringGreat(input);

    expect(result).toBe(output);
  });
});
