import shuffleString from "./shuffleString";

describe("Shuffle String", () => {
  it.each([
    {
      input: { word: "codeleet", indices: [4, 5, 6, 7, 0, 2, 1, 3] },
      output: "leetcode",
    },
    {
      input: { word: "ab", indices: [1, 0] },
      output: "ba",
    },
    {
      input: { word: "abc", indices: [0, 1, 2] },
      output: "abc",
    },
  ])(
    "shuffleString('$input.word', '$input.indices') => $output",
    ({ input: { word, indices }, output }) => {
      const result = shuffleString(word, indices);

      expect(result).toBe(output);
    }
  );
});
