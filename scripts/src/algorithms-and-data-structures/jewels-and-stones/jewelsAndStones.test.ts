import numJewelsInStones from "./jewelsAndStones";

describe("Jewels and Stones", () => {
  it.each([
    { input: { jewels: "", stones: "" }, output: 0 },
    { input: { jewels: "aA", stones: "aAAbbb" }, output: 3 },
    { input: { jewels: "z", stones: "ZZ" }, output: 0 },
    { input: { jewels: "aAbBcC", stones: "abc" }, output: 3 },
    { input: { jewels: "a", stones: "a" }, output: 1 },
  ])(
    "numJewelsInStones('$input.jewels', '$input.stones') => $output",
    ({ input: { jewels, stones }, output }) => {
      const result = numJewelsInStones(jewels, stones);

      expect(result).toBe(output);
    }
  );
});
