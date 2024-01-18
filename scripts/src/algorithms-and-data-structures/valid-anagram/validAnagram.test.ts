import validAnagram from "./validAnagram";

describe("Valid Anagram", () => {
  it.each([
    { input: { word: "", target: "" }, output: true },
    { input: { word: "a", target: "a" }, output: true },
    { input: { word: "ab", target: "ba" }, output: true },
    { input: { word: "anagram", target: "nagaram" }, output: true },
    { input: { word: "apple", target: "papel" }, output: true },
    { input: { word: "zoo", target: "o" }, output: false },
    { input: { word: "rat", target: "car" }, output: false },
    { input: { word: "arm", target: "aaa" }, output: false },
    { input: { word: "aaa", target: "bbb" }, output: false },
    { input: { word: "aab", target: "bba" }, output: false },
  ])(
    "validAnagram('$input.word', '$input.target') => $output",
    ({ input: { word, target }, output }) => {
      const result = validAnagram(word, target);

      expect(result).toBe(output);
    }
  );
});
